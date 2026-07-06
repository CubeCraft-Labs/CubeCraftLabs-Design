import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** Size. @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * CubeCraftLabs button — square, uppercase, mono, 0.08em tracking.
 * @startingPoint section="Core" subtitle="Square uppercase action" viewport="700x160"
 */
export function Button(props: ButtonProps): JSX.Element;
