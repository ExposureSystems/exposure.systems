---
layer: issue
ontology_slug: retry-makes-the-problem-worse
title: Retry Makes the Problem Worse
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A retry, repair attempt, regeneration, or follow-up instruction increases the error, expands the failure, or creates additional breakage instead of narrowing the problem.
code: ISS-0007
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0090
primary_pattern: escalation-growth
patterns:
  - escalation-growth
  - propagation-amplification
  - silent-mutation
search_intents:
  - retry makes the problem worse
  - AI gets worse after retry
  - regeneration created more errors
  - fix attempt broke more things
  - retry expanded the problem
  - AI repair made new mistakes
---


## What This Looks Like

The user retries, regenerates, asks for a fix, or gives a corrective follow-up, but the result gets worse. The system may introduce new errors, lose parts that were previously correct, expand the task, change unrelated content, or create a larger failure while attempting to repair a smaller one.

## Why It Matters

Retries are often treated as a safe recovery path. When retry makes the problem worse, the user loses confidence that the system can converge. The workflow may shift from solving the original issue to managing the side effects of repeated repair attempts.

## Structural Signal

A corrective action increases the failure surface instead of reducing it. The issue is not only that the retry failed; it is that the retry changed, expanded, or propagated the problem beyond the original error.

## Common Triggers

- The repair prompt does not isolate what must remain unchanged
- The model rewrites the whole answer instead of patching the failed part
- A correction introduces new assumptions or new scope
- The system treats retry as permission to reinterpret the task
- Earlier errors are carried forward and amplified
- The workflow lacks a stop condition or comparison against the prior good state

## When to Use This Issue

Use this Issue when the user’s attempted fix, retry, regeneration, or follow-up creates additional damage or expands the failure beyond the original problem.

## When Not to Use This Issue

Do not use this Issue when retry simply produces another bad answer of the same kind, or when the user intentionally changes the task. Use this Issue when the retry makes the failure larger, messier, or harder to recover from.
