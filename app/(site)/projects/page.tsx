import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and recent work from The Better Half Property Co across Brighton & Hove.",
};

export default function ProjectsPage() {
  return (
    <>

      {/* Hero */}
      <section className="py-20 bg-brand-cloud">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6">
              Recent Projects
            </h1>
            <p className="text-lg text-brand-ink/80 leading-relaxed">
              A selection of refurbs, lettings prep, and property management
              work we've completed for clients across Brighton & Hove.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <Container>
          <ProjectGrid />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-cloud">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
            Want to see your project here?
          </h2>
          <p className="text-lg text-brand-ink/70 mb-8 max-w-2xl mx-auto">
            Let's chat about how we can bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-2xl bg-brand-teal text-white font-medium shadow-soft hover:bg-brand-teal/90 hover:translate-y-[1px] transition focus-ring"
          >
            Start a conversation
          </a>
        </Container>
      </section>
    </>
  );
}

