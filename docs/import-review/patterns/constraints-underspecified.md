---
layer: pattern
slug: constraints-underspecified
title: Constraints Underspecified
code: PAT-0170
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where declared constraints are insufficient to eliminate ambiguity or multiple admissible states.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/constraints-underspecified.md
search_intents:
  - underspecified constraints
  - weak constraints
  - ambiguous valid states
  - multiple admissible states
  - not enough constraints
related_lenses:
  primary:
    - constraint-sufficiency-lens
    - determinism-lens
  secondary:
    - invariant-lens
    - reconciliation-lens
---

# Constraints Underspecified

## Definition

Constraints Underspecified exists when declared constraints are not sufficient to eliminate structural ambiguity or multiple admissible states.

The structure does not fail because no constraints exist. It fails because the constraints that do exist leave too much freedom for the system to resolve the structure deterministically, consistently, or safely.

## Visible Surface

Users may notice Constraints Underspecified when a system accepts multiple different outcomes as valid even though only one stable interpretation or behavior is expected.

Common visible signs include:

- A model, agent, tool, or workflow can choose between multiple valid paths.
- A prompt or policy leaves important behavior open-ended.
- A configuration allows several incompatible states.
- A validator accepts outputs that should not all be acceptable.
- Different runs produce different structures while still satisfying the stated rules.
- A human reviewer cannot determine which interpretation is intended.
- A downstream system receives structurally different outputs that all appear allowed.

The visible problem is often described as “the rules allow too many things.”

## Structural Signature

Constraints Underspecified usually contains these elements:

- A structural graph, state space, workflow, interface, policy, prompt, or schema
- Declared constraints that are intended to control possible outcomes
- Multiple admissible states or interpretations remaining after constraints are applied
- No declared tie-breaker, priority rule, invariant, or narrowing condition
- Downstream behavior depending on which admissible state is selected

The important signal is not that the system has options. The signal is that the options remain structurally valid when the system requires a narrower result.

## Deterministic Test

Given declared constraints, the allowed structural state space should be narrowed enough for the required purpose.

Ask:

1. What structural state, output, path, or interpretation is being constrained?
2. What constraints are declared?
3. What states remain admissible after applying those constraints?
4. Are multiple remaining states incompatible for the required purpose?
5. Is there a declared tie-breaker, priority rule, or narrowing condition?

If multiple incompatible states remain valid and no narrowing rule resolves them, Constraints Underspecified exists.

## Common Contexts

Constraints Underspecified commonly appears in:

- Prompt instructions
- Policy rules
- Output schemas
- Tool call selection
- Agent planning
- Routing logic
- Evaluation rubrics
- Human review criteria
- Permission rules
- Configuration files
- Workflow branching
- Model selection
- Safety gates
- Data validation
- Interface contracts

In AI systems, it often appears when instructions tell the system what to avoid or prefer but do not sufficiently define the allowed structural outcome.

## Distinguish From

### Incomplete Declaration

Incomplete Declaration occurs when required attributes or dependent declarations are missing.

Constraints Underspecified may happen even when all required fields are present. The issue is that the constraints are too weak or broad to control the state space.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when repeated execution can produce different outcomes under the same declared conditions.

Constraints Underspecified can cause non-determinism, but it specifically names the weak constraint structure that allows multiple admissible outcomes.

### Schema Breakage

Schema Breakage occurs when an observed structure violates a declared schema.

Constraints Underspecified can occur even when every output conforms to schema. The problem is that the schema or constraints allow too many structurally different valid outputs.

### Unbounded Scope

Unbounded Scope occurs when a region or rule lacks a clear boundary.

Constraints Underspecified may include loose boundaries, but it specifically concerns insufficient constraints over admissible states.

## Related Lenses

Primary Lenses:

- Constraint Sufficiency Lens
- Determinism Lens

Secondary Lenses:

- Invariant Lens
- Reconciliation Lens

Use the Constraint Sufficiency Lens to inspect whether declared constraints are strong enough for the intended structural purpose.

Use the Determinism Lens when multiple valid states create unstable or variable execution.

Use the Invariant Lens when some required condition should remain true across all admissible states.

Use the Reconciliation Lens when underspecified states need to be resolved into a coherent declared rule.

## Structural Limits

Constraints Underspecified does not evaluate whether the intended constraints are correct, ethical, or desirable.

It does not require that only one possible state exist in every situation.

It only identifies that the declared constraints leave too many admissible states for the required structural purpose.

Additional constraints, priority rules, tie-breakers, or invariants may resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system is technically following the stated rules but still behaves inconsistently or ambiguously.

The key Workbench move is to separate three questions:

1. What state space is allowed by the current constraints?
2. How many structurally different states remain valid?
3. Does the task require a narrower state space?

If multiple incompatible states remain admissible, the problem is Constraints Underspecified.