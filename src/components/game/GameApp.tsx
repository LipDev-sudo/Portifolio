"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/lib/game/store";
import { GameBoard } from "./GameBoard";
import { Shop } from "./Shop";
import { BLINDS } from "@/lib/game/progression";
import { SUIT_META } from "@/lib/game/cards";

// ── Suit pills data ───────────────────────────────────────────────────────────
const SUITS = Object.entries(SUIT_META).map(([key, meta]) => ({ key, ...meta }));

// ── Screen wrapper — position: absolute to fill modal container ───────────────
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
        backgroundColor: "#08080f",
        padding: "20px 16px",
      }}
    >
      {children}
    </motion.div>
  );
}

// ── Menu screen ───────────────────────────────────────────────────────────────
function MenuScreen() {
  const { startRun } = useGameStore();

  return (
    <Screen>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        style={{ maxWidth: 340, width: "100%", textAlign: "center" }}
      >
        {/* Logo */}
        <div className="mb-5">
          <p style={{ fontSize: 48, lineHeight: 1 }}>🃏</p>
          <h1
            className="text-3xl font-black mt-2"
            style={{
              background: "linear-gradient(90deg, #00d4ff, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dev Balatro
          </h1>
          <p className="text-xs text-white/40 mt-1.5">Poker de Programadores</p>
        </div>

        {/* Suit pills */}
        <div className="flex justify-center gap-2 flex-wrap mb-6">
          {SUITS.map((s) => (
            <span
              key={s.key}
              className="text-xs font-semibold rounded-full px-3 py-1"
              style={{
                background: `${s.color}18`,
                border: `1px solid ${s.color}50`,
                color: s.color,
              }}
            >
              {s.icon} {s.label}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-white/50 mb-6 leading-relaxed">
          Monte mãos de poker com cartas de tecnologia.
          Use Jokers para ampliar seus chips e mult.
          Sobreviva a 9 blinds e derrote o CTO.
        </p>

        {/* CTA */}
        <button
          onClick={startRun}
          className="w-full font-black rounded-2xl transition-opacity hover:opacity-90"
          style={{
            padding: "14px 0",
            fontSize: 15,
            background: "linear-gradient(90deg, #00d4ff, #a855f7)",
            color: "#08080f",
            boxShadow: "0 0 32px rgba(0,212,255,0.3)",
          }}
        >
          Nova Partida →
        </button>

        {/* Hand legend */}
        <div
          className="mt-6 text-left rounded-2xl p-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-3">
            Mãos (Chips × Mult)
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            {[
              ["Syntax Error",    "High Card",    "5×1"],
              ["Hello World",     "Par",          "10×2"],
              ["Code Review",     "2 Pares",      "20×2"],
              ["Design Pattern",  "Trinca",       "30×3"],
              ["Tech Stack",      "Sequência",    "30×4"],
              ["Monorepo",        "Flush",        "35×4"],
              ["Full Stack",      "Full House",   "40×4"],
              ["Senior Dev",      "Quadra",       "60×7"],
              ["10x Engineer",    "Str. Flush",   "100×8"],
              ["Principal Eng.",  "Royal Flush",  "100×8"],
            ].map(([name, type, score]) => (
              <div key={name} className="flex justify-between items-baseline gap-1">
                <div>
                  <span className="text-[10px] font-semibold text-white/70">{name}</span>
                  <span className="text-[8px] text-white/30 ml-1">· {type}</span>
                </div>
                <span className="text-[9px] font-bold text-yellow-300/70 shrink-0">
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

  return (
    <Screen>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{ maxWidth: 320, width: "100%", textAlign: "center" }}
      >
        <p className="text-[10px] text-white/35 uppercase tracking-widest mb-2">
          Ante {ante + 1} · Blind {blindIndex + 1} de {BLINDS[ante].length}
        </p>

        {/* Blind card */}
        <div
          className="rounded-2xl p-5 mb-5"
          style={{
            background: blind.isBoss
              ? "linear-gradient(135deg, rgba(255,77,109,0.12) 0%, rgba(12,12,22,0.97) 100%)"
              : "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(12,12,22,0.97) 100%)",
            border: `2px solid ${blind.isBoss ? "#ff4d6d55" : "#00d4ff30"}`,
            boxShadow: blind.isBoss
              ? "0 0 40px rgba(255,77,109,0.15)"
              : "0 0 40px rgba(0,212,255,0.10)",
          }}
        >
          <p
            className="text-2xl font-black mb-1"
            style={{ color: blind.isBoss ? "#ff4d6d" : "#00d4ff" }}
          >
            {blind.name}
          </p>
          <p className="text-xs text-white/50 mb-4">{blind.description}</p>

          <div className="flex justify-center gap-8">
            <div>
              <p className="text-xl font-black text-white">
                {blind.target.toLocaleString("pt-BR")}
              </p>
              <p className="text-[9px] text-white/35 uppercase tracking-widest">Target</p>
            </div>
            <div>
              <p className="text-xl font-black text-yellow-300">${blind.reward}</p>
              <p className="text-[9px] text-white/35 uppercase tracking-widest">Prêmio</p>
            </div>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-5">
          {BLINDS[ante].map((b, i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === blindIndex ? 20 : 8,
                height: 8,
                background:
                  i < blindIndex
                    ? "#bef264"
                    : i === blindIndex
                    ? blind.isBoss
                      ? "#ff4d6d"
                      : "#00d4ff"
                    : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>

        <button
          onClick={startBlind}
          className="w-full font-black rounded-xl transition-opacity hover:opacity-90 mb-3"
          style={{
            padding: "13px 0",
            fontSize: 14,
            background: blind.isBoss ? "#ff4d6d" : "#00d4ff",
            color: "#08080f",
            boxShadow: blind.isBoss
              ? "0 0 24px rgba(255,77,109,0.4)"
              : "0 0 24px rgba(0,212,255,0.4)",
          }}
        >
          Entrar no Blind →
        </button>

        <button
          onClick={goToMenu}
          className="text-xs text-white/25 hover:text-white/50 transition-colors"
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ maxWidth: 300, width: "100%", textAlign: "center" }}
      >
        <p style={{ fontSize: 52, lineHeight: 1 }}>💀</p>
        <h2 className="text-2xl font-black text-white mt-3 mb-1">Game Over</h2>
        <p className="text-xs text-white/40 mb-2">
          Eliminado em{" "}
          <span className="text-white/70 font-semibold">{blind.name}</span>
        </p>
        <p className="text-3xl font-black text-[#ff4d6d] mb-5">
          {score.toLocaleString("pt-BR")} pts
        </p>
        <button
          onClick={startRun}
          className="w-full font-black rounded-xl transition-opacity hover:opacity-90 mb-3"
          style={{
            padding: "13px 0",
            fontSize: 14,
            background: "#ff4d6d",
            color: "#08080f",
          }}
        >
          Tentar Novamente
        </button>
        <button
          onClick={goToMenu}
          className="text-xs text-white/25 hover:text-white/50 transition-colors"
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        style={{ maxWidth: 320, width: "100%", textAlign: "center" }}
      >
        <p style={{ fontSize: 52, lineHeight: 1 }}>🏆</p>
        <h2
          className="text-2xl font-black mt-3 mb-1"
          style={{
            background: "linear-gradient(90deg, #bef264, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Principal Engineer!
        </h2>
        <p className="text-xs text-white/50 mb-2">
          Você derrotou o CTO e completou todos os Antes.
        </p>
        <p className="text-3xl font-black text-[#bef264] mb-5">
          {score.toLocaleString("pt-BR")} pts
        </p>
        <button
          onClick={startRun}
          className="w-full font-black rounded-xl transition-opacity hover:opacity-90 mb-3"
          style={{
            padding: "13px 0",
            fontSize: 14,
            background: "linear-gradient(90deg, #bef264, #00d4ff)",
            color: "#08080f",
            boxShadow: "0 0 32px rgba(190,242,100,0.35)",
          }}
        >
          Jogar Novamente
        </button>
        <button
          onClick={goToMenu}
          className="text-xs text-white/25 hover:text-white/50 transition-colors"
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
    // Outer container: fills the modal, clips all absolute children
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", background: "#08080f" }}>
      <AnimatePresence mode="wait">
        {phase === "menu"         && <MenuScreen        key="menu"        />}
        {phase === "blind_select" && <BlindSelectScreen key="blind_select"/>}
        {(phase === "playing" || phase === "scoring") && <GameBoard key="board" />}
        {phase === "shop"         && <Shop              key="shop"        />}
        {phase === "game_over"    && <GameOverScreen     key="game_over"   />}
        {phase === "victory"      && <VictoryScreen      key="victory"     />}
      </AnimatePresence>
    </div>
  );
}
