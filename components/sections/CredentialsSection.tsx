import { certifications, education, headlineCert } from "@/lib/data";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="px-6 py-28 md:px-16 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          05 — Credentials
        </p>
        <h2 data-split className="mt-3 font-serif text-5xl font-semibold leading-none md:text-7xl">
          Education &amp; certifications
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* headline score + education */}
          <div className="space-y-10">
            <div data-reveal className="glass rounded-3xl p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{headlineCert.title}</p>
              <p className="mt-4 bg-gradient-to-r from-[#f1e4c3] via-accent to-[#b5651d] bg-clip-text font-serif text-7xl font-semibold leading-none text-transparent md:text-8xl">
                {headlineCert.score}
              </p>
              <p className="mt-3 text-white/60">{headlineCert.level}</p>
            </div>

            <ol>
              {education.map((e) => (
                <li key={e.degree} data-reveal className="border-t border-white/10 py-5 first:border-t-0 first:pt-0">
                  <p className="font-mono text-xs text-accent">{e.period}</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold">{e.degree}</h3>
                  <p className="text-sm text-white/55">{e.school}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* certifications */}
          <ul className="divide-y divide-white/10 border-y border-white/10 self-start">
            {certifications.map((c) => (
              <li
                key={c.title}
                data-reveal
                className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:bg-accent/[0.04] md:px-3"
              >
                <span className="font-serif text-xl font-semibold transition-transform duration-500 group-hover:translate-x-2 md:text-2xl">
                  {c.title}
                </span>
                <span className="shrink-0 font-mono text-xs text-white/60">{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
