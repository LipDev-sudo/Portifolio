"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/lib/game/store";
import type { Joker } from "@/lib/game/jokers";
import { MAX_JOKERS } from "@/lib/game/progression";
import { sounds } from "@/lib/game/sounds";

const RARITY_STYLE: Record<
  string,
  {
    bg: string;
    border: string;
    glow: string;
    foil: string | null;
    label: string;
    labelColor: string;
    btnBg: string;
  }
> = {
  common: {
    bg: "linear-gradient(160deg, #1c2232 0%, #242c3e 100%)",
    border: "#485060",
    glow: "rgba(80,100,140,0.5)",
    foil: null,
    label: "Comum",
    labelColor: "#8899aa",
    btnBg: "rgba(80,100,140,0.3)",
  },
  uncommon: {
    bg: "linear-gradient(160deg, #0f1c38 0%, #162448 100%)",
    border: "#3366cc",
    glow: "rgba(50,110,220,0.5)",
    foil: "linear-gradient(130deg, rgba(100,170,255,0.2) 0%, transparent 45%)",
    label: "Incomum",
    labelColor: "#5599ff",
    btnBg: "rgba(50,110,220,0.3)",
  },
  rare: {
    bg: "linear-gradient(160deg, #1e1200 0%, #3a2200 50%, #1e1200 100%)",
    border: "#cc9900",
    glow: "rgba(220,160,0,0.6)",
    foil:
      "linear-gradient(130deg, rgba(255,210,0,0.25) 0%, transparent 45%, rgba(255,180,0,0.1) 75%, transparent 100%)",
    label: "Raro",
    labelColor: "#ffcc00",
    btnBg: "rgba(180,120,0,0.35)",
  },
};

function ShopCard({
  joker,
  canAfford,
  jokersFull,
  onBuy,
}: {
  joker: Joker;
  canAfford: boolean;
  jokersFull: boolean;
  onBuy: () => void;
}) {
  const [bought, setBought] = useState(false);
  const style = RARITY_STYLE[joker.rarity] ?? RARITY_STYLE.common;
  const disabled = !canAfford || jokersFull || bought;

  const btnLabel = bought
    ? "✓ Comprado"
    : jokersFull
    ? "Slots cheios"
    : !canAfford
    ? "Sem dinheiro"
    : "Comprar";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: -15 }}
      animate={{ opacity: bought ? 0.4 : 1, y: 0, rotateY: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="rounded-2xl overflow-hidden relative flex flex-col items-center"
      style={{
        background: bought ? "rgba(255,255,255,0.02)" : style.bg,
        border: `2px solid ${bought ? "rgba(255,255,255,0.06)" : style.border}`,
        boxShadow: bought
          ? "none"
          : `0 4px 20px rgba(0,0,0,0.6), 0 0 14px ${style.glow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        padding: "14px 10px 12px",
        gap: 10,
      }}
    >
      {/* Foil overlay */}
      {!bought && style.foil && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: style.foil,
            pointerEvents: "none",
          }}
        />
      )}

      {/* Rarity label */}
      <div
        style={{
          fontSize: 7,
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: style.labelColor,
          textShadow: `0 0 8px ${style.glow}`,
        }}
      >
        ✦ {style.label}
      </div>

      {/* Icon */}
      <div
        style={{
          fontSize: 36,
          lineHeight: 1,
          filter: bought ? "grayscale(1)" : `drop-shadow(0 0 8px ${style.glow})`,
        }}
      >
        {joker.icon}
      </div>

      {/* Name + description */}
      <div style={{ textAlign: "center", flex: 1 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 4,
          }}
        >
          {joker.name}
        </p>
        <p
          style={{
            fontSize: 9,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.5,
          }}
        >
          {joker.description}
        </p>
      </div>

      {/* Price + buy button */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <p
          style={{
            fontSize: 15,
            fontWeight: 900,
            color: bought ? "rgba(255,255,255,0.2)" : "#ffcc44",
            textShadow: bought ? "none" : "0 0 10px rgba(255,200,0,0.4)",
            fontFamily: "monospace",
          }}
        >
          ${joker.cost}
        </p>
        <button
          onClick={() => {
            if (disabled) return;
            setBought(true);
            sounds.buy();
            onBuy();
          }}
          style={{
            width: "100%",
            padding: "7px 0",
            borderRadius: 8,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: "0.05em",
            cursor: disabled ? "default" : "pointer",
            background: disabled ? "rgba(255,255,255,0.04)" : style.btnBg,
            border: `1.5px solid ${disabled ? "rgba(255,255,255,0.06)" : style.border}`,
            color: disabled ? "rgba(255,255,255,0.2)" : style.labelColor,
            boxShadow: disabled ? "none" : `0 0 8px ${style.glow}`,
            transition: "all 0.15s",
          }}
        >
          {btnLabel}
        </button>
      </div>
    </motion.div>
  );
}

export function Shop() {
  const { money, shopJokers, jokers, buyJoker, nextBlind } = useGameStore();
  const jokersFull = jokers.length >= MAX_JOKERS;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        background: "linear-gradient(180deg, #0a1a0a 0%, #0d1f0d 100%)",
      }}
    >
      {/* Scanlines */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ width: "100%", padding: "24px 14px 20px", position: "relative", zIndex: 1 }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 20,
            padding: "16px",
            background: "rgba(0,0,0,0.35)",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            style={{
              fontSize: 9,
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 4,
            }}
          >
            🏪 Loja do Joker
          </p>
          <h2
            style={{
              fontSize: 18,
              fontWeight: 900,
              color: "#fff",
              textShadow: "0 0 20px rgba(255,255,255,0.1)",
              marginBottom: 6,
            }}
          >
            Compre um Joker
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Disponível:</span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 900,
                color: "#ffcc44",
                fontFamily: "monospace",
                textShadow: "0 0 10px rgba(255,200,0,0.4)",
              }}
            >
              ${money}
            </span>
          </div>
          {jokersFull && (
            <p
              style={{
                fontSize: 9,
                color: "#ff4455",
                marginTop: 6,
                fontWeight: 700,
              }}
            >
              ⚠ Slots cheios ({MAX_JOKERS}/{MAX_JOKERS})
            </p>
          )}
        </div>

        {/* Joker cards grid */}
        <AnimatePresence>
          {shopJokers.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 10,
              }}
            >
              {shopJokers.map((j) => (
                <ShopCard
                  key={j.id}
                  joker={j}
                  canAfford={money >= j.cost}
                  jokersFull={jokersFull}
                  onBuy={() => buyJoker(j)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <p style={{ fontSize: 32, marginBottom: 8 }}>🛒</p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Loja vazia</p>
            </div>
          )}
        </AnimatePresence>

        {/* Owned jokers */}
        {jokers.length > 0 && (
          <div
            style={{
              marginTop: 16,
              padding: "12px",
              background: "rgba(0,0,0,0.25)",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: 8,
                color: "rgba(255,255,255,0.25)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              Seus Jokers ({jokers.length}/{MAX_JOKERS})
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
              {jokers.map((j) => (
                <div
                  key={j.id}
                  title={j.description}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
                >
                  <span style={{ fontSize: 20 }}>{j.icon}</span>
                  <span
                    style={{
                      fontSize: 7,
                      color: "rgba(255,255,255,0.4)",
                      textAlign: "center",
                      maxWidth: 48,
                    }}
                  >
                    {j.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next blind button */}
        <button
          onClick={nextBlind}
          style={{
            width: "100%",
            marginTop: 16,
            padding: "13px 0",
            fontSize: 13,
            fontWeight: 900,
            borderRadius: 14,
            background: "linear-gradient(90deg, #5adf20 0%, #88ff44 100%)",
            color: "#0a1a0a",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 24px rgba(140,255,60,0.35)",
            letterSpacing: "0.05em",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Próximo Blind →
        </button>
      </motion.div>
    </div>
  );
}
