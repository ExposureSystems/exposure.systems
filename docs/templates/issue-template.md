---
layer: issue
slug: issue-0002
title: Short Issue Title
status: draft
category: drift-variance
summary: One-sentence description of the visible failure surface.
primary_pattern: authority-collision
patterns:
  - authority-collision
search_intents:
  - plain language symptom someone might search for
  - another likely search phrase
---

# Short Issue Title

## Visible Surface

Describe what someone can see without claiming root cause.

Use observable language:

- what was asked
- what happened
- what looked wrong
- what was missing, crossed, unstable, or unclear

## Why It Matters

Explain why this failure surface creates confusion, risk, rework, drift, overreach, or loss of control.

## Structural Reading

Map the issue to structural language.

Do not claim certainty. Use language like:

- This may indicate...
- This often appears when...
- This can surface when...

## Related Pattern

Primary Pattern:

- `authority-collision`

Supporting Patterns:

- Add more only when they are structurally justified.

## Inspection Questions

- What actor, boundary, scope, constraint, or source is missing?
- What did the system have to infer?
- What authority did the output assume?
- What changed between the ask and the answer?
- What would need to be declared to make the work controllable?

## Boundary

This Issue is a visible failure surface. It is not a model diagnosis, risk score, proof of cause, or governance finding.