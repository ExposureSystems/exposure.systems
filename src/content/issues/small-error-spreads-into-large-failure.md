---
layer: issue
ontology_slug: small-error-spreads-into-large-failure
title: Small Error Spreads Into Large Failure
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A small AI, output, routing, or workflow error propagates through later steps until it becomes a larger failure.
code: ISS-0093
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0010
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - escalation-growth
  - undeclared-side-effect
search_intents:
  - small error spreads into large failure
  - AI small mistake became big problem
  - small output error propagated downstream
  - AI error spread through workflow
  - minor mistake caused major failure
  - small issue escalated into bigger failure
---

## What This Looks Like

A small error appears early in an AI output, tool result, field, classification, route, or workflow step. Later steps reuse or build on that error until it becomes a larger failure, such as a wrong decision, broken automation, bad review result, or corrupted downstream artifact.

## Why It Matters

Early AI errors can become more damaging when later steps treat them as stable facts. A small mistake may be easy to fix at the source, but much harder to unwind after it has propagated through tools, summaries, approvals, or generated records.

## Structural Signal

An error propagates and amplifies across downstream structure. The issue is not only the original mistake; it is that the workflow allows the mistake to spread into larger effects.

## Common Triggers

- Early outputs are reused without validation
- Downstream steps treat AI text as authoritative state
- A wrong field value is copied into multiple records
- Review focuses on final output but not intermediate assumptions
- Tool calls or automations consume unverified model output
- The workflow lacks checkpoints that catch small errors before propagation

## When to Use This Issue

Use this Issue when a small AI or workflow error spreads through later steps and becomes a larger failure.

## When Not to Use This Issue

Do not use this Issue when the error stays local and does not affect downstream work. Use it when propagation is central to the failure.
