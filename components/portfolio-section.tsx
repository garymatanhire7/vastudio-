"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Monolith Studio",
    client: "Architecture Firm",
    description: "Geometric wordmark and visual identity system built on modular grid principles. Clean lines reflecting architectural precision.",
    tags: ["Logo Design", "Visual Identity", "Print"],
    year: "2025",
  },
  {
    id: 2,
    title: "Apex Ventures",
    client: "Investment Group",
    description: "Minimalist logomark derived from golden ratio proportions. Complete brand guidelines and stationery system.",
    tags: ["Brand Identity", "Logo Construction", "Guidelines"],
    year: "2024",
  },
  {
    id: 3,
    title: "Nordic Foundry",
    client: "Type Studio",
    description: "Geometric monogram and identity for independent type foundry. Emphasis on mathematical precision and craft.",
    tags: ["Monogram", "Identity System", "Typography"],
    year: "2024",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-border bg-card">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Project Number */}
        <div className="absolute left-6 top-6 font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Year Badge */}
        <div className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">
          {project.year}
        </div>
        
        {/* Project Visual Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center">
            <h4 className="font-sans text-2xl font-bold tracking-tight text-foreground">
              {project.title}
            </h4>
            <p className="mt-2 font-mono text-xs text-muted-foreground uppercase tracking-wider">
              {project.client}
            </p>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/80 to-transparent p-6"
        >
          <div className="w-full">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {project.client}
                </p>
                <h4 className="mt-1 font-sans text-xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h4>
              </div>
              <div className="flex h-10 w-10 items-center justify-center border border-border bg-foreground text-background transition-transform group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-3 py-1 font-mono text-xs text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative overflow-hidden border-y border-border bg-card/30 py-32 lg:py-48"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-foreground/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="mb-4 inline-block font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
            [ 002 / Work ]
          </span>
          <h2 className="font-sans text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            Selected
            <br />
            <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="mt-6 max-w-lg font-mono text-sm text-muted-foreground">
            Brand identities built on geometric principles. 
            Research-driven. Systematically constructed.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
