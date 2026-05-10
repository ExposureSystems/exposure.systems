import ontologyIndex from "../../../content/_meta/ontology-index.json";
import release from "../../../ontology/ontology-release.json";

export function getStaticPaths() {
  return ontologyIndex.issues.map((issue) => ({
    params: { slug: issue.slug },
    props: { issue },
  }));
}

export function GET({ props }: { props: { issue: (typeof ontologyIndex.issues)[number] } }) {
  const { issue } = props;

  const category = ontologyIndex.categories.find((item) => item.slug === issue.category);

  const primaryPattern = ontologyIndex.patterns.find(
    (pattern) => pattern.slug === issue.primary_pattern
  );

  const declaredPatterns = issue.patterns
    .map((slug) => ontologyIndex.patterns.find((pattern) => pattern.slug === slug))
    .filter(Boolean);

  const primaryLenses = issue.derived_lenses.primary
    .map((slug) => ontologyIndex.lenses.find((lens) => lens.slug === slug))
    .filter(Boolean);

  const secondaryLenses = issue.derived_lenses.secondary
    .map((slug) => ontologyIndex.lenses.find((lens) => lens.slug === slug))
    .filter(Boolean);

  const body = [
    `# ${issue.title}`,
    "",
    "## Ontology Metadata",
    "",
    `Code: ${issue.code}`,
    `Version: ${issue.code}@${issue.entry_version}`,
    `Ontology release: ${release.ontology_release}`,
    `Updated: ${issue.updated_at}`,
    `Canonical URL: ${issue.url}`,
    "",
    "## Summary",
    "",
    issue.summary,
    "",
    "## Category",
    "",
    category
      ? `- ${category.code} — ${category.title}\n  - URL: ${category.url}\n  - Summary: ${category.summary}`
      : `- ${issue.category}`,
    "",
    "## Primary Pattern",
    "",
    primaryPattern
      ? `- ${primaryPattern.code} — ${primaryPattern.title}\n  - URL: ${primaryPattern.url}\n  - Summary: ${primaryPattern.summary}`
      : `- ${issue.primary_pattern}`,
    "",
    "## Declared Patterns",
    "",
    ...formatPatternItems(declaredPatterns),
    "",
    "## Derived Primary Lenses",
    "",
    ...formatLensItems(primaryLenses),
    "",
    "## Derived Secondary Lenses",
    "",
    ...formatLensItems(secondaryLenses),
    "",
    "## Search Intents",
    "",
    ...formatTextItems(issue.search_intents),
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

function formatLensItems(items: Array<{ code?: string; title: string; url: string; summary: string }>) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.flatMap((item) => [
    `- ${item.code ? `${item.code} — ` : ""}${item.title}`,
    `  - URL: ${item.url}`,
    `  - Summary: ${item.summary}`,
  ]);
}

function formatTextItems(items: string[]) {
  if (items.length === 0) {
    return ["None."];
  }

  return items.map((item) => `- ${item}`);
}