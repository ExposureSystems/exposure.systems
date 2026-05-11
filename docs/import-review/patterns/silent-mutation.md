---
layer: pattern
slug: silent-mutation
title: Silent Mutation
code: PAT-0380
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where a change occurs without a corresponding declared update, authority update, or version change.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/silent-mutation.md
search_intents:
  - silent mutation
  - undeclared change
  - untracked change
  - changed without version
  - hidden structural delta
related_lenses:
  primary:
    - reference-stability-lens
    - determinism-lens
  secondary:
    - provenance-trace-lens
---

# Silent Mutation

## Definition

Silent Mutation exists when a structural change occurs without a corresponding declared update, authority update, or version change.

The structure does not fail because change happens. It fails because the system changes in a way that is not declared, tracked, versioned, or surfaced to the parts of the system that depend on that structure.

## Visible Surface

Users may notice Silent Mutation when something appears to have changed even though no changelog, version bump, approval, migration, or declared update explains the change.

Common visible signs include:

- A file, object, policy, schema, prompt, output, or workflow behaves differently without a recorded change.
- A generated artifact differs from a previous version with no declared reason.
- A downstream system breaks because an upstream structure changed silently.
- A reference, identifier, route, or field changes without a migration notice.
- A user sees different behavior even though the public state appears unchanged.
- A diagnostic or receipt no longer matches the structure it originally referenced.
- An authority or ownership state changes without a corresponding declaration.

The visible problem is often described as “this changed, but nothing says it changed.”

## Structural Signature

Silent Mutation usually contains these elements:

- A structural delta between two states
- No corresponding declared update
- No version increment where versioning is expected
- No authority update where governance is expected
- No changelog, migration note, compatibility boundary, or visible transition record
- A dependency that expects change tracking to exist

The mutation may affect content, schema, authority, routing, interface shape, references, generated outputs, workflow state, policy behavior, or stored artifacts.

## Deterministic Test

Given a structural modification, a corresponding declared update should exist.

Ask:

1. What structure changed?
2. What prior state and current state are being compared?
3. What declaration, version, authority state, or changelog should record this change?
4. Is the corresponding update present?
5. Did any dependent structure receive notice of the change?

If a structural delta exists and no corresponding declared update exists, Silent Mutation exists.

## Common Contexts

Silent Mutation commonly appears in:

- Content versioning
- Schema changes
- Prompt changes
- Tool manifests
- Model output formats
- Policy rules
- Permission states
- Workflow definitions
- Search indexes
- Generated artifacts
- Configuration files
- Cached objects
- Receipts
- Audit logs
- Documentation-to-runtime mappings

In AI systems, it often appears when prompts, model behavior, retrieved references, tool schemas, generated outputs, or evaluation results change without a declared version or provenance record.

## Distinguish From

### Reference Instability

Reference Instability occurs when references or identifiers change across equivalent evaluations.

Silent Mutation may cause reference instability, but it specifically names untracked structural change.

### Persistence Instability

Persistence Instability occurs when persisted state restores into a non-equivalent structure.

Silent Mutation may occur during persistence or restoration, but it can happen in any structural change path.

### Contract Drift

Contract Drift occurs when a declared contract changes but connected structures do not update in sync.

Silent Mutation may create drift, but it specifically concerns a change that lacks declaration or tracking.

### Authority-State Mismatch

Authority-State Mismatch occurs when observed structural state does not align with declared authority state.

Silent Mutation may create mismatch if authority state changes without declaration, but it applies to any untracked structural delta.

## Related Lenses

Primary Lenses:

- Reference Stability Lens
- Determinism Lens

Secondary Lenses:

- Provenance Trace Lens

Use the Reference Stability Lens when silent changes alter identifiers, anchors, links, or stable handles.

Use the Determinism Lens when silent changes create unexplained differences across equivalent runs.

Use the Provenance Trace Lens to inspect whether the change has traceable origin, authority, and version context.

## Structural Limits

Silent Mutation does not evaluate whether the change was intentional, beneficial, harmful, or correct.

It does not say all hidden implementation changes are public ontology changes.

It only identifies that a structural change occurred where a corresponding declaration, authority update, or version record was expected but absent.

A declared update, migration note, authority change, version increment, or provenance record may resolve the Pattern.

## Workbench Notes

This Pattern is useful when a user sees changed behavior but cannot find the declared change that explains it.

The key Workbench move is to separate three questions:

1. What changed?
2. What record should have declared that change?
3. Is that record present?

If the structural delta exists without the expected declaration, the issue is Silent Mutation.