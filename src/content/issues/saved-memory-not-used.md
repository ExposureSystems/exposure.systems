---
layer: issue
ontology_slug: saved-memory-not-used
title: Saved Memory Not Used
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A saved memory, preference, instruction, or durable context item exists but does not affect the AI output when it should.
code: ISS-0033
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes:
  - CAT-0120
primary_pattern: persistence-instability
patterns:
  - persistence-instability
  - incomplete-declaration
  - reference-instability
search_intents:
  - saved memory not used
  - AI ignored saved memory
  - ChatGPT did not use memory
  - saved preference not applied
  - AI forgot saved instruction
  - memory exists but output ignores it
---

## What This Looks Like

The user has a saved memory, preference, instruction, profile detail, workspace setting, or durable context item that should affect the task, but the AI responds as if it does not exist. The output may ignore a saved preference, repeat a previously corrected behavior, ask for information already saved, or fail to apply a durable instruction.

## Why It Matters

Saved memory is only useful if it reliably governs the work where it applies. When saved memory exists but is not used, the user cannot tell whether the memory is unavailable, out of scope, overridden, stale, or simply ignored. This makes personalization and continuity hard to trust.

## Structural Signal

A durable context object exists, but it does not connect to the current task state. The issue is not ordinary forgetting inside one conversation; it is a failure of saved context to become active when the user reasonably expects it to govern the output.

## Common Triggers

- Saved memory is scoped differently than the user expects
- The current task does not expose the memory to the active model context
- Later instructions override the saved preference without making that visible
- The memory is too vague to determine when it should apply
- Product mode, workspace, account, or runtime changes affect memory access
- The user assumes memory is authoritative when it is only advisory

## When to Use This Issue

Use this Issue when a saved memory, durable preference, or persistent instruction exists but does not affect the AI response in a situation where it should apply.

## When Not to Use This Issue

Do not use this Issue when the user never saved the memory, when the task is intentionally isolated from memory, or when the AI forgets something only stated earlier in the same conversation. Use this Issue when saved durable context fails to govern the current work.
