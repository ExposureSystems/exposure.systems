---

layer: pattern

slug: incomplete-declaration

title: Incomplete Declaration

status: stable

---

\# Incomplete Declaration

\## Definition

A structural element is declared without all required attributes or
dependent declarations.

\## Structural Signature

\- Declared node or region

\- Missing required fields or linked definitions

\- Structural ambiguity

\## Deterministic Test

Given a declared structural element, all required attributes must be
present.

If required attributes are missing, Incomplete Declaration exists.

\## Structural Limits

Does not evaluate correctness of provided attributes.

Evaluates completeness only.
