---
layer: pattern
slug: contract-drift
title: Contract Drift
status: stable
---

# Contract Drift

## Definition

Declared contracts evolve without synchronized structural updates.

## Structural Signature

- Updated contract declaration

- Structural graph lagging behind contract

- Misalignment between declaration and implementation

## Deterministic Test

Given contract updates, structural graph must align with new contract.

If misalignment persists, Contract Drift exists.

## Structural Limits

Does not evaluate correctness of the contract.

Evaluates alignment only.

