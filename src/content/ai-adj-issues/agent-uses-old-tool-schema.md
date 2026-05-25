---
layer: ai_adj_issue
ontology_slug: agent-uses-old-tool-schema
title: Agent Uses Old Tool Schema
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An agent, prompt, workflow, or integration continues using an older tool schema after the tool contract has changed.
code: ADJ-0004
related_issues:
  - tool-call-contract-mismatch
  - version-change-breaks-existing-prompt
  - prompt-changed-but-workflow-did-not
  - same-contract-name-has-different-meanings
  - output-breaks-the-next-step
search_intents:
  - agent uses old tool schema
  - AI agent using outdated tool schema
  - MCP schema changed agent still old
  - tool schema version mismatch
  - agent calls deprecated tool fields
  - old function schema still used
---

## What This Looks Like

An agent keeps calling a tool as if the old schema is still active. It may use old field names, deprecated arguments, outdated enum values, a prior response shape, or a previous required-field set. The tool may reject the call, return unexpected data, or cause the workflow to break at the next step.

## Why Users Blame AI

The visible failure looks like the agent is calling the tool incorrectly. In many cases, the agent is following an older contract preserved in prompts, examples, cached schema, documentation, workflow code, or memory. The AI appears careless, but the deeper issue is version drift between the agent’s tool understanding and the actual runtime schema.

## What to Check First

- Whether the tool schema changed recently
- Whether the agent prompt or examples still show the old schema
- Whether cached tool metadata or MCP definitions are stale
- Whether the old and new schema share the same tool or contract name
- Whether downstream parsers still expect the old response shape
- Whether the workflow records which tool schema version it expects

## Boundary

Use this AI-Adjacent Issue when the agent is operating from an outdated tool schema. If the schema is current but the agent still sends the wrong call shape, use the related Workbench Issue for tool call contract mismatch. If the prompt changed but the workflow did not, use that related Issue.
