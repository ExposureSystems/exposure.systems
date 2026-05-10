---

layer: lens

slug: reconciliation-lens

title: Reconciliation Lens

status: stable

---

\# Reconciliation Lens

\## Definition

Evaluates whether structural changes align with declared authority
updates.

\## Structural Transform

Input:

\- Prior structural graph

\- Updated structural graph

\- Declared authority changes

Operation:

\- Compare structural differences against declared updates

\- Identify unaligned modifications

Output:

\- Reconciliation classification

\- Unreconciled regions (if present)

\## Input Requirements

\- Versioned structural records

\- Declared authority change log

\## Structural Signature of Failure

Failure exists when structural changes occur without corresponding
declared authority updates.

\## Structural Limits

Evaluates alignment only.

Does not evaluate correctness of the authority change.
