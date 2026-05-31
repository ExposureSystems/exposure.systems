export async function GET() {
  const body = `# PENGO Systems

PENGO Systems builds structural tools for inspecting AI asks, visible failure surfaces, recurring patterns, diagnostic lenses, and control surfaces for observable AI work.

Pengology is the underlying structural language and ontology used across PENGO Systems.

Workbench is the first public diagnostic surface under PENGO Systems.

## Key Pages

- https://pengosystems.com/
- https://pengosystems.com/workbench/
- https://pengosystems.com/workbench/start-here/
- https://pengosystems.com/workbench/check-input/
- https://pengosystems.com/workbench/explore-results/
- https://pengosystems.com/workbench/search/
- https://pengosystems.com/workbench/issues/
- https://pengosystems.com/workbench/ai-adj-issues/
- https://pengosystems.com/workbench/patterns/
- https://pengosystems.com/workbench/lenses/
- https://pengosystems.com/workbench/ontology/changelog/
- https://pengosystems.com/workbench/use-attribution/
- https://pengosystems.com/workbench/terms/

## Public Workbench Machine References

- https://pengosystems.com/workbench/llms.txt
- https://pengosystems.com/workbench/machine-sitemap.xml
- https://pengosystems.com/workbench/ontology.json

## Product Direction

Workbench is the public diagnostic surface for Pengology.

Future PENGO Systems pages may include app explainers, product routing, field notes, articles, video, training material, and links to standalone product websites.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
