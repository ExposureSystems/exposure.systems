---
layer: pattern
ontology_slug: density-spike
title: Density Spike
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where nodes, edges, dependencies, decisions, or effects
  concentrate sharply within a localized region beyond declared thresholds.
code: PAT-0270
---
# Density Spike

## Definition

Density Spike exists when nodes, edges, dependencies, decisions, authority, data, or effects concentrate sharply within a localized structural region beyond declared thresholds.

The structure does not fail because concentration exists. It fails when concentration becomes disproportionate relative to baseline, expectation, or declared limits.

## Visible Surface

Users may notice Density Spike when one part of a system becomes unusually overloaded, over-connected, over-referenced, or over-responsible compared with nearby or comparable regions.

Common visible signs include:

- Too many workflows depend on one node, team, tool, model, service, or approval step.
- A local component becomes a hotspot for routing, decisions, data, or authority.
- A single field, policy, prompt, schema, or interface carries too many meanings.
- Many unrelated failures trace back to the same structural region.
- A review queue, escalation path, or resolver attracts disproportionate load.
- A local cluster becomes more complex or sensitive than surrounding structure.
- Small changes in one region produce unusually large downstream effects.

The visible problem is often described as “too much is concentrated here.”

## Structural Signature

Density Spike usually contains these elements:

- A structural graph, workflow, schema, interface, permission map, routing map, or dependency network
- A localized region with unusually high node, edge, dependency, authority, decision, or effect concentration
- A baseline or declared threshold for expected distribution
- Disproportionate density relative to that baseline
- Increased sensitivity, fragility, overload, ambiguity, or propagation risk inside the dense region

The spike may involve technical dependencies, semantic meanings, authority claims, routing paths, human decisions, model/tool calls, or data relationships.

## Deterministic Test

Given a structural graph, density distribution should remain within declared thresholds or explainable bounds.

Ask:

1. What graph or structural region is being inspected?
2. What kind of density is being measured?
3. What baseline, threshold, or comparable region establishes expected density?
4. Where is concentration disproportionately high?
5. Is the concentration declared, intentional, bounded, or mitigated?

If localized concentration exceeds declared or expected limits without mitigation, Density Spike exists.

## Common Contexts

Density Spike commonly appears in:

- Dependency graphs
- Service architectures
- Agent tool routing
- Prompt or policy logic
- Human review queues
- Escalation paths
- Permission maps
- Data pipelines
- Schema fields
- API gateways
- Model routing
- Evaluation rules
- Knowledge graphs
- Workflow orchestrators
- Cross-team ownership maps

In AI systems, it often appears when many prompts, tools, policies, evaluations, or routing paths converge on one overloaded structural region.

## Distinguish From

### Density Vacuum

Density Vacuum occurs when a region has too little structure, connection, or coverage relative to expected baseline.

Density Spike is the opposite shape: too much concentration in a localized region.

### Propagation Amplification

Propagation Amplification occurs when effects grow as they move through the system.

Density Spike may enable amplification, but it specifically names abnormal localized concentration.

### Unbounded Scope

Unbounded Scope occurs when a region or rule lacks clear limits.

Density Spike may appear inside an unbounded scope, but it concerns concentration rather than absence of boundaries.

### Circular Dependency

Circular Dependency occurs when structural elements depend on each other in an unresolved loop.

Density Spike may contain dependency cycles, but it does not require a cycle.

## Related Lenses

Primary Lenses:

- Variance Entropy Lens
- Propagation Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Isolation Boundary Lens

Use the Variance Entropy Lens to inspect how concentrated or unevenly distributed structural load has become.

Use the Propagation Lens when the dense region increases downstream spread or sensitivity.

Use the Constraint Sufficiency Lens when declared constraints fail to limit concentration.

Use the Isolation Boundary Lens when the spike threatens containment or isolation boundaries.

## Structural Limits

Density Spike does not evaluate whether the concentrated structure is correct, useful, or intentionally optimized.

It does not say all concentration is bad.

It only identifies disproportionate localized concentration relative to declared thresholds, expected baseline, or comparable regions.

A declared hotspot, capacity rule, load boundary, sharding strategy, or mitigation may explain or resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system becomes fragile because too many dependencies, meanings, decisions, or effects accumulate in one place.

The key Workbench move is to separate three questions:

1. What kind of density is being measured?
2. What baseline defines normal distribution?
3. Has one region exceeded that baseline enough to create structural risk?

If a localized region concentrates disproportionate structure, the issue is Density Spike.
