"use client";

import { useState } from "react";

type Point = { day: string; label: string; visits: number };

const W = 600;
const H = 160;
const GAP = 2; // surface gap between adjacent bars
const R = 4; // rounded data-end; square at the baseline

function barPath(x: number, w: number, h: number): string {
  const r = Math.min(R, w / 2, h);
  const top = H - h;
  return `M${x},${H} V${top + r} Q${x},${top} ${x + r},${top} H${x + w - r} Q${x + w},${top} ${x + w},${top + r} V${H} Z`;
}

// Single series (visits per day): one accent hue, no legend; the per-day table
// below is its text alternative. Tap or hover a day to read its value.
export function VisitsChart({ points }: { points: Point[] }) {
  const [active, setActive] = useState<number | null>(null);
  const max = Math.max(1, ...points.map((p) => p.visits));
  const slot = W / points.length;
  const shown = active ?? points.length - 1;

  return (
    <figure className="flex flex-col gap-2">
      <figcaption className="flex items-baseline justify-between gap-4">
        <span className="font-medium">Visits per day</span>
        <span className="text-sm text-muted" aria-live="polite">
          {points[shown].label}: <span className="font-semibold text-foreground">{points[shown].visits}</span>
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-40 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Visits per day over the last ${points.length} days, peaking at ${max}`}
        onMouseLeave={() => setActive(null)}
      >
        <line x1={0} x2={W} y1={H - 0.5} y2={H - 0.5} className="stroke-muted/40" strokeWidth={1} />
        {points.map((p, i) => {
          const h = (p.visits / max) * (H - 8);
          const x = i * slot + GAP / 2;
          const w = slot - GAP;
          return (
            <g key={p.day} onMouseEnter={() => setActive(i)} onClick={() => setActive(i)}>
              <rect x={i * slot} y={0} width={slot} height={H} fill="transparent" />
              {h > 0 && (
                <path
                  d={barPath(x, w, h)}
                  className="fill-accent"
                  opacity={active === null || active === i ? 1 : 0.45}
                />
              )}
            </g>
          );
        })}
      </svg>
      <div className="flex justify-between text-xs text-muted">
        <span>{points[0].label}</span>
        <span>{points[points.length - 1].label}</span>
      </div>
    </figure>
  );
}
