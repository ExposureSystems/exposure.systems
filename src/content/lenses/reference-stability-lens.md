---
layer: lens
ontology_slug: reference-stability-lens
title: Reference Stability Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Evaluates whether structural references, identifiers, nodes, and edges remain
  consistent across execution cycles or comparable states.
code: LEN-0280
---
# Reference Stability Lens

## Definition

Reference Stability Lens evaluates whether structural references, identifiers, nodes, and edges remain consistent across execution cycles or comparable states.

It is used when the main question is whether the same structural object can still be identified, compared, restored, or traced across evaluations.

## Use This Lens When

Use this Lens when references, identifiers, anchors, links, or structural identities appear to drift.

Common triggers include:

- The same node receives different identifiers across runs.
- A reference no longer resolves to the same target.
- Persisted state restores with changed identities.
- A structural change occurs without a declared reference update.
- A contract or authority state changes and references no longer align.
- A diagnostic needs to compare identity across repeated or comparable states.

## Input Requirements

- Structural graphs across evaluations
- Comparable structural graphs
- Stable enough comparison context to determine whether identity should persist

The Lens needs comparable states. Without comparable states, identity differences may be expected rather than unstable.

## Structural Transform

Input:

- Structural graphs across evaluations

Operation:

- Compare node and edge identities
- Compare references, anchors, links, handles, and identifiers
- Detect identity drift
- Identify regions where identity changed without declared cause

Output:

- Stability classification
- Drift regions, if present
- References or identifiers that changed unexpectedly

## Output / Finding Shape

This Lens should produce:

- the reference, node, edge, anchor, or identifier being compared
- the states or cycles being compared
- the expected identity relationship
- where identity drift occurred
- whether a declared cause explains the drift

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where reference or identity stability is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Reference Instability
- Persistence Instability
- Silent Mutation

Current secondary Pattern matches:

- Non-Deterministic Execution
- Authority-State Mismatch
- Contract Drift

## Distinguish From

### Provenance Trace Lens

Provenance Trace Lens reconstructs origin and transformation history.

Reference Stability Lens checks whether references and identities remain stable across comparable states.

### Determinism Lens

Determinism Lens checks reproducibility of structural outputs under identical conditions.

Reference Stability Lens checks stability of identifiers, links, and handles inside or across those outputs.

### Convergence Lens

Convergence Lens compares whether structures align.

Reference Stability Lens compares whether identity and reference handles remain stable enough for alignment to be meaningful.

## Structural Limits

Reference Stability Lens evaluates identity stability only.

It does not evaluate whether the referenced structure itself is correct.

It does not require references to remain stable across declared migrations or versioned transformations.

## Workbench Notes

Reference Stability Lens is useful when the fastest question is:

“Is this still the same thing?”

If references or identifiers change without declared cause across comparable states, the Lens surfaces identity drift.
