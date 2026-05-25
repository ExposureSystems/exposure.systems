---
layer: issue
ontology_slug: output-changed-without-declared-change
title: Output Changed Without Declared Change
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Output shape, content, format, fields, or behavior changes without a declared change to the prompt, schema, model, workflow, or governing rule.
code: ISS-0059
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0010
primary_pattern: silent-mutation
patterns:
  - silent-mutation
  - contract-drift
  - compatibility-violation
search_intents:
  - output changed without declared change
  - AI output changed without update
  - output format changed silently
  - structured output changed no version change
  - AI response changed unexpectedly
  - output changed but prompt did not
---

## What This Looks Like

The output changes in a meaningful way even though no declared input, prompt, schema, model, workflow, or policy change is visible. The user may see different fields, labels, ordering, length, citation behavior, formatting, refusal posture, or decision logic without any stated reason for the change.

## Why It Matters

Stable workflows depend on knowing what changed. If output changes without a declared change, users cannot tell whether the difference came from the model, prompt, runtime, policy, tool, memory, or hidden context. This makes comparison, regression testing, and downstream integration unreliable.

## Structural Signal

The observed output contract changes while the declared governing structure appears unchanged. The issue is not simply that two outputs differ; it is that the difference has no declared change source.

## Common Triggers

- Runtime or product behavior changes without visible release information
- Prompt dependencies change outside the prompt text
- Tool or retrieval behavior changes output content
- Hidden policy or system instructions affect response shape
- Examples, memory, or context shift without being recorded as versioned inputs
- The workflow lacks a mechanism for declaring output-affecting changes

## When to Use This Issue

Use this Issue when output changes materially and the system does not declare a corresponding change in prompt, schema, model, workflow, rule, or runtime dependency.

## When Not to Use This Issue

Do not use this Issue for expected variation across repeated generations unless the output contract itself changes. Do not use it when a visible version or configuration change explains the difference.
