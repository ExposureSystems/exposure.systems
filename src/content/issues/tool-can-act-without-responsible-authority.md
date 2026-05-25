---
layer: issue
ontology_slug: tool-can-act-without-responsible-authority
title: Tool Can Act Without Responsible Authority
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A tool, connector, function, or integration can perform an action without a declared responsible authority for that action.
code: ISS-0108
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0040
primary_pattern: missing-authority
patterns:
  - missing-authority
  - undeclared-side-effect
  - interface-mismatch
search_intents:
  - tool can act without responsible authority
  - AI tool has no responsible authority
  - tool action lacks owner
  - MCP tool can act without approval
  - connector action has no authority
  - tool permission without responsibility
---

## What This Looks Like

A tool, connector, function, or integration can change state, send data, update records, trigger workflows, or perform actions without a clear responsible authority. The tool may be callable by an agent, but the system does not declare who owns the action, who approved it, or who can reverse it.

## Why It Matters

Tools turn AI decisions into operational effects. If a tool can act without responsible authority, the workflow may allow state changes without accountability. This creates risk around permissions, approvals, audit trails, and recovery when something goes wrong.

## Structural Signal

A tool action exists without a connected authority owner. The issue is not only that the tool can act; it is that the action is not governed by a declared approval or responsibility structure.

## Common Triggers

- Tool access is granted broadly without action-level ownership
- The tool schema declares what can be done but not who authorizes it
- Agent permissions are inherited from a workspace or account
- Tool calls can modify state without a review gate
- Audit metadata records execution but not responsible authority
- The workflow treats tool availability as permission to act

## When to Use This Issue

Use this Issue when a tool, connector, function, or integration can perform an action without a declared responsible owner, authority, or approval path.

## When Not to Use This Issue

Do not use this Issue when the tool fails because of missing inputs or wrong schema. Do not use it when the authority is declared and the tool simply executes incorrectly.
