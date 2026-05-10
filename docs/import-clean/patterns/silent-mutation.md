---
layer: pattern
slug: silent-mutation
title: Silent Mutation
status: stable
---

# Silent Mutation

## Definition

Structural changes occur without corresponding declared updates or
version changes.

## Structural Signature

- Structural delta

- No declared authority update

- No version increment

## Deterministic Test

Given structural modification, a corresponding declared update must
exist.

If absent, Silent Mutation exists.

## Structural Limits

Does not evaluate intent.

Evaluates declared change tracking only.

