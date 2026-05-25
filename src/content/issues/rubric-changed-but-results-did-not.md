---
layer: issue
ontology_slug: rubric-changed-but-results-did-not
title: Rubric Changed but Results Did Not
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A review rubric, scoring rule, evaluation standard, or classification criterion changes, but AI results continue to reflect the old rubric.
code: ISS-0055
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0070
primary_pattern: contract-drift
patterns:
  - contract-drift
  - persistence-instability
  - authority-state-mismatch
search_intents:
  - rubric changed but results did not
  - AI still uses old rubric
  - evaluation rubric changed but output same
  - scoring rule update not reflected
  - AI review ignores new criteria
  - classification criteria changed but result did not
---

## What This Looks Like

A rubric, scoring rule, evaluation standard, review checklist, or classification criterion changes, but the AI continues to produce results that match the old version. Scores, pass/fail decisions, categories, feedback, or review labels may remain unchanged even though the governing criteria have been updated.

## Why It Matters

Rubric changes are supposed to change evaluation behavior where the criteria differ. If results do not reflect the update, users cannot trust the review as current. This can preserve outdated standards, misclassify cases, or make it appear that a policy or quality change had no effect.

## Structural Signal

The evaluation contract changes, but the generated results still align with the prior contract. The issue is not that the user dislikes the new rubric; it is that the active evaluation behavior did not move with the rubric change.

## Common Triggers

- The old rubric remains in prompt, examples, or memory
- Scoring logic is embedded outside the visible rubric
- The AI sees the new rubric but follows old examples
- Review automation is not updated when criteria change
- A cached result is reused after criteria are revised
- The workflow does not record rubric version dependencies

## When to Use This Issue

Use this Issue when review, scoring, classification, or evaluation results continue to reflect an old rubric after the rubric or criteria have changed.

## When Not to Use This Issue

Do not use this Issue when the rubric changed but the same result is still valid under the new rubric. Use this Issue when the result fails to reflect a meaningful change in the governing criteria.
