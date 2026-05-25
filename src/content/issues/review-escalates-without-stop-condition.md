---
layer: issue
ontology_slug: review-escalates-without-stop-condition
title: Review Escalates Without Stop Condition
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A review process keeps escalating, re-reviewing, or adding scrutiny without a declared condition for stopping.
code: ISS-0100
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0070
primary_pattern: escalation-growth
patterns:
  - escalation-growth
  - circular-dependency
  - convergence-failure
search_intents:
  - review escalates without stop condition
  - AI review keeps escalating
  - review has no stop rule
  - escalation loop in review
  - workflow keeps adding review
  - AI review never stops escalating
---

## What This Looks Like

A review process keeps adding more checks, reviewers, escalations, repair cycles, or scrutiny without a clear stop condition. Each review may produce another reason to review again, and the workflow never defines what is enough to resolve the case.

## Why It Matters

Review escalation is supposed to manage risk, not create endless process. Without a stop condition, review can become a loop that consumes time, delays completion, and makes it unclear who has authority to close the case.

## Structural Signal

The review path allows escalation growth without a completion boundary. The issue is not that review exists; it is that the review process lacks a rule for when escalation ends.

## Common Triggers

- Review criteria are open-ended
- Each reviewer can add new required checks
- The workflow has escalation rules but no closure rules
- Repair output triggers another review without a maximum cycle
- Risk language keeps increasing scrutiny
- No role is authorized to declare the review resolved

## When to Use This Issue

Use this Issue when review keeps escalating or adding scrutiny because no stop condition, resolution condition, or closure authority is declared.

## When Not to Use This Issue

Do not use this Issue when escalation is bounded and appropriate. Do not use it for a single slow review step without repeated escalation.
