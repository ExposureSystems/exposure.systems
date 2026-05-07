import fs from "node:fs";

type MatrixEntry = {
  primary: string[];
  secondary: string[];
};

type PatternLensMatrix = Record<string, MatrixEntry>;

const matrixPath = "src/ontology/pattern-lens-matrix.json";

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

function validateMatrixShape(matrix: unknown): asserts matrix is PatternLensMatrix {
  const errors: string[] = [];

  if (!isObject(matrix)) {
    fail(["Matrix must be a JSON object."]);
  }

  for (const [patternSlug, entry] of Object.entries(matrix)) {
    if (!isObject(entry)) {
      errors.push(`Matrix entry "${patternSlug}" must be an object.`);
      continue;
    }

    if (!Array.isArray(entry.primary)) {
      errors.push(`Matrix entry "${patternSlug}" must include primary[].`);
    }

    if (!Array.isArray(entry.secondary)) {
      errors.push(`Matrix entry "${patternSlug}" must include secondary[].`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
  }
}

function main() {
  const raw = fs.readFileSync(matrixPath, "utf-8");
  const matrix = JSON.parse(raw);

  validateMatrixShape(matrix);

  console.log("SERL ontology validation passed.");
}

main();