---
layer: issue
ontology_slug: policy-area-has-no-examples
title: Policy Area Has No Examples
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A policy, rule, standard, or guidance area has no examples showing how it should apply to real cases.
code: ISS-0079
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0060
primary_pattern: density-vacuum
patterns:
  - density-vacuum
  - incomplete-declaration
  - reference-instability
search_intents:
  - policy area has no examples
  - AI policy lacks examples
  - no examples for policy rule
  - policy guidance has no cases
  - missing examples for AI review
  - policy hard to apply without examples
---

## What This Looks Like

A policy or guidance area declares a rule but gives no examples of how the rule applies to real cases. The AI, reviewer, or user may understand the policy language abstractly but lack reference cases for boundaries, exceptions, edge cases, or expected decisions.

## Why It Matters

Examples help convert policy language into usable judgment. Without them, similar cases may be handled inconsistently, reviewers may infer different meanings, and the AI may overgeneralize or underapply the rule. The policy exists, but its application surface is weak.

## Structural Signal

A policy rule exists without supporting examples that stabilize its interpretation. The issue is not that the policy is absent; it is that the policy has too little applied coverage to guide consistent use.

## Common Triggers

- Policies are written abstractly without case examples
- New rules are added before examples are developed
- Edge cases are discussed informally but not captured
- The AI retrieves policy text without applied guidance
- Reviewers rely on local memory instead of shared examples
- Examples exist for common cases but not the policy area in question

## When to Use This Issue

Use this Issue when a policy, rule, or guidance area lacks examples needed to apply it consistently to real cases.

## When Not to Use This Issue

Do not use this Issue when examples exist but are outdated, conflicting, or ignored. Do not use it when the policy itself is missing.
