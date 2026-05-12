---
layer: pattern
ontology_slug: authority-merge-conflict
title: Authority Merge Conflict
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where multiple authority states are combined over a
  shared scope without a declared merge, precedence, or reconciliation rule.
code: PAT-0220
---
# Authority Merge Conflict

## Definition

Authority Merge Conflict exists when multiple authority states are combined over a shared structural scope without a declared merge, precedence, or reconciliation rule.

The structure does not fail because multiple authority inputs exist. It fails because the system combines them while leaving the resulting authority state undefined, inconsistent, or unresolved.

## Visible Surface

Users may notice Authority Merge Conflict when permissions, approvals, ownership, policies, or governance states are combined but the system cannot determine which authority outcome applies.

Common visible signs include:

- Two approval sources produce different authority states for the same scope.
- A merged workflow inherits conflicting permissions.
- A user, agent, or tool gains and loses authority at the same time.
- Multiple policies apply but no merge rule decides the result.
- A combined configuration creates inconsistent ownership.
- A review process receives several authority inputs but no final authority state.
- Downstream behavior changes depending on which authority source is read first.

The visible problem is often described as “these authority states were combined, but nobody defined how they merge.”

## Structural Signature

Authority Merge Conflict usually contains these elements:

- Multiple authority inputs
- A shared structural scope
- A merge, composition, inheritance, aggregation, or handoff operation
- No declared precedence, merge, reconciliation, or conflict-resolution rule
- An undefined, inconsistent, or unstable resulting authority state

The authority inputs may come from users, roles, policies, tools, teams, systems, environments, tenants, workflows, or generated states.

## Deterministic Test

Given multiple authority inputs over a shared scope, the resulting authority state should be defined by a declared merge or reconciliation rule.

Ask:

1. What authority inputs are being combined?
2. What scope do they share?
3. What resulting authority state is expected?
4. What merge, precedence, or reconciliation rule defines that result?
5. Does the system produce a stable authority state?

If multiple authority inputs are combined and the resulting authority state is undefined or inconsistent, Authority Merge Conflict exists.

## Common Contexts

Authority Merge Conflict commonly appears in:

- Role inheritance
- Permission aggregation
- Policy composition
- Human approval workflows
- Agent tool permissions
- Multi-tenant configuration
- Cross-team ownership
- Escalation paths
- Environment overrides
- Workflow handoffs
- Governance rules
- Review queues
- Access control
- Delegated authority
- Generated operational states

In AI systems, it often appears when tool permissions, policy overlays, human approvals, and agent authority are combined without a declared final authority rule.

## Distinguish From

### Authority Collision

Authority Collision occurs when multiple authorities claim the same structural region without a declared precedence rule.

Authority Merge Conflict specifically occurs when authority states are being combined or merged and the resulting authority state is undefined.

### Missing Authority

Missing Authority occurs when no authority is declared for an active structural region.

Authority Merge Conflict has authority inputs. The problem is how those inputs combine.

### Authority State Mismatch

Authority State Mismatch occurs when declared and observed authority states differ.

Authority Merge Conflict may produce an authority state mismatch, but it specifically names the absence of a merge or reconciliation rule during combination.

### Reconciliation Failure

Reconciliation Failure occurs when known differences cannot be resolved into a coherent state.

Authority Merge Conflict is the authority-specific form where the unresolved difference involves combined authority states.

## Related Lenses

Primary Lenses:

- Authority Overlay Lens
- Reconciliation Lens

Secondary Lenses:

- Conflict Lens
- Invariant Lens

Use the Authority Overlay Lens to map all authority inputs onto the shared structural scope.

Use the Reconciliation Lens to inspect whether the authority inputs can be resolved into a coherent final state.

Use the Conflict Lens when authority inputs contradict each other directly.

Use the Invariant Lens when authority merge behavior must preserve required properties across states or handoffs.

## Structural Limits

Authority Merge Conflict does not evaluate whether any authority source is legitimate, ethical, or correct.

It does not decide what the merge rule should be.

It only identifies that multiple authority states were combined without a declared rule defining the resulting authority state.

A declared precedence rule, merge rule, reconciliation rule, or explicit conflict error may resolve the Pattern.

## Workbench Notes

This Pattern is useful when several authority sources converge and the system behaves unpredictably, inconsistently, or opaquely.

The key Workbench move is to separate three questions:

1. Which authority states are being combined?
2. What shared scope do they govern?
3. What rule defines the final authority state?

If the merge has no declared rule, the issue is Authority Merge Conflict.
