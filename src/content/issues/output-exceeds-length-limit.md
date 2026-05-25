---
layer: issue
ontology_slug: output-exceeds-length-limit
title: Output Exceeds Length Limit
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI output exceeds a declared length, token, word, character, section, field, or size limit.
code: ISS-0060
category: output
primary_cat_code: CAT-0010
secondary_cat_codes: []
primary_pattern: threshold-breach
patterns:
  - threshold-breach
  - constraints-underspecified
  - density-spike
search_intents:
  - output exceeds length limit
  - AI response too long
  - ChatGPT ignored word limit
  - output over character limit
  - AI exceeded token budget
  - answer longer than requested
---

## What This Looks Like

The user gives a length limit, but the AI output exceeds it. The limit may be a word count, character count, token budget, number of bullets, number of sections, field size, summary length, title length, or platform-specific maximum. The answer may otherwise be useful but still violates the declared size boundary.

## Why It Matters

Length limits often exist because another system, surface, reviewer, or workflow requires them. If the AI exceeds the limit, the output may fail import, break formatting, require manual trimming, or become unusable in the intended destination.

## Structural Signal

A size threshold is declared, but the output crosses it. The issue is not that the answer is generally verbose; it is that the response violates a specific limit that was supposed to govern the output.

## Common Triggers

- The limit is stated but not tied to validation
- The model prioritizes completeness over size control
- The prompt includes many required elements without reconciling them with the limit
- The unit of the limit is ambiguous
- The output includes explanation, preface, or caveats outside the requested form
- The system has no post-generation length check

## When to Use This Issue

Use this Issue when the AI output exceeds a declared length, size, count, token, character, field, or section limit.

## When Not to Use This Issue

Do not use this Issue when the user only feels the answer is too long without a declared limit. Do not use it when the main failure is too many conceptual paths rather than a specific size threshold breach.
