---
layer: issue
ontology_slug: prompt-changed-but-workflow-did-not
title: Prompt Changed but Workflow Did Not
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A prompt changes but the workflow, parser, review step, routing rule, or downstream expectation still assumes the old prompt behavior.
code: ISS-0054
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0070
primary_pattern: contract-drift
patterns:
  - contract-drift
  - interface-mismatch
  - compatibility-violation
search_intents:
  - prompt changed but workflow did not
  - prompt update broke workflow
  - workflow still expects old prompt
  - AI prompt changed downstream did not
  - updated prompt incompatible with workflow
  - prompt changed parser still old
---

## What This Looks Like

The prompt is updated, but the surrounding workflow continues to expect the old behavior. A parser, review step, routing rule, rubric, tool call, downstream field, or handoff may still assume the prior output shape, decision logic, or task meaning.

## Why It Matters

Prompt changes are not isolated when the prompt sits inside a workflow. A small wording change can alter output structure, assumptions, labels, or next-step behavior. If the workflow is not updated with it, the system may break at the handoff between the new prompt and old expectations.

## Structural Signal

The prompt contract changes, but dependent workflow components do not. The issue is not only that the prompt changed; it is that version alignment failed between prompt and workflow.

## Common Triggers

- Prompt revisions change output labels or fields
- Downstream parsers are not updated after prompt edits
- Review rubrics still evaluate the old response shape
- Tool calls expect values no longer produced by the prompt
- The workflow does not record prompt version dependencies
- A prompt edit changes task meaning without changing workflow metadata

## When to Use This Issue

Use this Issue when a prompt update breaks or misaligns with workflow components that still assume the old prompt behavior.

## When Not to Use This Issue

Do not use this Issue when both prompt and workflow were updated together and the failure has another cause. Do not use it when the prompt changed but no downstream expectation depends on the old behavior.
