---
layer: issue
ontology_slug: policy-update-not-reflected-in-output
title: Policy Update Not Reflected in Output
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A policy, rule, standard, or instruction has been updated, but the AI output still follows the older version.
code: ISS-0042
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0080
primary_pattern: contract-drift
patterns:
  - contract-drift
  - reference-instability
  - persistence-instability
search_intents:
  - policy update not reflected in output
  - AI used old policy
  - policy changed but AI output did not
  - updated rule not applied
  - AI follows outdated policy
  - new policy not reflected in response
---

## What This Looks Like

A policy, rule, standard, guideline, rubric, or instruction has been updated, but the AI output still reflects the older version. The user may see outdated language, old thresholds, prior approval rules, obsolete categories, or earlier workflow requirements appear after the update should have taken effect.

## Why It Matters

Policy updates are only useful if they change the outputs they are supposed to govern. When AI output continues to follow an older policy, users may believe the current policy is being applied when it is not. This creates audit, compliance, and operational risk, especially when the old and new policies lead to different decisions.

## Structural Signal

The declared governing rule has changed, but the generated output is still governed by a prior rule state. The issue is not just that the answer is outdated; it is that policy version and output behavior are no longer aligned.

## Common Triggers

- The model or workflow still has old policy text in context
- Documentation updates before prompts, tools, or retrieval sources are updated
- The AI retrieves an older policy version
- Cached examples preserve obsolete policy behavior
- The workflow does not declare which policy version is authoritative
- Updated policy is available but not connected to the current task

## When to Use This Issue

Use this Issue when a policy or rule has changed and the AI output still follows the older policy state.

## When Not to Use This Issue

Do not use this Issue when the policy is merely unclear or when the AI violates a policy that has not changed. Use this Issue when the update itself is central: the output fails to reflect the new governing rule.
