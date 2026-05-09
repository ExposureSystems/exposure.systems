import vocabulary from "../../../ontology/check-input-vocabulary.json";

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
  return new Response(JSON.stringify(vocabulary, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}