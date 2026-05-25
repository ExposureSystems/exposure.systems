---
layer: issue
ontology_slug: human-review-and-automation-disagree
title: Human Review and Automation Disagree
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A human review result and an automated AI or workflow result disagree without a declared rule for resolving the difference.
code: ISS-0036
category: workflow-and-handoffs
primary_cat_code: CAT-0070
secondary_cat_codes:
  - CAT-0050
primary_pattern: authority-collision
patterns:
  - authority-collision
  - convergence-failure
  - authority-state-mismatch
search_intents:
  - human review and automation disagree
  - human and AI review disagree
  - automated decision conflicts with reviewer
  - AI says pass human says fail
  - workflow review disagreement
  - no rule for human AI disagreement
---

## What This Looks Like

A human reviewer and an automated AI or workflow step produce different results for the same case. The human may approve what automation rejects, automation may escalate what a reviewer clears, or the AI may classify a case differently than a human decision without a clear resolution rule.

## Why It Matters

Human review and automation often sit in the same control path. If they disagree without a declared authority rule, the workflow cannot reliably know which result governs. This can lead to duplicated review, inconsistent escalation, skipped approvals, or unresolved cases.

## Structural Signal

Two review authorities produce non-equivalent states, and the workflow lacks a stable reconciliation rule. The issue is not simply that one party is wrong; it is that disagreement between human and automated review is not structurally resolved.

## Common Triggers

- Human review and AI review use different criteria
- Automation runs before or after human review without a precedence rule
- A reviewer can override automation but the override path is not encoded
- The workflow treats both results as final
- The AI explains a decision differently than the reviewer’s rubric
- Escalation rules do not say what happens when review sources disagree

## When to Use This Issue

Use this Issue when human review and automated AI or workflow review disagree and the system does not clearly declare which result controls or how the conflict is resolved.

## When Not to Use This Issue

Do not use this Issue when the human reviewer is simply correcting an AI mistake through a clear override path. Do not use it when only one review source exists. This Issue applies when disagreement between review sources creates an unresolved workflow state.
