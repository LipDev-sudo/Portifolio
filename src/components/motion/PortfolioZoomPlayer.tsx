"use client";

import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";
import { useEffect, useRef } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

function MiniPortfolio({ opacity = 1 }: { opacity?: number }) {
  return (
    <g opacity={opacity}>
      <rect x="0" y="0" width="162" height="90" fill="#fff" stroke="#000" strokeWidth="2" />
      <rect x="0" y="0" width="162" height="13" fill="#000" />
      <circle cx="9" cy="6.5" r="3" fill="#fff" />
      <rect x="58" y="5.5" width="18" height="2" fill="#fff" />
      <rect x="84" y="5.5" width="18" height="2" fill="#fff" />
      <rect x="110" y="5.5" width="18" height="2" fill="#fff" />
      <text x="11" y="35" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="400" fill="#000">
        Hello I&apos;am
      </text>
      <text x="11" y="49" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="900" fill="#000">
        Hamilton
      </text>
      <text x="11" y="64" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="900" fill="#000">
        Web &amp; IA
      </text>
      <rect x="110" y="30" width="34" height="34" fill="#000" />
      <path d="M117 49c2-10 8-15 16-15 7 0 11 4 13 11-5 0-9-2-12-5-4 5-10 8-17 9Z" fill="#fff" />
      <rect x="11" y="73" width="18" height="5" fill="#000" />
      <rect x="35" y="73" width="18" height="5" fill="#000" fillOpacity=".18" />
      <rect x="59" y="73" width="18" height="5" fill="#000" fillOpacity=".18" />
    </g>
  );
}

function ProgrammerScene() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const typeCursor = interpolate(frame % (1.4 * fps), [0, 0.7 * fps, 1.4 * fps], [0, 58, 88], clamp);
  const handTap = Math.sin((frame / fps) * Math.PI * 8) * 2;
  const zoom = interpolate(frame, [1.8 * fps, 3.7 * fps], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.45, 0, 0.2, 1),
  });
  const panelOpacity = interpolate(frame, [2.15 * fps, 2.65 * fps], [0, 1], {
    ...clamp,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const panelScale = interpolate(zoom, [0, 1], [0.24, 1]);
  const panelX = interpolate(zoom, [0, 1], [151, 318]);
  const panelY = interpolate(zoom, [0, 1], [184, 70]);
  const screenGlow = interpolate(frame, [1.5 * fps, 2.3 * fps, 4.5 * fps], [0, 1, 0], clamp);

  return (
    <AbsoluteFill style={{ backgroundColor: "#fff" }}>
      <svg viewBox="0 0 540 360" width="100%" height="100%" aria-hidden="true">
        <rect x="0" y="0" width="540" height="360" fill="#fff" />

        <g opacity={1}>
          <path d="M78 313h395" stroke="#111" strokeWidth="3" strokeLinecap="round" />

          <g transform="translate(292 48)">
            <path d="M43 8c-31-6-57 13-63 43 12 4 27 3 43-4 16-7 28-17 36-30-3-4-8-7-16-9Z" fill="#000" />
            <path d="M-4 52c-2 29 16 50 43 50 29 0 48-20 48-50 0-25-19-43-47-43C14 9-3 26-4 52Z" fill="#fff" stroke="#000" strokeWidth="4" />
            <path d="M-1 47c25 0 45-9 62-27 6 14 16 24 30 29-2-28-19-47-51-52C12-1-8 15-13 40c3 4 7 6 12 7Z" fill="#000" />
            <circle cx="29" cy="62" r="3" fill="#000" />
            <path d="M24 82c11 8 24 8 38 0" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
          </g>

          <path d="M256 143c-40 13-67 51-78 108l78 29c20-51 32-98 35-139-13-1-24 0-35 2Z" fill="#000" />
          <path d="M335 141c57 12 90 54 102 128l-87 28c-18-61-23-113-15-156Z" fill="#000" />
          <path d="M300 135c-13 38-22 79-26 123 32 10 62 10 91 0-6-45-16-86-31-123-10 5-22 5-34 0Z" fill="#000" />
          <path d="M303 144c11 9 24 9 37 0" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <path d="M372 167c25 15 43 40 55 75" stroke="#fff" strokeWidth="2" opacity=".85" />
          <path d="M390 207c17 7 36 12 57 16" stroke="#fff" strokeWidth="2" opacity=".8" />

          <g transform={`translate(0 ${handTap})`}>
            <path d="M256 246c22 8 48 8 76-1" stroke="#000" strokeWidth="9" strokeLinecap="round" />
            <path d="M256 246c22 8 48 8 76-1" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </g>

          <path d="M276 254H112L62 156h166l48 98Z" fill="#fff" stroke="#111" strokeWidth="4" />
          <path d="M116 254h208c14 0 24 10 24 23H129c-7 0-13-6-13-13v-10Z" fill="#fff" stroke="#111" strokeWidth="4" />
          <circle cx="160" cy="197" r="8" fill="#111" />

          <g opacity={1 - panelOpacity * 0.35}>
            <rect x="123" y="176" width="86" height="4" fill="#000" opacity=".16" />
            <rect x="123" y="188" width="118" height="4" fill="#000" opacity=".12" />
            <rect x="123" y="200" width="96" height="4" fill="#000" opacity=".12" />
            <rect x={128 + typeCursor} y="213" width="18" height="5" fill="#000" />
          </g>
          <g transform="translate(121 174) scale(.55)" opacity={panelOpacity}>
            <MiniPortfolio />
          </g>

          <rect x="121" y="174" width="92" height="52" fill="#000" opacity={screenGlow * 0.08} />

          <path d="M350 277c27 24 39 56 35 96H250c-7-39 1-71 25-94" fill="#fff" stroke="#111" strokeWidth="4" />
          <path d="M385 278c31 23 46 55 45 95H326c-8-36 1-67 27-93" fill="#fff" stroke="#111" strokeWidth="4" />
          <path d="M266 277c-15 17-25 39-31 66" stroke="#111" strokeWidth="3" />
          <path d="M352 280c-14 17-23 38-27 63" stroke="#111" strokeWidth="3" />
        </g>

        <g
          opacity={panelOpacity}
          transform={`translate(${panelX} ${panelY}) scale(${panelScale})`}
          style={{ transformOrigin: "0 0" }}
        >
          <rect x="-10" y="-10" width="182" height="110" fill="#fff" stroke="#000" strokeWidth="3" />
          <MiniPortfolio />
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
    <div className="portfolio-remotion-frame">
      <Player
        ref={playerRef}
        component={ProgrammerScene}
        durationInFrames={150}
        compositionWidth={540}
        compositionHeight={360}
        fps={30}
        controls={false}
        clickToPlay={false}
        acknowledgeRemotionLicense
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
