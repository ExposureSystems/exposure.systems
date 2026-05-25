---
layer: ai_adj_issue
ontology_slug: category-has-too-few-issues-to-be-useful
title: Category Has Too Few Issues to Be Useful
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A category, diagnostic area, or intake bucket has too few Issues, examples, or checks to support useful diagnosis or routing.
code: ADJ-0009
related_issues:
  - diagnostic-area-has-no-coverage
  - evaluation-rubric-has-coverage-gap
  - relationship-map-has-missing-links
  - review-rubric-missing-required-criteria
search_intents:
  - category has too few issues to be useful
  - AI issue category has no coverage
  - diagnostic category too thin
  - not enough issues in category
  - category needs more examples
  - ontology category coverage gap
---

## What This Looks Like

A category, diagnostic area, intake bucket, or classification group exists, but it has too few Issues, examples, checks, or related references to help users diagnose real cases. The category may appear in navigation or search, but it does not provide enough coverage to be useful.

## Why Users Blame AI

Users may experience the system as failing to classify or diagnose their problem. The deeper issue may be that the category itself is underbuilt: not enough Issue pages, examples, search intents, or relationship links exist to support the diagnostic surface.

## What to Check First

- Whether the category has enough primary Issues
- Whether related secondary Issues help fill the category
- Whether the category has examples or guidance
- Whether common symptoms map to an existing Issue
- Whether the category is too broad for the current Issue set
- Whether missing links or rubric gaps make the category feel empty

## Boundary

Use this AI-Adjacent Issue when the problem is category coverage, not a single AI failure. If a known diagnostic area has no Issue at all, use the related Workbench Issue for diagnostic coverage gap. If the rubric or relationship map is incomplete, use those related Issues.
