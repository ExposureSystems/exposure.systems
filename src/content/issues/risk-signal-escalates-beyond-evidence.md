---
layer: issue
ontology_slug: risk-signal-escalates-beyond-evidence
title: Risk Signal Escalates Beyond Evidence
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A risk signal, warning, score, or concern escalates farther than the available evidence supports.
code: ISS-0095
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
  - risk signal escalates beyond evidence
  - AI risk warning went too far
  - risk score escalated without evidence
  - AI concern escalated too much
  - escalation beyond evidence
  - risk signal over-escalation
---

## What This Looks Like

The AI identifies a risk signal, warning, concern, score, or uncertainty marker, and the workflow escalates farther than the evidence supports. A weak or ambiguous signal may become a strong warning, a high-severity classification, or an authority-triggering escalation.

## Why It Matters

Risk escalation changes attention, authority, and workflow burden. If escalation grows beyond evidence, users may overreact, route cases incorrectly, or treat uncertain signals as confirmed findings. This can distort review and waste high-trust escalation paths.

## Structural Signal

A risk signal increases in severity or authority without enough evidence to support the increase. The issue is not that risk was detected; it is that the escalation outgrows the evidence base.

## Common Triggers

- The model treats uncertainty as risk severity
- Weak signals are mapped to strong escalation categories
- Thresholds are too sensitive or poorly calibrated
- Review workflows over-weight model warnings
- The AI uses cautious language that downstream systems treat as a trigger
- No rule requires evidence strength to match escalation level

## When to Use This Issue

Use this Issue when a risk signal escalates into a stronger workflow action, severity level, or authority state than the evidence supports.

## When Not to Use This Issue

Do not use this Issue when strong evidence supports the escalation. Do not use it when the problem is only that the risk score is inaccurate and no escalation occurs.
