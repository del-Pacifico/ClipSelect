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
// ClipSelect - toast.js
// Description: Reusable toast notifications for page-level feedback.
// License: MPL-2.0
// ============================================================================

const TOAST_ID = "clipselect-toast";
const TOAST_DEFAULT_DURATION_MS = 1800;

const TOAST_TYPES = Object.freeze({
  info: "info",
  success: "success",
  warn: "warn",
  error: "error"
});

// ============================================================================
// Removes the currently visible toast, if any.
// ============================================================================
function removeToast() {
  const existingToast = document.getElementById(TOAST_ID);

  if (existingToast) {
    existingToast.remove();
  }
}

// ============================================================================
// Returns the style definition for the requested toast type.
// ============================================================================
function resolveToastStyles(type) {
  switch (type) {
    case TOAST_TYPES.success:
      return {
        backgroundColor: "#121b3e",
        color: "#f4f4f4",
        border: "1px solid #4f5984"
      };

    case TOAST_TYPES.warn:
      return {
        backgroundColor: "#4f5984",
        color: "#f4f4f4",
        border: "1px solid #aaa8a6"
      };

    case TOAST_TYPES.error:
      return {
        backgroundColor: "#5a1f1f",
        color: "#f4f4f4",
        border: "1px solid #d98b8b"
      };

    case TOAST_TYPES.info:
    default:
      return {
        backgroundColor: "#121b3e",
        color: "#f4f4f4",
        border: "1px solid #7090cb"
      };
  }
}

// ============================================================================
// Builds the base toast element with the provided message and type.
// ============================================================================
function createToastElement(message, type) {
  const toast = document.createElement("div");
  const styles = resolveToastStyles(type);

  toast.id = TOAST_ID;
  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.right = "20px";
  toast.style.bottom = "20px";
  toast.style.zIndex = "2147483647";
  toast.style.maxWidth = "320px";
  toast.style.padding = "10px 14px";
  toast.style.borderRadius = "8px";
  toast.style.fontFamily = "Arial, sans-serif";
  toast.style.fontSize = "13px";
  toast.style.lineHeight = "1.4";
  toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.25)";
  toast.style.backgroundColor = styles.backgroundColor;
  toast.style.color = styles.color;
  toast.style.border = styles.border;
  toast.style.opacity = "0";
  toast.style.transform = "translateY(8px)";
  toast.style.transition = "opacity 160ms ease, transform 160ms ease";

  return toast;
}

// ============================================================================
// Shows a transient toast message in the current page context.
// ============================================================================
function showToast(message, options = {}) {
  try {
    if (typeof document === "undefined" || !document.body) {
      return;
    }

    if (typeof message !== "string" || message.trim() === "") {
      return;
    }

    const {
      type = TOAST_TYPES.info,
      durationMs = TOAST_DEFAULT_DURATION_MS
    } = options;

    removeToast();

    const toast = createToastElement(message.trim(), type);

    document.body.appendChild(toast);

    window.requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    window.setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";

      window.setTimeout(() => {
        if (toast.isConnected) {
          toast.remove();
        }
      }, 180);
    }, Math.max(400, Number(durationMs) || TOAST_DEFAULT_DURATION_MS));
  } catch (error) {
    console.error("[ClipSelect] [ERROR] Failed to show toast message.", error);
  }
}

// ============================================================================
// Shows an informational toast.
// ============================================================================
function showInfoToast(message, durationMs) {
  showToast(message, {
    type: TOAST_TYPES.info,
    durationMs
  });
}

// ============================================================================
// Shows a success toast.
// ============================================================================
function showSuccessToast(message, durationMs) {
  showToast(message, {
    type: TOAST_TYPES.success,
    durationMs
  });
}

// ============================================================================
// Shows a warning toast.
// ============================================================================
function showWarnToast(message, durationMs) {
  showToast(message, {
    type: TOAST_TYPES.warn,
    durationMs
  });
}

// ============================================================================
// Shows an error toast.
// ============================================================================
function showErrorToast(message, durationMs) {
  showToast(message, {
    type: TOAST_TYPES.error,
    durationMs
  });
}

export {
  TOAST_DEFAULT_DURATION_MS,
  TOAST_TYPES,
  removeToast,
  showErrorToast,
  showInfoToast,
  showSuccessToast,
  showToast,
  showWarnToast
};