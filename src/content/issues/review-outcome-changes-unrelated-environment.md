---
layer: issue
ontology_slug: review-outcome-changes-unrelated-environment
title: Review Outcome Changes Unrelated Environment
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A review result, approval, rejection, or classification changes state outside the environment, case, file, or workflow it was meant to govern.
code: ISS-0051
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0110
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - undeclared-side-effect
  - propagation-amplification
search_intents:
  - review outcome changes unrelated environment
  - AI review affected other environment
  - approval changed unrelated workflow
  - review result caused side effect
  - AI classification affected another case
  - review outcome propagated too far
---

## What This Looks Like

A review result, approval, rejection, classification, or escalation outcome affects an environment it was not meant to govern. A decision made for one case may update another workspace, alter a different queue, change unrelated records, or influence a separate workflow.

## Why It Matters

Review outcomes should have controlled scope. If a result changes an unrelated environment, users cannot rely on review as a bounded control point. The review may become a hidden state mutation that affects work outside the case being reviewed.

## Structural Signal

A review state propagates beyond its declared target. The issue is not simply that the review result is wrong; it is that the result has effects outside the environment, workflow, or case it was supposed to govern.

## Common Triggers

- Review outputs are written to shared state without scoping
- A classification result is reused across related but distinct cases
- Approval status is stored globally instead of locally
- The workflow does not separate review scope from action scope
- Automation watches review labels and applies them too broadly
- A reviewer decision updates a common object used by other workflows

## When to Use This Issue

Use this Issue when a review outcome changes, triggers, or influences an unrelated environment, case, file, workflow, or state container.

## When Not to Use This Issue

Do not use this Issue when the review outcome affects only its intended target. Do not use it when the problem is a bad review decision without unrelated propagation. This Issue applies when review state crosses its intended boundary.
