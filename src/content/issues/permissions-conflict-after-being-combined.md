---
layer: issue
ontology_slug: permissions-conflict-after-being-combined
title: Permissions Conflict After Being Combined
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Permissions, approvals, roles, policies, or authority rules that seem valid separately conflict when combined in the same workflow or AI action.
code: ISS-0016
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0060
primary_pattern: authority-collision
patterns:
  - authority-collision
  - authority-merge-conflict
  - authority-shadowing
search_intents:
  - permissions conflict after being combined
  - AI permissions conflict
  - approvals conflict in workflow
  - combined rules create permission problem
  - roles conflict after merge
  - authority rules contradict each other
---

## What This Looks Like

Two or more permissions, approvals, roles, policies, or authority rules each appear valid on their own, but conflict when the AI or workflow combines them. The system may allow and block the same action, route to the wrong authority, apply one rule while hiding another, or produce an approval state that cannot be resolved cleanly.

## Why It Matters

Permission conflicts create unstable control. A workflow may appear governed until multiple authority sources interact. Once combined, the system may not know which permission wins, which approval is required, or whether the action is allowed at all. That can lead to skipped approvals, unnecessary blocks, or actions taken under the wrong authority.

## Structural Signal

Multiple authority structures occupy the same decision space without a declared merge rule. The issue is not that one permission is missing; it is that separately valid permissions become incompatible when combined.

## Common Triggers

- Role permissions and workflow permissions are defined in different places
- A policy allows an action while a tool permission blocks it
- Approval rules overlap without a precedence order
- Inherited permissions conflict with local restrictions
- The AI receives combined instructions from multiple authority sources
- A merged workflow preserves rules that were only valid in separate contexts

## When to Use This Issue

Use this Issue when the central problem is a conflict between combined permissions, approvals, roles, or authority rules that were not designed to operate together.

## When Not to Use This Issue

Do not use this Issue when a single permission is simply missing, expired, or denied. Do not use it when the problem is ordinary user access failure. This Issue applies when the conflict emerges from combining authority structures.
