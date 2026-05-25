---
layer: issue
ontology_slug: action-triggered-by-confidence-score
title: Action Triggered by Confidence Score
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A confidence score, certainty label, risk level, or probability-like value triggers an action without enough approval, calibration, or authority control.
code: ISS-0064
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0110
primary_pattern: threshold-breach
patterns:
  - threshold-breach
  - missing-authority
  - escalation-growth
search_intents:
  - action triggered by confidence score
  - AI confidence score triggered action
  - confidence threshold caused workflow action
  - AI score started automation
  - model confidence caused escalation
  - action based on AI confidence
---

## What This Looks Like

A confidence score, certainty label, risk score, probability-like value, or threshold result from the AI triggers a workflow action. The system may escalate, approve, reject, notify, route, block, or execute based on the score before enough calibration, approval, or authority control is applied.

## Why It Matters

Scores can look more authoritative than they are. If a score triggers action directly, the AI may become a decision authority through a numeric threshold. This is risky when the score is not calibrated, the threshold is not governed, or the action requires human or policy approval.

## Structural Signal

A model-generated score crosses an action threshold without a sufficient authority boundary. The issue is not simply that the score is wrong; it is that the score has been connected to action in a way that may exceed its declared authority.

## Common Triggers

- Workflow automation treats confidence as approval
- Thresholds are configured without review or calibration
- Risk labels trigger routing or escalation directly
- The model emits a score without explaining its authority limits
- A downstream system consumes scores as executable state
- No distinction is made between advisory score and approved decision

## When to Use This Issue

Use this Issue when a confidence, certainty, risk, or probability-like score triggers or controls an action without adequate approval, calibration, or authority structure.

## When Not to Use This Issue

Do not use this Issue when a score is displayed only as advisory information and no action is triggered. Do not use it when the action is governed by a separate valid approval path.
