import ontologyIndex from "../../content/_meta/ontology-index.json";

export function GET() {
  const lines = [
    "# Workbench",
    "",
    "The Workbench is a structured pattern and lens reference surface for AI failure investigation, input inspection, and machine-readable ontology access.",
    "",
    "## Human Pages",
    "",
    "- /workbench/",
    "- /workbench/search/",
    "- /workbench/check-input/",
    "- /workbench/gap-explorer/",
    "- /workbench/issues/",
    "- /workbench/patterns/",
    "- /workbench/lenses/",
    "- /workbench/categories/",
    "",
    "## Machine Indexes",
    "",
    "- /workbench/_internal/ontology-index.json",
    "- /workbench/_internal/search-index.json",
    "- /workbench/_internal/pattern-lens-matrix.json",
    "",
    "## Markdown Artifacts",
    "",
    "### Issues",
    "",
    ...ontologyIndex.issues.map((issue) => `- ${issue.title}: ${issue.markdown_url}`),
    "",
    "### Patterns",
    "",
    ...ontologyIndex.patterns.map(
      (pattern) => `- ${pattern.code} — ${pattern.title}: ${pattern.markdown_url}`
    ),
    "",
    "### Lenses",
    "",
    ...ontologyIndex.lenses.map(
      (lens) => `- ${lens.code} — ${lens.title}: ${lens.markdown_url}`
    ),
    "",
    "## Boundary",
    "",
    "Search returns Issues. Patterns and Lenses are canonical structural references. Check Input produces controlled gap terms; Gap Explorer maps those terms to related Patterns and useful Lenses. Issues are not the target of Check Input Step 2.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}