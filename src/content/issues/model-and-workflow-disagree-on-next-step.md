---
layer: issue
ontology_slug: model-and-workflow-disagree-on-next-step
title: Model and Workflow Disagree on Next Step
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI model recommends or selects a next step that conflicts with the workflow state, required handoff, routing rule, or process sequence.
code: ISS-0038
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0060
primary_pattern: authority-state-mismatch
patterns:
  - authority-state-mismatch
  - interface-mismatch
  - compatibility-violation
search_intents:
  - model and workflow disagree on next step
  - AI chose wrong workflow step
  - model says one thing workflow says another
  - AI next step conflicts with process
  - workflow state disagrees with AI recommendation
  - AI routing conflicts with workflow
---

## What This Looks Like

The AI recommends, selects, or prepares a next step that does not match the current workflow state. The model may say to proceed when the workflow requires review, escalate when the process says to collect more information, or choose a tool or handoff that is not valid for the current stage.

## Why It Matters

Workflow steps carry process authority. If the model’s recommendation conflicts with the workflow, users may not know whether to follow the AI or the process. This can cause skipped gates, wrong handoffs, premature actions, or stalled work because the decision and workflow state are out of sync.

## Structural Signal

The model’s selected next action does not align with the declared workflow state or process rules. The issue is not simply a bad recommendation; it is a mismatch between model output and workflow authority.

## Common Triggers

- The model sees task content but not the current workflow state
- The workflow state is implied rather than passed into the prompt
- The AI optimizes for task completion while the process requires a control step
- Routing rules are stored outside the model’s active context
- The model treats optional advice as an executable next step
- The workflow changes but prompts or examples still reflect the old sequence

## When to Use This Issue

Use this Issue when the AI’s recommended or selected next step conflicts with the current workflow state, handoff requirement, routing rule, or process sequence.

## When Not to Use This Issue

Do not use this Issue when the workflow itself has no next step defined. Do not use it for ordinary disagreement with the AI’s advice unless the disagreement is specifically between model output and workflow state.
