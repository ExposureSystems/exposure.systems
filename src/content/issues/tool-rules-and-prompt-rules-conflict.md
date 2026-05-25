---
layer: issue
ontology_slug: tool-rules-and-prompt-rules-conflict
title: Tool Rules and Prompt Rules Conflict
status: stable
entry_version: 0.1.0
updated_at: "2026-05-10T00:00:00Z"
summary: Tool, connector, function, or MCP rules conflict with prompt instructions, causing the AI or agent to face incompatible requirements.
code: ISS-0110
category: rules-and-policies
primary_cat_code: CAT-0060
secondary_cat_codes:
  - CAT-0040
primary_pattern: authority-collision
patterns:
  - authority-collision
  - interface-mismatch
  - authority-shadowing
search_intents:
  - tool rules and prompt rules conflict
  - MCP tool rules conflict with prompt
  - tool schema conflicts with instruction
  - AI prompt conflicts with tool requirement
  - function rules contradict prompt
  - agent tool instructions conflict
---

## What This Looks Like

The prompt tells the AI to do one thing, while the tool, connector, function, or MCP interface requires something incompatible. The agent may be instructed to format, omit, transform, call, or avoid something that the tool contract or tool rule requires differently.

## Why It Matters

Tool use depends on both language instructions and interface rules. When they conflict, the AI may follow the prompt and fail the tool, follow the tool and appear to ignore the user, or produce an unstable compromise. Users may misread the failure as model disobedience when the rule set is incompatible.

## Structural Signal

Two authority sources govern the same action or output with incompatible requirements. The issue is not only a bad tool call; it is a conflict between prompt-level rules and tool-level rules.

## Common Triggers

- The prompt asks for a shape the tool schema does not accept
- Tool-required fields contradict prompt exclusions
- The tool supports fewer modes than the prompt assumes
- User instructions override values the tool requires
- MCP tool descriptions and prompt examples describe different contracts
- The agent is not given a precedence rule for prompt versus tool constraints

## When to Use This Issue

Use this Issue when tool, connector, function, or MCP rules conflict with prompt instructions and the AI cannot satisfy both cleanly.

## When Not to Use This Issue

Do not use this Issue when the tool call is merely malformed. Do not use it when the tool is unavailable or missing required inputs. This Issue applies when the declared rules themselves conflict.
