---
layer: lens
ontology_slug: absence-lens
title: Absence Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Detects structurally required elements that are missing from the observed
  structure.
code: LEN-0100
---
# Absence Lens

## Definition

Absence Lens detects structurally required elements that are missing from the observed structure.

It is used when the main failure shape is not contradiction, instability, or overreach, but absence: something required by the structure is not present.

## Use This Lens When

Use this Lens when a system appears to be missing a required node, field, authority, rule, relationship, coverage area, or integration path.

Common triggers include:

- A required element cannot be found.
- A declaration points to something that does not exist.
- A workflow depends on a missing owner, field, rule, or link.
- A graph region appears empty where structure is expected.
- A diagnostic needs to separate “missing” from “present but incorrect.”

## Input Requirements

- Observed structural graph
- Declared structural requirements
- A way to compare required elements against observed elements

The Lens needs a declared expectation. Without a requirement, absence cannot be distinguished from intentionally empty scope.

## Structural Transform

Input:

- Structural graph
- Declared structural requirements

Operation:

- Compare required elements against observed structure
- Identify missing nodes, regions, fields, links, authorities, or declarations

Output:

- Absence classification
- Missing elements or regions, if present
- Requirement that expected each missing element

## Output / Finding Shape

This Lens should produce:

- the missing element or region
- the requirement that says it should exist
- the observed structure where it is absent
- whether the absence is local, systemic, or relationship-based

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where missing structure is the strongest detection mechanism.

Current primary Pattern matches:

- Missing Authority
- Incomplete Declaration
- Orphaned Structure
- Density Vacuum

## Distinguish From

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether declared constraints are enough to control behavior.

Absence Lens checks whether required structure exists at all.

### Reference Stability Lens

Reference Stability Lens checks whether references remain stable across equivalent states.

Absence Lens checks whether the referenced or required structure is present.

### Boundary Compliance Lens

Boundary Compliance Lens checks whether structure remains inside declared boundaries.

Absence Lens checks whether expected structure is missing.

## Structural Limits

Absence Lens evaluates presence only.

It does not evaluate whether present elements are correct, legitimate, sufficient, or well-designed.

It does not decide what the missing element should be. It identifies that a required element is absent.

## Workbench Notes

Absence Lens is useful when the fastest question is:

“Does the required structure exist?”

If the answer is no, the Lens helps identify what is missing and which requirement expected it.
