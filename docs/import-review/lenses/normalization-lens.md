---
layer: lens
slug: normalization-lens
title: Normalization Lens
code: LEN-0230
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Transforms structurally equivalent variants into a canonical form to prevent false divergence.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/normalization-lens.md
search_intents:
  - normalization lens
  - canonical form
  - structural equivalence
  - normalize variants
  - false divergence
related_patterns:
  primary:
    - redundant-declaration
  secondary:
    - interface-mismatch
    - circular-dependency
---

# Normalization Lens

## Definition

Normalization Lens transforms structurally equivalent variants into a canonical form to prevent false divergence.

It is used when the main question is whether two structures that look different are actually equivalent after applying declared normalization rules.

## Use This Lens When

Use this Lens when a system appears to contain duplicate, variant, or differently shaped structures that may mean the same thing.

Common triggers include:

- Equivalent declarations appear in different forms.
- A comparison shows divergence that may be formatting or representation noise.
- Redundant declarations need to be collapsed into a canonical form.
- Interface structures use different surface forms for the same meaning.
- A dependency graph may contain equivalent paths or variants.
- A diagnostic needs to avoid treating representational variation as real structural difference.

## Input Requirements

- Observed structural graph
- Declared normalization rules
- A target canonical form or equivalence rule

The Lens needs defined normalization rules. Without them, it cannot decide which variants are equivalent or what canonical form should result.

## Structural Transform

Input:

- Structural graph
- Declared normalization rules

Operation:

- Apply normalization rules
- Convert variants into canonical form
- Compare canonicalized forms for equivalence

Output:

- Normalized structural graph
- Equivalence classification
- Variant regions that collapse into the same canonical structure

## Output / Finding Shape

This Lens should produce:

- the original structural variants being compared
- the normalization rule applied
- the canonical form produced
- whether variants are equivalent after normalization
- any regions where canonical equivalence fails

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where normalization is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Redundant Declaration

Current secondary Pattern matches:

- Interface Mismatch
- Circular Dependency

## Distinguish From

### Compression Lens

Compression Lens reduces structure into a minimal representation for redundancy detection and diffing.

Normalization Lens converts equivalent variants into canonical form so they can be compared correctly.

### Reconciliation Lens

Reconciliation Lens resolves divergent or incompatible states into a coherent result.

Normalization Lens first checks whether apparent differences are just representational variants.

### Interface Contract Lens

Interface Contract Lens checks whether observed structure conforms to an interface contract.

Normalization Lens checks whether structurally equivalent variants can be canonicalized before comparison.

## Structural Limits

Normalization Lens evaluates canonical equivalence only.

It does not evaluate whether the canonical form is correct, legitimate, or complete.

It does not decide normalization rules unless those rules are declared.

## Workbench Notes

Normalization Lens is useful when the fastest question is:

“Are these actually different, or just different forms of the same structure?”

If variants become equivalent after canonicalization, the Lens prevents false divergence.