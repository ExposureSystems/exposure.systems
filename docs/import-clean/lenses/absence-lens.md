---
layer: lens
slug: absence-lens
title: Absence Lens
status: stable
---

# Absence Lens

## Definition

Detects structurally required elements that are missing from the
observed structure.

## Structural Transform

Input:

- Structural graph

- Declared structural requirements

Operation:

- Compare required elements against observed structure

- Identify missing regions

Output:

- Absence classification

- Missing elements (if present)

## Input Requirements

- Explicit structural requirements

## Structural Signature of Failure

Failure exists when required structural elements are not present.

## Structural Limits

Evaluates presence only.

Does not evaluate correctness of present elements.

