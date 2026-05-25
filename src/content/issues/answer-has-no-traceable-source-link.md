---
layer: issue
ontology_slug: answer-has-no-traceable-source-link
title: Answer Has No Traceable Source Link
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The answer makes a claim, recommendation, citation, or factual statement without a source link or trace path that allows the user to verify where it came from.
code: ISS-0002
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0120
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - reference-instability
  - density-vacuum
search_intents:
  - answer has no traceable source link
  - AI answer has no source
  - AI gave claim without citation
  - cannot verify where answer came from
  - missing source link in AI response
  - answer has no evidence trail
---


## What This Looks Like

The AI gives an answer that depends on a source, document, search result, policy, dataset, or prior reference, but does not provide a link or traceable pointer back to it. The user may get a confident factual claim, summary, recommendation, or citation-like statement without a way to inspect the underlying source.

## Why It Matters

A source-dependent answer without a trace path cannot be reliably checked. Even if the answer is correct, the user has no stable way to verify it, challenge it, reuse it, or pass it into a workflow that requires evidence. In review-heavy work, the missing trace can matter as much as the answer itself.

## Structural Signal

The output contains a claim that should be backed by a retrievable reference, but the reference layer is absent. The issue is not whether the claim sounds plausible; it is that the answer cannot be connected to a source object, passage, URL, document, or evidence record.

## Common Triggers

- The prompt asks for an answer but does not require source links
- The system summarizes retrieved material without preserving source pointers
- The answer combines multiple sources but does not keep provenance attached
- The model supplies general knowledge where the workflow expected cited evidence
- The interface hides retrieval details from the final user-facing response
- A citation requirement is implied by the task but not declared as an output rule

## When to Use This Issue

Use this Issue when the user needs to trace an answer back to a source and the response provides no usable link, reference path, citation, document pointer, or evidence trail.

## When Not to Use This Issue

Do not use this Issue when a source is provided but points to the wrong place. That is a citation or reference mismatch. Do not use it when the problem is that the source is weak, outdated, or contradicted by another source unless the trace itself is missing.
