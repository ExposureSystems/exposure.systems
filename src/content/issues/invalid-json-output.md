---
layer: issue
ontology_slug: invalid-json-output
title: Invalid JSON Output
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI returns malformed JSON or structured output that cannot be parsed.
code: ISS-0021
category: output
primary_cat_code: CAT-0010
secondary_cat_codes: []
primary_pattern: schema-breakage
patterns:
  - schema-breakage
  - interface-mismatch
  - constraints-underspecified
search_intents:
  - AI invalid JSON
  - ChatGPT malformed JSON
  - JSON parse error AI output
  - LLM output invalid JSON
  - AI gave JSON that will not parse
  - malformed structured output
---

## What This Looks Like

The AI returns something that looks like JSON or structured output, but the result will not parse. The user may see broken braces, unescaped quotes, trailing commas, mixed prose inside the JSON, comments inside the object, or an output block that a parser rejects even though a human can understand the intent.

## Why It Matters

Structured output often sits between the AI and another system. If the JSON is invalid, downstream parsing, validation, importing, automation, or tool execution can fail immediately. This turns a small-looking formatting failure into a workflow blocker.

## Structural Signal

A structured output contract exists, but the generated response violates the parseable form required by the consumer. The issue is not whether the answer is semantically useful; it is whether the output can cross the interface boundary as valid structured data.

## Common Triggers

- The prompt asks for JSON but also invites explanation or commentary
- Format constraints are weak or incomplete
- The output mixes prose and structured data
- The model optimizes for readability instead of parseability
- Required schema rules are implied but not enforced
- The response includes markdown, comments, or surrounding text where raw JSON was required

## When to Use This Issue

Use this Issue when the central failure is that generated JSON or structured output cannot be parsed by the expected consumer.

## When Not to Use This Issue

Do not use this Issue when the JSON parses successfully but contains wrong values, missing fields, extra fields, or wrong field types. Those are separate structured-output Issues.
