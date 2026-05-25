---
layer: ai_adj_issue
ontology_slug: runtime-behavior-does-not-match-docs
title: Runtime Behavior Does Not Match Docs
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Documented behavior, fields, tool schemas, permissions, or runtime capabilities do not match what actually happens during use.
code: ADJ-0005
related_issues:
  - actual-policy-differs-from-declared-policy
  - output-changed-without-declared-change
  - prompt-behavior-changed-without-version-change
  - same-contract-name-has-different-meanings
  - tool-call-contract-mismatch
search_intents:
  - runtime behavior does not match docs
  - AI behavior does not match documentation
  - tool docs do not match runtime
  - documented behavior differs from actual behavior
  - API docs wrong at runtime
  - product docs do not match AI behavior
---

## What This Looks Like

The documentation says a model, tool, connector, API, mode, field, permission, or product surface should behave one way, but the actual runtime behaves differently. A feature may be missing, a field may differ, a tool may reject documented inputs, or the runtime may produce behavior the docs do not describe.

## Why Users Blame AI

The mismatch often appears inside an AI task, so the user may experience it as the AI ignoring instructions, making unsupported calls, or inventing behavior. The underlying problem may be documentation drift, rollout differences, feature flags, product-version mismatch, hidden limitations, or runtime behavior that changed before the docs did.

## What to Check First

- Whether the docs match the exact version, product, API, mode, and account being used
- Whether the behavior depends on plan, workspace, region, feature flag, or rollout state
- Whether the runtime exposes a different schema than the docs show
- Whether examples are illustrative instead of contract-level
- Whether the docs describe expected behavior but not current product behavior
- Whether a hidden policy, permission, or tool constraint changes runtime behavior

## When This Is AI-Adjacent

Use this AI-Adjacent Issue when documented behavior and observed runtime behavior disagree. If the mismatch creates a structural Workbench failure, use the related Issues for policy drift, output change, prompt behavior change, contract-name drift, or tool call contract mismatch.
