---
layer: pattern
slug: boundary-leakage
title: Boundary Leakage
code: PAT-0140
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where effects, permissions, state, data, or authority cross a declared boundary without an authorized exception.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/boundary-leakage.md
search_intents:
  - boundary leakage
  - containment failure
  - unauthorized propagation
  - crossed boundary
  - leaked state
related_lenses:
  primary:
    - isolation-boundary-lens
    - boundary-compliance-lens
  secondary:
    - propagation-lens
    - authority-overlay-lens
---

# Boundary Leakage

## Definition

Boundary Leakage exists when structural effects, permissions, state, data, authority, or influence cross a declared boundary without an authorized exception.

The structure does not fail merely because something crosses a boundary. It fails when the boundary is declared as containing or separating a region, but structural influence moves beyond that boundary without a declared allowance.

## Visible Surface

Users may notice Boundary Leakage when something that should remain contained begins affecting another region, user, tool, model path, workflow, tenant, permission space, or decision process.

Common visible signs include:

- A permission or role affects areas outside its intended scope.
- Data from one context appears in another context without a declared bridge.
- A tool action changes state outside its expected boundary.
- A model, agent, or workflow step uses context that should have been isolated.
- A policy exception spreads beyond the case where it was granted.
- A configuration, prompt, memory, or cached state influences unrelated runs.
- A tenant, project, workspace, or user boundary fails to contain effects.

The visible problem is often described as “this should not have crossed over.”

## Structural Signature

Boundary Leakage usually contains these elements:

- A declared boundary
- A region, state, action, permission, authority, or effect inside that boundary
- Propagation or influence outside the declared boundary
- No declared exception, bridge, handoff, escalation, or override permitting the crossing
- A containment expectation that the system does not enforce

The boundary may be technical, procedural, policy-based, organizational, permission-based, or contextual.

## Deterministic Test

Given a declared boundary, structural influence should remain contained unless a declared exception permits crossing.

Ask:

1. What boundary is declared?
2. What is the boundary supposed to contain or separate?
3. What effect, state, permission, authority, data, or influence crossed it?
4. Is there a declared exception or bridge that permits the crossing?
5. Is that exception constrained to the relevant case?

If structural influence crosses the boundary and no authorized exception applies, Boundary Leakage exists.

## Common Contexts

Boundary Leakage commonly appears in:

- Permission systems
- Tenant isolation
- Agent tool access
- Memory and context handling
- Data pipelines
- Prompt assembly
- Policy exceptions
- Human review workflows
- Model routing
- Workspace/project separation
- Escalation paths
- Logging and audit systems
- Cache reuse
- Cross-environment configuration
- Integration boundaries

In AI systems, it often appears when context, authority, memory, tools, or policy effects move between runs, users, tenants, agents, or workflow stages without an explicit handoff rule.

## Distinguish From

### Unbounded Scope

Unbounded Scope occurs when a region or rule has no clear limit.

Boundary Leakage requires a declared boundary. The failure is that the boundary does not contain what it claims to contain.

### Propagation Amplification

Propagation Amplification occurs when effects grow or intensify as they move through the system.

Boundary Leakage concerns unauthorized crossing. The leaked effect may be small, large, amplified, or unchanged.

### Cross-Layer Escalation

Cross-Layer Escalation occurs when effects move upward or across abstraction layers in a way that changes control or consequence.

Boundary Leakage may enable cross-layer escalation, but it specifically names the failure of containment across a declared boundary.

### Authority Collision

Authority Collision occurs when multiple authorities claim the same region without a precedence rule.

Boundary Leakage may create authority conflict if an authority crosses into another region, but the core failure is unauthorized boundary crossing.

## Related Lenses

Primary Lenses:

- Isolation Boundary Lens
- Boundary Compliance Lens

Secondary Lenses:

- Propagation Lens
- Authority Overlay Lens

Use the Isolation Boundary Lens to inspect whether the declared boundary actually isolates the region it claims to isolate.

Use the Boundary Compliance Lens to inspect whether actions and effects remain inside declared boundary rules.

Use the Propagation Lens when the leaked effect spreads through downstream structures.

Use the Authority Overlay Lens when the leak involves authority, permission, or governance crossing into another region.

## Structural Limits

Boundary Leakage does not evaluate whether the boundary itself is legitimate, useful, ethical, or correctly designed.

It does not say that crossing a boundary is always wrong.

It only identifies that structural influence crossed a declared boundary without an authorized exception.

A declared and constrained exception may resolve Boundary Leakage.

## Workbench Notes

This Pattern is useful when a system appears to respect boundaries in documentation or configuration, but effects still cross those boundaries in execution.

The key Workbench move is to separate three questions:

1. What boundary is declared?
2. What effect crossed it?
3. Was the crossing authorized by a declared exception?

If a boundary exists, an effect crosses it, and no authorized exception applies, the issue is Boundary Leakage.