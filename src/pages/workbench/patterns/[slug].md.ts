import ontologyIndex from "../../../content/_meta/ontology-index.json";

export function getStaticPaths() {
  return ontologyIndex.patterns.map((pattern) => ({
    params: { slug: pattern.slug },
    props: { pattern },
  }));
}

export function GET({ props }: { props: { pattern: (typeof ontologyIndex.patterns)[number] } }) {
  const { pattern } = props;

  const primaryLenses = pattern.lenses.primary
    .map((slug) => ontologyIndex.lenses.find((lens) => lens.slug === slug))
    .filter(Boolean);

  const secondaryLenses = pattern.lenses.secondary
    .map((slug) => ontologyIndex.lenses.find((lens) => lens.slug === slug))
    .filter(Boolean);

  const primaryIssues = pattern.issues.primary
    .map((slug) => ontologyIndex.issues.find((issue) => issue.slug === slug))
    .filter(Boolean);

  const supportingIssues = pattern.issues.supporting
    .map((slug) => ontologyIndex.issues.find((issue) => issue.slug === slug))
    .filter(Boolean);

  const body = [
    `# ${pattern.code} — ${pattern.title}`,
    "",
    `Status: ${pattern.status}`,
    `Canonical URL: ${pattern.url}`,
    "",
    "## Summary",
    "",
    pattern.summary,
    "",
    "## Primary Lenses",
    "",
    ...formatLinkedItems(primaryLenses),
    "",
    "## Secondary Lenses",
    "",
    ...formatLinkedItems(secondaryLenses),
    "",
    "## Primary Issue Matches",
    "",
    ...formatIssueItems(primaryIssues),
    "",
    "## Supporting Issue Matches",
    "",
    ...formatIssueItems(supportingIssues),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}

function formatLinkedItems(items: Array<{ code?: string; title: string; url: string; summary: string }>) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.flatMap((item) => [
    `- ${item.code ? `${item.code} — ` : ""}${item.title}`,
    `  - URL: ${item.url}`,
    `  - Summary: ${item.summary}`,
  ]);
}

function formatIssueItems(items: Array<{ title: string; url: string; summary: string }>) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.flatMap((item) => [
    `- ${item.title}`,
    `  - URL: ${item.url}`,
    `  - Summary: ${item.summary}`,
  ]);
}