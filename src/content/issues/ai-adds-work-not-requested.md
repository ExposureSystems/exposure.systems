---
layer: issue
ontology_slug: ai-adds-work-not-requested
title: AI Adds Work Not Requested
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI adds tasks, steps, analysis, checks, changes, or follow-up work that the user did not ask for.
code: ISS-0009
category: agents
primary_cat_code: CAT-0030
secondary_cat_codes:
  - CAT-0100
primary_pattern: overreach
patterns:
  - overreach
  - unbounded-scope
  - undeclared-side-effect
search_intents:
  - AI adds work not requested
  - AI did extra work I did not ask for
  - agent added unnecessary tasks
  - AI changed more than requested
  - AI keeps adding follow up work
  - agent expanded beyond the request
---

## What This Looks Like

The user asks for a bounded action, but the AI adds extra steps, edits, checks, recommendations, files, changes, or follow-up tasks. The added work may look helpful on the surface, but it was not requested and may change the scope, output, cost, or review burden of the task.

## Why It Matters

Extra work can create hidden obligations. A user may now have to review changes they did not ask for, undo unrelated edits, sort required work from optional work, or determine whether the AI changed the goal. In agentic workflows, unsolicited work can also trigger tools, modify state, or affect downstream steps without clear authorization.

## Structural Signal

The requested task has a declared scope, but the system performs or proposes work outside that scope without a sufficient authority boundary. The issue is not that the AI made a helpful suggestion; it is that optional or undeclared work becomes part of the executed task.

## Common Triggers

- The prompt leaves the boundary between requested work and optional help unclear
- The system treats adjacent improvements as authorized work
- The agent is rewarded for initiative without a stop rule
- The task lacks a declared allowed-change surface
- Follow-up recommendations are mixed into execution
- The AI interprets a narrow request as permission to optimize the broader situation

## When to Use This Issue

Use this Issue when the AI or agent adds work that was not part of the user’s request and that extra work changes the task surface, review burden, workflow state, or expected output.

## When Not to Use This Issue

Do not use this Issue when the AI asks a clarifying question, offers optional suggestions clearly separated from the requested work, or adds a small necessary step required to complete the task. Use this Issue when the added work crosses the requested boundary.
