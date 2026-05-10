---
layer: lens
slug: provenance-trace-lens
title: Provenance Trace Lens
status: stable
---

# Provenance Trace Lens

## Definition

Attaches stable lineage to structural regions, mapping origin and
transformation path.

## Structural Transform

Input:

- Structural graph

- Historical structural records

Operation:

- Trace node and edge lineage

- Map transformation sequences

Output:

- Provenance map

- Transformation chain (if present)

## Input Requirements

- Versioned structural records

## Structural Signature of Failure

Failure exists when structural lineage cannot be traced or is
inconsistent across evaluations.

## Structural Limits

Evaluates lineage traceability only.

Does not evaluate constraint correctness.

