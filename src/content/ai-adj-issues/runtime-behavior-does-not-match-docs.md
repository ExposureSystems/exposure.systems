---
layer: ai_adj_issue
ontology_slug: runtime-behavior-does-not-match-docs
title: Runtime Behavior Does Not Match Docs
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Documented behavior, fields, tool schemas, permissions, or runtime capabilities do not match what actually happens during use.
code: ADJ-0005
related_issues:
  - actual-policy-differs-from-declared-policy
  - output-changed-without-declared-change
  - prompt-behavior-changed-without-version-change
  - same-contract-name-has-different-meanings
search_intents:
  - runtime behavior does not match docs
  - docs do not match runtime
  - documented behavior is wrong
  - API docs say one thing but runtime does another
---

# Runtime Behavior Does Not Match Docs

## What This Looks Like

A documented field, behavior, schema, permission, tool capability, or runtime rule does not match what actually happens in use.

## Why Users Blame AI

The mismatch often appears while using an AI feature, agent, tool, or integration. Users may assume the AI is wrong, when the immediate cause may be documentation drift, version mismatch, runtime behavior, or product implementation.

## What to Check First

- Whether the documentation applies to the current version
- Whether the runtime or product surface has changed
- Whether the tool schema differs from the documented schema
- Whether the behavior is gated by permissions, mode, or environment
- Whether the workflow still assumes an older contract

## Related Workbench Issues

Related Workbench Issues are derived from `related_issues`.