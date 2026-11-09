"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Full-bleed portrait that lives *behind* the 3D canvas.
 *  - scroll: slowly zooms in and dissolves into the night scene
 *  - cursor (desktop): subtle depth parallax
 */
export default function HeroPhoto() {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Dissolve as the hero scrolls away (kept as a faint ghost for atmosphere)
      gsap.to(wrap.current, {
        opacity: 0.07,
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom 15%", scrub: true },
        immediateRender: false,
      });
      gsap.to(inner.current, {
        scale: 1.18,
        ease: "none",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    });

    mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (min-width: 768px)", () => {
      const el = inner.current!;
      const qx = gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" });
      const qy = gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" });
      const move = (e: MouseEvent) => {
        qx((e.clientX / innerWidth - 0.5) * -28);
        qy((e.clientY / innerHeight - 0.5) * -18);
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={wrap} aria-hidden className="pointer-events-none fixed inset-0 z-0 will-change-transform">
      <div ref={inner} className="photo-mask absolute inset-0 md:left-auto md:w-[62%]">
        <Image
          src="/me.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 62vw, 100vw"
          className="photo-intro object-cover object-[50%_18%] md:object-[50%_22%]"
        />
      </div>
      {/* legibility: night falls from the bottom (strong on mobile where text sits over the photo) */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#060b16] via-[#060b16]/70 to-transparent md:h-1/3 md:via-[#060b16]/40" />
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#060b16]/70 to-transparent" />
    </div>
  );
}
