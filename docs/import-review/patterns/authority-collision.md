---
layer: pattern
slug: authority-collision
title: Authority Collision
code: PAT-0100
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where multiple authorities claim governance over the same region without a declared precedence or resolution rule.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/authority-collision.md
search_intents:
  - authority collision
  - overlapping authority
  - conflicting governance
  - no precedence rule
  - multiple authorities
related_lenses:
  primary:
    - conflict-lens
    - authority-overlay-lens
  secondary:
    - reconciliation-lens
    - invariant-lens
---

# Authority Collision

## Definition

Authority Collision exists when multiple authorities claim governance over the same structural region without a declared precedence or resolution rule.

The structure does not fail because multiple authorities exist. It fails because their claims overlap in the same region and the system does not declare which authority governs, how the authorities combine, or how conflict is resolved.

## Visible Surface

Users may notice Authority Collision when two or more policies, roles, teams, systems, tools, models, reviewers, or governance layers appear to control the same decision or region.

Common visible signs include:

- Two policies give incompatible answers for the same case.
- Two teams or roles both claim ownership of the same workflow step.
- A tool, agent, or model path is governed by multiple authority sources.
- A user receives different permission outcomes from different authority layers.
- A human reviewer and automated rule disagree with no declared final authority.
- A workflow stalls because competing authorities must approve or deny the same region.
- A system behaves differently depending on which authority source is consulted first.

The visible problem is often described as “more than one authority is in charge here.”

## Structural Signature

Authority Collision usually contains these elements:

- Two or more authority declarations
- A shared structural scope
- Overlapping governance claims
- No declared precedence rule
- No merge, reconciliation, delegation, or conflict-resolution rule
- A decision, state, action, or interpretation that depends on the unresolved authority overlap

The authorities may be human, technical, organizational, procedural, policy-based, model-based, tool-based, or generated.

## Deterministic Test

Given a structural region, only one effective authority state should govern unless a merge or resolution rule is declared.

Ask:

1. What structural region is being governed?
2. Which authorities claim governance over that region?
3. Do their claims overlap?
4. Is there a declared precedence, merge, delegation, or reconciliation rule?
5. Can the system determine one effective authority state?

If multiple authorities apply simultaneously without a declared resolution rule, Authority Collision exists.

## Common Contexts

Authority Collision commonly appears in:

- Policy enforcement
- Permission systems
- Human review workflows
- Agent tool governance
- Model routing
- Escalation queues
- Cross-team ownership
- Compliance processes
- Safety gates
- Tenant administration
- Approval workflows
- Configuration inheritance
- Governance overlays
- Generated operational states
- Multi-system integrations

In AI systems, it often appears when policy, tool permissions, human review, model behavior, and automation each make authority claims over the same action or output.

## Distinguish From

### Missing Authority

Missing Authority occurs when no authority is declared for an active structural region.

Authority Collision is the opposite failure shape: more than one authority claims the same region and the system lacks a resolution rule.

### Authority Merge Conflict

Authority Merge Conflict occurs when multiple authority states are combined without a declared merge rule.

Authority Collision may lead to a merge conflict, but it specifically names overlapping authority claims before or during resolution.

### Authority Shadowing

Authority Shadowing occurs when a declared authority is silently overridden by another effective authority.

Authority Collision does not require one authority to shadow another. It requires unresolved overlapping authority claims.

### Authority-State Mismatch

Authority-State Mismatch occurs when observed structural state does not align with declared authority state.

Authority Collision may produce mismatch, but it specifically concerns multiple unresolved governance claims.

## Related Lenses

Primary Lenses:

- Conflict Lens
- Authority Overlay Lens

Secondary Lenses:

- Reconciliation Lens
- Invariant Lens

Use the Conflict Lens to inspect incompatible governance claims across the same structural region.

Use the Authority Overlay Lens to map all authority claims onto the region and identify overlap.

Use the Reconciliation Lens when the system needs a precedence, merge, delegation, or final authority rule.

Use the Invariant Lens when authority resolution must preserve required properties across states or transitions.

## Structural Limits

Authority Collision does not resolve the conflict.

It does not decide which authority is legitimate, ethical, correct, or preferred.

It only identifies overlapping authority claims without a declared resolution rule.

A declared precedence rule, merge rule, delegation rule, or explicit conflict state may resolve the Pattern.

## Workbench Notes

This Pattern is useful when the system cannot determine who or what governs a region because multiple authority claims overlap.

The key Workbench move is to separate three questions:

1. What region is governed?
2. Which authorities claim it?
3. What rule declares the effective authority?

If multiple authorities claim the region and no rule resolves them, the issue is Authority Collision.