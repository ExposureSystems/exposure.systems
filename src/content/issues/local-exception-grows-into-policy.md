---
layer: issue
ontology_slug: local-exception-grows-into-policy
title: Local Exception Grows Into Policy
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A local exception, special case, or one-off allowance begins to function like a general policy.
code: ISS-0101
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0060
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - boundary-leakage
  - authority-state-mismatch
search_intents:
  - local exception grows into policy
  - exception became policy
  - AI treats special case as rule
  - local allowance became general policy
  - one off exception applied broadly
  - AI generalized exception into rule
---

## What This Looks Like

A local exception or one-off allowance is created for a specific case, but later outputs or workflow decisions treat it like a general policy. The AI may use the exception as precedent, apply it to unrelated cases, or preserve it as a reusable rule.

## Why It Matters

Exceptions are supposed to be bounded. When they grow into policy without approval, they can quietly change governance. Users may think the normal policy still applies while the workflow is actually operating under a local exception that has spread too far.

## Structural Signal

A local authority state becomes generalized without a policy change. The issue is not that an exception was granted; it is that the exception becomes policy-like beyond its declared scope.

## Common Triggers

- Exception context is saved without a scope label
- A special case is used as an example for future cases
- The AI treats one-off approval as reusable precedent
- Workflow prompts preserve exception language
- No expiration or locality rule is attached to the exception
- Similar cases inherit the exception without checking authority

## When to Use This Issue

Use this Issue when a local exception or special case starts functioning as a broader policy or general rule.

## When Not to Use This Issue

Do not use this Issue when the exception is formally promoted into policy through a declared authority process. Do not use it when the exception remains local.
