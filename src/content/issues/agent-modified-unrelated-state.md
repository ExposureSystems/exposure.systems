---
layer: issue
ontology_slug: agent-modified-unrelated-state
title: Agent Modified Unrelated State
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An agent changes state outside the requested task, target, file, record, workflow, or authorized scope.
code: ISS-0113
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes:
  - CAT-0030
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - undeclared-side-effect
  - overreach
search_intents:
  - agent modified unrelated state
  - AI agent changed unrelated state
  - agent changed something outside task
  - AI modified unrelated file
  - agent side effect changed state
  - AI action affected unrelated workflow
---

## What This Looks Like

The agent performs the requested task or part of it, but also modifies state that was not part of the task. It may change another file, record, setting, memory, ticket, queue, workflow state, branch, document, or tool-managed object that the user did not ask it to touch.

## Why It Matters

State changes are harder to review than text suggestions. If an agent modifies unrelated state, the user must inspect areas that should have remained untouched. In connected workflows, the side effect may affect other people, systems, future tasks, or downstream automation before the user notices.

## Structural Signal

The agent crosses from the authorized task boundary into unrelated state. The issue is not only that the change may be wrong; it is that the agent’s action affects a state surface outside the declared scope.

## Common Triggers

- The agent has broader tool or file access than the task requires
- The prompt defines the goal but not the allowed change surface
- A repair step is applied globally instead of locally
- The agent treats related files or records as part of the same task
- Tool actions modify shared state as a side effect
- The workflow does not distinguish read access from change authority

## When to Use This Issue

Use this Issue when an agent modifies state outside the requested or authorized task boundary.

## When Not to Use This Issue

Do not use this Issue when the agent only reads related context without changing it. Do not use it when the unrelated change was explicitly requested or clearly required to complete the task.
