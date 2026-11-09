import { profile } from "@/lib/data";

export default function ContactSection() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "Download CV", href: profile.cv },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
  ];

  return (
    <section id="contact" className="px-6 pb-12 pt-28 md:px-16 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
          06 — Contact
        </p>
        <h2 data-split className="mt-3 max-w-4xl font-serif text-6xl font-semibold leading-[0.95] md:text-9xl">
          Let&apos;s build something remarkable.
        </h2>

        <div data-reveal className="mt-12 flex flex-wrap items-center gap-3">
          <a
            data-magnetic
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-[#1a1306] transition hover:brightness-110"
          >
            Chat on WhatsApp ↗
          </a>
          {links.map((l) => (
            <a
              key={l.label}
              data-magnetic
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass rounded-full px-6 py-3.5 text-base transition hover:border-accent/60"
            >
              {l.label}
            </a>
          ))}
        </div>

        <footer className="mt-28 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-6 font-mono text-xs text-white/55">
          <span>© 2026 {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </section>
  );
}
