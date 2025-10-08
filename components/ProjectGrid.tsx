"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Regency Townhouse Refurb",
    description: "Complete ground-to-roof restoration with period features preserved.",
    tags: ["Refurb", "Heritage"],
    image: "https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?w=800&q=80",
  },
  {
    title: "Five-Bed HMO Conversion",
    description: "Compliant HMO conversion with ensuite rooms and modern finishes.",
    tags: ["HMO", "Conversion"],
    image: "https://plus.unsplash.com/premium_photo-1726783481154-024e0ab1eb04?w=800&q=80",
  },
  {
    title: "Hove Seafront Lettings Prep",
    description: "Full interior refresh and styling to maximise rental appeal.",
    tags: ["Lettings Prep", "Styling"],
    image: "https://images.unsplash.com/photo-1596716587659-a922cc68513f?w=800&q=80",
  },
  {
    title: "Victorian Terrace Extension",
    description: "Rear extension and loft conversion adding two bedrooms.",
    tags: ["Refurb", "Extension"],
    image: "https://images.unsplash.com/photo-1539875079575-43d11bef9687?w=800&q=80",
  },
  {
    title: "New Build Snagging",
    description: "Comprehensive snag list and rectification for a new development.",
    tags: ["Snagging", "New Build"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Portfolio Acquisition Support",
    description: "Due diligence and negotiation for a three-property portfolio.",
    tags: ["Sourcing", "Investment"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group rounded-2xl bg-white border border-brand-cloud shadow-soft overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          {/* Image */}
          <div className="h-48 bg-gradient-to-br from-brand-cloud to-white relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-brand-navy/5 group-hover:bg-brand-teal/10 transition" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-brand-teal-light opacity-0 group-hover:opacity-100 transition" />
            </div>
            <p className="text-sm text-brand-ink/70 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-brand-cloud text-brand-teal"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

