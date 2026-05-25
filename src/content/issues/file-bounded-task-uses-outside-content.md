---
layer: issue
ontology_slug: file-bounded-task-uses-outside-content
title: File-Bounded Task Uses Outside Content
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The AI is asked to work only from a specific file or document but uses content, assumptions, or sources outside that file.
code: ISS-0048
category: scope-and-boundaries
primary_cat_code: CAT-0100
secondary_cat_codes:
  - CAT-0010
primary_pattern: boundary-leakage
patterns:
  - boundary-leakage
  - reference-instability
  - overreach
search_intents:
  - file bounded task uses outside content
  - AI used content outside file
  - summarize only this file but AI used other info
  - AI answer not limited to document
  - AI used outside context in file task
  - document bounded task violated
---

## What This Looks Like

The user asks the AI to summarize, extract, review, transform, or answer using only a specific file or document, but the output includes outside content. The AI may bring in general knowledge, prior conversation context, other files, assumptions, or unsupported claims that are not contained in the bounded file.

## Why It Matters

File-bounded tasks depend on source containment. If outside content enters the answer, the user can no longer treat the result as a faithful output from the file. This matters for document review, evidence extraction, compliance checks, summaries, audits, and any task where the file is the authorized source.

## Structural Signal

The task declares a file boundary, but the output is governed by information beyond that boundary. The issue is not whether the outside content is useful or true; it is that the result no longer represents only the file-bounded source.

## Common Triggers

- The prompt says to use the file but does not explicitly forbid outside knowledge
- The model fills gaps with general knowledge
- Prior conversation context leaks into the file task
- Multiple uploaded files or references are available but only one is authorized
- The AI treats document review as a general answering task
- The output does not distinguish file-supported content from external explanation

## When to Use This Issue

Use this Issue when a task is bounded to a specific file or document and the AI uses information outside that file to produce the answer.

## When Not to Use This Issue

Do not use this Issue when the user asks for external comparison, background explanation, or broader analysis. Do not use it when the issue is a wrong citation inside the file. This Issue applies when the file boundary itself is crossed.
