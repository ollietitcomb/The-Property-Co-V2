import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
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
            subtitle="From refurbs to lettings prep, we're your local property partner in Brighton & Hove."
          />
          <ServiceCards />
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
            Whether you're planning a refurb, prepping for lettings, or need guidance on a property purchase, we're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-brand-teal-light text-white font-medium shadow-soft hover:bg-brand-teal-light/90 hover:translate-y-[1px] transition focus-ring"
          >
            Book a call
          </a>
        </Container>
      </section>
    </>
  );
}

