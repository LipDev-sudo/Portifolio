"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const cursorImage = "/cursors/3d-pixel-cursor.png";
const pointerImage = "/cursors/3d-pixel-pointer.png";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

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
      }}
      transition={{
        opacity: { duration: 0.12 },
      }}
    />
  );
}
