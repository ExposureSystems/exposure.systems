# Pattern and Lens Promotion Plan

This document defines the controlled path for promoting reviewed Pattern and Lens drafts from `docs/import-review` into public Workbench ontology content.

This plan is limited to Patterns and Lenses.

Issues, Categories, AIFT lessons, articles, videos, examples, and other supporting artifacts are out of scope for this promotion phase.

## Goal

Promote reviewed Pattern and Lens drafts into public ontology content without inventing new ontology meaning during promotion.

The reviewed drafts are the source of truth for this promotion step.

Promotion should be mechanical:

```text
docs/import-review/patterns/*.md -> src/content/patterns/*.md
docs/import-review/lenses/*.md -> src/content/lenses/*.md
```

Promotion must respect the current public Astro content schema.

Public Pattern and Lens entries currently allow a smaller frontmatter set than import-review drafts. Promotion must therefore strip review-only and matrix-derived fields before writing to `src/content`.

## Current State

Reviewed drafts exist in:

```text
docs/import-review/patterns/
docs/import-review/lenses/
```

Public ontology content exists in:

```text
src/content/patterns/
src/content/lenses/
```

Some existing public Pattern and Lens files may be placeholder/test entries. Placeholder public entries should not block promotion of reviewed entries.

## Promotion Scope

Promote:

- reviewed Patterns marked `ready_for_promotion`
- reviewed Lenses marked `ready_for_promotion`

Do not promote:

- raw files from `docs/import-clean`
- drafts not marked `ready_for_promotion`
- Issues
- Categories
- supporting content
- AIFT content
- examples, articles, videos, field notes, receipts, or lessons

## Fields Carried Forward

The following public frontmatter fields should carry forward into public Pattern and Lens content:

```yaml
layer:
title:
code:
entry_version:
updated_at:
summary:
```

The Markdown body should carry forward as reviewed.

## Fields Added During Promotion

The following public-only field should be added during promotion:

```yaml
status: stable
```

Reason:

- Public content schema currently requires `status`.
- Reviewed drafts use `review_state` for internal workflow instead.

## Fields Stripped During Promotion

The following import-review, review-only, or non-public-schema fields should not be copied into public Pattern or Lens ontology content:

```yaml
slug:
review_state:
source_file:
search_intents:
related_lenses:
related_patterns:
```

Reason:

- `slug` is represented by the filename in public content.
- `review_state` describes internal review workflow, not public ontology meaning.
- `source_file` describes import provenance for review, not public ontology meaning.
- `search_intents` are useful review/search metadata but are not allowed by the current public Pattern/Lens schema.
- `related_lenses` and `related_patterns` are derived through the Pattern/Lens matrix under the current public ontology validator.

## Public Schema Rule

Promotion must produce public Pattern and Lens files that match the current `src/content.config.ts` schema.

For public Patterns and Lenses, the allowed frontmatter set is currently:

```yaml
layer:
title:
status:
entry_version:
updated_at:
summary:
code:
```

Do not copy extra import-review fields into public Pattern or Lens files unless the public schema is intentionally expanded first.

## Placeholder Replacement Rule

Reviewed import-review entries win over placeholder public entries.

If a reviewed draft has the same slug/filename as an existing public placeholder, promotion may overwrite the public file.

If a reviewed draft has a code that conflicts with an existing public placeholder, the reviewed draft may still be promoted.

This rule applies because the current public placeholder Pattern/Lens entries are not the real v1 ontology authority.

The promotion commit should make clear that reviewed entries are replacing or superseding placeholder public ontology content.

## Changelog Rule

Import-review work does not require public changelog entries.

Promotion into `src/content` does create or change public ontology meaning.

Therefore, public changelog entries should be added during promotion.

For this phase, changelog entries should describe the batch-level public ontology change, not every internal review step.

Suggested changelog shape:

```json
{
  "version": "0.1.0",
  "date": "2026-05-10",
  "changes": [
    {
      "type": "added",
      "scope": "patterns",
      "summary": "Promoted reviewed Pattern ontology entries."
    },
    {
      "type": "added",
      "scope": "lenses",
      "summary": "Promoted reviewed Lens ontology entries."
    }
  ]
}
```

Exact changelog format must match the existing `src/ontology/changelog.public.json` structure.

## Relationship Rule

Pattern/Lens relationships are public through the Pattern/Lens matrix under the current repo design.

Promotion must not invent new relationships.

Promotion must not copy review-only relationship frontmatter into public Pattern or Lens entries unless the public schema is intentionally expanded first.

Relationship data currently lives in:

```text
src/ontology/pattern-lens-matrix.json
```

If relationship drift is found between reviewed drafts and the matrix, stop and correct the reviewed draft or matrix before promotion.

## Batch Strategy

Promote in controlled batches.

Recommended sequence:

1. Promote reviewed Patterns.
2. Run build and status.
3. Commit Patterns.
4. Promote reviewed Lenses.
5. Run build and status.
6. Commit Lenses.
7. Tag the completed Pattern/Lens promotion milestone.

If the full Pattern batch is too large or noisy, split Patterns into smaller batches.

If the full Lens batch is manageable, promote Lenses as one batch.

## Validation Commands

After each promotion batch, run:

```powershell
npm.cmd run build
git status
```

Expected result:

```text
Workbench ontology validation passed.
Import review validation passed.
Astro build complete.
Only expected src/content, changelog, and generated metadata files changed.
```

Generated files may include:

```text
src/content/_meta/ontology-index.json
src/content/_meta/search-index.json
src/content/_meta/check-input-index.json
```

## Commit Rules

Each promotion batch should have a clear commit message.

Suggested Pattern promotion commit:

```text
Promote reviewed pattern ontology entries
```

Suggested Lens promotion commit:

```text
Promote reviewed lens ontology entries
```

Suggested final tag:

```text
workbench-patterns-lenses-v0.1.0
```

Use an annotated tag:

```powershell
git tag -a workbench-patterns-lenses-v0.1.0 -m "Promote reviewed Pattern and Lens ontology entries for Workbench v0.1.0"
git push origin workbench-patterns-lenses-v0.1.0
```

## Rollback Rule

If promotion causes validation or build failure:

1. Do not commit.
2. Inspect the failing file or generated output.
3. Fix the reviewed draft, matrix, changelog, schema, or promotion script.
4. Re-run build.
5. Commit only after validation passes.

If a committed promotion needs reversal, use a normal Git revert rather than manually deleting public ontology files.

## What This Plan Does Not Do

This plan does not:

- approve individual ontology meanings
- rewrite reviewed drafts
- create Issues
- create Categories
- define AIFT lessons
- attach supporting articles/videos/examples
- finalize future page artifact rendering
- decide relationship summary storage
- replace the Pattern/Lens matrix design
- expand the public Astro content schema

## Working Principle

Promotion should be boring.

The meaning should already exist in the reviewed draft.

The promotion step should move approved reviewed ontology objects into public content, strip review-only and non-public-schema fields, add required public fields, update generated indexes, and record the public ontology change.
