import { learning, skillGroups } from "@/lib/data";

/** Static, grouped skills. Motion comes only from the scroll reveal and a hover nudge. */
export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-28 md:px-16 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          01 — Toolkit
        </p>
        <h2 data-split className="mt-3 font-serif text-5xl font-semibold leading-none md:text-7xl">
          Across the whole stack
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <div key={g.title} data-reveal>
              <div className="flex items-baseline justify-between border-b border-accent/30 pb-3">
                <h3 className="font-serif text-3xl font-semibold">{g.title}</h3>
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-white/55">{g.note}</p>
              <ul className="mt-4 divide-y divide-white/[0.07]">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 text-sm text-white/70 transition-all duration-300 hover:translate-x-1.5 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p data-reveal className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-white/60">
          <span className="inline-flex items-center gap-2 text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Now learning
          </span>
          {learning.map((l) => (
            <span key={l} className="glass rounded-full px-3 py-1 text-white/80">
              {l}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
