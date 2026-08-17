import * as React from "react";

export interface BusProps extends React.SVGAttributes<SVGSVGElement> {
  /** Span the bus covers — normally the width of the row of columns below it. */
  width?: number;
  /** Number of evenly spaced drops, or explicit x positions (px, or 0-1 fractions of width). */
  drops?: number | number[];
  /** Height of the vertical stem above the trunk line. */
  stem?: number;
  /** Height of each drop below the trunk line. */
  drop?: number;
  /** Where the stem meets the trunk (px, or 0-1 fraction). */
  fromX?: number;
  arrow?: boolean;
  dashed?: boolean;
  strong?: boolean;
}
export function Bus(props: BusProps): JSX.Element;
