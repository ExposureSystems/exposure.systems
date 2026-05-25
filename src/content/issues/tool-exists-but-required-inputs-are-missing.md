---
layer: issue
ontology_slug: tool-exists-but-required-inputs-are-missing
title: Tool Exists but Required Inputs Are Missing
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A usable tool or integration exists, but the AI or agent does not have the required inputs, permissions, fields, identifiers, or context needed to call it correctly.
code: ISS-0020
category: mcp-tools-and-integrations
primary_cat_code: CAT-0040
secondary_cat_codes:
  - CAT-0120
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - constraints-underspecified
  - interface-mismatch
search_intents:
  - tool exists but required inputs are missing
  - AI cannot call tool missing inputs
  - agent needs required tool fields
  - tool available but not enough information
  - missing inputs for MCP tool
  - AI tool call lacks required parameters
---

## What This Looks Like

A tool, connector, function, or MCP capability is available, but the AI cannot call it correctly because required inputs are missing. The missing piece may be an identifier, account, file path, date range, permission, required field, user selection, mode, or other value needed by the tool contract.

## Why It Matters

Users may experience this as the AI failing to use a tool, but the actual problem is that the tool requires inputs the system does not yet have. If the gap is not surfaced clearly, the agent may guess, call the tool incorrectly, stall, or produce an answer without using the tool that should have governed the work.

## Structural Signal

The capability exists, but the input declaration is incomplete. The issue is not tool absence; it is that the system lacks the required values or authority needed to cross the tool interface correctly.

## Common Triggers

- Required tool fields are not requested from the user before execution
- The prompt assumes the system already knows an identifier, file, account, or target
- The agent chooses a tool before gathering minimum inputs
- Tool schema requirements are hidden from the user-facing task
- Permissions or runtime context are required but not declared as inputs
- The workflow has no fallback when required inputs are unavailable

## When to Use This Issue

Use this Issue when the tool exists and could perform the task, but the AI or agent lacks required inputs, identifiers, permissions, or context needed to call it correctly.

## When Not to Use This Issue

Do not use this Issue when the tool is unsupported, disabled, or unavailable in the current mode. Do not use it when the tool was called with the wrong shape despite all required inputs being available.
