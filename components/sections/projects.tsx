"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/social-icons";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "ui", label: "UI/UX" },
  { key: "ecom", label: "E-Commerce" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-xl bg-card border border-border/40 overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs text-muted-foreground/60 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 text-xs">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-base mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline" className="text-xs font-mono">
              {t}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`Code for ${project.title}`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-indigo-400 transition-colors"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/30" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-indigo-400 mb-2">What I&apos;ve built</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                active === key
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "border-border/60 text-muted-foreground hover:border-indigo-500/40 hover:text-foreground"
              )}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
