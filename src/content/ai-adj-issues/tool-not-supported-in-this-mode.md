---
layer: ai_adj_issue
ontology_slug: tool-not-supported-in-this-mode
title: Tool Not Supported in This Mode
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A tool or capability appears unavailable in the current mode, environment, product surface, or runtime context.
code: ADJ-0001
related_issues:
  - tool-call-contract-mismatch
  - tool-exists-but-required-inputs-are-missing
  - agent-cannot-choose-tool-without-tool-result
search_intents:
  - tool not supported in this mode
  - AI tool not available
  - agent cannot use tool
  - MCP tool not showing up
  - connector not available in this mode
  - ChatGPT cannot use tool here
---

## What This Looks Like

A user expects an AI system, agent, MCP surface, connector, or product mode to use a tool, but the tool is unavailable, disabled, unsupported, hidden, or not exposed in the current context. The same tool may appear in another mode, account, workspace, model, or product surface.

## Why Users Blame AI

The failure usually appears inside an AI workflow, so the user experiences it as “the AI cannot use the tool.” The underlying cause may be product mode, account state, connector availability, permissions, workspace configuration, runtime support, or a tool surface that is not exposed to the current agent.

## What to Check First

- Whether the tool is available in the current mode or product surface
- Whether the connector, integration, or MCP server is enabled
- Whether the user has permission to access the tool
- Whether the selected model or agent runtime supports tool use
- Whether required tool inputs are missing
- Whether the same task works in another account, workspace, or environment

## When This Is AI-Adjacent

Use this AI-Adjacent Issue when the tool appears unavailable because of environment, mode, permission, runtime, or product-surface constraints. If the tool is available but the AI calls it with the wrong name, arguments, or schema, use the related Workbench Issue for tool call contract mismatch.
