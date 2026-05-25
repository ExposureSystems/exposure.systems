---
layer: issue
ontology_slug: validation-result-changes-on-retry
title: Validation Result Changes on Retry
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A validation, grading, review, classification, or pass/fail result changes after retry even though the input and declared validation rules did not change.
code: ISS-0006
category: inconsistent-behavior
primary_cat_code: CAT-0090
secondary_cat_codes:
  - CAT-0010
primary_pattern: non-deterministic-execution
patterns:
  - non-deterministic-execution
  - divergent-outputs
  - schema-breakage
search_intents:
  - validation result changes on retry
  - AI validation changes each time
  - same input gets different pass fail result
  - AI grader changes after retry
  - review result is inconsistent
  - validation output is not stable
---

# Validation Result Changes on Retry

## What This Looks Like

The system evaluates the same input more than once and returns different validation results. A response may pass once and fail later, receive a different grade, fall into a different class, trigger a different review result, or produce a different structured validation output without a declared change in the input or rule set.

## Why It Matters

Validation is often used as a control point. If the result changes on retry, downstream systems may not know whether to accept, reject, escalate, repair, or rerun the work. This can make review pipelines unstable and can turn validation from a gate into another source of uncertainty.

## Structural Signal

The validation contract appears stable, but the observed result is not. The issue is not simply that the model made a bad judgment; it is that the same object and same declared criteria do not produce a stable validation state.

## Common Triggers

- The validation rule is underspecified or leaves judgment thresholds unclear
- The model is asked to both interpret and validate without a fixed rubric
- Structured validation output is generated without a deterministic schema check
- The pass/fail boundary depends on ambiguous language
- Context, hidden state, or sampling changes the evaluation path
- The validator explains its reasoning differently on each run and changes the result to match

## When to Use This Issue

Use this Issue when retrying validation, grading, classification, or review changes the result even though the input and declared criteria are supposed to be the same.

## When Not to Use This Issue

Do not use this Issue when the validation rules changed, the input changed, or the user corrected missing information between attempts. Do not use it for ordinary disagreement with a single validation result unless retry instability is part of the problem.
