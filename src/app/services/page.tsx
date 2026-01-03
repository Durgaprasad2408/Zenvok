"use client";

import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { motion } from "framer-motion";
import { Zap, Settings, BarChart3, Code, Globe, Layout, Database, Shield, Smartphone } from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description: "Premium, responsive websites built with Next.js and Tailwind CSS. We focus on speed, SEO, and user experience.",
    icon: <Globe className="h-6 w-6" />,
    features: ["Responsive Design", "SEO Optimization", "Fast Loading Times", "Custom Animations"]
  },
  {
    title: "Full-Stack Applications",
    description: "Complex web applications tailored to your business needs. From custom CRMs to SaaS platforms.",
    icon: <Code className="h-6 w-6" />,
    features: ["Secure Authentication", "Database Integration", "API Development", "Scalable Architecture"]
  },
  {
    title: "Lead Capture & Automation",
    description: "Automated funnels and lead management systems that turn visitors into paying clients without manual effort.",
    icon: <Zap className="h-6 w-6" />,
    features: ["Custom Funnels", "Email Automation", "CRM Integration", "Lead Scoring"]
  },
  {
    title: "Admin Panels & Dashboards",
    description: "Internal tools that help you manage your business more efficiently. Real-time data and easy-to-use interfaces.",
    icon: <Layout className="h-6 w-6" />,
    features: ["Real-time Analytics", "User Management", "Content Control", "Data Visualization"]
  },
  {
    title: "Payment & CRM Integration",
    description: "Seamlessly integrate Stripe, PayPal, or your favorite CRM into your existing workflows.",
    icon: <Settings className="h-6 w-6" />,
    features: ["Secure Payments", "Subscription Management", "CRM Syncing", "Invoice Automation"]
  },
  {
    title: "Performance & SEO Optimization",
    description: "Ensure your website is found by the right people and loads instantly for every user.",
    icon: <BarChart3 className="h-6 w-6" />,
    features: ["Core Web Vitals", "Keyword Strategy", "Technical SEO", "Speed Audits"]
  }
];

export default function ServicesPage() {
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
            Our <span className="text-primary">Services</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-xl text-muted-foreground leading-relaxed"
          >
            We provide end-to-end digital solutions that help you streamline operations and grow your revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/5 bg-zenvok-surface p-8 transition-all hover:border-primary/50"
            >
              <div className="mb-6 rounded-2xl bg-primary/10 p-4 w-fit text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-foreground/80">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
