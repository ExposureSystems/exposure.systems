---
layer: issue
ontology_slug: action-changed-something-else-too
title: Action Changed Something Else Too
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An AI or agent action makes the requested change but also changes another object, field, file, state, rule, or workflow element that was not supposed to change.
code: ISS-0046
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0100
primary_pattern: undeclared-side-effect
patterns:
  - undeclared-side-effect
  - propagation-amplification
  - boundary-leakage
search_intents:
  - action changed something else too
  - AI changed unrelated thing too
  - agent side effect
  - fix changed other file
  - AI action had unintended side effect
  - requested change affected something else
---

## What This Looks Like

The AI or agent performs the requested action, but another thing changes too. A field, file, section, setting, record, rule, or downstream state may be altered even though the user only asked for one bounded change. The requested result may be present, but it comes with an unintended side effect.

## Why It Matters

Unintended side effects make AI-assisted work harder to trust. The user cannot review only the requested change; they must inspect surrounding state to see what else moved. In workflows with tools or agents, a small action can become risky if it quietly propagates beyond its declared target.

## Structural Signal

An action has effects outside its declared change surface. The issue is not simply that the action failed; it is that the action succeeded in one area while also producing an undeclared secondary effect.

## Common Triggers

- The allowed change surface is not explicitly bounded
- The agent applies a fix globally instead of locally
- A tool operation has broader effects than the prompt describes
- The AI rewrites context around the target change
- A repair step updates dependent objects without declaring them
- The workflow does not compare intended and actual change sets

## When to Use This Issue

Use this Issue when an AI or agent action makes the requested change but also changes something else that was not supposed to be affected.

## When Not to Use This Issue

Do not use this Issue when the unrelated change was explicitly requested or required. Do not use it when the main issue is only that the requested change failed. This Issue applies when there is an unintended secondary effect.
