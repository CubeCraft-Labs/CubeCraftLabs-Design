import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic tone. @default "default" */
  tone?: "default" | "success" | "error" | "muted";
  children?: React.ReactNode;
}

/** CubeCraftLabs status/label chip — square, outlined, lowercase mono. */
export function Badge(props: BadgeProps): JSX.Element;
