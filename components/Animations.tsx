"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

/** React tags every hydrated host node with a `__reactFiber$…` key. */
const isHydrated = (el: Element | null) => !!el && Object.keys(el).some((k) => k.startsWith("__reactFiber"));

/**
 * Resolves once the first and last sections are hydrated (or after a 4s safety cap).
 * Touching server-rendered DOM with GSAP before React hydrates it causes hydration mismatches.
 */
function whenHydrated(): Promise<void> {
  return new Promise((resolve) => {
    const start = performance.now();
    const check = () => {
      const ready =
        isHydrated(document.querySelector("#hero h1")) && isHydrated(document.querySelector("#contact h2"));
      if (ready || performance.now() - start > 4000) resolve();
      else requestAnimationFrame(check);
    };
    check();
  });
}

/**
 * Site-wide choreography, driven by data attributes so sections stay plain markup:
 *   [data-hero-line]  hero headline lines slide up out of a mask
 *   [data-hero]       hero secondary items fade/rise in sequence
 *   [data-split]      headings split into masked lines on scroll
 *   [data-reveal]     generic fade + rise, batched so siblings stagger
 *   [data-magnetic]   buttons that lean toward the cursor
 */
export default function Animations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: gsap.Context | undefined;
    let cancelled = false;

    (async () => {
      await document.fonts.ready; // line splitting needs final font metrics
      await whenHydrated();
      if (cancelled) return;

      ctx = gsap.context(() => {
        // top scroll-progress bar + batik pattern fading in after the hero
        gsap.to("#scroll-progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: true },
        });
        gsap.to("#batik-bg", {
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: "#skills", start: "top 95%", end: "top 40%", scrub: true },
        });

        if (reduce) return;

        // hero intro
        gsap
          .timeline({ delay: 0.15, defaults: { ease: "power4.out" } })
          .from("[data-hero-line]", { yPercent: 115, duration: 1.2, stagger: 0.1 })
          .from("[data-hero]", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1 }, "-=0.8");

        // masked line reveals
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                stagger: 0.09,
                ease: "power4.out",
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              }),
          });
        });

        // generic reveals
        gsap.set("[data-reveal]", { opacity: 0, y: 40 });
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 92%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: "power3.out", overwrite: true }),
        });

        // magnetic buttons (desktop pointers only)
        const mm = gsap.matchMedia();
        mm.add("(hover: hover) and (min-width: 768px)", () => {
          const cleanups: (() => void)[] = [];
          gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
            const qx = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
            const qy = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });
            const move = (e: MouseEvent) => {
              const r = el.getBoundingClientRect();
              qx((e.clientX - (r.left + r.width / 2)) * 0.3);
              qy((e.clientY - (r.top + r.height / 2)) * 0.3);
            };
            const leave = () => {
              qx(0);
              qy(0);
            };
            el.addEventListener("mousemove", move);
            el.addEventListener("mouseleave", leave);
            cleanups.push(() => {
              el.removeEventListener("mousemove", move);
              el.removeEventListener("mouseleave", leave);
            });
          });
          return () => cleanups.forEach((fn) => fn());
        });

        ScrollTrigger.refresh();
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return null;
}
