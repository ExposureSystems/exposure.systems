import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const reviewRoot = "docs/import-review";
const patternReviewDir = path.join(reviewRoot, "patterns");
const lensReviewDir = path.join(reviewRoot, "lenses");

const publicPatternDir = "src/content/patterns";
const publicLensDir = "src/content/lenses";

const requiredReadyPatternSections = [
  "Definition",
  "Visible Surface",
  "Structural Signature",
  "Deterministic Test",
  "Common Contexts",
  "Distinguish From",
  "Related Lenses",
  "Structural Limits",
];

const requiredReadyLensSections = [
  "Definition",
  "Use This Lens When",
  "Input Requirements",
  "Structural Transform",
  "Output / Finding Shape",
  "Related Patterns",
  "Distinguish From",
  "Structural Limits",
];

const allowedReviewStates = new Set([
  "needs_review",
  "in_review",
  "ready_for_promotion",
  "promoted",
  "rejected",
  "merged",
]);

const strictReviewStates = new Set([
  "ready_for_promotion",
  "promoted",
]);

function fail(errors) {
  console.error("\nImport review validation failed:\n");

  for (const error of errors) {
    console.error(`- ${error}`);
  }

  console.error("");
  process.exit(1);
}

function isObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isKebabCase(value) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function isPatternCode(value) {
  return /^PAT-\d{4}$/.test(value);
}

function isLensCode(value) {
  return /^LEN-\d{4}$/.test(value);
}

function isEntryVersion(value) {
  return /^\d+\.\d+\.\d+$/.test(value);
}

function isUtcDateTime(value) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(value);
}

function getMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .sort()
    .map((file) => path.join(dir, file));
}

function readMarkdown(filePath) {
  const raw = fs.readFileSync(filePath, "utf-8").replace(/\r\n/g, "\n");
  const parsed = matter(raw);

  return {
    raw,
    data: parsed.data,
    body: parsed.content,
  };
}

function findSections(body) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
}

function getPublicCodeMap(dir) {
  const codeMap = new Map();

  for (const filePath of getMarkdownFiles(dir)) {
    const filenameSlug = path.basename(filePath, ".md");
    const { data } = readMarkdown(filePath);

    if (typeof data.code === "string") {
      codeMap.set(data.code, filenameSlug);
    }
  }

  return codeMap;
}

function validateBasicReviewFields(errors, kind, filePath, data) {
  const filenameSlug = path.basename(filePath, ".md");

  if (data.layer !== kind) {
    errors.push(`${kind} review "${filenameSlug}" must declare layer: ${kind}.`);
  }

  if (typeof data.slug !== "string" || data.slug.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare slug.`);
  } else {
    if (!isKebabCase(data.slug)) {
      errors.push(`${kind} review "${filenameSlug}" slug "${data.slug}" must be kebab-case.`);
    }

    if (data.slug !== filenameSlug) {
      errors.push(`${kind} review "${filenameSlug}" slug must match filename.`);
    }
  }

  if (typeof data.title !== "string" || data.title.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare title.`);
  }

  if (typeof data.review_state !== "string" || data.review_state.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare review_state.`);
  } else if (!allowedReviewStates.has(data.review_state)) {
    errors.push(
      `${kind} review "${filenameSlug}" review_state must be one of: ${[
        ...allowedReviewStates,
      ].join(", ")}.`
    );
  }

  if (typeof data.source_file !== "string" || data.source_file.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare source_file.`);
  } else if (!fs.existsSync(data.source_file)) {
    errors.push(`${kind} review "${filenameSlug}" source_file does not exist: ${data.source_file}.`);
  }
}

function validateReadyCommonFields(errors, kind, filePath, data, codeValidator, publicCodeMap) {
  const filenameSlug = path.basename(filePath, ".md");

  if (typeof data.code !== "string" || data.code.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare code when ready/promoted.`);
  } else {
    if (!codeValidator(data.code)) {
      errors.push(`${kind} review "${filenameSlug}" code "${data.code}" has invalid format.`);
    }

    const existingPublicSlug = publicCodeMap.get(data.code);
    if (existingPublicSlug && existingPublicSlug !== filenameSlug) {
      errors.push(
        `${kind} review "${filenameSlug}" code "${data.code}" conflicts with public entry "${existingPublicSlug}".`
      );
    }
  }

  if (typeof data.entry_version !== "string" || !isEntryVersion(data.entry_version)) {
    errors.push(
      `${kind} review "${filenameSlug}" must declare entry_version in major.minor.patch format when ready/promoted.`
    );
  }

  if (typeof data.updated_at !== "string" || !isUtcDateTime(data.updated_at)) {
    errors.push(
      `${kind} review "${filenameSlug}" must declare updated_at as UTC YYYY-MM-DDTHH:mm:ssZ when ready/promoted.`
    );
  }

  if (typeof data.summary !== "string" || data.summary.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare summary when ready/promoted.`);
  }

  if (!Array.isArray(data.search_intents) || data.search_intents.length === 0) {
    errors.push(`${kind} review "${filenameSlug}" must declare non-empty search_intents when ready/promoted.`);
  } else {
    for (const intent of data.search_intents) {
      if (typeof intent !== "string" || intent.length === 0) {
        errors.push(`${kind} review "${filenameSlug}" search_intents must contain non-empty strings.`);
      }
    }
  }
}

function validateRelationshipBlock(errors, label, filePath, blockName, blockValue) {
  const filenameSlug = path.basename(filePath, ".md");

  if (!isObject(blockValue)) {
    errors.push(`${label} review "${filenameSlug}" must declare ${blockName} object when ready/promoted.`);
    return;
  }

  if (!Array.isArray(blockValue.primary)) {
    errors.push(`${label} review "${filenameSlug}" ${blockName}.primary must be an array.`);
  }

  if (!Array.isArray(blockValue.secondary)) {
    errors.push(`${label} review "${filenameSlug}" ${blockName}.secondary must be an array.`);
  }

  if (!Array.isArray(blockValue.primary) || !Array.isArray(blockValue.secondary)) {
    return;
  }

  if (blockValue.primary.length === 0) {
    errors.push(`${label} review "${filenameSlug}" ${blockName}.primary must not be empty.`);
  }

  const allValues = [...blockValue.primary, ...blockValue.secondary];
  const seen = new Set();

  for (const value of allValues) {
    if (typeof value !== "string" || !isKebabCase(value)) {
      errors.push(`${label} review "${filenameSlug}" ${blockName} contains invalid slug "${String(value)}".`);
      continue;
    }

    if (seen.has(value)) {
      errors.push(`${label} review "${filenameSlug}" ${blockName} contains duplicate slug "${value}".`);
    } else {
      seen.add(value);
    }
  }

  for (const value of blockValue.primary) {
    if (blockValue.secondary.includes(value)) {
      errors.push(
        `${label} review "${filenameSlug}" ${blockName} lists "${value}" in both primary and secondary.`
      );
    }
  }
}

function validateRequiredSections(errors, label, filePath, sections, requiredSections) {
  const filenameSlug = path.basename(filePath, ".md");
  const found = new Set(sections);

  for (const section of requiredSections) {
    if (!found.has(section)) {
      errors.push(`${label} review "${filenameSlug}" is missing required section: ${section}.`);
    }
  }
}

function validatePatternReviewFiles(errors) {
  const publicPatternCodes = getPublicCodeMap(publicPatternDir);
  const seenReviewCodes = new Map();

  for (const filePath of getMarkdownFiles(patternReviewDir)) {
    const filenameSlug = path.basename(filePath, ".md");
    const { data, body } = readMarkdown(filePath);
    const sections = findSections(body);

    validateBasicReviewFields(errors, "pattern", filePath, data);

    if (typeof data.code === "string") {
      const previous = seenReviewCodes.get(data.code);
      if (previous && previous !== filenameSlug) {
        errors.push(`pattern review code "${data.code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenReviewCodes.set(data.code, filenameSlug);
      }
    }

    if (!strictReviewStates.has(data.review_state)) {
      continue;
    }

    validateReadyCommonFields(errors, "pattern", filePath, data, isPatternCode, publicPatternCodes);
    validateRelationshipBlock(errors, "pattern", filePath, "related_lenses", data.related_lenses);
    validateRequiredSections(errors, "pattern", filePath, sections, requiredReadyPatternSections);
  }
}

function validateLensReviewFiles(errors) {
  const publicLensCodes = getPublicCodeMap(publicLensDir);
  const seenReviewCodes = new Map();

  for (const filePath of getMarkdownFiles(lensReviewDir)) {
    const filenameSlug = path.basename(filePath, ".md");
    const { data, body } = readMarkdown(filePath);
    const sections = findSections(body);

    validateBasicReviewFields(errors, "lens", filePath, data);

    if (typeof data.code === "string") {
      const previous = seenReviewCodes.get(data.code);
      if (previous && previous !== filenameSlug) {
        errors.push(`lens review code "${data.code}" is duplicated by "${previous}" and "${filenameSlug}".`);
      } else {
        seenReviewCodes.set(data.code, filenameSlug);
      }
    }

    if (!strictReviewStates.has(data.review_state)) {
      continue;
    }

    validateReadyCommonFields(errors, "lens", filePath, data, isLensCode, publicLensCodes);
    validateRelationshipBlock(errors, "lens", filePath, "related_patterns", data.related_patterns);
    validateRequiredSections(errors, "lens", filePath, sections, requiredReadyLensSections);
  }
}

function main() {
  const errors = [];

  validatePatternReviewFiles(errors);
  validateLensReviewFiles(errors);

  if (errors.length > 0) {
    fail(errors);
  }

  console.log("Import review validation passed.");
}

main();