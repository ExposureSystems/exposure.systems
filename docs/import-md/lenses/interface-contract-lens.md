---

layer: lens

slug: interface-contract-lens

title: Interface Contract Lens

status: stable

---

\# Interface Contract Lens

\## Definition

Compares declared interface structure to runtime structure to detect
contract deviations.

\## Structural Transform

Input:

\- Declared interface specification

\- Observed structural graph

Operation:

\- Compare declared interface to observed structure

\- Identify mismatches

Output:

\- Contract compliance classification

\- Deviation regions (if present)

\## Input Requirements

\- Explicit interface definitions

\## Structural Signature of Failure

Failure exists when observed structure violates declared interface
definitions.

\## Structural Limits

Evaluates interface conformance only.

Does not evaluate constraint sufficiency.
