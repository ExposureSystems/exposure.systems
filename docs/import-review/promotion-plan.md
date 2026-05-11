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

The following frontmatter fields should carry forward into public content:

```yaml
layer:
slug:
title:
code:
entry_version:
updated_at:
summary:
search_intents:
related_lenses:      # Patterns only
related_patterns:    # Lenses only
```

The Markdown body should carry forward as reviewed.

## Fields Stripped During Promotion

The following import-review-only fields should not be copied into public ontology content:

```yaml
review_state:
source_file:
```

Reason:

- `review_state` describes internal review workflow, not public ontology meaning.
- `source_file` describes import provenance for review, not public ontology meaning.

## Placeholder Replacement Rule

Reviewed import-review entries win over placeholder public entries.

If a reviewed draft has the same slug as an existing public placeholder, promotion may overwrite the public file.

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

Pattern/Lens relationships must match the reviewed draft frontmatter and the Pattern/Lens cross matrix.

Promotion must not invent new relationships.

If relationship drift is found, stop and correct the reviewed draft or matrix before promotion.

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
Only expected src/content and generated metadata files changed.
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
3. Fix the reviewed draft or promotion script.
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

## Working Principle

Promotion should be boring.

The meaning should already exist in the reviewed draft.

The promotion step should move approved reviewed ontology objects into public content, strip review-only fields, update generated indexes, and record the public ontology change.