---
layer: issue
ontology_slug: workflow-step-has-no-decision-owner
title: Workflow Step Has No Decision Owner
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A workflow step requires a decision, approval, judgment, or routing choice, but no owner is declared for making it.
code: ISS-0013
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0050
primary_pattern: missing-authority
patterns:
  - missing-authority
  - orphaned-structure
  - incomplete-declaration
search_intents:
  - workflow step has no decision owner
  - no one owns the workflow decision
  - AI workflow has no approver
  - handoff has no decision owner
  - workflow step needs approval but owner missing
  - unclear who decides next step
---

## What This Looks Like

A workflow reaches a step where someone or something must decide, approve, reject, route, escalate, or select the next action, but the owner of that decision is not declared. The AI may continue, guess, ask the wrong person, stall, or route the task inconsistently because the decision authority is missing.

## Why It Matters

Workflows depend on clear handoffs. If a decision point has no owner, the system cannot reliably know who has authority, when to wait, when to escalate, or how to resolve disagreement. This can create delays, inconsistent routing, skipped approvals, or actions taken by the wrong actor.

## Structural Signal

A decision node exists in the workflow, but the authority responsible for that node is absent or not connected to the step. The issue is not merely that the workflow is incomplete; it is that a required decision has no declared decision owner.

## Common Triggers

- A workflow includes review or approval language without naming the owner
- The AI is asked to choose the next step without authority rules
- A handoff depends on role assumptions that are not encoded
- The process has escalation paths but no owner for triggering them
- Multiple actors can influence the step but none is responsible for the decision
- The workflow treats a required judgment as if it were automatic

## When to Use This Issue

Use this Issue when a workflow step requires a decision or approval and the responsible owner is missing, unclear, or disconnected from the step.

## When Not to Use This Issue

Do not use this Issue when the owner is declared but unavailable, slow, or mistaken. Do not use it when the problem is the agent’s execution of a tool. This Issue is about missing decision ownership inside the workflow.
