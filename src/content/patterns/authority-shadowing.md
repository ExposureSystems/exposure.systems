---
layer: pattern
ontology_slug: authority-shadowing
title: Authority Shadowing
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where a declared authority is functionally overridden
  by another authority without an explicit override rule.
code: PAT-0230
---
# Authority Shadowing

## Definition

Authority Shadowing exists when a declared authority is functionally overridden by another authority without an explicit override rule.

The structure does not fail because authority layers exist. It fails because the authority that appears to govern a region is not the authority that actually controls behavior, and the override is not declared.

## Visible Surface

Users may notice Authority Shadowing when formal ownership, approval, policy, or governance appears to say one thing, but actual system behavior follows another hidden or secondary authority.

Common visible signs include:

- A documented owner cannot actually control the outcome.
- A policy says one authority governs, but implementation behavior follows another source.
- A human approval is bypassed by an automated rule.
- A team owns a workflow on paper, but another team’s configuration determines behavior.
- A tool, agent, or model path overrides declared governance without exposing the override.
- A permission hierarchy exists, but effective control comes from a lower, hidden, or unrelated layer.
- Debugging reveals that the active authority is not the declared authority.

The visible problem is often described as “the real authority is somewhere else.”

## Structural Signature

Authority Shadowing usually contains these elements:

- A declared primary authority
- Another authority layer, rule, system, role, configuration, model path, or operational mechanism
- Effective control exercised by the non-primary authority
- No declared override, delegation, escalation, or precedence rule
- A mismatch between declared governance and effective governance

The shadowing authority may be technical, procedural, organizational, policy-based, automated, or implicit.

## Deterministic Test

If effective governance differs from the declared authority hierarchy, an explicit override or delegation rule should explain the difference.

Ask:

1. What authority is declared as governing the region?
2. What authority actually controls the observed behavior?
3. Where does effective control differ from declared control?
4. Is there an explicit override, delegation, escalation, or precedence rule?
5. Can users or downstream systems identify the effective authority?

If effective governance differs from declared hierarchy without an explicit override, Authority Shadowing exists.

## Common Contexts

Authority Shadowing commonly appears in:

- Permission systems
- Policy enforcement
- Human approval workflows
- Agent tool governance
- Model routing
- Safety gates
- Feature flags
- Environment overrides
- Escalation paths
- Cross-team systems
- Configuration layers
- Compliance workflows
- Review queues
- Runtime controls
- Generated operational states

In AI systems, it often appears when visible governance says a human, policy, or role controls behavior, but effective control comes from hidden routing, model behavior, tool configuration, or automation.

## Distinguish From

### Authority Collision

Authority Collision occurs when multiple authorities claim the same region without a precedence rule.

Authority Shadowing occurs when one declared authority appears primary, but another authority functionally overrides it without declaration.

### Authority Merge Conflict

Authority Merge Conflict occurs when multiple authority states are combined without a declared merge rule.

Authority Shadowing does not require a merge. It requires undeclared effective override.

### Missing Authority

Missing Authority occurs when no authority is declared for an active region.

Authority Shadowing has a declared authority, but that authority is not the effective authority.

### Authority State Mismatch

Authority State Mismatch occurs when declared and observed authority states differ.

Authority Shadowing is a specific cause of mismatch where another authority layer silently overrides the declared one.

## Related Lenses

Primary Lenses:

- Authority Overlay Lens
- Conflict Lens

Secondary Lenses:

- Provenance Trace Lens
- Reconciliation Lens

Use the Authority Overlay Lens to compare declared authority layers with effective control.

Use the Conflict Lens when the shadow authority contradicts the declared authority.

Use the Provenance Trace Lens to trace where effective control actually came from.

Use the Reconciliation Lens when declared and effective authority need to be resolved into an explicit rule.

## Structural Limits

Authority Shadowing does not evaluate whether the declared hierarchy is correct, legitimate, or desirable.

It does not decide which authority should control the region.

It only identifies that effective control differs from declared authority without an explicit override rule.

A declared override, delegation, escalation, or precedence rule may resolve Authority Shadowing.

## Workbench Notes

This Pattern is useful when a system appears governed by one authority but behaves as if governed by another.

The key Workbench move is to separate three questions:

1. Who is declared as the authority?
2. Who or what actually controls the outcome?
3. Is the difference explicitly declared?

If the effective authority is different and the override is undeclared, the issue is Authority Shadowing.
