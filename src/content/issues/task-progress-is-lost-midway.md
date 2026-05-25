---
layer: issue
ontology_slug: task-progress-is-lost-midway
title: Task Progress Is Lost Midway
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI loses track of completed work, prior decisions, current position, or remaining steps before the task is finished.
code: ISS-0030
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes:
  - CAT-0070
primary_pattern: persistence-instability
patterns:
  - persistence-instability
  - orphaned-structure
  - convergence-failure
search_intents:
  - task progress is lost midway
  - AI lost track of progress
  - ChatGPT forgot where we were
  - AI restarted task midway
  - progress lost during AI workflow
  - AI forgot completed steps
---

## What This Looks Like

The AI is partway through a task and loses track of what has already been completed, what was decided, what remains, or where the workflow currently stands. It may restart from an earlier point, repeat completed work, skip pending work, or produce an answer that no longer matches the current task state.

## Why It Matters

Longer AI tasks depend on progress being preserved. If progress is lost midway, the user must reconstruct state, detect repeated or skipped work, and re-establish what has already been done. This makes multi-step workflows harder to trust and harder to finish cleanly.

## Structural Signal

The task has a sequential state, but the current output no longer aligns with that state. The issue is not only that the AI forgot context; it is that the workflow’s progress structure failed to persist across steps.

## Common Triggers

- The task spans too many turns without a stable progress record
- Completed steps are not marked as done
- The AI relies on conversation memory instead of an explicit task state
- A repair or retry restarts the workflow from the wrong point
- The task has multiple parallel threads without a shared progress map
- The model loses the difference between completed, pending, and optional work

## When to Use This Issue

Use this Issue when the AI loses track of task progress before completion and the user has to reestablish what has already happened or what remains.

## When Not to Use This Issue

Do not use this Issue when the AI forgets a single instruction but still knows the task state. Do not use it when the user changed direction. This Issue applies when progress through the workflow is lost or reset.
