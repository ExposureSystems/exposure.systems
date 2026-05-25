---
layer: issue
ontology_slug: ai-touches-unrelated-scope
title: AI Touches Unrelated Scope
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI affects, edits, analyzes, changes, or reasons over material outside the scope of the requested task.
code: ISS-0045
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes:
  - CAT-0030
primary_pattern: overreach
patterns:
  - overreach
  - boundary-leakage
  - unbounded-scope
search_intents:
  - AI touches unrelated scope
  - AI changed unrelated content
  - agent edited files not requested
  - AI affected something outside task
  - AI included unrelated scope
  - agent went outside requested area
---

## What This Looks Like

The user asks the AI to work on a specific file, field, section, task, issue, or decision, but the AI also touches unrelated scope. It may edit nearby content, analyze irrelevant material, modify other files, introduce unrelated recommendations, or make changes outside the declared work area.

## Why It Matters

Scope control protects work from unintended side effects. When the AI touches unrelated scope, the user has to audit areas that should not have been affected. In agentic or tool-based workflows, this can create real changes outside the user’s intended permission boundary.

## Structural Signal

The requested work has a bounded scope, but the AI’s behavior crosses into adjacent or unrelated scope. The issue is not that the AI did extra thinking; it is that the work surface affected by the AI exceeds the declared task boundary.

## Common Triggers

- The prompt names the target but does not explicitly forbid adjacent changes
- The AI treats nearby material as part of the task
- The agent has broad file or tool access
- A repair instruction is applied globally instead of locally
- The model optimizes the surrounding context rather than the requested element
- The workflow does not distinguish read scope from change scope

## When to Use This Issue

Use this Issue when the AI affects or reasons over unrelated scope in a way that changes, expands, or complicates the task beyond what the user requested.

## When Not to Use This Issue

Do not use this Issue when the AI only references related context to understand the task and does not change or rely on it improperly. Use this Issue when unrelated scope is actually touched, changed, or allowed to govern the output.
