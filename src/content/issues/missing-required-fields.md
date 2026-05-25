---
layer: issue
ontology_slug: missing-required-fields
title: Missing Required Fields
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI returns structured output that omits fields required by the schema, workflow, parser, form, or downstream consumer.
code: ISS-0022
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0120
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - schema-breakage
  - density-vacuum
search_intents:
  - missing required fields
  - AI output missing fields
  - structured output missing required field
  - JSON missing required keys
  - AI skipped required fields
  - schema validation missing fields
---

## What This Looks Like

The AI returns structured output, a form-like response, JSON, table rows, metadata, or a generated record, but required fields are missing. The output may parse correctly and may even look organized, yet a validator, reviewer, importer, or downstream workflow cannot proceed because expected fields are absent.

## Why It Matters

Missing required fields create incomplete handoffs. A user or system may not notice the problem until validation, import, review, or execution. Even when the visible answer seems useful, the absence of required fields means the output does not satisfy the contract it was supposed to meet.

## Structural Signal

A required field set exists, but the generated object does not fully instantiate it. The issue is not invalid syntax; it is an incomplete declaration relative to the schema, workflow, or consumer requirement.

## Common Triggers

- Required fields are implied by examples but not stated as hard requirements
- The model treats empty, unknown, or unavailable values as permission to omit a field
- The output format is requested without a validation checklist
- Long schemas cause lower-salience fields to be dropped
- The prompt asks for concision and completeness at the same time
- The workflow does not declare placeholder behavior for unavailable required values

## When to Use This Issue

Use this Issue when the output is missing fields that are required by the expected schema, template, form, parser, workflow, or downstream consumer.

## When Not to Use This Issue

Do not use this Issue when fields are present but contain wrong values, wrong types, or hallucinated content. Do not use it when the entire output is malformed and cannot be parsed at all.
