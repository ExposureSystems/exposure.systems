---
layer: issue
ontology_slug: output-breaks-after-model-change
title: Output Breaks After Model Change
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Output that previously worked begins failing after a model, mode, runtime, or product behavior changes.
code: ISS-0052
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0010
primary_pattern: compatibility-violation
patterns:
  - compatibility-violation
  - contract-drift
  - divergent-outputs
search_intents:
  - output breaks after model change
  - AI output changed after model update
  - model change broke output format
  - prompt worked before model update
  - output no longer works after upgrade
  - model version changed output
---

## What This Looks Like

A prompt, workflow, structured output, parser-facing response, or generated artifact worked before, but starts failing after the model, mode, runtime, or product behavior changes. The user may see different formatting, missing structure, new wording, parser failures, changed refusal behavior, or different assumptions after the change.

## Why It Matters

Model changes can break working workflows even when the user did not change the prompt. If the output contract depends on behavior that shifts across versions or modes, downstream systems may fail without an obvious local cause. Users need to distinguish prompt failure from compatibility drift.

## Structural Signal

The output contract remains expected by the user or workflow, but the model behavior that produced it has changed. The issue is not simply that a new output is different; it is that the new behavior no longer fits a previously working compatibility envelope.

## Common Triggers

- A model update changes formatting, reasoning style, or default structure
- The runtime switches models or modes without clear notice
- Prompt examples no longer constrain the new model the same way
- A parser expects old output behavior
- Product changes alter tool use, refusal behavior, or response structure
- A workflow depends on undocumented model behavior

## When to Use This Issue

Use this Issue when output that previously worked begins failing after a model, mode, runtime, or product behavior change.

## When Not to Use This Issue

Do not use this Issue when the prompt, schema, or workflow changed at the same time and is the clearer cause. Do not use it for ordinary output variation unless the model or runtime change is central to the break.
