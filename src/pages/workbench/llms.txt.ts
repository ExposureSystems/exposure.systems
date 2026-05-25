import ontologyIndex from "../../content/_meta/ontology-index.json";

export function GET() {
  const lines = [
    "# Pengo Workbench",
    "",
    "Stop waiting for AI to magically get better.",
    "",
    "Find the structure. Use it to observe, control, and report what AI systems actually do.",
    "",
    "The Workbench is a structured inspection surface for AI asks, visible failure surfaces, recurring Patterns, diagnostic Lenses, and machine-readable ontology access.",
    "",
    "## Human Pages",
    "",
    "- /workbench/",
    "- /workbench/check-input/",
    "- /workbench/gap-explorer/",
    "- /workbench/search/",
    "- /workbench/issues/",
    "- /workbench/ai-adj-issues/",
    "- /workbench/patterns/",
    "- /workbench/lenses/",
    "- /workbench/categories/",
    "- /workbench/examples/",
    "- /workbench/field-notes/",
    "- /workbench/articles/",
    "- /workbench/videos/",
    "",
    "## Machine Indexes",
    "",
    "- /workbench/_internal/ontology-index.json",
    "- /workbench/_internal/search-index.json",
    "- /workbench/_internal/pattern-lens-matrix.json",
    "- /workbench/_internal/check-input-vocabulary.json",
    "- /workbench/_internal/check-input-matrix.json",
    "- /workbench/_internal/check-input-index.json",
    "",
    "## Markdown Artifacts",
    "",
    "### Issues",
    "",
    ...ontologyIndex.issues.map((issue) => `- ${issue.title}: ${issue.markdown_url}`),
    "",
    "### AI-Adjacent Issues",
      "",
      ...(ontologyIndex.ai_adj_issues ?? []).map(
        (entry) => `- ${entry.code} - ${entry.title}: ${entry.markdown_url}`
      ),
      "",
    "### Patterns",
    "",
    ...ontologyIndex.patterns.map(
      (pattern) => `- ${pattern.code} - ${pattern.title}: ${pattern.markdown_url}`
    ),
    "",
    "### Lenses",
    "",
    ...ontologyIndex.lenses.map(
      (lens) => `- ${lens.code} - ${lens.title}: ${lens.markdown_url}`
    ),
    "",
    "## Canonical Term Policy",
      "",
      "Canonical Pattern and Lens codes, slugs, and titles must remain unchanged. Do not translate, localize, paraphrase, or rename canonical ontology terms. Localized explanations may be provided separately, but they do not replace canonical terms.",
      "",
    "## Boundary",
      "",
      "Search returns Issues. Issues are visible failure surfaces. Patterns are recurring structural forms. Lenses are diagnostic views. Check Input produces controlled gap terms. Gap Explorer maps those terms to related Patterns and useful Lenses. Issues are not the target of Check Input Step 2.",
      "",
      "The Workbench helps find and inspect structure. It is not a chatbot, model score, diagnosis engine, receipt system, or governance platform.",
      "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}