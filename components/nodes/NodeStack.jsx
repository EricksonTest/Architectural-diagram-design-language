import React from "react";
import { DiagramNode } from "./DiagramNode.jsx";

/** A contiguous run of sibling nodes sharing one width, divided by hairlines. */
export function NodeStack({ items = [], tier = "secondary", width = "var(--node-w)", gap = 0, small, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap, width, ...style }} {...rest}>
      {items.map((it, i) => {
        const item = typeof it === "string" ? { label: it } : it;
        const joined = gap === 0 || gap === "0px";
        return (
          <DiagramNode
            key={i}
            label={item.label}
            sublabel={item.sublabel}
            tier={item.tier || tier}
            small={item.small ?? small}
            width="100%"
            style={
              joined
                ? {
                    borderRadius:
                      items.length === 1
                        ? "var(--radius-node)"
                        : i === 0
                        ? "var(--radius-node) var(--radius-node) 0 0"
                        : i === items.length - 1
                        ? "0 0 var(--radius-node) var(--radius-node)"
                        : 0,
                    borderTopWidth: i === 0 ? "var(--border-node)" : 0,
                    boxShadow: "none",
                    position: "relative",
                    ...(i > 0 ? { borderTop: "1px solid var(--divider-on-node)" } : null),
                  }
                : undefined
            }
          />
        );
      })}
    </div>
  );
}
