---
layer: issue
ontology_slug: answer-has-too-many-paths
title: Answer Has Too Many Paths
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The answer presents too many possible paths, interpretations, options, or next steps without enough structure to choose among them.
code: ISS-0010
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0100
primary_pattern: density-spike
patterns:
  - density-spike
  - unbounded-scope
  - constraints-underspecified
search_intents:
  - answer has too many paths
  - AI gave too many options
  - AI answer is overwhelming
  - too many next steps from AI
  - AI response has too many directions
  - answer does not choose a path
---

## What This Looks Like

The AI gives an answer with many possible options, branches, interpretations, strategies, or next steps, but does not provide enough structure to choose among them. The user may receive a long menu of paths when they needed a narrowed recommendation, decision, sequence, or usable next action.

## Why It Matters

Too many paths can block action as much as too little information. The user has to do the work of sorting, prioritizing, eliminating, and deciding what the AI should have helped structure. In workflow settings, this can push uncertainty downstream and create more review work instead of reducing it.

## Structural Signal

The output contains more branches than the task can use. The issue is not that multiple options exist; it is that the response does not provide a controlling structure, decision rule, priority, or boundary for selecting among them.

## Common Triggers

- The prompt asks for help but does not specify whether to decide, rank, or brainstorm
- The AI tries to be comprehensive instead of useful for the current stage
- Constraints are too weak to eliminate irrelevant paths
- The response mixes primary recommendations with edge cases and optional ideas
- The task has multiple valid interpretations but no declared decision rule
- The model avoids choosing when the user needed a narrowed output

## When to Use This Issue

Use this Issue when the main failure is that the answer creates too many possible paths and does not provide enough structure to help the user choose, sequence, or act.

## When Not to Use This Issue

Do not use this Issue when the user explicitly asked for a broad brainstorm or comprehensive option list. Do not use it when the answer is simply long but still clearly organized around one usable path.
