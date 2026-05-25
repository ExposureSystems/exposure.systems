---
layer: issue
ontology_slug: workflow-step-lacks-required-conditions
title: Workflow Step Lacks Required Conditions
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A workflow step can run, route, approve, reject, or continue without the required conditions being declared or checked.
code: ISS-0073
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0120
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - constraints-underspecified
  - orphaned-structure
search_intents:
  - workflow step lacks required conditions
  - AI workflow missing required conditions
  - step runs without checks
  - workflow condition missing
  - AI workflow skipped required condition
  - required conditions not declared
---

## What This Looks Like

A workflow step runs even though the conditions required for that step are not declared, checked, or satisfied. The AI or workflow may approve, reject, route, escalate, summarize, call a tool, or continue to the next stage without confirming that the necessary inputs, state, permissions, evidence, or prerequisites are present.

## Why It Matters

Workflow steps need entry conditions. If a step can run without them, the result may look valid while being based on incomplete state. This can create skipped checks, premature decisions, wrong handoffs, or downstream failures that are hard to trace back to the missing condition.

## Structural Signal

A workflow node exists, but its required conditions are missing or underdeclared. The issue is not simply that a step failed; it is that the workflow does not define enough structure to know when the step is allowed to run.

## Common Triggers

- The workflow names a step but not its prerequisites
- Required inputs are assumed instead of checked
- The AI is allowed to proceed when evidence is incomplete
- A tool or review step has hidden conditions not reflected in the prompt
- The workflow treats optional context as sufficient
- Handoff criteria are described informally instead of enforced

## When to Use This Issue

Use this Issue when a workflow step can proceed without required conditions being declared, checked, or satisfied.

## When Not to Use This Issue

Do not use this Issue when the conditions are declared and the AI simply ignores them. Do not use it when the problem is a missing decision owner rather than missing step conditions.
