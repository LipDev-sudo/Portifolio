"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/lib/game/store";
import { GameCard } from "./GameCard";
import { JokerSlot } from "./JokerSlot";
import { MAX_JOKERS, BLINDS } from "@/lib/game/progression";
import { detectHand } from "@/lib/game/hands";
import { sounds } from "@/lib/game/sounds";
import type { Card } from "@/lib/game/cards";

function getPreviewHandName(hand: Card[], selectedIds: string[]): string | null {
  if (selectedIds.length === 0) return null;
  try {
    return detectHand(hand.filter((c) => selectedIds.includes(c.id))).config.name;
  } catch {
    return null;
  }
}

type ScoreStep = "idle" | "name" | "chips" | "mult" | "total";

export function GameBoard() {
  const {
    phase, ante, blindIndex, score, target, handsLeft, discardsLeft, money,
    hand, selectedIds, jokers, lastScore, toggleSelect, playHand, discard, goToShop,
  } = useGameStore();

  const blind = BLINDS[ante]?.[blindIndex] ?? BLINDS[0][0];
  const progress = Math.min(score / Math.max(target, 1), 1);
  const canPlay = selectedIds.length >= 1 && selectedIds.length <= 5 && phase === "playing";
  const canDiscard = selectedIds.length >= 1 && discardsLeft > 0 && phase === "playing";
  const previewHand = getPreviewHandName(hand, selectedIds);

  const [scoreStep, setScoreStep] = useState<ScoreStep>("idle");
  const [chipPopups, setChipPopups] = useState<Record<number, number>>({});
  const lastScoreRef = useRef<typeof lastScore>(null);

  useEffect(() => {
    if (!lastScore || lastScore === lastScoreRef.current) return;
    lastScoreRef.current = lastScore;
    setScoreStep("name");
    sounds.playHand();
    const t1 = setTimeout(() => {
      setScoreStep("chips");
      sounds.tick();
      const p: Record<number, number> = {};
      hand.forEach((c, i) => { if (selectedIds.includes(c.id)) p[i] = c.chips; });
      setChipPopups(p);
    }, 450);
    const t2 = setTimeout(() => { setScoreStep("mult"); sounds.tick(); setChipPopups({}); }, 1050);
    const t3 = setTimeout(() => { setScoreStep("total"); sounds.tick(); }, 1600);
    const t4 = setTimeout(() => setScoreStep("idle"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScore]);

  const prevPhase = useRef(phase);
  useEffect(() => {
    if (phase !== prevPhase.current) {
      if (phase === "scoring") sounds.blindComplete();
      if (phase === "game_over") sounds.gameOver();
      if (phase === "victory") sounds.victory();
      prevPhase.current = phase;
    }
  }, [phase]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0a1a0a 0%, #0d1f0d 100%)",
      }}
    >
      {/* CRT scanlines overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
      {/* CRT vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 50%, rgba(0,0,0,0.55) 100%)",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {/* ── Top bar ───────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px 8px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.45)",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Blind info */}
        <div style={{ minWidth: 0 }}>
          <p
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              marginBottom: 2,
            }}
          >
            Ante {ante + 1} · {blind.isBoss ? "BOSS" : "Blind"}
          </p>
          <p
            style={{
              fontSize: 13,
              fontWeight: 900,
              color: blind.isBoss ? "#ff4455" : "#44ccff",
              textShadow: blind.isBoss
                ? "0 0 10px rgba(255,50,70,0.5)"
                : "0 0 10px rgba(0,200,255,0.4)",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {blind.name}
          </p>
        </div>

        {/* Score counter */}
        <div style={{ textAlign: "center", flexShrink: 0, margin: "0 10px" }}>
          <p
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 2,
            }}
          >
            Pontos
          </p>
          <motion.p
            key={score}
            initial={{ scale: 1.6, color: "#88ff44" }}
            animate={{ scale: 1, color: "#ffffff" }}
            transition={{ duration: 0.45 }}
            style={{
              fontSize: 22,
              fontWeight: 900,
              fontFamily: "monospace",
              lineHeight: 1,
              textShadow: "0 0 12px rgba(255,255,255,0.2)",
            }}
          >
            {score.toLocaleString("pt-BR")}
          </motion.p>
          <p
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.28)",
              fontFamily: "monospace",
            }}
          >
            / {target.toLocaleString("pt-BR")}
          </p>
        </div>

        {/* Money */}
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p
            style={{
              fontSize: 8,
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 2,
            }}
          >
            Dinheiro
          </p>
          <p
            style={{
              fontSize: 16,
              fontWeight: 900,
              fontFamily: "monospace",
              color: "#ffcc44",
              textShadow: "0 0 10px rgba(255,200,0,0.4)",
            }}
          >
            ${money}
          </p>
        </div>
      </div>

      {/* ── Progress bar ─────────────────────────────── */}
      <div
        style={{
          height: 7,
          background: "rgba(0,0,0,0.4)",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.55 }}
          style={{
            height: "100%",
            borderRadius: "0 4px 4px 0",
            background:
              progress >= 1
                ? "linear-gradient(90deg, #5adf20, #88ff44)"
                : "linear-gradient(90deg, #0088cc, #44ccff)",
            boxShadow:
              progress >= 1
                ? "0 0 10px rgba(100,255,50,0.6)"
                : "0 0 8px rgba(0,180,255,0.5)",
          }}
        />
      </div>

      {/* ── Joker tray ───────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "8px 12px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(0,0,0,0.3)",
          flexShrink: 0,
          overflowX: "auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: 7,
            color: "rgba(255,255,255,0.22)",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginRight: 2,
            flexShrink: 0,
          }}
        >
          Jokers
        </span>
        {Array.from({ length: MAX_JOKERS }).map((_, i) => (
          <JokerSlot key={i} joker={jokers[i]} />
        ))}
      </div>

      {/* ── Score reveal ─────────────────────────────── */}
      <div
        style={{
          padding: "8px 14px",
          flexShrink: 0,
          minHeight: 66,
          background: "rgba(0,0,0,0.2)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <AnimatePresence mode="wait">
          {scoreStep !== "idle" && lastScore && (
            <motion.div
              key="score-anim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              {/* Hand name */}
              {["name", "chips", "mult", "total"].includes(scoreStep) && (
                <motion.p
                  initial={{ x: -14, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {lastScore.handName}
                </motion.p>
              )}

              {/* Chips × Mult = Total */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                {["chips", "mult", "total"].includes(scoreStep) && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                      background: "rgba(0,80,180,0.85)",
                      border: "1.5px solid rgba(0,160,255,0.7)",
                      borderRadius: 8,
                      padding: "3px 10px 4px",
                      boxShadow: "0 0 14px rgba(0,150,255,0.4)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 900,
                        color: "#44ccff",
                        fontFamily: "monospace",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      {lastScore.chips}
                    </span>
                    <span
                      style={{
                        fontSize: 6,
                        color: "rgba(100,200,255,0.6)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      chips
                    </span>
                  </motion.div>
                )}

                {["mult", "total"].includes(scoreStep) && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.3)", fontWeight: 900 }}
                  >
                    ×
                  </motion.span>
                )}

                {["mult", "total"].includes(scoreStep) && (
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                      background: "rgba(160,0,0,0.85)",
                      border: "1.5px solid rgba(255,80,80,0.7)",
                      borderRadius: 8,
                      padding: "3px 10px 4px",
                      boxShadow: "0 0 14px rgba(255,60,60,0.4)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 900,
                        color: "#ff6666",
                        fontFamily: "monospace",
                        display: "block",
                        lineHeight: 1.1,
                      }}
                    >
                      {lastScore.mult}
                    </span>
                    <span
                      style={{
                        fontSize: 6,
                        color: "rgba(255,150,150,0.6)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        display: "block",
                        textAlign: "center",
                      }}
                    >
                      mult
                    </span>
                  </motion.div>
                )}

                {scoreStep === "total" && (
                  <motion.span
                    initial={{ scale: 1.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                      fontSize: 17,
                      fontWeight: 900,
                      fontFamily: "monospace",
                      color: "#ffcc44",
                      textShadow: "0 0 12px rgba(255,200,0,0.5)",
                      marginLeft: "auto",
                    }}
                  >
                    +{lastScore.total.toLocaleString("pt-BR")}
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Flex spacer */}
      <div style={{ flex: 1, minHeight: 0 }} />

      {/* ── Hand preview label ───────────────────────── */}
      <div style={{ padding: "4px 14px", flexShrink: 0, minHeight: 24, position: "relative", zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {previewHand && phase === "playing" && scoreStep === "idle" && (
            <motion.p
              key={previewHand}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{
                textAlign: "center",
                fontSize: 11,
                fontWeight: 800,
                color: "#44ccff",
                textShadow: "0 0 10px rgba(0,200,255,0.5)",
                letterSpacing: "0.05em",
              }}
            >
              ✨ {previewHand}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── Hand cards (felt area) ────────────────────── */}
      <div
        style={{
          padding: "6px 8px 8px",
          flexShrink: 0,
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(20,50,20,0.6) 0%, transparent 80%)",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Felt dot texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "10px 10px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          {hand.map((card, i) => (
            <GameCard
              key={card.id}
              card={card}
              selected={selectedIds.includes(card.id)}
              onClick={() => toggleSelect(card.id)}
              disabled={phase !== "playing"}
              dealIndex={i}
              chipPopup={chipPopups[i] ?? null}
            />
          ))}
        </div>
      </div>

      {/* ── Action bar ───────────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px 12px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.5)",
          flexShrink: 0,
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Counters */}
        <div style={{ display: "flex", gap: 14 }}>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: 900,
                fontFamily: "monospace",
                lineHeight: 1,
                color: "#44ccff",
                textShadow: "0 0 10px rgba(0,180,255,0.5)",
              }}
            >
              {handsLeft}
            </p>
            <p
              style={{
                fontSize: 7,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: 2,
              }}
            >
              Mãos
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: 20,
                fontWeight: 900,
                fontFamily: "monospace",
                lineHeight: 1,
                color: "#cc88ff",
                textShadow: "0 0 10px rgba(168,100,255,0.5)",
              }}
            >
              {discardsLeft}
            </p>
            <p
              style={{
                fontSize: 7,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: 2,
              }}
            >
              Descartes
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => { if (!canDiscard) return; sounds.discard(); discard(); }}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 800,
              cursor: canDiscard ? "pointer" : "default",
              background: canDiscard ? "rgba(140,60,220,0.2)" : "rgba(255,255,255,0.03)",
              border: `1.5px solid ${canDiscard ? "#9944ee" : "rgba(255,255,255,0.06)"}`,
              color: canDiscard ? "#cc88ff" : "rgba(255,255,255,0.2)",
              boxShadow: canDiscard ? "0 0 10px rgba(140,60,220,0.3)" : "none",
              transition: "all 0.15s",
            }}
          >
            Descartar
          </button>
          <button
            onClick={() => { if (canPlay) playHand(); }}
            style={{
              padding: "8px 14px",
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 900,
              cursor: canPlay ? "pointer" : "default",
              background: canPlay
                ? "linear-gradient(90deg, #0088cc, #44ccff)"
                : "rgba(255,255,255,0.03)",
              border: `1.5px solid ${canPlay ? "#44ccff" : "rgba(255,255,255,0.06)"}`,
              color: canPlay ? "#001a33" : "rgba(255,255,255,0.2)",
              boxShadow: canPlay ? "0 0 18px rgba(0,180,255,0.5)" : "none",
              transition: "all 0.15s",
              letterSpacing: "0.03em",
            }}
          >
            Jogar Mão
          </button>
        </div>
      </div>

      {/* ── Blind cleared overlay ────────────────────── */}
      <AnimatePresence>
        {phase === "scoring" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 60,
              background: "rgba(5,12,5,0.82)",
              backdropFilter: "blur(6px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.75, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              style={{
                textAlign: "center",
                borderRadius: 20,
                padding: "28px 32px",
                background: "linear-gradient(160deg, #0e1e0e 0%, #141f14 100%)",
                border: "2px solid rgba(100,220,60,0.4)",
                boxShadow:
                  "0 0 60px rgba(100,220,60,0.2), 0 24px 60px rgba(0,0,0,0.8)",
              }}
            >
              <motion.p
                animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{ fontSize: 42, lineHeight: 1 }}
              >
                🎉
              </motion.p>
              <p
                style={{
                  fontSize: 19,
                  fontWeight: 900,
                  color: "#88ff44",
                  textShadow: "0 0 20px rgba(130,255,60,0.5)",
                  marginTop: 10,
                  marginBottom: 4,
                }}
              >
                Blind Superado!
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>
                Score:{" "}
                <span style={{ color: "#fff", fontWeight: 800 }}>
                  {score.toLocaleString("pt-BR")}
                </span>
              </p>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#ffcc44",
                  textShadow: "0 0 8px rgba(255,200,0,0.4)",
                  marginBottom: 20,
                }}
              >
                +${blind.reward} ganhos
              </p>
              <button
                onClick={goToShop}
                style={{
                  padding: "10px 28px",
                  borderRadius: 12,
                  fontSize: 13,
                  fontWeight: 900,
                  background: "linear-gradient(90deg, #5adf20, #88ff44)",
                  color: "#0a1a0a",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(120,255,50,0.4)",
                  letterSpacing: "0.04em",
                }}
              >
                Ir para a Loja →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
