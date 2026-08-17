import * as React from "react";

export interface ConnectorProps extends React.SVGAttributes<SVGSVGElement> {
  direction?: "down" | "up" | "left" | "right";
  /** Line length in px along its direction. */
  length?: number;
  arrow?: "end" | "start" | "both" | "none";
  /** Dashed = conditional / optional path. */
  dashed?: boolean;
  /** Full-white line for the primary path through the flow. */
  strong?: boolean;
}
export function Connector(props: ConnectorProps): JSX.Element;
