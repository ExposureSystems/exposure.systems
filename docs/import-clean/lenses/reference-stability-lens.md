---
layer: lens
slug: reference-stability-lens
title: Reference Stability Lens
status: stable
---

# Reference Stability Lens

## Definition

Evaluates whether structural references remain consistent across
execution cycles.

## Structural Transform

Input:

- Structural graphs across evaluations

Operation:

- Compare node and edge identities

- Detect identity drift

Output:

- Stability classification

- Drift regions (if present)

## Input Requirements

- Comparable structural graphs

## Structural Signature of Failure

Failure exists when structural identities change without declared cause.

## Structural Limits

Evaluates identity stability only.

Does not evaluate correctness.

