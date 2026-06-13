"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const cursorImage = "/cursors/3d-pixel-cursor.png";
const pointerImage = "/cursors/3d-pixel-pointer.png";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 28, stiffness: 260, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 260, mass: 0.5 });

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
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 42,
          height: 42,
          borderRadius: "50%",
          border: "2px solid rgba(34,211,238,0.95)",
          background: "rgba(34,211,238,0.14)",
          outline: "1px solid rgba(255,255,255,0.22)",
          outlineOffset: 2,
        }}
        animate={{
          scale: hovering ? 1.18 : 0.42,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering
            ? "rgba(34,211,238,0.06)"
            : "rgba(34,211,238,0.28)",
          borderColor: hovering
            ? "rgba(190,242,100,0.95)"
            : "rgba(125,211,252,1)",
          boxShadow: hovering
            ? "0 0 0 8px rgba(190,242,100,0.08), 0 0 30px rgba(190,242,100,0.42), inset 0 0 12px rgba(190,242,100,0.12)"
            : "0 0 0 5px rgba(34,211,238,0.12), 0 0 16px rgba(34,211,238,0.38)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 420, damping: 22 },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.15 },
          borderColor: { duration: 0.15 },
          boxShadow: { duration: 0.18 },
        }}
      />

      <motion.img
        aria-hidden="true"
        src={hovering ? pointerImage : cursorImage}
        alt=""
        draggable={false}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden h-10 w-10 select-none lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          imageRendering: "auto",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.08 : 1,
          rotate: hovering ? -6 : 0,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: "spring", stiffness: 500, damping: 24 },
          rotate: { type: "spring", stiffness: 420, damping: 26 },
        }}
      />
    </>
  );
}
