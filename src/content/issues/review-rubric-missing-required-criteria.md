---
layer: issue
ontology_slug: review-rubric-missing-required-criteria
title: Review Rubric Missing Required Criteria
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A review rubric, grading rule, evaluation checklist, or classification standard lacks criteria required to make the review reliable.
code: ISS-0075
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0070
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - density-vacuum
  - constraints-underspecified
search_intents:
  - review rubric missing required criteria
  - AI rubric missing criteria
  - review checklist incomplete
  - grading criteria missing
  - evaluation rubric not complete
  - AI review lacks required criteria
---

## What This Looks Like

A rubric, checklist, grading rule, classification standard, or review instruction is missing criteria needed to make a reliable decision. The AI may review the item, but it cannot evaluate all required dimensions because the rubric does not declare them.

## Why It Matters

Review quality depends on the criteria being complete enough for the decision. If required criteria are missing, the AI may pass work that should fail, fail work for unclear reasons, or produce inconsistent review outcomes across cases. The review may look formal while leaving important checks uncovered.

## Structural Signal

A review framework exists, but its criteria set has a coverage gap. The issue is not that the AI disagreed with the rubric; it is that the rubric does not declare enough structure to support the review it is supposed to govern.

## Common Triggers

- The rubric describes outcomes but not evaluation criteria
- Required checks are implied by policy but absent from the review instructions
- Examples cover only common cases
- The AI is asked to grade without a complete scoring standard
- A workflow adds a review step before the rubric is fully defined
- Rubric updates omit new required criteria

## When to Use This Issue

Use this Issue when a rubric, grading rule, checklist, or review standard is missing criteria required for reliable evaluation.

## When Not to Use This Issue

Do not use this Issue when the rubric is complete and the AI applies it incorrectly. Do not use it when the user simply disagrees with a valid criterion.
