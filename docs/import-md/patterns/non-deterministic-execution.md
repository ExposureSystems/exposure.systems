---

layer: pattern

slug: non-deterministic-execution

title: Non-Deterministic Execution

status: stable

---

\# Non-Deterministic Execution

\## Definition

Identical structural inputs produce different structural outputs across
executions.

\## Structural Signature

\- Identical input graph

\- Identical declared constraints

\- Divergent output graphs

\## Deterministic Test

Given identical structural inputs and constraints, outputs must be
equivalent.

If outputs differ, Non-Deterministic Execution exists.

\## Structural Limits

Does not identify cause of divergence.

Evaluates reproducibility only.
