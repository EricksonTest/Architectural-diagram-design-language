import React from "react";

/** Trunk-and-drop link: one parent fans out to N columns with square corners. */
export function Bus({
  width = 800,
  drops = 3,
  stem = 26,
  drop = 34,
  fromX = 0.5,
  arrow = true,
  dashed = false,
  strong = false,
  style,
  ...rest
}) {
  const xs = Array.isArray(drops)
    ? drops.map((d) => (d <= 1 ? d * width : d))
    : Array.from({ length: drops }, (_, i) => ((i + 0.5) / drops) * width);
  const stemX = fromX <= 1 ? fromX * width : fromX;
  const h = stem + drop;
  const stroke = strong ? "var(--link-strong)" : "var(--link)";
  const dash = dashed ? "4 4" : undefined;
  const minX = Math.min(...xs, stemX);
  const maxX = Math.max(...xs, stemX);
  return (
    <svg
      width={width} height={h} viewBox={"0 0 " + width + " " + h}
      style={{ display: "block", overflow: "visible", ...style }}
      aria-hidden="true" {...rest}
    >
      <g stroke={stroke} strokeWidth="1" fill="none" strokeDasharray={dash} shapeRendering="crispEdges">
        <line x1={stemX} y1={0} x2={stemX} y2={stem} />
        <line x1={minX} y1={stem} x2={maxX} y2={stem} />
        {xs.map((x, i) => <line key={i} x1={x} y1={stem} x2={x} y2={h} />)}
      </g>
      {arrow
        ? xs.map((x, i) => (
            <polygon key={i} points={[x - 5, h - 8, x + 5, h - 8, x, h].join(" ")} fill={stroke} />
          ))
        : null}
    </svg>
  );
}
