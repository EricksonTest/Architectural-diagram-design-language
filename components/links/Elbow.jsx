import React from "react";

/** Single square corner: leave one node on one axis, arrive at another on the other axis. */
export function Elbow({
  width = 80,
  height = 40,
  turn = "down-right",
  arrow = true,
  dashed = false,
  strong = false,
  style,
  ...rest
}) {
  const stroke = strong ? "var(--link-strong)" : "var(--link)";
  const dash = dashed ? "4 4" : undefined;
  const paths = {
    "down-right": [[0, 0], [0, height], [width, height]],
    "down-left": [[width, 0], [width, height], [0, height]],
    "right-down": [[0, 0], [width, 0], [width, height]],
    "left-down": [[width, 0], [0, 0], [0, height]],
  };
  const pts = paths[turn] || paths["down-right"];
  const [ex, ey] = pts[pts.length - 1];
  const [px, py] = pts[pts.length - 2];
  const horiz = ey === py;
  const headPts = horiz
    ? (ex > px ? [ex - 8, ey - 5, ex - 8, ey + 5, ex, ey] : [ex + 8, ey - 5, ex + 8, ey + 5, ex, ey])
    : (ey > py ? [ex - 5, ey - 8, ex + 5, ey - 8, ex, ey] : [ex - 5, ey + 8, ex + 5, ey + 8, ex, ey]);
  return (
    <svg
      width={width} height={height} viewBox={"0 0 " + width + " " + height}
      style={{ display: "block", overflow: "visible", ...style }} aria-hidden="true" {...rest}
    >
      <polyline
        points={pts.map((p) => p.join(",")).join(" ")}
        fill="none" stroke={stroke} strokeWidth="1" strokeDasharray={dash} shapeRendering="crispEdges"
      />
      {arrow ? <polygon points={headPts.join(" ")} fill={stroke} /> : null}
    </svg>
  );
}
