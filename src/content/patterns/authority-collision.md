---
layer: pattern
slug: authority-collision
title: Authority Collision
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where multiple authorities claim governance over the same structural region without a declared precedence rule.
code: PAT-0100
---

# Authority Collision

## Definition

Multiple authorities claim governance over the same structural region without resolution.

## Structural Signature

- Overlapping authority declarations
- Shared structural scope
- No declared precedence rule

## Deterministic Test

Given a structural region, only one effective authority may govern it.

If multiple authorities apply simultaneously without precedence, Authority Collision exists.

## Structural Limits

Does not resolve the conflict.

Detects overlapping authority only.
