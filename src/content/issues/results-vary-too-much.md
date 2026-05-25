---
layer: issue
ontology_slug: results-vary-too-much
title: Results Vary Too Much
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Repeated or comparable runs produce outputs that vary more than the task, workflow, or user can tolerate.
code: ISS-0063
category: inconsistent-behavior
primary_cat_code: CAT-0090
secondary_cat_codes: []
primary_pattern: divergent-outputs
patterns:
  - divergent-outputs
  - non-deterministic-execution
  - constraints-underspecified
search_intents:
  - results vary too much
  - AI results inconsistent
  - same prompt gives very different answers
  - output varies too much
  - AI answer changes too much
  - model results are unstable
---

## What This Looks Like

The user runs the same or comparable task more than once and gets outputs that vary beyond what the task can tolerate. The answers may differ in decision, structure, content, classification, recommendation, cited evidence, or level of detail even though the user expected a stable result.

## Why It Matters

Some variation is normal in AI output, but too much variation makes a workflow hard to trust. Users cannot tell which answer to use, whether the system is following the same rules, or whether downstream decisions are stable enough to automate, review, or report.

## Structural Signal

Comparable inputs under comparable constraints produce outputs that are not equivalent enough for the task. The issue is not merely that wording differs; it is that the variation changes meaning, decision, structure, or workflow usability.

## Common Triggers

- The prompt leaves important criteria underspecified
- Sampling or routing differences change the response path
- The task has multiple valid interpretations
- Hidden context, memory, or tool results differ between runs
- The model is asked to make judgment calls without a stable rubric
- The workflow lacks a variance tolerance or reconciliation step

## When to Use This Issue

Use this Issue when repeated or comparable runs vary enough to undermine trust, review, automation, or decision-making.

## When Not to Use This Issue

Do not use this Issue for harmless wording variation. Do not use it when a visible input, prompt, model, or source change explains the difference. This Issue applies when variation exceeds what the task can tolerate.
