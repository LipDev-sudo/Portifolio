"use client";

import { motion } from "framer-motion";
import type { Card } from "@/lib/game/cards";
import { SUIT_META } from "@/lib/game/cards";
import { sounds } from "@/lib/game/sounds";

function rankLabel(rank: number): string {
  if (rank <= 10) return String(rank);
  if (rank === 11) return "J";
  if (rank === 12) return "Q";
  if (rank === 13) return "K";
  return "A";
}

interface GameCardProps {
  card: Card;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  dealIndex?: number;
  chipPopup?: number | null;
}

export function GameCard({ card, selected, onClick, disabled, dealIndex = 0, chipPopup }: GameCardProps) {
  const meta = SUIT_META[card.suit];

  function handleClick() {
    if (disabled) return;
    selected ? sounds.cardDeselect() : sounds.cardSelect();
    onClick();
  }

  return (
    <div className="relative" style={{ flexShrink: 0 }}>
      <motion.button
        onClick={handleClick}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: selected ? -18 : 0, opacity: 1 }}
        transition={{
          type: "spring", stiffness: 340, damping: 26,
          opacity: { delay: dealIndex * 0.055, duration: 0.25 },
          y: { delay: selected ? 0 : undefined },
        }}
        whileHover={!disabled ? { scale: 1.07, y: selected ? -20 : -5 } : {}}
        className="relative flex flex-col items-center justify-between rounded-xl outline-none"
        style={{
          width: 50, height: 74, padding: "6px 5px 5px",
          background: "linear-gradient(160deg, #1e1e38 0%, #111128 100%)",
          border: `2px solid ${selected ? meta.color : "rgba(255,255,255,0.10)"}`,
          boxShadow: selected ? `0 8px 28px ${meta.glow}, 0 0 0 1px ${meta.color}55` : "0 2px 8px rgba(0,0,0,0.4)",
          cursor: disabled ? "default" : "pointer",
        }}
      >
        <div className="w-full text-left font-bold leading-none" style={{ fontSize: 11, color: meta.color }}>
          {rankLabel(card.rank)}
        </div>
        <div className="flex flex-col items-center gap-0.5 flex-1 justify-center">
          <span style={{ fontSize: 18, lineHeight: 1 }}>{meta.icon}</span>
          <span className="text-center text-white/70 leading-tight" style={{ fontSize: 7, maxWidth: 40, wordBreak: "break-word" }}>
            {card.name}
          </span>
        </div>
        <div className="w-full text-right font-semibold text-yellow-300" style={{ fontSize: 9 }}>
          {card.chips}
        </div>
      </motion.button>

      {chipPopup != null && (
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.7 }}
          animate={{ y: -28, opacity: 1, scale: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-none font-black rounded-lg px-2 py-0.5 text-yellow-300"
          style={{ fontSize: 12, background: "rgba(12,12,22,0.92)", border: "1px solid rgba(245,158,11,0.4)", whiteSpace: "nowrap" }}
        >
          +{chipPopup}
        </motion.div>
      )}
    </div>
  );
}
