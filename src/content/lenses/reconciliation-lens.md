---
layer: lens
ontology_slug: reconciliation-lens
title: Reconciliation Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Evaluates whether structural changes align with declared authority updates,
  version changes, or reconciliation rules.
code: LEN-0270
---
# Reconciliation Lens

## Definition

Reconciliation Lens evaluates whether structural changes align with declared authority updates, version changes, or reconciliation rules.

It is used when the main question is whether two structural states can be brought into a coherent relationship under declared updates.

## Use This Lens When

Use this Lens when a structure changed, diverged, merged, or moved across states and the system needs to determine whether the change is aligned with declared authority or update rules.

Common triggers include:

- A structural change has no corresponding declared authority update.
- Multiple authority states need to be resolved into one result.
- Prior and updated structure do not align.
- Contract changes leave connected structures out of sync.
- Multiple states fail to settle into a coherent result.
- A diagnostic needs to identify unreconciled regions after a change.

## Input Requirements

- Prior structural graph
- Updated structural graph
- Declared authority changes
- Versioned structural records
- Declared authority change log or reconciliation rule

The Lens needs at least two comparable states and a declared update basis. Without prior and updated states, reconciliation cannot be evaluated.

## Structural Transform

Input:

- Prior structural graph
- Updated structural graph
- Declared authority changes

Operation:

- Compare structural differences against declared updates
- Identify unaligned modifications
- Identify regions where prior and updated states do not reconcile
- Compare observed changes against authority, version, or reconciliation rules

Output:

- Reconciliation classification
- Unreconciled regions, if present
- Declared update or authority change that should have aligned the structure

## Output / Finding Shape

This Lens should produce:

- the prior state
- the updated state
- the declared update or authority change
- the structural difference between states
- whether the difference is reconciled or unreconciled
- the regions that remain unaligned

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where reconciliation is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Authority Merge Conflict
- Authority-State Mismatch
- Convergence Failure
- Contract Drift

Current secondary Pattern matches:

- Missing Authority
- Authority Collision
- Authority Shadowing
- Constraints Underspecified
- Orphaned Structure

## Distinguish From

### Conflict Lens

Conflict Lens detects incompatible declarations or states.

Reconciliation Lens checks whether differences can be aligned into a coherent state under declared update rules.

### Convergence Lens

Convergence Lens checks whether comparable structures align.

Reconciliation Lens focuses on resolving or accounting for differences between prior and updated states.

### Provenance Trace Lens

Provenance Trace Lens traces origin and transformation history.

Reconciliation Lens uses change evidence to determine whether structural differences align with declared updates.

## Structural Limits

Reconciliation Lens evaluates alignment only.

It does not evaluate whether the authority change itself is correct, legitimate, or desirable.

It does not decide the final policy outcome unless a declared reconciliation rule provides one.

## Workbench Notes

Reconciliation Lens is useful when the fastest question is:

“Do these changes line up with what was declared?”

If structural changes occur without corresponding declared authority, version, or reconciliation updates, the Lens surfaces the unreconciled regions.
