---
layer: issue
ontology_slug: fallback-authority-is-missing
title: Fallback Authority Is Missing
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The system does not declare who or what has authority when the primary owner, rule, tool, source, or decision path is unavailable or inconclusive.
code: ISS-0014
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0070
primary_pattern: missing-authority
patterns:
  - missing-authority
  - incomplete-declaration
  - circular-dependency
search_intents:
  - fallback authority is missing
  - no fallback approver
  - AI does not know who decides if primary fails
  - missing escalation authority
  - no backup decision owner
  - workflow has no fallback authority
---

## What This Looks Like

The primary authority, rule, source, tool, reviewer, or decision path is unavailable, unclear, or inconclusive, but the system does not declare what should happen next. The AI may stall, guess, escalate inconsistently, proceed without approval, or loop between options because no fallback authority is defined.

## Why It Matters

Fallback authority protects workflows when the normal path fails. Without it, edge cases and unavailable inputs become control failures. The user may not know whether to stop, continue, ask someone else, use a default rule, or treat the result as unresolved.

## Structural Signal

A primary authority path exists or is implied, but the structure does not define a valid authority when that path cannot decide. The issue is not that the fallback was used incorrectly; it is that the fallback authority is missing.

## Common Triggers

- A workflow assumes the primary reviewer, tool, or source will always be available
- Escalation rules say to escalate but do not name the authority
- The AI is told not to decide but is not told who should decide instead
- Approval paths have no default when the approver is absent
- Policy conflicts have no declared tie-breaker
- The system treats inconclusive evidence as permission to continue

## When to Use This Issue

Use this Issue when the normal decision path fails or cannot decide and the system has no declared fallback authority, escalation owner, or stop rule.

## When Not to Use This Issue

Do not use this Issue when a fallback exists but the AI ignores it. Do not use it when the user simply wants a second opinion. This Issue applies when the backup authority structure itself is missing.
