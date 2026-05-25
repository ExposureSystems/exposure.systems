---
layer: issue
ontology_slug: single-step-carries-too-many-decisions
title: Single Step Carries Too Many Decisions
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: One prompt, workflow step, review stage, or agent action carries too many decisions for the system or user to evaluate cleanly.
code: ISS-0103
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0070
primary_pattern: density-spike
patterns:
  - density-spike
  - unbounded-scope
  - missing-authority
search_intents:
  - single step carries too many decisions
  - AI workflow step overloaded
  - one step has too many decisions
  - prompt asks for too many decisions
  - review step overloaded
  - AI step carries too much responsibility
---

## What This Looks Like

One step in the workflow is expected to make too many decisions at once. It may classify, summarize, score, approve, route, format, check policy, choose tools, and decide next actions in a single pass. The step becomes overloaded, and users cannot easily tell which decision failed.

## Why It Matters

Decision density makes review and correction harder. If many decisions are packed into one step, a failure in one decision can affect the rest. The user may have to rerun or review the whole step instead of isolating the specific decision that needs attention.

## Structural Signal

A single workflow node carries more decision responsibility than it can cleanly expose or govern. The issue is not just that the step is complex; it is that decision load is concentrated in one place without enough separation.

## Common Triggers

- A prompt asks the AI to perform several decision types at once
- A review stage combines scoring, routing, approval, and feedback
- Tool choice and output generation happen in the same step
- The workflow lacks intermediate checkpoints
- Multiple authorities are collapsed into one agent action
- The step is optimized for speed instead of inspectability

## When to Use This Issue

Use this Issue when one AI prompt, agent action, workflow step, or review stage carries too many decisions to inspect, control, or correct reliably.

## When Not to Use This Issue

Do not use this Issue when a step is long but decisions are clearly separated and reviewable. Do not use it when the problem is missing ownership for one specific decision.
