---
layer: issue
ontology_slug: too-many-tool-calls
title: Too Many Tool Calls
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI or agent makes more tool calls, searches, retrievals, API calls, or integration actions than the task requires or permits.
code: ISS-0061
category: mcp-tools-and-integrations
primary_cat_code: CAT-0040
secondary_cat_codes:
  - CAT-0100
primary_pattern: unbounded-scope
patterns:
  - unbounded-scope
  - escalation-growth
  - overreach
search_intents:
  - too many tool calls
  - AI called tools too many times
  - agent keeps calling tools
  - excessive MCP tool calls
  - AI overuses search tools
  - tool loop too many calls
---

## What This Looks Like

The AI or agent calls tools more often than the task needs. It may keep searching, retrieving, querying APIs, opening files, calling MCP tools, or repeating tool calls even after enough information is available. The user may see cost, latency, noise, or workflow complexity increase without a clear benefit.

## Why It Matters

Tool calls are not just text. They can cost money, consume time, affect rate limits, expose data, modify state, or create review burden. Too many tool calls can turn a bounded request into an uncontrolled execution path, especially when an agent keeps looking for more evidence or more certainty.

## Structural Signal

Tool use exceeds the declared or reasonable action boundary for the task. The issue is not that a tool was used; it is that tool execution is not bounded by a stopping rule, source limit, cost limit, or sufficiency condition.

## Common Triggers

- The task lacks a clear tool-use budget or stop condition
- The agent treats uncertainty as permission to keep searching
- Retrieval or search results create new branches instead of narrowing the task
- The prompt rewards exhaustive checking without defining enough
- Tool results are not summarized into a stable state before the next call
- The workflow does not distinguish required tool calls from optional exploration

## When to Use This Issue

Use this Issue when tool use itself becomes excessive, unbounded, repetitive, or disproportionate to the task.

## When Not to Use This Issue

Do not use this Issue when multiple tool calls are required by the task and are bounded. Do not use it when the problem is one invalid tool call. This Issue applies when tool-call volume or repetition becomes the failure.
