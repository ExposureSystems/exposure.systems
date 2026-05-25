---
layer: issue
ontology_slug: schema-reference-loops-without-base-case
title: Schema Reference Loops Without Base Case
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A schema, field, type, object, or structured reference points through a loop without a base case that allows validation or interpretation to resolve.
code: ISS-0091
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0010
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - schema-breakage
  - reference-instability
search_intents:
  - schema reference loops without base case
  - recursive schema no base case
  - AI schema reference loop
  - structured output schema loops
  - JSON schema circular reference
  - schema cannot resolve reference
---

## What This Looks Like

A schema, type, field, object, or reference points back to itself through one or more layers without a clear base case. The AI output, validator, parser, or workflow may not be able to determine where the structure ends, how to validate it, or which referenced object should control the result.

## Why It Matters

Structured systems need reference resolution. If a schema reference loops without a base case, validation can fail, generated output can become unstable, or nested objects can expand without a usable stopping point. The structure may look formally connected but still be impossible to resolve.

## Structural Signal

A reference path cycles without a terminal condition. The issue is not simply that a schema is complex; it is that the schema cannot resolve because the reference loop has no declared base case.

## Common Triggers

- Recursive schemas omit a stopping condition
- Field definitions reference parent objects without limiting depth
- Type aliases point through each other and back to the start
- The AI generates nested objects by repeating the same structure
- Validators allow references but require a base case not provided
- Documentation describes recursion without declaring allowed termination

## When to Use This Issue

Use this Issue when a schema, field, type, or structured reference loops in a way that prevents validation, generation, or interpretation from resolving.

## When Not to Use This Issue

Do not use this Issue for ordinary nested fields or valid recursive structures with a clear base case. Use it when the loop prevents resolution.
