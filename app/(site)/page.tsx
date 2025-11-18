import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import PricingCards from "@/components/PricingCards";
import ProjectGrid from "@/components/ProjectGrid";
import Testimonial from "@/components/Testimonial";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Home",
  description: "Your better half in property. From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="What we do"
            subtitle="Reliable, proactive property services for Brighton & Hove landlords, hosts, and homeowners."
          />
          <ServiceCards />
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <SectionHeading
            title="Property Care Plans – Pricing"
            subtitle="Simple, transparent plans for ongoing property care in Brighton & Hove."
          />
          <PricingCards />
          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-brand-cloud shadow-soft">
              <h3 className="text-xl font-bold text-brand-navy mb-3">
                Portfolios & bespoke plans
              </h3>
              <p className="text-brand-ink/70 mb-4">
                Got 5+ properties or something more complex? We'll build a
                tailored care plan and portfolio rate.{" "}
                <a
                  href="/contact"
                  className="text-brand-teal hover:text-brand-teal-light font-medium underline"
                >
                  Call us now
                </a>{" "}
                to discuss a custom package.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <SectionHeading
            title="Recent Projects"
            subtitle="A snapshot of the work we've delivered for landlords and investors across the city."
          />
          <ProjectGrid />
          <div className="text-center mt-10">
            <a
              href="/projects"
              className="inline-block px-6 py-3 rounded-2xl border-2 border-brand-navy text-brand-navy font-medium hover:bg-brand-navy hover:text-white transition focus-ring"
            >
              View all projects
            </a>
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          <Testimonial
            quote="The Better Half took all the stress out of our refurb. They kept us updated every step, brought in brilliant trades, and delivered on time and on budget. Couldn't recommend them more highly."
            author="Sarah M."
            role="Landlord, Hove"
          />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-teal text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to work with us?
          </h2>
          <p className="text-lg text-brand-cloud/90 mb-8 max-w-2xl mx-auto">
            Whether you need ongoing property care, support with a refurb, or help getting a home lettings-ready, we're here to make it easy.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-brand-teal-light text-white font-medium shadow-soft hover:bg-brand-teal-light/90 hover:translate-y-[1px] transition focus-ring"
          >
            Call us now
          </a>
        </Container>
      </section>
    </>
  );
}

