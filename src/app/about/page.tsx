"use client";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Shield, Zap, Award, Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Uncompromising Quality",
    description: "We don't do 'good enough'. Every pixel, every line of code, and every user interaction is crafted to the highest standards.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    title: "Radical Transparency",
    description: "We believe in honest communication. You'll always know exactly where your project stands and the rationale behind our decisions.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Innovation First",
    description: "We stay ahead of the curve, utilizing the latest technologies and design trends to give your business a competitive edge.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Obsessive Delivery",
    description: "Results matter. We are focused on delivering systems that actually move the needle for your business growth.",
    icon: <Award className="h-6 w-6" />,
  },
];

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Lead Engineer",
    bio: "Full-stack architect with a passion for building scalable systems and elegant user experiences.",
    image: "AR",
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    bio: "Visionary designer specialized in high-end brand identities and conversion-focused UI/UX.",
    image: "SC",
  },
  {
    name: "Marcus Thorne",
    role: "Growth Strategist",
    bio: "Expert in digital marketing and automation, helping businesses turn traffic into loyal customers.",
    image: "MT",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-24 pt-12">
      <MaxWidthWrapper>
        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            We build systems for the <span className="text-primary">next generation</span> of business.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground leading-relaxed"
          >
            Zenvok was founded on a simple principle: technology should empower business owners, not frustrate them.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-zenvok-surface border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            <div className="w-full h-full flex items-center justify-center text-white/5 font-bold text-8xl italic">
              Z
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Zenvok, we combine world-class design with high-performance engineering to help service businesses scale. We don&apos;t just build websites; we build business engines that capture leads, automate tasks, and look premium.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in the digital world, we work with founders and service providers globally who are ready to level up their online presence and internal systems.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              These principles guide everything we do, from the first line of code to the final launch.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-white/5 bg-zenvok-surface hover:border-primary/20 transition-colors group"
              >
                <div className="rounded-2xl bg-primary/10 p-4 w-fit text-primary mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-40">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">
              A collective of specialists dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zenvok-surface p-8"
              >
                <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-8 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1 uppercase tracking-wider">{member.role}</p>
                <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                <div className="mt-8 flex gap-4 text-muted-foreground">
                  <Linkedin className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                  <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                  <Github className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
