import checkInputIndex from "../../../content/_meta/check-input-index.json";

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
  return new Response(JSON.stringify(checkInputIndex, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}