---
layer: issue
ontology_slug: saved-reference-no-longer-works
title: Saved Reference No Longer Works
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A saved source, citation, file reference, prompt reference, or workflow pointer previously worked but no longer resolves to the expected object or meaning.
code: ISS-0004
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0010
primary_pattern: reference-instability
patterns:
  - reference-instability
  - contract-drift
  - compatibility-violation
search_intents:
  - saved reference no longer works
  - old AI citation link broke
  - saved source link stopped working
  - previous reference cannot be opened
  - reference worked before but not now
  - saved prompt reference changed
---


## What This Looks Like

A saved reference that previously resolved correctly now fails, points somewhere else, opens the wrong object, or no longer carries the same meaning. The user may return to an old citation, file pointer, prompt link, run record, source reference, or workflow artifact and find that it no longer connects to what the original work depended on.

## Why It Matters

Saved references are often used to preserve evidence, reproduce decisions, revisit prior work, or explain how an output was produced. When a reference stops resolving, the surrounding work becomes harder to audit. The user may not know whether the object moved, changed, expired, was renamed, lost permissions, or was never stable enough to rely on.

## Structural Signal

The reference was treated as a durable pointer, but the target, access path, version, or meaning changed after it was saved. The issue is not just a broken link; it is a failure of reference stability across time, version, permission, or storage boundaries.

## Common Triggers

- A source, file, or document moved after the answer was created
- The referenced object changed version without preserving the old target
- Access permissions changed after the reference was saved
- A temporary run artifact was treated like a durable citation
- The system stored a display label instead of a stable identifier
- A workflow migrated data without preserving reference compatibility

## When to Use This Issue

Use this Issue when a reference used by prior AI work no longer resolves to the expected source, object, passage, file, or meaning.

## When Not to Use This Issue

Do not use this Issue when the reference never worked in the first place, when the output simply lacks a reference, or when the citation points to the wrong source immediately. Those are separate source-trace or citation-mismatch Issues.
