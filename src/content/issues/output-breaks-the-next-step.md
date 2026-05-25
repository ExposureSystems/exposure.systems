---
layer: issue
ontology_slug: output-breaks-the-next-step
title: Output Breaks the Next Step
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI output looks acceptable by itself but cannot be used by the next tool, workflow step, parser, reviewer, or downstream consumer.
code: ISS-0018
category: mcp-tools-and-integrations
primary_cat_code: CAT-0040
secondary_cat_codes:
  - CAT-0010
primary_pattern: compatibility-violation
patterns:
  - compatibility-violation
  - interface-mismatch
  - schema-breakage
search_intents:
  - output breaks the next step
  - AI output fails downstream
  - response cannot be used by next tool
  - AI output breaks workflow
  - output looks right but next step fails
  - downstream parser rejects AI output
---

## What This Looks Like

The AI produces an answer, file, field, payload, or structured response that appears usable to the user, but the next step cannot consume it. A parser may reject it, a workflow may stop, a tool may fail, or a reviewer may be unable to continue because the output does not meet the next consumer’s requirements.

## Why It Matters

AI output often sits in a chain. If the next step cannot use it, the answer is not operationally complete even if it looks reasonable in isolation. This can create hidden breakage where the user only discovers the issue after trying to pass the output into another system.

## Structural Signal

The output crosses one boundary successfully but fails at the next interface. The issue is not only whether the output is understandable; it is whether the output fits the declared requirements of the downstream consumer.

## Common Triggers

- The prompt optimizes for readable output instead of downstream compatibility
- The next step expects stricter structure than the user-facing answer provides
- Required fields, formats, labels, or delimiters are not preserved
- The answer mixes explanation with machine-consumable output
- The tool or workflow consumer has constraints not visible in the prompt
- A valid-looking answer violates a parser, importer, schema, or handoff contract

## When to Use This Issue

Use this Issue when the AI output fails because the next workflow step, tool, parser, importer, or downstream consumer cannot use it as produced.

## When Not to Use This Issue

Do not use this Issue when the output is simply factually wrong, incomplete for the user, or poorly written. Use it when the failure appears at the handoff into the next step.
