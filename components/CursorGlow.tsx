"use client";

import { useEffect, useRef } from "react";

/** Soft golden spotlight that trails the cursor. Desktop pointers only. */
export default function CursorGlow() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!matchMedia("(hover: hover) and (min-width: 768px)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.current?.style.setProperty("--x", `${e.clientX}px`);
        el.current?.style.setProperty("--y", `${e.clientY}px`);
        el.current?.style.setProperty("opacity", "1");
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={el}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(224,184,102,0.13), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
