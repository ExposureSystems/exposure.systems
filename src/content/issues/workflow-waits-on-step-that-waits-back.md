---
layer: issue
ontology_slug: workflow-waits-on-step-that-waits-back
title: Workflow Waits on Step That Waits Back
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A workflow step waits for another step that also waits on the first step, creating a blocking loop.
code: ISS-0089
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0070
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - convergence-failure
  - orphaned-structure
search_intents:
  - workflow waits on step that waits back
  - AI workflow circular wait
  - workflow steps wait on each other
  - handoff blocked by previous step
  - AI process stuck waiting
  - workflow dependency loop
---

## What This Looks Like

A workflow step cannot continue until another step completes, but that other step also depends on the first one. The AI, reviewer, tool, approval path, or routing step may keep waiting for a condition that cannot be satisfied because the dependency points back to itself through another part of the workflow.

## Why It Matters

Circular waiting creates stalled work. Users may see the workflow sit in pending, review, blocked, or waiting states without a clear failure message. Because each step appears to be waiting correctly, the real problem can be hidden in the dependency structure.

## Structural Signal

Two or more workflow steps depend on each other in a way that prevents resolution. The issue is not simply that a step is slow or missing; it is that the dependency path creates a loop with no valid next step.

## Common Triggers

- A review step waits for an output that depends on review completion
- A tool call waits for approval that depends on the tool result
- Handoff conditions are declared separately and point back to each other
- Workflow state is split across systems without a shared dependency map
- Escalation requires a status that cannot be produced until escalation completes
- The process lacks a base case or override for circular waits

## When to Use This Issue

Use this Issue when a workflow is blocked because one step waits on another step that ultimately waits back on the first step.

## When Not to Use This Issue

Do not use this Issue for ordinary delays, unavailable reviewers, or missing inputs unless the missing input is caused by a circular dependency in the workflow.
