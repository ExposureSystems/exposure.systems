---
layer: issue
ontology_slug: diagnostic-area-has-no-coverage
title: Diagnostic Area Has No Coverage
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A known diagnostic area, failure mode, requirement, or review dimension has no Issue, check, rubric item, or workflow coverage.
code: ISS-0077
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes: []
primary_pattern: density-vacuum
patterns:
  - density-vacuum
  - incomplete-declaration
  - constraints-underspecified
search_intents:
  - diagnostic area has no coverage
  - missing diagnostic coverage
  - no check for this AI issue
  - workflow does not cover failure mode
  - review has coverage gap
  - AI diagnosis missing area
---

## What This Looks Like

A known area that should be checked has no corresponding Issue, rubric item, workflow check, diagnostic question, or review path. The user may know something can go wrong, but the current system has no place to capture, evaluate, or route that failure.

## Why It Matters

Uncovered diagnostic areas become blind spots. If a workflow has no way to represent a failure mode, users may ignore it, misclassify it, or force it into the wrong category. This weakens reporting, review, and future improvement because the problem has no stable place to land.

## Structural Signal

A required diagnostic region exists, but the system has no coverage for it. The issue is not that a check failed; it is that no check, Issue, category, rubric item, or workflow path exists for the area.

## Common Triggers

- A new failure mode appears before the ontology or rubric is updated
- Review checklists cover common cases but not edge cases
- Workflow design assumes a problem category will not occur
- Users report symptoms that do not map to any existing Issue
- A policy or tool introduces a new risk without adding diagnostics
- Coverage is tracked informally instead of structurally

## When to Use This Issue

Use this Issue when a known diagnostic area lacks explicit coverage in the Issue set, rubric, workflow, review process, or guidance.

## When Not to Use This Issue

Do not use this Issue when coverage exists but is weak or misapplied. Do not use it when the problem belongs to an existing Issue but was not recognized.
