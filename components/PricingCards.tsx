"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  idealFor: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    title: "Essentials",
    price: "from £49/month per property",
    description:
      "For single lets and lower-maintenance homes that still need a reliable eye on things.",
    features: [
      "Monthly check-and-fix visit",
      "Small repairs included (up to an agreed time/£ limit per visit)",
      "Clear photo and video updates",
      "Smoke/CO alarm and safety checks",
      "Priority access to our trusted trades network",
      "Discounted callout rates",
    ],
    idealFor: "Ideal for: single lets, small flats, and hands-off landlords.",
  },
  {
    title: "Plus",
    price: "from £79/month per property",
    description:
      "For busier properties, HMOs, and landlords who want fewer surprises and more support.",
    features: [
      "Weekly check-and-fix visits or extended monthly visits",
      "More time for small repairs included each month",
      "Photo and video reports with flagged actions",
      "Basic compliance and standards checks (fire doors, trip hazards, etc.)",
      "No callout fees for standard issues during working hours",
      "Coordination with tenants",
    ],
    idealFor: "Ideal for: HMOs, higher-wear properties, and proactive landlords.",
    isPopular: true,
  },
  {
    title: "Short-Let / Airbnb",
    price: "from £119/month per property",
    description:
      "For hosts who need fast turnaround, guest-ready standards, and fewer 11pm surprises.",
    features: [
      "Weekly check-and-fix visits (or aligned with booking patterns)",
      "Small repairs between stays (up to an agreed time/£ limit)",
      "Photo and video updates so you see exactly what guests see",
      "Guest-ready checks (entry, locks, lighting, Wi-Fi basics, etc.)",
      "Priority callouts for guest-impacting issues",
      "Optional add-ons: light touchovers, consumables check, key-safe management",
    ],
    idealFor: "Ideal for: Airbnb hosts, serviced accommodation, remote owners.",
  },
];

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan, idx) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`p-8 rounded-2xl bg-white border border-brand-cloud shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all group relative ${
            plan.isPopular ? "border-brand-teal border-2" : ""
          }`}
        >
          {plan.isPopular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full bg-brand-teal text-white text-xs font-medium">
                Most popular
              </span>
            </div>
          )}
          <h3 className="text-2xl font-bold text-brand-navy mb-2">
            {plan.title}
          </h3>
          <p className="text-xl font-bold text-brand-teal mb-4">
            {plan.price}
          </p>
          <p className="text-brand-ink/70 leading-relaxed mb-6 text-sm">
            {plan.description}
          </p>
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, featureIdx) => (
              <li key={featureIdx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                <span className="text-brand-ink/70 text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brand-ink/60 italic mt-6 pt-6 border-t border-brand-cloud">
            {plan.idealFor}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

