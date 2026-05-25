---
layer: issue
ontology_slug: missing-fallback-for-unavailable-information
title: Missing Fallback for Unavailable Information
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The task does not declare what the AI should do when required information, sources, tools, fields, or evidence are unavailable.
code: ISS-0074
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0050
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - missing-authority
  - constraints-underspecified
search_intents:
  - missing fallback for unavailable information
  - AI does not know what to do when information missing
  - no fallback when source unavailable
  - missing information fallback
  - AI guesses when information unavailable
  - no rule for unavailable evidence
---

## What This Looks Like

The AI needs a source, field, tool result, file, approval, or piece of evidence to complete the task, but that information is unavailable. The prompt or workflow does not say whether to stop, ask, use a fallback source, mark the field unknown, escalate, or continue with a limitation.

## Why It Matters

Unavailable information is normal in real workflows. Without a fallback rule, the AI may guess, hallucinate, skip the missing part, proceed as if the information exists, or stall without explaining what is needed. This makes the output harder to trust and harder to recover.

## Structural Signal

A required information path can fail, but the task does not declare a valid fallback state. The issue is not merely that information is missing; it is that the workflow has no governed response to the missing information.

## Common Triggers

- Required fields have no unknown or unavailable value rule
- The prompt asks for evidence but does not say what to do if none is found
- Tool failure behavior is not declared
- The AI is discouraged from asking questions but given no fallback
- Review or approval depends on information that may not exist
- The workflow lacks a stop, escalation, or limitation state

## When to Use This Issue

Use this Issue when required information is unavailable and the AI task or workflow does not define what should happen next.

## When Not to Use This Issue

Do not use this Issue when the fallback is declared but the AI ignores it. Do not use it when the information is available but the AI fails to retrieve it.
