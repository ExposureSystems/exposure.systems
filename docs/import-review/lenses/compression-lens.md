---
layer: lens
slug: compression-lens
title: Compression Lens
code: LEN-0140
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Reduces structural graphs into stable minimal representations for comparison, redundancy detection, and diffing.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/compression-lens.md
search_intents:
  - compression lens
  - reduce graph
  - redundant structure
  - minimal representation
  - structural diffing
related_patterns:
  primary:
    - unconstrained-expansion
    - density-spike
    - density-vacuum
  secondary:
    - divergent-outputs
    - asymmetric-structure
    - redundant-declaration
---

# Compression Lens

## Definition

Compression Lens reduces structural graphs into stable minimal representations for comparison, redundancy detection, and diffing.

It is used when the main question is whether a structure can be simplified without changing its declared constraints or structural meaning.

## Use This Lens When

Use this Lens when a graph, rule set, workflow, prompt, policy, or ontology region appears bloated, duplicated, over-expanded, or difficult to compare.

Common triggers include:

- Equivalent regions can be collapsed.
- Multiple declarations appear redundant.
- A structure expands without adding meaning.
- A dense region needs to be reduced for comparison.
- Two outputs need stable minimal forms before diffing.
- A sparse or dense area needs comparison against expected structure.

## Input Requirements

- Structural graph
- Enough declared constraints to know what must be preserved during reduction

The Lens needs a structural graph. It also needs some preservation rule, because compression should not remove meaning that the structure requires.

## Structural Transform

Input:

- Structural graph

Operation:

- Identify redundant nodes or edges
- Identify equivalent regions
- Reduce equivalent regions without altering declared constraints
- Produce a stable minimal representation for comparison or diffing

Output:

- Compressed graph
- Redundancy regions, if present
- Differences that remain after reduction

## Output / Finding Shape

This Lens should produce:

- the original structural region being compressed
- the reduced or minimal representation
- the redundant nodes, edges, declarations, or regions
- the preservation rule used during compression
- whether compression changes declared constraints

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where compression or reduction is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Unconstrained Expansion
- Density Spike
- Density Vacuum

Current secondary Pattern matches:

- Divergent Outputs
- Asymmetric Structure
- Redundant Declaration

## Distinguish From

### Normalization Lens

Normalization Lens organizes structure into a consistent canonical form.

Compression Lens reduces structure into a stable minimal form for comparison, redundancy detection, or diffing.

### Variance Entropy Lens

Variance Entropy Lens inspects spread, disorder, or uncontrolled variation.

Compression Lens inspects reducibility and redundancy.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Compression Lens checks whether equivalent regions can be reduced without changing declared constraints.

## Structural Limits

Compression Lens evaluates redundancy and reducibility only.

It does not evaluate whether the original structure is correct, useful, or desirable.

It does not remove structure unless the reduction preserves declared constraints.

## Workbench Notes

Compression Lens is useful when the fastest question is:

“What can be reduced without changing structural meaning?”

If equivalent regions can be collapsed, the Lens helps reveal redundancy, over-expansion, or comparison-stable structure.