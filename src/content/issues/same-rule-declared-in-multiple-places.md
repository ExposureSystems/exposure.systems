---
layer: issue
ontology_slug: same-rule-declared-in-multiple-places
title: Same Rule Declared in Multiple Places
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same rule, constraint, instruction, or policy appears in multiple places, creating redundancy and possible drift.
code: ISS-0067
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0060
primary_pattern: redundant-declaration
patterns:
  - redundant-declaration
  - contract-drift
  - density-spike
search_intents:
  - same rule declared in multiple places
  - duplicate AI rules
  - same instruction appears twice
  - policy duplicated in multiple places
  - repeated rule creates confusion
  - same constraint declared more than once
---

## What This Looks Like

The same rule, policy, instruction, constraint, or requirement appears in more than one place. It may be repeated in a prompt, schema, policy file, workflow step, tool instruction, rubric, or documentation. The repeated versions may match at first, but over time they can drift.

## Why It Matters

Rules declared in multiple places are harder to maintain. Users and systems may not know which copy is authoritative, and updates can change one copy while leaving another behind. This creates ambiguity, stale instructions, and hidden conflicts.

## Structural Signal

A single governing rule is represented by multiple declarations instead of one stable authority. The issue is not that the rule is wrong; it is that redundant declarations create overload and drift risk.

## Common Triggers

- A rule is copied into prompts, docs, schemas, and workflow instructions
- The system lacks a canonical rule location
- Old versions remain after migration or refactoring
- Examples repeat requirements as if they were separate rules
- Tool instructions and policy instructions restate the same constraint
- Updates are applied to one copy but not the others

## When to Use This Issue

Use this Issue when the same rule is declared in multiple places and that duplication creates ambiguity, maintenance risk, or conflicting behavior.

## When Not to Use This Issue

Do not use this Issue when related rules are distinct and intentionally layered. Do not use it for ordinary emphasis unless duplicated rule declarations affect governance or output behavior.
