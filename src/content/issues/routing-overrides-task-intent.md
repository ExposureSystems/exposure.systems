---
layer: issue
ontology_slug: routing-overrides-task-intent
title: Routing Overrides Task Intent
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Routing, mode selection, agent behavior, or workflow classification sends the task down a path that overrides what the user was trying to accomplish.
code: ISS-0112
category: agents
primary_cat_code: CAT-0030
secondary_cat_codes:
  - CAT-0070
primary_pattern: overreach
patterns:
  - overreach
  - authority-state-mismatch
  - boundary-leakage
search_intents:
  - routing overrides task intent
  - AI routed task wrong
  - agent routing ignored user intent
  - workflow classification overrode request
  - AI mode selection changed task
  - task intent overridden by routing
---

## What This Looks Like

The user asks for one kind of task, but routing, mode selection, agent behavior, or workflow classification sends it down another path. The AI may treat a request as support, coding, research, safety review, automation, escalation, or refusal when the user intended a different task.

## Why It Matters

Routing determines what rules, tools, modes, and expectations govern the work. If routing overrides task intent, the user may not get the task they asked for even when the system appears to be functioning. The failure may look like poor output, but the task was already shifted before the output was produced.

## Structural Signal

A routing or classification layer changes the governing task path in a way that conflicts with user intent. The issue is not simply that the answer is wrong; it is that routing authority overrides the declared task purpose.

## Common Triggers

- Classifiers infer task type from surface keywords instead of user intent
- Agent mode selection changes available tools or rules
- Workflow routing maps the task to a broader or stricter path
- Safety, support, or automation routes are triggered by ambiguous language
- The user request contains terms that match another product surface
- The system does not expose or allow correction of the selected route

## When to Use This Issue

Use this Issue when routing, mode selection, workflow classification, or agent path selection overrides the user’s intended task.

## When Not to Use This Issue

Do not use this Issue when the task is routed correctly but the output is poor. Do not use it when the user’s intent is genuinely unclear and the system asks for clarification.
