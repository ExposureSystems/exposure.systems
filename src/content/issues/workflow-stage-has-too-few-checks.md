---
layer: issue
ontology_slug: workflow-stage-has-too-few-checks
title: Workflow Stage Has Too Few Checks
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A workflow stage lacks enough checks, gates, criteria, or review conditions to safely support the work it controls.
code: ISS-0078
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0120
primary_pattern: density-vacuum
patterns:
  - density-vacuum
  - incomplete-declaration
  - orphaned-structure
search_intents:
  - workflow stage has too few checks
  - AI workflow missing checks
  - workflow gate too weak
  - not enough review checks
  - stage lacks validation
  - workflow stage underchecked
---

## What This Looks Like

A workflow stage controls meaningful work but has too few checks to support that responsibility. The stage may route, approve, transform, escalate, or finalize work without enough validation, review criteria, prerequisites, or handoff conditions.

## Why It Matters

A weakly checked stage can pass problems downstream. Users may believe the workflow has a control point, but the stage does not actually inspect enough to justify the control it performs. This can create false confidence and make later failures harder to diagnose.

## Structural Signal

A workflow stage has authority or responsibility greater than its check coverage. The issue is not simply that a check failed; it is that the stage lacks enough declared checks to govern the work it controls.

## Common Triggers

- A workflow stage is added before review criteria are defined
- The stage inherits responsibility from another process without inheriting checks
- Validation is reduced to one broad question
- Tool or AI output is accepted without sufficient gating
- Edge cases are routed through a stage designed for common cases
- Review burden is shifted downstream without declaring it

## When to Use This Issue

Use this Issue when a workflow stage lacks enough checks, criteria, gates, or conditions to safely support its role.

## When Not to Use This Issue

Do not use this Issue when checks exist but are ignored. Do not use it when the problem is duplicate checks rather than insufficient checks.
