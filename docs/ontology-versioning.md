# Workbench Ontology Versioning

This document defines the current versioning and changelog rules for Workbench ontology objects.

The goal is to keep public ontology references stable for humans, LLMs, diagnostics, and future receipt systems without making every content edit overly complicated.

## Object Types

Workbench currently treats these as public ontology objects:

- Issues: ISS-####
- Patterns: PAT-####
- Lenses: LEN-####
- Categories and Subcategories: CAT-####

## Durable Codes

Codes identify ontology objects.

Once a public code is released, it must not be reused for a different meaning.

Examples:

- PAT-0100 identifies one Pattern object.
- LEN-0100 identifies one Lens object.
- ISS-0001 identifies one Issue object.
- CAT-0100 identifies one Category object.

A code may become deprecated, superseded, archived, or replaced by another object, but it should not be overwritten or reinterpreted.

## Entry Versions

Each public ontology object has an entry_version.

Example frontmatter:

    entry_version: 0.1.0
    updated_at: "2026-05-10T00:00:00Z"

The entry version identifies the version of that specific object definition.

Examples:

- PAT-0100 at version 0.1.0
- LEN-0100 at version 0.1.0
- ISS-0001 at version 0.1.0
- CAT-0100 at version 0.1.0

Use major.minor.patch format.

## Ontology Release

The whole ontology/library state has a release version in:

    src/ontology/ontology-release.json

Current shape:

    {
      "ontology_release": "0.1.0",
      "released_at": "2026-05-10T00:00:00Z",
      "public_state": "current",
      "notes": "Initial Workbench ontology scaffold."
    }

The ontology release identifies the library state as a whole.

Entry version and ontology release are different:

- entry_version = version of one object
- ontology_release = version of the whole ontology/library state

## Public Changelog

Public ontology changes are recorded in:

    src/ontology/changelog.public.json

This changelog is only for public ontology objects:

- ISS-####
- PAT-####
- LEN-####
- CAT-####

It does not record:

- README edits
- Cloudflare configuration
- build script changes
- internal audit tooling
- repo maintenance
- unpublished import review decisions

## Public Changelog Entry Shape

Example entry:

    {
      "date": "2026-05-10T00:00:00Z",
      "ontology_release": "0.1.0",
      "object_code": "PAT-0100",
      "object_slug": "authority-collision",
      "object_type": "pattern",
      "entry_version": "0.1.0",
      "change_type": "created",
      "public_summary": "Initial Pattern scaffold added for Workbench ontology validation.",
      "receipt_impact": "none"
    }

## Change Types

Allowed public changelog change types:

- created
- expanded
- clarified
- renamed
- moved
- split
- merged
- deprecated
- superseded
- semantic_revision

## Receipt Impact

Allowed receipt impact values:

- none
- minor
- review_recommended
- breaking

Receipts will likely reference Patterns and Lenses more often than Issues. Issues are primarily public visible failure surfaces and discovery/browse objects.

## Public State

Public ontology release states:

- current
- deprecated
- superseded
- archived

Do not expose internal review states such as draft, needs_review, or approved_for_release as public status labels.

## Internal Status vs Public Metadata

Internal content may still use fields like:

    status: draft

But public pages and machine markdown routes should not expose that as public trust metadata.

Public surfaces should show:

- Code
- Version
- Ontology release
- Updated
- Public history

They should not show internal workflow status unless the object is publicly deprecated, superseded, or archived.

## Category Code Rules

Categories and subcategories share the CAT-#### namespace.

Rule:

- CAT-xx00 = parent category
- CAT-xx01 through CAT-xx99 = subcategory under CAT-xx00

Examples:

- CAT-0100 = parent category
- CAT-0101 = subcategory under CAT-0100
- CAT-0200 = parent category
- CAT-0203 = subcategory under CAT-0200

The system derives parent and kind from the code.

Do not author redundant fields like:

    kind: subcategory
    parent_code: CAT-0200

If the code is CAT-0203, the parent is already derivable as CAT-0200.

## Issue Category Placement

Issue identity and category placement are separate.

Issue code:

    code: ISS-0001

Category placement:

    primary_cat_code: CAT-0100
    secondary_cat_codes: []

An Issue may have one primary category code and zero or more secondary category codes.

Only the most specific category code should be authored. If the code is a subcategory, the parent category is derived.

## Category Promotion and Demotion

A previously released CAT-#### code should not be overwritten.

If a subcategory later needs to become a parent category, create a new CAT-xx00 code and mark the old code as superseded in public changelog/history.

Example:

- CAT-0304 - MCP

may later be superseded by:

- CAT-0700 - MCP

The old code remains part of history and should still resolve in release snapshots or compatibility data once those exist.

## Current Public Surfaces

Browser pages expose ontology metadata for:

- /workbench/issues/[slug]/
- /workbench/patterns/[slug]/
- /workbench/lenses/[slug]/
- /workbench/categories/[slug]/

Machine markdown routes expose ontology metadata for:

- /workbench/issues/[slug].md
- /workbench/patterns/[slug].md
- /workbench/lenses/[slug].md
- /workbench/categories/[slug].md

The public changelog page is:

    /workbench/ontology/changelog/

## Release Snapshots

Release snapshots are not implemented yet.

Future release snapshots should preserve frozen ontology definitions for diagnostics and receipt resolution.

Likely location:

    src/ontology/releases/ontology-0.1.0.json

Rule:

- Current pages show the current definition.
- Public changelog explains what changed.
- Release snapshots preserve what older receipts meant.

## Import Audit Rule

Import audit data is not approval.

Current source presence does not mean approval.

- current_src_code does not equal approved_code
- current_src_entry does not equal approved import entry

Imported Pattern and Lens candidates should not be promoted until explicitly reviewed and assigned approved codes for the current review cycle.
