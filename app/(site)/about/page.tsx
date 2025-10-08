import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Meet The Better Half Property Co—your local, transparent property partner in Brighton & Hove.",
};

export default function AboutPage() {
  return (
    <>

      {/* Hero */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">
              About Us
            </h1>
            <p className="text-lg text-brand-ink/80 leading-relaxed">
              The Better Half Property Co is a Brighton & Hove-based partner for
              time-poor landlords, first-time investors, and relocators.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6 text-brand-ink/80 leading-relaxed">
            <p>
              We bring trade relationships, tidy reporting, and a calm approach
              to property management and refurbishment projects across the city.
            </p>
            <p>
              Whether you're planning a full refurb, prepping a property for
              lettings, or need someone on the ground to oversee trades and
              protect your budget, we're here to take the stress out of the
              process.
            </p>
            <p>
              Our clients appreciate our straightforward communication, local
              knowledge, and commitment to delivering projects on time and on
              budget. We don't oversell, and we don't cut corners—we do
              property, done properly.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <SectionHeading title="Our Values" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                Local & Trusted
              </h3>
              <p className="text-brand-ink/70">
                We're Brighton & Hove locals with deep roots in the community
                and a network of reliable trades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                Transparent & Clear
              </h3>
              <p className="text-brand-ink/70">
                No jargon, no hidden fees. We keep you informed every step of
                the way with honest, straightforward communication.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                Quality First
              </h3>
              <p className="text-brand-ink/70">
                We're committed to delivering high-quality work that stands the
                test of time. No shortcuts, no compromises.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-brand-ink/70 mb-8 max-w-2xl mx-auto">
            We'd love to hear about your property project and discuss how we can
            help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-brand-teal text-white font-medium shadow-soft hover:bg-brand-teal/90 hover:translate-y-[1px] transition focus-ring"
          >
            Get in touch
          </a>
        </Container>
      </section>
    </>
  );
}

