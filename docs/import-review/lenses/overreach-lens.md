---
layer: lens
slug: overreach-lens
title: Overreach Lens
code: LEN-0240
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Detects structure that exceeds declared scope or authority reach.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/overreach-lens.md
search_intents:
  - overreach lens
  - exceeds scope
  - authority reach
  - excessive expansion
  - scope violation
related_patterns:
  primary:
    - overreach
    - undeclared-side-effect
  secondary: []
---

# Overreach Lens

## Definition

Overreach Lens detects structure that exceeds declared scope or authority reach.

It is used when the main question is whether an action, effect, authority, permission, or structural modification went beyond what it was declared or authorized to reach.

## Use This Lens When

Use this Lens when a system appears to act outside its lane.

Common triggers include:

- A tool modifies data outside its declared target.
- A workflow step affects unrelated state.
- An authority acts beyond its declared scope.
- A policy applies outside its declared domain.
- An operation has side effects beyond its target region.
- A user, role, model, or agent reaches more structure than it was authorized to reach.

## Input Requirements

- Observed structural graph
- Declared scope definitions
- Explicit scope boundaries or authority reach definitions

The Lens needs declared scope. Without a declared boundary of reach, the finding may be unbounded scope rather than overreach.

## Structural Transform

Input:

- Structural graph
- Declared scope definitions

Operation:

- Compare structural regions against declared scope
- Identify excessive expansion
- Identify regions affected outside declared reach

Output:

- Overreach classification
- Exceeded regions, if present
- The declared scope that was exceeded

## Output / Finding Shape

This Lens should produce:

- the acting structure or operation
- the declared scope or authority reach
- the observed affected regions
- which regions exceeded declared scope
- whether the excess reach was authorized or undeclared

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where overreach is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Overreach
- Undeclared Side Effect

## Distinguish From

### Boundary Compliance Lens

Boundary Compliance Lens checks whether observed structure follows declared boundary posture such as allow, block, or exception.

Overreach Lens checks whether action or authority exceeds declared scope or reach.

### Isolation Boundary Lens

Isolation Boundary Lens checks whether structure remains contained inside declared boundaries.

Overreach Lens checks whether a structure acted beyond its declared authority or target.

### Propagation Lens

Propagation Lens traces how effects travel across stages or boundaries.

Overreach Lens identifies whether the resulting reach exceeded declared scope.

## Structural Limits

Overreach Lens evaluates scope adherence only.

It does not evaluate whether the authority itself is legitimate.

It does not decide what the allowed scope should be.

## Workbench Notes

Overreach Lens is useful when the fastest question is:

“Did this act beyond what it was allowed to reach?”

If observed structure extends beyond declared scope or authority reach, the Lens surfaces the exceeded regions.