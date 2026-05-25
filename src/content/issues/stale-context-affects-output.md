---
layer: issue
ontology_slug: stale-context-affects-output
title: Stale Context Affects Output
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Old context, prior instructions, outdated references, or earlier task state continue to affect output after they should no longer apply.
code: ISS-0034
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
  - stale context affects output
  - AI used old context
  - outdated context changed answer
  - AI keeps using previous instruction
  - old information affects new output
  - stale memory changed response
---

## What This Looks Like

The AI uses older context that should no longer govern the task. The output may reflect a prior instruction, old file version, previous decision, outdated source, earlier user preference, or abandoned task state even though the user expects the current request to be based on newer context.

## Why It Matters

Stale context can be hard to detect because the output may still look coherent. The user has to notice that the answer is governed by an older state rather than the current one. This can cause wrong recommendations, outdated references, incorrect formatting, or workflow decisions based on context that should have expired.

## Structural Signal

A prior context state continues to influence the output after the governing context has changed. The issue is not that context is missing; it is that the wrong context remains active beyond its valid boundary.

## Common Triggers

- A prior instruction is never explicitly revoked
- A file, source, or policy changed but the old version remains in context
- The AI treats earlier task state as still active after the user changes direction
- Saved memory or conversation state is broader than the user expects
- A restore or reload preserves outdated context
- The workflow lacks a rule for replacing old context with newer context

## When to Use This Issue

Use this Issue when old context continues to shape the AI output after it should have been replaced, expired, narrowed, or ignored.

## When Not to Use This Issue

Do not use this Issue when the AI lacks needed context entirely, or when the user intentionally asks the AI to reuse prior context. This Issue applies when stale context is active and materially affects the output.
