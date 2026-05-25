---
layer: issue
ontology_slug: retrieval-exceeds-evidence-limit
title: Retrieval Exceeds Evidence Limit
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI retrieves, uses, cites, or considers more evidence than the task permits or more than the review surface can support.
code: ISS-0062
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes:
  - CAT-0010
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - density-spike
  - overreach
search_intents:
  - retrieval exceeds evidence limit
  - AI used too many sources
  - evidence limit exceeded
  - AI retrieved outside allowed evidence
  - too much retrieved evidence
  - answer uses more sources than allowed
---

## What This Looks Like

The task limits the allowed evidence set, but the AI retrieves or uses more evidence than permitted. The limit may be a number of documents, a source collection, a date range, a file set, a jurisdiction, a review packet, or a maximum number of citations. The output may become broader than the authorized evidence surface.

## Why It Matters

Evidence limits are often part of review control. If retrieval exceeds the limit, the answer may no longer be auditable against the intended source set. The user may have to inspect extra material, reject unsupported citations, or determine whether the answer was influenced by evidence that should not have been used.

## Structural Signal

The evidence boundary is crossed during retrieval or use. The issue is not whether the extra evidence is relevant; it is that the answer is no longer governed only by the permitted evidence set.

## Common Triggers

- The task says to use a bounded source set but retrieval remains broad
- Search tools are available when the task requires closed evidence
- The AI treats additional sources as helpful rather than unauthorized
- The evidence limit is stated but not enforced in the workflow
- Retrieval results include neighboring documents or unrelated collections
- The output does not separate allowed evidence from extra context

## When to Use This Issue

Use this Issue when retrieval, citation, or evidence use exceeds the declared source, count, scope, or review limit.

## When Not to Use This Issue

Do not use this Issue when the user asked for broad research or open retrieval. Do not use it when the problem is simply a wrong citation. This Issue applies when the evidence boundary itself is exceeded.
