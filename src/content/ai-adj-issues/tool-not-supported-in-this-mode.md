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
---

# Tool Not Supported in This Mode

## What This Looks Like

A user expects an AI system, agent, or MCP surface to use a tool, but the tool is unavailable, disabled, unsupported, or missing in the current mode.

## Why Users Blame AI

The failure often appears during an AI workflow, so users may experience it as “the AI cannot use the tool.” The underlying cause may be app mode, permissions, product surface, connector state, or runtime capability.

## What to Check First

- Whether the tool is available in the current mode
- Whether the integration or connector is enabled
- Whether the runtime supports the requested tool call
- Whether required inputs or permissions are missing
- Whether the user is in a product surface that exposes tools

## Related Workbench Issues

Related Workbench Issues are derived from `related_issues`.