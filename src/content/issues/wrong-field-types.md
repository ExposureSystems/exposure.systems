---
layer: issue
ontology_slug: wrong-field-types
title: Wrong Field Types
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI returns fields with values whose types do not match the expected schema, such as strings where numbers, booleans, arrays, objects, or enums are required.
code: ISS-0024
category: output
primary_cat_code: CAT-0010
secondary_cat_codes: []
primary_pattern: schema-breakage
patterns:
  - schema-breakage
  - interface-mismatch
  - compatibility-violation
search_intents:
  - wrong field types
  - AI output wrong JSON types
  - schema expected number got string
  - field type mismatch
  - structured output type error
  - AI returned wrong data type
---

## What This Looks Like

The AI returns structured output where one or more fields are present, but the values use the wrong type. A field expected to be a number may be returned as a string, an array may be returned as a sentence, a boolean may be returned as “yes,” or an enum may be replaced with a similar freeform label.

## Why It Matters

Wrong field types can pass casual human review but fail machine validation. They create problems at the boundary between natural language and structured systems, especially when the next step expects strict types for parsing, storage, automation, comparison, or execution.

## Structural Signal

The field exists, but its value does not conform to the declared type contract. The issue is not missing information and not necessarily invalid JSON syntax; it is a mismatch between the expected field type and the generated value.

## Common Triggers

- The schema is described in prose rather than enforced as a hard contract
- The model preserves human-readable labels instead of machine-required values
- Examples include mixed type representations
- Numeric, boolean, enum, array, or object fields are underspecified
- The AI fills unknown values with explanatory text
- The output must satisfy both user readability and strict parser requirements

## When to Use This Issue

Use this Issue when fields are present but their values do not match the expected type required by the schema, validator, parser, importer, or downstream consumer.

## When Not to Use This Issue

Do not use this Issue when required fields are missing, extra fields are added, or the entire response cannot be parsed. Use this Issue when the structure is present but the field types are wrong.
