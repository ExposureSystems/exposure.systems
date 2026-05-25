---
layer: issue
ontology_slug: repair-step-created-new-breakage
title: Repair Step Created New Breakage
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A repair, correction, retry, or fix step addresses one problem but introduces a new failure elsewhere.
code: ISS-0047
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0070
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - escalation-growth
  - undeclared-side-effect
search_intents:
  - repair step created new breakage
  - AI fix broke something else
  - repair introduced new error
  - correction caused new failure
  - fix made another part wrong
  - AI patch created new problem
---

## What This Looks Like

The user asks the AI to fix a problem, and the repair appears to address that problem but creates new breakage somewhere else. A corrected field may cause a parser failure, a revised section may contradict another section, a tool fix may alter state incorrectly, or a code or content repair may damage previously working material.

## Why It Matters

Repair steps should reduce the failure surface. When a fix creates new breakage, the workflow stops converging and starts spreading. The user now has to track both the original issue and the new failure introduced by the attempted correction.

## Structural Signal

A repair action propagates failure into a new area. The issue is not only that the repair was incomplete; it is that the correction changed the structure in a way that created a new failure state.

## Common Triggers

- The repair is applied too broadly
- The AI rewrites surrounding content instead of isolating the broken part
- The fix is not checked against downstream constraints
- The workflow lacks a comparison against the prior good state
- The AI optimizes one requirement while breaking another
- A tool or code change has dependencies the agent did not account for

## When to Use This Issue

Use this Issue when a repair, correction, retry, patch, or fix step creates a new problem outside or beyond the original failure.

## When Not to Use This Issue

Do not use this Issue when the repair simply fails to fix the original issue. Do not use it for normal iteration where no new breakage is introduced. This Issue applies when the fix itself becomes a source of additional failure.
