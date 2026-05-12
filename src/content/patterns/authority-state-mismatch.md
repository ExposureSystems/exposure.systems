---
layer: pattern
ontology_slug: authority-state-mismatch
title: Authority-State Mismatch
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where observed system state no longer aligns with the
  declared authority state that is supposed to govern it.
code: PAT-0240
---
# Authority-State Mismatch

## Definition

Authority-State Mismatch exists when observed system state no longer aligns with the declared authority state that is supposed to govern it.

The structure does not fail because authority changed or state changed. It fails when authority and structural state are expected to move together, but the observed state does not match the declared authority condition.

## Visible Surface

Users may notice Authority-State Mismatch when permissions, ownership, approval, policy, or governance changes appear to have happened, but the actual system state does not reflect them.

Common visible signs include:

- A user is removed from authority but still retains effective access.
- A policy update is declared but system behavior continues under the old state.
- A workflow says approval was revoked but downstream state still treats it as approved.
- A tool or agent acts under an authority state that no longer applies.
- A role, tenant, project, or environment state does not match declared governance.
- A structural change occurs without the corresponding authority update.
- An authority update occurs but dependent state is not realigned.

The visible problem is often described as “the authority says one thing, but the state shows another.”

## Structural Signature

Authority-State Mismatch usually contains these elements:

- A declared authority state or authority update
- A structural state, object, permission, route, action, or workflow governed by that authority
- A mismatch between the declared authority state and observed structural state
- Divergent mapping between authority and structure
- No declared transition, lag window, migration rule, or exception explaining the mismatch

The mismatch may involve access, approval, ownership, policy, tool authority, agent authority, escalation rights, or governance state.

## Deterministic Test

If structural modifications occur under an authority model, the observed structural state should align with the declared authority state.

Ask:

1. What authority state is declared?
2. What structural state is governed by that authority?
3. What state is observed?
4. Where does observed state diverge from declared authority?
5. Is there a declared transition period, migration rule, or exception?

If observed structural state and declared authority state diverge without a declared explanation, Authority-State Mismatch exists.

## Common Contexts

Authority-State Mismatch commonly appears in:

- Permission changes
- Role updates
- Ownership transfers
- Approval workflows
- Revocation flows
- Policy updates
- Agent tool authority
- Model routing authority
- Human review queues
- Tenant state
- Project or workspace state
- Escalation paths
- Configuration rollouts
- Governance records
- Audit logs

In AI systems, it often appears when policy, tool authority, human approval, or agent permissions are updated but active workflow state continues under stale or incompatible authority.

## Distinguish From

### Authority Shadowing

Authority Shadowing occurs when a declared authority is functionally overridden by another authority without explicit declaration.

Authority-State Mismatch does not require a shadow authority. It requires misalignment between declared authority state and observed structural state.

### Contract Drift

Contract Drift occurs when a declared contract changes but connected structures do not update in sync.

Authority-State Mismatch is authority-specific. It concerns authority state and structural state alignment.

### Missing Authority

Missing Authority occurs when no governing authority is declared for an active region.

Authority-State Mismatch has a declared authority state. The problem is that the observed structure does not align with it.

### Silent Mutation

Silent Mutation occurs when structure changes without being declared or surfaced.

Authority-State Mismatch may involve silent mutation, but the core issue is misalignment with declared authority state.

## Related Lenses

Primary Lenses:

- Authority Overlay Lens
- Invariant Lens

Secondary Lenses:

- Conflict Lens
- Reconciliation Lens

Use the Authority Overlay Lens to compare declared authority state against observed structural state.

Use the Invariant Lens when authority-state alignment must remain true across transitions.

Use the Conflict Lens when authority state and observed state imply incompatible outcomes.

Use the Reconciliation Lens when authority and structural state need to be brought back into a coherent mapping.

## Structural Limits

Authority-State Mismatch does not evaluate whether the authority state is legitimate, ethical, or correct.

It does not decide which state should win.

It only identifies that observed structural state does not align with declared authority state.

A declared transition window, migration rule, synchronization process, or explicit exception may resolve the Pattern.

## Workbench Notes

This Pattern is useful when the system’s declared governance does not match the actual state users, tools, agents, or workflows experience.

The key Workbench move is to separate three questions:

1. What authority state is declared?
2. What structural state should align with it?
3. What state is actually observed?

If the observed state diverges without a declared explanation, the issue is Authority-State Mismatch.
