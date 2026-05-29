"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface GameModalProps {
  open: boolean;
  onClose: () => void;
  gameUrl: string;
  title: string;
}

export function GameModal({ open, onClose, gameUrl, title }: GameModalProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ───────────────────────────────────────── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
          />

          {/* ── Floating game window ───────────────────────────── */}
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
              className="relative pointer-events-auto flex flex-col rounded-2xl overflow-hidden"
              style={{
                width: "min(390px, 100%)",
                height: "min(760px, 100dvh - 32px)",
                border: "1.5px solid rgba(0,212,255,0.20)",
                boxShadow:
                  "0 0 0 1px rgba(0,212,255,0.08), 0 0 60px rgba(0,212,255,0.12), 0 32px 80px rgba(0,0,0,0.75)",
              }}
            >
              {/* ── macOS-style title bar ───────────────────── */}
              <div
                className="flex items-center gap-3 px-4 shrink-0"
                style={{
                  height: 40,
                  background: "#0d0d1c",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "#ff5f57" }}
                    title="Fechar"
                  />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                </div>

                {/* Title */}
                <span
                  className="flex-1 text-center font-semibold"
                  style={{ fontSize: 11, color: "rgba(255,255,255,0.30)", letterSpacing: "0.05em" }}
                >
                  🃏 {title}
                </span>

                {/* Close X button */}
                <button
                  onClick={onClose}
                  className="text-white/20 hover:text-white/60 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              {/* ── Game iframe ─────────────────────────────── */}
              <iframe
                src={gameUrl}
                title={title}
                allow="autoplay"
                className="flex-1 border-0 w-full"
                style={{ background: "#08080f" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
