---
layer: issue
ontology_slug: prompt-does-not-say-what-to-exclude
title: Prompt Does Not Say What to Exclude
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The prompt declares what to include but does not declare what should be excluded, allowing unwanted scope, sources, content, or actions into the result.
code: ISS-0076
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0100
primary_pattern: constraints-underspecified
patterns:
  - constraints-underspecified
  - boundary-leakage
  - unbounded-scope
search_intents:
  - prompt does not say what to exclude
  - AI included things I did not want
  - missing exclusion rule
  - prompt only says what to include
  - AI used unwanted content
  - need to tell AI what not to include
---

## What This Looks Like

The prompt tells the AI what to include, but does not say what to exclude. The output may bring in extra topics, sources, assumptions, sections, examples, actions, or surrounding context that the user did not want but also did not explicitly rule out.

## Why It Matters

Inclusion rules do not automatically create exclusion boundaries. If the prompt does not declare what should stay out, the AI may expand into adjacent material that feels helpful but changes the task. This creates review burden and can make output appear noncompliant even when the prompt did not define the boundary.

## Structural Signal

The task has positive guidance but lacks negative constraints. The issue is not simply that the AI overreached; it is that the prompt does not provide enough exclusion structure to prevent unwanted scope from entering the output.

## Common Triggers

- The prompt says what to cover but not what to avoid
- Source boundaries are implied rather than explicit
- The AI fills gaps with adjacent examples or background
- The task asks for a focused answer without defining out-of-scope areas
- The model treats related material as relevant
- The output format has no section or content exclusion rules

## When to Use This Issue

Use this Issue when unwanted material enters the output because the prompt declares inclusion but does not clearly declare exclusions.

## When Not to Use This Issue

Do not use this Issue when exclusions are clearly stated and the AI ignores them. Do not use it when broad coverage was requested.
