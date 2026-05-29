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
  try { return detectHand(hand.filter((c) => selectedIds.includes(c.id))).config.name; }
  catch { return null; }
}

type ScoreStep = "idle" | "name" | "chips" | "mult" | "total";

export function GameBoard() {
  const { phase, ante, blindIndex, score, target, handsLeft, discardsLeft, money,
    hand, selectedIds, jokers, lastScore, toggleSelect, playHand, discard, goToShop } = useGameStore();

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
    setScoreStep("name"); sounds.playHand();
    const t1 = setTimeout(() => { setScoreStep("chips"); sounds.tick();
      const p: Record<number,number> = {};
      hand.forEach((c,i) => { if (selectedIds.includes(c.id)) p[i] = c.chips; });
      setChipPopups(p); }, 450);
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
    <div className="flex flex-col bg-[#08080f]" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 shrink-0">
        <div className="min-w-0">
          <p className="text-[9px] text-white/35 uppercase tracking-widest">Ante {ante+1} · {blind.isBoss?"BOSS":"Blind"}</p>
          <p className="text-sm font-bold truncate" style={{ color: blind.isBoss?"#ff4d6d":"#00d4ff" }}>{blind.name}</p>
          <p className="text-[9px] text-white/35 truncate">{blind.description}</p>
        </div>
        <div className="text-center shrink-0 mx-3">
          <p className="text-[9px] text-white/35 uppercase tracking-widest">Pontos</p>
          <motion.p key={score} initial={{ scale: 1.5, color: "#bef264" }} animate={{ scale: 1, color: "#ffffff" }}
            transition={{ duration: 0.4 }} className="text-2xl font-black tabular-nums leading-none">
            {score.toLocaleString("pt-BR")}
          </motion.p>
          <p className="text-[9px] text-white/35">/ {target.toLocaleString("pt-BR")}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[9px] text-white/35 uppercase tracking-widest">Dinheiro</p>
          <p className="text-lg font-black text-yellow-300">${money}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[5px] bg-white/5 shrink-0">
        <motion.div className="h-full rounded-r-full" animate={{ width: `${progress * 100}%` }}
          transition={{ duration: 0.5 }} style={{ background: progress>=1?"#bef264":"#00d4ff" }} />
      </div>

      {/* Jokers */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-white/8 shrink-0 overflow-x-auto">
        <span className="text-[9px] text-white/30 uppercase tracking-widest mr-1 shrink-0">Jokers</span>
        {Array.from({ length: MAX_JOKERS }).map((_,i) => <JokerSlot key={i} joker={jokers[i]} />)}
      </div>

      {/* Score display */}
      <div className="px-4 py-2 shrink-0" style={{ minHeight: 60 }}>
        <AnimatePresence mode="wait">
          {scoreStep !== "idle" && lastScore && (
            <motion.div key="score-anim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col gap-0.5">
              {["name","chips","mult","total"].includes(scoreStep) && (
                <motion.p initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                  className="text-sm font-bold text-white/90">{lastScore.handName}</motion.p>
              )}
              <div className="flex items-center gap-2 flex-wrap">
                {["chips","mult","total"].includes(scoreStep) && (
                  <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="font-black tabular-nums rounded-lg px-2 py-0.5"
                    style={{ fontSize:13, background:"rgba(0,212,255,0.12)", border:"1px solid rgba(0,212,255,0.3)", color:"#00d4ff" }}>
                    {lastScore.chips} chips
                  </motion.span>
                )}
                {["mult","total"].includes(scoreStep) && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/30 font-bold" style={{ fontSize:13 }}>×</motion.span>
                )}
                {["mult","total"].includes(scoreStep) && (
                  <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="font-black tabular-nums rounded-lg px-2 py-0.5"
                    style={{ fontSize:13, background:"rgba(255,77,109,0.12)", border:"1px solid rgba(255,77,109,0.3)", color:"#ff4d6d" }}>
                    {lastScore.mult} mult
                  </motion.span>
                )}
                {scoreStep === "total" && (
                  <motion.span initial={{ scale: 1.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    className="font-black tabular-nums text-yellow-300 ml-auto" style={{ fontSize:16 }}>
                    +{lastScore.total.toLocaleString("pt-BR")}
                  </motion.span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-1 min-h-0" />

      {/* Hand preview */}
      <div className="px-4 shrink-0" style={{ minHeight: 22 }}>
        <AnimatePresence mode="wait">
          {previewHand && phase === "playing" && scoreStep === "idle" && (
            <motion.p key={previewHand} initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }}
              className="text-center text-xs font-semibold" style={{ color:"#00d4ff" }}>✨ {previewHand}</motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Hand cards */}
      <div className="px-2 pb-2 shrink-0">
        <div className="flex justify-center gap-1.5 flex-wrap">
          {hand.map((card,i) => (
            <GameCard key={card.id} card={card} selected={selectedIds.includes(card.id)}
              onClick={() => toggleSelect(card.id)} disabled={phase!=="playing"}
              dealIndex={i} chipPopup={chipPopups[i]??null} />
          ))}
        </div>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/8 shrink-0">
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-xl font-black tabular-nums leading-none" style={{ color:"#00d4ff" }}>{handsLeft}</p>
            <p className="text-[9px] text-white/35 uppercase tracking-widest mt-0.5">Mãos</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-black tabular-nums leading-none" style={{ color:"#a855f7" }}>{discardsLeft}</p>
            <p className="text-[9px] text-white/35 uppercase tracking-widest mt-0.5">Descartes</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => { if(!canDiscard) return; sounds.discard(); discard(); }}
            style={{ padding:"8px 14px", borderRadius:10, fontSize:13, fontWeight:700, cursor:canDiscard?"pointer":"default",
              background:canDiscard?"rgba(168,85,247,0.15)":"rgba(255,255,255,0.04)",
              border:`1.5px solid ${canDiscard?"#a855f7":"rgba(255,255,255,0.08)"}`,
              color:canDiscard?"#a855f7":"rgba(255,255,255,0.25)", transition:"all 0.15s" }}>
            Descartar
          </button>
          <button onClick={() => { if(canPlay) playHand(); }}
            style={{ padding:"8px 16px", borderRadius:10, fontSize:13, fontWeight:700, cursor:canPlay?"pointer":"default",
              background:canPlay?"#00d4ff":"rgba(255,255,255,0.04)",
              color:canPlay?"#08080f":"rgba(255,255,255,0.25)",
              boxShadow:canPlay?"0 0 18px rgba(0,212,255,0.45)":"none", transition:"all 0.15s" }}>
            Jogar Mão
          </button>
        </div>
      </div>

      {/* Scoring overlay */}
      <AnimatePresence>
        {phase === "scoring" && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="absolute inset-0 flex items-center justify-center z-40"
            style={{ background:"rgba(8,8,15,0.78)", backdropFilter:"blur(6px)" }}>
            <motion.div initial={{ scale:0.8, y:20 }} animate={{ scale:1, y:0 }} exit={{ scale:0.9, opacity:0 }}
              transition={{ type:"spring", stiffness:280, damping:24 }}
              className="text-center rounded-2xl"
              style={{ padding:"28px 36px", background:"rgba(12,12,22,0.97)",
                border:"1.5px solid rgba(190,242,100,0.35)", boxShadow:"0 0 48px rgba(190,242,100,0.15)" }}>
              <motion.p animate={{ rotate:[0,-8,8,-4,0] }} transition={{ duration:0.5, delay:0.2 }}
                style={{ fontSize:40, lineHeight:1 }}>🎉</motion.p>
              <p className="text-xl font-black mt-2 mb-1" style={{ color:"#bef264" }}>Blind Superado!</p>
              <p className="text-sm text-white/50 mb-0.5">Score: <span className="text-white font-bold">{score.toLocaleString("pt-BR")}</span></p>
              <p className="text-xs text-yellow-300 mb-5">+${blind.reward} ganhos</p>
              <button onClick={goToShop} className="font-bold rounded-xl hover:opacity-90"
                style={{ padding:"10px 28px", fontSize:14, background:"#bef264", color:"#08080f" }}>
                Ir para a Loja →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
