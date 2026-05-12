---
layer: pattern
slug: undeclared-side-effect
title: Undeclared Side Effect
status: stable
---

# Undeclared Side Effect

## Definition

Structural modifications occur outside the declared target region of an
operation.

## Structural Signature

- Declared operation scope

- Additional modified regions

- No declared propagation rule

## Deterministic Test

Given declared operation scope, only target regions may change.

If additional regions change, Undeclared Side Effect exists.

## Structural Limits

Does not evaluate operation correctness.

Evaluates scope containment only.

