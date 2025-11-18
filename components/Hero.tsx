"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cloud">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo variant="mark" className="w-10 h-10" />
            <span className="text-sm uppercase tracking-wide text-brand-teal font-medium">
              Brighton &amp; Hove
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy leading-tight">
            Your better half{" "}
            <span className="bg-gradient-to-br from-brand-teal to-brand-teal-light bg-clip-text text-transparent">
              in property.
            </span>
          </h1>
          <p className="mt-6 text-lg text-brand-grey leading-relaxed">
            From quick fixes to long-term plans - Brighton &amp; Hove's better half for property solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-5 py-3 rounded-2xl bg-brand-teal text-white font-medium shadow-soft hover:translate-y-[1px] hover:shadow-md transition focus-ring"
            >
              Book a call
            </a>
            <a
              href="/services"
              className="px-5 py-3 rounded-2xl border-2 border-brand-navy text-brand-navy font-medium hover:bg-brand-navy hover:text-white transition focus-ring"
            >
              See services
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="h-36 md:h-56 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?w=600&q=80"
              alt="UK residential property"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
          <div className="h-48 md:h-72 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://plus.unsplash.com/premium_photo-1726783481154-024e0ab1eb04?w=600&q=80"
              alt="UK home interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
          <div className="h-28 md:h-40 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1596716587659-a922cc68513f?w=600&q=80"
              alt="UK terraced houses"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
          <div className="h-28 md:h-40 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1539875079575-43d11bef9687?w=600&q=80"
              alt="UK property interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
          <div className="h-36 md:h-56 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
              alt="UK house exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
          <div className="h-48 md:h-72 rounded-2xl bg-white shadow-soft overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80"
              alt="UK bedroom interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 20vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

