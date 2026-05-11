---
layer: lens
slug: conflict-lens
title: Conflict Lens
code: LEN-0150
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Detects mutually incompatible constraints, claims, states, or declarations that cannot be simultaneously satisfied.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/conflict-lens.md
search_intents:
  - conflict lens
  - incompatible constraints
  - contradiction detection
  - conflicting claims
  - mutually incompatible rules
related_patterns:
  primary:
    - authority-collision
    - authority-merge-conflict
    - invariant-breakage
    - redundant-declaration
    - circular-dependency
  secondary:
    - missing-authority
    - authority-shadowing
    - authority-state-mismatch
    - schema-breakage
---

# Conflict Lens

## Definition

Conflict Lens detects mutually incompatible constraints, claims, states, or declarations that cannot be simultaneously satisfied.

It is used when the main question is whether two or more structural requirements are in contradiction.

## Use This Lens When

Use this Lens when a system appears to contain competing rules, incompatible authority claims, contradictory constraints, or states that cannot all be true at the same time.

Common triggers include:

- Two rules require incompatible outcomes.
- Multiple authorities claim the same region without resolution.
- A declared invariant conflicts with observed structure.
- A dependency loop creates unresolved contradiction.
- A schema, policy, or workflow contains incompatible requirements.
- A reviewer cannot satisfy all declared constraints at once.

## Input Requirements

- Observed structural graph
- Declared constraints, claims, states, rules, or authority declarations
- A way to evaluate whether those declarations can be satisfied together

The Lens needs explicit declarations. Without declared constraints or claims, it cannot distinguish true conflict from missing or unclear structure.

## Structural Transform

Input:

- Structural graph
- Declared constraints

Operation:

- Evaluate compatibility of constraint sets
- Compare claims, states, and rules for contradiction
- Identify regions where simultaneous satisfaction fails

Output:

- Conflict classification
- Contradictory regions, if present
- The incompatible declarations involved

## Output / Finding Shape

This Lens should produce:

- the conflicting declarations or states
- the structural region where conflict appears
- why the declarations cannot be simultaneously satisfied
- whether the conflict is authority-based, constraint-based, invariant-based, dependency-based, or schema-based

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where conflict detection is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Authority Collision
- Authority Merge Conflict
- Invariant Breakage
- Redundant Declaration
- Circular Dependency

Current secondary Pattern matches:

- Missing Authority
- Authority Shadowing
- Authority-State Mismatch
- Schema Breakage

## Distinguish From

### Reconciliation Lens

Reconciliation Lens focuses on resolving incompatible states into a coherent result.

Conflict Lens identifies that incompatibility exists. It does not decide the resolution.

### Authority Overlay Lens

Authority Overlay Lens maps authority claims onto structure.

Conflict Lens detects incompatibility between claims, whether or not those claims are authority-specific.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Conflict Lens checks whether declared constraints contradict each other.

## Structural Limits

Conflict Lens evaluates compatibility only.

It does not resolve conflicts.

It does not decide which constraint, claim, authority, or state should win.

## Workbench Notes

Conflict Lens is useful when the fastest question is:

“Can these declarations all be true at once?”

If the answer is no, the Lens surfaces the contradiction and the region where simultaneous satisfaction fails.