---
layer: ai_adj_issue
ontology_slug: tool-effect-crosses-target-boundary
title: Tool Effect Crosses Target Boundary
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A tool, connector, function, or integration affects an object, file, record, workspace, or state surface beyond the intended target.
code: ADJ-0011
related_issues:
  - action-changed-something-else-too
  - ai-touches-unrelated-scope
  - agent-modified-unrelated-state
  - tool-can-act-without-responsible-authority
  - file-bounded-task-uses-outside-content
search_intents:
  - tool effect crosses target boundary
  - AI tool changed wrong target
  - connector affected unrelated record
  - tool action crossed scope boundary
  - agent tool modified another file
  - integration side effect outside target
---

## What This Looks Like

A tool, connector, function, MCP surface, or integration is called for one target, but its effect reaches another object, file, record, workspace, branch, state surface, or workflow area. The user may see the requested action happen, but another area changes too.

## Why Users Blame AI

The effect appears after an AI or agent action, so the user may experience it as “the AI changed the wrong thing.” The underlying cause may be tool behavior, broad permissions, shared state, default targets, hidden side effects, connector configuration, or an integration whose effect boundary is wider than the prompt described.

## What to Check First

- Whether the tool has a broader default target than the user intended
- Whether the agent had access to more files, records, or workspaces than needed
- Whether the tool call included the correct target identifier
- Whether the integration changes shared state as a side effect
- Whether read scope and write scope are separated
- Whether the workflow compares intended change surface to actual change surface

## Boundary

Use this AI-Adjacent Issue when a tool effect crosses the intended target boundary. If the agent modified unrelated state, use the related Workbench Issue for agent-modified unrelated state. If the requested action changed something else too, use the related side-effect Issue.
