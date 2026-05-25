---
layer: issue
ontology_slug: prompt-behavior-changed-without-version-change
title: Prompt Behavior Changed Without Version Change
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A prompt begins producing different behavior even though no prompt version, model version, workflow version, or declared dependency change is recorded.
code: ISS-0058
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0090
primary_pattern: silent-mutation
patterns:
  - silent-mutation
  - contract-drift
  - divergent-outputs
search_intents:
  - prompt behavior changed without version change
  - prompt changed behavior but version same
  - AI prompt started acting different
  - same prompt different behavior no update
  - prompt drift without version change
  - AI behavior changed silently
---

## What This Looks Like

A prompt that appears unchanged starts producing different behavior, but no version change is declared. The output may shift format, tone, refusal behavior, tool use, reasoning path, or decision criteria even though the prompt, workflow, model label, or published version appears the same to the user.

## Why It Matters

Silent behavior changes are hard to diagnose. Users may assume the prompt is still governed by the same contract, while runtime behavior has moved. Without a declared version change, it becomes difficult to know what changed, when it changed, and which outputs are comparable.

## Structural Signal

Observed behavior changes while the declared version state stays the same. The issue is not ordinary output variance alone; it is that the system behaves as if something changed without exposing a corresponding version or contract update.

## Common Triggers

- Runtime behavior changes behind the same model or product label
- Prompt dependencies change without updating prompt metadata
- Hidden policy, tool, or workflow rules are updated silently
- Retrieval, memory, or context behavior changes outside the prompt file
- A product mode changes while preserving the same visible interface
- Version tracking records text changes but not behavioral dependencies

## When to Use This Issue

Use this Issue when prompt behavior changes materially and no corresponding version, dependency, or contract change is visible.

## When Not to Use This Issue

Do not use this Issue when the prompt was edited, the model version changed visibly, or the user supplied different inputs. Do not use it for minor variation unless the behavior shift looks like an undeclared change.
