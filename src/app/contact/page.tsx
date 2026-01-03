"use client";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Calendar, Phone, Video, Sparkles, Send, ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const socialLinks = [
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com/zenvok", color: "hover:text-pink-500 hover:bg-pink-500/10" },
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com/zenvok", color: "hover:text-blue-600 hover:bg-blue-600/10" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/company/zenvok", color: "hover:text-blue-500 hover:bg-blue-500/10" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/zenvok", color: "hover:text-sky-400 hover:bg-sky-400/10" },
];

const projectTypes = [
  { value: "business-website", label: "Business Website" },
  { value: "ecommerce", label: "E-Commerce Store" },
  { value: "web-app", label: "Web Application" },
  { value: "landing-page", label: "Landing Page" },
  { value: "portfolio", label: "Portfolio Website" },
  { value: "booking-system", label: "Booking System" },
  { value: "admin-dashboard", label: "Admin Dashboard" },
  { value: "saas-platform", label: "SaaS Platform" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const callPreferences = [
  { value: "google-meet", label: "Google Meet", icon: <Video className="h-4 w-4" /> },
  { value: "voice-call", label: "Voice Call", icon: <Phone className="h-4 w-4" /> },
];

export default function ContactPage() {
  const [callPreference, setCallPreference] = useState("google-meet");

  const handleScheduleCall = () => {
    window.parent.postMessage({ 
      type: "OPEN_EXTERNAL_URL", 
      data: { url: "https://calendar.app.google/qyLxAT16iJkTb7P5A" } 
    }, "*");
  };

  return (
    <div className="pb-24 pt-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />
      </div>
      
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            Let&apos;s Create Something Amazing
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Growth Journey</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call or send us a message. We respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/50 text-white shadow-lg shadow-primary/25">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-lg font-bold text-foreground">hello@zenvok.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 text-white shadow-lg shadow-secondary/25">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="text-lg font-bold text-foreground">+1 (555) 000-0000</p>
                    <p className="text-sm text-muted-foreground mt-1">Quick responses guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 overflow-hidden group hover:border-primary/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Book a Strategy Call</h3>
                    <p className="text-sm text-muted-foreground">15-min free consultation</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Discuss your project goals", "Get expert recommendations", "Receive a custom proposal"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={handleScheduleCall}
                  className="w-full rounded-xl py-6 text-base font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 group"
                >
                  Schedule Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-lg font-bold text-foreground mb-6">Social Presence</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border border-white/10 transition-all ${link.color}`}
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zenvok-surface to-zenvok-surface/50 p-8 md:p-10 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm font-medium text-muted-foreground">Contact Form</span>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Full Name *</label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Email Address *</label>
                    <Input 
                      placeholder="john@example.com" 
                      type="email" 
                      className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Mobile Number *</label>
                    <Input 
                      placeholder="+1 (555) 000-0000" 
                      type="tel" 
                      className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground ml-1">Company / Website</label>
                    <Input 
                      placeholder="www.yourbusiness.com" 
                      className="bg-white/5 border-white/10 rounded-xl py-6 focus:border-primary/50 focus:ring-primary/20 transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">What do you need? *</label>
                  <Select>
                    <SelectTrigger className="w-full bg-white/5 border-white/10 rounded-xl py-6 h-auto focus:border-primary/50 focus:ring-primary/20">
                      <SelectValue placeholder="Select project type..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zenvok-surface border-white/10">
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value} className="hover:bg-white/10 cursor-pointer">
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-foreground ml-1">Call Preference</label>
                  <div className="grid grid-cols-2 gap-4">
                    {callPreferences.map((pref) => (
                      <button
                        key={pref.value}
                        type="button"
                        onClick={() => setCallPreference(pref.value)}
                        className={`flex items-center justify-center gap-3 p-4 rounded-xl border transition-all ${
                          callPreference === pref.value
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20"
                        }`}
                      >
                        {pref.icon}
                        <span className="font-medium">{pref.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground ml-1">Tell us about your project</label>
                  <Textarea 
                    placeholder="Share your goals, timeline, budget range, and any specific requirements..." 
                    className="bg-white/5 border-white/10 rounded-xl min-h-[130px] resize-none focus:border-primary/50 focus:ring-primary/20 transition-all" 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-xl py-7 text-lg font-bold bg-gradient-to-r from-primary via-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20 group"
                >
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  Send Message
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
