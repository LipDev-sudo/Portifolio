"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Joker } from "@/lib/game/jokers";

const RARITY_STYLE: Record<
  string,
  {
    bg: string;
    border: string;
    glow: string;
    foil: string | null;
    label: string;
    labelColor: string;
  }
> = {
  common: {
    bg: "linear-gradient(160deg, #1c2232 0%, #242c3e 100%)",
    border: "#485060",
    glow: "rgba(80,100,140,0.5)",
    foil: null,
    label: "Comum",
    labelColor: "#8899aa",
  },
  uncommon: {
    bg: "linear-gradient(160deg, #0f1c38 0%, #162448 100%)",
    border: "#3366cc",
    glow: "rgba(50,110,220,0.6)",
    foil: "linear-gradient(130deg, rgba(100,170,255,0.22) 0%, transparent 45%)",
    label: "Incomum",
    labelColor: "#5599ff",
  },
  rare: {
    bg: "linear-gradient(160deg, #1e1200 0%, #3a2200 50%, #1e1200 100%)",
    border: "#cc9900",
    glow: "rgba(220,160,0,0.7)",
    foil:
      "linear-gradient(130deg, rgba(255,210,0,0.28) 0%, transparent 45%, rgba(255,180,0,0.12) 75%, transparent 100%)",
    label: "Raro",
    labelColor: "#ffcc00",
  },
};

export function JokerSlot({ joker }: { joker?: Joker }) {
  const [hovered, setHovered] = useState(false);

  if (!joker) {
    return (
      <div
        className="rounded-xl flex items-center justify-center"
        style={{
          width: 52,
          height: 76,
          flexShrink: 0,
          background: "rgba(255,255,255,0.02)",
          border: "2px dashed rgba(255,255,255,0.08)",
          color: "rgba(255,255,255,0.12)",
          fontSize: 16,
        }}
      >
        +
      </div>
    );
  }

  const style = RARITY_STYLE[joker.rarity] ?? RARITY_STYLE.common;

  return (
    <div
      className="relative"
      style={{ flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ scale: 0, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="rounded-xl overflow-hidden relative"
        style={{
          width: 52,
          height: 76,
          background: style.bg,
          border: `2px solid ${style.border}`,
          boxShadow: `0 4px 16px rgba(0,0,0,0.6), 0 0 12px ${style.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
          cursor: "default",
        }}
      >
        {/* Foil/material overlay */}
        {style.foil && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: style.foil,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        )}

        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 70% 50% at 50% 120%, ${style.glow} 0%, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 4px 6px",
          }}
        >
          {/* Rarity dot */}
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: style.border,
              boxShadow: `0 0 6px ${style.glow}`,
              alignSelf: "flex-end",
              marginRight: 2,
            }}
          />

          {/* Icon */}
          <span
            style={{
              fontSize: 24,
              lineHeight: 1,
              filter: `drop-shadow(0 0 6px ${style.glow})`,
            }}
          >
            {joker.icon}
          </span>

          {/* Name */}
          <span
            style={{
              fontSize: 6.5,
              fontWeight: 700,
              color: style.labelColor,
              textAlign: "center",
              maxWidth: 46,
              lineHeight: 1.2,
              wordBreak: "break-word",
            }}
          >
            {joker.name}
          </span>
        </div>
      </motion.div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 z-50 rounded-xl pointer-events-none"
            style={{
              width: 178,
              padding: "12px 14px",
              background: "linear-gradient(160deg, #0e1a0e 0%, #141f14 100%)",
              border: `1.5px solid ${style.border}`,
              boxShadow: `0 8px 32px rgba(0,0,0,0.85), 0 0 18px ${style.glow}`,
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: 16 }}>{joker.icon}</span>
              <div>
                <p style={{ fontSize: 11, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>
                  {joker.name}
                </p>
                <p style={{ fontSize: 8, color: style.labelColor, fontWeight: 700, marginTop: 1 }}>
                  ✦ {style.label}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 9.5,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.5,
                borderTop: `1px solid rgba(255,255,255,0.06)`,
                paddingTop: 8,
              }}
            >
              {joker.description}
            </p>

            {/* Cost */}
            <p
              style={{
                fontSize: 8,
                color: "#ffcc44",
                fontWeight: 700,
                marginTop: 6,
                textAlign: "right",
              }}
            >
              💰 ${joker.cost}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
