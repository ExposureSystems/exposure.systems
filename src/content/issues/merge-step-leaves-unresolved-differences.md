---
layer: issue
ontology_slug: merge-step-leaves-unresolved-differences
title: Merge Step Leaves Unresolved Differences
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A merge, reconciliation, or consolidation step combines outputs or reviews but leaves important differences unresolved.
code: ISS-0084
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0070
primary_pattern: convergence-failure
patterns:
  - convergence-failure
  - authority-merge-conflict
  - orphaned-structure
search_intents:
  - merge step leaves unresolved differences
  - AI merge did not resolve differences
  - review merge left conflicts
  - consolidated answer still has contradictions
  - merge step failed to reconcile
  - unresolved differences after merge
---

## What This Looks Like

The workflow tries to merge multiple outputs, reviews, drafts, decisions, or tool results, but the merged result still contains unresolved differences. Conflicting statements may remain side by side, one branch may be dropped without explanation, or the final output may hide rather than resolve the disagreement.

## Why It Matters

Merge steps are supposed to reduce divergence. If the merge leaves differences unresolved, the workflow may appear complete while still carrying conflict into the final output. Users then have to discover and reconcile differences manually.

## Structural Signal

A reconciliation step exists, but it does not produce a coherent shared state. The issue is not that multiple inputs disagree; it is that the merge step fails to resolve or preserve those differences in an explicit way.

## Common Triggers

- The workflow merges text without comparing claims or decisions
- No rule declares which source wins when inputs conflict
- The AI summarizes disagreement instead of resolving it
- Parallel reviews use incompatible criteria
- The merge step drops provenance needed to explain differences
- Conflicts are hidden inside a polished final answer

## When to Use This Issue

Use this Issue when a merge or reconciliation step leaves important differences unresolved after it was supposed to produce a usable shared result.

## When Not to Use This Issue

Do not use this Issue when the workflow intentionally preserves alternatives for human choice. Do not use it when there is no merge step. This Issue applies when the merge is supposed to resolve and does not.
