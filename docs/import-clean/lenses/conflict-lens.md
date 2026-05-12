---
layer: lens
slug: conflict-lens
title: Conflict Lens
status: stable
---

# Conflict Lens

## Definition

Detects mutually incompatible constraints that cannot be simultaneously
satisfied.

## Structural Transform

Input:

- Structural graph

- Declared constraints

Operation:

- Evaluate compatibility of constraint sets

- Identify contradictions

Output:

- Conflict classification

- Contradictory regions (if present)

## Input Requirements

- Explicit constraint declarations

## Structural Signature of Failure

Failure exists when constraints cannot be satisfied simultaneously.

## Structural Limits

Evaluates compatibility only.

Does not resolve conflicts.

