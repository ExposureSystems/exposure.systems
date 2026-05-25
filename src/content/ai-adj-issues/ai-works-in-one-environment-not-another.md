---
layer: ai_adj_issue
ontology_slug: ai-works-in-one-environment-not-another
title: AI Works in One Environment Not Another
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same AI task appears to work in one app, mode, model, account, workspace, or runtime but fails or behaves differently in another.
code: ADJ-0002
related_issues:
  - ai-forgets-earlier-constraints
  - agent-keeps-expanding-the-task
search_intents:
  - AI works in one environment not another
  - same prompt works in one app but not another
  - AI works here but fails there
  - model behaves differently in another environment
---

# AI Works in One Environment Not Another

## What This Looks Like

A prompt, workflow, tool call, or agent behavior works in one environment but fails, changes, or behaves differently somewhere else.

## Why Users Blame AI

The user sees the AI as the common actor, but the difference may come from model version, tool availability, app mode, account permissions, workspace settings, connector state, or runtime configuration.

## What to Check First

- Whether the same model/version is being used
- Whether both environments expose the same tools
- Whether permissions and settings match
- Whether prompt or workflow contracts changed
- Whether one environment has stale context or cached behavior
