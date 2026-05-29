"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Joker } from "@/lib/game/jokers";

const RARITY: Record<string, { border: string; shadow: string; label: string }> = {
  common:   { border: "#6b7280", shadow: "rgba(107,114,128,0.25)", label: "Comum" },
  uncommon: { border: "#60a5fa", shadow: "rgba(96,165,250,0.30)",  label: "Incomum" },
  rare:     { border: "#f59e0b", shadow: "rgba(245,158,11,0.40)",  label: "Raro" },
};

export function JokerSlot({ joker }: { joker?: Joker }) {
  const [hovered, setHovered] = useState(false);

  if (!joker) {
    return (
      <div className="rounded-xl flex items-center justify-center border-2 border-dashed border-white/10 text-white/20 text-sm"
        style={{ width: 50, height: 72, flexShrink: 0 }}>+</div>
    );
  }

  const style = RARITY[joker.rarity] ?? RARITY.common;

  return (
    <div className="relative" style={{ flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div initial={{ scale: 0, rotate: -15 }} animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="rounded-xl flex flex-col items-center justify-between"
        style={{ width: 50, height: 72, padding: "7px 4px 6px",
          background: "linear-gradient(160deg, #1e1e38 0%, #111128 100%)",
          border: `2px solid ${style.border}`, boxShadow: `0 0 12px ${style.shadow}` }}>
        <span style={{ fontSize: 20, lineHeight: 1 }}>{joker.icon}</span>
        <span className="text-center text-white/80 leading-tight"
          style={{ fontSize: 7, maxWidth: 42, wordBreak: "break-word" }}>{joker.name}</span>
      </motion.div>
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 6, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 rounded-xl pointer-events-none"
            style={{ width: 168, padding: "10px 12px", background: "#0d0d1a",
              border: `1px solid ${style.border}`, boxShadow: `0 8px 32px rgba(0,0,0,0.8)` }}>
            <p className="font-bold text-white mb-1" style={{ fontSize: 12 }}>{joker.icon} {joker.name}</p>
            <p className="text-white/60 leading-snug" style={{ fontSize: 10 }}>{joker.description}</p>
            <p className="mt-1.5 font-semibold" style={{ fontSize: 9, color: style.border }}>{style.label} · ${joker.cost}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
