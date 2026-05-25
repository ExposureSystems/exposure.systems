---
layer: issue
ontology_slug: small-change-produces-large-downstream-effects
title: Small Change Produces Large Downstream Effects
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A small prompt, schema, policy, output, or workflow change creates unexpectedly large effects in downstream steps.
code: ISS-0106
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0080
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - contract-drift
  - compatibility-violation
search_intents:
  - small change produces large downstream effects
  - small AI change caused big workflow impact
  - prompt change had large downstream effect
  - minor schema change broke workflow
  - small update caused major AI behavior change
  - downstream effects from small change
---

## What This Looks Like

A small change to a prompt, field, schema, policy, example, model setting, tool contract, or workflow step produces a much larger effect later in the system. The immediate change may look minor, but downstream outputs, routes, parsers, reviews, or decisions shift more than expected.

## Why It Matters

Small changes become risky when their downstream effects are not visible. A user may approve a minor edit without realizing it changes later behavior, breaks compatibility, or alters review outcomes. This makes regression testing and change control harder.

## Structural Signal

A local change propagates into downstream effects beyond its apparent size or declared scope. The issue is not that change occurred; it is that the change has an amplified effect through connected workflow structure.

## Common Triggers

- A small prompt edit changes output structure used by later steps
- A field label changes while parsers still expect the old label
- A policy wording change affects routing or escalation
- Examples are updated and shift model behavior broadly
- A tool schema changes in a way that breaks dependent prompts
- The workflow lacks dependency mapping for small changes

## When to Use This Issue

Use this Issue when a small change creates large downstream effects across AI output, workflow behavior, tooling, review, routing, or structured data.

## When Not to Use This Issue

Do not use this Issue when a large downstream effect was expected and declared. Do not use it for ordinary local edits that remain contained.
