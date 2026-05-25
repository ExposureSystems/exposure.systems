---
layer: ai_adj_issue
ontology_slug: guardrail-applies-to-one-model-path-only
title: Guardrail Applies to One Model Path Only
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A guardrail, policy, validation rule, safety check, or workflow constraint applies to one model path, mode, runtime, or route but not another.
code: ADJ-0016
related_issues:
  - ai-works-in-one-environment-not-another
  - actual-policy-differs-from-declared-policy
  - prompt-behavior-changed-without-version-change
  - similar-cases-route-to-different-outcomes
  - results-vary-too-much
search_intents:
  - guardrail applies to one model path only
  - AI guardrail works in one path not another
  - policy applies to one model but not another
  - safety check missing in one route
  - model path bypasses guardrail
  - workflow guardrail inconsistent across modes
---

## What This Looks Like

A guardrail, validation rule, safety check, policy constraint, approval gate, or workflow rule applies in one path but not another. The same task may be checked in one model, mode, route, runtime, agent path, or product surface, but bypassed or applied differently elsewhere.

## Why Users Blame AI

The behavior appears inconsistent across AI paths. The user may see one route block, validate, warn, or constrain the task while another route allows it or handles it differently. The underlying cause may be routing, model selection, product mode, runtime configuration, or guardrails wired to only part of the system.

## What to Check First

- Whether all model paths use the same guardrail or validation layer
- Whether mode, route, or runtime changes bypass a check
- Whether the guardrail is implemented in prompt, product, tool, or workflow code
- Whether one path has newer policy or validation behavior
- Whether routing can move the task away from the guarded path
- Whether logs show which path applied which check

## Boundary

Use this AI-Adjacent Issue when a guardrail applies to one model path or runtime route but not another. If the result is unexplained routing or inconsistent outcomes between similar cases, use the related Workbench Issues for routing divergence or excessive variance.
