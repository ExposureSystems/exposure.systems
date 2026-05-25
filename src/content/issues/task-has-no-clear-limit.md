---
layer: issue
ontology_slug: task-has-no-clear-limit
title: Task Has No Clear Limit
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The task does not declare where the AI should stop, what is out of scope, or what counts as enough work.
code: ISS-0011
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes: []
primary_pattern: unbounded-scope
patterns:
  - unbounded-scope
  - constraints-underspecified
  - incomplete-declaration
search_intents:
  - task has no clear limit
  - AI does not know where to stop
  - prompt has no stopping point
  - task scope is too open
  - AI keeps going because limits are unclear
  - no done condition in prompt
---

## What This Looks Like

The AI is given a task without a clear stopping point, boundary, exclusion rule, or definition of enough. The response may become too broad, keep expanding, include unnecessary sections, pull in outside material, or continue analyzing after the useful work should have ended.

## Why It Matters

A task without limits is hard to complete reliably. The user may get too much output, the wrong kind of output, or an answer that keeps growing because the system has no stable way to know when the task is finished. This also makes review harder because success is not clearly bounded.

## Structural Signal

The task declaration lacks a usable boundary. The issue is not that the AI misunderstood one detail; it is that the task does not provide enough structure to separate required work from optional work, in-scope material from out-of-scope material, or complete work from unfinished work.

## Common Triggers

- The prompt asks for broad help without a declared endpoint
- Exclusions are implied but not stated
- The user does not specify depth, length, source range, or completion criteria
- The task combines exploration and execution without separating them
- The AI is allowed to continue adding adjacent work
- The output format does not define what must be included or omitted

## When to Use This Issue

Use this Issue when the central problem is missing task boundaries: the AI cannot reliably know where to stop, what to exclude, or what amount of work satisfies the request.

## When Not to Use This Issue

Do not use this Issue when the task has clear limits but the AI ignores them. That is a boundary compliance or overreach problem. Use this Issue when the limit itself is missing or too weak to govern the work.
