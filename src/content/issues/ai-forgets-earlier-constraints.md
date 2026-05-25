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
  - ChatGPT forgot my instructions
  - agent forgot the rule
  - AI stopped following earlier constraint
  - AI followed the rule at first then forgot
---

# AI Forgets Earlier Constraints

## What This Looks Like

The AI follows a rule, preference, instruction, or constraint early in the task, then later behaves as if that constraint is no longer active. The user may have to repeat the same rule or correct the same drift multiple times.

## Why It Matters

Many AI workflows depend on task state carrying forward. When constraints disappear mid-task, later outputs can violate scope, format, tone, policy, evidence limits, or prior decisions without making it obvious that the active context has changed.

## Structural Signal

A constraint was introduced earlier and should still govern later output, but it stops affecting behavior. The continuity between prior instruction and current output has become unstable.

## Common Triggers

- Long-running conversations or multi-step tasks
- Context summarization or compaction
- Several constraints competing for attention
- Weakly declared persistence rules
- Workflow steps that fail to carry forward task state

## When to Use This Issue

Use this Issue when the user experience is: “I already told it this, and it stopped following it.”

## When Not to Use This Issue

Do not use this Issue when the problem is saved product memory, account-level memory settings, or an app-specific memory feature failing. Those may be AI-Adjacent Issues unless the structural signal is also present.
