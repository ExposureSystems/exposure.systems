---
layer: lens
ontology_slug: constraint-sufficiency-lens
title: Constraint Sufficiency Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Evaluates whether declared constraints are sufficient to eliminate structural
  degrees of freedom.
code: LEN-0160
---
# Constraint Sufficiency Lens

## Definition

Constraint Sufficiency Lens evaluates whether declared constraints are sufficient to eliminate structural degrees of freedom.

It is used when the main question is whether the system has enough declared constraint coverage to control the structure for its intended purpose.

## Use This Lens When

Use this Lens when a system appears under-constrained, ambiguous, too open-ended, or able to enter multiple incompatible valid states.

Common triggers include:

- Multiple outcomes remain valid under the stated rules.
- A structural region is not governed by constraints.
- A declaration exists but does not constrain enough behavior.
- A boundary, schema, or workflow allows too much freedom.
- A system can expand, propagate, or act because no constraint blocks it.
- A diagnostic needs to separate “wrong constraint” from “not enough constraint.”

## Input Requirements

- Observed structural graph
- Declared constraints
- A way to determine what regions or states those constraints are expected to govern

The Lens needs explicit constraint declarations. Without declared constraints, the finding may be absence of constraints rather than insufficiency of constraints.

## Structural Transform

Input:

- Structural graph
- Declared constraints

Operation:

- Evaluate constraint coverage
- Identify unconstrained or under-constrained regions
- Identify remaining degrees of freedom after constraints are applied

Output:

- Sufficiency classification
- Unconstrained or under-constrained regions, if present
- The declared constraints that failed to narrow the structure enough

## Output / Finding Shape

This Lens should produce:

- the structure or state space being constrained
- the declared constraints applied to it
- the remaining degrees of freedom
- the region or behavior that remains uncontrolled
- whether constraint coverage is sufficient or insufficient for the stated purpose

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where constraint sufficiency is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Constraints Underspecified
- Incomplete Declaration
- Unbounded Scope

Current secondary Pattern matches:

- Boundary Leakage
- Schema Breakage
- Density Vacuum
- Overreach
- Propagation Amplification

## Distinguish From

### Absence Lens

Absence Lens detects missing required structure.

Constraint Sufficiency Lens checks whether declared constraints are enough after the structure exists.

### Conflict Lens

Conflict Lens detects incompatible constraints.

Constraint Sufficiency Lens detects weak, missing, or incomplete constraint coverage, not contradiction.

### Invariant Lens

Invariant Lens checks whether required conditions remain true.

Constraint Sufficiency Lens checks whether constraints are strong enough to make required conditions hold.

## Structural Limits

Constraint Sufficiency Lens evaluates constraint completeness only.

It does not evaluate whether the constraints are correct, ethical, useful, or well-designed.

It does not decide which additional constraints should be added unless that is part of a later design step.

## Workbench Notes

Constraint Sufficiency Lens is useful when the fastest question is:

“Do the declared constraints narrow the structure enough?”

If too many degrees of freedom remain, the Lens surfaces the under-constrained region.
