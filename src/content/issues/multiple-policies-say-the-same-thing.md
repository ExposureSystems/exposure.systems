---
layer: issue
ontology_slug: multiple-policies-say-the-same-thing
title: Multiple Policies Say the Same Thing
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Multiple policies, rules, or guidance documents express the same requirement, creating redundancy and uncertainty about which one governs.
code: ISS-0070
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0060
primary_pattern: redundant-declaration
patterns:
  - redundant-declaration
  - authority-merge-conflict
  - density-spike
search_intents:
  - multiple policies say the same thing
  - duplicate policies
  - redundant policy rules
  - AI sees multiple policies with same rule
  - same requirement in multiple policies
  - policy duplication causes confusion
---

## What This Looks Like

Multiple policy documents, rules, guidelines, rubrics, or governance references express the same requirement. They may use slightly different language, scope labels, examples, or exceptions, making it unclear whether they are duplicates, separate authorities, or subtly different obligations.

## Why It Matters

Policy duplication increases maintenance and interpretation risk. If the copies drift, users may not know which version is authoritative. Even before drift occurs, the AI may over-weight repeated rules or treat the same requirement as multiple separate constraints.

## Structural Signal

The same policy requirement is declared through multiple policy authorities. The issue is not that the requirement is invalid; it is that redundant policy declarations create unnecessary authority density and possible merge conflict.

## Common Triggers

- Policy content is copied across teams, products, or workflows
- Local guidance repeats global policy without linking to it
- Migration leaves legacy policy text in place
- Multiple documents restate the same rule with different examples
- The AI retrieves duplicate policy passages and treats them as separate evidence
- There is no canonical policy source for the requirement

## When to Use This Issue

Use this Issue when multiple policies or guidance sources say the same thing and that redundancy creates confusion, drift risk, or over-weighted authority.

## When Not to Use This Issue

Do not use this Issue when policies overlap but govern distinct scopes. Do not use it when policies conflict; use a policy-conflict Issue instead.
