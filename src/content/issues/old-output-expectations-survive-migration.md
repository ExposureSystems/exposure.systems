---
layer: issue
ontology_slug: old-output-expectations-survive-migration
title: Old Output Expectations Survive Migration
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Expectations from a prior model, prompt, schema, tool, or workflow survive a migration and continue shaping review or downstream handling after they should be replaced.
code: ISS-0056
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0010
primary_pattern: persistence-instability
patterns:
  - persistence-instability
  - contract-drift
  - redundant-declaration
search_intents:
  - old output expectations survive migration
  - old AI output format still expected
  - migration kept old output assumptions
  - workflow expects old model output
  - old schema expectations remain after migration
  - legacy output rules survived update
---

## What This Looks Like

A system migrates to a new model, prompt, schema, tool, or workflow, but old output expectations remain active. Reviewers, parsers, downstream tools, examples, documentation, or prompts may still assume the previous output shape, labels, level of detail, or behavior.

## Why It Matters

Migrations can fail quietly when old expectations survive. The new system may be judged against obsolete requirements, or the old requirements may keep shaping prompts and review even though they no longer match the current design. This creates confusion about whether the new output is wrong or the old expectation is stale.

## Structural Signal

A migration changes the intended output contract, but legacy expectations continue to govern part of the workflow. The issue is not simply that the output changed; it is that old expectations were not retired or reconciled with the new structure.

## Common Triggers

- Old examples remain in prompts or documentation
- Parsers or validators still expect the previous format
- Reviewers use prior rubric language after migration
- Workflow metadata is not updated with the new output contract
- Compatibility shims preserve legacy assumptions too long
- Migration changes the generator but not the consumers

## When to Use This Issue

Use this Issue when legacy output expectations continue to affect review, parsing, prompting, or downstream handling after a migration to a new model, schema, tool, prompt, or workflow.

## When Not to Use This Issue

Do not use this Issue when the migration intentionally preserves the old output contract. Do not use it for ordinary output differences unless stale expectations are still governing the workflow.
