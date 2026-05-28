"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Dot — fast
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 900, mass: 0.3 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 900, mass: 0.3 });

  // Ring — lags behind
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 280, mass: 0.6 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 280, mass: 0.6 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as Element;
      setHovering(
        window.getComputedStyle(target).cursor === "pointer" ||
          !!target.closest("a, button, [role='button']")
      );
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.6 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.2 }, opacity: { duration: 0.3 } }}
      >
        <div className="w-9 h-9 rounded-full border border-accent-cyan/35" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 0.4 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.3 } }}
      >
        <div className="w-[6px] h-[6px] rounded-full bg-accent-cyan" />
      </motion.div>
    </>
  );
}
