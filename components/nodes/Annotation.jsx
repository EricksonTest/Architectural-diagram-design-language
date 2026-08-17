import React from "react";

/** Mono side-note: a decision, a constraint, an open question. */
export function Annotation({ children, tone = "quiet", width, style, ...rest }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "var(--sp-2)",
        width,
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-caption)",
        lineHeight: "var(--lh-caption)",
        color: tone === "strong" ? "var(--text-display)" : "var(--text-quiet)",
        textWrap: "pretty",
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{ opacity: 0.7 }}>—</span>
      <span>{children}</span>
    </div>
  );
}
