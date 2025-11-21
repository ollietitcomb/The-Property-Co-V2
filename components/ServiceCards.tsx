"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Wrench, Home, Key } from "lucide-react";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Property Care Plans",
    description:
      "Regular check-and-fix visits with small repairs included, clear photo and video updates, and fast callouts — so your property stays safe, compliant, and running smoothly.",
  },
  {
    icon: <Key className="w-8 h-8" />,
    title: "Property Sales Support",
    description:
      "Sell without agents, fees, or long waits. We buy properties directly and also work with trusted local investors — giving you fast decisions, fair offers, and flexible timeframes.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Lettings Prep",
    description:
      "Fast turnarounds, snag lists, and styling to maximise yield and attract quality tenants.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Refurb Management",
    description:
      "Scope, quotes, timelines, and quality control — we handle the details so you don't have to.",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {services.map((service, idx) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-8 rounded-2xl bg-white border border-brand-cloud shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-brand-navy mb-3">
            {service.title}
          </h3>
          <p className="text-brand-ink/70 leading-relaxed">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

