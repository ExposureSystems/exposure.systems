import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type MatrixEntry = {
  primary: string[];
  secondary: string[];
};

type PatternLensMatrix = Record<string, MatrixEntry>;

type CheckInputMatrixEntry = {
  patterns: {
    primary: string[];
    secondary: string[];
  };
};

type CheckInputMatrix = Record<string, CheckInputMatrixEntry>;

type EntryData = {
  slug: string;
  code?: string;
  title: string;
  status: string;
  summary: string;
  category?: string;
  primary_pattern?: string;
  patterns?: string[];
  search_intents?: string[];
};

const matrixPath = "src/ontology/pattern-lens-matrix.json";
const checkInputMatrixPath = "src/ontology/check-input-matrix.json";

const issuesDir = "src/content/issues";
const patternsDir = "src/content/patterns";
const lensesDir = "src/content/lenses";
const categoriesDir = "src/content/categories";

const ontologyOutputPath = "src/content/_meta/ontology-index.json";
const searchOutputPath = "src/content/_meta/search-index.json";
const checkInputOutputPath = "src/content/_meta/check-input-index.json";

const routes = {
  root: "/workbench/",
  check_input: "/workbench/check-input/",
  gap_explorer: "/workbench/gap-explorer/",
  search: "/workbench/search/",
  issues: "/workbench/issues/",
  patterns: "/workbench/patterns/",
  lenses: "/workbench/lenses/",
  categories: "/workbench/categories/",
  examples: "/workbench/examples/",
  field_notes: "/workbench/field-notes/",
  articles: "/workbench/articles/",
  videos: "/workbench/videos/",
  internal: "/workbench/_internal/",
};

function getMarkdownFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => path.join(dir, file));
}

function readEntry(filePath: string): EntryData {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = matter(raw).data as EntryData;
  return data;
}

function sortBySlug<T extends { slug: string }>(items: T[]) {
  return items.sort((a, b) => a.slug.localeCompare(b.slug));
}

function uniqueSorted(values: string[]) {
  return [...new Set(values)].sort();
}

function readCollection(dir: string) {
  return sortBySlug(getMarkdownFiles(dir).map(readEntry));
}

function main() {
  const matrix = JSON.parse(fs.readFileSync(matrixPath, "utf-8")) as PatternLensMatrix;
  const checkInputMatrix = JSON.parse(
    fs.readFileSync(checkInputMatrixPath, "utf-8")
  ) as CheckInputMatrix;

  const issues = readCollection(issuesDir);
  const patterns = readCollection(patternsDir);
  const lenses = readCollection(lensesDir);
  const categories = readCollection(categoriesDir);

  const categoriesBySlug = new Map(categories.map((category) => [category.slug, category]));

  const derivedIssues = issues.map((issue) => {
    const issuePatterns = issue.patterns ?? [];

    const primaryLensSlugs = uniqueSorted(
      issuePatterns.flatMap((patternSlug) => matrix[patternSlug]?.primary ?? [])
    );

    const secondaryLensSlugs = uniqueSorted(
      issuePatterns.flatMap((patternSlug) => matrix[patternSlug]?.secondary ?? [])
    ).filter((lensSlug) => !primaryLensSlugs.includes(lensSlug));

    return {
      slug: issue.slug,
      title: issue.title,
      status: issue.status,
      summary: issue.summary,
      category: issue.category,
      category_title: issue.category ? categoriesBySlug.get(issue.category)?.title ?? null : null,
      primary_pattern: issue.primary_pattern,
      patterns: issuePatterns,
      derived_lenses: {
        primary: primaryLensSlugs,
        secondary: secondaryLensSlugs,
      },
      search_intents: issue.search_intents ?? [],
      url: `/workbench/issues/${issue.slug}/`,
      markdown_url: `/workbench/issues/${issue.slug}.md`,
    };
  });

  const derivedPatterns = patterns.map((pattern) => {
    const matrixEntry = matrix[pattern.slug];

    const primaryIssueSlugs = derivedIssues
      .filter((issue) => issue.primary_pattern === pattern.slug)
      .map((issue) => issue.slug)
      .sort();

    const supportingIssueSlugs = derivedIssues
      .filter((issue) => issue.primary_pattern !== pattern.slug && issue.patterns.includes(pattern.slug))
      .map((issue) => issue.slug)
      .sort();

    return {
      slug: pattern.slug,
      code: pattern.code,
      title: pattern.title,
      status: pattern.status,
      summary: pattern.summary,
      lenses: {
        primary: matrixEntry?.primary ?? [],
        secondary: matrixEntry?.secondary ?? [],
      },
      issues: {
        primary: primaryIssueSlugs,
        supporting: supportingIssueSlugs,
      },
      url: `/workbench/patterns/${pattern.slug}/`,
      markdown_url: `/workbench/patterns/${pattern.slug}.md`,
    };
  });

  const derivedLenses = lenses.map((lens) => {
    const primaryPatternSlugs: string[] = [];
    const secondaryPatternSlugs: string[] = [];

    for (const [patternSlug, entry] of Object.entries(matrix)) {
      if (entry.primary.includes(lens.slug)) {
        primaryPatternSlugs.push(patternSlug);
      }

      if (entry.secondary.includes(lens.slug)) {
        secondaryPatternSlugs.push(patternSlug);
      }
    }

    const issueSlugs = derivedIssues
      .filter(
        (issue) =>
          issue.derived_lenses.primary.includes(lens.slug) ||
          issue.derived_lenses.secondary.includes(lens.slug)
      )
      .map((issue) => issue.slug)
      .sort();

    return {
      slug: lens.slug,
      code: lens.code,
      title: lens.title,
      status: lens.status,
      summary: lens.summary,
      patterns: {
        primary: primaryPatternSlugs.sort(),
        secondary: secondaryPatternSlugs.sort(),
      },
      issues: issueSlugs,
      url: `/workbench/lenses/${lens.slug}/`,
      markdown_url: `/workbench/lenses/${lens.slug}.md`,
    };
  });

  const derivedCategories = categories.map((category) => {
    const issueSlugs = derivedIssues
      .filter((issue) => issue.category === category.slug)
      .map((issue) => issue.slug)
      .sort();

    return {
      slug: category.slug,
      title: category.title,
      status: category.status,
      summary: category.summary,
      issues: issueSlugs,
      url: `/workbench/categories/${category.slug}/`,
    };
  });

  const patternsByCode = new Map(
    derivedPatterns
      .filter((pattern) => typeof pattern.code === "string")
      .map((pattern) => [pattern.code, pattern])
  );

  const lensesBySlug = new Map(derivedLenses.map((lens) => [lens.slug, lens]));

  const checkInputIndex = {
    version: 1,
    scope: "detected_gaps",
    note: "Check Input maps controlled gap terms to related Patterns. Useful Lenses are derived through the Pattern -> Lens matrix. Issues are not used as Check Input Step 2 targets.",
    results: Object.entries(checkInputMatrix).map(([detectedGap, entry]) => {
      const primaryPatterns = entry.patterns.primary
        .map((patternCode) => patternsByCode.get(patternCode))
        .filter(Boolean);

      const secondaryPatterns = entry.patterns.secondary
        .map((patternCode) => patternsByCode.get(patternCode))
        .filter(Boolean);

      const allPatterns = [...primaryPatterns, ...secondaryPatterns];

      const usefulLensSlugs = uniqueSorted(
        allPatterns.flatMap((pattern) => [
          ...pattern.lenses.primary,
          ...pattern.lenses.secondary,
        ])
      );

      const usefulLenses = usefulLensSlugs
        .map((lensSlug) => lensesBySlug.get(lensSlug))
        .filter(Boolean);

      return {
        detected_gap: detectedGap,
        patterns: {
          primary: primaryPatterns.map((pattern) => ({
            code: pattern.code,
            slug: pattern.slug,
            title: pattern.title,
            summary: pattern.summary,
            url: pattern.url,
          })),
          secondary: secondaryPatterns.map((pattern) => ({
            code: pattern.code,
            slug: pattern.slug,
            title: pattern.title,
            summary: pattern.summary,
            url: pattern.url,
          })),
        },
        useful_lenses: usefulLenses.map((lens) => ({
          code: lens.code,
          slug: lens.slug,
          title: lens.title,
          summary: lens.summary,
          url: lens.url,
        })),
        caveat: "These are related structural references, not a final diagnosis.",
      };
    }),
  };

  const ontologyIndex = {
    version: 1,
    routes,
    resolver: {
      divu: "https://divu.app/wb/[slug]",
      resolves: ["patterns", "lenses"],
      does_not_resolve: ["issues"],
    },
    matrix,
    issues: derivedIssues,
    patterns: derivedPatterns,
    lenses: derivedLenses,
    categories: derivedCategories,
    lookups: {
      patterns_by_code: Object.fromEntries(
        derivedPatterns.map((pattern) => [pattern.code, pattern.slug])
      ),
      lenses_by_code: Object.fromEntries(
        derivedLenses.map((lens) => [lens.code, lens.slug])
      ),
    },
  };

  const searchIndex = {
    version: 1,
    scope: "issues",
    note: "Search returns Issues. Patterns, Lenses, and Categories are facets derived from the ontology.",
    items: derivedIssues.map((issue) => ({
      type: "issue",
      slug: issue.slug,
      title: issue.title,
      summary: issue.summary,
      url: issue.url,
      category: issue.category,
      category_title: issue.category_title,
      primary_pattern: issue.primary_pattern,
      patterns: issue.patterns,
      lenses: {
        primary: issue.derived_lenses.primary,
        secondary: issue.derived_lenses.secondary,
      },
      search_intents: issue.search_intents,
      text: uniqueSorted([
        issue.title,
        issue.summary,
        issue.category ?? "",
        issue.category_title ?? "",
        issue.primary_pattern ?? "",
        ...issue.patterns,
        ...issue.derived_lenses.primary,
        ...issue.derived_lenses.secondary,
        ...issue.search_intents,
      ].filter(Boolean)).join(" "),
    })),
    facets: {
      categories: derivedCategories.map((category) => ({
        slug: category.slug,
        title: category.title,
        count: category.issues.length,
      })),
      patterns: derivedPatterns.map((pattern) => ({
        slug: pattern.slug,
        code: pattern.code,
        title: pattern.title,
        count: pattern.issues.primary.length + pattern.issues.supporting.length,
      })),
      lenses: derivedLenses.map((lens) => ({
        slug: lens.slug,
        code: lens.code,
        title: lens.title,
        count: lens.issues.length,
      })),
    },
  };

  fs.writeFileSync(ontologyOutputPath, `${JSON.stringify(ontologyIndex, null, 2)}\n`);
  fs.writeFileSync(searchOutputPath, `${JSON.stringify(searchIndex, null, 2)}\n`);
  fs.writeFileSync(checkInputOutputPath, `${JSON.stringify(checkInputIndex, null, 2)}\n`);

  console.log(`Workbench ontology index written to ${ontologyOutputPath}.`);
  console.log(`Workbench search index written to ${searchOutputPath}.`);
  console.log(`Workbench Check Input index written to ${checkInputOutputPath}.`);
}

main();