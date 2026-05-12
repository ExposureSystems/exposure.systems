---
layer: lens
slug: determinism-lens
title: Determinism Lens
code: LEN-0180
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Evaluates whether identical structural inputs produce equivalent structural outputs across repeated executions.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/determinism-lens.md
search_intents:
  - determinism lens
  - reproducibility
  - identical inputs
  - repeated executions differ
  - structural equivalence
related_patterns:
  primary:
    - non-deterministic-execution
    - silent-mutation
  secondary:
    - divergent-outputs
    - convergence-failure
    - persistence-instability
    - reference-instability
    - contract-drift
---

# Determinism Lens

## Definition

Determinism Lens evaluates whether identical structural inputs produce equivalent structural outputs across repeated executions.

It is used when the main question is whether a system can reproduce the same structural result under the same declared conditions.

## Use This Lens When

Use this Lens when a system produces different outputs, decisions, routes, graphs, references, or findings across repeated runs that should be equivalent.

Common triggers include:

- The same input produces different structural outputs.
- A repeated diagnostic gives different classifications.
- A workflow routes the same case differently across executions.
- A saved or repeated evaluation cannot reproduce its earlier result.
- A structural change appears without a declared cause.
- A model, agent, tool, or evaluator behaves inconsistently under equivalent constraints.

## Input Requirements

- Stable structural inputs
- Declared authority state
- Explicit constraint definitions
- A repeatable execution or evaluation context

The Lens needs equivalent input conditions. Without stable inputs and declared constraints, output differences may not indicate determinism failure.

## Structural Transform

Input:

- Structural graph
- Declared authority state
- Declared constraints

Operation:

- Execute evaluation under identical conditions
- Compare resulting structural graphs
- Identify divergence regions between repeated outputs

Output:

- Structural equivalence classification
- Divergence regions, if present
- The repeated conditions used for comparison

## Output / Finding Shape

This Lens should produce:

- the repeated input conditions
- the declared constraints and authority state
- the output structures being compared
- whether the outputs are structurally equivalent
- where divergence appears if failure is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where reproducibility is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Non-Deterministic Execution
- Silent Mutation

Current secondary Pattern matches:

- Divergent Outputs
- Convergence Failure
- Persistence Instability
- Reference Instability
- Contract Drift

## Distinguish From

### Convergence Lens

Convergence Lens compares parallel or comparable structures under shared authority.

Determinism Lens evaluates repeated execution under identical structural inputs and constraints.

### Variance Entropy Lens

Variance Entropy Lens inspects spread, variation, or uncontrolled distribution.

Determinism Lens checks whether repeated runs produce equivalent outputs.

### Reference Stability Lens

Reference Stability Lens checks whether references and identifiers remain stable.

Determinism Lens checks reproducibility of the whole structural output.

## Structural Limits

Determinism Lens evaluates reproducibility only.

It does not evaluate whether the output is correct.

It does not evaluate whether the authority state is legitimate.

It does not identify the cause of divergence by itself.

## Workbench Notes

Determinism Lens is useful when the fastest question is:

“Does the same structure produce the same result again?”

If equivalent inputs and constraints produce non-equivalent outputs, the Lens surfaces the reproducibility failure.