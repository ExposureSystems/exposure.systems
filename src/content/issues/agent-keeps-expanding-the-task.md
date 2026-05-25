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

# Agent Keeps Expanding the Task

## What This Looks Like

The agent keeps adding steps, checks, dependencies, files, analysis paths, or follow-up work instead of finishing the requested task. Each pass makes the task larger rather than closer to done.

## Why It Matters

Agentic workflows need stopping rules. If the agent keeps expanding the task, users lose control over scope, cost, review burden, and completion. The agent can turn a bounded request into an open-ended investigation.

## Structural Signal

A task has an expected completion boundary, but the agent repeatedly expands the work surface without a sufficient limiting rule. The workflow fails to converge on a final output.

## Common Triggers

- No clear done condition
- Open-ended planning prompts
- Agent loops that reward more investigation
- Missing limits on files, tools, depth, or time
- Unclear distinction between required work and optional follow-up

## When to Use This Issue

Use this Issue when the agent’s main failure is uncontrolled task growth rather than one wrong answer.

## When Not to Use This Issue

Do not use this Issue when the agent adds a small amount of clearly necessary work to complete the task. The issue applies when expansion is not bounded, justified, or necessary.
