import * as React from "react";

export interface BoardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Title text. Use \n to force the signature two-line break. */
  title: string;
  /** Small uppercase line above the title (e.g. product name). */
  kicker?: string;
  /** Mono line below the title (version, date, owner). */
  meta?: string;
  size?: "lg" | "sm";
  align?: "left" | "center";
}
export function BoardTitle(props: BoardTitleProps): JSX.Element;
