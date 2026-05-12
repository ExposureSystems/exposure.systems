---
layer: pattern
ontology_slug: reference-instability
title: Reference Instability
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where references, identifiers, links, or anchors change
  across equivalent evaluations without a declared cause.
code: PAT-0200
---
# Reference Instability

## Definition

Reference Instability exists when references, identifiers, links, anchors, node IDs, edge IDs, or other structural handles change across equivalent evaluations without a declared cause.

The structure does not fail because references change during a legitimate migration, version change, or declared transformation. It fails when references are expected to remain stable but drift without explanation.

## Visible Surface

Users may notice Reference Instability when the same object, node, file, output, source, decision, claim, or workflow element cannot be reliably found or compared across runs.

Common visible signs include:

- The same input produces different identifiers across runs.
- Links, anchors, or references break without an announced change.
- A citation, node ID, or object reference points to a different target later.
- A system cannot compare two runs because identities shifted.
- A cached, logged, or stored reference no longer resolves.
- A workflow step depends on an identifier that changes unexpectedly.
- Audit or provenance trails become difficult to reconstruct.

The visible problem is often described as “the thing is the same, but the reference keeps changing.”

## Structural Signature

Reference Instability usually contains these elements:

- A structural reference, identifier, link, anchor, pointer, node ID, edge ID, citation, or handle
- Repeated evaluation, retrieval, rendering, generation, or execution cycles
- Equivalent or intentionally comparable inputs
- Reference identity changing across those cycles
- No declared migration, version boundary, transformation, or cause explaining the change

The instability may affect internal references, public URLs, machine IDs, content anchors, generated identifiers, provenance links, or cross-index mappings.

## Deterministic Test

Given equivalent structural inputs and no declared transformation, reference identifiers should remain stable.

Ask:

1. What reference or identifier is expected to remain stable?
2. Across which evaluations, states, runs, releases, or renders is it compared?
3. Are the inputs equivalent for the purpose of identity?
4. Did the reference change?
5. Is there a declared cause, migration, version boundary, or transformation explaining the change?

If equivalent inputs produce changed references without declared cause, Reference Instability exists.

## Common Contexts

Reference Instability commonly appears in:

- Generated IDs
- Search indexes
- Citation systems
- Content anchors
- URL slugs
- Node and edge identifiers
- Audit trails
- Retrieval systems
- Vector stores
- Cache keys
- Logs
- Evaluation runs
- Model output references
- Workflow state IDs
- Cross-document links
- Version migrations

In AI systems, it often appears when generated citations, retrieved source references, tool call IDs, memory handles, or evaluation identifiers cannot be compared reliably across runs.

## Distinguish From

### Contract Drift

Contract Drift occurs when a declared contract changes but connected structures do not update in sync.

Reference Instability may be caused by contract drift, but it specifically names identity or reference movement across equivalent evaluations.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when repeated execution can produce different outcomes under the same declared conditions.

Reference Instability is narrower. It concerns unstable references or identifiers, even if the broader output is otherwise acceptable.

### Schema Breakage

Schema Breakage occurs when an instance violates a declared schema.

Reference Instability can occur inside a schema-valid structure if references change unexpectedly across equivalent states.

### Silent Mutation

Silent Mutation occurs when structure changes without being declared or surfaced.

Reference Instability may be one visible form of silent mutation, but it specifically concerns identity/reference drift.

## Related Lenses

Primary Lenses:

- Reference Stability Lens
- Provenance Trace Lens

Secondary Lenses:

- Determinism Lens
- Reconciliation Lens

Use the Reference Stability Lens to inspect whether identifiers, anchors, links, and references remain stable across equivalent states.

Use the Provenance Trace Lens when unstable references damage auditability, source tracing, or chain-of-custody.

Use the Determinism Lens when changing references are part of broader repeated-run variability.

Use the Reconciliation Lens when multiple reference states need to be resolved into one stable mapping.

## Structural Limits

Reference Instability does not evaluate whether the referenced object itself is correct.

It does not require references to remain stable across declared migrations, version changes, or transformations.

It only identifies that identity or reference handles changed where stability was expected and no cause was declared.

A declared migration, stable ID strategy, reference map, or compatibility layer may resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system cannot reliably compare, audit, retrieve, cite, or reconnect the same structural object across runs.

The key Workbench move is to separate three questions:

1. What reference was expected to remain stable?
2. Were the compared inputs or states equivalent for identity?
3. Was the reference change declared and explainable?

If the same structural identity cannot be tracked across equivalent evaluations, the issue is Reference Instability.
