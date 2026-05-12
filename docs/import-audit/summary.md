# Ontology Import Audit Summary

Review cycle: ontology-import-2026-05
Target ontology release: 0.1.0

## Rules

- Current source presence does not mean approval.
- Current source code does not mean approval.
- Proposed code does not mean approval.
- Approved code is required before promotion into public ontology content.
- Imported source status is not authoritative.

## Patterns

Total: 33

Import states:

- needs_review: 33

Current source overlaps:

- authority-collision (PAT-0100)

Approved codes this cycle:

- None

Proposed codes this cycle:

- None

Entries needing approved code:

- asymmetric-structure
- authority-collision
- authority-merge-conflict
- authority-shadowing
- authority-state-mismatch
- boundary-leakage
- circular-dependency
- compatibility-violation
- constraints-underspecified
- contract-drift
- convergence-failure
- cross-layer-escalation
- density-spike
- density-vacuum
- divergent-outputs
- escalation-growth
- incomplete-declaration
- interface-mismatch
- invariant-breakage
- missing-authority
- non-deterministic-execution
- orphaned-structure
- overreach
- persistence-instability
- propagation-amplification
- redundant-declaration
- reference-instability
- schema-breakage
- silent-mutation
- threshold-breach
- unbounded-scope
- unconstrained-expansion
- undeclared-side-effect

Imported entries marked stable in source docs: 33

Note: imported source status is not authoritative.

## Lenses

Total: 20

Import states:

- needs_review: 20

Current source overlaps:

- authority-overlay-lens (LEN-0100)
- conflict-lens (LEN-0110)
- invariant-lens (LEN-0130)
- reconciliation-lens (LEN-0120)

Approved codes this cycle:

- None

Proposed codes this cycle:

- None

Entries needing approved code:

- absence-lens
- authority-overlay-lens
- boundary-compliance-lens
- compatibility-envelope-lens
- compression-lens
- conflict-lens
- constraint-sufficiency-lens
- convergence-lens
- determinism-lens
- escalation-gradient-lens
- interface-contract-lens
- invariant-lens
- isolation-boundary-lens
- normalization-lens
- overreach-lens
- propagation-lens
- provenance-trace-lens
- reconciliation-lens
- reference-stability-lens
- variance-entropy-lens

Imported entries marked stable in source docs: 20

Note: imported source status is not authoritative.

## Review Rule

No imported Pattern or Lens should be promoted into `src/content/` until it has:

- approved code
- current summary
- canonical frontmatter
- translation policy
- search intents
- relationship mapping
- body completeness review
- publication/version decision
