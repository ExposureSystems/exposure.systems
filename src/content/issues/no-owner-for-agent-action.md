---
layer: issue
ontology_slug: no-owner-for-agent-action
title: No Owner for Agent Action
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An agent action can affect the system without a declared responsible owner, authority, or accountable decision path.
code: ISS-0012
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0030
primary_pattern: missing-authority
patterns:
  - missing-authority
  - overreach
  - authority-state-mismatch
search_intents:
  - no owner for agent action
  - who owns this AI action
  - agent acted but nobody is responsible
  - AI action has no responsible owner
  - unowned agent action
---

# No Owner for Agent Action

## What This Looks Like

An agent can perform or trigger an action, but the user cannot tell who approved it, who owns it, or who is responsible for reviewing what happened.

## Why It Matters

Agent actions can affect files, tools, workflows, records, permissions, outputs, or downstream systems. Without an owner, it becomes difficult to review, approve, reverse, audit, or assign responsibility for the action.

## Structural Signal

An agent action affects a system, workflow, record, or decision, but no responsible owner or authority path is declared. Accountability is unclear after the action happens.

## Common Triggers

- Agent permissions granted without ownership rules
- Tool actions exposed without review responsibility
- Workflow steps missing decision owners
- Automation allowed to act before authority is resolved
- Handoff gaps between human and agent control

## When to Use This Issue

Use this Issue when the core question is: “Who owns this agent action?”

## When Not to Use This Issue

Do not use this Issue to decide whether the action itself was correct. This Issue identifies the missing ownership or authority structure around the action.
