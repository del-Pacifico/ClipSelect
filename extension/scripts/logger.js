/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * Original Author: Sergio Palma Hidalgo
 * Project URL: https://github.com/del-Pacifico/ClipSelect
 * Copyright (c) 2026 Sergio Palma Hidalgo
 */

// ============================================================================
// ClipSelect - logger.js
// Description: Centralized logging utilities.
// License: MPL-2.0
// ============================================================================

const LOGGER_PREFIX = "[ClipSelect]";

const LOG_LEVELS = Object.freeze({
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
  silent: 50
});

let currentLogLevel = LOG_LEVELS.info;
let logsEnabled = true;

// ============================================================================
// Returns the numeric value for a known log level.
// ============================================================================
function resolveLogLevel(level) {
  if (typeof level !== "string") {
    return LOG_LEVELS.info;
  }

  return LOG_LEVELS[level] ?? LOG_LEVELS.info;
}

// ============================================================================
// Defines whether logs are globally enabled.
// ============================================================================
function setLogsEnabled(enabled) {
  logsEnabled = Boolean(enabled);
}

// ============================================================================
// Returns whether logs are currently enabled.
// ============================================================================
function areLogsEnabled() {
  return logsEnabled;
}

// ============================================================================
// Sets the active log level threshold.
// ============================================================================
function setLogLevel(level) {
  currentLogLevel = resolveLogLevel(level);
}

// ============================================================================
// Returns the current numeric log level threshold.
// ============================================================================
function getLogLevel() {
  return currentLogLevel;
}

// ============================================================================
// Returns whether the requested level should be logged.
// ============================================================================
function shouldLog(level) {
  if (!logsEnabled) {
    return false;
  }

  const requestedLevel = resolveLogLevel(level);

  return requestedLevel >= currentLogLevel;
}

// ============================================================================
// Builds a consistent logger prefix including the level label.
// ============================================================================
function buildPrefix(level) {
  return `${LOGGER_PREFIX} [${String(level).toUpperCase()}]`;
}

// ============================================================================
// Logs a debug message when the current logger state allows it.
// ============================================================================
function debug(message, ...details) {
  if (!shouldLog("debug")) {
    return;
  }

  console.debug(buildPrefix("debug"), message, ...details);
}

// ============================================================================
// Logs an informational message when the current logger state allows it.
// ============================================================================
function info(message, ...details) {
  if (!shouldLog("info")) {
    return;
  }

  console.info(buildPrefix("info"), message, ...details);
}

// ============================================================================
// Logs a warning message when the current logger state allows it.
// ============================================================================
function warn(message, ...details) {
  if (!shouldLog("warn")) {
    return;
  }

  console.warn(buildPrefix("warn"), message, ...details);
}

// ============================================================================
// Logs an error message when the current logger state allows it.
// ============================================================================
function error(message, ...details) {
  if (!shouldLog("error")) {
    return;
  }

  console.error(buildPrefix("error"), message, ...details);
}

export {
  LOG_LEVELS,
  areLogsEnabled,
  debug,
  error,
  getLogLevel,
  info,
  setLogLevel,
  setLogsEnabled,
  shouldLog,
  warn
};