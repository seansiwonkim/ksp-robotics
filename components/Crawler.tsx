"use client";
import { motion, useMotionValue, useTransform, type MotionValue } from "motion/react";

// `at` is the point on the part the leader line touches.
type Label = { text: string; x: number; y: number; at: [number, number] };

// One crawler part. `progress` (0 assembled, 1 exploded) slides it by (dx, dy) and fades in its label.
function Part({ progress, dx = 0, dy = 0, label, children }: {
  progress: MotionValue<number>; dx?: number; dy?: number; label?: Label; children: React.ReactNode;
}) {
  const x = useTransform(progress, [0, 1], [0, dx]);
  const y = useTransform(progress, [0, 1], [0, dy]);
  const opacity = useTransform(progress, [0.55, 1], [0, 1]);
  return (
    <motion.g style={{ x, y }}>
      {children}
      {label && (
        <motion.g style={{ opacity }}>
          <path d={`M${label.at[0]} ${label.at[1]}L${label.x} ${label.y > label.at[1] ? label.y - 16 : label.y + 4}`} className="cr-lead" />
          <circle cx={label.at[0]} cy={label.at[1]} r="3.5" className="cr-dot" />
          <text className="cr-label" x={label.x} y={label.y} textAnchor="middle">{label.text}</text>
        </motion.g>
      )}
    </motion.g>
  );
}

// Side view, facing right, assembled footprint x 100-600, y 130-276.
export default function Crawler({ progress, labels = false }: {
  progress?: MotionValue<number>; labels?: boolean;
}) {
  const still = useMotionValue(0);
  const p = progress ?? still;
  const L = (text: string, x: number, y: number, at: [number, number]) => (labels ? { text, x, y, at } : undefined);

  return (
    <g className="cr">
      <Part progress={p} dy={100} label={L("Drive tracks", 310, 300, [310, 276])}>
        <rect x="160" y="230" width="300" height="46" rx="23" className="cr-part" />
        <rect x="160" y="230" width="300" height="46" rx="23" className="cr-tread" />
        {[183, 255, 335, 415].map((cx) => (
          <g key={cx} className="cr-wheel">
            <circle cx={cx} cy="253" r="14" className="cr-part" />
            <path d={`M${cx - 14} 253H${cx + 14}`} className="cr-spoke" />
          </g>
        ))}
      </Part>

      <Part progress={p} dx={-120} label={L("Tether", 125, 232, [125, 210])}>
        <path d="M100 180H40" className="cr-tether" />
        <rect x="100" y="150" width="50" height="60" rx="6" className="cr-part" />
        <circle cx="112" cy="180" r="7" className="cr-accent" />
      </Part>

      <Part progress={p} label={L("Sealed body", 280, 254, [280, 230])}>
        <rect x="150" y="130" width="260" height="100" rx="16" className="cr-part" />
        <path d="M150 160H410M150 200H410" className="cr-seam" />
      </Part>

      <Part progress={p} dy={-110} label={L("Control board", 245, 140, [245, 150])}>
        <rect x="185" y="150" width="120" height="60" rx="6" className="cr-board" />
        <rect x="215" y="165" width="60" height="30" rx="3" className="cr-accent" />
        <path d="M185 165h-10M185 180h-10M185 195h-10M305 165h10M305 180h10M305 195h10" className="cr-accent" />
      </Part>

      <Part progress={p} dx={70} label={L("Sensor module", 455, 242, [455, 220])}>
        <rect x="410" y="140" width="90" height="80" rx="10" className="cr-part" />
        <circle cx="455" cy="180" r="12" className="cr-accent" />
        <circle cx="455" cy="180" r="22" className="cr-sonar" />
      </Part>

      <Part progress={p} dx={140} label={L("Camera head", 550, 262, [550, 215])}>
        <rect x="500" y="145" width="100" height="70" rx="12" className="cr-part" />
        <circle cx="590" cy="180" r="18" className="cr-accent" />
        <circle cx="590" cy="180" r="8" className="cr-lens" />
        <circle cx="530" cy="158" r="4" className="cr-led" />
        <circle cx="530" cy="202" r="4" className="cr-led" />
      </Part>
    </g>
  );
}
