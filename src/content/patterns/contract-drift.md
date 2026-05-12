---
layer: pattern
ontology_slug: contract-drift
title: Contract Drift
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where a declared contract changes but connected
  structures, implementations, consumers, or expectations do not update in sync.
code: PAT-0190
---
# Contract Drift

## Definition

Contract Drift exists when a declared contract changes but connected structures, implementations, consumers, or expectations do not update in sync.

The structure does not fail because the contract changed. It fails because the contract and the structural graph that depends on it no longer describe the same obligations, shapes, behavior, or boundaries.

## Visible Surface

Users may notice Contract Drift when documentation, schemas, interfaces, policies, prompts, workflows, or tool definitions say one thing while the system continues to behave according to an older or different contract.

Common visible signs include:

- Documentation describes a new behavior but runtime still follows the old behavior.
- A schema changes but producers or consumers are not updated.
- A tool manifest changes but agent behavior still assumes the previous contract.
- A policy or workflow rule changes but review behavior remains unchanged.
- A downstream consumer breaks after an upstream contract update.
- Different teams refer to the same contract but use different versions.
- A migration updates declarations but leaves old structural assumptions in place.

The visible problem is often described as “the contract changed, but the system did not move with it.”

## Structural Signature

Contract Drift usually contains these elements:

- A declared contract, rule, schema, interface, policy, workflow, prompt, or expectation
- A change to that declaration
- A connected implementation, consumer, producer, state, or process that still follows a different contract
- Misalignment between declaration and observed structure
- No completed migration, version boundary, compatibility bridge, or reconciliation rule

The contract may be technical, procedural, organizational, policy-based, or semantic.

## Deterministic Test

Given a contract update, all connected structures that depend on that contract should either align with the new contract or declare a compatibility boundary.

Ask:

1. What contract changed?
2. What structures, implementations, consumers, or processes depend on it?
3. Which parts are still aligned with the old or different contract?
4. Is there a declared migration, version boundary, or compatibility bridge?
5. Does the system clearly know which contract applies where?

If a contract changes and connected structures remain misaligned without a declared compatibility boundary, Contract Drift exists.

## Common Contexts

Contract Drift commonly appears in:

- API contracts
- Tool manifests
- Function schemas
- Model output formats
- Prompt templates
- Evaluation rubrics
- Policy rules
- Human review workflows
- Documentation
- Data models
- Integration specs
- Version migrations
- Feature flags
- Cross-team handoffs
- Compliance or governance requirements

In AI systems, it often appears when prompt contracts, tool schemas, model output expectations, or evaluator requirements change faster than connected workflows and consumers.

## Distinguish From

### Interface Mismatch

Interface Mismatch occurs when observed interface behavior differs from a declared interface contract.

Contract Drift specifically involves change over time. The mismatch is caused or sustained by unsynchronized contract evolution.

### Compatibility Violation

Compatibility Violation occurs when observed structure falls outside declared compatibility bounds.

Contract Drift may cause compatibility violations, but it specifically names the lag between changed contract and connected structures.

### Reference Instability

Reference Instability occurs when references do not remain stable enough for resolution.

Contract Drift may create unstable references if contract updates rename or relocate things, but Contract Drift focuses on contract/implementation alignment.

### Schema Breakage

Schema Breakage occurs when an instance violates a declared schema.

Contract Drift may lead to schema breakage, but it can occur even before any individual instance fails validation.

## Related Lenses

Primary Lenses:

- Interface Contract Lens
- Compatibility Envelope Lens

Secondary Lenses:

- Reconciliation Lens
- Reference Stability Lens

Use the Interface Contract Lens to compare the declared contract with observed structural behavior.

Use the Compatibility Envelope Lens to inspect whether old and new contracts have a declared compatibility boundary.

Use the Reconciliation Lens when multiple contract states must be resolved into one coherent operational rule.

Use the Reference Stability Lens when drift involves renamed, moved, or unstable references.

## Structural Limits

Contract Drift does not evaluate whether the new contract is better, correct, ethical, or desirable.

It does not require every dependent structure to update instantly.

It only identifies that contract evolution and connected structures are misaligned without a clear compatibility or migration rule.

A version boundary, migration plan, compatibility bridge, or synchronized update may resolve Contract Drift.

## Workbench Notes

This Pattern is useful when teams, tools, models, or workflows appear to be operating from different contract versions.

The key Workbench move is to separate three questions:

1. What contract changed?
2. What structures depend on that contract?
3. Are those structures aligned with the active contract or explicitly versioned away from it?

If contract and structure are out of sync without a declared boundary, the issue is Contract Drift.
