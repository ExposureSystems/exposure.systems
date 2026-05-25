---
layer: issue
ontology_slug: review-queue-becomes-bottleneck
title: Review Queue Becomes Bottleneck
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A review queue, approval path, or validation stage accumulates too much work and begins blocking the workflow.
code: ISS-0105
category: duplication-and-overload
primary_cat_code: CAT-0140
secondary_cat_codes:
  - CAT-0070
primary_pattern: density-spike
patterns:
  - density-spike
  - orphaned-structure
  - convergence-failure
search_intents:
  - review queue becomes bottleneck
  - AI review queue bottleneck
  - workflow stuck in review queue
  - review backlog blocks AI workflow
  - approval queue overloaded
  - too many items waiting for review
---

## What This Looks Like

A review queue, approval path, validation stage, or human-in-the-loop checkpoint receives more work than it can process. AI outputs, cases, tool actions, escalations, or generated artifacts pile up waiting for review, and the workflow slows or stalls because the queue becomes the limiting step.

## Why It Matters

Review queues are supposed to control quality and risk. When they become bottlenecks, they can block useful work, delay decisions, and create pressure to skip review. The system may appear governed, but the governing step no longer has enough capacity or structure to handle the volume it receives.

## Structural Signal

Too much workflow density accumulates at one review node. The issue is not simply that review exists; it is that the review stage absorbs more decisions, checks, or approvals than it can resolve.

## Common Triggers

- AI automation increases output volume without increasing review capacity
- Multiple workflow paths converge on one review queue
- Review criteria are too broad or too manual
- Low-risk and high-risk cases use the same review path
- The workflow lacks triage before human review
- Repeated repair or escalation cycles send work back into the same queue

## When to Use This Issue

Use this Issue when a review, approval, validation, or human-check stage becomes the point where AI work accumulates and blocks workflow progress.

## When Not to Use This Issue

Do not use this Issue when a single review is slow but the queue is not overloaded. Do not use it when the real problem is missing review criteria rather than queue bottlenecking.
