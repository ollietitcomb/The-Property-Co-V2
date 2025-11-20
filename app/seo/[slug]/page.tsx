import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
    { slug: "landlord-alternative-letting-agents-brighton" },
    { slug: "property-maintenance-self-managing-landlords-brighton" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metadataMap: Record<string, Metadata> = {
    "landlord-alternative-letting-agents-brighton": {
      title:
        "Alternative to Letting Agent Management in Brighton & Hove | Better Half Property",
      description:
        "Self-managing landlord in Brighton & Hove? Skip 10–15% management fees. Better Half Property offers fixed-price property care plans, regular checks, and quick fixes for your rentals.",
    },
    "property-maintenance-self-managing-landlords-brighton": {
      title:
        "Property Maintenance for Self-Managing Landlords in Brighton & Hove | Better Half Property",
      description:
        "Self-managing your rental property in Brighton & Hove? Get regular check-and-fix visits, small repairs included, and clear photo reports. Fixed pricing from £49/month.",
    },
  };

  return (
    metadataMap[params.slug] || {
      title: "Better Half Property | Brighton & Hove Property Services",
      description:
        "Property care and maintenance services for landlords in Brighton & Hove.",
    }
  );
}

export default function SeoPage({ params }: { params: { slug: string } }) {
  const contentMap: Record<string, JSX.Element> = {
    "landlord-alternative-letting-agents-brighton": (
      <article className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
          An alternative to traditional letting agents in Brighton & Hove
        </h1>

        <div className="prose prose-lg max-w-none text-brand-ink/80 leading-relaxed space-y-4">
          <p>
            If you're a self-managing landlord in Brighton & Hove, you're
            probably already handling tenant find, viewings, and tenancy
            agreements yourself. But what about the ongoing property maintenance,
            regular checks, and those small repairs that always seem to pop up?
            Traditional letting agents charge 10–15% of your monthly rent for
            "full management"—but you don't need all of that.
          </p>

          <p>
            Better Half Property offers a different approach: fixed-price
            property care plans that focus on the physical property itself.
            We're your local partner for regular check-and-fix visits, small
            repairs included, and clear photo reports—without the percentage
            fees.
          </p>
        </div>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Why choose property care over full management?
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Fixed, transparent pricing
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Our property care plans start from £49/month per property. No
                percentage fees, no surprises. You know exactly what you're
                paying for regular visits, small repairs, and maintenance
                support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                You keep control of tenant relationships
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                You handle tenant find, viewings, and communication. We focus
                on keeping your property in top condition—regular checks, small
                repairs, safety compliance, and clear reporting so you know
                exactly what's happening on the ground.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Regular check-and-fix visits
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Monthly or bi-weekly visits where we check the property, handle
                small repairs on the spot (up to an agreed time/£ limit), and
                send you clear photo and video updates. Smoke alarms, safety
                checks, and basic compliance included.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Fast callouts when needed
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Priority access to our trusted trades network and discounted
                callout rates for issues that need immediate attention. We're
                Brighton & Hove locals, so we can be on-site quickly when it
                matters.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Who is this for?
          </h2>

          <ul className="space-y-3 text-brand-ink/80 leading-relaxed list-disc list-inside">
            <li>
              Self-managing landlords who find and choose their own tenants
            </li>
            <li>
              Small portfolio landlords who want to avoid 10–15% management fees
            </li>
            <li>
              Landlords who want regular property checks without full management
            </li>
            <li>
              Property owners who need a local "on-the-ground" support partner
            </li>
          </ul>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Our property care plans
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-cloud border border-brand-cloud">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Essentials — from £49/month
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Monthly check-and-fix visits, small repairs included, clear
                photo and video updates, smoke/CO alarm checks, and priority
                access to our trades network. Ideal for single lets and
                lower-maintenance homes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cloud border border-brand-cloud">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Plus — from £79/month
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Weekly or extended monthly visits, more time for small repairs,
                photo and video reports with flagged actions, basic compliance
                checks, and no callout fees for standard issues during working
                hours. Ideal for HMOs and higher-wear properties.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Ready to get started?
          </h2>

          <p className="text-brand-ink/80 leading-relaxed">
            If you're a self-managing landlord in Brighton & Hove looking for
            an alternative to traditional letting agent management, we're here to
            help. Our property care plans give you regular property support
            without the percentage fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/services"
              className="px-6 py-3 rounded-2xl bg-brand-teal text-white font-medium shadow-soft hover:bg-brand-teal/90 hover:translate-y-[1px] transition focus-ring text-center"
            >
              View property care plans
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl border-2 border-brand-navy text-brand-navy font-medium hover:bg-brand-navy hover:text-white transition focus-ring text-center"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </article>
    ),

    "property-maintenance-self-managing-landlords-brighton": (
      <article className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
          Property maintenance for self-managing landlords in Brighton & Hove
        </h1>

        <div className="prose prose-lg max-w-none text-brand-ink/80 leading-relaxed space-y-4">
          <p>
            As a self-managing landlord in Brighton & Hove, you're handling
            tenant find, viewings, and tenancy agreements yourself. But keeping
            on top of property maintenance, regular checks, and those inevitable
            small repairs can be time-consuming—especially if you're not local
            or juggling multiple properties.
          </p>

          <p>
            Better Half Property offers regular property maintenance and
            check-and-fix visits designed specifically for self-managing
            landlords. We're your local Brighton & Hove partner for keeping
            your rental property in top condition, without the hassle of
            traditional full management.
          </p>
        </div>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            What we offer
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Regular check-and-fix visits
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Monthly or bi-weekly visits where we check your property,
                handle small repairs on the spot (up to an agreed time/£ limit
                per visit), and send you clear photo and video updates. You'll
                know exactly what's happening at your property, even if you're
                not there.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Small repairs included
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                No need to organise separate trades for every small job. We
                handle minor repairs during our visits—fixing leaky taps,
                replacing lightbulbs, tightening loose handles, patching small
                areas, and other quick fixes that keep your property running
                smoothly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Clear photo and video reports
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                After each visit, you'll receive a clear report with photos and
                optional video updates showing exactly what we checked, what we
                fixed, and any issues that need attention. No jargon, no
                confusion—just straightforward updates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Safety and compliance checks
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                We check smoke alarms, CO detectors, fire doors, trip hazards,
                and other basic safety and compliance requirements. We'll flag
                anything that needs attention so you can stay on top of your
                legal obligations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Fast callouts when needed
              </h3>
              <p className="text-brand-ink/80 leading-relaxed">
                Priority access to our trusted trades network and discounted
                callout rates for urgent issues. As Brighton & Hove locals, we
                can be on-site quickly when something needs immediate attention.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Why self-managing landlords choose us
          </h2>

          <ul className="space-y-3 text-brand-ink/80 leading-relaxed list-disc list-inside">
            <li>
              <strong>Fixed pricing:</strong> From £49/month per property. No
              percentage fees, no surprises.
            </li>
            <li>
              <strong>You stay in control:</strong> You handle tenant
              relationships; we handle property maintenance.
            </li>
            <li>
              <strong>Local and reliable:</strong> Brighton & Hove based, so we
              can be on-site quickly when needed.
            </li>
            <li>
              <strong>Transparent reporting:</strong> Clear photo and video
              updates so you know exactly what's happening.
            </li>
            <li>
              <strong>Small repairs included:</strong> No need to organise
              separate trades for minor jobs.
            </li>
          </ul>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Our property care plans
          </h2>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-brand-cloud border border-brand-cloud">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Essentials — from £49/month per property
              </h3>
              <p className="text-brand-ink/80 leading-relaxed mb-3">
                For single lets and lower-maintenance homes:
              </p>
              <ul className="text-brand-ink/80 leading-relaxed space-y-2 list-disc list-inside">
                <li>Monthly check-and-fix visit</li>
                <li>Small repairs included (up to an agreed time/£ limit)</li>
                <li>Clear photo and video updates</li>
                <li>Smoke/CO alarm and safety checks</li>
                <li>Priority access to our trusted trades network</li>
                <li>Discounted callout rates</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-brand-cloud border-2 border-brand-teal">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-teal text-white text-xs font-medium mb-3">
                Most popular
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-2">
                Plus — from £79/month per property
              </h3>
              <p className="text-brand-ink/80 leading-relaxed mb-3">
                For busier properties, HMOs, and proactive landlords:
              </p>
              <ul className="text-brand-ink/80 leading-relaxed space-y-2 list-disc list-inside">
                <li>Weekly check-and-fix visits or extended monthly visits</li>
                <li>More time for small repairs included each month</li>
                <li>Photo and video reports with flagged actions</li>
                <li>Basic compliance and standards checks</li>
                <li>No callout fees for standard issues during working hours</li>
                <li>Coordination with tenants</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
            Get started with property maintenance support
          </h2>

          <p className="text-brand-ink/80 leading-relaxed">
            If you're a self-managing landlord in Brighton & Hove looking for
            regular property maintenance support, we're here to help. Our
            property care plans give you peace of mind that your property is
            being looked after, without the hassle of organising every small
            repair yourself.
          </p>

          <p className="text-brand-ink/80 leading-relaxed">
            Call us on [your phone number here] or get in touch to discuss your
            property maintenance needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/services"
              className="px-6 py-3 rounded-2xl bg-brand-teal text-white font-medium shadow-soft hover:bg-brand-teal/90 hover:translate-y-[1px] transition focus-ring text-center"
            >
              View property care plans
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl border-2 border-brand-navy text-brand-navy font-medium hover:bg-brand-navy hover:text-white transition focus-ring text-center"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </article>
    ),
  };

  return contentMap[params.slug] || (
    <div>
      <h1 className="text-4xl font-bold text-brand-navy mb-4">Page not found</h1>
      <p className="text-brand-ink/80">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-brand-teal hover:text-brand-teal-light transition mt-4 inline-block"
      >
        Return to homepage
      </Link>
    </div>
  );
}

