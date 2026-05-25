---
layer: issue
ontology_slug: ai-memory-updated-without-asking
title: AI Memory Updated Without Asking
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: AI memory, saved context, preference, or durable state is updated without the user clearly asking for or approving that update.
code: ISS-0114
category: memory-and-context
primary_cat_code: CAT-0020
secondary_cat_codes:
  - CAT-0100
primary_pattern: missing-authority
patterns:
  - missing-authority
  - persistence-instability
  - boundary-leakage
search_intents:
  - AI memory updated without asking
  - ChatGPT memory changed without permission
  - AI saved memory without approval
  - memory updated unexpectedly
  - AI remembered something I did not ask it to
  - persistent memory changed without consent
---

## What This Looks Like

The AI saves, updates, or changes memory without the user clearly asking for that durable update. A preference, fact, instruction, project detail, role assumption, or context item may become persistent even though the user intended it to apply only to the current task or conversation.

## Why It Matters

Memory changes can affect future outputs. If memory updates without clear approval, local context can become durable behavior, and users may not know why later responses changed. This creates problems around consent, scope, correction, and trust in persistent AI behavior.

## Structural Signal

A temporary or local context item crosses into persistent memory without a declared authority boundary. The issue is not simply that the AI remembered something; it is that memory state changed without clear user authorization.

## Common Triggers

- The system treats repeated statements as memory candidates without explicit approval
- Local task context is saved as a durable preference
- The user corrects something for one task and the correction becomes global
- Memory update behavior is not visible at the moment it happens
- The system does not separate temporary context from persistent memory
- The user cannot tell which statements may update memory

## When to Use This Issue

Use this Issue when AI memory or durable context is updated without the user clearly requesting, approving, or understanding that persistent change.

## When Not to Use This Issue

Do not use this Issue when memory is merely used incorrectly or not used at all. Do not use it when the user explicitly asked the system to remember the information.
