---
layer: ai_adj_issue
ontology_slug: agent-keeps-adding-tool-dependencies
title: Agent Keeps Adding Tool Dependencies
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An agent keeps adding required tools, connectors, searches, files, APIs, or integrations instead of completing the task with the available surface.
code: ADJ-0006
related_issues:
  - agent-keeps-expanding-the-task
  - too-many-tool-calls
  - task-has-no-clear-limit
  - tool-exists-but-required-inputs-are-missing
  - agent-never-settles-on-final-answer
search_intents:
  - agent keeps adding tool dependencies
  - AI agent says it needs more tools
  - agent keeps asking for integrations
  - AI task keeps requiring more tools
  - agent will not finish without another tool
  - tool dependency keeps growing
---

## What This Looks Like

An agent starts a task but keeps adding new required tools, connectors, searches, files, APIs, or integrations before it will complete the work. The user may ask for a bounded result, but each pass introduces another dependency the agent says it needs.

## Why Users Blame AI

The user experiences the agent as refusing to finish or making the task bigger. The underlying cause may be task planning, tool-routing behavior, insufficient input boundaries, unavailable capabilities, or an agent loop that treats every uncertainty as a reason to add another tool dependency.

## What to Check First

- Whether the task actually requires the added tool
- Whether the agent has a clear done condition
- Whether the prompt separates required tools from optional checks
- Whether unavailable information has a declared fallback
- Whether the agent is overusing search, retrieval, or connector calls
- Whether tool availability differs by workspace, mode, or runtime

## Boundary

Use this AI-Adjacent Issue when the visible problem is tool dependency growth around an agent task. If the agent keeps expanding the task itself, use the related Workbench Issue for task expansion. If the agent repeatedly calls tools beyond what the task permits, use the related Issue for too many tool calls.
