import * as React from "react";
import { NodeTier } from "./DiagramNode";

export interface NodeStackItem {
  label: string;
  sublabel?: string;
  tier?: NodeTier;
  small?: boolean;
}
export interface NodeStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Items top to bottom; a plain string is shorthand for { label }. */
  items: (NodeStackItem | string)[];
  /** Tier applied to every item without its own. */
  tier?: NodeTier;
  width?: number | string;
  /** 0 = one welded block with hairline dividers (default). Set 8-20 for separated siblings. */
  gap?: number | string;
  small?: boolean;
}
export function NodeStack(props: NodeStackProps): JSX.Element;
