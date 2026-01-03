"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Settings, MessageSquare, ExternalLink, Play, Sparkles, Globe, Code, Layout, CreditCard, Search, Star, ChevronRight, Users, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        <MaxWidthWrapper>
          <div className="flex flex-col items-center text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              Digital Growth Agency
              <ChevronRight className="h-4 w-4" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-5xl text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
            >
              We Build Websites That{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                  Actually Grow
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#4F46E5"/>
                      <stop offset="1" stopColor="#22C55E"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}Your Business
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
            >
              Zenvok helps service businesses and founders get more leads, automate operations, and look premium online.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 group">
                <Link href="/contact" className="flex items-center gap-2">
                  Book a Free Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg font-semibold border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                <Link href="/work">View Our Work</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/50 to-secondary/50 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm font-medium">100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />)}
                <span className="text-sm font-medium">5.0 Rating</span>
              </div>
            </motion.div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-white/5">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Trusted by innovative brands</p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
              {["TechCorp", "StartupX", "GrowthLabs", "ScaleUp", "InnovateCo"].map((brand, i) => (
                <span key={i} className="text-xl font-bold tracking-tight">{brand}</span>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[150px] -z-10" />
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-red-400 uppercase tracking-widest mb-4 block">The Problem</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Most Business Websites <br className="hidden sm:block" />
              <span className="text-red-400">Don&apos;t Work.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {[
              {
                title: "Slow, outdated websites",
                description: "Your site loads slowly and users leave before taking action. Every second of delay costs you customers.",
                number: "01"
              },
              {
                title: "No lead system",
                description: "Visitors don't convert because there's no funnel or automation. You're losing money every day.",
                number: "02"
              },
              {
                title: "No trust",
                description: "Poor design kills credibility. Your competitors look more professional and win the clients.",
                number: "03"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl" />
                <div className="relative h-full p-8 rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent backdrop-blur-sm transition-all hover:border-red-500/40">
                  <span className="text-6xl font-bold text-red-500/20">{item.number}</span>
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Solution Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] -z-10" />
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-secondary uppercase tracking-widest mb-4 block">The Solution</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Zenvok <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Fixes That.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {[
              {
                title: "High-Performance Websites",
                description: "Fast, SEO-friendly, and optimized for conversion. Built with cutting-edge technology.",
                icon: <Zap className="h-7 w-7" />,
                gradient: "from-primary to-blue-400"
              },
              {
                title: "Automation & Integrations",
                description: "WhatsApp, email, CRM, payments, and workflows. Everything connected seamlessly.",
                icon: <Settings className="h-7 w-7" />,
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Strategy + Execution",
                description: "Not just design — real business systems that generate revenue.",
                icon: <BarChart3 className="h-7 w-7" />,
                gradient: "from-secondary to-emerald-400"
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="group relative h-full p-10 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all hover:border-white/20 hover:-translate-y-2">
                  <div className={`mb-8 rounded-2xl bg-gradient-to-br ${item.gradient} p-4 w-fit text-white shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-20"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4">What We Do</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Expertise</h2>
            <p className="mt-6 max-w-2xl text-muted-foreground text-lg">Everything you need to grow your digital presence and streamline your operations.</p>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Web Design & Development", desc: "Premium, responsive websites built with Next.js and modern frameworks.", icon: <Globe className="h-6 w-6" /> },
              { title: "Full-Stack Applications", desc: "Complex web apps tailored to your unique business requirements.", icon: <Code className="h-6 w-6" /> },
              { title: "Lead Capture & Automation", desc: "Automated funnels that turn visitors into paying clients.", icon: <TrendingUp className="h-6 w-6" /> },
              { title: "Admin Panels & Dashboards", desc: "Internal tools to manage your operations with ease.", icon: <Layout className="h-6 w-6" /> },
              { title: "Payment & CRM Integration", desc: "Seamless payment flows and customer management systems.", icon: <CreditCard className="h-6 w-6" /> },
              { title: "Performance & SEO", desc: "Be found by the right people and load instantly.", icon: <Search className="h-6 w-6" /> }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="group h-full rounded-2xl border border-white/10 bg-zenvok-surface/50 p-8 transition-all hover:border-primary/50 hover:bg-zenvok-surface">
                  <div className="mb-6 rounded-xl bg-primary/10 p-3 w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden">
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-4 block">Our Process</span>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">How We Work</h2>
          </motion.div>
          
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "01", title: "Discover", desc: "We dive deep into your business, goals, and target audience.", icon: <Users className="h-5 w-5" /> },
                { step: "02", title: "Design", desc: "Create stunning UI/UX that converts visitors into customers.", icon: <Layout className="h-5 w-5" /> },
                { step: "03", title: "Build", desc: "Develop fast, scalable systems with cutting-edge tech.", icon: <Code className="h-5 w-5" /> },
                { step: "04", title: "Launch", desc: "Deploy, test, optimize, and watch your business grow.", icon: <TrendingUp className="h-5 w-5" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30 mb-8">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[200px]">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16"
          >
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-secondary uppercase tracking-widest mb-4 block">Our Work</span>
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Proof Over Promises</h2>
              <p className="mt-6 text-muted-foreground text-lg">We deliver results that matter. Explore some of our recent transformations.</p>
            </div>
            <Button variant="outline" className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 group" asChild>
              <Link href="/work">
                View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: "Photo Studio Booking", desc: "Automated scheduling & payments for a premium studio.", tag: "Full-Stack App" },
              { title: "Retail E-Commerce", desc: "Full e-commerce with custom inventory management.", tag: "E-Commerce" },
              { title: "Coaching Platform", desc: "Content delivery and subscription system for creators.", tag: "SaaS" }
            ].map((work, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-zenvok-surface to-zenvok-surface/50 border border-white/10 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-8">
                    <Button variant="secondary" size="sm" className="rounded-full gap-2 shadow-lg">
                      View Case Study <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80">{work.tag}</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Globe className="h-12 w-12 text-white/20" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{work.title}</h3>
                <p className="text-muted-foreground">{work.desc}</p>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-[40px] border border-white/10 bg-gradient-to-br from-primary/10 via-zenvok-surface to-secondary/5 p-12 md:p-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative text-center">
                <div className="flex justify-center mb-8">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500 mx-0.5" />)}
                </div>
                <blockquote className="text-2xl md:text-4xl font-medium text-foreground leading-tight">
                  &ldquo;Zenvok transformed our website into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">lead machine</span>. We started getting quality inquiries within days.&rdquo;
                </blockquote>
                <div className="mt-12 flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  <div className="text-left">
                    <p className="font-bold text-foreground text-lg">Sarah Johnson</p>
                    <p className="text-muted-foreground">Founder, Tech Solutions Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/5">
        <MaxWidthWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5.0", label: "Average Rating" },
              { number: "24h", label: "Response Time" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{stat.number}</p>
                <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />
        </div>
        <MaxWidthWrapper>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Get Started</span>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">Ready to Grow?</h2>
            <p className="mt-8 text-xl text-muted-foreground max-w-2xl">
              Let&apos;s build something that actually makes you money. Book a free strategy call today.
            </p>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row items-center">
              <Button asChild size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-xl shadow-primary/25 group">
                <Link href="/contact" className="flex items-center gap-2">
                  Book Your Free Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <a 
                href="https://wa.me/your-number" 
                className="flex items-center gap-3 text-foreground font-medium hover:text-secondary transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-secondary/20 p-3 rounded-full group-hover:bg-secondary/30 transition-colors">
                  <MessageSquare className="h-5 w-5 text-secondary" />
                </div>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
