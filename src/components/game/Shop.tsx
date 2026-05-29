"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGameStore } from "@/lib/game/store";
import type { Joker } from "@/lib/game/jokers";
import { MAX_JOKERS } from "@/lib/game/progression";
import { sounds } from "@/lib/game/sounds";

const RARITY: Record<string, { border: string; bg: string; label: string }> = {
  common:   { border: "#6b7280", bg: "rgba(107,114,128,0.08)", label: "Comum" },
  uncommon: { border: "#60a5fa", bg: "rgba(96,165,250,0.08)",  label: "Incomum" },
  rare:     { border: "#f59e0b", bg: "rgba(245,158,11,0.10)",  label: "Raro" },
};

function ShopCard({ joker, canAfford, jokersFull, onBuy }: {
  joker: Joker; canAfford: boolean; jokersFull: boolean; onBuy: () => void;
}) {
  const [bought, setBought] = useState(false);
  const style = RARITY[joker.rarity] ?? RARITY.common;
  const disabled = !canAfford || jokersFull || bought;

  return (
    <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity: bought ? 0.4 : 1, y:0 }}
      transition={{ type:"spring", stiffness:260, damping:22 }}
      className="rounded-2xl flex flex-col items-center gap-3 p-4"
      style={{ background: bought?"rgba(255,255,255,0.02)":style.bg,
        border:`1.5px solid ${bought?"rgba(255,255,255,0.06)":style.border}` }}>
      <div className="text-center">
        <span style={{ fontSize:36, lineHeight:1 }}>{joker.icon}</span>
        <p className="text-[9px] font-semibold uppercase tracking-widest mt-1" style={{ color:style.border }}>{style.label}</p>
      </div>
      <div className="text-center flex-1">
        <p className="text-sm font-bold text-white leading-tight">{joker.name}</p>
        <p className="text-xs text-white/50 mt-1 leading-snug">{joker.description}</p>
      </div>
      <div className="w-full flex flex-col items-center gap-2">
        <p className="text-base font-black text-yellow-300">${joker.cost}</p>
        <button onClick={() => { if(disabled) return; setBought(true); sounds.buy(); onBuy(); }}
          style={{ width:"100%", padding:"8px 0", borderRadius:10, fontSize:12, fontWeight:700,
            cursor: disabled?"default":"pointer",
            background: bought||!canAfford||jokersFull ? "rgba(255,255,255,0.04)" : style.border,
            color: bought||!canAfford||jokersFull ? "rgba(255,255,255,0.2)" : "#08080f", transition:"all 0.15s" }}>
          {bought?"✓ Comprado":jokersFull?"Slots cheios":!canAfford?"Sem dinheiro":"Comprar"}
        </button>
      </div>
    </motion.div>
  );
}

export function Shop() {
  const { money, shopJokers, jokers, buyJoker, nextBlind } = useGameStore();
  const jokersFull = jokers.length >= MAX_JOKERS;

  return (
    <div className="flex flex-col items-center justify-start bg-[#08080f]"
      style={{ position:"absolute", inset:0, overflowY:"auto", padding:"28px 16px 20px" }}>
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}
        style={{ width:"100%", maxWidth:480 }}>
        <div className="text-center mb-5">
          <p className="text-[10px] text-white/35 uppercase tracking-widest mb-1">Loja</p>
          <h2 className="text-xl font-black text-white">Compre um Joker</h2>
          <p className="text-sm text-white/40 mt-1">Disponível: <span className="text-yellow-300 font-bold">${money}</span></p>
          {jokersFull && <p className="text-xs text-[#ff4d6d] mt-1">Slots cheios ({MAX_JOKERS}/{MAX_JOKERS})</p>}
        </div>

        <AnimatePresence>
          {shopJokers.length > 0 ? (
            <div className="grid gap-3" style={{ gridTemplateColumns:"repeat(3,1fr)" }}>
              {shopJokers.map(j => (
                <ShopCard key={j.id} joker={j} canAfford={money>=j.cost} jokersFull={jokersFull} onBuy={() => buyJoker(j)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-3xl mb-2">🛒</p>
              <p className="text-white/40 text-sm">Loja vazia</p>
            </div>
          )}
        </AnimatePresence>

        {jokers.length > 0 && (
          <div className="mt-4">
            <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2 text-center">
              Seus Jokers ({jokers.length}/{MAX_JOKERS})
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
              {jokers.map(j => (
                <div key={j.id} className="flex flex-col items-center gap-1" title={j.description}>
                  <span style={{ fontSize:22 }}>{j.icon}</span>
                  <span className="text-[8px] text-white/50 text-center" style={{ maxWidth:48 }}>{j.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button onClick={nextBlind} className="w-full mt-6 font-black rounded-xl hover:opacity-90"
          style={{ padding:"13px 0", fontSize:14, background:"#bef264", color:"#08080f",
            boxShadow:"0 0 20px rgba(190,242,100,0.3)" }}>
          Próximo Blind →
        </button>
      </motion.div>
    </div>
  );
}
