---
layer: issue
ontology_slug: citation-points-to-wrong-source
title: Citation Points to Wrong Source
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A citation, reference, link, or source pointer is present, but it points to the wrong source, wrong passage, wrong document, or unsupported evidence.
code: ISS-0003
category: output
primary_cat_code: CAT-0010
secondary_cat_codes:
  - CAT-0120
primary_pattern: reference-instability
patterns:
  - reference-instability
  - interface-mismatch
  - compatibility-violation
search_intents:
  - citation points to wrong source
  - AI citation is wrong
  - source does not support the answer
  - citation link goes to wrong document
  - AI cited the wrong passage
  - reference points to unrelated source
---

# Citation Points to Wrong Source

## What This Looks Like

The answer includes a citation, link, document reference, file pointer, or source label, but following it does not support the claim being made. The cited source may be unrelated, too broad, from the wrong document, attached to the wrong sentence, or pointed at a passage that says something different.

## Why It Matters

A bad citation can be more damaging than no citation because it creates a false appearance of verification. Users may trust the answer, pass it forward, or rely on it in a workflow because the output appears sourced. Reviewers then have to separate the claim from the reference and determine whether either one is usable.

## Structural Signal

The output has a reference object, but the reference does not match the claim, passage, document, or evidence requirement it is supposed to support. The failure is in the link between answer and source, not simply in the answer text.

## Common Triggers

- Source references are attached after generation instead of preserved during reasoning
- Retrieval returns a relevant document but not the supporting passage
- The answer merges claims from several sources and assigns the wrong citation
- A citation format is required but source-to-claim alignment is not checked
- The system treats document-level relevance as enough for passage-level support
- A source link survives from an earlier answer after the content changes

## When to Use This Issue

Use this Issue when a source pointer exists but does not support the specific claim, sentence, field, recommendation, or evidence requirement it is attached to.

## When Not to Use This Issue

Do not use this Issue when the answer has no source at all. Use the missing-trace Issue instead. Do not use it when the citation is valid but the user disagrees with the source’s credibility, freshness, or interpretation.
