---
layer: issue
ontology_slug: prompt-has-too-many-valid-interpretations
title: Prompt Has Too Many Valid Interpretations
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The prompt allows too many reasonable interpretations, causing the AI to choose among valid paths without enough guidance.
code: ISS-0071
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0090
primary_pattern: constraints-underspecified
patterns:
  - constraints-underspecified
  - divergent-outputs
  - density-spike
search_intents:
  - prompt has too many valid interpretations
  - AI prompt is ambiguous
  - prompt allows too many meanings
  - same prompt can mean different things
  - AI chose wrong interpretation
  - prompt needs clearer criteria
---

## What This Looks Like

The prompt can reasonably be interpreted in several different ways. The AI chooses one interpretation, but another user, run, reviewer, or model could choose a different path and still appear to be following the request. The output may not be wrong exactly, but it is not governed tightly enough.

## Why It Matters

Ambiguous prompts create unstable outputs. If multiple interpretations are valid, the user may get different answers across runs or from different systems without a clear way to say which one violated the prompt. This makes review, automation, and comparison difficult.

## Structural Signal

The task declaration leaves too many valid paths open. The issue is not that the AI ignored the prompt; it is that the prompt does not provide enough constraints, examples, exclusions, or decision rules to select one intended interpretation.

## Common Triggers

- Key terms are left undefined
- The prompt asks for help without specifying the decision frame
- Output purpose, audience, depth, or source scope is unclear
- Several task types are blended into one request
- Examples imply different interpretations
- The prompt lacks a tie-breaker when multiple paths are reasonable

## When to Use This Issue

Use this Issue when the prompt permits multiple reasonable interpretations and the AI’s selected path becomes unstable, surprising, or hard to evaluate.

## When Not to Use This Issue

Do not use this Issue when the prompt is clear and the AI simply fails to follow it. Do not use it when the user intentionally asks for multiple interpretations or a broad brainstorm.
