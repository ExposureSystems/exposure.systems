import { defineCollection, z } from "astro:content";

const baseEntry = {
  title: z.string(),
  status: z.enum(["draft", "stable"]).default("draft"),
};

const issues = defineCollection({
  type: "content",
  schema: z
    .object({
      layer: z.literal("issue").default("issue"),
      ...baseEntry,
      category: z.string(),
      summary: z.string(),
      primary_pattern: z.string(),
      patterns: z.array(z.string()).min(1),
      search_intents: z.array(z.string()).default([]),
    })
    .strict(),
});

const patterns = defineCollection({
  type: "content",
  schema: z
    .object({
      layer: z.literal("pattern").default("pattern"),
      ...baseEntry,
      summary: z.string(),
      code: z.string().regex(/^PAT-\d{3}$/),
    })
    .strict(),
});

const lenses = defineCollection({
  type: "content",
  schema: z
    .object({
      layer: z.literal("lens").default("lens"),
      ...baseEntry,
      summary: z.string(),
      code: z.string().regex(/^LEN-\d{3}$/),
    })
    .strict(),
});

const categories = defineCollection({
  type: "content",
  schema: z
    .object({
      layer: z.literal("category").default("category"),
      ...baseEntry,
      summary: z.string(),
    })
    .strict(),
});

export const collections = {
  issues,
  patterns,
  lenses,
  categories,
};