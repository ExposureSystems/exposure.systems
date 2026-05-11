---
layer: lens
slug: provenance-trace-lens
title: Provenance Trace Lens
code: LEN-0260
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Attaches stable lineage to structural regions by mapping origin, reference history, and transformation path.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/provenance-trace-lens.md
search_intents:
  - provenance trace
  - structural lineage
  - transformation chain
  - source trace
  - lineage map
related_patterns:
  primary:
    - reference-instability
  secondary:
    - authority-shadowing
    - silent-mutation
    - persistence-instability
---

# Provenance Trace Lens

## Definition

Provenance Trace Lens attaches stable lineage to structural regions by mapping origin, reference history, and transformation path.

It is used when the main question is where a structure came from, how it changed, and whether its lineage can be traced reliably.

## Use This Lens When

Use this Lens when a structural region, output, identifier, decision, or artifact needs traceable origin and transformation history.

Common triggers include:

- A reference or identifier no longer resolves reliably.
- A structural change appears without a clear source.
- A restored or persisted record does not match its earlier state.
- An effective authority or control path is hidden.
- A generated artifact needs source lineage.
- A diagnostic needs to reconstruct how a node, edge, output, or decision came to exist.

## Input Requirements

- Observed structural graph
- Historical structural records
- Versioned structural records where available

The Lens needs lineage material. Without historical or versioned records, it can identify missing provenance, but cannot fully reconstruct the chain.

## Structural Transform

Input:

- Structural graph
- Historical structural records

Operation:

- Trace node and edge lineage
- Map transformation sequences
- Identify origin, transitions, and reference history
- Identify gaps or inconsistencies in the lineage chain

Output:

- Provenance map
- Transformation chain, if present
- Missing or inconsistent lineage regions, if present

## Output / Finding Shape

This Lens should produce:

- the structure being traced
- the known origin or earliest recoverable state
- the transformation chain
- the records or references supporting the chain
- any missing, unstable, or inconsistent provenance links

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where provenance traceability is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Reference Instability

Current secondary Pattern matches:

- Authority Shadowing
- Silent Mutation
- Persistence Instability

## Distinguish From

### Reference Stability Lens

Reference Stability Lens checks whether identifiers, anchors, or links remain stable.

Provenance Trace Lens reconstructs lineage and transformation history for structural regions.

### Determinism Lens

Determinism Lens checks reproducibility under equivalent inputs.

Provenance Trace Lens checks whether the origin and transformation path can be traced.

### Reconciliation Lens

Reconciliation Lens resolves divergent states into a coherent result.

Provenance Trace Lens provides lineage evidence that may support reconciliation.

## Structural Limits

Provenance Trace Lens evaluates lineage traceability only.

It does not evaluate whether the traced structure is correct.

It does not evaluate constraint correctness.

It does not decide whether the originating source was legitimate.

## Workbench Notes

Provenance Trace Lens is useful when the fastest question is:

“Where did this structure come from?”

If lineage cannot be traced or the transformation chain is inconsistent, the Lens surfaces the provenance failure.