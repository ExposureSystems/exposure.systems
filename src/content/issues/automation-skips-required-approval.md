---
layer: issue
ontology_slug: automation-skips-required-approval
title: Automation Skips Required Approval
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An automated AI or workflow step proceeds past an approval gate that should have been required before action.
code: ISS-0111
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0070
primary_pattern: missing-authority
patterns:
  - missing-authority
  - undeclared-side-effect
  - compatibility-violation
search_intents:
  - automation skips required approval
  - AI automation bypassed approval
  - workflow skipped approval gate
  - agent acted without required approval
  - approval gate bypassed
  - automated action skipped review
---

## What This Looks Like

An automated AI or workflow step proceeds even though approval should have been required. It may send, update, route, publish, escalate, delete, notify, call a tool, or modify state without waiting for the required human or system approval gate.

## Why It Matters

Approval gates are control points. If automation skips them, the workflow may perform actions that have not been authorized, reviewed, or accepted. This can create compliance, safety, audit, and recovery problems because the action has already happened before authority is confirmed.

## Structural Signal

An action crosses an approval boundary without the required authority state. The issue is not merely that automation acted quickly; it is that the approval condition was missing, bypassed, or not enforced.

## Common Triggers

- Approval requirements are documented but not encoded in automation
- The agent treats generated output as approval
- A tool or workflow executes after classification without a gate
- Approval state is stored separately and not checked before action
- Default automation paths skip edge-case approvals
- A retry or repair path bypasses the normal approval step

## When to Use This Issue

Use this Issue when automation proceeds past a required approval gate and performs or triggers action without the needed approval.

## When Not to Use This Issue

Do not use this Issue when approval was not required. Do not use it when the problem is that approval was slow or denied. This Issue applies when a required approval boundary is skipped.
