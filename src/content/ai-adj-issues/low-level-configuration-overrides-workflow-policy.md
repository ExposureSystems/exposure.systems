---
layer: ai_adj_issue
ontology_slug: low-level-configuration-overrides-workflow-policy
title: Low-Level Configuration Overrides Workflow Policy
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: A low-level configuration, product setting, connector rule, runtime option, or environment flag overrides the workflow policy the user expects to govern the task.
code: ADJ-0015
related_issues:
  - hidden-rule-overrides-visible-instruction
  - actual-policy-differs-from-declared-policy
  - tool-rules-and-prompt-rules-conflict
  - behavior-does-not-match-declared-role
  - permissions-conflict-after-being-combined
search_intents:
  - low level configuration overrides workflow policy
  - configuration overrides AI policy
  - product setting overrides workflow rule
  - connector setting overrides prompt
  - runtime config changes AI behavior
  - hidden configuration overrides visible policy
---

## What This Looks Like

The workflow policy says one thing, but a lower-level configuration or product setting causes different behavior. A connector rule, environment flag, runtime option, tool setting, workspace configuration, model mode, or deployment setting may override the policy the user expects to control the task.

## Why Users Blame AI

The user sees the AI behaving against the visible workflow policy. The actual cause may be buried in configuration below the policy layer. The AI looks inconsistent or disobedient because the governing rule is not the one the user can see.

## What to Check First

- Whether product, workspace, connector, or runtime settings conflict with workflow policy
- Whether a hidden or lower-level rule has higher practical authority
- Whether the workflow policy is documented but not enforced in runtime configuration
- Whether tool permissions override prompt or policy intent
- Whether configuration differs between environments
- Whether the user can inspect which rule actually governed behavior

## When This Is AI-Adjacent

Use this AI-Adjacent Issue when low-level configuration overrides the workflow policy expected by the user. If a hidden rule overrides a visible instruction, use the related Workbench Issue. If tool and prompt rules conflict, use that related Issue.
