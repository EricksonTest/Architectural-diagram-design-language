import React from "react";

/** Heavy two-line board title, optionally with a kicker and meta line. */
export function BoardTitle({ title, kicker, meta, size = "lg", align = "left", style, ...rest }) {
  const lines = String(title || "").split("\n");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)", textAlign: align, ...style }} {...rest}>
      {kicker ? (
        <span
          style={{
            fontSize: "var(--fs-legend)",
            fontWeight: "var(--fw-legend)",
            letterSpacing: "var(--ls-legend)",
            textTransform: "uppercase",
            color: "var(--text-quiet)",
          }}
        >
          {kicker}
        </span>
      ) : null}
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontSize: size === "lg" ? "var(--fs-title)" : "var(--fs-title-sm)",
          lineHeight: "var(--lh-title)",
          fontWeight: "var(--fw-title)",
          letterSpacing: "var(--ls-title)",
          color: "var(--text-display)",
        }}
      >
        {lines.map((l, i) => (
          <span key={i} style={{ display: "block" }}>{l}</span>
        ))}
      </h1>
      {meta ? (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--fs-caption)",
            color: "var(--text-quiet)",
          }}
        >
          {meta}
        </span>
      ) : null}
    </div>
  );
}
