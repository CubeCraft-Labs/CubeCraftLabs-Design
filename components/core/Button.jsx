import React from "react";

/**
 * Button — CubeCraftLabs action. Square corners, uppercase, mono, tracked.
 * Variants: primary (gold fill), secondary (gold outline), ghost (text only).
 */
export function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: "6px 12px", fontSize: "11px" },
    md: { padding: "9px 18px", fontSize: "12px" },
    lg: { padding: "12px 24px", fontSize: "13px" },
  };

  const base = {
    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast,100ms) var(--ease-out), color var(--dur-fast,100ms) var(--ease-out), border-color var(--dur-fast,100ms) var(--ease-out)",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: hover ? "var(--ccl-gold-dim, #caa869)" : "var(--ccl-gold, #e5c07b)",
      color: "var(--ccl-charcoal, #1a1a1a)",
      border: "1.5px solid transparent",
    },
    secondary: {
      background: hover ? "rgba(229,192,123,0.08)" : "transparent",
      color: "var(--ccl-gold, #e5c07b)",
      border: "1.5px solid var(--ccl-gold, #e5c07b)",
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--ccl-gold, #e5c07b)" : "var(--ccl-text, #d4d4d4)",
      border: "1.5px solid transparent",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{ ...base, ...variants[variant], transform: active && !disabled ? "translateY(1px)" : "none", ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
