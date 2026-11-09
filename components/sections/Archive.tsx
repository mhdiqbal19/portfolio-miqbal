import { archive } from "@/lib/data";

export default function Archive() {
  return (
    <section id="archive" className="px-6 py-28 md:px-16 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          04 — Archive
        </p>
        <h2 data-split className="mt-3 font-serif text-5xl font-semibold leading-none md:text-7xl">
          More work
        </h2>

        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {archive.map((p) => (
            <li
              key={p.title + p.client}
              data-reveal
              className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 transition-colors hover:bg-accent/[0.04] md:grid-cols-[5rem_1.3fr_1.1fr_1fr] md:px-4"
            >
              <span className="font-mono text-xs text-accent">{p.year}</span>
              <span className="font-serif text-2xl font-semibold transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">
                {p.title}
              </span>
              <span className="col-start-2 text-sm text-white/55 md:col-start-auto">{p.client}</span>
              <span className="col-start-2 font-mono text-xs text-white/55 md:col-start-auto md:text-right">{p.stack}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
