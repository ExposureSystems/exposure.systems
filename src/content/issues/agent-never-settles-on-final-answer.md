---
layer: issue
ontology_slug: agent-never-settles-on-final-answer
title: Agent Never Settles on Final Answer
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The agent keeps revising, rechecking, planning, or branching instead of converging on a final answer or completed result.
code: ISS-0082
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0030
primary_pattern: convergence-failure
patterns:
  - convergence-failure
  - circular-dependency
  - unconstrained-expansion
search_intents:
  - agent never settles on final answer
  - AI agent will not finish
  - agent keeps revising instead of answering
  - AI keeps checking and never completes
  - agent cannot finalize response
  - agent loops without final answer
---

## What This Looks Like

The agent keeps revising, planning, checking, branching, or reconsidering instead of returning a final answer. It may repeatedly say more work is needed, open new paths, ask for another pass, or keep refining the same output without reaching a stable completion point.

## Why It Matters

Agent work needs convergence. If the agent cannot settle, the user cannot know when the task is done or which output should be trusted. This can turn a bounded request into an open loop of partial work, repeated review, and unfinished decisions.

## Structural Signal

The workflow lacks a stable finalization point. The issue is not that the agent needs one reasonable correction; it is that the agent’s process does not converge on a final answer under the declared task constraints.

## Common Triggers

- The task has no declared done condition
- The agent is allowed to keep improving without a stopping rule
- Review or self-check loops create new work each pass
- The agent treats uncertainty as permission to continue indefinitely
- Tool results or critiques create new branches instead of closing the task
- The workflow does not distinguish final output from draft or analysis state

## When to Use This Issue

Use this Issue when the agent’s main failure is inability to settle on a final answer, final artifact, or completed state.

## When Not to Use This Issue

Do not use this Issue when the agent expands the task but still completes a final output. Do not use it for one bad answer or one ordinary revision cycle. This Issue applies when the agent cannot converge.
