import ontologyIndex from "../../../content/_meta/ontology-index.json";
import release from "../../../ontology/ontology-release.json";

export function getStaticPaths() {
  return ontologyIndex.lenses.map((lens) => ({
    params: { slug: lens.slug },
    props: { lens },
  }));
}

export function GET({ props }: { props: { lens: (typeof ontologyIndex.lenses)[number] } }) {
  const { lens } = props;

  const primaryPatterns = lens.patterns.primary
    .map((slug) => ontologyIndex.patterns.find((pattern) => pattern.slug === slug))
    .filter(Boolean);

  const secondaryPatterns = lens.patterns.secondary
    .map((slug) => ontologyIndex.patterns.find((pattern) => pattern.slug === slug))
    .filter(Boolean);

  const relatedIssues = lens.issues
    .map((slug) => ontologyIndex.issues.find((issue) => issue.slug === slug))
    .filter(Boolean);

  const body = [
    `# ${lens.code} — ${lens.title}`,
    "",
    "## Ontology Metadata",
    "",
    `Code: ${lens.code}`,
    `Version: ${lens.code}@${lens.entry_version}`,
    `Ontology release: ${release.ontology_release}`,
    `Updated: ${lens.updated_at}`,
    `Canonical URL: ${lens.url}`,
    "",
    "## Summary",
    "",
    lens.summary,
    "",
    "## Primary Pattern Matches",
    "",
    ...formatPatternItems(primaryPatterns),
    "",
    "## Secondary Pattern Matches",
    "",
    ...formatPatternItems(secondaryPatterns),
    "",
    "## Related Issues",
    "",
    ...formatIssueItems(relatedIssues),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

function formatPatternItems(items: Array<{ code?: string; title: string; url: string; summary: string }>) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.flatMap((item) => [
    `- ${item.code ? `${item.code} — ` : ""}${item.title}`,
    `  - URL: ${item.url}`,
    `  - Summary: ${item.summary}`,
  ]);
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