---

layer: pattern

slug: circular-dependency

title: Circular Dependency

status: stable

---

\# Circular Dependency

\## Definition

Structural elements depend on each other in a closed loop without an
independent base condition.

\## Structural Signature

\- Two or more nodes

\- Mutual dependency relationships

\- No external resolution anchor

\## Deterministic Test

Given dependency relationships, no cycle may exist without a declared
resolution mechanism.

If a closed dependency loop exists without resolution, Circular
Dependency exists.

\## Structural Limits

Does not evaluate legitimacy of dependencies.

Evaluates presence of unresolved cycles only.
