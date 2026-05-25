---
layer: issue
ontology_slug: agent-gets-conflicting-tool-authority
title: Agent Gets Conflicting Tool Authority
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: An agent receives conflicting authority signals about whether, when, or how it may use a tool, connector, function, or integration.
code: ISS-0115
category: permissions-and-approvals
primary_cat_code: CAT-0050
secondary_cat_codes:
  - CAT-0040
primary_pattern: authority-collision
patterns:
  - authority-collision
  - interface-mismatch
  - authority-shadowing
search_intents:
  - agent gets conflicting tool authority
  - AI agent tool authority conflict
  - tool permission conflicts with prompt
  - agent allowed and blocked from tool
  - conflicting MCP tool authority
  - agent tool access rules conflict
---

## What This Looks Like

The agent receives mixed signals about tool authority. One rule, prompt, permission, policy, or workflow state may allow tool use while another blocks it, narrows it, requires approval, or describes a different allowed mode. The agent may call the tool inconsistently, refuse unexpectedly, ask for permission repeatedly, or choose the wrong action boundary.

## Why It Matters

Tool authority controls operational behavior. If the agent receives conflicting authority signals, users cannot tell whether tool use is allowed, blocked, pending approval, or limited to a specific mode. This can cause failed tool calls, skipped actions, unauthorized actions, or unstable agent behavior across similar tasks.

## Structural Signal

Multiple authority sources govern the same tool action with incompatible requirements. The issue is not simply that the tool failed; it is that the agent’s authority to use the tool is conflicted.

## Common Triggers

- Prompt instructions permit a tool while policy or product mode blocks it
- Tool permissions exist but workflow approval is still required
- MCP or connector rules differ from user-facing instructions
- The agent has read authority but not action authority
- A hidden rule narrows tool use without exposing the boundary
- Tool schema, permission state, and workflow role describe different authority levels

## When to Use This Issue

Use this Issue when an agent receives conflicting authority signals about whether, when, or how it may use a tool or integration.

## When Not to Use This Issue

Do not use this Issue when the tool is simply unavailable, missing inputs, or called with the wrong schema. This Issue applies when the conflict is specifically about tool authority.
