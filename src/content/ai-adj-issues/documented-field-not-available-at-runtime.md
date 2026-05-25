---
layer: ai_adj_issue
ontology_slug: documented-field-not-available-at-runtime
title: Documented Field Not Available at Runtime
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A documented field, option, parameter, property, or capability is expected by the user or agent but is not available in the actual runtime.
code: ADJ-0003
related_issues:
  - missing-required-fields
  - tool-call-contract-mismatch
  - actual-policy-differs-from-declared-policy
  - same-contract-name-has-different-meanings
search_intents:
  - documented field not available at runtime
  - field in docs missing at runtime
  - API field not available
  - tool schema field missing
  - documented option not supported
  - runtime missing documented parameter
---

## What This Looks Like

A user, agent, integration, or workflow expects a documented field, option, property, parameter, enum, capability, or response value to exist, but it is not present at runtime. The documentation, schema, example, or product description says the field should be available, but the actual response, tool, API, connector, or UI does not expose it.

## Why Users Blame AI

The failure often appears when the AI tries to use or reason about the documented field. The user may experience the result as the AI making things up, calling the tool wrong, or failing to follow the schema. The underlying cause may be a docs/runtime mismatch, version difference, partial rollout, mode limitation, or unsupported field in the current environment.

## What to Check First

- Whether the documentation applies to the exact product, API, mode, and version in use
- Whether the field is gated by account, plan, region, workspace, or feature flag
- Whether the runtime response actually includes the field
- Whether examples show a field that is optional, deprecated, or not generally available
- Whether a tool schema changed but the prompt or agent still expects the old field
- Whether the field exists under a different name, namespace, or response shape

## When This Is AI-Adjacent

Use this AI-Adjacent Issue when a documented field or capability is missing at runtime. If the AI has all available fields but omits a required field in generated output, use the related Workbench Issue for missing required fields. If the tool call shape is wrong, use tool call contract mismatch.
