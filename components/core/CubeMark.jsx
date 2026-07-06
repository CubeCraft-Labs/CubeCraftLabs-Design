import React from "react";

/**
 * CubeMark — the CubeCraftLabs isometric cube, rendered as an inline SVG.
 * One geometry, three renderings: wireframe (default), exploded (primary
 * brand mark), and grid (graph-paper stamp).
 */
export function CubeMark({ variant = "wireframe", size = 48, color = "#e5c07b", strokeWidth, style, ...rest }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 200 200",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: { display: "block", ...style },
    ...rest,
  };

  if (variant === "exploded") {
    return (
      <svg {...common}>
        <polygon points="100,26 144,51 100,76 56,51" fill={color} fillOpacity="0.14" stroke={color} strokeWidth={strokeWidth ?? 2.4} strokeLinejoin="miter" />
        <polygon points="44,80 88,105 88,157 44,132" fill={color} fillOpacity="0.05" stroke={color} strokeWidth={strokeWidth ?? 2.4} strokeLinejoin="miter" />
        <polygon points="156,80 112,105 112,157 156,132" fill={color} fillOpacity="0.02" stroke={color} strokeWidth={strokeWidth ?? 2.4} strokeLinejoin="miter" />
        <g stroke={color} strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="3 4">
          <line x1="100" y1="76" x2="100" y2="100" />
          <line x1="88" y1="105" x2="97" y2="100" />
          <line x1="112" y1="105" x2="103" y2="100" />
        </g>
        <g stroke={color} strokeWidth="1" strokeOpacity="0.22">
          <polygon points="100,82 117,91 100,100 83,91" fill="none" />
          <line x1="83" y1="91" x2="83" y2="110" />
          <line x1="117" y1="91" x2="117" y2="110" />
          <line x1="100" y1="100" x2="100" y2="119" />
          <line x1="83" y1="110" x2="100" y2="119" />
          <line x1="117" y1="110" x2="100" y2="119" />
        </g>
      </svg>
    );
  }

  if (variant === "grid") {
    return (
      <svg {...common}>
        <g stroke="#333333" strokeWidth="0.7">
          {[20, 52, 84, 116, 148, 180].map((y) => <line key={"h" + y} x1="20" y1={y} x2="180" y2={y} />)}
          {[20, 52, 84, 116, 148, 180].map((x) => <line key={"v" + x} x1={x} y1="20" x2={x} y2="180" />)}
        </g>
        <g stroke={color} strokeWidth="1" strokeOpacity="0.55">
          <line x1="100" y1="10" x2="100" y2="26" /><line x1="100" y1="174" x2="100" y2="190" />
          <line x1="10" y1="100" x2="26" y2="100" /><line x1="174" y1="100" x2="190" y2="100" />
        </g>
        <polygon points="100,48 144,73 100,98 56,73" fill={color} fillOpacity="0.12" />
        <polygon points="56,73 100,98 100,150 56,125" fill={color} fillOpacity="0.05" />
        <g stroke={color} strokeWidth={strokeWidth ?? 2.4} strokeLinejoin="miter">
          <polygon points="100,48 144,73 100,98 56,73" fill="none" />
          <line x1="144" y1="73" x2="144" y2="125" /><line x1="100" y1="98" x2="100" y2="150" /><line x1="56" y1="73" x2="56" y2="125" />
          <line x1="56" y1="125" x2="100" y2="150" /><line x1="144" y1="125" x2="100" y2="150" />
        </g>
      </svg>
    );
  }

  // wireframe (default)
  return (
    <svg {...common}>
      <polygon points="100,44 146,70 100,96 54,70" fill={color} fillOpacity="0.10" />
      <polygon points="54,70 100,96 100,150 54,124" fill={color} fillOpacity="0.045" />
      <polygon points="146,70 100,96 100,150 146,124" fill={color} fillOpacity="0.02" />
      <g stroke={color} strokeWidth={strokeWidth ?? 2.4} strokeLinejoin="miter">
        <polygon points="100,44 146,70 100,96 54,70" fill="none" />
        <line x1="146" y1="70" x2="146" y2="124" />
        <line x1="100" y1="96" x2="100" y2="150" />
        <line x1="54" y1="70" x2="54" y2="124" />
        <line x1="54" y1="124" x2="100" y2="150" />
        <line x1="146" y1="124" x2="100" y2="150" />
      </g>
    </svg>
  );
}
