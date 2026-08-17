import React from "react";

/** Rounded outline that groups a region, with its label breaking the top border. */
export function GroupFrame({ title, dashed = false, padding = "var(--sp-5)", children, style, ...rest }) {
  return (
    <div
      style={{
        position: "relative",
        boxSizing: "border-box",
        border: "var(--link-w) " + (dashed ? "dashed" : "solid") + " var(--frame-border)",
        borderRadius: "var(--radius-frame)",
        padding,
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <span
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0 var(--sp-3)",
            background: "var(--canvas-bg)",
            fontSize: "var(--fs-legend)",
            fontWeight: "var(--fw-legend)",
            letterSpacing: "var(--ls-legend)",
            textTransform: "uppercase",
            color: "var(--text-display)",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </span>
      ) : null}
      {children}
    </div>
  );
}
