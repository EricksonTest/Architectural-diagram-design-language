import React from "react";

const TIERS = {
  primary: {
    background: "var(--node-primary-fill)",
    color: "var(--node-primary-ink)",
    borderColor: "var(--node-primary-border)",
  },
  secondary: {
    background: "var(--node-secondary-fill)",
    color: "var(--node-secondary-ink)",
    borderColor: "var(--node-secondary-border)",
  },
  content: {
    background: "var(--node-content-fill)",
    color: "var(--node-content-ink)",
    borderColor: "var(--node-content-border)",
  },
  terminal: {
    background: "var(--node-terminal-fill)",
    color: "var(--node-terminal-ink)",
    borderColor: "var(--node-terminal-border)",
  },
  ghost: {
    background: "var(--node-ghost-fill)",
    color: "var(--node-ghost-ink)",
    borderColor: "var(--node-ghost-border)",
  },
};

/** One box on the board. Tier carries the meaning; size and label carry the content. */
export function DiagramNode({
  label,
  sublabel,
  tier = "primary",
  width = "var(--node-w)",
  height,
  outlined = false,
  selected = false,
  small = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const t = TIERS[tier] || TIERS.primary;
  const interactive = typeof onClick === "function";
  return (
    <div
      onClick={onClick}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      style={{
        boxSizing: "border-box",
        width,
        minHeight: height || "var(--node-h)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        padding: "var(--node-pad-y) var(--node-pad-x)",
        borderRadius: "var(--radius-node)",
        border: "var(--border-node) solid " + (outlined || selected ? "var(--node-primary-border)" : t.borderColor),
        outline: selected ? "2px solid var(--link-strong)" : "none",
        outlineOffset: 2,
        background: t.background,
        color: t.color,
        boxShadow: "var(--shadow-node)",
        textAlign: "center",
        fontFamily: "var(--font-label)",
        fontSize: small ? "var(--fs-node-sm)" : "var(--fs-node)",
        lineHeight: "var(--lh-node)",
        fontWeight: "var(--fw-node)",
        letterSpacing: small ? "var(--ls-node-sm)" : "var(--ls-node)",
        textTransform: "uppercase",
        cursor: interactive ? "pointer" : "default",
        transition: "transform var(--dur-fast) var(--ease), box-shadow var(--dur) var(--ease)",
        ...style,
      }}
      {...rest}
    >
      {label ? <span>{label}</span> : null}
      {sublabel ? (
        <span style={{ opacity: 0.62, fontSize: "var(--fs-node-sm)", fontWeight: 500 }}>{sublabel}</span>
      ) : null}
      {children}
    </div>
  );
}
