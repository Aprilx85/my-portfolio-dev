"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-indigo-400 mb-2">Career</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/60" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute left-0 top-1.5 size-8 rounded-full border-2 flex items-center justify-center",
                    exp.current
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-border bg-background"
                  )}
                >
                  <div
                    className={cn(
                      "size-2.5 rounded-full",
                      exp.current ? "bg-indigo-500" : "bg-muted-foreground/40"
                    )}
                  />
                </div>

                <div className="rounded-xl border border-border/40 bg-card/50 p-6 hover:border-indigo-500/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-card px-2 py-1 rounded border border-border/40 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs font-mono">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
