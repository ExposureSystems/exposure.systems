---
layer: pattern
slug: schema-breakage
title: Schema Breakage
code: PAT-0160
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an instance, graph, payload, or object violates the type, shape, or rule requirements of a declared schema.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/schema-breakage.md
search_intents:
  - schema breakage
  - schema violation
  - invalid shape
  - type mismatch
  - payload does not match schema
related_lenses:
  primary:
    - interface-contract-lens
    - compatibility-envelope-lens
  secondary:
    - constraint-sufficiency-lens
    - invariant-lens
---

# Schema Breakage

## Definition

Schema Breakage exists when an instance, graph, payload, object, or structural state violates the type, shape, or rule requirements of a declared schema.

The structure does not fail because the schema itself is bad. It fails because the observed structure does not comply with the schema that is declared to govern it.

## Visible Surface

Users may notice Schema Breakage when a system accepts, produces, stores, or routes data that does not match the shape it claims to require.

Common visible signs include:

- A field has the wrong type.
- A required field is missing.
- A payload contains unexpected or disallowed fields.
- A nested object does not match the declared structure.
- A generated output fails validation.
- A downstream component rejects data that an upstream component produced.
- A schema-validating layer and runtime behavior disagree.
- An object passes through the system even though it contradicts the declared schema.

The visible problem is often described as “this does not match the schema.”

## Structural Signature

Schema Breakage usually contains these elements:

- A declared schema
- A structural instance, graph, payload, object, state, or output governed by that schema
- A contradiction between the declared schema and the observed structure
- A type, shape, required-field, allowed-field, nesting, enum, constraint, or validation-rule violation
- A system path that treats the invalid structure as relevant

The schema may describe data, configuration, tool calls, model outputs, API payloads, workflow state, content metadata, or evaluation records.

## Deterministic Test

Given a declared schema, the governed structural instance should conform to the schema rules.

Ask:

1. What schema is declared?
2. What structure is governed by that schema?
3. Which type, shape, field, nesting, enum, or rule requirement applies?
4. Where does the observed structure violate that requirement?
5. Does the system have a declared compatibility or migration rule that permits the deviation?

If the observed structure violates the declared schema without an applicable compatibility rule, Schema Breakage exists.

## Common Contexts

Schema Breakage commonly appears in:

- API payloads
- Tool call schemas
- Function definitions
- Model output schemas
- Structured generation
- Validation pipelines
- Configuration files
- Content frontmatter
- Event logs
- Data models
- Evaluation records
- Workflow state objects
- Database records
- Integration payloads
- Search or index documents

In AI systems, it often appears when generated or transformed outputs do not match the schema expected by tools, validators, evaluators, or downstream workflows.

## Distinguish From

### Interface Mismatch

Interface Mismatch occurs when observed interface behavior, shape, input, output, or exchange differs from the declared interface contract.

Schema Breakage is narrower. It specifically concerns violation of a declared schema’s type, shape, or validation rules.

### Incomplete Declaration

Incomplete Declaration occurs when a declared element is missing required attributes or dependent declarations.

Schema Breakage can include missing required fields in an instance, but it requires a declared schema that the instance violates.

### Compatibility Violation

Compatibility Violation occurs when a structure falls outside declared compatibility expectations across versions, consumers, or environments.

Schema Breakage may be a compatibility violation, but it specifically names schema non-compliance.

### Contract Drift

Contract Drift occurs when contracts change over time without coordinated alignment.

Schema Breakage may result from contract drift, but it can also occur from a single invalid payload, object, or generated structure.

## Related Lenses

Primary Lenses:

- Interface Contract Lens
- Compatibility Envelope Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Invariant Lens

Use the Interface Contract Lens when the schema is part of a broader interface agreement.

Use the Compatibility Envelope Lens to inspect whether schema changes or variants remain inside allowed compatibility boundaries.

Use the Constraint Sufficiency Lens when the schema lacks enough constraints to make valid structure testable.

Use the Invariant Lens when schema compliance must remain true across transformations, states, or handoffs.

## Structural Limits

Schema Breakage does not evaluate whether the declared schema is correct, complete, or well-designed.

It does not decide what the schema should be.

It only identifies that an observed structure violates the schema currently declared to govern it.

A schema update, migration rule, compatibility boundary, or corrected instance may resolve Schema Breakage.

## Workbench Notes

This Pattern is useful when a system produces or accepts structure that fails declared validation rules.

The key Workbench move is to separate three questions:

1. What schema governs this structure?
2. What structure was observed?
3. Where does the observed structure violate the schema?

If a declared schema exists and the observed structure violates it, the issue is Schema Breakage.