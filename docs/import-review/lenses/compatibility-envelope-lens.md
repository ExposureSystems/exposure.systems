---
layer: lens
slug: compatibility-envelope-lens
title: Compatibility Envelope Lens
code: LEN-0130
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Determines whether structure fits within declared runtime, platform, version, or support constraints.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/compatibility-envelope-lens.md
search_intents:
  - compatibility envelope
  - compatibility constraints
  - runtime support
  - platform compatibility
  - unsupported structure
related_patterns:
  primary:
    - compatibility-violation
  secondary: []
---

# Compatibility Envelope Lens

## Definition

Compatibility Envelope Lens determines whether structure fits within declared runtime, platform, version, or support constraints.

It is used when the main question is whether an observed graph, object, behavior, or integration remains inside the compatibility boundaries the system declares.

## Use This Lens When

Use this Lens when structure may be unsupported, out of bounds, or incompatible with a declared environment, runtime, version, platform, consumer, or support rule.

Common triggers include:

- A structure runs outside a declared runtime or platform constraint.
- A version, schema, model, tool, or consumer falls outside supported bounds.
- A system emits output that a downstream consumer does not support.
- A migration or rollout creates compatibility uncertainty.
- A feature works in one environment but not another.

## Input Requirements

- Observed structural graph
- Declared compatibility constraints
- Explicit compatibility definitions

The Lens needs declared compatibility rules. Without them, it cannot determine whether the observed structure is unsupported or simply undefined.

## Structural Transform

Input:

- Structural graph
- Declared compatibility constraints

Operation:

- Compare structural properties against compatibility rules
- Identify properties outside declared compatibility bounds
- Identify unsupported regions, versions, environments, or consumers

Output:

- Compatibility classification
- Violation regions, if present
- Compatibility rule that was exceeded or violated

## Output / Finding Shape

This Lens should produce:

- the compatibility envelope being applied
- the observed structure or property being checked
- the declared bound or support rule
- whether the structure fits inside the envelope
- the violation region if incompatibility is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where compatibility fit is the strongest detection mechanism.

Current primary Pattern matches:

- Compatibility Violation

## Distinguish From

### Interface Contract Lens

Interface Contract Lens checks conformance to a declared interface contract.

Compatibility Envelope Lens checks whether the structure remains within declared support or compatibility bounds.

### Boundary Compliance Lens

Boundary Compliance Lens checks whether structure follows declared boundary posture.

Compatibility Envelope Lens checks runtime, platform, version, or support compatibility.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Compatibility Envelope Lens checks whether observed structure complies with compatibility constraints that already exist.

## Structural Limits

Compatibility Envelope Lens evaluates compatibility only.

It does not evaluate whether the compatibility constraints are correct, fair, complete, or well-designed.

It does not decide what should be supported.

## Workbench Notes

Compatibility Envelope Lens is useful when the fastest question is:

“Is this structure inside the supported envelope?”

If the observed structure is outside declared compatibility constraints, the Lens surfaces the compatibility failure.