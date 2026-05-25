---
layer: issue
ontology_slug: format-rule-too-weak
title: Format Rule Too Weak
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The format instruction is too vague, incomplete, or optional to reliably produce output that satisfies the expected structure.
code: ISS-0028
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0010
primary_pattern: constraints-underspecified
patterns:
  - constraints-underspecified
  - incomplete-declaration
  - schema-breakage
search_intents:
  - format rule too weak
  - AI did not follow output format
  - prompt format instructions too vague
  - output format not strict enough
  - AI ignores format rule
  - structured output rule incomplete
---

## What This Looks Like

The user asks for a format, but the instruction is too weak to reliably govern the output. The AI may follow the format partially, add extra text, omit required parts, change labels, reorder fields, or treat the requested structure as a loose preference instead of a contract.

## Why It Matters

Weak format rules create unstable outputs. A human may still understand the answer, but a parser, reviewer, template, workflow, or downstream system may not be able to rely on it. This can lead to repeated prompt fixes instead of a stable output contract.

## Structural Signal

A formatting constraint exists, but it does not fully declare what the output must include, exclude, preserve, or forbid. The issue is not merely noncompliance; it is that the rule itself does not provide enough structure to enforce the desired form.

## Common Triggers

- The prompt says “use this format” without defining required fields
- Examples are treated as suggestions instead of constraints
- The output rule does not forbid commentary or extra sections
- Required ordering, labels, or field behavior is not declared
- The format depends on implied expectations from prior context
- The user expects strict structure but gives natural-language guidance

## When to Use This Issue

Use this Issue when the output format fails because the rule governing it is too vague, incomplete, optional, or under-specified to reliably produce the expected structure.

## When Not to Use This Issue

Do not use this Issue when the format rule is clear and the AI simply violates it. Do not use it when the issue is a specific missing field, wrong type, or parser failure unless the root problem is the weak rule.
