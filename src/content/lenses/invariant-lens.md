---
layer: lens
ontology_slug: invariant-lens
title: Invariant Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Verifies that declared invariants are structurally enforceable and not
  contradicted by observed structure.
code: LEN-0210
---
# Invariant Lens

## Definition

Invariant Lens verifies that declared invariants are structurally enforceable and not contradicted by observed structure.

It is used when the main question is whether a condition that should remain true actually holds across relevant nodes, edges, states, transitions, or outputs.

## Use This Lens When

Use this Lens when a system declares a required condition, threshold, rule, schema condition, or state property that should not be violated.

Common triggers include:

- A declared invariant appears false in an observed state.
- A threshold or boundary condition is crossed.
- A schema or output violates a condition that should always hold.
- A workflow reaches a state that should be impossible.
- A repeated execution violates a condition expected to remain true.
- A diagnostic needs to verify whether a required structural property still holds.

## Input Requirements

- Observed structural graph
- Declared invariants
- Explicit invariant declarations

The Lens needs declared invariants. Without them, it cannot distinguish invariant violation from ordinary structural variation.

## Structural Transform

Input:

- Structural graph
- Declared invariants

Operation:

- Evaluate invariant conditions across nodes and edges
- Check whether required conditions hold across relevant states or transitions
- Identify violations or contradiction regions

Output:

- Invariant compliance classification
- Violation regions, if present
- Declared invariant that was violated

## Output / Finding Shape

This Lens should produce:

- the invariant being evaluated
- the structural region or transition governed by it
- the observed condition
- whether the invariant holds or breaks
- the violation region if failure is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where invariant compliance is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Invariant Breakage
- Threshold Breach
- Schema Breakage

Current secondary Pattern matches:

- Authority Collision
- Authority Merge Conflict
- Authority-State Mismatch
- Non-Deterministic Execution
- Convergence Failure
- Constraints Underspecified

## Distinguish From

### Conflict Lens

Conflict Lens detects mutually incompatible constraints or claims.

Invariant Lens checks whether a declared condition that should remain true is actually satisfied.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Invariant Lens checks whether a declared invariant holds in the observed structure.

### Interface Contract Lens

Interface Contract Lens checks conformance to a declared interface.

Invariant Lens checks compliance with declared conditions that must remain true, whether or not they are interface-specific.

## Structural Limits

Invariant Lens evaluates invariant compliance only.

It does not resolve constraint conflicts.

It does not decide whether the invariant itself is correct, legitimate, or well-designed.

## Workbench Notes

Invariant Lens is useful when the fastest question is:

“Was this condition supposed to always hold?”

If an observed state contradicts a declared invariant, the Lens surfaces the invariant violation.
