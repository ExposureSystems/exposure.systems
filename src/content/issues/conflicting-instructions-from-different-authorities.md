---
layer: issue
ontology_slug: conflicting-instructions-from-different-authorities
title: Conflicting Instructions From Different Authorities
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Instructions from different sources, roles, policies, prompts, tools, or workflow authorities conflict without a clear rule for which one governs.
code: ISS-0035
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0050
primary_pattern: authority-collision
patterns:
  - authority-collision
  - authority-shadowing
  - authority-merge-conflict
search_intents:
  - conflicting instructions from different authorities
  - AI got conflicting instructions
  - system and user instructions conflict
  - policy conflicts with prompt
  - tool rule conflicts with user request
  - different authorities give different instructions
---

## What This Looks Like

The AI receives instructions from multiple authority sources that cannot all be followed at the same time. A system rule, user request, policy, workflow instruction, tool constraint, reviewer note, or role expectation may point in a different direction, and the output does not make clear which authority governs the result.

## Why It Matters

Conflicting authority creates unstable behavior. The AI may follow the wrong instruction, mix incompatible requirements, ignore a higher-priority rule, or appear inconsistent across similar cases. Users then have to determine whether the problem came from the prompt, the policy, the tool, or the ordering of authorities.

## Structural Signal

Multiple instruction sources occupy the same decision space without a declared precedence or reconciliation rule. The issue is not merely that the AI disobeyed an instruction; it is that the governing authority structure is internally conflicted.

## Common Triggers

- System, developer, user, policy, and tool instructions overlap
- A workflow rule conflicts with a user-facing prompt
- A hidden policy changes how visible instructions are applied
- Different roles provide incompatible requirements
- Tool limitations contradict the requested action
- The prompt does not declare how to resolve authority conflicts

## When to Use This Issue

Use this Issue when the AI is governed by conflicting instructions from different authorities and the conflict affects the output, action, routing, or refusal.

## When Not to Use This Issue

Do not use this Issue when a single instruction is vague, missing, or simply ignored. Do not use it when the authorities are compatible but the AI makes a mistake. This Issue applies when the instruction set itself contains an unresolved authority conflict.
