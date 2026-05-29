"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Follows mouse with a smooth spring lag
  const x = useSpring(mouseX, { damping: 28, stiffness: 260, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 28, stiffness: 260, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const el = e.target as Element;
      setHovering(
        window.getComputedStyle(el).cursor === "pointer" ||
        !!el.closest("a, button, [role='button'], [data-hover]")
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    // Single ring — scale(0.26) when idle, scale(1) when hovering
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: 40,
        height: 40,
        borderRadius: "50%",
        border: "1.5px solid rgba(0,212,255,0.7)",
      }}
      animate={{
        scale: hovering ? 1 : 0.26,
        opacity: visible ? 1 : 0,
        borderColor: hovering
          ? "rgba(0,212,255,1)"
          : "rgba(0,212,255,0.7)",
        boxShadow: hovering
          ? "0 0 18px rgba(0,212,255,0.4), inset 0 0 10px rgba(0,212,255,0.06)"
          : "none",
      }}
      transition={{
        scale: { type: "spring", stiffness: 420, damping: 22 },
        opacity: { duration: 0.2 },
        borderColor: { duration: 0.15 },
        boxShadow: { duration: 0.18 },
      }}
    />
  );
}
