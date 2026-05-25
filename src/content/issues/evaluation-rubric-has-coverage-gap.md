---
layer: issue
ontology_slug: evaluation-rubric-has-coverage-gap
title: Evaluation Rubric Has Coverage Gap
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An evaluation rubric, grading standard, or review checklist leaves part of the required evaluation space uncovered.
code: ISS-0081
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0070
primary_pattern: density-vacuum
patterns:
  - density-vacuum
  - incomplete-declaration
  - constraints-underspecified
search_intents:
  - evaluation rubric has coverage gap
  - AI evaluation rubric missing coverage
  - review rubric has gap
  - grading checklist incomplete
  - evaluation misses required area
  - AI review criteria coverage gap
---

## What This Looks Like

An evaluation rubric or review checklist exists, but it does not cover all of the areas needed to evaluate the work. The AI may score, classify, approve, or review an item while leaving out a required dimension, edge case, failure mode, policy area, or quality requirement.

## Why It Matters

A rubric can look complete while still leaving important areas uncovered. If the missing area matters to the decision, the review result may be unreliable even when the AI follows the rubric exactly. This creates false confidence because the evaluation appears structured but has a blind spot.

## Structural Signal

The evaluation structure has a coverage gap. The issue is not that the AI applied the rubric incorrectly; it is that the rubric itself does not cover enough of the required evaluation space.

## Common Triggers

- The rubric was built from common cases and misses edge cases
- New requirements are added without updating evaluation criteria
- The review checklist covers output quality but not source, authority, or workflow fit
- A scoring standard omits required failure modes
- The AI is asked to evaluate a task type the rubric was not designed for
- Review criteria are scattered across multiple places and one area is missed

## When to Use This Issue

Use this Issue when an evaluation rubric, grading rule, or review checklist lacks coverage for a required evaluation dimension.

## When Not to Use This Issue

Do not use this Issue when the rubric covers the area but the AI applies it incorrectly. Do not use it when the user simply wants stricter scoring without identifying a missing evaluation area.
