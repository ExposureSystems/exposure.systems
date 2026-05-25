---
layer: ai_adj_issue
ontology_slug: permission-change-not-applied
title: Permission Change Not Applied
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A permission, approval, role, policy, or access change is made but the AI, agent, tool, or workflow continues behaving as if the old permission state still applies.
code: ADJ-0010
related_issues:
  - revoked-approval-still-treated-as-active
  - policy-update-not-reflected-in-output
  - actual-policy-differs-from-declared-policy
  - behavior-does-not-match-declared-role
  - declared-owner-cannot-control-outcome
search_intents:
  - permission change not applied
  - AI still uses old permission
  - permission update not reflected
  - role change not applied to agent
  - approval change not active
  - access change not reflected in AI workflow
---

## What This Looks Like

A permission, approval, role, access rule, policy, or workspace setting changes, but the AI, agent, tool, or workflow continues acting as if the old state still applies. A revoked permission may still appear active, a new permission may not take effect, or a changed role may not alter behavior.

## Why Users Blame AI

The behavior appears in the AI workflow, so the user may think the AI ignored the permission change. The underlying cause may be cached state, delayed propagation, connector state, account permissions, role mapping, stale policy context, or a runtime that has not received the updated authority state.

## What to Check First

- Whether the permission change was applied in the correct account, workspace, or environment
- Whether the connector or tool needs reauthorization
- Whether the runtime is using cached permission state
- Whether role changes apply to the agent, tool, and workflow layers
- Whether revoked approval is still present in prompt or workflow context
- Whether docs and runtime behavior reflect the same permission model

## When This Is AI-Adjacent

Use this AI-Adjacent Issue when a permission or authority change appears not to apply at runtime. If a revoked approval continues to govern behavior, use the related Workbench Issue for revoked approval still treated as active. If declared policy and actual behavior differ, use that related Issue.
