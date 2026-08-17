import React from "react";
import { GroupFrame } from "./GroupFrame.jsx";
import { DiagramNode } from "../nodes/DiagramNode.jsx";

/** Swatch key for the node tiers used on the board. */
export function Legend({ title = "Legend", items = [], style, ...rest }) {
  return (
    <GroupFrame title={title} padding="var(--sp-5) var(--sp-6) var(--sp-4)" style={style} {...rest}>
      <div style={{ display: "flex", gap: "var(--sp-6)" }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--sp-2)" }}>
            <DiagramNode tier={it.tier} label="" width={it.width || "var(--node-w)"} />
            <span
              style={{
                fontSize: "var(--fs-legend)",
                fontWeight: "var(--fw-legend)",
                letterSpacing: "var(--ls-legend)",
                textTransform: "uppercase",
                color: "var(--text-display)",
                whiteSpace: "nowrap",
              }}
            >
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </GroupFrame>
  );
}
