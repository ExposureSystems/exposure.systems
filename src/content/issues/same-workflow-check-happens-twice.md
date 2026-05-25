---
layer: issue
ontology_slug: same-workflow-check-happens-twice
title: Same Workflow Check Happens Twice
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same review, validation, approval, routing, or safety check occurs more than once in the workflow without a clear reason.
code: ISS-0069
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0070
primary_pattern: redundant-declaration
patterns:
  - redundant-declaration
  - density-spike
  - convergence-failure
search_intents:
  - same workflow check happens twice
  - duplicate workflow check
  - AI workflow repeats validation
  - same review step runs twice
  - duplicate approval check
  - repeated workflow gate
---

## What This Looks Like

A workflow performs the same check more than once. The duplicated step may be a review, validation, approval, safety check, classification, routing decision, or eligibility test. The second check may repeat the first result, disagree with it, or create a loop where the workflow keeps verifying the same condition.

## Why It Matters

Duplicate checks increase review burden and can create conflicting states. If two copies of the same check disagree, users may not know which one governs. If they agree, the workflow may still waste time, cost, and attention without improving control.

## Structural Signal

A workflow contains redundant control points occupying the same decision space. The issue is not that a check exists; it is that the same check is declared or executed more than once without a clear role difference.

## Common Triggers

- A check is added at a new stage without removing the old one
- Human and automated review duplicate the same criteria
- Validation happens before and after a transformation with no change in criteria
- A migration preserves old workflow gates
- A tool and a prompt both perform the same validation
- The workflow lacks a canonical location for the check

## When to Use This Issue

Use this Issue when the same workflow check happens more than once and the duplication creates confusion, delay, conflict, or unnecessary review burden.

## When Not to Use This Issue

Do not use this Issue when repeated checks are intentionally staged for different purposes. Do not use it when the second check verifies a different condition.
