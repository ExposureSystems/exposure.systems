---
layer: issue
ontology_slug: similar-cases-route-to-different-outcomes
title: Similar Cases Route to Different Outcomes
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Similar inputs, cases, prompts, or workflow states are routed to different outcomes without a declared difference that explains the split.
code: ISS-0001
category: inconsistent-behavior
primary_cat_code: CAT-0090
secondary_cat_codes: []
primary_pattern: non-deterministic-execution
patterns:
  - non-deterministic-execution
  - divergent-outputs
  - authority-state-mismatch
search_intents:
  - similar cases route to different outcomes
  - same case gets different result
  - AI routes similar requests differently
  - similar prompts produce different decisions
  - same workflow state gets different outcome
  - AI decision path is inconsistent
---

# Similar Cases Route to Different Outcomes

## What This Looks Like

Two cases appear equivalent to the user, but the AI system routes them to different answers, decisions, tools, workflows, reviewers, or next steps. The user may see one request approved and another rejected, one case escalated and another handled normally, or one prompt sent down a different path without any visible reason for the difference.

## Why It Matters

Routing differences become hard to trust when the deciding distinction is not visible. If similar cases produce different outcomes, users cannot tell whether the system found a meaningful difference, followed hidden state, used inconsistent context, or simply varied across runs. That weakens review, debugging, policy enforcement, and user confidence.

## Structural Signal

The issue is not merely that two outputs are different. The signal is that the system treats comparable cases as structurally different without exposing the condition, rule, state, or authority that caused the split.

## Common Triggers

- Similar prompts carry small hidden differences in context, memory, metadata, or prior state
- Routing depends on thresholds, classifiers, or confidence signals the user cannot see
- A workflow has multiple valid paths but no declared tie-breaker
- The system treats equivalent labels, fields, or case types as different
- Different tools, policies, or model paths are selected without a visible routing explanation
- A prior answer or intermediate step changes the route for a later case

## When to Use This Issue

Use this Issue when the central problem is unexplained routing or outcome divergence between cases that should be handled the same way, or whose differences should be explicitly declared before they affect the result.

## When Not to Use This Issue

Do not use this Issue when the cases are clearly different, when the user is mainly objecting to the quality of one answer, or when the failure is only that repeated runs vary. If the same exact prompt changes after retry, use a retry or inconsistent-output Issue instead.
