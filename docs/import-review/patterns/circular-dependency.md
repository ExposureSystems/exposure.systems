---
layer: pattern
slug: circular-dependency
title: Circular Dependency
code: PAT-0250
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where two or more elements depend on each other in a closed loop without an independent base condition or declared resolution mechanism.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/circular-dependency.md
search_intents:
  - circular dependency
  - dependency loop
  - unresolved cycle
  - no base condition
  - cyclic dependency
related_lenses:
  primary:
    - determinism-lens
    - reconciliation-lens
  secondary:
    - invariant-lens
    - propagation-lens
---

# Circular Dependency

## Definition

Circular Dependency exists when two or more structural elements depend on each other in a closed loop without an independent base condition or declared resolution mechanism.

The structure does not fail because elements are connected. It fails because dependency resolution cannot complete without returning to a prior unresolved dependency.

## Visible Surface

Users may notice Circular Dependency when a system cannot determine which step, state, rule, authority, or object should resolve first.

Common visible signs include:

- A workflow step waits for another step that waits for the first step.
- A configuration requires a value that depends on the configuration itself.
- Two services, tools, or agents each require the other to initialize first.
- A policy decision depends on an approval that depends on the policy decision.
- A schema, type, or object reference loops without a base case.
- A routing or escalation path cycles back to its starting point.
- A system appears stuck, repeatedly retrying, or unable to establish initial state.

The visible problem is often described as “this depends on itself” or “nothing can resolve first.”

## Structural Signature

Circular Dependency usually contains these elements:

- Two or more structural nodes, states, rules, authorities, objects, tools, or workflow steps
- Dependency edges connecting them
- A closed dependency loop
- No independent base condition
- No declared cycle breaker, precedence rule, lazy resolution rule, fallback, or external anchor
- A required operation that cannot resolve while the loop remains unresolved

The dependency may be technical, procedural, semantic, authority-based, configuration-based, or workflow-based.

## Deterministic Test

Given dependency relationships, no cycle should exist without a declared resolution mechanism.

Ask:

1. What elements depend on each other?
2. What dependency loop exists?
3. What operation requires the dependencies to resolve?
4. Is there an independent base condition or external anchor?
5. Is there a declared cycle breaker, precedence rule, fallback, or resolution mechanism?

If a closed dependency loop exists and no resolution mechanism is declared, Circular Dependency exists.

## Common Contexts

Circular Dependency commonly appears in:

- Workflow orchestration
- Agent planning
- Tool initialization
- Service dependencies
- Configuration loading
- Permission and authority rules
- Policy evaluation
- Schema references
- Type systems
- Data pipelines
- Build systems
- Evaluation harnesses
- Human approval loops
- Escalation paths
- State machines

In AI systems, it often appears when an agent needs a tool result to choose a tool, a tool needs agent state to initialize, or a policy decision depends on an output that depends on the policy decision.

## Distinguish From

### Reference Instability

Reference Instability occurs when references or identifiers change across equivalent evaluations.

Circular Dependency may involve references, but it specifically names a closed unresolved dependency loop.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when equivalent inputs and constraints produce divergent outputs.

Circular Dependency may cause unstable execution, but it specifically concerns dependency resolution failure.

### Missing Authority

Missing Authority occurs when an active region has no declared governing authority.

Circular Dependency can involve authority, but the key issue is not absence of authority; it is unresolved mutual dependency.

### Reconciliation Failure

Reconciliation Failure occurs when differences cannot be resolved into a coherent state.

Circular Dependency may require reconciliation, but the Pattern specifically identifies closed dependency loops without a resolution anchor.

## Related Lenses

Primary Lenses:

- Determinism Lens
- Reconciliation Lens

Secondary Lenses:

- Invariant Lens
- Propagation Lens

Use the Determinism Lens to inspect whether dependency resolution produces a stable result.

Use the Reconciliation Lens to identify whether a cycle breaker, precedence rule, or external anchor can resolve the loop.

Use the Invariant Lens when a required condition must hold across dependency resolution.

Use the Propagation Lens when unresolved cycles spread effects through downstream structures.

## Structural Limits

Circular Dependency does not evaluate whether the dependencies are legitimate, useful, or intended.

It does not say all cycles are invalid.

It only identifies cycles that lack an independent base condition or declared resolution mechanism.

A declared cycle breaker, precedence rule, lazy evaluation rule, fallback, or external anchor may resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system cannot establish an initial condition, resolve a workflow, or determine execution order because each element depends on another unresolved element.

The key Workbench move is to separate three questions:

1. What dependency loop exists?
2. What operation needs the loop to resolve?
3. What independent anchor or cycle breaker exists?

If no anchor or cycle breaker exists, the issue is Circular Dependency.