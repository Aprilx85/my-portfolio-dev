export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2020 — Present",
    description:
      "Building custom websites and web apps for clients across e-commerce, hospitality, and creative industries. Full project ownership from discovery and design through to deployment and ongoing maintenance.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress"],
    current: true,
  },
  {
    id: "agency",
    role: "Front-End Developer",
    company: "Digital Agency Bangkok",
    period: "2018 — 2020",
    description:
      "Developed and maintained client-facing web applications. Collaborated with designers to implement pixel-perfect UIs and improved Core Web Vitals scores across 10+ client sites.",
    tech: ["HTML/CSS", "JavaScript", "React", "Sass", "Webpack"],
  },
  {
    id: "junior",
    role: "Junior Web Developer",
    company: "Startup Studio",
    period: "2016 — 2018",
    description:
      "Kickstarted my career building internal tools and landing pages. Gained hands-on experience across the full project lifecycle and agile sprint workflows.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
  },
];
