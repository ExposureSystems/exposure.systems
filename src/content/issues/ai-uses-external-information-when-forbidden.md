---
layer: issue
ontology_slug: ai-uses-external-information-when-forbidden
title: AI Uses External Information When Forbidden
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI uses outside knowledge, sources, tools, memory, or assumptions after the task forbids external information or limits the allowed source set.
code: ISS-0044
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes:
  - CAT-0060
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - overreach
  - undeclared-side-effect
search_intents:
  - AI uses external information when forbidden
  - AI used outside sources
  - ChatGPT used outside knowledge when told not to
  - AI ignored source boundary
  - answer uses information not in provided file
  - AI used external context
---

## What This Looks Like

The user restricts the task to provided material, a file, a source set, a closed record, or a specific context, but the AI uses outside information anyway. The answer may include facts, assumptions, examples, citations, memory, tool results, or general knowledge that were not allowed by the task boundary.

## Why It Matters

Source boundaries are often part of the task contract. If the AI uses outside information when forbidden, the user cannot rely on the output as a faithful analysis of the allowed material. This can corrupt reviews, summaries, audits, legal or policy checks, and any workflow where the source set matters.

## Structural Signal

A boundary limits what information may govern the output, but information from outside that boundary affects the answer. The issue is not whether the external information is true; it is that the output is no longer constrained to the permitted source set.

## Common Triggers

- The prompt says to use only provided material but does not define fallback behavior
- The AI fills gaps using general knowledge
- Memory or prior context remains active during a source-bounded task
- Tool or retrieval access is not disabled when the task requires closure
- The model treats background knowledge as harmless explanation
- The output blends source-grounded claims with external assumptions

## When to Use This Issue

Use this Issue when the AI relies on information outside the allowed source set after the task forbids external information or limits what may be used.

## When Not to Use This Issue

Do not use this Issue when the user allowed external sources or asked for general knowledge. Do not use it when the problem is a wrong citation inside the allowed source set. This Issue applies when the source boundary is crossed.
