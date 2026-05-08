"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/data/skills";
import { MapPin, Calendar, Briefcase } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-indigo-400 mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20" />
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <Image
                  src="/image/chatri.jpg"
                  alt="Chatri"
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accents */}
              {["top-left", "top-right", "bottom-left", "bottom-right"].map((pos) => (
                <div
                  key={pos}
                  className={`absolute w-5 h-5 border-indigo-500 ${
                    pos === "top-left" ? "-top-2 -left-2 border-t-2 border-l-2" :
                    pos === "top-right" ? "-top-2 -right-2 border-t-2 border-r-2" :
                    pos === "bottom-left" ? "-bottom-2 -left-2 border-b-2 border-l-2" :
                    "-bottom-2 -right-2 border-b-2 border-r-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">Web Developer &amp; UI Enthusiast</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I&apos;m a Bangkok-based web developer with 8+ years of experience turning ideas
              into polished digital products. I specialise in building responsive, performant
              front-end experiences using modern JavaScript frameworks.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Outside of code I explore sound design, game concepts, and street photography.
              I believe great software needs both technical precision and aesthetic sensibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { Icon: MapPin, label: "Location", value: "Bangkok, TH" },
                { Icon: Calendar, label: "Experience", value: "8+ Years" },
                { Icon: Briefcase, label: "Status", value: "Available" },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/40"
                >
                  <Icon className="h-4 w-4 text-indigo-400 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
