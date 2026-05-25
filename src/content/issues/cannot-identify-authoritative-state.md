---
layer: issue
ontology_slug: cannot-identify-authoritative-state
title: Cannot Identify Authoritative State
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The user or workflow cannot tell which state, version, review result, decision, source, or output is currently authoritative.
code: ISS-0085
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0050
primary_pattern: authority-state-mismatch
patterns:
  - authority-state-mismatch
  - missing-authority
  - reference-instability
search_intents:
  - cannot identify authoritative state
  - AI cannot tell which version is final
  - authoritative output unclear
  - which decision is current
  - workflow state not authoritative
  - AI review state unclear
---

## What This Looks Like

The user cannot tell which output, decision, review result, source, version, record, or workflow state is authoritative. Multiple candidates may exist, or the system may show a state without making clear whether it is draft, final, superseded, approved, rejected, or still pending.

## Why It Matters

Workflows need a current authority state. If the authoritative state cannot be identified, users may act on stale output, re-review settled work, ignore a valid decision, or pass the wrong version downstream. This can create loops because no one knows what state should govern the next step.

## Structural Signal

There are multiple possible states, but the system does not expose which one governs. The issue is not simply that information is missing; it is that authority over the current state is unclear or mismatched.

## Common Triggers

- Draft, final, and reviewed states are not labeled clearly
- Multiple outputs survive without a supersession rule
- A review result is stored separately from the artifact it governs
- Version history exists but the current version is not marked
- Human and automated decisions produce competing states
- References point to objects without indicating their authority status

## When to Use This Issue

Use this Issue when the user or workflow cannot identify which state, decision, output, source, review, or version is currently authoritative.

## When Not to Use This Issue

Do not use this Issue when the authoritative state is clear but wrong. Do not use it when the issue is merely a missing owner. This Issue applies when the governing state itself cannot be identified.
