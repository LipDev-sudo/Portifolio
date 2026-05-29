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

/** Balatro-style card material based on rank */
function getCardMaterial(rank: number): {
  bg: string;
  frame: string;
  sheen: string | null;
  tag: string | null;
} {
  if (rank === 14)
    return {
      bg: "linear-gradient(160deg, #f4e89a 0%, #e8d870 100%)",
      frame: "#aa8a00",
      sheen: "linear-gradient(130deg, rgba(255,220,60,0.45) 0%, transparent 50%)",
      tag: "Gold",
    };
  if (rank >= 11)
    return {
      bg: "linear-gradient(160deg, #e8f0fa 0%, #d4e2f2 100%)",
      frame: "#4d7aaa",
      sheen: "linear-gradient(130deg, rgba(150,200,255,0.35) 0%, transparent 50%)",
      tag: "Foil",
    };
  return {
    bg: "linear-gradient(160deg, #f2e8d5 0%, #e4d4bc 100%)",
    frame: "#7a5030",
    sheen: null,
    tag: null,
  };
}

interface GameCardProps {
  card: Card;
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  dealIndex?: number;
  chipPopup?: number | null;
}

export function GameCard({
  card,
  selected,
  onClick,
  disabled,
  dealIndex = 0,
  chipPopup,
}: GameCardProps) {
  const meta = SUIT_META[card.suit];
  const mat = getCardMaterial(card.rank);

  function handleClick() {
    if (disabled) return;
    selected ? sounds.cardDeselect() : sounds.cardSelect();
    onClick();
  }

  return (
    <div className="relative" style={{ flexShrink: 0 }}>
      <motion.button
        onClick={handleClick}
        initial={{ y: 50, opacity: 0, rotateY: -18 }}
        animate={{ y: selected ? -20 : 0, opacity: 1, rotateY: 0 }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 26,
          opacity: { delay: dealIndex * 0.055, duration: 0.22 },
          rotateY: { delay: dealIndex * 0.04, duration: 0.28 },
        }}
        whileHover={!disabled ? { scale: 1.1, y: selected ? -23 : -7 } : {}}
        className="relative rounded-xl outline-none overflow-hidden"
        style={{
          width: 52,
          height: 76,
          display: "flex",
          flexDirection: "column",
          background: mat.bg,
          border: `2.5px solid ${selected ? meta.color : mat.frame}`,
          boxShadow: selected
            ? `0 14px 36px ${meta.glow}, 0 0 0 2px ${meta.color}99, inset 0 1px 0 rgba(255,255,255,0.7)`
            : `0 4px 14px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.15)`,
          cursor: disabled ? "default" : "pointer",
        }}
      >
        {/* Material sheen overlay */}
        {mat.sheen && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: mat.sheen,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        )}

        {/* Selected bottom glow */}
        {selected && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(ellipse 80% 60% at 50% 110%, ${meta.glow} 0%, transparent 70%)`,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}

        {/* Top-left: rank in suit color */}
        <div
          style={{
            padding: "4px 5px 0",
            position: "relative",
            zIndex: 2,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 13,
              fontWeight: 900,
              color: meta.color,
              textShadow: selected ? `0 0 8px ${meta.color}` : "none",
              letterSpacing: "-0.5px",
            }}
          >
            {rankLabel(card.rank)}
          </span>
        </div>

        {/* Center: suit emoji + card name */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            position: "relative",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: 22,
              lineHeight: 1,
              filter: selected
                ? `drop-shadow(0 0 6px ${meta.color})`
                : "drop-shadow(0 1px 2px rgba(0,0,0,0.25))",
            }}
          >
            {meta.icon}
          </span>
          <span
            style={{
              fontSize: 6,
              color: "rgba(0,0,0,0.5)",
              textAlign: "center",
              maxWidth: 44,
              lineHeight: 1.2,
              fontWeight: 700,
              letterSpacing: "0.2px",
            }}
          >
            {card.name}
          </span>
        </div>

        {/* Bottom-right: chip value */}
        <div
          style={{
            padding: "0 5px 5px",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            zIndex: 2,
          }}
        >
          <span
            style={{
              fontSize: 8,
              fontWeight: 900,
              fontFamily: "monospace",
              background: "rgba(0,0,0,0.18)",
              borderRadius: 3,
              padding: "1px 3px",
              color: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            {card.chips}
          </span>
        </div>
      </motion.button>

      {/* Chip popup */}
      {chipPopup != null && (
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.6 }}
          animate={{ y: -34, opacity: 1, scale: 1 }}
          exit={{ y: -46, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 z-20 pointer-events-none font-black rounded-lg px-2 py-0.5"
          style={{
            fontSize: 12,
            background: "rgba(0,100,220,0.95)",
            color: "#aaddff",
            border: "1.5px solid rgba(0,180,255,0.9)",
            boxShadow: "0 0 12px rgba(0,180,255,0.5)",
            whiteSpace: "nowrap",
          }}
        >
          +{chipPopup}
        </motion.div>
      )}
    </div>
  );
}
