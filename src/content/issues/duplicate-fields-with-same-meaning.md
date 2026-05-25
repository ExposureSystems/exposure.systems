---
layer: issue
ontology_slug: duplicate-fields-with-same-meaning
title: Duplicate Fields With Same Meaning
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI returns multiple fields, labels, sections, or structured elements that carry the same meaning and create ambiguity about which one should be used.
code: ISS-0027
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0010
primary_pattern: redundant-declaration
patterns:
  - redundant-declaration
  - density-spike
  - schema-breakage
search_intents:
  - duplicate fields with same meaning
  - AI output has duplicate fields
  - same meaning in multiple JSON keys
  - duplicate structured output fields
  - AI returned redundant fields
  - output has overlapping fields
---

## What This Looks Like

The AI returns two or more fields, labels, keys, columns, or sections that appear to mean the same thing. The names may differ slightly, but the values overlap enough that the user or downstream system cannot tell which field is authoritative.

## Why It Matters

Duplicate fields create ambiguity. A parser may accept the output, but reviewers or downstream systems still have to decide which value to trust. If the duplicate fields later diverge, the output can carry conflicting meaning even though each field looks valid on its own.

## Structural Signal

The output contains redundant declarations in the same structural space. The issue is not that extra prose was added; it is that the structure contains multiple fields or labels competing to represent the same meaning.

## Common Triggers

- The prompt uses multiple terms for the same concept
- Examples include overlapping field names
- The model tries to preserve both user language and schema language
- A schema migration leaves old and new names in context
- The AI creates helpful-looking aliases as separate fields
- The output contract does not declare one canonical field name

## When to Use This Issue

Use this Issue when structured output contains duplicate or overlapping fields that create uncertainty about which field should be read, stored, validated, or passed forward.

## When Not to Use This Issue

Do not use this Issue when fields are merely related but carry distinct meanings. Do not use it for repeated prose unless the repetition creates a structural ambiguity in the output.
