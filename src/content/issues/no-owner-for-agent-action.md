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
  - undeclared-side-effect
  - authority-state-mismatch
search_intents:
  - no owner for agent action
  - AI agent acted without owner
  - agent action has no accountable person
  - who approved the agent action
  - agent changed something without responsibility
  - AI action has no decision owner
---

## What This Looks Like

An agent takes or prepares an action that affects a file, tool, workflow, system state, customer record, task, or downstream step, but there is no clear owner responsible for that action. The user may not know who approved it, who can reverse it, who is accountable for the outcome, or whose authority the agent was acting under.

## Why It Matters

Agent actions need accountability. When no owner is declared, an action can happen without a stable decision path, review point, or recovery route. This becomes especially risky when the action modifies state, triggers tools, affects other people, or becomes part of an automated workflow.

## Structural Signal

The system permits or proposes an action, but the authority behind that action is missing or not connected to a responsible owner. The issue is not only that the action may be wrong; it is that the action lacks an accountable authority structure.

## Common Triggers

- The agent is allowed to act without a declared human or system owner
- Tool permissions are granted without assigning responsibility for use
- A workflow step can modify state without an approval path
- The agent inherits authority from context that is not visible to the user
- Review responsibility is assumed but not encoded
- The system separates action execution from accountability

## When to Use This Issue

Use this Issue when an agent action can affect a system, workflow, or record without a declared owner, approval authority, or accountable decision path.

## When Not to Use This Issue

Do not use this Issue when the owner is clear but made a bad decision, or when the problem is only that the tool call failed. This Issue applies when responsibility for the action itself is missing, unclear, or structurally disconnected.
