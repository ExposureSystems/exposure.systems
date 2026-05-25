---
layer: issue
ontology_slug: downstream-steps-magnify-hallucinated-claim
title: Downstream Steps Magnify Hallucinated Claim
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A hallucinated or unsupported claim from an AI output is reused by later workflow steps until it becomes more influential than the evidence supports.
code: ISS-0097
category: spread-and-escalation
primary_cat_code: CAT-0110
secondary_cat_codes:
  - CAT-0010
primary_pattern: propagation-amplification
patterns:
  - propagation-amplification
  - escalation-growth
  - schema-breakage
search_intents:
  - downstream steps magnify hallucinated claim
  - AI hallucination spread downstream
  - unsupported claim became bigger issue
  - hallucinated claim used by workflow
  - AI false claim propagated
  - downstream workflow amplified hallucination
---

## What This Looks Like

The AI makes an unsupported or hallucinated claim, and later steps reuse it as if it were established fact. A summary, risk label, classification, recommendation, citation, review result, or generated record may carry the claim forward until it becomes more influential than the original output justified.

## Why It Matters

Hallucinated claims become more dangerous when downstream systems treat them as stable inputs. A claim that might have been easy to catch in one answer can become harder to unwind after it appears in reviews, tool calls, records, reports, or workflow decisions.

## Structural Signal

An unsupported claim propagates through later structure and gains weight as it moves. The issue is not only that the AI hallucinated; it is that downstream steps amplified the claim instead of containing or validating it.

## Common Triggers

- Early AI output is reused without source checking
- Summaries preserve claims but drop uncertainty markers
- Review steps treat generated claims as evidence
- Workflow fields copy unsupported text into structured records
- Later prompts include the claim as context without verification
- No checkpoint distinguishes source-backed claims from model-generated claims

## When to Use This Issue

Use this Issue when an unsupported or hallucinated AI claim spreads into downstream steps and becomes more consequential than the original output.

## When Not to Use This Issue

Do not use this Issue for a hallucinated claim that stays local to one response. Do not use it when downstream steps validate and reject the claim before it affects the workflow.
