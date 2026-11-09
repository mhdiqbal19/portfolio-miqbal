"use client";

import { useEffect, useRef } from "react";

/** Drifting golden dust on a plain 2D canvas: no WebGL, pauses when the tab is hidden. */
export default function Dust() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mobile = innerWidth < 768;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;
    const resize = () => {
      w = innerWidth;
      h = innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const motes = Array.from({ length: mobile ? 26 : 70 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.5,
      vy: -(Math.random() * 14 + 4), // px / second, drifting upward
      vx: (Math.random() - 0.5) * 6,
      a: Math.random() * 0.55 + 0.25,
      t: Math.random() * Math.PI * 2,
      z: Math.random(), // depth: how strongly it follows the cursor
    }));

    let mx = 0;
    let my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX / w - 0.5;
      my = e.clientY / h - 0.5;
    };
    if (!mobile) addEventListener("mousemove", onMove);
    addEventListener("resize", resize);

    let raf = 0;
    let last = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.t += dt * 1.4;
        m.x += (m.vx + Math.sin(m.t) * 5) * dt;
        m.y += m.vy * dt;
        if (m.y < -10) {
          m.y = h + 10;
          m.x = Math.random() * w;
        }
        const twinkle = 0.55 + 0.45 * Math.sin(m.t * 2);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 217, 138, ${m.a * twinkle})`;
        ctx.arc(m.x + mx * 40 * m.z, m.y + my * 26 * m.z, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("mousemove", onMove);
      removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[1] h-full w-full" />;
}
