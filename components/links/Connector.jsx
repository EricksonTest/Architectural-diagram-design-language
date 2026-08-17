import React from "react";

const AH = 5; /* arrow half-width */

/** Straight hairline link with an arrowhead. The only line style on a board. */
export function Connector({
  direction = "down",
  length = 34,
  arrow = "end",
  dashed = false,
  strong = false,
  style,
  ...rest
}) {
  const vertical = direction === "down" || direction === "up";
  const w = vertical ? 12 : length;
  const h = vertical ? length : 12;
  const stroke = strong ? "var(--link-strong)" : "var(--link)";
  const dash = dashed ? "4 4" : undefined;
  const cx = w / 2;
  const cy = h / 2;
  const head = (x, y, dir) => {
    const p =
      dir === "down" ? [x - AH, y - AH * 1.6, x + AH, y - AH * 1.6, x, y]
      : dir === "up" ? [x - AH, y + AH * 1.6, x + AH, y + AH * 1.6, x, y]
      : dir === "right" ? [x - AH * 1.6, y - AH, x - AH * 1.6, y + AH, x, y]
      : [x + AH * 1.6, y - AH, x + AH * 1.6, y + AH, x, y];
    return <polygon points={p.join(" ")} fill={stroke} />;
  };
  const end = vertical
    ? { x: cx, y: direction === "down" ? h : 0 }
    : { x: direction === "right" ? w : 0, y: cy };
  const start = vertical
    ? { x: cx, y: direction === "down" ? 0 : h }
    : { x: direction === "right" ? 0 : w, y: cy };
  const opposite = { down: "up", up: "down", right: "left", left: "right" }[direction];
  return (
    <svg
      width={w}
      height={h}
      viewBox={"0 0 " + w + " " + h}
      style={{ display: "block", flex: "none", overflow: "visible", ...style }}
      aria-hidden="true"
      {...rest}
    >
      <line
        x1={start.x} y1={start.y} x2={end.x} y2={end.y}
        stroke={stroke} strokeWidth="1" strokeDasharray={dash} shapeRendering="crispEdges"
      />
      {arrow === "end" || arrow === "both" ? head(end.x, end.y, direction) : null}
      {arrow === "start" || arrow === "both" ? head(start.x, start.y, opposite) : null}
    </svg>
  );
}
