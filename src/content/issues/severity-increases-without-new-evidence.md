---
layer: issue
ontology_slug: severity-increases-without-new-evidence
title: Severity Increases Without New Evidence
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The severity, risk, confidence, or escalation level increases even though no new evidence has been added.
code: ISS-0102
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
  - severity increases without new evidence
  - AI severity went up without evidence
  - risk level increased without new information
  - escalation increased without evidence
  - AI made issue more severe
  - severity drift in AI review
---

## What This Looks Like

A case becomes more severe across AI outputs, reviews, or workflow steps even though no new evidence has been added. The language may become stronger, a risk level may rise, escalation may increase, or the case may be treated as more urgent without a new factual basis.

## Why It Matters

Severity should track evidence. If severity increases without new evidence, users may overreact, over-escalate, or treat uncertainty as confirmation. This can distort review priorities and make the workflow less trustworthy.

## Structural Signal

The severity state grows while the evidence state stays the same. The issue is not that severity is high; it is that severity increases without a corresponding change in evidence.

## Common Triggers

- Repeated review language becomes stronger each pass
- The AI treats uncertainty as accumulating risk
- Escalation paths increase severity by default
- Reviewers or agents inherit prior concern without rechecking evidence
- Confidence labels are converted into severity labels
- The workflow lacks a rule tying severity changes to new evidence

## When to Use This Issue

Use this Issue when severity, risk level, escalation level, or urgency increases without new evidence supporting the increase.

## When Not to Use This Issue

Do not use this Issue when new evidence genuinely supports increased severity. Do not use it when severity is wrong but does not change over time.
