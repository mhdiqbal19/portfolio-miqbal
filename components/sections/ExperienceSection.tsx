import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <p
            data-reveal
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80"
          >
            02 — Career
          </p>
          <h2
            data-split
            className="mt-3 font-serif text-5xl font-semibold leading-none md:text-7xl"
          >
            Experience
          </h2>
          <p data-reveal className="mt-6 max-w-sm text-white/60">
            From Node.js/Express, Laravel/PHP Backends to React, Next.js, Vue
            and Flutter frontends, owning features across the whole stack.
            Currently expanding into Java for fully JavaScript solutions.
          </p>
        </div>

        <ol className="space-y-6">
          {experience.map((job) => (
            <li
              key={job.title + job.period}
              data-reveal
              className="glass rounded-3xl p-6 md:p-8"
            >
              <p className="font-mono text-xs text-accent">{job.period}</p>
              <h3 className="mt-2 font-serif text-2xl font-semibold md:text-3xl">
                {job.title}{" "}
                <span className="text-white/60">· {job.company}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/70">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
