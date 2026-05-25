---
layer: issue
ontology_slug: ai-output-breaks-parser
title: AI Output Breaks Parser
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI output causes a parser, validator, importer, or structured-output consumer to fail.
code: ISS-0026
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0040
primary_pattern: schema-breakage
patterns:
  - schema-breakage
  - interface-mismatch
  - compatibility-violation
search_intents:
  - AI output breaks parser
  - parser fails on AI output
  - AI response cannot be parsed
  - structured output parser error
  - AI output breaks importer
  - parser rejects LLM output
---

## What This Looks Like

The AI produces output that a parser, validator, importer, form consumer, or structured-output system cannot process. The output may contain malformed structure, unexpected text, incompatible delimiters, missing boundaries, invalid escaping, or content that does not match what the parser expects.

## Why It Matters

A parser failure usually stops the workflow immediately. The user may not care whether the output looks understandable to a human if the next system cannot ingest it. This can turn a seemingly minor format issue into a hard automation or integration failure.

## Structural Signal

The output fails at the parser boundary. The issue is not only that the answer is messy or semantically imperfect; it is that the generated structure cannot cross into the next system as a valid parseable object.

## Common Triggers

- The AI mixes prose with parser-facing output
- Required delimiters, escaping, or structural markers are missing
- The output format is described informally instead of enforced
- The parser expects stricter structure than the prompt declares
- The model includes markdown fences, commentary, or labels where raw data is required
- The output resembles the target format but violates a parser constraint

## When to Use This Issue

Use this Issue when the main failure is that the generated output breaks a parser, importer, validator, or structured-output consumer.

## When Not to Use This Issue

Do not use this Issue when the output parses correctly but contains wrong values, missing fields, extra fields, or wrong field types. Those are structured-output quality issues rather than parser-boundary failures.
