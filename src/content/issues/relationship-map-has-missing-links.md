---
layer: issue
ontology_slug: relationship-map-has-missing-links
title: Relationship Map Has Missing Links
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A map of related Issues, rules, patterns, cases, fields, tools, or workflow steps is missing links needed to navigate or reason over the structure.
code: ISS-0080
category: coverage-and-guidance
primary_cat_code: CAT-0120
secondary_cat_codes:
  - CAT-0070
primary_pattern: incomplete-declaration
patterns:
  - incomplete-declaration
  - orphaned-structure
  - reference-instability
search_intents:
  - relationship map has missing links
  - missing links in issue map
  - AI relationship map incomplete
  - related items not connected
  - workflow map missing relationships
  - ontology links missing
---

## What This Looks Like

A relationship map exists, but important links are missing. Related Issues, rules, patterns, cases, fields, files, tools, workflow steps, or examples may not connect to each other even though the relationship is needed for navigation, diagnosis, review, or downstream use.

## Why It Matters

Missing links make a structure harder to use and harder to trust. Users may not find related problems, systems may fail to surface relevant context, and workflows may treat connected items as unrelated. This can fragment diagnosis and hide important dependencies.

## Structural Signal

A graph, map, index, or relationship structure exists, but required edges are absent. The issue is not that there is no structure at all; it is that the structure is incomplete enough to affect navigation or reasoning.

## Common Triggers

- Links are added manually and some relationships are missed
- New Issues, rules, or fields are added without updating maps
- Relationship criteria are implicit
- Similar concepts are not normalized before mapping
- Workflow steps are documented separately from their dependencies
- Migration preserves nodes but drops edges

## When to Use This Issue

Use this Issue when a relationship map, ontology, workflow map, or reference index is missing links needed to navigate, diagnose, or reason over related structure.

## When Not to Use This Issue

Do not use this Issue when the map is absent entirely, or when the relationship exists but points to the wrong target. This Issue applies when links are missing from an otherwise existing structure.
