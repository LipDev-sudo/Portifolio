"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useT } from "@/lib/i18n";

const GameApp = dynamic(
  () => import("@/components/game/GameApp").then((mod) => mod.GameApp),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-black text-xs font-bold uppercase tracking-[0.18em] text-white/40">
        Carregando Dev Balatro...
      </div>
    ),
  }
);

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  gameUrl?: string;
  title: string;
}

export function GameModal({ open, onClose, gameUrl, title }: GameModalProps) {
  const t = useT();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && event.shiftKey) onClose();
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

  const embeddedGameUrl = gameUrl
    ? `${gameUrl}${gameUrl.includes("?") ? "&" : "?"}embed=1`
    : undefined;
  const shouldRenderDevBalatro =
    !gameUrl || title.toLowerCase().includes("balatro");

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
            style={{ padding: "max(10px, env(safe-area-inset-top)) 10px max(10px, env(safe-area-inset-bottom))" }}
          >
            <div
              className="relative pointer-events-auto flex flex-col overflow-hidden rounded-2xl"
            style={{
                width: shouldRenderDevBalatro ? "min(390px, calc(100vw - 20px))" : "min(430px, calc(100vw - 20px))",
                height: shouldRenderDevBalatro ? "min(760px, calc(100dvh - 20px))" : "min(900px, calc(100dvh - 20px))",
                border: "1.5px solid rgba(255,255,255,0.18)",
                boxShadow: "0 32px 90px rgba(0,0,0,0.72)",
              }}
            >
              <div
                className="flex shrink-0 items-center gap-3 px-4"
                style={{
                  height: 40,
                  background: "#ffffff",
                  borderBottom: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={onClose}
                    className="h-3 w-3 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "#ff5f57" }}
                    title={t.gameModal.close}
                  />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
                </div>

                <span
                  className="flex-1 text-center font-semibold"
                  style={{ fontSize: 11, color: "rgba(0,0,0,0.58)", letterSpacing: "0.05em" }}
                >
                  {title}
                </span>

                <button
                  onClick={onClose}
                  className="text-black/35 transition-colors hover:text-black"
                  aria-label={t.gameModal.closeGame}
                >
                  <X size={14} />
                </button>
              </div>

              <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                {shouldRenderDevBalatro ? (
                  <GameApp />
                ) : (
                  <iframe
                    src={embeddedGameUrl}
                    title={title}
                    className="h-full w-full border-0"
                    allow="fullscreen"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
