---
layer: pattern
ontology_slug: unbounded-scope
title: Unbounded Scope
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where an operation, authority, rule, or expansion has
  no declared upper bound, boundary, or termination condition.
code: PAT-0400
---
# Unbounded Scope

## Definition

Unbounded Scope exists when an operation, authority, rule, permission, process, or expansion has no declared upper bound, boundary, or termination condition.

The structure does not fail because it can grow or apply broadly. It fails when no explicit limit declares where the scope ends.

## Visible Surface

Users may notice Unbounded Scope when a rule, action, process, or authority appears able to continue expanding without a clear stop point.

Common visible signs include:

- A policy applies to an open-ended set of cases.
- A tool or agent action has no declared operating boundary.
- A workflow can keep escalating without a stop condition.
- A permission has no clear resource, tenant, user, or time limit.
- A retrieval, search, or generation process has no declared cutoff.
- A rule expands from one context into unrelated contexts.
- A system cannot answer “where does this stop?”

The visible problem is often described as “this has no clear limit.”

## Structural Signature

Unbounded Scope usually contains these elements:

- An operation, rule, authority, workflow, permission, retrieval, expansion, or effect
- No defined scope limit
- No upper bound, boundary, termination rule, cap, stop condition, or containment mechanism
- Structural growth or application beyond a clearly declared region
- A downstream risk that the structure will expand, apply, or continue indefinitely

The missing bound may be spatial, temporal, authority-based, operational, semantic, procedural, or quantitative.

## Deterministic Test

Given structural operations, scope should have explicit limits.

Ask:

1. What operation, rule, authority, or process is being scoped?
2. What region, set, time, state, resource, or condition does it apply to?
3. What declared limit or termination condition exists?
4. What prevents the scope from continuing or expanding indefinitely?
5. Is the scope intentionally open-ended and explicitly declared as such?

If no declared limit or termination condition exists, Unbounded Scope exists.

## Common Contexts

Unbounded Scope commonly appears in:

- Agent tool permissions
- Retrieval and search
- Policy rules
- Prompt instructions
- Workflow automation
- Escalation paths
- Permission systems
- Data access
- Generated actions
- Monitoring jobs
- Review queues
- Feature rollouts
- Configuration inheritance
- Model routing
- Governance processes

In AI systems, it often appears when prompts, agents, tools, policies, or retrieval operations are allowed to continue, expand, or apply without explicit limits.

## Distinguish From

### Overreach

Overreach occurs when an action exceeds declared scope.

Unbounded Scope occurs when the scope itself lacks declared bounds. Overreach requires a boundary to exceed.

### Unconstrained Expansion

Unconstrained Expansion occurs when structure expands without sufficient constraints.

Unbounded Scope is specifically about missing scope limits or termination conditions.

### Escalation Growth

Escalation Growth occurs when scope or consequence increases across sequential states.

Unbounded Scope may allow escalation growth, but it names the absence of declared bounds.

### Boundary Leakage

Boundary Leakage occurs when influence crosses a declared boundary without authorization.

Unbounded Scope occurs when the system has not declared the boundary clearly enough in the first place.

## Related Lenses

Primary Lenses:

- Isolation Boundary Lens
- Constraint Sufficiency Lens

Secondary Lenses:

- Escalation Gradient Lens

Use the Isolation Boundary Lens to inspect whether the scope has a declared containment boundary.

Use the Constraint Sufficiency Lens to inspect whether declared constraints are enough to bound operation.

Use the Escalation Gradient Lens when missing bounds allow scope or consequence to increase over time.

## Structural Limits

Unbounded Scope does not evaluate whether the intended scope is correct, useful, or legitimate.

It does not say broad scope is always wrong.

It only identifies that the structure lacks declared upper bounds, boundaries, or termination conditions.

A declared scope limit, cap, boundary, timebox, resource bound, stop condition, or explicit open-ended declaration may resolve the Pattern.

## Workbench Notes

This Pattern is useful when the system cannot state where an action, rule, permission, or process stops.

The key Workbench move is to separate three questions:

1. What is being scoped?
2. What declares the limit?
3. What stops continued expansion or application?

If no limit or stop condition is declared, the issue is Unbounded Scope.
