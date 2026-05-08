export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  category: "web" | "ui" | "ecom" | "app";
}

export const projects: Project[] = [
  {
    id: "coffee-roastery",
    title: "Coffee Roastery Site",
    description:
      "A fully responsive marketing site for an artisan coffee roastery, featuring product pages, brewing guides, and a contact form.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chatri/coffee-roastery",
    live: "#",
    featured: true,
    category: "web",
  },
  {
    id: "streetwear-shop",
    title: "Streetwear Shop",
    description:
      "E-commerce storefront for an independent streetwear brand. Cart, product filtering, and checkout flow built in React.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com/chatri/streetwear-shop",
    live: "#",
    featured: true,
    category: "ecom",
  },
  {
    id: "banking-app",
    title: "Banking App Concept",
    description:
      "High-fidelity UI/UX concept for a modern mobile banking application, designed in Figma with a complete design system.",
    tech: ["Figma", "UI/UX", "Prototyping"],
    live: "#",
    featured: true,
    category: "ui",
  },
  {
    id: "travel-blog",
    title: "Travel Blog",
    description:
      "Personal travel blog with a custom WordPress theme, SEO-optimised content, and responsive photo galleries.",
    tech: ["WordPress", "PHP", "CSS"],
    live: "#",
    featured: false,
    category: "web",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "Mobile app concept for tracking workouts and nutrition, featuring dashboard analytics and progress charts.",
    tech: ["Figma", "React Native", "UI/UX"],
    live: "#",
    featured: false,
    category: "ui",
  },
  {
    id: "hotel-booking",
    title: "Boutique Hotel Booking",
    description:
      "Full-stack booking platform for a boutique hotel with an availability calendar, room management, and payment integration.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "https://github.com/chatri/hotel-booking",
    live: "#",
    featured: true,
    category: "ecom",
  },
];
