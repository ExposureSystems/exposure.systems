@'
# Pengo AI Structural Workbench

Stop waiting for AI to magically get better.

Find the structure. Use it to observe, control, and report what AI systems actually do.

## Site Architecture

This repository currently serves two public surfaces:

    /
    Pengo Systems front door

    /workbench/
    Pengo AI Structural Workbench front door

The root homepage should remain company-level. The Workbench homepage should remain the entry point for the public Workbench/library surface.

## Deployment Target

This repository is built for Cloudflare Pages.

Do not create Astro pages just to simulate Cloudflare platform behavior.

Use Cloudflare-native files for platform concerns:

- `public/_redirects` for redirects
- `public/_headers` for headers, crawler hints, and cache/security headers
- `public/robots.txt` for crawler discovery hints

## Build

Run:

    npm run build

The production build writes to:

    dist/

Current build flow:

    npm run validate
    npm run build:ontology
    astro build

## Workbench Routes

Human-facing Workbench pages live under:

    /workbench/

Primary pages:

    /workbench/check-input/
    /workbench/gap-explorer/
    /workbench/search/
    /workbench/issues/
    /workbench/patterns/
    /workbench/lenses/
    /workbench/categories/
    /workbench/examples/
    /workbench/field-notes/
    /workbench/articles/
    /workbench/videos/

## Cloudflare Redirects

Short Workbench paths are handled by Cloudflare Pages redirects, not Astro pages.

Configured in:

    public/_redirects

Current rule shape:

    /llms.txt        /workbench/llms.txt       301
    /wb              /workbench/              301
    /wb/             /workbench/              301
    /wb/*            /workbench/:splat        301

Do not recreate `src/pages/wb/` redirect pages.

## Cloudflare Headers

Headers are configured in:

    public/_headers

Current intent:

- keep human pages indexable
- keep Markdown artifacts indexable
- keep `llms.txt` indexable
- keep `_internal` JSON machine-accessible but `noindex`
- add basic security headers

## Discovery

Root-level LLM discovery is handled through:

    /llms.txt

That path redirects to:

    /workbench/llms.txt

Crawler discovery is handled through:

    /robots.txt

The standard Astro sitemap is:

    /sitemap-index.xml

The Workbench machine sitemap is:

    /workbench/machine-sitemap.xml

The machine sitemap intentionally lists machine-readable Workbench artifacts, especially Issue Markdown.

## Machine Artifacts

Machine-readable Workbench artifacts are published under:

    /workbench/_internal/

Current machine endpoints:

    /workbench/_internal/ontology-index.json
    /workbench/_internal/search-index.json
    /workbench/_internal/pattern-lens-matrix.json
    /workbench/_internal/check-input-vocabulary.json
    /workbench/_internal/check-input-matrix.json
    /workbench/_internal/check-input-index.json

Machine-readable Markdown artifacts are also published:

    /workbench/issues/[slug].md
    /workbench/patterns/[slug].md
    /workbench/lenses/[slug].md

## Canonical Ontology Terms

Canonical Pattern and Lens terms are mechanical labels.

Do not translate, localize, paraphrase, or rename:

- Pattern codes
- Lens codes
- Pattern slugs
- Lens slugs
- canonical Pattern titles
- canonical Lens titles

Localized explanations may be added later as a v2 overlay, but they must not replace canonical ontology terms.

UI pages should mark canonical Pattern/Lens labels with:

    <span class="canonical-term notranslate" translate="no">
      PAT-001 - Authority Collision
    </span>

## Source Data

Ontology source files live under:

    src/ontology/

Generated metadata lives under:

    src/content/_meta/

Generated metadata is committed intentionally so diffs remain visible and deterministic.

## Important Project Rule

This is a Cloudflare Pages static site.

Build real content as Astro/static files.

Use Cloudflare Pages features for redirects, headers, crawler hints, and edge behavior.
'@ | Set-Content README.md