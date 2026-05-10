import ontologyIndex from "../../../content/_meta/ontology-index.json";
import release from "../../../ontology/ontology-release.json";

export function getStaticPaths() {
  return ontologyIndex.categories.map((category) => ({
    params: { slug: category.slug },
    props: { category },
  }));
}

export function GET({ props }: { props: { category: (typeof ontologyIndex.categories)[number] } }) {
  const { category } = props;

  const categoryIssues = category.issues
    .map((slug) => ontologyIndex.issues.find((issue) => issue.slug === slug))
    .filter(Boolean);

  const body = [
    `# ${category.code} — ${category.title}`,
    "",
    "## Ontology Metadata",
    "",
    `Code: ${category.code}`,
    `Version: ${category.code}@${category.entry_version}`,
    `Ontology release: ${release.ontology_release}`,
    `Updated: ${category.updated_at}`,
    `Canonical URL: ${category.url}`,
    "",
    "## Summary",
    "",
    category.summary,
    "",
    "## Issues",
    "",
    ...formatIssueItems(categoryIssues),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

function formatIssueItems(items: Array<{ code?: string; title: string; url: string; summary: string }>) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.flatMap((item) => [
    `- ${item.code ? `${item.code} — ` : ""}${item.title}`,
    `  - URL: ${item.url}`,
    `  - Summary: ${item.summary}`,
  ]);
}