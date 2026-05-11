---
layer: lens
slug: convergence-lens
title: Convergence Lens
code: LEN-0170
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Compares parallel structural systems to determine whether they align under shared authority.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/convergence-lens.md
search_intents:
  - convergence lens
  - structural convergence
  - compare parallel systems
  - divergent regions
  - cross system equivalence
related_patterns:
  primary:
    - divergent-outputs
    - convergence-failure
    - asymmetric-structure
    - contract-drift
  secondary:
    - non-deterministic-execution
    - authority-state-mismatch
---

# Convergence Lens

## Definition

Convergence Lens compares parallel structural systems, outputs, or states to determine whether they align under shared authority.

It is used when the main question is whether comparable structures produce equivalent graphs, decisions, routes, or classifications.

## Use This Lens When

Use this Lens when two or more systems, runs, reviewers, tools, models, or workflow paths should align but appear to diverge.

Common triggers include:

- Parallel evaluations produce different outputs.
- Comparable cases are treated differently.
- A contract changes and connected structures do not align.
- Multiple review paths fail to settle into a shared result.
- A diagnostic needs to compare structural equivalence across systems.
- The system must decide whether divergence is acceptable or unresolved.

## Input Requirements

- Two or more structural graphs, outputs, states, or systems
- Comparable structural scope
- Shared authority definitions or shared governing context

The Lens needs comparable scope. Without comparable scope, difference alone does not prove convergence failure.

## Structural Transform

Input:

- Two or more structural graphs
- Shared authority context

Operation:

- Compare structural graphs across systems
- Identify divergent regions
- Determine whether the compared structures are equivalent for the required purpose

Output:

- Convergence classification
- Divergent regions, if present
- The shared authority or comparison basis used

## Output / Finding Shape

This Lens should produce:

- the structures being compared
- the shared authority or scope that makes comparison valid
- the regions that align
- the regions that diverge
- whether divergence remains unresolved or acceptable

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where convergence comparison is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Divergent Outputs
- Convergence Failure
- Asymmetric Structure
- Contract Drift

Current secondary Pattern matches:

- Non-Deterministic Execution
- Authority-State Mismatch

## Distinguish From

### Determinism Lens

Determinism Lens evaluates repeated execution under equivalent inputs and constraints.

Convergence Lens compares parallel or comparable structures under shared authority.

### Reconciliation Lens

Reconciliation Lens focuses on resolving divergent states into a coherent result.

Convergence Lens identifies whether structures align or diverge before or during resolution.

### Variance Entropy Lens

Variance Entropy Lens inspects spread or uncontrolled variation.

Convergence Lens determines whether comparable structures align enough for the required purpose.

## Structural Limits

Convergence Lens evaluates cross-system or cross-state equivalence only.

It does not evaluate internal determinism by itself.

It does not decide which divergent structure is correct.

## Workbench Notes

Convergence Lens is useful when the fastest question is:

“Do these comparable structures line up?”

If they do not align under shared authority and scope, the Lens surfaces the divergent regions.