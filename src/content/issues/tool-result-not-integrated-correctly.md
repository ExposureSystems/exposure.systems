---
layer: issue
ontology_slug: tool-result-not-integrated-correctly
title: Tool Result Not Integrated Correctly
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI receives a tool result but misreads, ignores, overwrites, misplaces, or fails to incorporate it correctly into the final output or workflow state.
code: ISS-0019
category: mcp-tools-and-integrations
primary_cat_code: CAT-0040
secondary_cat_codes:
  - CAT-0070
  - CAT-0010
primary_pattern: orphaned-structure
patterns:
  - orphaned-structure
  - interface-mismatch
  - contract-drift
search_intents:
  - tool result not integrated correctly
  - AI ignored tool result
  - agent misread tool output
  - tool result missing from final answer
  - AI overwrote tool response
  - tool output not reflected in answer
---

## What This Looks Like

A tool, connector, MCP call, retrieval step, calculation, or external system returns a result, but the AI does not incorporate it correctly. The final answer may ignore the result, contradict it, summarize it incorrectly, place it under the wrong field, or continue using an older assumption after the tool has returned newer information.

## Why It Matters

Tool use only helps if the result changes the workflow state correctly. If the AI fails to integrate the returned result, users may trust an answer that appears tool-backed but is not actually governed by the tool output. This can break handoffs, reviews, structured output, and downstream decisions.

## Structural Signal

A tool result exists, but it is not connected to the final output or next workflow state in a stable way. The issue is not just a bad answer; it is a broken handoff between external result and AI response.

## Common Triggers

- The tool result is long, nested, partial, or difficult to align with the user request
- The model continues from its prior assumption instead of reconciling with the result
- The workflow does not declare how tool results should override earlier text
- The AI summarizes the result but loses required fields or constraints
- Multiple tool calls return results that need reconciliation
- The final response is generated from context around the tool result instead of the tool result itself

## When to Use This Issue

Use this Issue when a tool or integration returns information, but the AI’s final answer or next step does not correctly reflect that returned result.

## When Not to Use This Issue

Do not use this Issue when the tool call itself was invalid, when the tool was unavailable, or when the tool returned bad data. This Issue applies after a result exists and the AI fails to integrate it correctly.
