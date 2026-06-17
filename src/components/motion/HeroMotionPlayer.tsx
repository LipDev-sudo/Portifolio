"use client";

import { Player } from "@remotion/player";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const chips = [
  { label: "Next.js", x: 46, y: 84, delay: 0 },
  { label: "IA", x: 340, y: 132, delay: 14 },
  { label: "n8n", x: 76, y: 374, delay: 28 },
  { label: "API", x: 330, y: 420, delay: 42 },
];

function HeroMotionComposition() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const loopFrame = frame % (fps * 6);

  const intro = interpolate(frame, [0, fps * 1.1], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const orbitRotation = interpolate(loopFrame, [0, fps * 6], [0, 360]);
  const slowPulse = 0.5 + Math.sin((frame / fps) * Math.PI * 2 * 0.65) * 0.5;
  const lineDraw = interpolate(loopFrame, [0, fps * 2.4, fps * 5.2], [0, 1, 0], {
    easing: Easing.bezier(0.45, 0, 0.55, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity: intro,
        background:
          "radial-gradient(circle at 50% 45%, rgba(255,250,240,0.38), transparent 42%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 70,
          border: "3px solid rgba(23,18,12,0.18)",
          borderRadius: "999px",
          transform: `rotate(${orbitRotation}deg) scale(${0.98 + slowPulse * 0.04})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 112,
          border: "2px dashed rgba(23,18,12,0.18)",
          borderRadius: "999px",
          transform: `rotate(${-orbitRotation * 0.65}deg)`,
        }}
      />

      <svg
        viewBox="0 0 500 560"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <path
          d="M64 292 C138 190, 228 420, 330 245 S435 175, 450 330"
          fill="none"
          stroke="rgba(23,18,12,0.34)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="760"
          strokeDashoffset={760 - lineDraw * 760}
        />
        <path
          d="M92 180 C168 96, 294 116, 408 92"
          fill="none"
          stroke="rgba(185,157,115,0.7)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="420"
          strokeDashoffset={420 - lineDraw * 420}
        />
      </svg>

      {chips.map((chip, index) => {
        const chipIntro = interpolate(
          frame,
          [chip.delay, chip.delay + fps * 0.75],
          [0, 1],
          {
            easing: Easing.bezier(0.34, 1.56, 0.64, 1),
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        );
        const float = Math.sin((frame + index * 18) / fps) * 9;

        return (
          <div
            key={chip.label}
            style={{
              position: "absolute",
              left: chip.x,
              top: chip.y + float,
              opacity: chipIntro * 0.92,
              transform: `scale(${0.88 + chipIntro * 0.12}) rotate(${index % 2 === 0 ? -4 : 4}deg)`,
              border: "2px solid rgba(23,18,12,0.82)",
              borderRadius: 999,
              background: index % 2 === 0 ? "#fffaf0" : "#d4b98d",
              color: "#17120c",
              padding: "10px 14px",
              fontFamily: "monospace",
              fontSize: 16,
              fontWeight: 900,
              boxShadow: "6px 6px 0 rgba(23,18,12,0.18)",
            }}
          >
            {chip.label}
          </div>
        );
      })}
    </AbsoluteFill>
  );
}

export function HeroMotionPlayer() {
  return (
    <div className="hero-remotion-layer" aria-hidden="true">
      <Player
        component={HeroMotionComposition}
        durationInFrames={180}
        fps={30}
        compositionWidth={500}
        compositionHeight={560}
        autoPlay
        loop
        controls={false}
        acknowledgeRemotionLicense
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
