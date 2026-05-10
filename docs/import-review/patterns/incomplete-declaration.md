---
layer: pattern
slug: incomplete-declaration
title: Incomplete Declaration
code: PAT-0130
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an element is declared but required attributes, dependencies, or linked definitions are missing.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/incomplete-declaration.md
search_intents:
  - incomplete declaration
  - missing required fields
  - missing attributes
  - partial configuration
  - underspecified object
related_lenses:
  primary:
    - constraint-sufficiency-lens
    - interface-contract-lens
  secondary:
    - invariant-lens
    - reconciliation-lens
---

# Incomplete Declaration

## Definition

Incomplete Declaration exists when a structural element is declared but required attributes, dependencies, or linked definitions are missing.

The structure does not fail because the declared information is wrong. It fails because the declaration is not complete enough to support stable interpretation, execution, validation, routing, or governance.

## Visible Surface

Users may notice Incomplete Declaration when something appears to exist in the system but cannot be reliably used, validated, executed, or interpreted.

Common visible signs include:

- A configuration exists but required fields are blank or absent.
- A policy, schema, workflow, or tool declaration names an element without defining its required properties.
- A route or state exists but lacks the information needed to resolve it.
- A UI, API, or agent action references an object that is only partially declared.
- A process stalls because downstream logic expects attributes that were never provided.
- A system accepts a declaration but later fails when another component tries to use it.

The visible problem is often described as “this exists, but it is missing something required.”

## Structural Signature

Incomplete Declaration usually contains these elements:

- A declared node, region, object, rule, tool, schema, route, or state
- One or more required attributes missing
- One or more required dependent declarations missing
- Ambiguity about how the declared element should be interpreted or used
- Downstream behavior depending on missing information

The declaration must be active enough to matter. A draft note or unused placeholder does not necessarily create Incomplete Declaration unless the system treats it as usable.

## Deterministic Test

Given a declared structural element, all required attributes and dependent declarations should be present.

Ask:

1. What element has been declared?
2. What attributes or dependencies are required for that element to function?
3. Which required parts are missing?
4. Does any downstream system treat the incomplete element as usable?
5. Is there a declared fallback for missing attributes?

If the element is declared and required attributes or dependencies are missing, Incomplete Declaration exists.

## Common Contexts

Incomplete Declaration commonly appears in:

- Schemas
- API contracts
- Tool manifests
- Agent action definitions
- Policy rules
- Permission models
- Workflow states
- Evaluation rubrics
- Content metadata
- Routing tables
- Configuration files
- Data models
- Form definitions
- Validation pipelines

In AI systems, it often appears when a model, agent, tool, or workflow step is declared before its required constraints, inputs, outputs, ownership, or failure handling are fully specified.

## Distinguish From

### Missing Authority

Missing Authority occurs when an active structural region has no declared governing authority.

Incomplete Declaration can include missing ownership or authority fields, but it is broader. It concerns any required attribute or dependent declaration that is absent.

### Constraints Underspecified

Constraints Underspecified occurs when constraints exist but are too vague, weak, or incomplete to control behavior.

Incomplete Declaration occurs when required fields or dependencies are missing from the declaration itself.

### Interface Mismatch

Interface Mismatch occurs when two connected surfaces disagree about expected shape, contract, or behavior.

Incomplete Declaration can cause an interface mismatch, but it specifically names the missing required information inside a declaration.

### Schema Breakage

Schema Breakage occurs when a schema no longer supports the structure or data it is supposed to validate.

Incomplete Declaration may appear inside a schema, but it does not require schema failure. It only requires a declared element missing required parts.

## Related Lenses

Primary Lenses:

- Constraint Sufficiency Lens
- Interface Contract Lens

Secondary Lenses:

- Invariant Lens
- Reconciliation Lens

Use the Constraint Sufficiency Lens to inspect whether the declaration has enough constraints to control expected behavior.

Use the Interface Contract Lens to inspect whether the declaration satisfies the contract expected by connected components.

Use the Invariant Lens when required attributes must remain present across states or transitions.

Use the Reconciliation Lens when incomplete declarations must be resolved into a coherent declared state.

## Structural Limits

Incomplete Declaration does not evaluate whether the provided attributes are correct.

It does not decide what the missing values should be.

It only identifies that a declared structural element is missing required attributes or dependent declarations.

A complete declaration may still be wrong, inconsistent, or invalid for other reasons.

## Workbench Notes

This Pattern is useful when something is “present but not usable.”

The key Workbench move is to separate three cases:

1. Nothing was declared.
2. Something was declared but required parts are missing.
3. Something was fully declared but declared incorrectly.

Incomplete Declaration names the second case.