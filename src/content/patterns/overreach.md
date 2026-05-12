---
layer: pattern
ontology_slug: overreach
title: Overreach
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where actions, effects, authority, or modifications
  extend beyond declared scope without authorization.
code: PAT-0340
---
# Overreach

## Definition

Overreach exists when actions, effects, authority, permissions, or structural modifications extend beyond declared scope without authorization.

The structure does not fail because scope exists or because expansion occurs. It fails when the system acts outside the scope that was declared to constrain it.

## Visible Surface

Users may notice Overreach when a component, user, agent, workflow, policy, or tool affects more than it was supposed to affect.

Common visible signs include:

- A tool modifies data outside its declared target.
- A user or role can act beyond its permission scope.
- A workflow step changes unrelated state.
- A policy applies to cases outside its declared domain.
- An agent uses authority beyond the task it was given.
- A local configuration affects broader system behavior.
- A review, approval, or exception influences more cases than intended.

The visible problem is often described as “this went beyond what it was allowed to do.”

## Structural Signature

Overreach usually contains these elements:

- A declared scope, authority, permission, boundary, task, or domain
- An action, modification, effect, or decision that extends outside that scope
- No declared authorization, exception, delegation, or escalation permitting the extension
- A structural consequence in a region that should not have been affected
- A mismatch between allowed reach and observed reach

The overreach may be technical, procedural, authority-based, policy-based, workflow-based, or semantic.

## Deterministic Test

Given declared scope, structural actions and modifications should remain within bounds unless authorization permits expansion.

Ask:

1. What scope or authority was declared?
2. What action, effect, or modification occurred?
3. What boundary or limit did it exceed?
4. Is there a declared authorization, exception, delegation, or escalation rule?
5. What structural region was affected outside the declared scope?

If the action exceeds declared scope without authorization, Overreach exists.

## Common Contexts

Overreach commonly appears in:

- Permission systems
- Agent tool execution
- Policy enforcement
- Workflow automation
- Human review decisions
- Data modification
- Content moderation
- Configuration changes
- Model routing
- Tool manifests
- Escalation handling
- Tenant boundaries
- Search and retrieval
- Generated actions
- Cross-team workflows

In AI systems, it often appears when an agent, tool, prompt, policy, or model action affects state, data, users, or decisions outside the authorized task or boundary.

## Distinguish From

### Boundary Leakage

Boundary Leakage occurs when structural influence crosses a declared boundary without authorization.

Overreach is broader. It names action or authority extending beyond declared scope, whether or not the system models the limit as a boundary.

### Cross-Layer Escalation

Cross-Layer Escalation occurs when escalation moves into another authority, boundary, or control layer.

Overreach may include cross-layer escalation, but it does not require a layer change. It only requires exceeding declared scope.

### Authority Shadowing

Authority Shadowing occurs when effective authority silently overrides declared authority.

Overreach can be caused by shadow authority, but it specifically names the excessive reach of the action or effect.

### Unbounded Scope

Unbounded Scope occurs when no clear boundary or limit is declared.

Overreach requires a declared scope. The failure is that observed action exceeds it.

## Related Lenses

Primary Lenses:

- Authority Overlay Lens
- Boundary Compliance Lens

Secondary Lenses:

- Escalation Gradient Lens
- Constraint Sufficiency Lens

Use the Authority Overlay Lens to inspect whether the acting structure had authority over the affected region.

Use the Boundary Compliance Lens to inspect whether the action remained within declared scope or boundary rules.

Use the Escalation Gradient Lens when overreach expands consequence, scope, or control.

Use the Constraint Sufficiency Lens when weak constraints allow the scope violation.

## Structural Limits

Overreach does not evaluate whether the action was beneficial, harmful, ethical, or correct.

It does not decide what the allowed scope should be.

It only identifies that observed action, effect, or authority exceeded declared scope without authorization.

A declared scope expansion, delegation, exception, or escalation rule may resolve the Pattern.

## Workbench Notes

This Pattern is useful when something acts outside its lane.

The key Workbench move is to separate three questions:

1. What scope was declared?
2. What action or effect occurred?
3. Did the action remain inside authorized scope?

If the action exceeds declared scope without authorization, the issue is Overreach.
