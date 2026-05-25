---
layer: issue
ontology_slug: hidden-rule-overrides-visible-instruction
title: Hidden Rule Overrides Visible Instruction
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A hidden, upstream, system, policy, tool, or product rule changes or overrides the visible instruction the user expects the AI to follow.
code: ISS-0039
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0050
primary_pattern: authority-shadowing
patterns:
  - authority-shadowing
  - authority-collision
  - boundary-leakage
search_intents:
  - hidden rule overrides visible instruction
  - AI ignored prompt because hidden rule
  - system rule overrides user instruction
  - invisible policy changed AI behavior
  - hidden instruction affected output
  - AI follows rule I cannot see
---

## What This Looks Like

The user gives a visible instruction, but the AI behaves as if another rule is controlling the result. The output may refuse, redirect, reformat, omit, escalate, or constrain the answer because of a system rule, product rule, policy, tool limitation, or hidden workflow instruction that the user cannot directly inspect.

## Why It Matters

Hidden authority can make behavior look arbitrary. The user may think the AI is ignoring the prompt, malfunctioning, or being inconsistent when it is actually following a higher-priority rule. Without visibility into the override, the user cannot understand what instruction is active or how to adjust the task.

## Structural Signal

A visible instruction is present, but an unseen or upstream authority changes how it is applied. The issue is not simply refusal or noncompliance; it is that the governing rule is not visible at the level where the user is trying to control the task.

## Common Triggers

- System or product instructions outrank user instructions
- A policy layer blocks or changes the requested output
- Tool or connector rules constrain what the AI can do
- Workflow prompts include hidden routing or formatting requirements
- The user sees the task instruction but not the governing authority stack
- A safety, compliance, or permission rule silently narrows the response

## When to Use This Issue

Use this Issue when visible user instructions appear to be overridden or reshaped by a hidden, upstream, system, policy, tool, or product rule.

## When Not to Use This Issue

Do not use this Issue when the visible instruction is vague, impossible, or contradicted by another visible rule. Do not use it when the AI simply makes an error. This Issue applies when an unseen authority changes the visible instruction’s effect.
