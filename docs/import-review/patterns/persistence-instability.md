---
layer: pattern
slug: persistence-instability
title: Persistence Instability
code: PAT-0350
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where persisted state cannot be stored and restored into an equivalent structure without alteration.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/persistence-instability.md
search_intents:
  - persistence instability
  - restore mismatch
  - state persistence failure
  - saved state changed
  - reload does not match
related_lenses:
  primary:
    - reference-stability-lens
    - invariant-lens
  secondary:
    - provenance-trace-lens
    - determinism-lens
---

# Persistence Instability

## Definition

Persistence Instability exists when persisted structural state cannot be stored and restored into an equivalent structure without alteration.

The structure does not fail because state changes during normal execution. It fails when a persisted state and its restored state should be equivalent, but they are not.

## Visible Surface

Users may notice Persistence Instability when saved, cached, indexed, logged, or serialized state comes back different from what was stored.

Common visible signs include:

- A saved workflow reopens in a different structural state.
- A cached object no longer matches the source object.
- A serialized graph reloads with missing, renamed, or altered nodes.
- A stored evaluation result cannot be reproduced from its persisted record.
- A restored configuration has different effective behavior.
- An audit log or receipt no longer resolves to the same structure.
- A system appears correct before save but different after reload.

The visible problem is often described as “what came back is not what was saved.”

## Structural Signature

Persistence Instability usually contains these elements:

- A structural graph, object, state, output, route, decision, configuration, receipt, or record
- A persistence operation such as save, cache, serialize, index, log, export, or snapshot
- A restoration operation such as load, replay, hydrate, deserialize, retrieve, or re-index
- A structural mismatch between persisted and restored states
- No declared transformation, migration, version boundary, or lossy-storage rule explaining the difference

The mismatch may involve identity, references, fields, order, relationships, authority state, metadata, constraints, or derived structure.

## Deterministic Test

Given a persisted structural graph, restoration should yield an equivalent graph unless a transformation is declared.

Ask:

1. What structure was persisted?
2. What persistence and restoration path was used?
3. What restored structure was observed?
4. Where does the restored structure differ from the persisted structure?
5. Is there a declared migration, transformation, version boundary, or lossy-storage rule?

If restored state is not equivalent to persisted state and no declared transformation explains the mismatch, Persistence Instability exists.

## Common Contexts

Persistence Instability commonly appears in:

- Saved workflows
- Caches
- Search indexes
- Vector stores
- Logs
- Receipts
- Snapshots
- Serialized graphs
- Database records
- Configuration stores
- Model output records
- Evaluation artifacts
- Tool call traces
- Agent memory
- Audit trails
- Export/import flows

In AI systems, it often appears when generated outputs, retrieval references, tool traces, memories, or evaluation records cannot be reliably restored into the same structural meaning.

## Distinguish From

### Reference Instability

Reference Instability occurs when references or identifiers change across equivalent evaluations.

Persistence Instability may include reference instability, but it specifically concerns store-and-restore fidelity.

### Non-Deterministic Execution

Non-Deterministic Execution occurs when repeated executions produce divergent outputs.

Persistence Instability does not require re-execution. It concerns whether saved state restores equivalently.

### Silent Mutation

Silent Mutation occurs when structure changes without being declared or surfaced.

Persistence Instability may be caused by silent mutation during storage or restoration, but it specifically names persistence fidelity failure.

### Schema Breakage

Schema Breakage occurs when an observed structure violates a declared schema.

Persistence Instability may create schema breakage, but the core issue is mismatch between persisted and restored structure.

## Related Lenses

Primary Lenses:

- Reference Stability Lens
- Invariant Lens

Secondary Lenses:

- Provenance Trace Lens
- Determinism Lens

Use the Reference Stability Lens when persistence changes identifiers, links, anchors, or references.

Use the Invariant Lens when certain structural properties must remain true across save and restore.

Use the Provenance Trace Lens when persistence instability damages auditability or chain-of-custody.

Use the Determinism Lens when restore mismatch is confused with repeated-execution variability.

## Structural Limits

Persistence Instability does not evaluate whether the original persisted state was correct.

It does not require lossless persistence in every system.

It only identifies that restored state differs where equivalent restoration is expected.

A declared migration, lossy-storage boundary, transformation rule, or versioned restore policy may resolve the Pattern.

## Workbench Notes

This Pattern is useful when receipts, logs, saved workflows, generated states, or cached structures cannot be trusted to reload into the same meaning.

The key Workbench move is to separate three questions:

1. What state was persisted?
2. What state was restored?
3. Was any difference declared and expected?

If restored state differs without a declared transformation, the issue is Persistence Instability.