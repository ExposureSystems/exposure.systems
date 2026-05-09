import searchIndex from "../../../content/_meta/search-index.json";

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
  return new Response(JSON.stringify(searchIndex, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}