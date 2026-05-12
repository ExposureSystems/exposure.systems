export type PublicChangelogObjectType =
  | "issue"
  | "pattern"
  | "lens"
  | "category";

export type PublicChangelogChangeType =
  | "created"
  | "expanded"
  | "clarified"
  | "renamed"
  | "moved"
  | "split"
  | "merged"
  | "deprecated"
  | "superseded"
  | "semantic_revision";

export type PublicChangelogReceiptImpact =
  | "none"
  | "minor"
  | "review_recommended"
  | "breaking";

export type PublicChangelogEntry = {
  date: string;
  ontology_release: string;
  object_code: string;
  object_slug: string;
  object_type: PublicChangelogObjectType;
  entry_version: string;
  change_type: PublicChangelogChangeType;
  public_summary: string;
  receipt_impact: PublicChangelogReceiptImpact;
};

export type PublicChangelog = {
  version: number;
  entries: PublicChangelogEntry[];
};

const allowedObjectTypes = new Set<PublicChangelogObjectType>([
  "issue",
  "pattern",
  "lens",
  "category",
]);

const allowedChangeTypes = new Set<PublicChangelogChangeType>([
  "created",
  "expanded",
  "clarified",
  "renamed",
  "moved",
  "split",
  "merged",
  "deprecated",
  "superseded",
  "semantic_revision",
]);

const allowedReceiptImpacts = new Set<PublicChangelogReceiptImpact>([
  "none",
  "minor",
  "review_recommended",
  "breaking",
]);

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isKebabCase(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function isEntryVersion(value: string) {
  return /^\d+\.\d+\.\d+$/.test(value);
}

function isUtcDateTime(value: string) {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(value);
}

function expectedCodePatternForType(objectType: string) {
  switch (objectType) {
    case "issue":
      return /^ISS-\d{4}$/;
    case "pattern":
      return /^PAT-\d{4}$/;
    case "lens":
      return /^LEN-\d{4}$/;
    case "category":
      return /^CAT-\d{4}$/;
    default:
      return null;
  }
}

export function validatePublicChangelog(value: unknown) {
  const errors: string[] = [];

  if (!isObject(value)) {
    return ["Public ontology changelog must be a JSON object."];
  }

  if (value.version !== 1) {
    errors.push("Public ontology changelog version must be 1.");
  }

  if (!Array.isArray(value.entries)) {
    errors.push("Public ontology changelog must declare entries[].");
    return errors;
  }

  const seenEntryKeys = new Set<string>();

  for (const [index, entry] of value.entries.entries()) {
    const label = `Public ontology changelog entry ${index}`;

    if (!isObject(entry)) {
      errors.push(`${label} must be an object.`);
      continue;
    }

    const date = entry.date;
    const ontologyRelease = entry.ontology_release;
    const objectCode = entry.object_code;
    const objectSlug = entry.object_slug;
    const objectType = entry.object_type;
    const entryVersion = entry.entry_version;
    const changeType = entry.change_type;
    const publicSummary = entry.public_summary;
    const receiptImpact = entry.receipt_impact;

    if (typeof date !== "string" || !isUtcDateTime(date)) {
      errors.push(`${label} date must use UTC format YYYY-MM-DDTHH:mm:ssZ.`);
    }

    if (typeof ontologyRelease !== "string" || !isEntryVersion(ontologyRelease)) {
      errors.push(`${label} ontology_release must use major.minor.patch format.`);
    }

    if (
      typeof objectType !== "string" ||
      !allowedObjectTypes.has(objectType as PublicChangelogObjectType)
    ) {
      errors.push(
        `${label} object_type must be one of: ${[
          ...allowedObjectTypes,
        ].join(", ")}.`
      );
    }

    if (typeof objectCode !== "string" || objectCode.length === 0) {
      errors.push(`${label} object_code must be a string.`);
    } else if (typeof objectType === "string") {
      const expectedPattern = expectedCodePatternForType(objectType);

      if (expectedPattern && !expectedPattern.test(objectCode)) {
        errors.push(
          `${label} object_code "${objectCode}" does not match object_type "${objectType}".`
        );
      }
    }

    if (typeof objectSlug !== "string" || !isKebabCase(objectSlug)) {
      errors.push(`${label} object_slug must be kebab-case.`);
    }

    if (typeof entryVersion !== "string" || !isEntryVersion(entryVersion)) {
      errors.push(`${label} entry_version must use major.minor.patch format.`);
    }

    if (
      typeof changeType !== "string" ||
      !allowedChangeTypes.has(changeType as PublicChangelogChangeType)
    ) {
      errors.push(
        `${label} change_type must be one of: ${[
          ...allowedChangeTypes,
        ].join(", ")}.`
      );
    }

    if (typeof publicSummary !== "string" || publicSummary.length === 0) {
      errors.push(`${label} public_summary must be a non-empty string.`);
    }

    if (
      typeof receiptImpact !== "string" ||
      !allowedReceiptImpacts.has(receiptImpact as PublicChangelogReceiptImpact)
    ) {
      errors.push(
        `${label} receipt_impact must be one of: ${[
          ...allowedReceiptImpacts,
        ].join(", ")}.`
      );
    }

    if (
      typeof objectCode === "string" &&
      typeof entryVersion === "string" &&
      typeof changeType === "string" &&
      typeof date === "string"
    ) {
      const entryKey = `${objectCode}@${entryVersion}:${changeType}:${date}`;

      if (seenEntryKeys.has(entryKey)) {
        errors.push(`${label} duplicates changelog key ${entryKey}.`);
      } else {
        seenEntryKeys.add(entryKey);
      }
    }
  }

  return errors;
}
