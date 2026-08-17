import * as React from "react";

export interface GroupFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Label centred on the top border. Rendered uppercase. */
  title?: string;
  /** Dashed outline for speculative / out-of-scope regions. */
  dashed?: boolean;
  padding?: number | string;
  children?: React.ReactNode;
}
export function GroupFrame(props: GroupFrameProps): JSX.Element;
