---
layer: pattern
slug: undeclared-side-effect
title: Undeclared Side Effect
code: PAT-0420
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an operation modifies regions outside its declared target scope without a declared propagation or side-effect rule.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/undeclared-side-effect.md
search_intents:
  - undeclared side effect
  - unexpected modification
  - changed outside target
  - hidden side effect
  - operation changed extra regions
related_lenses:
  primary:
    - overreach-lens
    - propagation-lens
  secondary:
    - isolation-boundary-lens
---

# Undeclared Side Effect

## Definition

Undeclared Side Effect exists when an operation modifies regions outside its declared target scope without a declared propagation or side-effect rule.

The structure does not fail because side effects exist. It fails because the operation changes additional regions that were not declared as targets, dependencies, propagation outputs, or allowed effects.

## Visible Surface

Users may notice Undeclared Side Effect when an action appears to complete its stated task but also changes something else unexpectedly.

Common visible signs include:

- A workflow step changes unrelated state.
- A tool call modifies data outside the requested target.
- A policy update affects cases outside its declared scope.
- A model or agent action changes hidden state, memory, routing, or permissions.
- A configuration change affects unrelated environments or tenants.
- A generated artifact updates references, indexes, or metadata that were not declared as outputs.
- A repair or migration modifies additional regions without listing them.

The visible problem is often described as “that action changed something else too.”

## Structural Signature

Undeclared Side Effect usually contains these elements:

- A declared operation scope
- One or more declared target regions
- Additional modified regions outside the declared target
- No declared propagation rule, side-effect rule, dependency rule, or output contract
- A structural change that matters to downstream interpretation, governance, execution, or audit

The side effect may involve state, metadata, references, authority, permissions, routing, indexes, generated artifacts, logs, memory, caches, or related objects.

## Deterministic Test

Given a declared operation scope, only target regions or declared side-effect regions should change.

Ask:

1. What operation was performed?
2. What target region was declared?
3. What regions actually changed?
4. Which changed regions were outside the declared target?
5. Is there a declared propagation rule, side-effect rule, dependency rule, or output contract allowing those changes?

If additional regions change without declaration, Undeclared Side Effect exists.

## Common Contexts

Undeclared Side Effect commonly appears in:

- Agent tool execution
- Workflow automation
- Data migrations
- Configuration updates
- Policy changes
- Permission updates
- Model routing
- Prompt or memory handling
- Search indexing
- Cache invalidation
- Generated artifacts
- Build scripts
- Human review workflows
- Integration jobs
- Repair or cleanup scripts

In AI systems, it often appears when an agent, tool, model, retrieval step, memory update, or generated workflow modifies hidden or adjacent state without declaring that modification as part of the operation.

## Distinguish From

### Overreach

Overreach occurs when an action extends beyond declared scope or authority.

Undeclared Side Effect is a specific form of overreach where the extra effect appears as an additional modification outside the declared target region.

### Boundary Leakage

Boundary Leakage occurs when influence crosses a declared boundary without authorization.

Undeclared Side Effect may cross a boundary, but it specifically names unlisted modifications outside operation scope.

### Silent Mutation

Silent Mutation occurs when structural change happens without a corresponding declared update or version record.

Undeclared Side Effect may create silent mutation, but it specifically concerns extra changes caused by an operation.

### Propagation Amplification

Propagation Amplification occurs when effects increase as they propagate.

Undeclared Side Effect does not require amplification. It only requires an undeclared additional effect.

## Related Lenses

Primary Lenses:

- Overreach Lens
- Propagation Lens

Secondary Lenses:

- Isolation Boundary Lens

Use the Overreach Lens to inspect whether the operation exceeded declared scope.

Use the Propagation Lens to trace where the operation’s effects traveled beyond the target.

Use the Isolation Boundary Lens when undeclared effects cross isolation or containment boundaries.

## Structural Limits

Undeclared Side Effect does not evaluate whether the operation was correct, useful, harmful, or intended.

It does not say all side effects are invalid.

It only identifies side effects that were not declared as part of the operation scope, propagation rule, or output contract.

A declared side-effect rule, dependency rule, output contract, propagation rule, or target-scope update may resolve the Pattern.

## Workbench Notes

This Pattern is useful when an operation appears scoped but produces extra changes outside that scope.

The key Workbench move is to separate three questions:

1. What was the operation allowed to change?
2. What actually changed?
3. Were the additional changes declared?

If extra regions changed without a declaration, the issue is Undeclared Side Effect.