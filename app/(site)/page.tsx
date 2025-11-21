import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import PricingCards from "@/components/PricingCards";
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
      <section id="property-care-plans" className="py-20 bg-brand-cloud">
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

      {/* Where we work Section */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Where we work"
            subtitle="We operate across Brighton & Hove and the surrounding areas."
          />
          <div className="mt-8 w-full rounded-2xl overflow-hidden shadow-soft">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40150!2d-0.15!3d50.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48758509b0b7c4c3%3A0x93f3f4cde94cf795!2sBrighton%20and%20Hove!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk&z=10"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <Container className="max-w-4xl">
          <Testimonial
            quote="The Better Half team spot issues before they turn into problems. Their monthly care plan has saved us time, money, and endless stress. The photo and video updates are brilliant — we always know exactly how the property is doing."
            author="James R."
            role="Landlord, Brighton"
          />
        </Container>
      </section>

      {/* CTA Section */}
      <section id="ready-to-work" className="py-20 bg-gradient-to-br from-brand-navy to-brand-teal text-white">
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

