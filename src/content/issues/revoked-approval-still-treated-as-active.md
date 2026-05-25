---
layer: issue
ontology_slug: revoked-approval-still-treated-as-active
title: Revoked Approval Still Treated as Active
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An approval, permission, exception, or authorization that was revoked continues to affect AI behavior or workflow decisions as if it were still active.
code: ISS-0041
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0080
primary_pattern: authority-state-mismatch
patterns:
  - authority-state-mismatch
  - contract-drift
  - persistence-instability
search_intents:
  - revoked approval still treated as active
  - AI still uses revoked approval
  - old permission still active
  - revoked authorization ignored
  - approval removed but workflow still uses it
  - AI treats expired approval as valid
---

## What This Looks Like

An approval, permission, exception, role assignment, or authorization is revoked, but the AI or workflow continues to behave as if it is still active. The system may proceed with an action, skip review, use an exception, or route a case under an approval that should no longer govern the work.

## Why It Matters

Revocation needs to change behavior. If revoked approval remains active, users cannot trust the system’s authority state. A workflow may appear controlled while old permissions still govern actions, creating audit risk, policy drift, and decisions based on authority that no longer exists.

## Structural Signal

The declared authority state changed, but the operational state did not. The issue is not only that an action was allowed; it is that the system continued to use a revoked authority as if it were still valid.

## Common Triggers

- Approval state is cached or copied into another workflow step
- Revocation updates one system but not the AI-facing context
- The system stores a prior approval as text without checking current status
- Permission changes are not propagated to tools or agents
- An exception is revoked but remains in prompt or workflow context
- The workflow has no rule for invalidating prior authority

## When to Use This Issue

Use this Issue when an approval, exception, permission, or authorization has been revoked but continues to affect AI behavior, tool access, routing, or workflow decisions.

## When Not to Use This Issue

Do not use this Issue when approval was never revoked, when the approval was merely unclear, or when the owner made a bad decision while still authorized. This Issue applies when revoked authority remains active in practice.
