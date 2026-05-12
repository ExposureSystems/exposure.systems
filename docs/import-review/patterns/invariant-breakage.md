---
layer: pattern
slug: invariant-breakage
title: Invariant Breakage
code: PAT-0330
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an observed state violates a declared invariant that is supposed to remain true.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/invariant-breakage.md
search_intents:
  - invariant breakage
  - invariant violation
  - required condition failed
  - structural rule violated
  - invariant does not hold
related_lenses:
  primary:
    - invariant-lens
    - determinism-lens
  secondary:
    - reconciliation-lens
    - constraint-sufficiency-lens
---

# Invariant Breakage

## Definition

Invariant Breakage exists when an observed structural state violates a declared invariant that is supposed to remain true.

The structure does not fail because a state changed. It fails because a condition declared as required across relevant states, transitions, or executions no longer holds.

## Visible Surface

Users may notice Invariant Breakage when something the system says should always be true is false in a specific state or run.

Common visible signs include:

- A required relationship disappears after a transition.
- A permission, policy, or routing rule no longer holds in a later state.
- A schema-valid object violates a required structural condition.
- A workflow reaches a state that should be impossible.
- A model, agent, or tool path breaks a stated guarantee.
- A generated output violates a rule that was supposed to remain true.
- A diagnostic finds a state that contradicts a declared invariant.

The visible problem is often described as “this condition was supposed to always hold.”

## Structural Signature

Invariant Breakage usually contains these elements:

- A declared invariant rule
- A structural state, graph, output, route, decision, object, or transition governed by that invariant
- An observed contradiction of the invariant
- No declared exception, migration, or relaxation permitting the contradiction
- A system path that treats the violating state as active or relevant

The invariant may involve identity, authority, schema compliance, permissions, boundaries, relationships, state transitions, output structure, or required coverage.

## Deterministic Test

Given declared invariants, observed structural state should satisfy all invariant conditions unless an exception is declared.

Ask:

1. What invariant is declared?
2. What state or transition is governed by it?
3. What observed condition contradicts the invariant?
4. Is there a declared exception, migration rule, or version boundary?
5. Does the violating state remain active or consequential?

If an active observed state violates a declared invariant, Invariant Breakage exists.

## Common Contexts

Invariant Breakage commonly appears in:

- State machines
- Workflow transitions
- Permission systems
- Schema validation
- Agent planning
- Tool execution
- Model output constraints
- Policy enforcement
- Evaluation rubrics
- Routing systems
- Identity systems
- Data pipelines
- Audit logs
- Multi-tenant boundaries
- Governance rules

In AI systems, it often appears when generated outputs, tool calls, agent state, or policy decisions violate conditions that were declared as always required.

## Distinguish From

### Schema Breakage

Schema Breakage occurs when an instance violates a declared schema.

Invariant Breakage is broader. It can involve schema rules, but it also covers non-schema conditions that must remain true.

### Constraints Underspecified

Constraints Underspecified occurs when constraints allow too many admissible states.

Invariant Breakage occurs when a declared required condition is actually violated.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when equivalent inputs produce divergent outputs.

Non-determinism may lead to invariant breakage, but Invariant Breakage specifically names violation of a required invariant.

### Authority-State Mismatch

Authority-State Mismatch occurs when observed structural state does not align with declared authority state.

Authority-state alignment may be an invariant, but Invariant Breakage applies to any declared invariant.

## Related Lenses

Primary Lenses:

- Invariant Lens
- Determinism Lens

Secondary Lenses:

- Reconciliation Lens
- Constraint Sufficiency Lens

Use the Invariant Lens to identify the declared invariant and inspect whether it holds across relevant states.

Use the Determinism Lens when invariant violations appear inconsistently across repeated executions.

Use the Reconciliation Lens when a violating state must be resolved back into coherent structure.

Use the Constraint Sufficiency Lens when weak constraints allow invariant-violating states.

## Structural Limits

Invariant Breakage does not evaluate whether the invariant itself is correct, legitimate, or desirable.

It does not decide what the invariant should be.

It only identifies that a declared invariant is violated by an observed structural state.

A declared exception, invariant revision, migration rule, or corrected state may resolve the Pattern.

## Workbench Notes

This Pattern is useful when the system reaches a state that contradicts one of its stated guarantees.

The key Workbench move is to separate three questions:

1. What invariant is supposed to hold?
2. What observed state violates it?
3. Is the violation explicitly allowed?

If the invariant is declared and the active state contradicts it, the issue is Invariant Breakage.