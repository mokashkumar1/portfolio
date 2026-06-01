"use client";

import React from "react";

interface SkillData {
  subject: string;
  value: number;
  fullMark: number;
}

interface SkillRadarChartProps {
  data: SkillData[];
  accentColor?: string; // 'purple' | 'cyan' | 'amber'
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({
  data,
  accentColor = "purple",
}) => {
  const size = 320;
  const center = size / 2;
  const radius = size * 0.35; // Maximum radius of chart
  const totalAngles = data.length;

  // Hexagon/Polygon vertex calculation
  const getCoordinates = (index: number, val: number, max: number) => {
    const angle = (index * 2 * Math.PI) / totalAngles - Math.PI / 2;
    const r = (val / max) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Color values based on active accent
  const getColorHex = () => {
    switch (accentColor) {
      case "cyan":
        return "#06b6d4";
      case "amber":
        return "#f59e0b";
      case "purple":
      default:
        return "#a855f7";
    }
  };

  // Concentric background grids (levels of 20%, 40%, 60%, 80%, 100%)
  const levels = [0.2, 0.4, 0.6, 0.8, 1];

  // Data path string
  const points = data.map((d, i) => getCoordinates(i, d.value, d.fullMark));
  const dataPath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[340px] mx-auto select-none">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-auto drop-shadow-[0_0_15px_rgba(0,0,0,0.4)]"
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={getColorHex()} stopOpacity={0.08} />
            <stop offset="100%" stopColor={getColorHex()} stopOpacity={0.42} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer and Inner Grid Polygons */}
        {levels.map((level, levelIdx) => {
          const gridPoints = data.map((_, i) =>
            getCoordinates(i, level * 100, 100)
          );
          const gridPath = gridPoints.map((p) => `${p.x},${p.y}`).join(" ");
          return (
            <polygon
              key={`grid-${levelIdx}`}
              points={gridPath}
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1"
            />
          );
        })}

        {/* Radial Axis Lines */}
        {data.map((_, i) => {
          const outerCoord = getCoordinates(i, 100, 100);
          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={outerCoord.x}
              y2={outerCoord.y}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="1.2"
            />
          );
        })}

        {/* Radar Fill Area */}
        <polygon
          points={dataPath}
          fill="url(#radarGlow)"
          stroke={getColorHex()}
          strokeWidth="2.5"
          filter="url(#glow)"
        />

        {/* Vertex Data Nodes */}
        {points.map((p, i) => (
          <circle
            key={`node-${i}`}
            cx={p.x}
            cy={p.y}
            r="4.5"
            fill="#0f0f15"
            stroke={getColorHex()}
            strokeWidth="2"
          />
        ))}

        {/* Labels outside the vertices */}
        {data.map((d, i) => {
          const labelCoord = getCoordinates(i, 120, 100);
          // Adjust labels for text anchors
          let textAnchor: "middle" | "start" | "end" = "middle";
          if (labelCoord.x > center + 10) {
            textAnchor = "start";
          } else if (labelCoord.x < center - 10) {
            textAnchor = "end";
          }

          let dy = "0.33em";
          if (labelCoord.y < center - 15) {
            dy = "-0.2em";
          } else if (labelCoord.y > center + 15) {
            dy = "0.8em";
          }

          return (
            <text
              key={`label-${i}`}
              x={labelCoord.x}
              y={labelCoord.y}
              dy={dy}
              textAnchor={textAnchor}
              fill="rgba(255, 255, 255, 0.7)"
              className="font-mono text-[9px] tracking-widest font-semibold uppercase fill-slate-300"
            >
              {d.subject}
            </text>
          );
        })}
      </svg>
    </div>
  );
};
export default SkillRadarChart;
