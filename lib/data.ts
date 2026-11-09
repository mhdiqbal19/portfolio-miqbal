// Content taken from CV_Muhammad_Iqbal_Fullstack.pdf

const WHATSAPP_NUMBER = "6281278813689"; // 0812-7881-3689 in international format

export const profile = {
  name: "Muhammad Iqbal",
  role: "Fullstack Developer",
  tagline:
    "3+ years shipping complete web and mobile products, from Node.js/Express, Laravel/PHP Backends and REST APIs to React, Next.js, Vue and Flutter Frontends for Banking, government and enterprise clients.",
  email: "muhammadiqbal190794@gmail.com",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Iqbal, saya melihat portfolio Anda dan ingin berdiskusi.",
  )}`,
  github: "https://github.com/mhdiqbal19",
  linkedin: "https://linkedin.com/in/mhd-iqbal",
  location: "Jakarta Selatan, Indonesia",
  cv: "/CV_Muhammad_Iqbal_Fullstack.pdf", // file in /public
};

/** Shown as a small "Now learning" line under the toolkit. */
export const learning = ["Java Spring Boot"];

export const education = [
  {
    period: "2015 — 2018",
    degree: "Bachelor's Degree in Information Systems",
    school: "Universitas Teknologi Yogyakarta",
  },
  {
    period: "2012 — 2015",
    degree: "Associate Degree in Informatics Management",
    school: "Politeknik Negeri Sriwijaya",
  },
];

/** Headline credential, shown as a feature card. */
export const headlineCert = {
  score: "94/100",
  title: "EF SET English Certificate",
  level: "C2 Proficient",
};

export const certifications = [
  { title: "Complete React Developer 2023", detail: "Redux, Hooks, GraphQL" },
  { title: "Bootcamp Frontend Engineer (React.js)", detail: "Binar Academy" },
  { title: "RESTful API, OpenAPI & HTTP", detail: "Udemy" },
  { title: "JavaScript, Beginner to Advanced", detail: "PZN" },
  { title: "Docker", detail: "PZN" },
  { title: "Data Center Operations Management", detail: "Inixindo" },
];

export const experience = [
  {
    period: "Feb 2023 — Present",
    title: "Frontend Developer",
    company: "PT. Infosys Solusi Terpadu",
    points: [
      "Built client-facing banking portals (Bank Jatim Merchant QRIS, Configuration & Branch Portal) with Next.js, Vue and Nuxt, integrated against backend REST APIs.",
      "Worked closely with backend teams on API contracts, JSON data structures and JWT authentication flows.",
    ],
  },
  {
    period: "Jun 2022 — Present",
    title: "Fullstack Developer (Freelance)",
    company: "Remote",
    points: [
      "Delivered end-to-end Laravel 9 systems: housing management platform (e-persik.id), institutional evaluation app and a notarial deed management system.",
      "Built PHP-native systems: payroll, power plant monitoring and a helpdesk app.",
      "Delivered Flutter/Dart mobile UI for Pos Indonesia's Pospay Superapp.",
    ],
  },
  {
    period: "Sep 2023 — 2025",
    title: "Frontend Web Developer",
    company: "Kasir Bersih",
    points: [
      "Developed the kasirbersih.id POS web portal in React.js, from UI implementation to API integration and state management.",
    ],
  },
];

export const skillGroups: { title: string; note: string; items: string[] }[] = [
  {
    title: "Backend",
    note: "APIs & data",
    items: [
      "Laravel 9",
      "PHP (Native)",
      "REST API design",
      "JWT / token auth",
      "MySQL",
      "Node.js / Express ",
      "Java Springboot (learning)",
    ],
  },
  {
    title: "Frontend",
    note: "Web interfaces",
    items: [
      "Next.js",
      "React.js",
      "Vue.js / Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "Component-based architecture",
    ],
  },
  {
    title: "Mobile",
    note: "Cross-platform",
    items: ["Flutter (Web & Mobile)", "Dart", "React Native"],
  },
  {
    title: "Tooling",
    note: "Ship & maintain",
    items: [
      "Git (GitHub / GitLab)",
      "Docker",
      "Vite / Webpack",
      "Figma to code",
      "Performance tuning",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  year: string;
  description: string;
  stack: string[];
  cover: string; // path under /public/projects
  demo?: string; // omit for confidential/client work
  demoLabel?: string; // button text, defaults to "Live demo"
};

/** Featured: shown as the big horizontal gallery. */
export const featured: Project[] = [
  {
    id: "education-game",
    title: "EduPlay",
    client: "Educational game platform",
    year: "2026",
    description:
      "A free mini-game platform for elementary students (grades 1–6): 35 games across math, science, language and logic, built with JavaScript and Next.js.",
    stack: ["JavaScript", "Next.js"],
    cover: "/projects/education-game.svg",
    demo: "https://game-education.netlify.app/",
    demoLabel: "Play now",
  },
  {
    id: "pospay",
    title: "Pospay Superapp",
    client: "Pos Indonesia",
    year: "2025",
    description:
      "Flutter mobile UI for Pos Indonesia's Giropos-based financial superapp: bill payments, instant money transfer and QR payments. 10M+ installs on Google Play.",
    stack: ["Flutter", "Dart"],
    cover: "/projects/pospay.svg",
    demo: "https://play.google.com/store/apps/details?id=com.posindonesia.giropos&hl=id",
    demoLabel: "Google Play",
  },
  {
    id: "bank-jatim-qris",
    title: "Merchant QRIS",
    client: "Bank Jatim",
    year: "2024",
    description: "Merchant QRIS portal across web and mobile for Bank Jatim.",
    stack: ["Next.js", "Flutter", "Dart"],
    cover: "/projects/bank-jatim-qris.svg",
  },
  {
    id: "bank-jatim-branch",
    title: "Branch Portal",
    client: "Bank Jatim",
    year: "2023",
    description:
      "Branch portal web app for Bank Jatim, integrated with backend REST APIs and JWT auth.",
    stack: ["JavaScript", "Next.js"],
    cover: "/projects/bank-jatim-portal.svg",
  },
  {
    id: "kasirbersih",
    title: "Kasir Bersih",
    client: "kasirbersih.id",
    year: "2023",
    description:
      "POS web portal: UI, state management and API integration in React.js.",
    stack: ["JavaScript", "React.js"],
    cover: "/projects/kasir-bersih.svg",
    demo: "https://kasirbersih.id",
  },
  {
    id: "e-persik",
    title: "e-Persik",
    client: "Dinas Perkim Kab. Mukomuko",
    year: "2023",
    description:
      "Housing management system, delivered end to end with Laravel 9.",
    stack: ["PHP", "Laravel 9"],
    cover: "/projects/e-persik.svg",
    demo: "https://e-persik.id",
  },
];

/** The rest of the CV portfolio, listed as an archive. */
export const archive: {
  title: string;
  client: string;
  year: string;
  stack: string;
}[] = [
  {
    title: "Config Portal",
    client: "Bank Jatim",
    year: "2024",
    stack: "JavaScript · Next.js",
  },
  {
    title: "Config Portal",
    client: "Bank Jateng",
    year: "2024",
    stack: "JavaScript · Vue",
  },
  {
    title: "Merchant QRIS Portal",
    client: "Bank Aceh",
    year: "2024",
    stack: "JavaScript · Vue",
  },
  {
    title: "Personal Portfolio",
    client: "miqbal.site",
    year: "2022",
    stack: "React.js",
  },
  {
    title: "Institutional Evaluation App",
    client: "Pemda Kab. Grobogan",
    year: "2019",
    stack: "Laravel 9",
  },
  {
    title: "Notarial Deed Management",
    client: "Notary Office",
    year: "2018",
    stack: "Laravel 9",
  },
  {
    title: "Payroll Application",
    client: "PT. Sinergi Visi Utama",
    year: "2018",
    stack: "PHP Native",
  },
  {
    title: "Power Plant Monitoring",
    client: "PLN Keramasan",
    year: "2015",
    stack: "PHP Native",
  },
];
