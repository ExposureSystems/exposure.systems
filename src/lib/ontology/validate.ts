import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  getCategoryKind,
  getParentCategoryCode,
  isCategoryCode,
} from "./category-codes";

type MatrixEntry = {
  primary: string[];
  secondary: string[];
};

type PatternLensMatrix = Record<string, MatrixEntry>;

type CheckInputVocabulary = {
  version: number;
  elements: string[];
  gap_types: string[];
  finding_shape: string;
};

type CheckInputMatrixEntry = {
  patterns: {
    primary: string[];
    secondary: string[];
  };
};

type CheckInputMatrix = Record<string, CheckInputMatrixEntry>;

type OntologyRelease = {
  ontology_release: string;
  released_at: string;
  public_state: string;
  notes: string;
};

const ontologyReleasePath = "src/ontology/ontology-release.json";
const matrixPath = "src/ontology/pattern-lens-matrix.json";
const checkInputVocabularyPath = "src/ontology/check-input-vocabulary.json";
const checkInputMatrixPath = "src/ontology/check-input-matrix.json";

const patternsDir = "src/content/patterns";
const lensesDir = "src/content/lenses";
const issuesDir = "src/content/issues";
const categoriesDir = "src/content/categories";

const forbiddenIssueFields = [
  "lenses",
  "related_issues",
  "derived_lenses",
  "aift_cards",
];

const allowedPublicStates = new Set(["current", "deprecated", "superseded", "archived"]);

function fail(errors: string[]) {
  console.error("\nWorkbench ontology validation failed:\n");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  console.error("");
  process.exit(1);
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isKebabCase(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function isPatternCode(value: string) {
  return /^PAT-\d{4}$/.test(value);
}

function isLensCode(value: string) {
  return /^LEN-\d{4}$/.test(value);
}

function isIssueCode(value: string) {
  return /^ISS-\d{4}$/.test(value);
}

function isEntryVersion(value: string) {
  return /^\d+\.\d+\.\d+$/.test(value);
}

function isUtcDateTime(value: string) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(value);
}

function validateVersionFields(
  errors: string[],
  kind: string,
  filenameSlug: string,
  data: Record<string, unknown>
) {
  const entryVersion = data.entry_version;
  const updatedAt = data.updated_at;

  if (typeof entryVersion !== "string" || entryVersion.length === 0) {
    errors.push(`${kind} "${filenameSlug}" must declare entry_version.`);
  } else if (!isEntryVersion(entryVersion)) {
    errors.push(
      `${kind} "${filenameSlug}" entry_version "${entryVersion}" must use major.minor.patch format.`
    );
  }

  if (typeof updatedAt !== "string" || updatedAt.length === 0) {
    errors.push(`${kind} "${filenameSlug}" must declare updated_at.`);
  } else if (!isUtcDateTime(updatedAt)) {
    errors.push(
      `${kind} "${filenameSlug}" updated_at "${updatedAt}" must use UTC format YYYY-MM-DDTHH:mm:ssZ.`
    );
  }
}

function readJsonFile(filePath: string): unknown {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function validateOntologyRelease(value: unknown): asserts value is OntologyRelease {
  const errors: string[] = [];

  if (!isObject(value)) {
    fail(["Ontology release metadata must be a JSON object."]);
  }

  if (
    typeof value.ontology_release !== "string" ||
    !isEntryVersion(value.ontology_release)
  ) {
    errors.push("Ontology release metadata must declare ontology_release as major.minor.patch.");
  }

  if (typeof value.released_at !== "string" || !isUtcDateTime(value.released_at)) {
    errors.push(
      "Ontology release metadata must declare released_at as UTC format YYYY-MM-DDTHH:mm:ssZ."
    );
  }

  if (
    typeof value.public_state !== "string" ||
    !allowedPublicStates.has(value.public_state)
  ) {
    errors.push(
      `Ontology release metadata public_state must be one of: ${[...allowedPublicStates].join(", ")}.`
    );
  }

  if (typeof value.notes !== "string" || value.notes.length === 0) {
    errors.push("Ontology release metadata must declare notes.");
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateMatrix(matrix: unknown): asserts matrix is PatternLensMatrix {
  const errors: string[] = [];

  if (!isObject(matrix)) {
    fail(["Matrix must be a JSON object."]);
  }

  for (const [patternSlug, entry] of Object.entries(matrix)) {
    if (!isKebabCase(patternSlug)) {
      errors.push(`Matrix pattern "${patternSlug}" must be kebab-case.`);
    }

    if (!isObject(entry)) {
      errors.push(`Matrix entry "${patternSlug}" must be an object.`);
      continue;
    }

    if (!Array.isArray(entry.primary)) {
      errors.push(`Matrix entry "${patternSlug}" must include primary[].`);
      continue;
    }

    if (!Array.isArray(entry.secondary)) {
      errors.push(`Matrix entry "${patternSlug}" must include secondary[].`);
      continue;
    }

    const primary = entry.primary;
    const secondary = entry.secondary;

    if (primary.length < 1 || primary.length > 2) {
      errors.push(
        `Matrix entry "${patternSlug}" primary[] must contain 1-2 lenses.`
      );
    }

    if (secondary.length > 2) {
      errors.push(
        `Matrix entry "${patternSlug}" secondary[] must contain 0-2 lenses.`
      );
    }

    const allLenses = [...primary, ...secondary];

    for (const lensSlug of allLenses) {
      if (typeof lensSlug !== "string" || !isKebabCase(lensSlug)) {
        errors.push(
          `Matrix entry "${patternSlug}" has invalid lens slug "${String(lensSlug)}".`
        );
      }
    }

    if (new Set(primary).size !== primary.length) {
      errors.push(`Matrix entry "${patternSlug}" primary[] contains duplicate lenses.`);
    }

    if (new Set(secondary).size !== secondary.length) {
      errors.push(`Matrix entry "${patternSlug}" secondary[] contains duplicate lenses.`);
    }

    for (const lensSlug of primary) {
      if (secondary.includes(lensSlug)) {
        errors.push(
          `Matrix entry "${patternSlug}" lists "${lensSlug}" in both primary[] and secondary[].`
        );
      }
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function getMarkdownFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => path.join(dir, file));
}

function getMarkdownSlugs(dir: string) {
  const slugs = getMarkdownFiles(dir).map((file) => path.basename(file, ".md"));
  return new Set(slugs);
}

function readFrontmatter(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  return matter(raw).data as Record<string, unknown>;
}

function getMatrixLensSlugs(matrix: PatternLensMatrix) {
  const matrixLensSlugs = new Set<string>();

  for (const entry of Object.values(matrix)) {
    for (const lensSlug of [...entry.primary, ...entry.secondary]) {
      matrixLensSlugs.add(lensSlug);
    }
  }

  return matrixLensSlugs;
}

function validateMatrixPatternsHaveFiles(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const patternFileSlugs = getMarkdownSlugs(patternsDir);

  for (const patternSlug of Object.keys(matrix)) {
    if (!patternFileSlugs.has(patternSlug)) {
      errors.push(
        `Matrix pattern "${patternSlug}" is missing src/content/patterns/${patternSlug}.md.`
      );
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateNoExtraPatternFiles(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const matrixPatternSlugs = new Set(Object.keys(matrix));
  const patternFileSlugs = getMarkdownSlugs(patternsDir);

  for (const patternSlug of patternFileSlugs) {
    if (!matrixPatternSlugs.has(patternSlug)) {
      errors.push(`Pattern file "${patternSlug}.md" is not defined in the matrix.`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateMatrixLensesHaveFiles(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const lensFileSlugs = getMarkdownSlugs(lensesDir);
  const matrixLensSlugs = getMatrixLensSlugs(matrix);

  for (const lensSlug of matrixLensSlugs) {
    if (!lensFileSlugs.has(lensSlug)) {
      errors.push(
        `Matrix lens "${lensSlug}" is missing src/content/lenses/${lensSlug}.md.`
      );
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateNoExtraLensFiles(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const lensFileSlugs = getMarkdownSlugs(lensesDir);
  const matrixLensSlugs = getMatrixLensSlugs(matrix);

  for (const lensSlug of lensFileSlugs) {
    if (!matrixLensSlugs.has(lensSlug)) {
      errors.push(`Lens file "${lensSlug}.md" is not referenced by the matrix.`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validatePatternFrontmatter() {
  const errors: string[] = [];
  const seenCodes = new Map<string, string>();

  for (const patternFile of getMarkdownFiles(patternsDir)) {
    const filenameSlug = path.basename(patternFile, ".md");
    const data = readFrontmatter(patternFile);

    const slug = data.slug;
    const code = data.code;

    validateVersionFields(errors, "Pattern", filenameSlug, data);

    if (typeof slug !== "string" || slug.length === 0) {
      errors.push(`Pattern "${filenameSlug}" must declare slug.`);
    } else {
      if (!isKebabCase(slug)) {
        errors.push(`Pattern "${filenameSlug}" slug "${slug}" must be kebab-case.`);
      }

      if (slug !== filenameSlug) {
        errors.push(`Pattern "${filenameSlug}" frontmatter slug must match filename.`);
      }
    }

    if (typeof code !== "string" || code.length === 0) {
      errors.push(`Pattern "${filenameSlug}" must declare code.`);
    } else {
      if (!isPatternCode(code)) {
        errors.push(`Pattern "${filenameSlug}" code "${code}" must match PAT-####.`);
      }

      const previous = seenCodes.get(code);
      if (previous) {
        errors.push(`Pattern code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenCodes.set(code, filenameSlug);
      }
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateLensFrontmatter() {
  const errors: string[] = [];
  const seenCodes = new Map<string, string>();

  for (const lensFile of getMarkdownFiles(lensesDir)) {
    const filenameSlug = path.basename(lensFile, ".md");
    const data = readFrontmatter(lensFile);

    const slug = data.slug;
    const code = data.code;

    validateVersionFields(errors, "Lens", filenameSlug, data);

    if (typeof slug !== "string" || slug.length === 0) {
      errors.push(`Lens "${filenameSlug}" must declare slug.`);
    } else {
      if (!isKebabCase(slug)) {
        errors.push(`Lens "${filenameSlug}" slug "${slug}" must be kebab-case.`);
      }

      if (slug !== filenameSlug) {
        errors.push(`Lens "${filenameSlug}" frontmatter slug must match filename.`);
      }
    }

    if (typeof code !== "string" || code.length === 0) {
      errors.push(`Lens "${filenameSlug}" must declare code.`);
    } else {
      if (!isLensCode(code)) {
        errors.push(`Lens "${filenameSlug}" code "${code}" must match LEN-####.`);
      }

      const previous = seenCodes.get(code);
      if (previous) {
        errors.push(`Lens code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenCodes.set(code, filenameSlug);
      }
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function getPatternCodeLookup() {
  const errors: string[] = [];
  const patternCodes = new Map<string, string>();

  for (const patternFile of getMarkdownFiles(patternsDir)) {
    const filenameSlug = path.basename(patternFile, ".md");
    const data = readFrontmatter(patternFile);
    const code = data.code;

    if (typeof code !== "string") {
      continue;
    }

    const previous = patternCodes.get(code);
    if (previous) {
      errors.push(`Pattern code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
    } else {
      patternCodes.set(code, filenameSlug);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }

  return patternCodes;
}

function validateCategoryFrontmatter() {
  const errors: string[] = [];
  const seenCodes = new Map<string, string>();

  for (const categoryFile of getMarkdownFiles(categoriesDir)) {
    const filenameSlug = path.basename(categoryFile, ".md");
    const data = readFrontmatter(categoryFile);

    const slug = data.slug;
    const code = data.code;

    validateVersionFields(errors, "Category", filenameSlug, data);

    if (typeof slug !== "string" || slug.length === 0) {
      errors.push(`Category "${filenameSlug}" must declare slug.`);
    } else {
      if (!isKebabCase(slug)) {
        errors.push(`Category "${filenameSlug}" slug "${slug}" must be kebab-case.`);
      }

      if (slug !== filenameSlug) {
        errors.push(`Category "${filenameSlug}" frontmatter slug must match filename.`);
      }
    }

    if (typeof code !== "string" || code.length === 0) {
      errors.push(`Category "${filenameSlug}" must declare code.`);
    } else {
      if (!isCategoryCode(code)) {
        errors.push(`Category "${filenameSlug}" code "${code}" must match CAT-####.`);
      }

      const previous = seenCodes.get(code);
      if (previous) {
        errors.push(`Category code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenCodes.set(code, filenameSlug);
      }
    }
  }

  for (const [code, filenameSlug] of seenCodes.entries()) {
    if (getCategoryKind(code) === "subcategory") {
      const parentCode = getParentCategoryCode(code);

      if (!seenCodes.has(parentCode)) {
        errors.push(
          `Category "${filenameSlug}" code "${code}" is a subcategory, but parent category "${parentCode}" is missing.`
        );
      }
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function getCategoryCodeLookup() {
  const errors: string[] = [];
  const categoryCodes = new Map<string, string>();

  for (const categoryFile of getMarkdownFiles(categoriesDir)) {
    const filenameSlug = path.basename(categoryFile, ".md");
    const data = readFrontmatter(categoryFile);
    const code = data.code;

    if (typeof code !== "string") {
      continue;
    }

    const previous = categoryCodes.get(code);
    if (previous) {
      errors.push(`Category code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
    } else {
      categoryCodes.set(code, filenameSlug);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }

  return categoryCodes;
}

function validateIssues(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const matrixPatternSlugs = new Set(Object.keys(matrix));
  const categorySlugs = getMarkdownSlugs(categoriesDir);
  const categoryCodes = getCategoryCodeLookup();
  const issueFiles = getMarkdownFiles(issuesDir);
  const seenCodes = new Map<string, string>();

  for (const issueFile of issueFiles) {
    const filenameSlug = path.basename(issueFile, ".md");
    const data = readFrontmatter(issueFile);

    for (const field of forbiddenIssueFields) {
      if (Object.prototype.hasOwnProperty.call(data, field)) {
        errors.push(`Issue "${filenameSlug}" must not declare forbidden field "${field}".`);
      }
    }

    const slug = data.slug;
    const code = data.code;
    const category = data.category;

    validateVersionFields(errors, "Issue", filenameSlug, data);

    const primaryCatCode = data.primary_cat_code;
    const secondaryCatCodes = data.secondary_cat_codes;
    const primaryPattern = data.primary_pattern;
    const patterns = data.patterns;

    if (typeof slug !== "string" || slug.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare slug.`);
    } else {
      if (!isKebabCase(slug)) {
        errors.push(`Issue "${filenameSlug}" slug "${slug}" must be kebab-case.`);
      }

      if (slug !== filenameSlug) {
        errors.push(`Issue "${filenameSlug}" frontmatter slug must match filename.`);
      }
    }

    if (typeof code !== "string" || code.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare code.`);
    } else {
      if (!isIssueCode(code)) {
        errors.push(`Issue "${filenameSlug}" code "${code}" must match ISS-####.`);
      }

      const previous = seenCodes.get(code);
      if (previous) {
        errors.push(`Issue code "${code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenCodes.set(code, filenameSlug);
      }
    }

    if (typeof category !== "string" || category.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare category.`);
    } else {
      if (!isKebabCase(category)) {
        errors.push(`Issue "${filenameSlug}" category "${category}" must be kebab-case.`);
      }

      if (!categorySlugs.has(category)) {
        errors.push(`Issue "${filenameSlug}" references unknown category "${category}".`);
      }
    }

    if (typeof primaryCatCode !== "string" || primaryCatCode.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare primary_cat_code.`);
    } else {
      if (!isCategoryCode(primaryCatCode)) {
        errors.push(`Issue "${filenameSlug}" primary_cat_code "${primaryCatCode}" must match CAT-####.`);
      }

      if (!categoryCodes.has(primaryCatCode)) {
        errors.push(`Issue "${filenameSlug}" references unknown primary_cat_code "${primaryCatCode}".`);
      }
    }

    if (!Array.isArray(secondaryCatCodes)) {
      errors.push(`Issue "${filenameSlug}" secondary_cat_codes must be an array.`);
    } else {
      const seenSecondaryCatCodes = new Set<string>();

      for (const secondaryCatCode of secondaryCatCodes) {
        if (typeof secondaryCatCode !== "string") {
          errors.push(`Issue "${filenameSlug}" has a non-string secondary_cat_codes value.`);
          continue;
        }

        if (!isCategoryCode(secondaryCatCode)) {
          errors.push(`Issue "${filenameSlug}" secondary_cat_codes value "${secondaryCatCode}" must match CAT-####.`);
          continue;
        }

        if (!categoryCodes.has(secondaryCatCode)) {
          errors.push(`Issue "${filenameSlug}" references unknown secondary_cat_code "${secondaryCatCode}".`);
        }

        if (seenSecondaryCatCodes.has(secondaryCatCode)) {
          errors.push(`Issue "${filenameSlug}" secondary_cat_codes contains duplicate "${secondaryCatCode}".`);
        } else {
          seenSecondaryCatCodes.add(secondaryCatCode);
        }

        if (typeof primaryCatCode === "string" && secondaryCatCode === primaryCatCode) {
          errors.push(`Issue "${filenameSlug}" must not list primary_cat_code "${primaryCatCode}" in secondary_cat_codes.`);
        }
      }
    }

    if (typeof primaryPattern !== "string" || primaryPattern.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare primary_pattern.`);
    }

    if (!Array.isArray(patterns) || patterns.length === 0) {
      errors.push(`Issue "${filenameSlug}" must declare at least one pattern.`);
      continue;
    }

    for (const patternSlug of patterns) {
      if (typeof patternSlug !== "string") {
        errors.push(`Issue "${filenameSlug}" has a non-string pattern value.`);
        continue;
      }

      if (!matrixPatternSlugs.has(patternSlug)) {
        errors.push(`Issue "${filenameSlug}" references unknown matrix pattern "${patternSlug}".`);
      }
    }

    if (typeof primaryPattern === "string" && !patterns.includes(primaryPattern)) {
      errors.push(`Issue "${filenameSlug}" primary_pattern must be included in patterns[].`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateCheckInputVocabulary(value: unknown): asserts value is CheckInputVocabulary {
  const errors: string[] = [];

  if (!isObject(value)) {
    fail(["Check Input vocabulary must be a JSON object."]);
  }

  if (typeof value.version !== "number") {
    errors.push("Check Input vocabulary must declare numeric version.");
  }

  if (!Array.isArray(value.elements) || value.elements.length === 0) {
    errors.push("Check Input vocabulary must declare elements[].");
  } else {
    for (const element of value.elements) {
      if (typeof element !== "string" || !isKebabCase(element)) {
        errors.push(`Check Input vocabulary element "${String(element)}" must be kebab-case string.`);
      }
    }

    if (new Set(value.elements).size !== value.elements.length) {
      errors.push("Check Input vocabulary elements[] contains duplicates.");
    }
  }

  if (!Array.isArray(value.gap_types) || value.gap_types.length === 0) {
    errors.push("Check Input vocabulary must declare gap_types[].");
  } else {
    for (const gapType of value.gap_types) {
      if (typeof gapType !== "string" || !isKebabCase(gapType)) {
        errors.push(`Check Input vocabulary gap type "${String(gapType)}" must be kebab-case string.`);
      }
    }

    if (new Set(value.gap_types).size !== value.gap_types.length) {
      errors.push("Check Input vocabulary gap_types[] contains duplicates.");
    }
  }

  if (value.finding_shape !== "[gap type] [element]") {
    errors.push('Check Input vocabulary finding_shape must be "[gap type] [element]".');
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateCheckInputMatrix(
  value: unknown,
  vocabulary: CheckInputVocabulary,
  patternCodes: Map<string, string>
): asserts value is CheckInputMatrix {
  const errors: string[] = [];
  const validElements = new Set(vocabulary.elements);
  const validGapTypes = new Set(vocabulary.gap_types);

  if (!isObject(value)) {
    fail(["Check Input matrix must be a JSON object."]);
  }

  for (const [finding, entry] of Object.entries(value)) {
    const parts = finding.split(" ");

    if (parts.length !== 2) {
      errors.push(`Check Input matrix key "${finding}" must use "[gap type] [element]" format.`);
      continue;
    }

    const [gapType, element] = parts;

    if (!validGapTypes.has(gapType)) {
      errors.push(`Check Input matrix key "${finding}" uses unknown gap type "${gapType}".`);
    }

    if (!validElements.has(element)) {
      errors.push(`Check Input matrix key "${finding}" uses unknown element "${element}".`);
    }

    if (!isObject(entry)) {
      errors.push(`Check Input matrix entry "${finding}" must be an object.`);
      continue;
    }

    if (Object.prototype.hasOwnProperty.call(entry, "lenses")) {
      errors.push(`Check Input matrix entry "${finding}" must not map directly to lenses.`);
    }

    const patterns = entry.patterns;

    if (!isObject(patterns)) {
      errors.push(`Check Input matrix entry "${finding}" must declare patterns object.`);
      continue;
    }

    if (!Array.isArray(patterns.primary)) {
      errors.push(`Check Input matrix entry "${finding}" must declare patterns.primary[].`);
      continue;
    }

    if (!Array.isArray(patterns.secondary)) {
      errors.push(`Check Input matrix entry "${finding}" must declare patterns.secondary[].`);
      continue;
    }

    const allPatternCodes = [...patterns.primary, ...patterns.secondary];

    if (patterns.primary.length === 0) {
      errors.push(`Check Input matrix entry "${finding}" must include at least one primary Pattern code.`);
    }

    for (const patternCode of allPatternCodes) {
      if (typeof patternCode !== "string" || !isPatternCode(patternCode)) {
        errors.push(
          `Check Input matrix entry "${finding}" has invalid Pattern code "${String(patternCode)}".`
        );
        continue;
      }

      if (!patternCodes.has(patternCode)) {
        errors.push(`Check Input matrix entry "${finding}" references unknown Pattern code "${patternCode}".`);
      }
    }

    if (new Set(patterns.primary).size !== patterns.primary.length) {
      errors.push(`Check Input matrix entry "${finding}" patterns.primary[] contains duplicate Pattern codes.`);
    }

    if (new Set(patterns.secondary).size !== patterns.secondary.length) {
      errors.push(`Check Input matrix entry "${finding}" patterns.secondary[] contains duplicate Pattern codes.`);
    }

    for (const patternCode of patterns.primary) {
      if (patterns.secondary.includes(patternCode)) {
        errors.push(
          `Check Input matrix entry "${finding}" lists "${patternCode}" in both primary[] and secondary[].`
        );
      }
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function main() {
  const ontologyRelease = readJsonFile(ontologyReleasePath);
  const matrix = readJsonFile(matrixPath);
  const checkInputVocabulary = readJsonFile(checkInputVocabularyPath);
  const checkInputMatrix = readJsonFile(checkInputMatrixPath);

  validateOntologyRelease(ontologyRelease);
  validateMatrix(matrix);
  validateMatrixPatternsHaveFiles(matrix);
  validateNoExtraPatternFiles(matrix);
  validateMatrixLensesHaveFiles(matrix);
  validateNoExtraLensFiles(matrix);
  validatePatternFrontmatter();
  validateLensFrontmatter();
  validateCategoryFrontmatter();
  validateIssues(matrix);

  const patternCodes = getPatternCodeLookup();
  validateCheckInputVocabulary(checkInputVocabulary);
  validateCheckInputMatrix(checkInputMatrix, checkInputVocabulary, patternCodes);

  console.log("Workbench ontology validation passed.");
}

main();