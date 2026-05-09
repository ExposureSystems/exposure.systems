import matrix from "../../../ontology/pattern-lens-matrix.json";

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
  return new Response(JSON.stringify(matrix, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}