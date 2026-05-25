---
layer: issue
ontology_slug: same-contract-name-has-different-meanings
title: Same Contract Name Has Different Meanings
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: The same prompt, schema, field, policy, tool, or workflow contract name is used in different places with different meanings.
code: ISS-0057
category: changes-and-versions
primary_cat_code: CAT-0080
secondary_cat_codes:
  - CAT-0060
primary_pattern: contract-drift
patterns:
  - contract-drift
  - reference-instability
  - interface-mismatch
search_intents:
  - same contract name has different meanings
  - same schema name different meaning
  - prompt contract changed meaning
  - same field name means different things
  - AI workflow contract mismatch
  - policy name reused with different meaning
---

## What This Looks Like

The same name is used for a prompt contract, schema, field, policy, tool, rubric, or workflow step, but different parts of the system treat that name as if it means different things. The user may see one document, tool, or prompt refer to a contract one way while another uses the same name for a different structure or requirement.

## Why It Matters

Shared names create expectations of shared meaning. When the same contract name points to different meanings, users and systems may believe they are aligned while actually operating against different rules. This can break validation, review, tool calls, migration, and downstream interpretation.

## Structural Signal

A canonical-looking name remains stable while the meaning attached to it diverges across contexts. The issue is not merely that a contract changed; it is that the same name now carries incompatible meanings in different places.

## Common Triggers

- A contract name is reused after a schema, prompt, or policy changes
- Documentation and runtime behavior keep the same label but diverge
- Different teams use the same field or rule name differently
- A migration preserves old names while changing the underlying structure
- Tool, prompt, and workflow definitions are updated separately
- Version or namespace information is missing from the contract name

## When to Use This Issue

Use this Issue when the same named contract, field, prompt, schema, policy, or workflow element has different meanings across parts of the system.

## When Not to Use This Issue

Do not use this Issue when two different names refer to the same thing. Do not use it when a contract simply changed and all consumers changed with it. This Issue applies when the same name hides meaning drift.
