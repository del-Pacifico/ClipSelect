# 🛠 ClipSelect — Engineering Rules

This document defines the mandatory engineering rules for **ClipSelect**.

These rules apply to:

- New implementations
- Bug fixes
- Code review and technical analysis
- Any structural change to the project

These rules are **non-optional** and must be followed at all times.

---

## 📑 Table of Contents

- [🛠 ClipSelect — Engineering Rules](#-clipselect--engineering-rules)
  - [📑 Table of Contents](#-table-of-contents)
  - [🧭 1. Source of Truth](#-1-source-of-truth)
  - [🎯 2. Strict Scope Focus](#-2-strict-scope-focus)
  - [📄 3. Real File Reference Required](#-3-real-file-reference-required)
  - [🧠 4. Language Best Practices](#-4-language-best-practices)
  - [⚡ 5. Zero Bottlenecks](#-5-zero-bottlenecks)
  - [🧩 6. Edge Case Resilience](#-6-edge-case-resilience)
  - [🛡 7. Professional Error Handling](#-7-professional-error-handling)
  - [💬 8. English Comments, Logs, and Toast Messages](#-8-english-comments-logs-and-toast-messages)
  - [🔔 9. Toast Messages Must Reflect Task State](#-9-toast-messages-must-reflect-task-state)
  - [📊 10. Console Logs Must Support Levels and Configuration](#-10-console-logs-must-support-levels-and-configuration)
  - [🧱 11. Modular Programming](#-11-modular-programming)
  - [🔧 12. Atomic Git Commits](#-12-atomic-git-commits)
  - [🚫 13. No Code Hallucination](#-13-no-code-hallucination)
  - [🐞 14. Bug Fix Protocol](#-14-bug-fix-protocol)
  - [📌 Final Note](#-final-note)

---

## 🧭 1. Source of Truth

The **latest version of the code explicitly provided by the project owner** is the only valid source of truth.

This means:

- No invented code
- No inferred missing blocks
- No assumptions about functions, flows, or structures not present in the real file
- No reliance on deprecated versions once a newer version has been provided

All analysis and modifications must strictly rely on the **latest real code delivered**.

---

## 🎯 2. Strict Scope Focus

Bug fixes and implementations must remain focused on the **specific problem or scope defined**.

This means:

- No unrelated refactors during a bug fix
- No opportunistic modifications outside the defined scope
- No expansion of functionality unless explicitly approved

Engineering changes must remain **precise and intentional**.

---

## 📄 3. Real File Reference Required

Every proposed code change must reference the **actual file and real code block** involved.

Required elements:

- Target file
- Real code fragment under analysis
- Technical explanation of the problem
- Proposed correction

All modifications must be presented using a **Before vs After** structure.

This guarantees traceability and prevents speculative edits.

---

## 🧠 4. Language Best Practices

All code must follow established **best practices for the language being used**.

This includes:

- Clear naming conventions
- Single-responsibility functions
- Defensive validation
- Clean and readable structure
- Avoidance of duplicated logic
- Maintainable and predictable code flow

Readable code is considered a **first-class engineering requirement**.

---

## ⚡ 5. Zero Bottlenecks

All implementations must avoid introducing performance bottlenecks.

This includes avoiding:

- Unnecessary event listeners
- Heavy observers without justification
- Repeated computations that can be cached
- Large monolithic functions
- Blocking logic in critical execution paths

Solutions must remain **lightweight, efficient, and scalable**.

---

## 🧩 6. Edge Case Resilience

All implementations and fixes must consider potential **edge cases**.

Expected behavior:

- Detect the edge case
- Handle it safely
- Log the condition clearly
- Continue operating whenever safe recovery is possible

The system must **fail gracefully**, never catastrophically.

---

## 🛡 7. Professional Error Handling

Error handling must be explicit and professional.

Required practices include:

- Defensive validation
- Structured `try/catch` usage where appropriate
- Safe fallback behavior
- Clear diagnostic messages

Errors must **never be silently ignored** when they affect behavior.

---

## 💬 8. English Comments, Logs, and Toast Messages

All of the following must be written in **professional but friendly English**:

- Code comments
- Console logs
- Toast messages

Tone guidelines:

- Professional
- Clear
- Natural
- Friendly but not casual

Messages must remain useful to both **developers and users**.

---

## 🔔 9. Toast Messages Must Reflect Task State

Toast messages must communicate the current state of a task.

Typical states include:

- Task in progress
- Task completed
- Task skipped
- Task failed

Toast notifications must **inform the user about meaningful events**, not act as decoration.

---

## 📊 10. Console Logs Must Support Levels and Configuration

Console logging must support structured log levels.

Recommended levels:

- `debug`
- `info`
- `warn`
- `error`

Users must be able to:

- Enable or disable logs
- Adjust verbosity levels when applicable

Logging must support **diagnostics without polluting the console**.

---

## 🧱 11. Modular Programming

The project must follow a **modular architecture**.

This includes:

- Clear separation of responsibilities
- Reusable utility functions
- Avoidance of oversized functions
- Decoupling UI, logic, and configuration layers

Modularity improves maintainability and reduces risk.

---

## 🔧 12. Atomic Git Commits

Every implementation or bug fix must be committed **atomically**.

Rules:

- One commit per clear intention
- No mixing unrelated changes
- No oversized commits combining multiple concerns

Atomic commits improve:

- Code review
- Debugging
- Release management
- Rollback safety

---

## 🚫 13. No Code Hallucination

Inventing or extrapolating code is strictly forbidden.

This includes:

- Inventing functions not present in the real file
- Guessing internal structures
- Reconstructing missing code based on assumptions
- Completing logic blocks speculatively

All engineering work must rely **only on real code provided by the project owner**.

---

## 🐞 14. Bug Fix Protocol

All bug fixes must follow the same structured process.

Steps:

1. Identify the affected file
2. Analyze the real code from the latest version
3. Explain the root cause
4. Present the correction using **Before vs After**
5. Justify why the fix solves the problem
6. Avoid unrelated modifications
7. Preserve the project's structure and coding style

This process ensures **safe, traceable, and verifiable bug fixes**.

---

## 📌 Final Note

These rules exist to ensure that **ClipSelect remains stable, maintainable, and professionally engineered** as the project evolves.

Every implementation and every bug fix must respect these principles.