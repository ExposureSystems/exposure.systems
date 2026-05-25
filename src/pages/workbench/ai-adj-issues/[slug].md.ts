import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const entries = await getCollection("ai-adj-issues");

  return entries.map((entry) => ({
    params: { slug: entry.data.ontology_slug },
    props: { entry },
  }));
}

export async function GET({ props }) {
  const { entry } = props;
  const body = entry.body ?? "";

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}