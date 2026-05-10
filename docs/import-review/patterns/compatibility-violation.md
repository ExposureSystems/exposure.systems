---
layer: pattern
slug: compatibility-violation
title: Compatibility Violation
code: PAT-0180
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where a graph, object, behavior, or runtime state exceeds a declared compatibility envelope without an authorized exception.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/compatibility-violation.md
search_intents:
  - compatibility violation
  - outside compatibility envelope
  - unsupported runtime
  - platform constraint violation
  - compatibility bounds exceeded
related_lenses:
  primary:
    - compatibility-envelope-lens
    - interface-contract-lens
  secondary:
    - constraint-sufficiency-lens
    - reconciliation-lens
---

# Compatibility Violation

## Definition

Compatibility Violation exists when a structural graph, object, behavior, runtime state, or integration exceeds a declared compatibility envelope without an authorized exception.

The structure does not fail because compatibility constraints exist. It fails because the observed structure is outside the bounds that were declared as supported, allowed, or safe.

## Visible Surface

Users may notice Compatibility Violation when something works in one runtime, platform, version, model, environment, user tier, tool path, or configuration but fails or becomes unsupported in another.

Common visible signs include:

- A feature runs outside its declared supported environment.
- A tool or workflow receives input from an unsupported version.
- A schema, API, model, or agent path emits structure outside compatibility bounds.
- A component assumes support that the platform does not declare.
- A runtime accepts a state that downstream consumers cannot support.
- A migration produces objects that older consumers cannot read.
- A system path works only because an undeclared compatibility exception exists.

The visible problem is often described as “this is outside what the system says it supports.”

## Structural Signature

Compatibility Violation usually contains these elements:

- A declared compatibility envelope
- A runtime, platform, version, environment, consumer, producer, model, tool, or data structure governed by that envelope
- A structural property outside the declared bounds
- No declared exception, migration rule, fallback, or compatibility bridge
- A consumer or system path affected by the unsupported condition

The compatibility envelope may describe versions, schemas, platforms, input shapes, output shapes, feature flags, model families, dependencies, tenants, environments, or supported behaviors.

## Deterministic Test

Given declared compatibility constraints, the observed structure should remain within declared bounds unless an exception is declared.

Ask:

1. What compatibility envelope is declared?
2. What structure, runtime, behavior, version, or environment is being inspected?
3. Which compatibility bound applies?
4. How does the observed structure exceed or fall outside that bound?
5. Is there a declared exception, migration rule, fallback, or compatibility bridge?

If the observed structure is outside the compatibility envelope and no declared exception applies, Compatibility Violation exists.

## Common Contexts

Compatibility Violation commonly appears in:

- API versions
- Tool manifests
- Model versions
- Runtime environments
- Platform support matrices
- Browser or device support
- Schema migrations
- Agent tool contracts
- Feature flag rollouts
- Dependency upgrades
- Data format changes
- Evaluation harnesses
- Multi-tenant configurations
- Backward compatibility requirements
- Prompt or output format migrations

In AI systems, it often appears when generated structure, tool usage, model routing, or output format exceeds what a downstream consumer or runtime declares as supported.

## Distinguish From

### Interface Mismatch

Interface Mismatch occurs when observed interface behavior or shape differs from the declared interface contract.

Compatibility Violation specifically concerns whether the observed structure remains inside declared support boundaries across versions, platforms, runtimes, or consumers.

### Schema Breakage

Schema Breakage occurs when an instance violates a declared schema.

Compatibility Violation may involve schema breakage, but it can also involve runtime, platform, version, dependency, or support-envelope violations.

### Contract Drift

Contract Drift occurs when a contract changes over time without coordinated alignment.

Compatibility Violation may be the result of contract drift, but it specifically names the condition where current structure falls outside declared compatibility bounds.

### Boundary Leakage

Boundary Leakage occurs when structural influence crosses a declared boundary without authorization.

Compatibility Violation concerns support bounds rather than containment boundaries.

## Related Lenses

Primary Lenses:

- Compatibility Envelope Lens
- Interface Contract Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Reconciliation Lens

Use the Compatibility Envelope Lens to inspect declared support bounds and whether the observed structure remains inside them.

Use the Interface Contract Lens when the compatibility failure appears at a connected interface.

Use the Constraint Sufficiency Lens when compatibility bounds are too weak or incomplete to test compliance.

Use the Reconciliation Lens when an unsupported state needs to be resolved into a declared migration, exception, or support rule.

## Structural Limits

Compatibility Violation does not evaluate whether the compatibility envelope itself is correct, fair, or well-designed.

It does not decide which versions, platforms, models, runtimes, or consumers should be supported.

It only identifies that observed structure exceeds declared compatibility constraints without an authorized exception.

A declared compatibility bridge, migration rule, fallback, or support update may resolve the Pattern.

## Workbench Notes

This Pattern is useful when an integration, feature, model output, tool call, or runtime state appears to exceed what a system says it supports.

The key Workbench move is to separate three questions:

1. What compatibility envelope is declared?
2. What observed structure falls outside it?
3. Is there an authorized exception or migration path?

If the structure is outside declared support bounds with no exception, the issue is Compatibility Violation.