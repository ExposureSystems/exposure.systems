---
layer: issue
ontology_slug: hallucinated-fields
title: Hallucinated Fields
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI adds fields, keys, attributes, columns, or structured elements that were not declared, requested, or allowed by the expected schema.
code: ISS-0023
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0100
primary_pattern: overreach
patterns:
  - overreach
  - schema-breakage
  - unbounded-scope
search_intents:
  - hallucinated fields
  - AI added extra JSON fields
  - structured output has extra keys
  - AI invented fields
  - schema has unexpected fields
  - output includes fields not requested
---

## What This Looks Like

The AI returns structured output with fields, keys, columns, attributes, labels, or sections that were not requested or allowed. The added fields may look plausible, helpful, or semantically related, but they are not part of the expected schema or output contract.

## Why It Matters

Extra fields can break validation, imports, downstream parsing, review, and automation. Even when the extra content is understandable, it may create ambiguity about which structure is authoritative. In some workflows, hallucinated fields can also create false obligations or imply data that was never collected.

## Structural Signal

The output exceeds the declared field boundary. The issue is not that the content is necessarily false; it is that the AI adds structural elements outside the allowed schema, template, or requested output surface.

## Common Triggers

- The prompt gives examples that imply fields not present in the actual schema
- The model fills perceived gaps with plausible attributes
- The output contract does not explicitly forbid extra fields
- The AI tries to be helpful by adding context fields
- The schema changes but older field names remain in context
- The task mixes freeform explanation with strict structured output

## When to Use This Issue

Use this Issue when the AI adds structured fields, keys, attributes, columns, or sections that are not declared, requested, or allowed.

## When Not to Use This Issue

Do not use this Issue when a required field is missing, when a field has the wrong type, or when the whole structured response is invalid. Use this Issue when the problem is extra structure beyond the allowed boundary.
