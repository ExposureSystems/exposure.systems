---
layer: issue
ontology_slug: policy-decision-depends-on-itself
title: Policy Decision Depends on Itself
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A policy decision requires the outcome of the same policy decision before it can be made.
code: ISS-0090
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0060
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - authority-collision
  - incomplete-declaration
search_intents:
  - policy decision depends on itself
  - AI policy circular dependency
  - policy needs its own decision
  - policy rule loops back on itself
  - AI cannot decide policy because decision depends on decision
  - circular policy decision
---

## What This Looks Like

A policy decision cannot be made until the policy outcome is already known. The AI or workflow may need to know whether something is allowed before it can determine which rule applies, but the rule selection itself depends on whether the thing is allowed.

## Why It Matters

Self-dependent policy decisions prevent reliable governance. The system may stall, guess, choose inconsistently, or escalate repeatedly because no policy path can produce the first valid state. This makes the policy appear available while leaving it unusable for the case.

## Structural Signal

The policy decision requires its own result as an input. The issue is not just that the policy is unclear; it is that the decision structure contains a circular dependency.

## Common Triggers

- A policy exception requires approval before the exception can be evaluated
- Rule selection depends on a classification produced by the selected rule
- The workflow needs an allowed/blocked result to decide which authority applies
- Policy text refers back to an undefined decision state
- An escalation rule depends on the outcome of the escalation
- No base case is declared for starting the policy decision

## When to Use This Issue

Use this Issue when a policy, rule, or authority decision depends on its own unresolved outcome.

## When Not to Use This Issue

Do not use this Issue when the policy is merely vague or incomplete. Use it when the decision logic specifically loops back onto itself.
