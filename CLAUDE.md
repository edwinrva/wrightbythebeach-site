# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Authorship

Never add `Co-Authored-By` trailers to commits, PRs, or any other files. Omit all AI authorship attribution.

## Principles

### Think Before Coding
- Restate the task and your understanding before writing code; surface assumptions explicitly.
- If the request has more than one reasonable interpretation, ask — don't guess.
- Read the relevant existing code before editing it.
- State the tradeoff of your chosen approach and the alternative you rejected.

### Simplicity First
- Solve the actual problem in front of you, not the generalized version of it.
- No new abstraction until the same pattern appears three times.
- Prefer fewer files, fewer layers, fewer dependencies; justify any dependency you add.
- Optimize for code that's easy to delete, not just easy to add.

### Surgical Changes
- Change only what the task requires; leave unrelated code untouched.
- No drive-by refactors, renames, or reformatting the task didn't ask for.
- Keep diffs minimal and reviewable — one logical change at a time.
- If you spot unrelated issues, note them for later; don't fix them silently.

### Goal-Driven Execution
- Define the success criteria and how you'll verify it before writing code.
- Write or update the test first, then make it pass.
- Not done until tests pass and the original goal is demonstrably met.
- If you can't verify something works, say so — don't assume it does.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
