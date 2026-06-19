"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

function ArrowCursor({ pressed }: { pressed: boolean }) {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" aria-hidden="true">
      {pressed ? (
        <>
          <circle cx="18" cy="16" r="14" fill="none" stroke="#fff" strokeWidth="7" />
          <circle cx="18" cy="16" r="14" fill="none" stroke="#000" strokeWidth="3" />
        </>
      ) : null}
      <path
        d="M10 7 57 39 37 43 48 64 37 69 26 47 12 61 10 7Z"
        fill="#000"
        stroke="#fff"
        strokeWidth="8"
        strokeLinejoin="round"
      />
      <path
        d="M10 7 57 39 37 43 48 64 37 69 26 47 12 61 10 7Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandCursor({ pressed }: { pressed: boolean }) {
  return (
    <svg viewBox="0 0 72 72" className="h-full w-full" aria-hidden="true">
      {pressed ? (
        <>
          <path d="M18 6v9" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M4 20h9" stroke="#000" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 12l7-7" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="20" cy="17" r="15" fill="none" stroke="#fff" strokeWidth="7" />
          <circle cx="20" cy="17" r="15" fill="none" stroke="#000" strokeWidth="3" />
        </>
      )}
      <path
        d="M20 9c4 0 7 3 7 7v17l3-3c3-3 8-1 9 3 3-2 8 0 9 4 3-1 7 1 8 5 1 8-1 14-6 19-5 6-13 8-23 6-8-2-15-8-19-18l-5-13c-2-5 4-9 8-5l9 9V16c0-4 3-7 7-7Z"
        fill="#000"
        stroke="#fff"
        strokeWidth="8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M20 9c4 0 7 3 7 7v17l3-3c3-3 8-1 9 3 3-2 8 0 9 4 3-1 7 1 8 5 1 8-1 14-6 19-5 6-13 8-23 6-8-2-15-8-19-18l-5-13c-2-5 4-9 8-5l9 9V16c0-4 3-7 7-7Z"
        fill="#000"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M30 31v16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />
      <path d="M39 35v14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />
      <path d="M48 41v10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".75" />
    </svg>
  );
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const visibleRef = useRef(false);
  const hoveringRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const element = event.target as Element;
      const nextHovering = !!element.closest("a, button, [role='button'], [data-hover], input, textarea, select");
      if (hoveringRef.current !== nextHovering) {
        hoveringRef.current = nextHovering;
        setHovering(nextHovering);
      }
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
      setPressed(false);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 pointer-events-none z-[9999] hidden h-14 w-14 select-none lg:block"
      style={{
        x: mouseX,
        y: mouseY,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: pressed ? 0.92 : 1,
      }}
      transition={{
        opacity: { duration: 0.12 },
        scale: { duration: 0.08 },
      }}
    >
      <div
        className="h-full w-full"
        style={{
          transform: hovering ? "translate(-18px, -10px)" : "translate(-7px, -5px)",
        }}
      >
        {hovering ? <HandCursor pressed={pressed} /> : <ArrowCursor pressed={pressed} />}
      </div>
    </motion.div>
  );
}
