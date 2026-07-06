import * as React from "react";

export interface CubeMarkProps {
  /** Rendering of the cube. @default "wireframe" */
  variant?: "wireframe" | "exploded" | "grid";
  /** Pixel size (width = height). @default 48 */
  size?: number;
  /** Stroke/fill color of the mark. @default "#e5c07b" (brand gold) */
  color?: string;
  /** Override the main stroke width. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}

/**
 * The CubeCraftLabs cube mark. Use `exploded` as the primary brand mark,
 * `wireframe` for compact/inline lockups, `grid` for the badge stamp.
 */
export function CubeMark(props: CubeMarkProps): JSX.Element;
