"use client";

import { projects } from "@/lib/projects";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-24 pt-12">
      <MaxWidthWrapper>
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Case Study: {project.category}</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full gap-2 px-8">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Site <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="aspect-[4/3] rounded-3xl bg-zenvok-surface border border-white/5 flex items-center justify-center text-white/5 font-bold text-8xl italic overflow-hidden relative group">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               {project.image}
            </div>

            <div className="p-8 rounded-3xl bg-zenvok-surface border border-white/5">
              <h3 className="text-xl font-bold text-foreground mb-6">Project Results</h3>
              <div className="space-y-4">
                {project.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-zenvok-surface border border-white/5">
              <h3 className="text-xl font-bold text-foreground mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
