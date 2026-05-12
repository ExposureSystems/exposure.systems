---
layer: pattern
ontology_slug: non-deterministic-execution
title: Non-Deterministic Execution
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where equivalent inputs and declared constraints
  produce divergent outputs across executions.
code: PAT-0210
---
# Non-Deterministic Execution

## Definition

Non-Deterministic Execution exists when equivalent structural inputs and declared constraints produce divergent structural outputs across executions.

The structure does not fail merely because outputs are different. It fails when the inputs, declared constraints, and expected execution conditions are equivalent enough that the outputs should remain structurally equivalent, but they do not.

## Visible Surface

Users may notice Non-Deterministic Execution when the same ask, input, workflow, tool call, model path, or evaluation produces materially different outputs across repeated runs.

Common visible signs include:

- The same input produces different classifications.
- A workflow routes the same case differently across executions.
- A model or agent selects different tools without a declared reason.
- A generated structure changes shape between runs.
- A validation or evaluation result changes despite equivalent inputs.
- A reproduced diagnostic cannot produce the same structural output.
- A system alternates between acceptable and unacceptable outputs under the same declared conditions.

The visible problem is often described as “same input, different result.”

## Structural Signature

Non-Deterministic Execution usually contains these elements:

- Equivalent input graph, state, prompt, payload, case, or workflow condition
- Equivalent declared constraints
- Repeated execution or evaluation cycles
- Divergent output graphs, routes, decisions, states, or classifications
- No declared source of allowed variation explaining the divergence

The outputs do not have to be textually identical. The question is whether they remain structurally equivalent for the purpose being evaluated.

## Deterministic Test

Given equivalent structural inputs and declared constraints, outputs should be structurally equivalent unless variation is declared as allowed.

Ask:

1. What input or state is being repeated?
2. What constraints are declared for the execution?
3. Are the repeated executions equivalent for the purpose being tested?
4. What outputs were produced?
5. Are the outputs structurally equivalent?
6. Is variation declared, bounded, or expected?

If equivalent inputs and constraints produce structurally divergent outputs without declared variation bounds, Non-Deterministic Execution exists.

## Common Contexts

Non-Deterministic Execution commonly appears in:

- Model outputs
- Agent planning
- Tool selection
- Routing decisions
- Evaluation runs
- Classification workflows
- Prompt handling
- Search and retrieval
- Recommendation systems
- Human review assignment
- Rule engines
- Cache behavior
- Distributed systems
- Concurrent workflows
- A/B or feature-flag paths

In AI systems, it often appears when model variability, retrieval instability, underspecified constraints, tool ambiguity, or hidden state causes repeated executions to diverge.

## Distinguish From

### Constraints Underspecified

Constraints Underspecified occurs when declared constraints leave multiple admissible states.

Non-Deterministic Execution may result from underspecified constraints, but it specifically names divergent outputs across repeated equivalent executions.

### Reference Instability

Reference Instability occurs when identifiers, links, anchors, or references change across equivalent evaluations.

Non-Deterministic Execution is broader. It may include reference changes, but it concerns structural output divergence overall.

### Divergent Outputs

Divergent Outputs names the presence of output differences across comparable cases or runs.

Non-Deterministic Execution is specifically about repeated execution under equivalent inputs and constraints.

### Variance Entropy

Variance Entropy is better treated as a lens or measurement frame for inspecting how much uncontrolled variation exists.

Non-Deterministic Execution names the structural failure condition where reproducibility is expected but not achieved.

## Related Lenses

Primary Lenses:

- Determinism Lens
- Variance Entropy Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Invariant Lens

Use the Determinism Lens to inspect whether equivalent inputs and constraints produce structurally equivalent outputs.

Use the Variance Entropy Lens to inspect the amount, distribution, and uncontrolled spread of output variation.

Use the Constraint Sufficiency Lens when divergence may come from weak or incomplete constraints.

Use the Invariant Lens when some required property should remain true across repeated executions.

## Structural Limits

Non-Deterministic Execution does not identify the cause of divergence by itself.

It does not say that all variation is wrong.

It only identifies that outputs diverge where structural equivalence or reproducibility is expected.

Declared randomness, bounded variation, sampling behavior, feature flags, or versioned execution paths may resolve or explain the divergence.

## Workbench Notes

This Pattern is useful when a user cannot reproduce a result or when repeated runs produce structurally different outcomes without a declared reason.

The key Workbench move is to separate three questions:

1. Are the inputs and declared constraints equivalent?
2. Are the outputs structurally equivalent?
3. Is the variation declared and bounded?

If equivalent inputs and constraints produce unbounded divergent outputs, the issue is Non-Deterministic Execution.
