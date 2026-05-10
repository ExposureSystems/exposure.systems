import fs from "node:fs";

const patternsAuditPath = "docs/import-audit/patterns.audit.json";
const lensesAuditPath = "docs/import-audit/lenses.audit.json";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function summarizeEntries(entries) {
  const byState = {};
  const currentSrcEntries = [];
  const approvedCodes = [];
  const proposedCodes = [];
  const needsApprovedCode = [];
  const importedStable = [];

  for (const entry of entries) {
    byState[entry.import_state] = (byState[entry.import_state] || 0) + 1;

    if (entry.current_src_entry) {
      currentSrcEntries.push(
        entry.current_src_code
          ? `${entry.slug} (${entry.current_src_code})`
          : entry.slug
      );
    }

    if (entry.approved_code) {
      approvedCodes.push(`${entry.slug} (${entry.approved_code})`);
    } else {
      needsApprovedCode.push(entry.slug);
    }

    if (entry.proposed_code) {
      proposedCodes.push(`${entry.slug} (${entry.proposed_code})`);
    }

    if (entry.imported_status === "stable") {
      importedStable.push(entry.slug);
    }
  }

  return {
    count: entries.length,
    byState,
    currentSrcEntries,
    approvedCodes,
    proposedCodes,
    needsApprovedCode,
    importedStableCount: importedStable.length,
  };
}

function listItems(items) {
  return items.length > 0
    ? items.map((item) => `- ${item}`).join("\n")
    : "- None";
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

Review cycle: ${patternAudit.review_cycle}
Target ontology release: ${patternAudit.target_ontology_release}

## Rules

- Current source presence does not mean approval.
- Current source code does not mean approval.
- Proposed code does not mean approval.
- Approved code is required before promotion into public ontology content.
- Imported source status is not authoritative.

## Patterns

Total: ${patternSummary.count}

Import states:

${listStateCounts(patternSummary.byState)}

Current source overlaps:

${listItems(patternSummary.currentSrcEntries)}

Approved codes this cycle:

${listItems(patternSummary.approvedCodes)}

Proposed codes this cycle:

${listItems(patternSummary.proposedCodes)}

Entries needing approved code:

${listItems(patternSummary.needsApprovedCode)}

Imported entries marked stable in source docs: ${patternSummary.importedStableCount}

Note: imported source status is not authoritative.

## Lenses

Total: ${lensSummary.count}

Import states:

${listStateCounts(lensSummary.byState)}

Current source overlaps:

${listItems(lensSummary.currentSrcEntries)}

Approved codes this cycle:

${listItems(lensSummary.approvedCodes)}

Proposed codes this cycle:

${listItems(lensSummary.proposedCodes)}

Entries needing approved code:

${listItems(lensSummary.needsApprovedCode)}

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
- publication/version decision
`;

fs.writeFileSync("docs/import-audit/summary.md", report);

console.log("Wrote docs/import-audit/summary.md");