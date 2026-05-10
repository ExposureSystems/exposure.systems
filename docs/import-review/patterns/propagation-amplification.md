---
layer: pattern
slug: propagation-amplification
title: Propagation Amplification
code: PAT-0360
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an effect, declaration, authority, constraint, or state increases in scope or intensity as it propagates beyond declared bounds.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/propagation-amplification.md
search_intents:
  - propagation amplification
  - effect amplifies
  - cascading impact
  - amplification beyond bounds
  - propagation grows
related_lenses:
  primary:
    - propagation-lens
    - escalation-gradient-lens
  secondary:
    - constraint-sufficiency-lens
    - boundary-compliance-lens
---

# Propagation Amplification

## Definition

Propagation Amplification exists when an effect, declaration, authority, constraint, state, or decision increases in scope or intensity as it propagates beyond declared bounds.

The structure does not fail because propagation occurs. It fails when the propagated effect becomes stronger, broader, or more consequential than the propagation rules declare.

## Visible Surface

Users may notice Propagation Amplification when a small or bounded effect spreads through the system and becomes larger than expected.

Common visible signs include:

- A local rule affects broader regions as it moves downstream.
- A small configuration change produces system-wide consequences.
- A low-severity signal becomes high-severity through repeated propagation.
- A policy, constraint, or permission becomes stricter or broader at each handoff.
- A model, agent, or workflow repeats and magnifies an earlier structural effect.
- A routing or escalation path expands the impact beyond its original scope.
- A generated decision influences more cases than the original declaration allowed.

The visible problem is often described as “this grew as it spread.”

## Structural Signature

Propagation Amplification usually contains these elements:

- A propagation chain
- An originating structural effect, declaration, authority, state, constraint, signal, or decision
- Increasing scope, intensity, severity, authority, consequence, or impact across the chain
- No declared amplification rule
- A declared or expected bound that the propagation exceeds

The amplification may be linear, cascading, recursive, compounding, or stepwise across handoffs.

## Deterministic Test

Given propagation rules, structural impact should remain within declared bounds unless amplification is explicitly declared.

Ask:

1. What effect or declaration is propagating?
2. What path or chain carries it?
3. What scope or intensity did it have at the source?
4. How did the effect increase as it propagated?
5. What rule declares or limits that amplification?

If impact amplifies beyond declared limits without an amplification rule, Propagation Amplification exists.

## Common Contexts

Propagation Amplification commonly appears in:

- Agent workflows
- Escalation paths
- Policy enforcement
- Permission inheritance
- Risk scoring
- Ranking or recommendation systems
- Moderation pipelines
- Human review queues
- Data pipelines
- Event systems
- Retry loops
- Alerting systems
- Model routing
- Configuration propagation
- Governance workflows

In AI systems, it often appears when an early model output, risk signal, tool result, or policy interpretation is repeated, weighted, escalated, or expanded by downstream steps.

## Distinguish From

### Escalation Growth

Escalation Growth occurs when authority, impact, or consequence increases across sequential states.

Propagation Amplification specifically requires propagation through a chain and an increase during that propagation.

### Cross-Layer Escalation

Cross-Layer Escalation occurs when escalation crosses into another authority, boundary, or control layer.

Propagation Amplification may cross layers, but the key issue is increasing impact as the effect propagates.

### Density Spike

Density Spike occurs when structural concentration becomes disproportionately high in a localized region.

Propagation Amplification may create a density spike downstream, but it specifically names growing impact along a propagation path.

### Boundary Leakage

Boundary Leakage occurs when an effect crosses a declared boundary without authorization.

Propagation Amplification may include leakage, but it specifically concerns growth in scope or intensity.

## Related Lenses

Primary Lenses:

- Propagation Lens
- Escalation Gradient Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Boundary Compliance Lens

Use the Propagation Lens to trace the path of the effect through the system.

Use the Escalation Gradient Lens to inspect how impact, consequence, or authority increases along the path.

Use the Constraint Sufficiency Lens when declared propagation constraints are too weak to prevent amplification.

Use the Boundary Compliance Lens when amplified effects cross declared boundaries.

## Structural Limits

Propagation Amplification does not evaluate whether the original effect was correct, useful, or legitimate.

It does not say all amplification is wrong.

It only identifies amplification beyond declared bounds or without an explicit amplification rule.

A declared amplification rule, cap, damping rule, threshold, or propagation boundary may resolve the Pattern.

## Workbench Notes

This Pattern is useful when an effect starts small but becomes large as it travels through the system.

The key Workbench move is to separate three questions:

1. What effect is propagating?
2. How does it increase along the propagation path?
3. What rule authorizes or limits the amplification?

If the effect grows beyond declared bounds, the issue is Propagation Amplification.