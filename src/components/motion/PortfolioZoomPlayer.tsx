"use client";

import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

function FelipeCodingIllustration() {
  const frame = useCurrentFrame();
  const loop = frame % 150;
  const blink = loop > 58 && loop < 64 ? 1 : 0;
  const hairMove = Math.sin(frame / 12) * 1.2;
  const handMove = Math.sin(frame / 20) * 2.5;
  const cursor = interpolate(loop, [0, 70, 149], [0, 56, 96], clamp);
  const screenGlow = interpolate(loop, [24, 60, 104, 149], [0, 1, 1, 0], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: "#fff" }}>
      <svg viewBox="0 0 620 430" width="100%" height="100%" aria-hidden="true">
        <rect width="620" height="430" fill="#fff" />

        <g transform="translate(34 32)">
          <rect x="96" y="112" width="24" height="210" rx="8" fill="#1b1d1e" />
          <rect x="103" y="119" width="11" height="194" rx="4" fill="#575c5e" opacity=".55" />
          <rect x="78" y="322" width="64" height="10" rx="5" fill="#242526" />

          <path
            d="M214 330c34 10 124 12 178 0 34 15 57 34 69 58H159c10-25 28-45 55-58Z"
            fill="#111"
          />
          <path
            d="M180 345c-25 7-42 20-52 41h68c10-17 24-30 41-39"
            fill="#fff"
            stroke="#111"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M240 199c-33 20-51 63-51 129 64 23 145 22 222-3-1-74-25-118-72-132-27 18-60 20-99 6Z"
            fill="#111"
          />

          <path
            d="M302 146c-47 0-78 32-78 80 0 50 31 84 78 84 46 0 78-34 78-84 0-48-31-80-78-80Z"
            fill="#f6dfd2"
            stroke="#111"
            strokeWidth="4"
          />
          <path
            d={`M219 ${164 + hairMove}c25-39 84-54 126-31 31 17 48 45 49 87-26-8-48-23-64-46-30 28-67 42-111 42 0-21 0-36 0-52Z`}
            fill="#141414"
          />
          <path
            d="M239 171c-20 6-36 20-48 42 25 6 54 5 87-5"
            fill="#141414"
          />
          <path
            d="M352 145c15-7 31-7 47 1-13 2-24 8-31 18"
            fill="none"
            stroke="#111"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M375 132c12-9 26-10 42-2-17 2-28 8-34 18"
            fill="none"
            stroke="#111"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M410 154c13-2 24 3 33 15-12-4-22-4-30 2"
            fill="none"
            stroke="#111"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {blink ? (
            <>
              <path d="M272 236h16" stroke="#111" strokeWidth="4" strokeLinecap="round" />
              <path d="M333 236h16" stroke="#111" strokeWidth="4" strokeLinecap="round" />
            </>
          ) : (
            <>
              <ellipse cx="280" cy="234" rx="7" ry="10" fill="#111" />
              <ellipse cx="341" cy="234" rx="7" ry="10" fill="#111" />
            </>
          )}
          <path d="M297 265c18 12 38 12 59 0" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          <path d="M306 250c4 5 8 5 13 0" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />

          <path
            d={`M366 ${192 + handMove}c30-22 55-23 75-2 13 14 8 31-12 42-19 11-38 14-56 8`}
            fill="#f6dfd2"
            stroke="#111"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M420 186c5-15 8-30 9-45" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          <path d="M402 185c4-14 6-28 7-43" stroke="#111" strokeWidth="4" strokeLinecap="round" />
          <path d="M389 192c1-14 0-27-4-40" stroke="#111" strokeWidth="4" strokeLinecap="round" />

          <path
            d="M178 338c53-5 107-5 162 0"
            stroke="#f6dfd2"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M177 338c53-5 107-5 162 0"
            stroke="#111"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M138 342h207c12 0 22 10 22 22H152c-8 0-14-6-14-14v-8Z"
            fill="#fff"
            stroke="#111"
            strokeWidth="4"
          />
          <path
            d="M146 247h176l47 97H188l-42-97Z"
            fill="#fff"
            stroke="#111"
            strokeWidth="4"
          />
          <rect
            x="182"
            y="276"
            width="86"
            height="7"
            fill="#111"
            opacity={0.12 + screenGlow * 0.18}
          />
          <rect
            x="182"
            y="292"
            width="116"
            height="7"
            fill="#111"
            opacity={0.1 + screenGlow * 0.14}
          />
          <rect
            x="182"
            y="308"
            width="72"
            height="8"
            fill="#111"
            opacity={0.16}
          />
          <rect x={190 + cursor} y="320" width="20" height="6" fill="#111" />
          <circle cx="237" cy="305" r="10" fill="#111" />

          <path d="M100 382h424" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
    </AbsoluteFill>
  );
}

export function PortfolioZoomPlayer() {
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    let raf = 0;
    const startedAt = performance.now();
    const fps = 30;
    const duration = 150;

    const tick = () => {
      const elapsed = (performance.now() - startedAt) / 1000;
      playerRef.current?.seekTo(Math.floor(elapsed * fps) % duration);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="portfolio-remotion-frame" aria-label="Hamilton Felipe coding illustration">
      <Player
        ref={playerRef}
        component={FelipeCodingIllustration}
        durationInFrames={150}
        compositionWidth={620}
        compositionHeight={430}
        fps={30}
        controls={false}
        clickToPlay={false}
        acknowledgeRemotionLicense
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
