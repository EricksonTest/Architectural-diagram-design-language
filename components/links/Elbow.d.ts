import * as React from "react";

export interface ElbowProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  /** Which corner to draw, read as "leave then arrive". */
  turn?: "down-right" | "down-left" | "right-down" | "left-down";
  arrow?: boolean;
  dashed?: boolean;
  strong?: boolean;
}
export function Elbow(props: ElbowProps): JSX.Element;
