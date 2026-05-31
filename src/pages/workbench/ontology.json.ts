import ontologyIndex from "../../content/_meta/ontology-index.json";

export function GET() {
  return new Response(JSON.stringify(ontologyIndex, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
