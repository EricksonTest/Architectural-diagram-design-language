import * as React from "react";

/**
 * Root ground for any architecture / IA diagram.
 * @startingPoint section="Diagrams" subtitle="Blue board with title, nodes and legend" viewport="1600x900"
 */
export interface DiagramBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Board theme. azure = signature #3499ff, deep = navy, paper = light print board. */
  board?: "azure" | "deep" | "paper";
  width?: number | string;
  height?: number | string;
  /** Inner padding; defaults to --board-pad (56px). */
  padding?: number | string;
  children?: React.ReactNode;
}
export function DiagramBoard(props: DiagramBoardProps): JSX.Element;
