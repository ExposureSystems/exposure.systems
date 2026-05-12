---
layer: lens
slug: isolation-boundary-lens
title: Isolation Boundary Lens
code: LEN-0220
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Evaluates whether structural constraints, effects, and regions remain contained within declared boundaries.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/isolation-boundary-lens.md
search_intents:
  - isolation boundary
  - containment violation
  - boundary breach
  - declared boundaries
  - structural containment
related_patterns:
  primary:
    - boundary-leakage
    - unbounded-scope
    - cross-layer-escalation
  secondary:
    - density-spike
    - density-vacuum
    - undeclared-side-effect
---

# Isolation Boundary Lens

## Definition

Isolation Boundary Lens evaluates whether structural constraints, effects, and regions remain contained within declared boundaries.

It is used when the main question is whether a boundary actually isolates or contains the structure it claims to separate.

## Use This Lens When

Use this Lens when a system has declared boundaries and observed structure may be crossing, escaping, or failing to stay contained.

Common triggers include:

- A structural effect crosses a declared boundary.
- A region lacks clear containment.
- A tool, agent, workflow, or permission affects a region outside its boundary.
- A local event crosses into another layer or scope.
- A side effect crosses an isolation or containment boundary.
- A diagnostic needs to separate “boundary missing” from “boundary violated.”

## Input Requirements

- Observed structural graph
- Declared boundary definitions
- Explicit boundary declarations

The Lens needs declared boundaries. Without a boundary declaration, it cannot distinguish containment failure from undefined scope.

## Structural Transform

Input:

- Structural graph
- Declared boundary definitions

Operation:

- Compare structural regions against boundary declarations
- Identify containment violations
- Identify regions where effects cross declared isolation lines

Output:

- Boundary compliance classification
- Boundary breach regions, if present
- Boundary declaration that was violated

## Output / Finding Shape

This Lens should produce:

- the declared boundary being evaluated
- the structural region or effect being inspected
- whether the structure remained contained
- where the boundary was crossed or failed
- whether crossing was authorized or unauthorized

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where containment or isolation is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Boundary Leakage
- Unbounded Scope
- Cross-Layer Escalation

Current secondary Pattern matches:

- Density Spike
- Density Vacuum
- Undeclared Side Effect

## Distinguish From

### Boundary Compliance Lens

Boundary Compliance Lens checks whether observed structure follows declared boundary posture such as allow, block, or exception.

Isolation Boundary Lens checks whether structure remains contained within declared boundaries.

### Overreach Lens

Overreach Lens checks whether action exceeds declared scope or authority.

Isolation Boundary Lens checks whether boundaries contain effects, regions, or constraints.

### Propagation Lens

Propagation Lens traces how effects move across stages or boundaries.

Isolation Boundary Lens checks whether that movement violates containment.

## Structural Limits

Isolation Boundary Lens evaluates containment only.

It does not evaluate whether the boundary itself is correct, sufficient, or legitimate.

It does not decide what the boundary should be.

## Workbench Notes

Isolation Boundary Lens is useful when the fastest question is:

“Did this stay inside the boundary?”

If structure crosses a declared boundary without authorization, the Lens surfaces the containment violation.