"use client";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div className="pb-24 pt-12">
      <MaxWidthWrapper>
        <div className="max-w-3xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Proof Over <span className="text-primary">Promises</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground leading-relaxed"
          >
            Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence and operations.
          </motion.p>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-last" : ""}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-zenvok-surface border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="w-full h-full flex items-center justify-center text-white/5 font-bold text-6xl italic">
                    {project.image}
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm font-bold text-primary tracking-widest uppercase">{project.category}</span>
                <h2 className="mt-4 text-3xl font-bold text-foreground">{project.title}</h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      {result}
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="rounded-full gap-2 border-white/10 bg-white/5">
                    <Link href={`/work/${project.slug}`}>
                      View Case Study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" className="rounded-full gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center p-16 rounded-3xl border border-white/5 bg-zenvok-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to be our next success story?</h2>
          <Button asChild size="lg" className="rounded-full px-10">
            <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
