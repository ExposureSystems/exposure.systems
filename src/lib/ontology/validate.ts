import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type MatrixEntry = {
  primary: string[];
  secondary: string[];
};

type PatternLensMatrix = Record<string, MatrixEntry>;

const matrixPath = "src/ontology/pattern-lens-matrix.json";
const patternsDir = "src/content/patterns";
const lensesDir = "src/content/lenses";
const issuesDir = "src/content/issues";
const categoriesDir = "src/content/categories";

function fail(errors: string[]) {
  console.error("\nSERL ontology validation failed:\n");

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
  return /^PAT-\d{3}$/.test(value);
}

function isLensCode(value: string) {
  return /^LEN-\d{3}$/.test(value);
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
      errors.push(`Matrix entry "${patternSlug}" primary[] must contain 1-2 lenses.`);
    }

    if (secondary.length > 2) {
      errors.push(`Matrix entry "${patternSlug}" secondary[] must contain 0-2 lenses.`);
    }

    const allLenses = [...primary, ...secondary];

    for (const lensSlug of allLenses) {
      if (typeof lensSlug !== "string" || !isKebabCase(lensSlug)) {
        errors.push(`Matrix entry "${patternSlug}" has invalid lens slug "${String(lensSlug)}".`);
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
      errors.push(`Matrix pattern "${patternSlug}" is missing src/content/patterns/${patternSlug}.md.`);
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
      errors.push(`Matrix lens "${lensSlug}" is missing src/content/lenses/${lensSlug}.md.`);
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
        errors.push(`Pattern "${filenameSlug}" code "${code}" must match PAT-###.`);
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
        errors.push(`Lens "${filenameSlug}" code "${code}" must match LEN-###.`);
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

function validateCategoryFrontmatter() {
  const errors: string[] = [];

  for (const categoryFile of getMarkdownFiles(categoriesDir)) {
    const filenameSlug = path.basename(categoryFile, ".md");
    const data = readFrontmatter(categoryFile);

    const slug = data.slug;

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
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function validateIssues(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const matrixPatternSlugs = new Set(Object.keys(matrix));
  const categorySlugs = getMarkdownSlugs(categoriesDir);
  const issueFiles = getMarkdownFiles(issuesDir);

  for (const issueFile of issueFiles) {
    const filenameSlug = path.basename(issueFile, ".md");
    const data = readFrontmatter(issueFile);

    const slug = data.slug;
    const category = data.category;
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

function main() {
  const raw = fs.readFileSync(matrixPath, "utf-8");
  const matrix = JSON.parse(raw);

  validateMatrix(matrix);
  validateMatrixPatternsHaveFiles(matrix);
  validateNoExtraPatternFiles(matrix);
  validateMatrixLensesHaveFiles(matrix);
  validateNoExtraLensFiles(matrix);
  validatePatternFrontmatter();
  validateLensFrontmatter();
  validateCategoryFrontmatter();
  validateIssues(matrix);

  console.log("SERL ontology validation passed.");
}

main();