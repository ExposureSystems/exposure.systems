---
layer: pattern
ontology_slug: divergent-outputs
title: Divergent Outputs
status: stable
entry_version: 0.1.0
updated_at: '2026-05-10T00:00:00Z'
summary: >-
  A structural condition where parallel evaluations under comparable scope and
  shared authority produce non-equivalent outputs.
code: PAT-0290
---
# Divergent Outputs

## Definition

Divergent Outputs exists when parallel structural evaluations under comparable scope and shared authority produce non-equivalent outputs.

The structure does not fail because outputs are merely different in wording, formatting, or incidental detail. It fails when outputs that should align structurally produce different graphs, classifications, decisions, routes, or conclusions.

## Visible Surface

Users may notice Divergent Outputs when two comparable evaluations of the same or equivalent case produce results that cannot both be treated as the same structural answer.

Common visible signs include:

- Two evaluators classify the same case differently.
- Parallel model runs produce different structural diagnoses.
- Two review paths reach incompatible findings under the same authority.
- Equivalent prompts or workflows generate different action plans.
- A diagnostic and an audit disagree on the same structural condition.
- A system produces different routing, escalation, or refusal outcomes for comparable inputs.
- Multiple outputs appear valid locally but do not reconcile globally.

The visible problem is often described as “these outputs should line up, but they do not.”

## Structural Signature

Divergent Outputs usually contains these elements:

- Comparable structural scope
- Parallel evaluation paths, runs, reviewers, models, tools, workflows, or diagnostics
- Shared or comparable authority context
- Outputs that are structurally non-equivalent
- No declared reason explaining why divergence is allowed
- A downstream need for outputs to align, compare, or reconcile

The outputs may differ in classification, graph shape, route, authority mapping, issue detection, category placement, policy interpretation, or proposed action.

## Deterministic Test

Given parallel evaluations under comparable scope and shared authority, outputs should align structurally unless divergence is declared as allowed.

Ask:

1. What evaluations are being compared?
2. Are their scopes comparable?
3. Do they operate under the same or comparable authority context?
4. What structural outputs did they produce?
5. Are the outputs structurally equivalent for the required purpose?
6. Is divergence declared, bounded, or explained?

If parallel evaluations produce non-equivalent outputs without a declared reason, Divergent Outputs exists.

## Common Contexts

Divergent Outputs commonly appears in:

- Model evaluations
- Human review workflows
- Parallel audit paths
- Classification systems
- Diagnostic tools
- Agent planning
- Tool selection
- Retrieval and ranking
- Policy interpretation
- Evaluation rubrics
- Moderation pipelines
- Search or recommendation systems
- Multi-model comparison
- Cross-team review
- Regression testing

In AI systems, it often appears when multiple prompts, models, agents, reviewers, or evaluation passes assess the same structural case but produce incompatible outputs.

## Distinguish From

### Non-Deterministic Execution

Non-Deterministic Execution occurs when repeated equivalent executions produce divergent outputs.

Divergent Outputs is broader. It can involve parallel evaluations across different evaluators, tools, models, paths, or review systems, not only repeated execution of one path.

### Asymmetric Structure

Asymmetric Structure occurs when comparable regions receive unequal treatment without a declared differentiation rule.

Divergent Outputs may reveal asymmetric treatment, but it specifically concerns non-equivalent outputs from comparable evaluations.

### Authority-State Mismatch

Authority-State Mismatch occurs when observed structural state does not align with declared authority state.

Divergent Outputs may expose authority-state mismatch, but it specifically names output disagreement across evaluations.

### Reconciliation Failure

Reconciliation Failure occurs when differences cannot be resolved into a coherent state.

Divergent Outputs may require reconciliation, but the Pattern itself identifies the presence of non-equivalent outputs.

## Related Lenses

Primary Lenses:

- Variance Entropy Lens
- Determinism Lens

Secondary Lenses:

- Reconciliation Lens
- Invariant Lens

Use the Variance Entropy Lens to inspect the spread and distribution of output differences.

Use the Determinism Lens when divergence may come from unstable execution under equivalent inputs.

Use the Reconciliation Lens when divergent outputs need to be resolved into one coherent state.

Use the Invariant Lens when some required property should remain true across all comparable outputs.

## Structural Limits

Divergent Outputs does not evaluate which output is correct.

It does not require all outputs to be identical.

It only identifies that outputs are structurally non-equivalent where equivalence is expected.

Declared comparison rules, acceptable variance bounds, evaluator roles, or reconciliation mechanisms may resolve or explain the Pattern.

## Workbench Notes

This Pattern is useful when a system generates multiple answers, classifications, or diagnoses that should agree but do not.

The key Workbench move is to separate three questions:

1. Are the evaluations actually comparable?
2. Are the outputs structurally equivalent?
3. Is divergence declared and bounded?

If comparable evaluations produce non-equivalent outputs without an allowed divergence rule, the issue is Divergent Outputs.
