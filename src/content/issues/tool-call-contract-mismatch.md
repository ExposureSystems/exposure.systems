---
layer: issue
ontology_slug: tool-call-contract-mismatch
title: Tool Call Contract Mismatch
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI or agent calls a tool with names, arguments, types, modes, or shapes that do not match the declared tool interface.
code: ISS-0017
category: mcp-tools-and-integrations
primary_cat_code: CAT-0040
secondary_cat_codes:
  - CAT-0010
primary_pattern: interface-mismatch
patterns:
  - interface-mismatch
  - schema-breakage
  - compatibility-violation
search_intents:
  - AI tool call wrong arguments
  - tool call contract mismatch
  - function call invalid arguments
  - AI called tool with wrong schema
  - agent used wrong tool parameters
  - tool choice is underspecified
---

## What This Looks Like

The AI or agent tries to call a tool, function, MCP endpoint, connector, or integration with a name, argument, mode, type, or payload shape that does not match the declared interface. The tool may reject the call, run with missing data, return an error, or behave differently than the user expected.

## Why It Matters

Tool calls are boundary crossings. When the call does not match the tool contract, the failure can block execution, corrupt downstream state, hide the real cause behind a generic error, or make the agent appear less capable than it is. The problem may sit between the AI output and the tool interface, not inside either one alone.

## Structural Signal

A declared tool interface exists, but the observed call does not conform to that interface. The issue is not simply that the tool failed; it is that the AI-generated call and the tool’s declared contract do not line up.

## Common Triggers

- Tool names, argument names, or enum values are similar but not identical
- Required arguments are omitted or placed in the wrong structure
- The model uses a tool schema from a different version, mode, or runtime
- Prompt instructions describe the tool differently than the actual interface
- The agent chooses a tool before it has enough input to call it correctly
- The tool accepts structured input but the AI returns a human-readable approximation

## When to Use This Issue

Use this Issue when the central failure is a mismatch between the tool call produced by the AI or agent and the declared tool, function, connector, or MCP interface.

## When Not to Use This Issue

Do not use this Issue when the tool contract is correct but the tool itself is unavailable, disabled, or unsupported in the current environment. Do not use it when the output is invalid JSON but no tool interface is involved.
