---
layer: issue
ontology_slug: local-rule-spreads-to-broader-cases
title: Local Rule Spreads to Broader Cases
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A rule intended for one local case, file, context, user, workflow, or exception begins affecting broader cases.
code: ISS-0096
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
  - local rule spreads to broader cases
  - AI applies local rule too broadly
  - local instruction became global
  - rule from one case affects others
  - AI overgeneralized local rule
  - local policy spread too far
---

## What This Looks Like

A rule intended for a narrow case begins affecting broader work. A local instruction, exception, file-specific rule, reviewer preference, temporary constraint, or one-off decision may start governing other cases, prompts, workflows, users, or outputs where it was not meant to apply.

## Why It Matters

Local rules are useful because they are bounded. When they spread, they can quietly change broader behavior without a policy update or authority decision. Users may not realize a local condition has become a general rule until it affects unrelated cases.

## Structural Signal

A rule crosses the boundary from local authority into broader authority without authorization. The issue is not that the local rule exists; it is that the system propagates it beyond its intended scope.

## Common Triggers

- Local instructions are saved as durable memory or reusable prompt context
- Examples from one case become templates for other cases
- The AI generalizes a one-off exception
- Workflow state is copied without scoping rules
- A reviewer preference is treated as policy
- The system lacks labels for local, temporary, and global rules

## When to Use This Issue

Use this Issue when a local rule, exception, instruction, or decision spreads into broader cases where it should not apply.

## When Not to Use This Issue

Do not use this Issue when the rule was intentionally promoted to a broader policy. Do not use it when the local rule remains confined to its intended scope.
