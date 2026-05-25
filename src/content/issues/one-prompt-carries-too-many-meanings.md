---
layer: issue
ontology_slug: one-prompt-carries-too-many-meanings
title: One Prompt Carries Too Many Meanings
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A single prompt carries too many meanings, goals, roles, constraints, or implied tasks for the AI to interpret consistently.
code: ISS-0104
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0120
primary_pattern: density-spike
patterns:
  - density-spike
  - constraints-underspecified
  - divergent-outputs
search_intents:
  - one prompt carries too many meanings
  - AI prompt has too many meanings
  - prompt is overloaded
  - one prompt asks too much
  - prompt mixes too many goals
  - AI confused by overloaded prompt
---

## What This Looks Like

A single prompt tries to carry too many meanings at once. It may combine several goals, roles, audiences, constraints, formats, decisions, or implied tasks. The AI may choose one meaning, blend several together, or produce an output that satisfies part of the prompt while missing another part.

## Why It Matters

Overloaded prompts are hard to interpret and hard to evaluate. If one prompt carries too many meanings, different outputs can look partially correct for different reasons. The user may not know whether the AI failed or whether the prompt lacked enough separation between tasks.

## Structural Signal

Too much semantic load is concentrated in one prompt. The issue is not simply that the prompt is long; it is that the prompt contains multiple meanings that should be separated, prioritized, or governed by clearer constraints.

## Common Triggers

- The prompt combines analysis, generation, review, and decision-making
- Multiple audiences or output purposes are implied
- Several constraints compete without priority
- The prompt mixes task instructions with policy, style, and workflow rules
- The user asks for both exploration and final answer in one request
- Examples point toward different interpretations

## When to Use This Issue

Use this Issue when one prompt carries too many meanings for the AI to interpret or execute consistently.

## When Not to Use This Issue

Do not use this Issue when a prompt is detailed but well-structured. Do not use it when the problem is one missing constraint rather than too many meanings concentrated in the same prompt.
