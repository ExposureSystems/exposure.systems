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

# Tool Call Contract Mismatch

## What This Looks Like

The AI or agent attempts to call a tool, function, or integration with arguments, names, types, modes, or shapes that the tool does not accept. The visible result may be a failed call, rejected parameters, or a tool error.

## Why It Matters

Tools create a contract between the AI and the outside system. If the call does not match that contract, the tool may fail, produce unreliable results, or block the workflow even when the user’s request is otherwise clear.

## Structural Signal

A declared tool interface exists, but the agent’s call does not align with it. The failure sits at the boundary between generated tool use and the tool’s required contract.

## Common Triggers

- Tool schema not visible or not understood
- Old tool schema used after an update
- Ambiguous tool-selection instructions
- Arguments inferred from natural language instead of the contract
- Mode or runtime differences not reflected in the prompt

## When to Use This Issue

Use this Issue when the central failure is the tool call itself: what was called, how it was called, or whether it matched the declared interface.

## When Not to Use This Issue

Do not use this Issue when the tool call succeeds but the result is ignored, misread, or poorly integrated. Use `tool-result-not-integrated-correctly` for that surface.
