"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GameApp } from "@/components/game/GameApp";

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  gameUrl?: string;
  title: string;
}

export function GameModal({ open, onClose, gameUrl, title }: GameModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          />

          <motion.div
            key="window"
            initial={{ opacity: 0, scale: 0.88, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            style={{ padding: "16px" }}
          >
            <div
              className="relative pointer-events-auto flex flex-col overflow-hidden rounded-2xl"
              style={{
                width: gameUrl ? "min(430px, 100%)" : "min(390px, 100%)",
                height: gameUrl ? "min(920px, 100dvh - 32px)" : "min(760px, 100dvh - 32px)",
                border: "1.5px solid rgba(0,212,255,0.20)",
                boxShadow:
                  "0 0 0 1px rgba(0,212,255,0.08), 0 0 60px rgba(0,212,255,0.12), 0 32px 80px rgba(0,0,0,0.75)",
              }}
            >
              <div
                className="flex shrink-0 items-center gap-3 px-4"
                style={{
                  height: 40,
                  background: "#0d0d1c",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={onClose}
                    className="h-3 w-3 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "#ff5f57" }}
                    title="Fechar"
                  />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
                </div>

                <span
                  className="flex-1 text-center font-semibold"
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.42)", letterSpacing: "0.05em" }}
                >
                  {title}
                </span>

                <button
                  onClick={onClose}
                  className="text-white/20 transition-colors hover:text-white/60"
                  aria-label="Fechar jogo"
                >
                  <X size={14} />
                </button>
              </div>

              <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                {gameUrl ? (
                  <iframe
                    src={gameUrl}
                    title={title}
                    className="h-full w-full border-0"
                    allow="fullscreen"
                  />
                ) : (
                  <GameApp />
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
