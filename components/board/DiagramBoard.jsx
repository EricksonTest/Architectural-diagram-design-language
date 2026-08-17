import React from "react";

const BOARDS = { azure: undefined, deep: "deep", paper: "paper" };

/** The blue ground every diagram sits on: sets the board theme, padding and type. */
export function DiagramBoard({
  board = "azure",
  width,
  height,
  padding = "var(--board-pad)",
  children,
  style,
  ...rest
}) {
  return (
    <div
      data-board={BOARDS[board]}
      style={{
        position: "relative",
        boxSizing: "border-box",
        width: width || "100%",
        height: height,
        minHeight: height ? undefined : 320,
        padding,
        background: "var(--canvas-bg)",
        fontFamily: "var(--font-label)",
        color: "var(--text-body)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
