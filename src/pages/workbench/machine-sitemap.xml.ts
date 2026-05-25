import ontologyIndex from "../../content/_meta/ontology-index.json";

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const baseUrl = "https://pengosystems.com";

  const urls = [
    "/workbench/llms.txt",
    ...ontologyIndex.issues.map((issue) => issue.markdown_url),
    ...ontologyIndex.patterns.map((pattern) => pattern.markdown_url),
    ...ontologyIndex.lenses.map((lens) => lens.markdown_url),
    ...(ontologyIndex.ai_adj_issues ?? []).map((entry) => `/workbench/ai-adj-issues/${entry.ontology_slug}.md`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${xmlEscape(`${baseUrl}${url}`)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}