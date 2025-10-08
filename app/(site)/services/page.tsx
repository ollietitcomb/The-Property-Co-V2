import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Services",
  description: "Owners' representation, lettings prep, refurb management, and sourcing assistance across Brighton & Hove.",
};

export default function ServicesPage() {
  return (
    <>

      {/* Hero */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">
              Our Services
            </h1>
            <p className="text-lg text-brand-ink/80 leading-relaxed">
              We offer transparent, hands-on support for every stage of your
              property journey—from initial viewings to final handover.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <Container>
          <ServiceCards />
        </Container>
      </section>

      {/* Detailed Descriptions */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-4">
                Why work with us?
              </h2>
              <p className="text-brand-ink/80 leading-relaxed mb-4">
                We're Brighton & Hove locals with a deep network of trusted
                trades and a genuine passion for property. Whether you're a
                time-poor landlord, a first-time investor, or relocating and
                need boots on the ground, we bring clarity, calm, and
                accountability to every project.
              </p>
              <p className="text-brand-ink/80 leading-relaxed">
                Our clients value our tidy reporting, proactive communication,
                and commitment to protecting budgets. We don't cut corners, and
                we don't oversell. We do property, done properly.
              </p>
            </div>

            <div className="border-t border-brand-navy/10 pt-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">
                How we work
              </h3>
              <ul className="space-y-3 text-brand-ink/80">
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">1.</span>
                  <span>
                    <strong>Discovery call:</strong> We discuss your goals,
                    timeline, and budget.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">2.</span>
                  <span>
                    <strong>Scoping & quotes:</strong> We define the work,
                    source reliable trades, and provide transparent estimates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">3.</span>
                  <span>
                    <strong>Delivery & oversight:</strong> We manage the
                    project day-to-day, keeping you informed and on budget.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-teal font-bold">4.</span>
                  <span>
                    <strong>Handover:</strong> We deliver a complete snag list,
                    final invoices, and sign-off documentation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Let's discuss your project
          </h2>
          <p className="text-lg text-brand-ink/70 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to see how we can help.
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

