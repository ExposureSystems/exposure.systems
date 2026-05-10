---

layer: pattern

slug: boundary-leakage

title: Boundary Leakage

status: stable

---

\# Boundary Leakage

\## Definition

Structural effects cross declared boundaries without authorization.

\## Structural Signature

\- Declared boundary

\- Structural propagation beyond boundary

\- No declared exception

\## Deterministic Test

Given declared boundaries, structural influence must remain contained.

If containment fails, Boundary Leakage exists.

\## Structural Limits

Does not evaluate boundary legitimacy.

Evaluates containment only.
