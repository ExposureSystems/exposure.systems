---
layer: issue
ontology_slug: same-instructions-allow-different-outputs
title: Same Instructions Allow Different Outputs
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same instructions are broad or underspecified enough to allow materially different outputs that all appear compliant.
code: ISS-0072
category: inconsistent-behavior
primary_cat_code: CAT-0090
secondary_cat_codes:
  - CAT-0120
primary_pattern: divergent-outputs
patterns:
  - divergent-outputs
  - non-deterministic-execution
  - constraints-underspecified
search_intents:
  - same instructions allow different outputs
  - same prompt allows different answers
  - AI outputs differ but follow instructions
  - instructions too broad for stable output
  - different compliant outputs from same prompt
  - prompt allows too much variation
---

## What This Looks Like

The same instructions produce materially different outputs, and each output can still be defended as following the prompt. The differences may involve structure, recommendation, level of detail, source choice, field selection, wording, or decision path. The problem is not obvious noncompliance; it is too much compliant variation.

## Why It Matters

Instructions that allow many different compliant outputs are hard to validate. Users may not know whether the AI did something wrong or whether the task was too broad to control the result. This can make repeated runs, review comparisons, and workflow automation unreliable.

## Structural Signal

The instructions define a wide enough solution space that different outputs can all satisfy the stated request. The issue is not random variation alone; it is that the governing instructions fail to narrow the output to the needed equivalence class.

## Common Triggers

- The prompt lacks explicit selection criteria
- The desired output form is described broadly
- Examples do not define what must remain invariant
- The task allows multiple valid scopes, tones, or levels of detail
- The AI is asked to choose without a declared decision rule
- Evaluation criteria are implied but not stated

## When to Use This Issue

Use this Issue when the same instructions allow materially different outputs that all appear compliant, making the result unstable or difficult to evaluate.

## When Not to Use This Issue

Do not use this Issue for harmless wording variation. Do not use it when the outputs differ because the input, context, source set, model, or workflow changed.
