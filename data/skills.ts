export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "tools" | "language" | "other";
}

export const skills: Skill[] = [
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS / Tailwind", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Python", level: 75, category: "other" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Webpack / Vite", level: 70, category: "tools" },
  { name: "Thai", level: 100, category: "language" },
  { name: "English", level: 80, category: "language" },
  { name: "Chinese", level: 50, category: "language" },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Figma",
  "Git",
  "Vercel",
  "PostgreSQL",
  "Prisma",
  "Framer Motion",
];
