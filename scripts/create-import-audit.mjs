import fs from "node:fs";
import path from "node:path";

const patternSourceDir = "docs/import-clean/patterns";
const lensSourceDir = "docs/import-clean/lenses";
const outputDir = "docs/import-audit";

const reviewCycle = "ontology-import-2026-05";
const targetOntologyRelease = "0.1.0";

const currentSrcCodes = {
  patterns: {
    "authority-collision": "PAT-0100",
  },
  lenses: {
    "authority-overlay-lens": "LEN-0100",
    "conflict-lens": "LEN-0110",
    "reconciliation-lens": "LEN-0120",
    "invariant-lens": "LEN-0130",
  },
};

const currentSrcEntries = new Set([
  "authority-collision",
  "authority-overlay-lens",
  "conflict-lens",
  "reconciliation-lens",
  "invariant-lens",
]);

function readMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing source directory: ${dir}`);
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => path.join(dir, file));
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, body: raw };
  }

  const [, frontmatter, body] = match;
  const data = {};

  for (const line of frontmatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || !trimmed.includes(":")) continue;

    const [key, ...rest] = trimmed.split(":");
    data[key.trim()] = rest.join(":").trim();
  }

  return { data, body };
}

function findSections(body) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((match) =>
    match[1].trim()
  );
}

function makeAuditEntry(filePath, kind) {
  const raw = fs.readFileSync(filePath, "utf-8").replace(/\r\n/g, "\n");
  const slug = path.basename(filePath, ".md");
  const { data, body } = parseFrontmatter(raw);
  const sections = findSections(body);

  const currentSrcCode =
    kind === "pattern"
      ? currentSrcCodes.patterns[slug] || null
      : currentSrcCodes.lenses[slug] || null;

  const missing =
    kind === "pattern"
      ? [
          "approved code",
          "current summary",
          "canonical frontmatter",
          "translation_policy",
          "search_intents",
          "related_lenses",
          "visible_surface",
          "common_contexts",
          "distinguish_from nearby patterns",
          "body completeness review",
          "publication/version decision",
        ]
      : [
          "approved code",
          "current summary",
          "canonical frontmatter",
          "translation_policy",
          "search_intents",
          "related_patterns",
          "use_this_lens_when guidance",
          "output or finding shape",
          "distinguish_from nearby lenses",
          "body completeness review",
          "publication/version decision",
        ];

  return {
    slug,
    title: data.title || "",
    layer: data.layer || kind,
    imported_status: data.status || "",
    review_cycle: reviewCycle,
    target_ontology_release: targetOntologyRelease,
    import_state: "needs_review",
    current_src_entry: currentSrcEntries.has(slug),
    current_src_code: currentSrcCode,
    proposed_code: null,
    approved_code: null,
    source_file: filePath.replaceAll("\\", "/"),
    body_sections_found: sections,
    missing,
    review_questions:
      kind === "pattern"
        ? [
            "Does this still represent the current Pattern definition?",
            "Is this Pattern distinct from nearby Patterns?",
            "What Issue language should map to this Pattern?",
            "Which Lenses actually inspect this Pattern?",
            "Should this be promoted, rejected, merged, or kept for later review?",
          ]
        : [
            "Does this Lens still represent the current diagnostic view?",
            "Which Patterns does this Lens actually inspect?",
            "What inputs does this Lens require?",
            "What output or finding shape should it produce?",
            "Should this be promoted, rejected, merged, or kept for later review?",
          ],
    notes: "",
  };
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

fs.mkdirSync(outputDir, { recursive: true });

const patterns = readMarkdownFiles(patternSourceDir).map((filePath) =>
  makeAuditEntry(filePath, "pattern")
);

const lenses = readMarkdownFiles(lensSourceDir).map((filePath) =>
  makeAuditEntry(filePath, "lens")
);

writeJson(path.join(outputDir, "patterns.audit.json"), {
  version: 2,
  review_cycle: reviewCycle,
  target_ontology_release: targetOntologyRelease,
  source_dir: patternSourceDir,
  rules: {
    do_not_promote_until_reviewed: true,
    default_import_state: "needs_review",
    imported_status_is_not_authoritative: true,
    current_src_code_is_not_approval: true,
    proposed_code_is_not_approval: true,
    approved_code_required_for_promotion: true,
  },
  patterns,
});

writeJson(path.join(outputDir, "lenses.audit.json"), {
  version: 2,
  review_cycle: reviewCycle,
  target_ontology_release: targetOntologyRelease,
  source_dir: lensSourceDir,
  rules: {
    do_not_promote_until_reviewed: true,
    default_import_state: "needs_review",
    imported_status_is_not_authoritative: true,
    current_src_code_is_not_approval: true,
    proposed_code_is_not_approval: true,
    approved_code_required_for_promotion: true,
  },
  lenses,
});

console.log(`Wrote ${patterns.length} pattern audit entries.`);
console.log(`Wrote ${lenses.length} lens audit entries.`);