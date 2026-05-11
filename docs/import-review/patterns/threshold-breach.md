---
layer: pattern
slug: threshold-breach
title: Threshold Breach
code: PAT-0390
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A structural condition where an observed metric, value, state, or condition exceeds a declared quantitative or qualitative threshold.
review_state: ready_for_promotion
source_file: docs/import-clean/patterns/threshold-breach.md
search_intents:
  - threshold breach
  - exceeds threshold
  - outside bounds
  - limit exceeded
  - boundary exceeded
related_lenses:
  primary:
    - invariant-lens
  secondary:
    - boundary-compliance-lens
---

# Threshold Breach

## Definition

Threshold Breach exists when an observed metric, value, state, condition, or structural measurement exceeds a declared quantitative or qualitative threshold.

The structure does not fail because a value is high, low, severe, or unusual. It fails because the value crosses a boundary that the system declared as meaningful.

## Visible Surface

Users may notice Threshold Breach when a system crosses a stated limit, cap, floor, quota, risk band, tolerance, or qualitative boundary.

Common visible signs include:

- A count exceeds a configured maximum.
- A risk score crosses an escalation line.
- A queue, workflow, or review load passes an allowed limit.
- A generated output violates a declared tolerance.
- A permission, scope, or propagation effect grows beyond a threshold.
- A density, variance, latency, severity, or error metric exceeds bounds.
- A qualitative threshold such as “high risk,” “unsafe,” or “requires review” is crossed.

The visible problem is often described as “this crossed the line.”

## Structural Signature

Threshold Breach usually contains these elements:

- A defined threshold
- An observed structural value, metric, state, classification, or condition
- A comparison between observed value and declared threshold
- An exceedance condition
- A consequence, routing, validation, or interpretation that depends on the threshold

The threshold may be quantitative, qualitative, categorical, ordinal, policy-based, risk-based, operational, or governance-based.

## Deterministic Test

Given declared thresholds, observed structural metrics should remain within bounds unless a declared exception applies.

Ask:

1. What threshold is declared?
2. What value, state, or condition is being measured?
3. What observed value or condition occurred?
4. Did the observation cross the declared threshold?
5. Is there a declared exception, tolerance, grace period, or override?

If the observed value exceeds the declared threshold without an exception, Threshold Breach exists.

## Common Contexts

Threshold Breach commonly appears in:

- Risk scoring
- Safety gates
- Rate limits
- Queue limits
- Evaluation scores
- Model confidence bands
- Policy severity levels
- Permission scope limits
- Data quality rules
- Alerting systems
- Escalation workflows
- Density or variance monitoring
- Error budgets
- Compliance checks
- Human review triggers

In AI systems, it often appears when output risk, uncertainty, variance, tool use, escalation severity, policy confidence, or evaluation failure count crosses a declared boundary.

## Distinguish From

### Invariant Breakage

Invariant Breakage occurs when a declared condition that should always hold is violated.

Threshold Breach can be a form of invariant breakage when the invariant is “this value must remain within bounds.” Threshold Breach specifically names crossing a declared threshold.

### Boundary Leakage

Boundary Leakage occurs when structural influence crosses a declared boundary without authorization.

Threshold Breach concerns metric or condition bounds, not necessarily spatial, authority, or containment boundaries.

### Escalation Growth

Escalation Growth occurs when impact or consequence increases across sequential states.

Escalation Growth may cause a threshold breach, but Threshold Breach specifically names the crossing of a declared limit.

### Density Spike

Density Spike occurs when localized concentration increases disproportionately.

A density spike may breach a threshold, but Threshold Breach focuses on the declared boundary being crossed.

## Related Lenses

Primary Lenses:

- Invariant Lens

Secondary Lenses:

- Boundary Compliance Lens

Use the Invariant Lens to inspect whether the threshold represents a required condition that must remain true.

Use the Boundary Compliance Lens to inspect whether the observed value stayed inside declared bounds.

## Structural Limits

Threshold Breach does not evaluate whether the threshold is correct, useful, fair, or well-designed.

It does not decide what the threshold should be.

It only identifies that an observed value, state, or condition exceeded a declared threshold.

A changed threshold, declared exception, grace period, tolerance band, or corrected value may resolve the Pattern.

## Workbench Notes

This Pattern is useful when a system crosses a declared line and downstream behavior depends on that crossing.

The key Workbench move is to separate three questions:

1. What threshold was declared?
2. What observed value or condition was measured?
3. Did the observed value cross the threshold?

If the line was declared and crossed, the issue is Threshold Breach.