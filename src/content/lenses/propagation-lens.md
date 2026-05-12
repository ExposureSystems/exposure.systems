---
layer: lens
ontology_slug: propagation-lens
title: Propagation Lens
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  Traces how structural declarations, effects, or state changes propagate across
  boundaries or stages.
code: LEN-0250
---
# Propagation Lens

## Definition

Propagation Lens traces how structural declarations, effects, or state changes propagate across boundaries or stages.

It is used when the main question is where an effect started, what path it traveled, and whether it expanded beyond its declared propagation rules.

## Use This Lens When

Use this Lens when a structural effect appears to move, spread, cross, amplify, or affect regions beyond its source.

Common triggers include:

- A declaration affects downstream regions.
- A tool, workflow, policy, or agent action spreads beyond its target.
- An effect crosses a boundary or stage.
- A local condition becomes broader through propagation.
- A dependency loop carries effects back through the system.
- A diagnostic needs to trace how an effect traveled.

## Input Requirements

- Observed structural graph
- Declared propagation sources
- Defined propagation rules

The Lens needs declared propagation rules or at least declared source regions. Without them, it can trace movement, but cannot fully classify whether the propagation was authorized.

## Structural Transform

Input:

- Structural graph
- Declared propagation sources

Operation:

- Trace propagation paths
- Identify scope expansion
- Identify stages, boundaries, or regions reached by the effect
- Compare observed propagation against declared propagation rules

Output:

- Propagation map
- Overextended regions, if present
- Source and path of propagated effect

## Output / Finding Shape

This Lens should produce:

- the source of propagation
- the path or chain the effect followed
- the regions or stages reached
- whether scope expanded
- whether propagation stayed within declared rules
- overextended regions if failure is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where propagation tracing is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Boundary Leakage
- Circular Dependency
- Cross-Layer Escalation
- Propagation Amplification
- Undeclared Side Effect

Current secondary Pattern matches:

- Density Spike
- Orphaned Structure
- Escalation Growth
- Overreach

## Distinguish From

### Escalation Gradient Lens

Escalation Gradient Lens measures whether scope, authority, or consequence increases across sequential states.

Propagation Lens traces the path an effect follows across boundaries or stages.

### Isolation Boundary Lens

Isolation Boundary Lens checks whether structure remains contained.

Propagation Lens traces where structure moved and what regions it reached.

### Overreach Lens

Overreach Lens checks whether action exceeded declared scope.

Propagation Lens traces how effects traveled beyond the source or target region.

## Structural Limits

Propagation Lens evaluates propagation behavior only.

It does not evaluate authority legitimacy.

It does not decide whether propagation is good, useful, or correct.

## Workbench Notes

Propagation Lens is useful when the fastest question is:

“Where did this effect go?”

If a structural declaration or effect travels beyond its declared path or scope, the Lens surfaces the propagation map and overextended regions.
