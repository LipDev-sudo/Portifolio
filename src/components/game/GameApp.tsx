"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/lib/game/store";
import { GameBoard } from "./GameBoard";
import { Shop } from "./Shop";
import { BLINDS } from "@/lib/game/progression";
import { SUIT_META } from "@/lib/game/cards";

// ── Suit pills data ───────────────────────────────────────────────────────────
const SUITS = Object.entries(SUIT_META).map(([key, meta]) => ({ key, ...meta }));

// ── CRT overlay (scanlines + vignette) ───────────────────────────────────────
function CRTOverlay() {
  return (
    <>
      {/* Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)",
          pointerEvents: "none",
          zIndex: 90,
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 48%, rgba(0,0,0,0.62) 100%)",
          pointerEvents: "none",
          zIndex: 90,
        }}
      />
    </>
  );
}

// ── Screen wrapper — dark casino green, fills modal container ─────────────────
function Screen({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #0a1a0a 0%, #0d1f0d 100%)",
        padding: "20px 14px",
      }}
    >
      <CRTOverlay />
      {/* Felt dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {children}
      </div>
    </motion.div>
  );
}

// ── Menu screen ───────────────────────────────────────────────────────────────
function MenuScreen() {
  const { startRun } = useGameStore();

  return (
    <Screen>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.08, type: "spring", stiffness: 240, damping: 22 }}
        style={{ maxWidth: 340, width: "100%", textAlign: "center", margin: "0 auto" }}
      >
        {/* Logo */}
        <div style={{ marginBottom: 20 }}>
          <motion.p
            initial={{ scale: 0.6, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
            style={{ fontSize: 52, lineHeight: 1 }}
          >
            🃏
          </motion.p>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 900,
              marginTop: 8,
              background: "linear-gradient(90deg, #44ccff 0%, #aa66ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              letterSpacing: "-0.5px",
            }}
          >
            Dev Balatro
          </h1>
          <p
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.35)",
              marginTop: 4,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Poker de Programadores
          </p>
        </div>

        {/* Suit pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 18,
          }}
        >
          {SUITS.map((s, i) => (
            <motion.span
              key={s.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              style={{
                fontSize: 10,
                fontWeight: 700,
                borderRadius: 100,
                padding: "4px 10px",
                background: `${s.color}18`,
                border: `1px solid ${s.color}55`,
                color: s.color,
                textShadow: `0 0 8px ${s.glow}`,
              }}
            >
              {s.icon} {s.label}
            </motion.span>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.4)",
            marginBottom: 20,
            lineHeight: 1.7,
          }}
        >
          Monte mãos de poker com cartas de tecnologia.
          <br />
          Use Jokers para ampliar chips e mult.
          <br />
          Sobreviva a 9 blinds e derrote o CTO.
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={startRun}
          style={{
            width: "100%",
            padding: "14px 0",
            fontSize: 14,
            fontWeight: 900,
            borderRadius: 14,
            background: "linear-gradient(90deg, #0088cc 0%, #44ccff 100%)",
            color: "#001a33",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 0 28px rgba(0,180,255,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          Nova Partida →
        </motion.button>

        {/* Hand legend */}
        <div
          style={{
            marginTop: 18,
            textAlign: "left",
            borderRadius: 14,
            padding: "14px",
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p
            style={{
              fontSize: 7.5,
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: 10,
            }}
          >
            Mãos (Chips × Mult)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4px 16px",
            }}
          >
            {[
              ["Syntax Error",   "High Card",   "5×1"],
              ["Hello World",    "Par",         "10×2"],
              ["Code Review",    "2 Pares",     "20×2"],
              ["Design Pattern", "Trinca",      "30×3"],
              ["Tech Stack",     "Sequência",   "30×4"],
              ["Monorepo",       "Flush",       "35×4"],
              ["Full Stack",     "Full House",  "40×4"],
              ["Senior Dev",     "Quadra",      "60×7"],
              ["10x Engineer",   "Str. Flush",  "100×8"],
              ["Principal Eng.", "Royal Flush", "100×8"],
            ].map(([name, type, score]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 4,
                }}
              >
                <div>
                  <span
                    style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.65)" }}
                  >
                    {name}
                  </span>
                  <span
                    style={{ fontSize: 7.5, color: "rgba(255,255,255,0.25)", marginLeft: 3 }}
                  >
                    · {type}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 800,
                    fontFamily: "monospace",
                    color: "#ffcc44",
                    opacity: 0.75,
                    flexShrink: 0,
                  }}
                >
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Screen>
  );
}

// ── Blind select screen ───────────────────────────────────────────────────────
function BlindSelectScreen() {
  const { ante, blindIndex, startBlind, goToMenu } = useGameStore();
  const blind = BLINDS[ante]?.[blindIndex] ?? BLINDS[0][0];
  const isBoss = blind.isBoss;

  return (
    <Screen>
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{ maxWidth: 310, width: "100%", textAlign: "center", margin: "0 auto" }}
      >
        <p
          style={{
            fontSize: 8.5,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: 14,
          }}
        >
          Ante {ante + 1} · Blind {blindIndex + 1} de {BLINDS[ante].length}
        </p>

        {/* Blind card */}
        <div
          style={{
            borderRadius: 18,
            padding: "22px 20px",
            marginBottom: 18,
            background: isBoss
              ? "linear-gradient(160deg, rgba(100,0,0,0.35) 0%, rgba(8,15,8,0.98) 100%)"
              : "linear-gradient(160deg, rgba(0,60,100,0.3) 0%, rgba(8,15,8,0.98) 100%)",
            border: `2px solid ${isBoss ? "rgba(255,50,70,0.45)" : "rgba(0,180,255,0.3)"}`,
            boxShadow: isBoss
              ? "0 0 44px rgba(220,30,50,0.2), inset 0 1px 0 rgba(255,100,100,0.1)"
              : "0 0 40px rgba(0,160,255,0.15), inset 0 1px 0 rgba(100,200,255,0.1)",
          }}
        >
          {isBoss && (
            <p
              style={{
                fontSize: 8,
                fontWeight: 800,
                color: "rgba(255,80,90,0.7)",
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                marginBottom: 6,
              }}
            >
              ⚠ Boss Blind
            </p>
          )}
          <p
            style={{
              fontSize: 22,
              fontWeight: 900,
              color: isBoss ? "#ff5566" : "#44ccff",
              textShadow: isBoss
                ? "0 0 16px rgba(255,50,70,0.6)"
                : "0 0 16px rgba(0,200,255,0.5)",
              marginBottom: 6,
            }}
          >
            {blind.name}
          </p>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>
            {blind.description}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
            <div>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  fontFamily: "monospace",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {blind.target.toLocaleString("pt-BR")}
              </p>
              <p
                style={{
                  fontSize: 7.5,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: 3,
                }}
              >
                Target
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  fontFamily: "monospace",
                  color: "#ffcc44",
                  lineHeight: 1,
                  textShadow: "0 0 10px rgba(255,200,0,0.4)",
                }}
              >
                ${blind.reward}
              </p>
              <p
                style={{
                  fontSize: 7.5,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginTop: 3,
                }}
              >
                Prêmio
              </p>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 18,
          }}
        >
          {BLINDS[ante].map((b, i) => (
            <motion.div
              key={i}
              animate={{
                width: i === blindIndex ? 22 : 8,
                background:
                  i < blindIndex
                    ? "#88ff44"
                    : i === blindIndex
                    ? b.isBoss
                      ? "#ff5566"
                      : "#44ccff"
                    : "rgba(255,255,255,0.12)",
              }}
              transition={{ duration: 0.3 }}
              style={{ height: 8, borderRadius: 100 }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={startBlind}
          style={{
            width: "100%",
            padding: "13px 0",
            fontSize: 13,
            fontWeight: 900,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            marginBottom: 12,
            background: isBoss
              ? "linear-gradient(90deg, #cc2233, #ff5566)"
              : "linear-gradient(90deg, #0088cc, #44ccff)",
            color: isBoss ? "#fff" : "#001a33",
            boxShadow: isBoss
              ? "0 0 24px rgba(220,30,50,0.5)"
              : "0 0 24px rgba(0,180,255,0.45)",
            letterSpacing: "0.05em",
          }}
        >
          Entrar no Blind →
        </motion.button>

        <button
          onClick={goToMenu}
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.22)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
        >
          ← Voltar ao Menu
        </button>
      </motion.div>
    </Screen>
  );
}

// ── Game over screen ──────────────────────────────────────────────────────────
function GameOverScreen() {
  const { score, ante, blindIndex, startRun, goToMenu } = useGameStore();
  const blind = BLINDS[ante]?.[blindIndex] ?? BLINDS[0][0];

  return (
    <Screen>
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ maxWidth: 300, width: "100%", textAlign: "center", margin: "0 auto" }}
      >
        <motion.p
          initial={{ rotate: -15 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          style={{ fontSize: 54, lineHeight: 1 }}
        >
          💀
        </motion.p>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 900,
            color: "#ff5566",
            textShadow: "0 0 20px rgba(255,50,70,0.5)",
            marginTop: 12,
            marginBottom: 4,
          }}
        >
          Game Over
        </h2>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginBottom: 8 }}>
          Eliminado em{" "}
          <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 700 }}>
            {blind.name}
          </span>
        </p>
        <p
          style={{
            fontSize: 28,
            fontWeight: 900,
            fontFamily: "monospace",
            color: "#ff5566",
            marginBottom: 22,
          }}
        >
          {score.toLocaleString("pt-BR")} pts
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={startRun}
          style={{
            width: "100%",
            padding: "13px 0",
            fontSize: 13,
            fontWeight: 900,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            marginBottom: 10,
            background: "linear-gradient(90deg, #cc2233, #ff5566)",
            color: "#fff",
            boxShadow: "0 0 20px rgba(220,30,50,0.4)",
            letterSpacing: "0.04em",
          }}
        >
          Tentar Novamente
        </motion.button>
        <button
          onClick={goToMenu}
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.22)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
        >
          ← Menu Principal
        </button>
      </motion.div>
    </Screen>
  );
}

// ── Victory screen ────────────────────────────────────────────────────────────
function VictoryScreen() {
  const { score, startRun, goToMenu } = useGameStore();

  return (
    <Screen>
      <motion.div
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ maxWidth: 320, width: "100%", textAlign: "center", margin: "0 auto" }}
      >
        <motion.p
          animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 54, lineHeight: 1 }}
        >
          🏆
        </motion.p>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 900,
            marginTop: 12,
            marginBottom: 4,
            background: "linear-gradient(90deg, #88ff44 0%, #44ccff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Principal Engineer!
        </h2>
        <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
          Você derrotou o CTO e completou todos os Antes.
        </p>
        <p
          style={{
            fontSize: 28,
            fontWeight: 900,
            fontFamily: "monospace",
            color: "#88ff44",
            textShadow: "0 0 20px rgba(120,255,60,0.5)",
            marginBottom: 22,
          }}
        >
          {score.toLocaleString("pt-BR")} pts
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={startRun}
          style={{
            width: "100%",
            padding: "13px 0",
            fontSize: 13,
            fontWeight: 900,
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            marginBottom: 10,
            background: "linear-gradient(90deg, #5adf20, #88ff44)",
            color: "#0a1a0a",
            boxShadow: "0 0 28px rgba(100,240,50,0.4)",
            letterSpacing: "0.04em",
          }}
        >
          Jogar Novamente
        </motion.button>
        <button
          onClick={goToMenu}
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.22)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
        >
          ← Menu Principal
        </button>
      </motion.div>
    </Screen>
  );
}

// ── Embedded game root ────────────────────────────────────────────────────────
export function GameApp() {
  const phase = useGameStore((s) => s.phase);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#0a1a0a",
      }}
    >
      <AnimatePresence mode="wait">
        {phase === "menu"         && <MenuScreen        key="menu"         />}
        {phase === "blind_select" && <BlindSelectScreen key="blind_select" />}
        {(phase === "playing" || phase === "scoring") && <GameBoard key="board" />}
        {phase === "shop"         && <Shop              key="shop"         />}
        {phase === "game_over"    && <GameOverScreen    key="game_over"    />}
        {phase === "victory"      && <VictoryScreen     key="victory"      />}
      </AnimatePresence>
    </div>
  );
}
