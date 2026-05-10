# Ontology Import Audit

This folder tracks review state for imported Pattern and Lens source material.

These files do not promote imported content into the public Workbench ontology.

Import sources remain under:

    docs/import-clean/patterns/
    docs/import-clean/lenses/

Public ontology content remains under:

    src/content/patterns/
    src/content/lenses/

Audit entries are review/control data only. Entries must remain in `needs_review` until reviewed and approved.

## Import Rule

The imported files are candidate source material.

They are not complete public ontology entries until reviewed, enriched, validated, and promoted into `src/content/`.

## Review States

- `needs_review`: imported material has not been reviewed
- `approved_for_draft`: may be promoted as draft public content
- `approved_for_stable`: may be promoted as stable public content
- `rejected`: should not be promoted
- `merged`: concept has been merged into another Pattern or Lens