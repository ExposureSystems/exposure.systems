---
layer: issue
ontology_slug: context-leaks-between-tasks
title: Context Leaks Between Tasks
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Context, assumptions, constraints, examples, files, or decisions from one task affect another task where they should not apply.
code: ISS-0032
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes:
  - CAT-0100
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - propagation-amplification
  - persistence-instability
search_intents:
  - context leaks between tasks
  - AI uses context from another task
  - ChatGPT carries over wrong context
  - previous task affects new task
  - AI mixes separate tasks
  - context bleed between conversations
---

## What This Looks Like

The AI uses information, assumptions, constraints, examples, files, style, or decisions from one task while working on another task where that context should not apply. The user may see unrelated requirements appear, old assumptions shape a new answer, or separate tasks become mixed together.

## Why It Matters

Task boundaries matter. If context leaks across them, the AI can produce answers that look coherent but are governed by the wrong prior state. This can create privacy concerns, wrong outputs, unexpected formatting, incorrect assumptions, or workflow decisions based on unrelated material.

## Structural Signal

Context from one bounded task crosses into another task without authorization. The issue is not that the AI remembered something useful; it is that memory, prior state, or task context propagated across a boundary where it should have been isolated.

## Common Triggers

- The system does not clearly separate task, project, file, or conversation boundaries
- Prior instructions remain active after the user changes tasks
- Memory or saved preferences are applied too broadly
- Similar task names or files cause context to merge
- The AI uses recent examples as if they govern the current task
- A workspace, thread, or agent state carries assumptions into unrelated work

## When to Use This Issue

Use this Issue when context from one task affects another task where it should not apply, especially when the user expected isolation between tasks, files, conversations, or workflows.

## When Not to Use This Issue

Do not use this Issue when the user intentionally asks the AI to reuse prior context. Do not use it when the issue is simply that the AI forgot context. This Issue applies when context crosses a boundary it should not cross.
