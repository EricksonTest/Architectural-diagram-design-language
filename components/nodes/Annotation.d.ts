import * as React from "react";

export interface AnnotationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lower-case sentence. One idea per annotation. */
  children?: React.ReactNode;
  tone?: "quiet" | "strong";
  width?: number | string;
}
export function Annotation(props: AnnotationProps): JSX.Element;
