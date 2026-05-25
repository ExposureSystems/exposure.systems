---
layer: issue
ontology_slug: actual-policy-differs-from-declared-policy
title: Actual Policy Differs From Declared Policy
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The policy the AI or workflow actually follows differs from the policy that is documented, declared, displayed, or expected.
code: ISS-0040
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0080
primary_pattern: contract-drift
patterns:
  - contract-drift
  - authority-state-mismatch
  - silent-mutation
search_intents:
  - actual policy differs from declared policy
  - AI behavior does not match policy
  - documented policy differs from actual behavior
  - policy says one thing AI does another
  - declared policy not followed
  - runtime policy differs from docs
---

## What This Looks Like

The documented, displayed, or declared policy says one thing, but the AI or workflow behaves according to another rule. The user may see an output, refusal, escalation, routing choice, or permission result that does not match the policy they were told applies.

## Why It Matters

Policy mismatch breaks trust and auditability. Users rely on declared policy to understand what should happen, but the actual system behavior may be governed by a different version, hidden rule, product change, or implementation detail. This makes it hard to tell whether the policy, the system, or the expectation is wrong.

## Structural Signal

The declared policy state and the observed governing behavior do not match. The issue is not merely that the user dislikes the policy; it is that the system appears to follow a different policy than the one declared.

## Common Triggers

- Documentation is outdated relative to runtime behavior
- Product policy changes before public-facing text is updated
- A hidden or internal rule overrides the declared policy
- Different environments apply different policy versions
- The AI retrieves a policy statement that is no longer authoritative
- Workflow implementation does not match written policy language

## When to Use This Issue

Use this Issue when the AI or workflow appears to follow a policy different from the documented, declared, displayed, or expected policy.

## When Not to Use This Issue

Do not use this Issue when the policy is unclear but not contradicted by behavior. Do not use it for a one-off bad answer unless the observed behavior shows a mismatch between declared policy and actual governing rule.
