---
layer: issue
ontology_slug: routing-path-cycles-back-to-start
title: Routing Path Cycles Back to Start
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A routing path sends the case back to the starting point or an earlier step without resolving the condition that caused the route.
code: ISS-0092
category: loops-and-resolution
primary_cat_code: CAT-0130
secondary_cat_codes:
  - CAT-0070
primary_pattern: circular-dependency
patterns:
  - circular-dependency
  - convergence-failure
  - escalation-growth
search_intents:
  - routing path cycles back to start
  - AI routing loop
  - workflow routes back to beginning
  - case cycles through same route
  - routing path never resolves
  - AI workflow sends case back to start
---

## What This Looks Like

A case is routed through a path that eventually sends it back to the starting point or an earlier step. The same condition remains unresolved, so the case can continue cycling through the same route instead of reaching a final decision, handoff, or stop state.

## Why It Matters

Routing loops create activity without progress. The workflow may look like it is doing work because the case is moving, but the movement does not resolve anything. Users may have to intervene manually to determine where the route should break.

## Structural Signal

The routing graph contains a cycle without an exit condition. The issue is not simply that routing is wrong once; it is that the route can return to a prior state without resolving the reason it was routed.

## Common Triggers

- Escalation sends the case back to intake without new information
- Review failure routes to repair, and repair routes back to the same review
- Routing rules do not record that a path has already been tried
- The same condition triggers the same route repeatedly
- No maximum cycle count or stop condition exists
- The route graph was extended without checking for cycles

## When to Use This Issue

Use this Issue when a routing path cycles back to the start or a prior step without resolving the condition that caused the route.

## When Not to Use This Issue

Do not use this Issue when a case is intentionally returned once for correction and then proceeds. Use it when the route can keep cycling.
