---
layer: issue
ontology_slug: ai-forgets-earlier-constraints
title: AI Forgets Earlier Constraints
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A constraint, instruction, preference, or decision that should persist through the task stops affecting later output.
code: ISS-0029
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes: []
primary_pattern: persistence-instability
patterns:
  - persistence-instability
  - constraints-underspecified
  - contract-drift
search_intents:
  - AI forgets earlier constraints
  - ChatGPT forgot instructions
  - AI ignored earlier requirement
  - model forgot previous constraint
  - instruction stopped applying later
  - AI lost context rule
---

## What This Looks Like

The user gives a constraint, instruction, preference, format rule, exclusion, or decision that should continue to govern the task, but later output stops following it. The AI may initially comply and then drift, ignore an earlier limit, reintroduce excluded content, or behave as if a prior decision was never made.

## Why It Matters

Many AI workflows depend on constraints persisting across multiple turns, steps, files, or generated artifacts. When earlier constraints stop applying, users have to repeat themselves, audit prior decisions, and check whether later output is still governed by the task contract.

## Structural Signal

A constraint was declared earlier and should remain active, but it loses governing effect in a later state. The issue is not simply that the AI made one mistake; it is that an active constraint failed to persist across the task.

## Common Triggers

- Long conversations push earlier constraints out of the active working context
- Later instructions partially override earlier ones without saying so
- The prompt does not distinguish durable constraints from temporary preferences
- The model optimizes for the latest request and drops prior requirements
- The task spans multiple artifacts or steps without restating the governing rules
- Constraints are embedded in prose instead of maintained as an explicit checklist

## When to Use This Issue

Use this Issue when a prior constraint should still govern the work but stops affecting later output, behavior, formatting, or decisions.

## When Not to Use This Issue

Do not use this Issue when the user changed the instruction, intentionally relaxed the constraint, or never clearly declared the requirement. Do not use it for ordinary context loss unless a specific earlier constraint stopped applying.
