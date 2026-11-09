import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-end px-6 pb-28 md:items-center md:px-16 md:pb-0">
      <div className="max-w-xl">
        <p
          data-hero
          className="mb-6 hidden items-center gap-2 rounded-full md:inline-flex border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {profile.location}
        </p>
        <p data-hero className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          {profile.role}
        </p>
        <h1 className="mt-3 font-serif text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          <span className="block overflow-hidden pb-[0.12em]">
            <span data-hero-line className="block">Muhammad</span>
          </span>
          <span className="block overflow-hidden pb-[0.12em]">
            <span
              data-hero-line
              className="block bg-gradient-to-r from-[#f1e4c3] via-accent to-[#b5651d] bg-clip-text text-transparent"
            >
              Iqbal
            </span>
          </span>
        </h1>
        <p data-hero className="mt-4 max-w-md text-sm leading-relaxed text-white/75 md:mt-5 md:text-lg">
          {profile.tagline}
        </p>
        <div data-hero className="mt-8 flex flex-wrap gap-3">
          <a
            data-magnetic
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#1a1306] transition hover:brightness-110"
          >
            Get in touch
          </a>
          <a
            data-magnetic
            href={profile.cv}
            download
            className="glass rounded-full px-5 py-2.5 text-sm transition hover:border-accent/60"
          >
            Download CV ↓
          </a>
          <a
            data-magnetic
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-5 py-2.5 text-sm transition hover:border-accent/60"
          >
            GitHub
          </a>
        </div>
      </div>
      <p
        data-hero
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/55 md:block"
      >
        scroll ↓
      </p>
    </section>
  );
}
