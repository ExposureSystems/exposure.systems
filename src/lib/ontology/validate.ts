import fs from "node:fs";
import path from "node:path";

type MatrixEntry = {
  primary: string[];
  secondary: string[];
};

type PatternLensMatrix = Record<string, MatrixEntry>;

const matrixPath = "src/ontology/pattern-lens-matrix.json";
const patternsDir = "src/content/patterns";
const lensesDir = "src/content/lenses";

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

function getMarkdownSlugs(dir: string) {
  if (!fs.existsSync(dir)) {
    return new Set<string>();
  }

  const slugs = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => path.basename(file, ".md"));

  return new Set(slugs);
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

function validateMatrixLensesHaveFiles(matrix: PatternLensMatrix) {
  const errors: string[] = [];
  const lensFileSlugs = getMarkdownSlugs(lensesDir);
  const matrixLensSlugs = new Set<string>();

  for (const entry of Object.values(matrix)) {
    for (const lensSlug of [...entry.primary, ...entry.secondary]) {
      matrixLensSlugs.add(lensSlug);
    }
  }

  for (const lensSlug of matrixLensSlugs) {
    if (!lensFileSlugs.has(lensSlug)) {
      errors.push(`Matrix lens "${lensSlug}" is missing src/content/lenses/${lensSlug}.md.`);
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
  validateMatrixLensesHaveFiles(matrix);

  console.log("SERL ontology validation passed.");
}

main();