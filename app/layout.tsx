import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import HeroPhoto from "@/components/HeroPhoto";
import CursorGlow from "@/components/CursorGlow";
import Dust from "@/components/Dust";
import SmoothScroll from "@/components/SmoothScroll";
import Animations from "@/components/Animations";
import Nav from "@/components/Nav";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Muhammad Iqbal — Fullstack Developer";
const description =
  "Fullstack Developer in Jakarta: Laravel, Node.js, Next.js, React, Vue and Flutter for banking, government and enterprise clients.";

// schema.org Person: lets search engines show name, role and profiles in results
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  image: `${siteUrl}/me.jpg`,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Jakarta Selatan", addressCountry: "ID" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Universitas Teknologi Yogyakarta" },
    { "@type": "CollegeOrUniversity", name: "Politeknik Negeri Sriwijaya" },
  ],
  knowsAbout: ["Laravel", "Node.js", "Next.js", "React", "Vue.js", "Flutter", "REST API"],
  sameAs: [profile.github, profile.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", siteName: profile.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  // OG/Twitter image comes from app/opengraph-image.tsx
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // `<` escaped so the JSON can never close the script tag
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }}
        />
        {/* Fixed backdrop stack: portrait (z-0) + batik pattern (z-0) < gold dust (z-1) < cursor glow (z-5) < content (z-10) */}
        <HeroPhoto />
        <div id="batik-bg" aria-hidden className="batik-bg pointer-events-none fixed inset-0 z-0" />
        <Dust />
        <CursorGlow />
        <div
          id="scroll-progress"
          aria-hidden
          className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left scale-x-0 bg-accent"
        />
        <SmoothScroll />
        <Animations />
        <Nav />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
