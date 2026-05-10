---
layer: pattern
slug: density-vacuum
title: Density Vacuum
code: PAT-0280
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where a region expected to contain sufficient nodes, edges, coverage, or relationships falls below declared density thresholds.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/density-vacuum.md
search_intents:
  - density vacuum
  - missing coverage
  - sparse region
  - missing expected links
  - structural gap
related_lenses:
  primary:
    - variance-entropy-lens
    - constraint-sufficiency-lens
  secondary:
    - isolation-boundary-lens
    - reconciliation-lens
---

# Density Vacuum

## Definition

Density Vacuum exists when a structural region expected to contain sufficient nodes, edges, coverage, relationships, declarations, or checks falls below declared density thresholds.

The structure does not fail because a region is sparse. It fails when the region is expected to maintain a minimum level of structure and that minimum is not met.

## Visible Surface

Users may notice Density Vacuum when an area of the system feels empty, under-specified, under-covered, or disconnected compared with what the surrounding structure implies should exist.

Common visible signs include:

- A workflow stage has fewer checks than comparable stages.
- A policy area has no examples, exceptions, or enforcement paths.
- A graph region lacks expected nodes or edges.
- A category has too few Issues, Patterns, or supporting references to be useful.
- A review process has a gap where decisions should be recorded.
- A schema or interface has missing expected fields or relationships.
- A diagnostic area has no coverage despite known system behavior depending on it.

The visible problem is often described as “there should be more structure here.”

## Structural Signature

Density Vacuum usually contains these elements:

- A structural graph, region, category, workflow, schema, index, policy area, or relationship map
- A declared or implied baseline density
- Missing expected nodes, edges, declarations, checks, examples, relationships, or coverage
- A sparse or empty region where density should exist
- A downstream interpretability, validation, routing, governance, or coverage problem caused by the absence

The vacuum may involve missing technical structure, semantic coverage, authority coverage, diagnostic coverage, relationship coverage, or page usefulness coverage.

## Deterministic Test

Given declared density expectations, a structural region should meet minimum density for its purpose.

Ask:

1. What region is expected to contain structure?
2. What kind of density is expected?
3. What baseline, threshold, or comparable region establishes the minimum?
4. Which expected nodes, edges, declarations, checks, or relationships are missing?
5. Does the absence affect interpretation, routing, validation, governance, or use?

If the region falls below declared or expected density thresholds, Density Vacuum exists.

## Common Contexts

Density Vacuum commonly appears in:

- Ontology categories
- Issue coverage
- Pattern coverage
- Lens mappings
- Policy areas
- Evaluation rubrics
- Workflow stages
- Review queues
- Permission maps
- Documentation sets
- Search indexes
- Knowledge graphs
- Schema relationships
- Diagnostic matrices
- Human process handoffs

In AI systems, it often appears when a system has an area that should be covered by rules, examples, diagnostics, mappings, or authority declarations but remains structurally sparse.

## Distinguish From

### Density Spike

Density Spike occurs when structure concentrates too sharply in one localized region.

Density Vacuum is the opposite shape: expected structure is absent or too sparse.

### Missing Authority

Missing Authority occurs when an active structural region lacks declared governing authority.

Density Vacuum may include missing authority declarations, but it can also involve missing examples, relationships, checks, or other expected structure.

### Incomplete Declaration

Incomplete Declaration occurs when a declared element is missing required attributes or dependent declarations.

Density Vacuum concerns a whole region falling below expected structural density, not just one declaration missing parts.

### Constraints Underspecified

Constraints Underspecified occurs when constraints are too weak to eliminate ambiguity.

Density Vacuum may cause underspecification, but it specifically names insufficient structural coverage or concentration.

## Related Lenses

Primary Lenses:

- Variance Entropy Lens
- Constraint Sufficiency Lens

Secondary Lenses:

- Isolation Boundary Lens
- Reconciliation Lens

Use the Variance Entropy Lens to inspect whether structure is unevenly distributed and whether this region is abnormally sparse.

Use the Constraint Sufficiency Lens when missing structure leaves the region under-constrained.

Use the Isolation Boundary Lens when missing connections or coverage leave boundaries unclear.

Use the Reconciliation Lens when sparse regions need to be filled or connected into a coherent structure.

## Structural Limits

Density Vacuum does not evaluate whether the missing structure would be correct, useful, or desirable.

It does not require every region to be dense.

It only identifies that a region expected to maintain minimum structure, coverage, or relationships falls below declared or implied thresholds.

A declared minimal region, intentionally empty category, deferred scope rule, or explicit coverage boundary may explain or resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system has an obvious gap in coverage, mapping, examples, checks, or relationships.

The key Workbench move is to separate three questions:

1. What region is expected to contain structure?
2. What minimum density or coverage is expected?
3. What is missing relative to that expectation?

If expected density is absent, the issue is Density Vacuum.