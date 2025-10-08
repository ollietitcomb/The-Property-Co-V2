"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-teal text-white shadow-xl"
    >
      <Quote className="w-12 h-12 text-brand-teal-light/50 mb-4" />
      <blockquote className="text-lg md:text-xl leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-brand-cloud/80">{role}</p>
      </div>
    </motion.div>
  );
}

