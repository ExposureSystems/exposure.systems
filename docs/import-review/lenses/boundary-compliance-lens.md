---
layer: lens
slug: boundary-compliance-lens
title: Boundary Compliance Lens
code: LEN-0120
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Evaluates observed structure against declared boundary posture, including allow, block, and exception rules.
review_state: ready_for_promotion
source_file: docs/import-clean/lenses/boundary-compliance-lens.md
search_intents:
  - boundary compliance
  - boundary policy violation
  - allow block exception
  - boundary posture
  - policy adherence
related_patterns:
  primary:
    - overreach
  secondary:
    - threshold-breach
    - boundary-leakage
    - compatibility-violation
---

# Boundary Compliance Lens

## Definition

Boundary Compliance Lens evaluates observed structure against declared boundary posture, including allow, block, and exception rules.

It is used when the main question is whether a structural region, action, effect, or state stayed inside the boundary behavior the system declared.

## Use This Lens When

Use this Lens when a system has explicit boundary policies and observed structure may be violating them.

Common triggers include:

- A region crosses from allowed into blocked behavior.
- An exception is used outside its declared scope.
- A structural action violates an allow, block, or exception rule.
- A threshold or compatibility boundary may have been exceeded.
- A boundary exists, but observed behavior does not match the declared posture.

## Input Requirements

- Observed structural graph
- Declared boundary policies
- Boundary posture definitions such as allow, block, exception, limit, or permitted crossing

The Lens needs declared boundary policies. Without them, it cannot distinguish non-compliance from undefined boundary behavior.

## Structural Transform

Input:

- Structural graph
- Declared boundary policies

Operation:

- Compare structural regions against policy definitions
- Identify regions that violate declared boundary posture
- Identify invalid or overextended exceptions

Output:

- Compliance classification
- Policy violation regions, if present
- Boundary posture that was violated

## Output / Finding Shape

This Lens should produce:

- the boundary or policy being evaluated
- the observed region, action, effect, or state
- the declared posture that applies
- whether the observed structure complies or violates the boundary rule
- the violation region if failure is present

## Related Patterns

Related Patterns are surfaced from the Pattern/Lens matrix.

Primary Pattern matches are cases where boundary compliance is one of the strongest detection mechanisms.

Current primary Pattern matches:

- Overreach

Current secondary Pattern matches:

- Threshold Breach
- Boundary Leakage
- Compatibility Violation

## Distinguish From

### Isolation Boundary Lens

Isolation Boundary Lens inspects whether a boundary contains or separates structure.

Boundary Compliance Lens checks whether observed behavior follows the declared boundary posture.

### Constraint Sufficiency Lens

Constraint Sufficiency Lens checks whether constraints are strong enough.

Boundary Compliance Lens checks whether declared boundary rules are followed.

### Overreach Lens

Overreach Lens checks whether action extends beyond declared scope or authority.

Boundary Compliance Lens checks boundary-policy adherence more generally.

## Structural Limits

Boundary Compliance Lens evaluates policy adherence only.

It does not evaluate whether the boundary policy is sufficient, correct, legitimate, or well-designed.

It does not invent boundary rules where none are declared.

## Workbench Notes

Boundary Compliance Lens is useful when the fastest question is:

“Did this structure obey the boundary rule?”

If the observed structure violates allow, block, exception, or limit posture, the Lens surfaces the compliance failure.