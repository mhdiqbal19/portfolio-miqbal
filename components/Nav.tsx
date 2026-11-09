"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const LINKS = [
  { id: "skills", label: "Toolkit" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

/** Floating pill nav: appears after the hero, highlights the section in view. */
export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      // the hero isn't a nav link: entering it clears the highlight
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "hero" ? "" : e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["hero", ...LINKS.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className={`fixed left-1/2 top-4 z-40 -translate-x-1/2 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
      }`}
    >
      <ul className="glass flex items-center gap-0.5 whitespace-nowrap rounded-full px-1.5 py-1.5 text-[11px] md:gap-1 md:px-2 md:text-sm">
        {LINKS.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`block rounded-full px-2 py-1.5 transition-colors md:px-3.5 ${
                active === l.id ? "bg-accent text-[#1a1306]" : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li className="hidden md:block">
          <a
            href={profile.cv}
            download
            className="ml-1 block rounded-full border border-accent/40 px-3.5 py-1.5 text-accent transition-colors hover:bg-accent/10"
          >
            CV ↓
          </a>
        </li>
      </ul>
    </nav>
  );
}
