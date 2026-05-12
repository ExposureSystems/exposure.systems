---
layer: pattern
ontology_slug: interface-mismatch
title: Interface Mismatch
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where observed interface behavior, shape, or exchange
  differs from the declared interface contract.
code: PAT-0150
---
# Interface Mismatch

## Definition

Interface Mismatch exists when observed interface behavior, shape, input, output, or exchange differs from the declared interface contract.

The structure does not fail because an interface changed. It fails when one side of the system relies on a declared interface definition and the observed interface does not conform to that definition.

## Visible Surface

Users may notice Interface Mismatch when connected components appear to agree on an integration but fail during use.

Common visible signs include:

- A caller sends the expected input but the receiver interprets it differently.
- A tool, API, model, agent, or workflow returns a shape the consumer does not expect.
- A field exists in documentation but is absent at runtime.
- A runtime response includes extra, missing, renamed, or differently typed fields.
- A contract says one behavior is supported but observed behavior differs.
- A downstream step fails because the upstream interface does not match its declared contract.
- Two teams or components believe they are using the same interface but mean different things.

The visible problem is often described as “the contract says one thing, but the system does another.”

## Structural Signature

Interface Mismatch usually contains these elements:

- A declared interface contract
- An observed interface structure or behavior
- A structural deviation between declaration and observation
- A consumer, caller, receiver, or downstream dependency relying on the declared contract
- No declared compatibility rule that explains the deviation

The mismatch may involve field shape, required fields, optional fields, types, ordering, behavior, timing, permissions, error handling, or semantic interpretation.

## Deterministic Test

Given a declared interface definition, observed runtime structure should conform to that definition unless a compatibility rule or version boundary declares otherwise.

Ask:

1. What interface contract is declared?
2. What component or workflow depends on that contract?
3. What interface behavior, shape, input, output, or exchange is observed?
4. Where does the observed interface deviate from the declaration?
5. Is the deviation covered by a declared version, compatibility rule, or fallback?

If observed interface behavior or structure deviates from the declared contract without a declared compatibility rule, Interface Mismatch exists.

## Common Contexts

Interface Mismatch commonly appears in:

- APIs
- Tool manifests
- Agent tool calls
- Function schemas
- Data contracts
- Event payloads
- Model inputs and outputs
- Prompt templates
- Evaluation harnesses
- Workflow handoffs
- Integration boundaries
- UI-to-backend exchanges
- Service-to-service communication
- Human review forms
- Configuration-driven systems

In AI systems, it often appears when a model, agent, tool, or evaluator expects one input/output shape while another component provides a different one.

## Distinguish From

### Incomplete Declaration

Incomplete Declaration occurs when a declared element is missing required attributes or dependent declarations.

Interface Mismatch can result from an incomplete declaration, but it specifically names the difference between declared interface contract and observed interface behavior.

### Compatibility Violation

Compatibility Violation occurs when a change breaks compatibility expectations across versions, consumers, or environments.

Interface Mismatch is broader. It can occur even without a version change if observed behavior does not match the declared contract.

### Schema Breakage

Schema Breakage occurs when a schema fails to support, validate, or represent the structure it governs.

Interface Mismatch may involve a schema, but it centers on the contract between connected surfaces.

### Contract Drift

Contract Drift occurs when the declared or assumed contract changes over time without coordinated alignment.

Interface Mismatch may be the visible result of contract drift, but it can also occur immediately from a bad declaration or implementation.

## Related Lenses

Primary Lenses:

- Interface Contract Lens
- Compatibility Envelope Lens

Secondary Lenses:

- Constraint Sufficiency Lens
- Reconciliation Lens

Use the Interface Contract Lens to compare declared interface obligations with observed exchange behavior.

Use the Compatibility Envelope Lens to inspect whether the interface remains inside declared compatibility boundaries.

Use the Constraint Sufficiency Lens when the interface declaration lacks enough constraints to make conformance testable.

Use the Reconciliation Lens when mismatched interface claims need to be resolved into a coherent declared state.

## Structural Limits

Interface Mismatch does not evaluate whether the interface design is good, useful, or legitimate.

It does not decide which side of the interface should change.

It only identifies that observed interface structure or behavior does not conform to the declared interface contract.

A versioned compatibility rule, migration boundary, or declared fallback may resolve the mismatch.

## Workbench Notes

This Pattern is useful when a system appears integrated on paper but fails at the point of exchange.

The key Workbench move is to separate three questions:

1. What interface was declared?
2. What interface was observed?
3. Does the observation conform to the declaration?

If the declared and observed interface differ without a declared compatibility rule, the issue is Interface Mismatch.
