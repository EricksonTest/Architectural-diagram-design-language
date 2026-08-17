import * as React from "react";
import { NodeTier } from "../nodes/DiagramNode";

export interface LegendItem {
  tier: NodeTier;
  label: string;
  width?: number | string;
}
export interface LegendProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items: LegendItem[];
}
export function Legend(props: LegendProps): JSX.Element;
