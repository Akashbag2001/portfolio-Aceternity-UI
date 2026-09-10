import Image from "next/image";
import type { Project } from "@/lib/projects";

const FLAME = "#FDA228";
const INK = "#1b1b1b";

/**
 * A project's cover: its screenshot when one can be shown publicly,
 * otherwise a drawn illustration of what the system does (employer work).
 */
export function ProjectCover({
  project,
  priority = false,
  sizes,
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
}) {
  const { cover } = project;

  if (cover.kind === "image") {
    return (
      <Image
        src={cover.src}
        alt={cover.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    );
  }

  const Visual = visuals[cover.visual];
  return (
    <div
      role="img"
      aria-label={cover.alt}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: project.tone }}
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ backgroundColor: FLAME }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <Visual />
    </div>
  );
}

const svgClass = "relative h-auto w-[78%] max-w-[560px]";
const caption = { fill: "white", fillOpacity: 0.45, fontSize: 10, letterSpacing: 2, fontWeight: 600 };

function QueryVisual() {
  const rows = [150, 120, 172, 92, 160, 132, 110, 176, 140, 100];
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={svgClass}>
      <text x="40" y="38" {...caption}>
        SELECT · JOIN · DEDUPE
      </text>
      {rows.map((width, i) => {
        const hit = i === 3 || i === 7;
        return (
          <rect
            key={i}
            x="40"
            y={58 + i * 20}
            width={width}
            height="8"
            rx="4"
            fill={hit ? FLAME : "white"}
            fillOpacity={hit ? 1 : 0.14}
          />
        );
      })}
      <path d="M222 150 H244" stroke="white" strokeOpacity="0.3" strokeDasharray="3 4" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="250" y={92 + i * 42} width="112" height="26" rx="13" stroke="white" strokeOpacity="0.22" />
          <circle
            cx="263"
            cy={105 + i * 42}
            r="6"
            fill={FLAME}
            className="cover-lane"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        </g>
      ))}
      <text x="250" y="238" {...caption}>
        ASYNC WORKERS
      </text>
    </svg>
  );
}

function IotVisual() {
  const devices = Array.from({ length: 24 }, (_, i) => ({ cx: 80 + (i % 6) * 48, cy: 46 + Math.floor(i / 6) * 34 }));
  const anomaly = 9;
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={svgClass}>
      {devices.map((d, i) =>
        i === anomaly ? (
          <g key={i}>
            <circle cx={d.cx} cy={d.cy} r="7" fill={FLAME} className="cover-pulse" />
            <circle cx={d.cx} cy={d.cy} r="7" fill={FLAME} />
          </g>
        ) : (
          <circle key={i} cx={d.cx} cy={d.cy} r="6" fill="white" fillOpacity="0.2" />
        )
      )}
      <polyline
        points="40,258 80,250 120,254 160,246 200,252 232,206 256,256 296,246 336,250 360,242"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="232" cy="206" r="5" fill={FLAME} />
      <text x="40" y="196" {...caption}>
        LIVE TELEMETRY · 50+ DEVICES
      </text>
    </svg>
  );
}

function PortalVisual() {
  const cards = [
    { x: 56, y: 82, rotate: -8, label: "STUDENTS" },
    { x: 140, y: 96, rotate: 0, label: "RECRUITERS" },
    { x: 224, y: 110, rotate: 8, label: "ADMIN" },
  ];
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={svgClass}>
      {cards.map((card, i) => {
        const front = i === 1;
        const text = front ? INK : "white";
        return (
          <g key={card.label} transform={`rotate(${card.rotate} ${card.x + 60} ${card.y + 50})`}>
            <rect
              x={card.x}
              y={card.y}
              width="120"
              height="100"
              rx="14"
              fill={front ? "white" : "white"}
              fillOpacity={front ? 0.96 : 0.08}
              stroke="white"
              strokeOpacity="0.25"
            />
            <circle cx={card.x + 22} cy={card.y + 24} r="9" fill={front ? FLAME : "white"} fillOpacity={front ? 1 : 0.35} />
            <rect x={card.x + 38} y={card.y + 18} width="62" height="5" rx="2.5" fill={text} fillOpacity="0.5" />
            <rect x={card.x + 38} y={card.y + 28} width="40" height="5" rx="2.5" fill={text} fillOpacity="0.25" />
            <rect x={card.x + 14} y={card.y + 50} width="92" height="5" rx="2.5" fill={text} fillOpacity="0.18" />
            <text x={card.x + 14} y={card.y + 84} fill={text} fillOpacity="0.7" fontSize="9" letterSpacing="1.5" fontWeight="700">
              {card.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function LeaderboardVisual() {
  const bars = [236, 200, 172, 142, 114];
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={svgClass}>
      <rect x="296" y="30" width="60" height="22" rx="11" fill={FLAME} />
      <text x="312" y="45" fill={INK} fontSize="10" letterSpacing="1.5" fontWeight="800">
        LIVE
      </text>
      {bars.map((width, i) => (
        <g key={i}>
          <text x="44" y={92 + i * 40} fill="white" fillOpacity="0.5" fontSize="14" fontWeight="800">
            {String(i + 1).padStart(2, "0")}
          </text>
          <rect
            x="84"
            y={79 + i * 40}
            width={width}
            height="16"
            rx="8"
            fill={i === 0 ? FLAME : "white"}
            fillOpacity={i === 0 ? 1 : 0.16}
            className="cover-bar"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

const visuals = {
  query: QueryVisual,
  iot: IotVisual,
  portal: PortalVisual,
  leaderboard: LeaderboardVisual,
};
