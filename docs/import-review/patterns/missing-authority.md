---
layer: pattern
slug: missing-authority
title: Missing Authority
code: PAT-0120
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where a region, action, state, or decision path exists without a declared governing authority.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/missing-authority.md
search_intents:
  - missing owner
  - no declared authority
  - unowned workflow
  - authority gap
  - missing governance
related_lenses:
  primary:
    - authority-overlay-lens
    - conflict-lens
  secondary:
    - invariant-lens
    - reconciliation-lens
---

# Missing Authority

## Definition

Missing Authority exists when a structural region, action, state, or decision path exists without a declared governing authority.

The structure does not fail because an authority is weak, illegitimate, or contested. It fails because no authority is declared for a region that still participates in the system.

## Visible Surface

Users may notice Missing Authority when something can happen, change, route, execute, approve, deny, or persist without a clear owner.

Common visible signs include:

- A workflow step exists but nobody owns its decision boundary.
- A tool can act without a declared responsible authority.
- A model path or agent path can produce effects without a governing rule.
- A content, data, or permission region exists without ownership.
- A failure occurs and no team, role, policy, or authority can be identified as responsible.
- A state can be created or modified but no authority is named for validating it.

The visible problem is often described as “nobody owns this,” “this is ungoverned,” or “this fell between teams.”

## Structural Signature

Missing Authority usually contains these elements:

- A structural node, region, action, state, route, or decision path
- Participation in execution, persistence, routing, policy, or user-visible behavior
- No declared governing authority for that region
- No ownership mapping connecting the region to a responsible role, rule, system, or authority
- No fallback authority for unresolved cases

The region must matter structurally. A random unused fragment does not necessarily create Missing Authority unless it can affect system behavior, interpretation, accountability, or control.

## Deterministic Test

Given a structural graph, every active region should map to a declared authority.

Ask:

1. What structural region, action, state, or decision path is being inspected?
2. Can it affect execution, routing, persistence, user experience, policy, or accountability?
3. What authority governs it?
4. Where is that authority declared?
5. If no authority is declared, is there a fallback authority?

If the region is active and no governing or fallback authority is declared, Missing Authority exists.

## Common Contexts

Missing Authority commonly appears in:

- Agent tool execution
- Human approval workflows
- Data ownership
- Permission boundaries
- Escalation queues
- Policy exceptions
- Moderation workflows
- Generated content ownership
- Model routing
- Audit logging
- Evaluation ownership
- Cross-team systems
- Multi-tenant configuration
- Experimental features that become operational

In AI systems, it often appears when a tool, model, agent, or workflow can act before the system defines who or what governs that action.

## Distinguish From

### Authority Collision

Authority Collision occurs when multiple authorities claim the same structural region without a declared precedence rule.

Missing Authority is the opposite failure shape: no authority is declared for the region.

### Asymmetric Structure

Asymmetric Structure occurs when comparable regions receive unequal treatment without a declared differentiation rule.

Missing Authority can create asymmetry if one region has authority and a comparable region does not, but Missing Authority specifically names the absence of declared governance.

### Policy Gap

A policy gap occurs when a case is not covered by a rule or policy.

Missing Authority is narrower. It concerns the absence of declared authority over a structural region, not every possible missing rule.

### Orphaned Structure

Orphaned Structure usually describes structure detached from an expected parent, reference, or lifecycle owner.

Missing Authority specifically asks whether governance authority is declared.

## Related Lenses

Primary Lenses:

- Authority Overlay Lens
- Conflict Lens

Secondary Lenses:

- Invariant Lens
- Reconciliation Lens

Use the Authority Overlay Lens to map declared authorities onto observed structural regions and find gaps.

Use the Conflict Lens when missing authority creates unresolved contradiction or incompatible handling.

Use the Invariant Lens when every active region is expected to remain governed across states or transitions.

Use the Reconciliation Lens when assigning or restoring authority requires resolving competing structural claims.

## Structural Limits

Missing Authority does not evaluate whether an authority is legitimate, ethical, legal, or effective.

It does not decide who should govern the region.

It only identifies that an active structural region lacks a declared governing authority.

A declared authority may resolve Missing Authority, but that does not automatically prove the authority is correct or sufficient.

## Workbench Notes

This Pattern is useful when a user cannot determine who owns a decision, workflow step, tool action, data region, or generated state.

The key Workbench move is to separate three questions:

1. Does the region exist and affect the system?
2. Is there a declared authority for it?
3. Is that authority connected to the region in the structure?

If the region is active and no authority is declared, the problem is Missing Authority.