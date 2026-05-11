---
layer: lens
slug: authority-overlay-lens
title: Authority Overlay Lens
code: LEN-0110
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Maps declared authority hierarchies onto observed structure to detect absence, override, or conflict.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/authority-overlay-lens.md
search_intents:
  - authority overlay
  - authority hierarchy
  - overlapping authority
  - missing authority
  - authority mapping
related_patterns:
  primary:
    - missing-authority
    - authority-collision
    - authority-shadowing
  secondary:
    - authority-merge-conflict
---

# Authority Overlay Lens

## Definition

Authority Overlay Lens maps declared authority hierarchies onto observed structure to detect absence, override, or conflict.

It is used when the main question is whether the system’s declared authorities actually line up with the regions, actions, states, or decisions they are supposed to govern.

## Use This Lens When

Use this Lens when authority, ownership, governance, permission, or approval appears unclear, missing, overlapping, or overridden.

Common triggers include:

- A structural region has no declared authority.
- Multiple authorities appear to govern the same region.
- The effective authority differs from the declared hierarchy.
- A tool, model, agent, workflow, or policy acts under unclear governance.
- A decision depends on knowing who or what governs a region.

## Input Requirements

- Observed structural graph
- Declared authority hierarchy
- Explicit authority definitions

The Lens needs authority declarations. Without them, it can identify that authority is unknown, but it cannot fully classify alignment.

## Structural Transform

Input:

- Structural graph
- Declared authority hierarchy

Operation:

- Map authority declarations to structural regions
- Identify regions with missing authority
- Identify regions with overlapping or unresolved authority
- Compare declared authority with observed control where possible

Output:

- Authority alignment classification
- Missing authority regions, if present
- Conflict or overlap regions, if present
- Shadowed or overridden authority regions, if present

## Output / Finding Shape

This Lens should produce:

- the structural region being inspected
- the declared authority or authorities mapped to it
- whether authority is missing, overlapping, overridden, or aligned
- the unresolved region or claim if failure is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where authority mapping is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Missing Authority
- Authority Collision
- Authority Shadowing

Current secondary Pattern matches:

- Authority Merge Conflict

## Distinguish From

### Conflict Lens

Conflict Lens detects incompatible claims or states.

Authority Overlay Lens specifically maps authority declarations onto structure. It may reveal conflict, but it begins with authority alignment.

### Reconciliation Lens

Reconciliation Lens helps resolve incompatible states into a coherent result.

Authority Overlay Lens identifies authority absence, overlap, or override before resolution.

### Absence Lens

Absence Lens detects required missing structure generally.

Authority Overlay Lens detects missing authority as part of a broader authority map.

## Structural Limits

Authority Overlay Lens evaluates authority alignment only.

It does not decide which authority is legitimate, ethical, correct, or preferred.

It does not resolve authority conflicts by itself.

## Workbench Notes

Authority Overlay Lens is useful when the fastest question is:

“Who or what governs this region?”

If the answer is missing, overlapping, or different from the declared hierarchy, the Lens surfaces the authority alignment failure.