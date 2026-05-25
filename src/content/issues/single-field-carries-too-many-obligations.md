---
layer: issue
ontology_slug: single-field-carries-too-many-obligations
title: Single Field Carries Too Many Obligations
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: One field, label, score, status, or structured value is expected to carry too many meanings, decisions, or workflow obligations.
code: ISS-0107
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0010
primary_pattern: density-spike
patterns:
  - density-spike
  - redundant-declaration
  - schema-breakage
search_intents:
  - single field carries too many obligations
  - AI field overloaded
  - one field has too many meanings
  - structured output field carries too much
  - status field overloaded
  - AI output field used for too many decisions
---

## What This Looks Like

A single field, status, label, score, category, or structured value is used to represent too many things at once. It may carry display meaning, workflow routing, approval state, risk severity, parser behavior, and review outcome together, making it hard to know what the field actually governs.

## Why It Matters

Overloaded fields create fragile workflows. A small change to the field value can affect multiple downstream obligations at once. Users and systems may treat the same value differently because it is being used for too many purposes.

## Structural Signal

Too much meaning is concentrated in one structural field. The issue is not simply that the field is important; it is that the field carries multiple obligations that should be separated or more explicitly governed.

## Common Triggers

- One status field controls both display and workflow routing
- A score is used for risk, confidence, review, and escalation
- A category label also acts as an approval signal
- Schema design collapses several meanings into one value
- Prompts ask the AI to encode multiple decisions into one field
- Downstream systems reuse a field for purposes it was not designed to support

## When to Use This Issue

Use this Issue when one field or structured value carries too many meanings, decisions, or workflow obligations for reliable use.

## When Not to Use This Issue

Do not use this Issue when a field has one clear purpose and is merely important. Do not use it when the problem is a wrong field type or missing required field.
