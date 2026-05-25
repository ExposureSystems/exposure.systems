---
layer: issue
ontology_slug: parallel-reviews-never-agree
title: Parallel Reviews Never Agree
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Parallel AI, human, workflow, or tool reviews keep producing different results without resolving into a shared decision state.
code: ISS-0083
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0070
primary_pattern: convergence-failure
patterns:
  - convergence-failure
  - divergent-outputs
  - authority-collision
search_intents:
  - parallel reviews never agree
  - AI reviews do not converge
  - reviewers keep disagreeing
  - parallel review results conflict
  - multiple reviews never resolve
  - AI review loop disagreement
---

## What This Looks Like

Two or more review paths evaluate the same case and keep producing different results. The reviews may come from AI runs, human reviewers, tools, rubrics, workflow stages, or combinations of them. Each review may appear valid on its own, but the process never resolves into a shared decision.

## Why It Matters

Parallel review is useful only if disagreement can be resolved. When reviews never agree, the workflow can stall, loop, or escalate repeatedly. Users may spend more effort reconciling review results than improving the underlying work.

## Structural Signal

Multiple review states are produced under comparable authority, but the workflow lacks a convergence rule. The issue is not only that reviewers disagree; it is that disagreement does not resolve into an authoritative state.

## Common Triggers

- Parallel reviewers use different criteria
- Review rubrics do not define tie-breakers
- The workflow treats each review as equally authoritative
- The AI produces different evaluations across comparable runs
- Human and automated review results are not reconciled
- Escalation rules send disagreement back into another parallel review

## When to Use This Issue

Use this Issue when parallel reviews keep producing incompatible results and the workflow does not converge on a final decision.

## When Not to Use This Issue

Do not use this Issue when a clear owner or tie-breaker resolves the disagreement. Do not use it for one isolated review conflict that does not create a loop or unresolved state.
