---
layer: ai_adj_issue
ontology_slug: generated-output-changed-hidden-metadata
title: Generated Output Changed Hidden Metadata
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Generated output changes hidden metadata, identifiers, references, state, or system fields that affect later behavior but are not obvious in the visible output.
code: ADJ-0013
related_issues:
  - output-changed-without-declared-change
  - action-changed-something-else-too
  - output-breaks-the-next-step
  - saved-reference-no-longer-works
  - same-contract-name-has-different-meanings
search_intents:
  - generated output changed hidden metadata
  - AI output changed metadata
  - generated file changed hidden fields
  - AI changed invisible state
  - output changed hidden identifiers
  - generated content affected metadata
---

## What This Looks Like

The visible generated output looks acceptable, but hidden metadata changes along with it. Identifiers, timestamps, references, slugs, labels, IDs, version fields, provenance, formatting metadata, or system-managed fields may change and affect later workflows, links, imports, or references.

## Why Users Blame AI

The user sees the change after generating or regenerating output, so the AI appears to have broken something unexpectedly. The cause may be export behavior, file generation, CMS metadata, serialization, hidden fields, downstream import rules, or a tool that updates metadata while writing visible content.

## What to Check First

- Whether generated output rewrites IDs, slugs, timestamps, or reference fields
- Whether hidden metadata is preserved across regeneration
- Whether downstream systems depend on metadata not visible to the user
- Whether the output tool creates new objects instead of updating existing ones
- Whether saved references point to stable identifiers or generated labels
- Whether metadata changes are included in review or diff output

## Boundary

Use this AI-Adjacent Issue when generated output changes hidden metadata or system-managed state. If a saved reference no longer works, use the related Workbench Issue for reference instability. If the output change itself is undeclared, use the related output-change Issue.
