---
layer: pattern
slug: authority-merge-conflict
title: Authority Merge Conflict
status: stable
---

# Authority Merge Conflict

## Definition

Multiple authority states are combined without a defined merge or
reconciliation rule.

## Structural Signature

- Multiple authority inputs

- Shared structural scope

- No merge specification

## Deterministic Test

Given merged authority inputs, if resulting authority state is undefined
or inconsistent, Authority Merge Conflict exists.

## Structural Limits

Does not evaluate reconciliation correctness.

Evaluates absence of merge rule only.

