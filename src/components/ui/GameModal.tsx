"use client";

import { useEffect, useRef } from "react";
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
        <span className="h-2 w-2 animate-pulse rounded-full bg-white/60" />
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
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
              ref={dialogRef}
              className="relative pointer-events-auto flex flex-col overflow-hidden rounded-2xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="game-modal-title"
              tabIndex={-1}
              style={{
                width: shouldRenderDevBalatro ? "min(390px, calc(100vw - 20px))" : "min(430px, calc(100vw - 20px))",
                height: shouldRenderDevBalatro ? "min(760px, calc(100dvh - 20px))" : "min(900px, calc(100dvh - 20px))",
                border: "1.5px solid rgba(255,255,255,0.18)",
                boxShadow: "0 32px 90px rgba(0,0,0,0.72)",
              }}
            >
              <div
                className="flex shrink-0 items-center gap-3 bg-white px-4 dark:bg-[#202225]"
                style={{
                  height: 40,
                  borderBottom: "1px solid rgba(0,0,0,0.12)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={onClose}
                    aria-label={t.gameModal.closeGame}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition-opacity hover:opacity-80"
                    title={t.gameModal.close}
                  >
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  </button>
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
                </div>

                <span
                  id="game-modal-title"
                  className="flex-1 text-center font-semibold text-black/60 dark:text-[#afb1b5]"
                  style={{ fontSize: 11, letterSpacing: "0.05em" }}
                >
                  {title}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-black/35 transition-colors hover:text-black dark:text-[#777b82] dark:hover:text-[#f4f4f2]"
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
