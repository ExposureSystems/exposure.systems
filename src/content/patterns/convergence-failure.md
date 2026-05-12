---
layer: pattern
ontology_slug: convergence-failure
title: Convergence Failure
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where sequential or parallel states fail to resolve
  into an equivalent or coherent structure under shared authority and
  constraints.
code: PAT-0320
---
# Convergence Failure

## Definition

Convergence Failure exists when sequential or parallel structural states fail to resolve into an equivalent or coherent structure under shared authority and constraints.

The structure does not fail because multiple states exist. It fails when those states are expected to align, merge, settle, or reconcile, but persistent divergence remains.

## Visible Surface

Users may notice Convergence Failure when a system repeatedly attempts to resolve, compare, merge, review, or reconcile states but never reaches a stable outcome.

Common visible signs include:

- Parallel reviews never agree on a final classification.
- Repeated model, agent, or tool runs do not settle into equivalent structure.
- A merge process leaves unresolved differences.
- A workflow loops through review without producing a final state.
- Multiple sources update toward a common target but remain inconsistent.
- A reconciliation step produces new divergence instead of reducing it.
- A diagnostic cannot determine which structural state is authoritative.

The visible problem is often described as “this never settles.”

## Structural Signature

Convergence Failure usually contains these elements:

- Multiple structural states, outputs, versions, reviews, routes, or interpretations
- Shared governing rules, authority, objective, or constraints
- An expectation that the states should converge
- Persistent divergence after comparison, iteration, merge, or reconciliation
- No declared convergence rule, stopping condition, tie-breaker, or final authority that resolves the difference

The states may be sequential, parallel, generated, human-reviewed, versioned, distributed, or produced by separate tools.

## Deterministic Test

Given shared authority and constraints, structural states expected to align should converge to an equivalent or coherent structure.

Ask:

1. What states are expected to converge?
2. What shared authority, rule, or constraint governs them?
3. What convergence condition is expected?
4. What divergence remains?
5. Is there a declared final authority, tie-breaker, or stopping rule?

If states remain divergent where convergence is required, Convergence Failure exists.

## Common Contexts

Convergence Failure commonly appears in:

- Multi-review workflows
- Model comparison
- Agent planning
- Reconciliation systems
- Merge workflows
- Evaluation pipelines
- Human moderation
- Policy interpretation
- Data synchronization
- Distributed state
- Version resolution
- Search and retrieval aggregation
- Governance review
- Audit comparison
- Classification systems

In AI systems, it often appears when repeated or parallel outputs are expected to settle into a stable diagnosis, classification, plan, or decision but continue to diverge.

## Distinguish From

### Divergent Outputs

Divergent Outputs identifies non-equivalent outputs from comparable evaluations.

Convergence Failure adds the expectation and failure of resolution: the system should bring divergent states into alignment but does not.

### Reconciliation Failure

Reconciliation Failure occurs when differences cannot be resolved into a coherent state.

Convergence Failure is focused on the observed failure of states to settle or align under shared authority and constraints.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when equivalent inputs and constraints produce divergent outputs across executions.

Convergence Failure can result from non-determinism, but it specifically names failure to resolve divergence into a stable state.

### Contract Drift

Contract Drift occurs when a contract changes but connected structures do not update in sync.

Convergence Failure may appear during contract migration, but it concerns unresolved alignment across states.

## Related Lenses

Primary Lenses:

- Reconciliation Lens
- Convergence Lens

Secondary Lenses:

- Invariant Lens
- Determinism Lens

Use the Reconciliation Lens to inspect whether divergent states can be resolved into one coherent state.

Use the Convergence Lens to inspect whether repeated or parallel states move toward alignment or remain divergent.

Use the Invariant Lens when some required property should hold across all converged states.

Use the Determinism Lens when failure to converge may come from repeated-run variability.

## Structural Limits

Convergence Failure does not evaluate whether the target convergence state is correct, ethical, or desirable.

It does not require convergence where the system declares plural outputs or unresolved states as acceptable.

It only identifies failure to converge where convergence is expected under shared authority and constraints.

A declared final authority, merge rule, stopping condition, or accepted-divergence policy may resolve the Pattern.

## Workbench Notes

This Pattern is useful when multiple structural states keep disagreeing after they should have settled.

The key Workbench move is to separate three questions:

1. What states are expected to converge?
2. What rule defines convergence?
3. Why does divergence persist?

If persistent divergence remains under shared authority and constraints, the issue is Convergence Failure.
