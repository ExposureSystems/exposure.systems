---
layer: lens
slug: variance-entropy-lens
title: Variance / Entropy Lens
code: LEN-0290
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Measures structural variability across repeated or comparable evaluations and identifies divergence beyond expected bounds.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/variance-entropy-lens.md
search_intents:
  - variance entropy
  - structural variability
  - divergence magnitude
  - output variation
  - entropy across runs
related_patterns:
  primary:
    - non-deterministic-execution
    - divergent-outputs
    - asymmetric-structure
    - escalation-growth
    - density-spike
  secondary:
    - constraints-underspecified
    - convergence-failure
    - unconstrained-expansion
    - propagation-amplification
---

# Variance / Entropy Lens

## Definition

Variance / Entropy Lens measures structural variability across repeated or comparable evaluations and identifies divergence beyond expected bounds.

It is used when the main question is not only whether outputs differ, but how much they differ, how spread out the differences are, and whether that spread exceeds expected limits.

## Use This Lens When

Use this Lens when a system shows variation, spread, unstable distribution, or divergence across multiple evaluations.

Common triggers include:

- Repeated runs produce different structures.
- Parallel outputs vary more than expected.
- A structural region becomes unusually concentrated or uneven.
- Outputs diverge across comparable cases.
- Escalation or expansion increases variability over time.
- A diagnostic needs to measure the magnitude of divergence, not just detect that divergence exists.

## Input Requirements

- Structural graphs from repeated or comparable evaluations
- Comparable structural graphs
- Expected bounds for acceptable divergence, when available

The Lens needs comparable graphs. Without comparable scope, variance may describe difference, but it cannot classify whether the difference is structurally meaningful.

## Structural Transform

Input:

- Structural graphs from repeated evaluations

Operation:

- Compare structural differences across runs
- Quantify divergence magnitude
- Identify regions with unusually high spread, instability, concentration, or distribution change

Output:

- Variance classification
- Divergence metrics, if present
- Regions where variability exceeds expected bounds

## Output / Finding Shape

This Lens should produce:

- the evaluations or graphs being compared
- the dimension of variation being measured
- the magnitude or spread of divergence
- expected bounds, if declared
- the regions where divergence exceeds those bounds

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where variance, entropy, or spread measurement is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Non-Deterministic Execution
- Divergent Outputs
- Asymmetric Structure
- Escalation Growth
- Density Spike

Current secondary Pattern matches:

- Constraints Underspecified
- Convergence Failure
- Unconstrained Expansion
- Propagation Amplification

## Distinguish From

### Determinism Lens

Determinism Lens checks whether equivalent inputs produce equivalent outputs across repeated executions.

Variance / Entropy Lens measures the amount and distribution of structural variation across evaluations.

### Convergence Lens

Convergence Lens checks whether comparable structures align.

Variance / Entropy Lens measures how much structural spread remains across comparable structures.

### Compression Lens

Compression Lens reduces structure into stable minimal representations.

Variance / Entropy Lens measures variability or divergence before or after comparison.

## Structural Limits

Variance / Entropy Lens measures variability only.

It does not evaluate causation.

It does not decide whether variation is correct, useful, harmful, or expected unless bounds are declared.

## Workbench Notes

Variance / Entropy Lens is useful when the fastest question is:

“How much does this vary?”

If structural divergence exceeds expected bounds across evaluations, the Lens surfaces the magnitude and location of that variability.