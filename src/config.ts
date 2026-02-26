import { defineCollection, z } from "astro:content";

const issues = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    patterns: z.array(z.string()).min(1).max(3),
    status: z.enum(["draft", "stable"]).default("draft")
  })
});

const patterns = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    status: z.enum(["stable"]).default("stable")
  })
});

const lenses = defineCollection({
  type: "content",
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    status: z.enum(["stable"]).default("stable")
  })
});

export const collections = {
  issues,
  patterns,
  lenses
};