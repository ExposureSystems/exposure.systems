import ontologyIndex from "../../content/_meta/ontology-index.json";

export function GET() {
  const lines = [
    "# PENGO Workbench",
    "",
    "PENGO Workbench is a structured inspection surface for AI asks, visible failure surfaces, recurring Patterns, diagnostic Lenses, and public ontology access.",
    "",
    "Use it to inspect the ask, search known failure surfaces, map controlled gaps, and follow the structure behind visible AI-era failures.",
    "",
    "## Human Pages",
    "",
    "- /workbench/",
    "- /workbench/start-here/",
    "- /workbench/check-input/",
    "- /workbench/check-input/gap-examples/",
    "- /workbench/explore-results/",
    "- /workbench/search/",
    "- /workbench/issues/",
    "- /workbench/issues/all/",
    "- /workbench/ai-adj-issues/",
    "- /workbench/patterns/",
    "- /workbench/lenses/",
    "- /workbench/categories/",
    "- /workbench/ontology/changelog/",
    "- /workbench/use-attribution/",
    "- /workbench/terms/",
    "",
    "## Public Machine References",
    "",
    "- /workbench/llms.txt",
    "- /workbench/machine-sitemap.xml",
    "- /workbench/ontology.json",
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
      (entry) => `- ${entry.title}: ${entry.markdown_url}`
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
    "Search returns Issues, AI-Adjacent Issues, Patterns, and Lenses. Issues are visible failure surfaces. Patterns are recurring structural forms. Lenses are diagnostic views. Check Input produces controlled gap terms. Explore Results maps those terms to inspection lanes and related Workbench references.",
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
