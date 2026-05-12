---
layer: pattern
ontology_slug: asymmetric-structure
title: Asymmetric Structure
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where comparable regions receive unequal rule,
  constraint, or authority application without a declared differentiation rule.
code: PAT-0110
---
# Asymmetric Structure

## Definition

Asymmetric Structure exists when structurally comparable regions receive unequal rule, constraint, or authority application without a declared differentiation rule.

The structure does not fail merely because two regions are different. It fails when the regions are comparable for the purpose being evaluated, yet the system applies different treatment without explaining or encoding why that difference is valid.

## Visible Surface

Users may notice Asymmetric Structure when the same kind of request, workflow step, user role, file type, model path, agent action, or review case receives different treatment in different places.

Common visible signs include:

- One user or group is blocked while a comparable user or group is allowed.
- One workflow path requires review while a comparable path bypasses review.
- One output is rejected for a rule that is ignored elsewhere.
- One tool, model, or agent path is constrained while another comparable path is unconstrained.
- Similar cases receive different escalation, refusal, approval, routing, or logging behavior.

The visible problem is inconsistency. The structural problem is the absence of a declared differentiation rule.

## Structural Signature

Asymmetric Structure usually contains these elements:

- Two or more structurally comparable regions
- A shared evaluation purpose or rule domain
- Unequal rule, constraint, authority, routing, or permission application
- No declared rule explaining why the difference is valid
- No stable boundary that separates the regions into legitimately different cases

The comparable regions do not have to be identical. They only need to be equivalent for the specific rule or structural purpose being evaluated.

## Deterministic Test

Given structurally comparable regions, the same rule should apply symmetrically unless a differentiation rule is declared.

Ask:

1. What regions are being compared?
2. Why are they comparable for this purpose?
3. What rule, constraint, or authority applies to one region but not the other?
4. Is there a declared differentiation rule?
5. Is the differentiation rule actually used by the system?

If the regions are comparable and the unequal treatment has no declared differentiation rule, Asymmetric Structure exists.

## Common Contexts

Asymmetric Structure commonly appears in:

- Permission models
- Policy enforcement
- Human review queues
- Agent tool access
- Model routing
- Evaluation rubrics
- Prompt handling
- Safety or compliance gates
- Multi-tenant configuration
- Role-based access control
- Exception handling
- Escalation paths
- Logging and audit coverage

In AI systems, it often appears when one path receives a guardrail, constraint, or review step that another comparable path does not.

## Distinguish From

### Authority Collision

Authority Collision occurs when multiple authorities claim governance over the same structural region without a declared precedence rule.

Asymmetric Structure does not require multiple authorities. It requires comparable regions receiving unequal treatment without a declared differentiation rule.

### Invariant Failure

Invariant Failure occurs when a required condition does not remain true across states or transitions.

Asymmetric Structure may reveal an invariant failure if the system requires equal treatment across comparable regions. But Asymmetric Structure specifically names the unequal application pattern.

### Policy Gap

A policy gap occurs when no policy or rule covers a required case.

Asymmetric Structure can occur even when a policy exists. The issue is that the policy is applied unevenly across comparable regions.

### Exception Handling

Exception handling is not automatically asymmetric. An exception becomes Asymmetric Structure when the exception boundary is not declared, stable, or consistently applied.

## Related Lenses

Primary Lenses:

- Conflict Lens
- Invariant Lens

Secondary Lenses:

- Authority Overlay Lens
- Reconciliation Lens

Use the Conflict Lens to inspect contradictory or incompatible treatment across comparable regions.

Use the Invariant Lens to inspect whether the same required condition remains true across equivalent paths or states.

Use the Authority Overlay Lens when unequal treatment appears to come from different authority, permission, or governance sources.

Use the Reconciliation Lens when the system needs to determine whether the unequal treatment can be resolved into a coherent declared rule.

## Structural Limits

Asymmetric Structure does not decide whether unequal treatment is morally, legally, or operationally wrong.

It does not say all comparable regions must always be treated the same.

It only identifies the structural condition where unequal application exists without a declared differentiation rule.

A valid differentiation rule may resolve the asymmetry.

## Workbench Notes

This Pattern is useful when a user says the system is inconsistent, unfair, arbitrary, or applying rules differently across similar cases.

The key Workbench move is to separate two questions:

1. Are the regions actually comparable for this purpose?
2. If yes, is the different treatment declared and consistently applied?

If both answers expose unexplained unequal treatment, the issue is structural rather than merely subjective.
