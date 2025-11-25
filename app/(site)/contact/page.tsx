import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Better Half Property Co. We're here to help with your Brighton & Hove property needs.",
};

export default function ContactPage() {
  return (
    <>

      {/* Hero */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-brand-ink/80 leading-relaxed">
              Ready to start your project? Have a question? We'd love to hear
              from you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-brand-navy mb-6">
                Let's talk
              </h2>
              <p className="text-brand-ink/70 mb-8 leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours.
                Prefer to call or email? Reach out directly using the details
                below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Email</h3>
                    <a
                      href="mailto:hello@betterhalfproperty.co"
                      className="text-brand-teal hover:text-brand-teal-light transition"
                    >
                      hello@betterhalfproperty.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Phone</h3>
                    <a
                      href="tel:+447344359975"
                      className="text-brand-teal hover:text-brand-teal-light transition"
                    >
                      07344 359975
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/447344359975"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-teal hover:text-brand-teal-light transition"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-light text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">Location</h3>
                    <p className="text-brand-ink/70">
                      Brighton & Hove, East Sussex
                    </p>
                  </div>
                </div>
              </div>

              {/* Sticky Contact Info */}
              <div className="mt-8 p-6 rounded-2xl bg-brand-cloud border border-brand-sand">
                <p className="text-sm text-brand-ink/70">
                  <strong className="text-brand-navy">Office hours:</strong>
                  <br />
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 2pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

