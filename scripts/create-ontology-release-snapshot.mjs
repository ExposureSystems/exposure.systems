import fs from "node:fs";
import path from "node:path";

const releasePath = "src/ontology/ontology-release.json";
const ontologyIndexPath = "src/content/_meta/ontology-index.json";
const publicChangelogPath = "src/ontology/changelog.public.json";
const outputDir = "src/ontology/releases";

function readJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("Missing required file: " + filePath);
  }

  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2) + "\n");
}

function assertVersion(value, label) {
  if (typeof value !== "string" || !/^\d+\.\d+\.\d+$/.test(value)) {
    throw new Error(label + " must use major.minor.patch format.");
  }
}

const release = readJson(releasePath);
const ontologyIndex = readJson(ontologyIndexPath);
const publicChangelog = readJson(publicChangelogPath);

assertVersion(release.ontology_release, "ontology_release");

const releaseChangelogEntries = publicChangelog.entries.filter(
  (entry) => entry.ontology_release === release.ontology_release
);

const snapshot = {
  version: 1,
  snapshot_type: "ontology_release",
  ontology_release: release.ontology_release,
  released_at: release.released_at,
  public_state: release.public_state,
  notes: release.notes,
  source_files: {
    release: releasePath,
    ontology_index: ontologyIndexPath,
    public_changelog: publicChangelogPath
  },
  counts: {
    issues: ontologyIndex.issues.length,
    patterns: ontologyIndex.patterns.length,
    lenses: ontologyIndex.lenses.length,
    categories: ontologyIndex.categories.length,
    public_changelog_entries: releaseChangelogEntries.length
  },
  ontology_index: ontologyIndex,
  public_changelog_entries: releaseChangelogEntries
};

fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(
  outputDir,
  "ontology-" + release.ontology_release + ".json"
);

writeJson(outputPath, snapshot);

console.log("Wrote " + outputPath);
console.log("Snapshot counts:");
console.log("- Issues: " + snapshot.counts.issues);
console.log("- Patterns: " + snapshot.counts.patterns);
console.log("- Lenses: " + snapshot.counts.lenses);
console.log("- Categories: " + snapshot.counts.categories);
console.log("- Public changelog entries: " + snapshot.counts.public_changelog_entries);
