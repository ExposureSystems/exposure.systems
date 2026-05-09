import ontologyIndex from "../../../content/_meta/ontology-index.json";

export function getStaticPaths() {
  return [
    {
      params: {
        internal: "_internal",
      },
    },
  ];
}

export function GET() {
  return new Response(JSON.stringify(ontologyIndex, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}