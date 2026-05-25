---
layer: issue
ontology_slug: small-issue-keeps-escalating
title: Small Issue Keeps Escalating
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A small issue, warning, uncertainty, or correction keeps increasing in severity, scope, or workflow impact across later steps.
code: ISS-0098
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0070
primary_pattern: escalation-growth
patterns:
  - escalation-growth
  - propagation-amplification
  - threshold-breach
search_intents:
  - small issue keeps escalating
  - AI issue keeps getting bigger
  - minor problem escalates repeatedly
  - small warning becomes major escalation
  - AI workflow over escalates issue
  - issue grows across workflow steps
---

## What This Looks Like

A small issue starts as a minor warning, correction, uncertainty, or review note, but each later step treats it as more severe. The workflow may escalate the issue repeatedly, broaden its scope, increase review burden, or turn a small concern into a large operational failure.

## Why It Matters

Escalation should match the problem. If a small issue keeps escalating, users lose the ability to distinguish minor concerns from major failures. Review paths may become overloaded, and the workflow may spend more effort managing escalation than resolving the original issue.

## Structural Signal

Severity or scope increases across steps without a proportional increase in evidence or authority. The issue is not that escalation happened once; it is that the escalation keeps growing beyond the original problem.

## Common Triggers

- Risk labels are treated as stronger at each handoff
- Review comments are converted into workflow blockers
- Uncertainty is interpreted as failure
- A minor issue triggers broad re-review
- The workflow lacks a stop or downgrade condition
- Later steps inherit escalation state without checking evidence

## When to Use This Issue

Use this Issue when a small issue repeatedly increases in severity, scope, or workflow impact across later steps.

## When Not to Use This Issue

Do not use this Issue when the issue escalates because new evidence genuinely shows greater severity. Do not use it for one appropriate escalation.
