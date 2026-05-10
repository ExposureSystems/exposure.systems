# Workbench Import Review

This folder is the review and enrichment workspace between raw imported ontology candidates and public Workbench ontology content.

## Purpose

Raw imported files live in:

    docs/import-clean/patterns/
    docs/import-clean/lenses/

Public ontology files live in:

    src/content/patterns/
    src/content/lenses/

Reviewed Workbench-ready drafts live here:

    docs/import-review/patterns/
    docs/import-review/lenses/

Do not promote raw import-clean entries directly into public ontology content.

## Pipeline

The intended v1 pipeline is:

    import-clean -> import-review -> src/content

Meaning:

1. Start with an existing imported Pattern or Lens.
2. Review whether it is still a valid Workbench ontology object.
3. Rewrite and complete it as a Workbench-ready draft in docs/import-review.
4. Validate that the reviewed draft has the required fields and sections.
5. Promote only reviewed drafts into src/content.

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
- Is the body complete enough for Workbench use?

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

Only entries marked ready_for_promotion should be eligible for promotion.

## Code Rules

The review draft must include an approved public code.

The code is a human review decision.

Automation may validate code format and uniqueness, but it must not assign codes.

Expected formats:

- Patterns: PAT-####
- Lenses: LEN-####

## Body Source Rule

The reviewed draft is the source for promotion.

Promotion should not copy directly from docs/import-clean unless the reviewed draft explicitly preserves that body.

If the imported body is incomplete, unclear, too thin, or missing Workbench-specific sections, complete it in docs/import-review before promotion.

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
