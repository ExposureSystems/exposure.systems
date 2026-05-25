---
layer: issue
ontology_slug: version-change-breaks-existing-prompt
title: Version Change Breaks Existing Prompt
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A prompt that previously produced usable results stops working after a version change in the model, tool, policy, schema, product surface, or workflow.
code: ISS-0053
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0010
primary_pattern: contract-drift
patterns:
  - contract-drift
  - compatibility-violation
  - reference-instability
search_intents:
  - version change breaks existing prompt
  - prompt broke after version change
  - old prompt stopped working
  - AI prompt no longer works after update
  - version update changed prompt behavior
  - prompt incompatible with new version
---

## What This Looks Like

A prompt that used to produce acceptable output stops working after a version change. The change may involve a model, tool schema, policy rule, workflow step, product mode, output format, or integration. The prompt text may be unchanged, but its behavior no longer matches the prior result.

## Why It Matters

Prompts often become operational assets. If version changes break existing prompts, users lose repeatability and may not know whether to update the prompt, the schema, the workflow, or the expected output. This can break automations and documentation that assume the old prompt still works.

## Structural Signal

The prompt remains stable, but the environment it runs against changes. The issue is not prompt quality in isolation; it is that the prompt’s prior contract no longer holds under the new versioned context.

## Common Triggers

- A model version changes how it interprets instructions
- A tool or schema version changes required fields
- Policy or safety behavior changes across releases
- Product surfaces expose different capabilities under the same prompt
- Prompt examples depend on old behavior
- The workflow does not pin or record the version used

## When to Use This Issue

Use this Issue when an existing prompt stops producing usable or expected results because a versioned dependency changed.

## When Not to Use This Issue

Do not use this Issue when the prompt was never stable, or when the prompt itself was changed in a way that explains the break. This Issue applies when version drift is the central cause.
