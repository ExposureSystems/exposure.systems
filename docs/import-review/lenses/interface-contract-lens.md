---
layer: lens
slug: interface-contract-lens
title: Interface Contract Lens
code: LEN-0200
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Compares declared interface structure to observed runtime structure to detect contract deviations.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/interface-contract-lens.md
search_intents:
  - interface contract
  - contract deviation
  - runtime structure mismatch
  - interface conformance
  - declared interface mismatch
related_patterns:
  primary:
    - incomplete-declaration
    - interface-mismatch
    - schema-breakage
  secondary:
    - invariant-breakage
    - redundant-declaration
---

# Interface Contract Lens

## Definition

Interface Contract Lens compares declared interface structure to observed runtime structure to detect contract deviations.

It is used when the main question is whether an observed interface, payload, tool call, output, or exchange conforms to the interface contract that claims to govern it.

## Use This Lens When

Use this Lens when a system appears integrated on paper but fails at the point of exchange.

Common triggers include:

- Runtime structure differs from the declared interface.
- A field, input, output, or behavior does not match the contract.
- A tool, API, model, agent, or workflow returns an unexpected shape.
- A declaration is incomplete for the interface being used.
- A schema or contract violation appears at a boundary between components.
- A downstream consumer relies on a contract that the observed structure does not satisfy.

## Input Requirements

- Declared interface specification
- Observed structural graph
- Explicit interface definitions

The Lens needs a declared interface. Without one, it cannot distinguish interface deviation from undefined exchange behavior.

## Structural Transform

Input:

- Declared interface specification
- Observed structural graph

Operation:

- Compare declared interface to observed structure
- Identify mismatched fields, shapes, types, behaviors, or exchange rules
- Identify where runtime structure violates interface definitions

Output:

- Contract compliance classification
- Deviation regions, if present
- The declared interface rule that was violated

## Output / Finding Shape

This Lens should produce:

- the interface or contract being evaluated
- the observed runtime structure
- the contract requirement that applies
- where the observed structure deviates
- whether the deviation is missing, extra, renamed, mistyped, incompatible, or behaviorally different

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where interface conformance is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Incomplete Declaration
- Interface Mismatch
- Schema Breakage

Current secondary Pattern matches:

- Invariant Breakage
- Redundant Declaration

## Distinguish From

### Compatibility Envelope Lens

Compatibility Envelope Lens checks whether structure remains inside declared support or compatibility bounds.

Interface Contract Lens checks whether observed structure conforms to a declared interface contract.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Interface Contract Lens checks whether an observed interface matches constraints already declared in the contract.

### Normalization Lens

Normalization Lens organizes structure into a consistent canonical form.

Interface Contract Lens checks conformance between declared and observed interface structure.

## Structural Limits

Interface Contract Lens evaluates interface conformance only.

It does not evaluate whether the interface is well-designed, sufficient, or correct.

It does not decide which side of the interface should change.

## Workbench Notes

Interface Contract Lens is useful when the fastest question is:

“Does the observed exchange match the declared contract?”

If runtime structure violates the declared interface, the Lens surfaces the contract deviation.