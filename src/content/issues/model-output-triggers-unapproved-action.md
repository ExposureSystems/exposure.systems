---
layer: issue
ontology_slug: model-output-triggers-unapproved-action
title: Model Output Triggers Unapproved Action
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: AI output causes, recommends, or triggers an action that has not passed the required approval, permission, or authority check.
code: ISS-0050
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0110
primary_pattern: undeclared-side-effect
patterns:
  - undeclared-side-effect
  - missing-authority
  - escalation-growth
search_intents:
  - model output triggers unapproved action
  - AI triggered action without approval
  - model output caused unauthorized action
  - AI recommendation started workflow without permission
  - unapproved action from AI output
  - AI output bypassed approval
---

## What This Looks Like

The AI produces an output that causes an action to happen before the required approval or permission check is complete. A generated field, recommendation, classification, confidence score, tool instruction, or routing result may trigger a workflow action that should have required human or system approval first.

## Why It Matters

AI output can become operational input. If an output triggers action without approval, the model effectively gains authority it was not supposed to have. This can create unauthorized workflow changes, escalations, notifications, tool calls, or downstream decisions.

## Structural Signal

The output crosses from recommendation or classification into action without passing through the required authority boundary. The issue is not only that the action may be wrong; it is that the approval structure was bypassed.

## Common Triggers

- Workflow automation treats model output as executable state
- Confidence scores or labels trigger actions directly
- Approval requirements are documented but not enforced in the workflow
- The AI output is consumed by a tool without a gate
- A routing rule treats generated text as an authorization signal
- The system does not distinguish advisory output from approved action

## When to Use This Issue

Use this Issue when AI output triggers or enables an action that should have required approval, permission, or declared authority first.

## When Not to Use This Issue

Do not use this Issue when the AI merely suggests an action and no workflow step is triggered. Do not use it when approval exists and is properly applied. This Issue applies when model output crosses into unapproved action.
