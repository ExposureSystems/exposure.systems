---
layer: issue
ontology_slug: approval-depends-on-output-that-needs-approval
title: Approval Depends on Output That Needs Approval
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A required approval depends on an AI output or workflow result that itself cannot be produced or trusted until approval is granted.
code: ISS-0088
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0050
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - missing-authority
  - authority-collision
search_intents:
  - approval depends on output that needs approval
  - AI approval circular dependency
  - output needs approval before approval can happen
  - approval loop AI workflow
  - cannot approve because output not approved
  - workflow approval depends on itself
---

## What This Looks Like

A workflow requires approval before an AI output can be used, but the approval decision depends on that same output being available, complete, or trusted. The process may loop because the approver needs the generated result to approve it, while the system requires approval before generating or accepting the result.

## Why It Matters

Approval loops block resolution. Users cannot tell whether to generate first, approve first, escalate, or stop. If the workflow guesses, it may either use unapproved output or prevent necessary work from being produced.

## Structural Signal

The approval condition depends on the output that the approval condition is supposed to govern. The issue is not simply missing approval; it is a circular dependency between approval authority and output availability.

## Common Triggers

- Approval is required before generation but reviewers need the generated draft
- A tool output is needed to determine whether tool use is approved
- The workflow requires validation before producing the object to validate
- Policy requires review of evidence that cannot be collected until approved
- Draft and final states are not separated
- The system lacks a provisional or preview state for approval

## When to Use This Issue

Use this Issue when approval depends on an output or workflow result that itself requires approval before it can exist, be used, or be trusted.

## When Not to Use This Issue

Do not use this Issue when approval is simply missing or delayed. Do not use it when the output can be produced in a clearly marked draft or preview state and the workflow handles that state correctly.
