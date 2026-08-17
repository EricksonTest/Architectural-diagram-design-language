import * as React from "react";

export type NodeTier = "primary" | "secondary" | "content" | "terminal" | "ghost";

/**
 * A single box on a diagram board.
 * @startingPoint section="Diagrams" subtitle="Node tiers: primary, secondary, content, terminal, ghost" viewport="700x160"
 */
export interface DiagramNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase label. Keep to 1-4 words. */
  label?: string;
  /** Optional quieter second line (state, count, owner). */
  sublabel?: string;
  /** primary = main screen/service, secondary = on-screen content, content = leaf content, terminal = system edge, ghost = not built yet. */
  tier?: NodeTier;
  width?: number | string;
  height?: number | string;
  /** Force the blue hairline border (used for the entry node of a branch). */
  outlined?: boolean;
  /** Highlight for walkthroughs. */
  selected?: boolean;
  /** 9.5px label for dense boards. */
  small?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export function DiagramNode(props: DiagramNodeProps): JSX.Element;
