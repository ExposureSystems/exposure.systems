---
layer: issue
ontology_slug: same-case-has-conflicting-policies
title: Same Case Has Conflicting Policies
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same case appears to be governed by multiple policies, rules, or standards that point to incompatible outcomes.
code: ISS-0037
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0050
primary_pattern: authority-collision
patterns:
  - authority-collision
  - authority-merge-conflict
  - authority-shadowing
search_intents:
  - same case has conflicting policies
  - AI sees policy conflict
  - policies disagree for same case
  - same case allowed and blocked
  - conflicting rules apply to one case
  - policy conflict in AI decision
---

## What This Looks Like

A single case falls under more than one policy, rule, standard, or guideline, and those rules point to incompatible outcomes. One policy may allow the action while another blocks it, one may require escalation while another says to proceed, or two standards may classify the same case differently.

## Why It Matters

Policy conflicts make AI and workflow decisions unstable. If the system does not know which policy governs, it may choose inconsistently, follow the wrong rule, or hide the conflict behind a confident answer. Users may not realize the output is based on an unresolved policy collision.

## Structural Signal

Multiple policy authorities apply to the same case and cannot be satisfied together. The issue is not that a policy is missing; it is that overlapping policies create incompatible instructions without a declared precedence or reconciliation rule.

## Common Triggers

- Policies are written for separate contexts but applied to the same case
- A newer policy does not clearly replace an older one
- Local rules conflict with global rules
- Risk, compliance, workflow, and user-facing rules overlap
- The AI retrieves multiple policy passages without resolving priority
- Exception rules are mixed with default rules without a governing order

## When to Use This Issue

Use this Issue when a case is governed by multiple policies or rules that conflict and the system does not have a clear way to resolve which policy controls.

## When Not to Use This Issue

Do not use this Issue when the policy is merely unclear, incomplete, or missing. Do not use it when one policy clearly supersedes the other. This Issue applies when more than one active policy points to incompatible outcomes.
