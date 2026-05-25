---
layer: issue
ontology_slug: workflow-loops-through-review-without-resolution
title: Workflow Loops Through Review Without Resolution
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A workflow repeatedly sends work through review, repair, or escalation without reaching an approved, rejected, or otherwise resolved state.
code: ISS-0086
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0070
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - convergence-failure
  - escalation-growth
search_intents:
  - workflow loops through review without resolution
  - AI review loop never ends
  - workflow keeps sending back for review
  - review repair loop
  - approval loop no resolution
  - AI workflow stuck in review
---

## What This Looks Like

Work keeps cycling through review, repair, re-review, escalation, or reclassification without reaching a resolved state. Each pass may produce comments, changes, or another review result, but the workflow does not settle into approved, rejected, blocked, or complete.

## Why It Matters

Review loops consume time and attention without creating closure. Users may not know whether to keep revising, stop, escalate, or accept the current state. If the loop is automated, it can also create repeated tool calls, notifications, or workflow churn.

## Structural Signal

The workflow contains a cycle with no effective resolution condition. The issue is not that review exists; it is that the review path can continue indefinitely without a rule that exits the loop.

## Common Triggers

- Review criteria are not tied to a final decision state
- Repair creates new issues that trigger another review
- Escalation sends the case back to the same stage
- Approval depends on checks that are never satisfied
- The workflow lacks a maximum review count or stop condition
- Reviewers or agents disagree without a reconciliation path

## When to Use This Issue

Use this Issue when a workflow repeatedly cycles through review, repair, or escalation without reaching a resolved state.

## When Not to Use This Issue

Do not use this Issue for one normal revision cycle. Do not use it when the workflow is intentionally iterative and has a clear stopping rule.
