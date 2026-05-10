import fs from "node:fs";

const patternsAuditPath = "docs/import-audit/patterns.audit.json";
const lensesAuditPath = "docs/import-audit/lenses.audit.json";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function summarizeEntries(entries) {
  const byState = {};
  const existingPublic = [];
  const noCode = [];
  const importedStable = [];

  for (const entry of entries) {
    byState[entry.import_state] = (byState[entry.import_state] || 0) + 1;

    if (entry.known_existing_public_entry) {
      existingPublic.push(entry.slug);
    }

    if (!entry.existing_public_code && !entry.provisional_code) {
      noCode.push(entry.slug);
    }

    if (entry.imported_status === "stable") {
      importedStable.push(entry.slug);
    }
  }

  return {
    count: entries.length,
    byState,
    existingPublic,
    noCode,
    importedStableCount: importedStable.length,
  };
}

function listItems(items) {
  return items.length > 0 ? items.map((item) => `- ${item}`).join("\n") : "- None";
}

function listStateCounts(byState) {
  return Object.entries(byState)
    .map(([state, count]) => `- ${state}: ${count}`)
    .join("\n");
}

const patternAudit = readJson(patternsAuditPath);
const lensAudit = readJson(lensesAuditPath);

const patternSummary = summarizeEntries(patternAudit.patterns);
const lensSummary = summarizeEntries(lensAudit.lenses);

const report = `# Ontology Import Audit Summary

## Patterns

Total: ${patternSummary.count}

Import states:

${listStateCounts(patternSummary.byState)}

Existing public entries:

${listItems(patternSummary.existingPublic)}

Entries without approved/provisional code:

${listItems(patternSummary.noCode)}

Imported entries marked stable in source docs: ${patternSummary.importedStableCount}

Note: imported source status is not authoritative.

## Lenses

Total: ${lensSummary.count}

Import states:

${listStateCounts(lensSummary.byState)}

Existing public entries:

${listItems(lensSummary.existingPublic)}

Entries without approved/provisional code:

${listItems(lensSummary.noCode)}

Imported entries marked stable in source docs: ${lensSummary.importedStableCount}

Note: imported source status is not authoritative.

## Review Rule

No imported Pattern or Lens should be promoted into \`src/content/\` until it has:

- approved code
- current summary
- canonical frontmatter
- translation policy
- search intents
- relationship mapping
- body completeness review
- status decision
`;

fs.writeFileSync("docs/import-audit/summary.md", report);

console.log("Wrote docs/import-audit/summary.md");
