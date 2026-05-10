---
layer: pattern
slug: cross-layer-escalation
title: Cross-Layer Escalation
status: stable
---

# Cross-Layer Escalation

## Definition

Structural escalation propagates across distinct authority or boundary
layers.

## Structural Signature

- Multiple structural layers

- Escalation originating in one layer

- Impact extending into another layer without authorization

## Deterministic Test

Given declared boundary layers, escalation must not cross layers without
explicit authority.

If escalation crosses layers improperly, Cross-Layer Escalation exists.

## Structural Limits

Does not evaluate legitimacy of layer definitions.

Evaluates boundary crossing only.

