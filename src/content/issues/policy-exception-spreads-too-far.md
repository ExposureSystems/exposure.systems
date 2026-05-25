---
layer: issue
ontology_slug: policy-exception-spreads-too-far
title: Policy Exception Spreads Too Far
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A narrow policy exception, allowance, or special case spreads beyond its intended scope and begins governing broader cases.
code: ISS-0049
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0060
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - boundary-leakage
  - overreach
search_intents:
  - policy exception spreads too far
  - AI applies exception too broadly
  - policy exception used for other cases
  - exception becomes general rule
  - AI over-applies exception
  - special case spreads into policy
---

## What This Looks Like

A policy exception or special allowance is created for one bounded case, but the AI or workflow begins applying it to other cases. The exception may spread from one user, file, risk level, product surface, or scenario into broader outputs where it was never meant to govern.

## Why It Matters

Exceptions need boundaries. If an exception spreads too far, the system can quietly weaken the policy it was supposed to preserve. Users may believe the normal policy is still active while the AI is applying an exception as if it were a general rule.

## Structural Signal

A local exception crosses its intended boundary and begins functioning as broader authority. The issue is not that an exception exists; it is that the exception propagates beyond the case, scope, or condition that justified it.

## Common Triggers

- The exception is recorded without its limiting condition
- The AI treats a special case as a reusable precedent
- Workflow examples include exceptions without marking them as exceptions
- A temporary allowance is copied into future context
- The system lacks a rule for when an exception expires
- Similar cases are routed through an exception path without checking scope

## When to Use This Issue

Use this Issue when a narrow policy exception, allowance, or special case begins affecting broader cases where it should not apply.

## When Not to Use This Issue

Do not use this Issue when the policy itself changed for all cases. Do not use it when a one-off exception is applied only to its intended case. This Issue applies when exception authority spreads beyond its declared boundary.
