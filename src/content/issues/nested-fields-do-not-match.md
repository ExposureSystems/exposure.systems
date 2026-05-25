---
layer: issue
ontology_slug: nested-fields-do-not-match
title: Nested Fields Do Not Match
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI returns nested structured fields whose internal shape, hierarchy, parent-child relationship, or contained values do not match the expected structure.
code: ISS-0025
category: output
primary_cat_code: CAT-0010
secondary_cat_codes: []
primary_pattern: schema-breakage
patterns:
  - schema-breakage
  - interface-mismatch
  - invariant-breakage
search_intents:
  - nested fields do not match
  - AI output nested fields wrong
  - JSON nested object wrong shape
  - nested schema mismatch
  - AI returned wrong nested structure
  - child fields do not match parent field
---

## What This Looks Like

The AI returns structured output where top-level fields may look correct, but nested objects, arrays, child fields, or grouped values do not match the expected structure. A nested field may be placed under the wrong parent, contain the wrong child shape, mix incompatible items, or flatten structure that should remain hierarchical.

## Why It Matters

Nested structure often carries meaning that flat fields cannot preserve. If nested fields do not match, downstream systems may parse the output but interpret it incorrectly. Reviewers may also miss the problem because the visible field names appear correct while the internal structure is wrong.

## Structural Signal

The output satisfies part of the declared structure but breaks the internal relationship between parent fields, child fields, arrays, objects, or grouped values. The issue is not just that one value is wrong; it is that the nested structure does not preserve the expected shape.

## Common Triggers

- The prompt describes field names but not their parent-child relationships
- The model flattens nested structure for readability
- Arrays and objects are mixed under the same field
- Example outputs show incomplete nesting
- The schema has repeated field names at different depths
- The AI preserves labels but not the structural hierarchy

## When to Use This Issue

Use this Issue when the output includes nested structured data, but the internal hierarchy, child fields, grouping, or nested shape does not match the expected schema or consumer requirement.

## When Not to Use This Issue

Do not use this Issue when the entire JSON is invalid, when required fields are missing, or when a single flat field has the wrong type. Use this Issue when the problem is specifically inside nested structure.
