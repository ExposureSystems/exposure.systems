# Workbench Import Review

This folder is the review and enrichment workspace between raw imported ontology candidates and public Workbench ontology content.

## Three-Lane Model

Workbench content has three separate lanes.

### Lane 1: Canonical Ontology Information

This is the actual public ontology object once promoted.

Examples:

- Pattern canonical information: `PAT-####`
- Lens canonical information: `LEN-####`
- Issue canonical information: `ISS-####`
- Category/Subcategory canonical information: `CAT-####`

Canonical public entries live in:

    src/content/patterns/
    src/content/lenses/
    src/content/issues/
    src/content/categories/

This lane includes the object meaning:

- code
- slug
- title
- summary
- definition
- structural signature
- deterministic test
- structural limits
- entry version
- updated timestamp

### Lane 2: Derived Cross-Matrix Relationships

This is how public ontology objects connect to each other.

Examples:

- Pattern to Lens relationships
- Issue to Pattern relationships
- Issue to Category relationships
- Category to Issue relationships
- Lens to Pattern relationships derived from Pattern relationships

Current sources include:

    src/ontology/pattern-lens-matrix.json
    src/content/issues/
    src/content/categories/
    src/content/_meta/ontology-index.json

This lane directly affects how Workbench pages assemble related ontology objects.

### Lane 3: Supporting Site and Page Artifacts

This is other useful content that can attach to Workbench pages later.

Examples:

- articles
- videos
- examples
- field notes
- diagnostics
- checklists
- templates
- walkthroughs
- receipts

Lane 3 is not required for v1 import review.

Do not design Lane 1 or Lane 2 in a way that prevents Lane 3 from attaching later.

A rendered Workbench page is an assembled artifact. It may eventually combine:

- canonical ontology information
- derived ontology relationships
- supporting site/page artifacts

The reviewed draft is not the whole future page.

## Purpose of `docs/import-review`

Raw imported files live in:

    docs/import-clean/patterns/
    docs/import-clean/lenses/

Reviewed proposed drafts live in:

    docs/import-review/patterns/
    docs/import-review/lenses/

Public canonical ontology files live in:

    src/content/patterns/
    src/content/lenses/

Do not promote raw import-clean entries directly into public ontology content.

## Pipeline

The intended v1 pipeline is:

    import-clean -> import-review -> src/content

Meaning:

1. Start with an existing imported Pattern or Lens.
2. Review whether it is still a valid Workbench ontology object.
3. Rewrite and complete it as a proposed Workbench-ready draft in `docs/import-review`.
4. Validate that the reviewed draft has the required fields and sections.
5. Promote only reviewed drafts into `src/content`.

## Important Boundaries

### Import Review Drafts Are Not Canonical

Files in `docs/import-review` are proposed reviewed drafts.

They are not canonical public ontology entries.

The canonical public entry exists only after promotion into:

    src/content/patterns/
    src/content/lenses/
    src/content/issues/
    src/content/categories/

### Validation Is Not Approval

Validation only checks structure and completeness.

Validation does not decide:

- whether an object should exist
- whether the definition is correct
- whether the code assignment is right
- whether the relationships are semantically correct

Those remain review decisions.

### Rendered Pages Are Assembled Artifacts

The public Workbench page is not limited to the Markdown body of the ontology entry.

A page may include:

- the canonical ontology object
- derived relationships from the ontology index/matrix
- related supporting content added later

For v1, import review focuses on Lane 1 and Lane 2 only.

Lane 3 content should remain possible later, but it is not required now.

## What Review Means

Review is not just formatting.

Review answers:

- Is this object still needed?
- Is it actually a Pattern or Lens?
- Is it distinct from nearby entries?
- Does it need to be renamed, merged, split, rejected, or promoted?
- What public code is approved?
- What version does this entry start at?
- What relationships does it have to Patterns or Lenses?
- Is the ontology core complete enough for Workbench use?

## Reviewed Pattern Requirements

A reviewed Pattern draft should include frontmatter like:

    layer: pattern
    slug: asymmetric-structure
    title: Asymmetric Structure
    code: PAT-0110
    entry_version: 0.1.0
    updated_at: "2026-05-10T00:00:00Z"
    summary: A concise public summary.
    review_state: ready_for_promotion
    source_file: docs/import-clean/patterns/asymmetric-structure.md
    search_intents:
      - user-facing search phrase
    related_lenses:
      primary:
        - conflict-lens
      secondary:
        - invariant-lens

Required Pattern body sections:

- Definition
- Visible Surface
- Structural Signature
- Deterministic Test
- Common Contexts
- Distinguish From
- Related Lenses
- Structural Limits

These sections support the proposed canonical Pattern core and authored guidance. They are not the entire future page artifact.

Optional Pattern body sections:

- Example Signals
- Non-Examples
- Workbench Notes

## Reviewed Lens Requirements

A reviewed Lens draft should include frontmatter like:

    layer: lens
    slug: conflict-lens
    title: Conflict Lens
    code: LEN-0110
    entry_version: 0.1.0
    updated_at: "2026-05-10T00:00:00Z"
    summary: A concise public summary.
    review_state: ready_for_promotion
    source_file: docs/import-clean/lenses/conflict-lens.md
    search_intents:
      - user-facing search phrase
    related_patterns:
      primary:
        - authority-collision
      secondary:
        - asymmetric-structure

Required Lens body sections:

- Definition
- Use This Lens When
- Input Requirements
- Structural Transform
- Output / Finding Shape
- Related Patterns
- Distinguish From
- Structural Limits

These sections support the proposed canonical Lens core and authored guidance. They are not the entire future page artifact.

Optional Lens body sections:

- Example Signals
- Non-Examples
- Workbench Notes

## Review States

Allowed review states:

- needs_review
- in_review
- ready_for_promotion
- promoted
- rejected
- merged

Only entries marked `ready_for_promotion` should be eligible for promotion.

## Code Rules

The review draft must include an approved public code before promotion.

The code is a human review decision.

Automation may validate code format and uniqueness, but it must not assign codes.

Expected formats:

- Patterns: `PAT-####`
- Lenses: `LEN-####`

## Body Source Rule

The reviewed draft is the proposed source for promotion.

Promotion should not copy directly from `docs/import-clean` unless the reviewed draft explicitly preserves that body.

If the imported body is incomplete, unclear, too thin, or missing Workbench-specific sections, complete it in `docs/import-review` before promotion.

## Relationship Rule

Pattern-to-Lens and Lens-to-Pattern relationships are semantic review decisions.

Automation may check that referenced slugs exist and are not duplicated, but it must not invent mappings.

## Promotion Rule

Promotion should eventually be mechanical:

    docs/import-review/patterns/example.md -> src/content/patterns/example.md
    docs/import-review/lenses/example.md -> src/content/lenses/example.md

Promotion may update generated or derived files, but it should not invent ontology meaning.

## Public Changelog Rule

A promoted entry should have a public changelog entry if it creates or changes public ontology meaning.

Public changelog entries live in:

    src/ontology/changelog.public.json

The changelog is for public ontology changes only. It is not for internal review notes, build scripts, README edits, or import-audit bookkeeping.