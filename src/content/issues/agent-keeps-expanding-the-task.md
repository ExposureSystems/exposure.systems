---
layer: issue
ontology_slug: agent-keeps-expanding-the-task
title: Agent Keeps Expanding the Task
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The agent repeatedly expands the task, plan, scope, or next-step list instead of completing the declared work.
code: ISS-0008
category: agents
primary_cat_code: CAT-0030
secondary_cat_codes:
  - CAT-0100
primary_pattern: unconstrained-expansion
patterns:
  - unconstrained-expansion
  - overreach
  - convergence-failure
search_intents:
  - agent keeps expanding the task
  - AI keeps adding more steps
  - agent keeps making the plan bigger
  - AI keeps adding follow up work
  - agent expands task on each pass
  - diagnosis keeps expanding
---

## What This Looks Like

The agent starts with a bounded task but keeps adding steps, checks, dependencies, files, analysis paths, or follow-up work instead of finishing the requested output. Each pass makes the work surface larger. The user may see new subtasks appear, new investigations start, or a simple request turn into a growing plan that never reaches completion.

## Why It Matters

Agentic workflows need a way to stop. If the agent keeps expanding the task, the user loses control over scope, review burden, cost, time, and completion. The system may look productive because it is still planning or investigating, but the actual work is moving farther from a finished deliverable.

## Structural Signal

The task has an expected completion boundary, but the agent repeatedly expands the work surface without a sufficient limiting rule. The issue is not that the agent discovered one necessary missing step; it is that expansion becomes the operating pattern and the workflow fails to converge on a final output.

## Common Triggers

- The task has no clear done condition
- The prompt rewards planning, diagnosis, or exploration more than completion
- The agent treats optional follow-up work as required work
- Tool results create new branches instead of narrowing the task
- File, source, or dependency checks are not bounded
- The agent is allowed to keep proposing next steps without returning a final answer

## When to Use This Issue

Use this Issue when the agent’s main failure is uncontrolled task growth. The user asked for work to be completed, but the agent keeps broadening the task, adding new paths, or turning a bounded request into an open-ended investigation.

## When Not to Use This Issue

Do not use this Issue when the agent adds a small amount of clearly necessary work to complete the task. Do not use it when the real problem is one wrong answer, one bad tool call, or one missing permission. This Issue applies when expansion itself is the recurring failure pattern.
