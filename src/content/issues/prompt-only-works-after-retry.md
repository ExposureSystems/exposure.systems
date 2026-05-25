---
layer: issue
ontology_slug: prompt-only-works-after-retry
title: Prompt Only Works After Retry
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The prompt fails, misroutes, or produces an unusable response on one attempt but works after retry without a meaningful change to the input.
code: ISS-0005
category: inconsistent-behavior
primary_cat_code: CAT-0090
secondary_cat_codes: []
primary_pattern: non-deterministic-execution
patterns:
  - non-deterministic-execution
  - divergent-outputs
  - constraints-underspecified
search_intents:
  - prompt only works after retry
  - AI only works when I try again
  - same prompt works on second try
  - retry fixes AI answer
  - prompt fails randomly
  - AI response changes after retry
---

# Prompt Only Works After Retry

## What This Looks Like

The same prompt or task fails on one attempt and succeeds on a later retry without a meaningful change to the user’s request. The first run may ignore constraints, choose the wrong format, route to the wrong behavior, stop too early, or produce an unusable answer. A later run appears to understand the same request correctly.

## Why It Matters

Retry success can hide structural instability. The user may get a usable result eventually, but the workflow becomes hard to trust, automate, test, or explain. If a prompt only works after repeated attempts, the prompt contract, model behavior, context state, or routing path may not be stable enough for dependable use.

## Structural Signal

The input appears materially unchanged, but execution varies enough that one run fails and another succeeds. The issue is not that the user refined the prompt; it is that the same declared task does not reliably produce a usable path or output.

## Common Triggers

- The prompt leaves room for multiple valid interpretations
- Sampling, tool choice, or routing varies between runs
- The model sometimes follows format constraints and sometimes treats them as optional
- Earlier context or hidden state affects one run differently from another
- The prompt depends on implied constraints instead of explicit success criteria
- The system retries through a different model, tool, or workflow path

## When to Use This Issue

Use this Issue when the user’s main evidence is that retrying the same or nearly identical request changes the result from failed to usable.

## When Not to Use This Issue

Do not use this Issue when the user significantly changes the prompt, adds missing constraints, fixes bad input, or provides new information. In those cases, the later success may come from improved task definition rather than retry instability.
