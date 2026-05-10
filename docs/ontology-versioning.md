# Workbench Ontology Versioning

This document defines the current versioning and changelog rules for Workbench ontology objects.

The goal is to keep public ontology references stable for humans, LLMs, diagnostics, and future receipt systems without making every content edit overly complicated.

## Object Types

Workbench currently treats these as public ontology objects:

- Issues: `ISS-####`
- Patterns: `PAT-####`
- Lenses: `LEN-####`
- Categories and Subcategories: `CAT-####`

## Durable Codes

Codes identify ontology objects.

Once a public code is released, it must not be reused for a different meaning.

Examples:

- `PAT-0100` identifies one Pattern object.
- `LEN-0100` identifies one Lens object.
- `ISS-0001` identifies one Issue object.
- `CAT-0100` identifies one Category object.

A code may become deprecated, superseded, archived, or replaced by another object, but it should not be overwritten or reinterpreted.

## Entry Versions

Each public ontology object has an `entry_version`.

Example:

```yaml
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
