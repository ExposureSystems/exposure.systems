---
layer: issue
ontology_slug: duplicate-output-sections
title: Duplicate Output Sections
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI repeats sections, headings, blocks, or output areas in a way that creates redundancy, confusion, or downstream handling problems.
code: ISS-0066
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0010
primary_pattern: redundant-declaration
patterns:
  - redundant-declaration
  - density-spike
  - schema-breakage
search_intents:
  - duplicate output sections
  - AI repeated sections
  - ChatGPT duplicated headings
  - output has duplicate blocks
  - AI response repeated same section
  - duplicate structured output sections
---

## What This Looks Like

The AI returns an answer with repeated sections, duplicate headings, repeated blocks, or multiple output areas that appear to serve the same purpose. The duplicated sections may contain the same content, slightly different content, or conflicting versions of what should have been one section.

## Why It Matters

Duplicate sections make it harder to know which part of the output is authoritative. Users may have to compare repeated blocks manually, and downstream parsers or review steps may treat duplicate sections as separate records or conflicting instructions.

## Structural Signal

The output declares the same structural area more than once. The issue is not ordinary repetition inside prose; it is duplicated output structure that creates ambiguity or overload.

## Common Triggers

- The prompt includes repeated format instructions
- The AI restarts the answer partway through
- A repair step appends a corrected section instead of replacing the old one
- Examples in the prompt contain repeated headings
- The model tries to satisfy multiple similar output requirements separately
- Structured sections are not defined as unique

## When to Use This Issue

Use this Issue when repeated sections, headings, or output blocks create redundant structure or uncertainty about which section should be used.

## When Not to Use This Issue

Do not use this Issue for minor repeated wording that does not affect the output structure. Do not use it when the user explicitly asked for repeated sections across multiple items.
