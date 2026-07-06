import React from "react";

/**
 * Badge — small status/label chip. Square, outlined, lowercase mono.
 * Tones: default (gold), success (green), error (red), muted (gray).
 */
export function Badge({ tone = "default", children, style, ...rest }) {
  const tones = {
    default: { color: "var(--ccl-gold, #e5c07b)", border: "var(--ccl-gold, #e5c07b)" },
    success: { color: "var(--ccl-green, #98c379)", border: "var(--ccl-green, #98c379)" },
    error:   { color: "var(--ccl-red, #e06c75)", border: "var(--ccl-red, #e06c75)" },
    muted:   { color: "var(--ccl-text-muted, #6b6b6b)", border: "var(--ccl-border-2, #333333)" },
  };
  const t = tones[tone] || tones.default;
  return (
    <span
      style={{
        fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.06em",
        textTransform: "lowercase",
        padding: "2px 8px",
        borderRadius: 0,
        border: `1px solid ${t.border}`,
        color: t.color,
        background: "transparent",
        lineHeight: 1.4,
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
