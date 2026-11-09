"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Desktop: the section pins and scroll scrubs the cards horizontally; each cover drifts
 * against its card for parallax. Mobile: a plain vertical stack (no pin, no transforms).
 */
export default function ProjectsSection() {
  const gallery = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const t = track.current!;
      const dist = () => Math.max(0, t.scrollWidth - window.innerWidth);

      const tween = gsap.to(t, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: gallery.current,
          start: "top top",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const i = Math.round(self.progress * (featured.length - 1));
            if (counter.current) counter.current.textContent = pad(i + 1);
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // cover parallax relative to its card while the track slides
      gsap.utils.toArray<HTMLElement>("[data-card]").forEach((card) => {
        const img = card.querySelector("[data-cover]");
        if (!img) return;
        gsap.fromTo(
          img,
          { xPercent: -6 },
          {
            xPercent: 6,
            ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="projects" className="relative">
      <div
        ref={gallery}
        className="px-6 py-24 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden md:px-0 md:py-0 md:pt-16"
      >
        <header className="flex items-end justify-between md:mb-8 md:px-16">
          <div>
            <p data-reveal className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
              03 — Selected work
            </p>
            <h2 data-split className="mt-3 font-serif text-5xl font-semibold leading-none md:text-7xl">
              Featured Projects
            </h2>
          </div>
          <p className="hidden font-serif text-5xl text-white/30 md:block">
            <span ref={counter} className="text-accent">01</span> / {pad(featured.length)}
          </p>
        </header>

        <div ref={track} className="mt-12 flex flex-col gap-16 md:mt-0 md:w-max md:flex-row md:gap-12 md:px-16">
          {featured.map((p, i) => (
            <article key={p.id} data-card className="group flex-none">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-accent/25 md:h-[42vh] md:max-h-[460px] md:w-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-cover
                  src={p.cover}
                  alt={`${p.title} cover`}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full scale-[1.14] object-cover transition-transform duration-700 group-hover:scale-[1.2]"
                />
                <span className="absolute left-5 top-3 font-serif text-6xl font-semibold text-white/25 mix-blend-overlay md:text-7xl">
                  {pad(i + 1)}
                </span>
              </div>

              <div className="mt-5 md:max-w-[calc(42vh*1.5)]">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl font-semibold md:text-4xl">{p.title}</h3>
                  <span className="font-mono text-xs text-accent">{p.year}</span>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-white/60">{p.client}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="glass rounded-full px-3 py-1 font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-[#1a1306] transition hover:brightness-110"
                    >
                      {p.demoLabel ?? "Live demo"} ↗
                    </a>
                  ) : (
                    <span className="ml-auto text-xs text-white/55">Client project</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 hidden h-px bg-white/10 md:mx-16 md:block">
          <div ref={bar} className="h-full origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </section>
  );
}
