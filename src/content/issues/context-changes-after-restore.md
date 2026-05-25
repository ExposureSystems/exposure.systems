---
layer: issue
ontology_slug: context-changes-after-restore
title: Context Changes After Restore
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Restoring, reopening, resuming, or reloading a task changes the context that the AI uses to continue the work.
code: ISS-0031
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes:
  - CAT-0080
primary_pattern: contract-drift
patterns:
  - contract-drift
  - persistence-instability
  - silent-mutation
search_intents:
  - context changes after restore
  - restored chat has different context
  - AI context changed after reload
  - resume changed AI behavior
  - restored task lost context
  - AI uses different context after reopening
---

## What This Looks Like

The user restores, reopens, resumes, reloads, or returns to an AI task and the context no longer behaves the same way. Prior instructions, file references, decisions, tool state, memory, or assumptions may be missing, altered, or interpreted differently after the restore.

## Why It Matters

Restored work needs continuity. If the context changes after restore, the user may believe they are continuing the same task while the AI is operating from a different state. This can cause subtle drift, broken references, repeated work, or decisions based on stale or incomplete context.

## Structural Signal

A task state is expected to persist across a restore boundary, but the restored state does not match the original governing context. The issue is not just that the AI behaves differently; it is that continuity across the restore boundary is unstable.

## Common Triggers

- Conversation, file, tool, or memory state is only partially restored
- Prior decisions are visible to the user but not active for the model
- A resumed task uses a different model, mode, or runtime context
- References survive as text but lose their underlying object connection
- Hidden system or product state changes between sessions
- The restore process preserves display history but not operational context

## When to Use This Issue

Use this Issue when reopening, restoring, resuming, or reloading a task changes the context the AI uses to continue the work.

## When Not to Use This Issue

Do not use this Issue when the user intentionally starts a new task or changes instructions after restore. Do not use it for ordinary version changes unless the restore boundary is central to the problem.
