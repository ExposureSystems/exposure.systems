---
layer: issue
ontology_slug: declared-owner-cannot-control-outcome
title: Declared Owner Cannot Control Outcome
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A person, role, system, or policy is declared responsible for an outcome but does not have the actual authority or control needed to govern it.
code: ISS-0015
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0060
primary_pattern: authority-state-mismatch
patterns:
  - authority-state-mismatch
  - missing-authority
  - compatibility-violation
search_intents:
  - declared owner cannot control outcome
  - owner is responsible but cannot change result
  - AI assigns responsibility without authority
  - approval owner lacks control
  - accountable person cannot govern outcome
  - declared owner has no real authority
---

## What This Looks Like

The workflow names a person, role, system, policy, or team as responsible for an outcome, but that owner cannot actually control the decision, tool, data, model behavior, or downstream effect. The user may see accountability assigned to someone who cannot approve, reverse, modify, or prevent the result.

## Why It Matters

Responsibility without control creates false accountability. It can make a workflow look governed while the actual authority sits elsewhere or nowhere at all. This makes escalation, audit, review, and correction difficult because the declared owner cannot reliably change the outcome they are responsible for.

## Structural Signal

The declared authority state does not match the operational control state. The issue is not only that the outcome is wrong; it is that responsibility and control are assigned to different places.

## Common Triggers

- A role is named as accountable but lacks tool or policy authority
- Approval responsibility is assigned without control over execution
- A human reviewer is responsible for a model behavior they cannot inspect or alter
- A policy owner cannot control downstream automation
- The system routes blame to a role that has no correction path
- Governance language is added without matching permissions or controls

## When to Use This Issue

Use this Issue when an owner is declared responsible for an AI or workflow outcome but does not have the actual authority, access, or control needed to govern that outcome.

## When Not to Use This Issue

Do not use this Issue when the owner has authority but makes a poor decision. Do not use it when no owner is declared at all. This Issue applies when an owner exists on paper but cannot control what they are said to own.
