---
layer: issue
ontology_slug: risk-score-triggers-wrong-escalation
title: Risk Score Triggers Wrong Escalation
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A risk score, severity label, confidence value, or threshold result triggers the wrong escalation path.
code: ISS-0065
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0050
primary_pattern: escalation-growth
patterns:
  - escalation-growth
  - threshold-breach
  - missing-authority
search_intents:
  - risk score triggers wrong escalation
  - AI risk score escalated wrong case
  - wrong escalation from model score
  - risk threshold caused wrong workflow
  - AI severity score triggered escalation
  - confidence score sent case to wrong review
---

## What This Looks Like

The AI produces a risk score, severity label, confidence value, or threshold result that sends a case to the wrong escalation path. A low-risk case may be escalated unnecessarily, a high-risk case may be routed too weakly, or a case may go to the wrong reviewer, queue, workflow, or authority level.

## Why It Matters

Escalation changes who reviews a case, how much scrutiny it receives, and what actions become available. If a score triggers the wrong escalation, the workflow can overreact, underreact, waste review capacity, or bypass the authority that should handle the case.

## Structural Signal

A score crosses or fails to cross an escalation threshold in a way that does not match the intended authority path. The issue is not only that the score may be inaccurate; it is that the score is connected to escalation behavior that does not fit the case or governing rule.

## Common Triggers

- Thresholds are configured without enough calibration
- Risk labels are treated as routing authority
- The score is generated from incomplete or stale evidence
- Escalation rules do not distinguish advisory scores from control signals
- The workflow lacks a human or policy check before escalation
- Similar scores route to different queues without a declared rule

## When to Use This Issue

Use this Issue when a model-generated risk, severity, confidence, or threshold value causes the wrong escalation, review path, queue, or authority level.

## When Not to Use This Issue

Do not use this Issue when the score is wrong but does not trigger escalation. Do not use it when the escalation path is correct but the reviewer disagrees with the score.
