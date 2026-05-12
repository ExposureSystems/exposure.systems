---

layer: pattern

slug: reference-instability

title: Reference Instability

status: stable

---

\# Reference Instability

\## Definition

Structural references change across evaluations without declared cause.

\## Structural Signature

\- Node or edge identifiers

\- Repeated evaluation cycles

\- Identity drift

\## Deterministic Test

Given identical structural inputs, reference identifiers must remain
stable.

If identifiers change without cause, Reference Instability exists.

\## Structural Limits

Does not evaluate structural correctness.

Evaluates identity stability only.
