// PATH: app/page.tsx

/**
 * Page: Home
 * Route: /
 * File: app/page.tsx
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        {/* Tightened spacing vs prior (reduced vertical padding) */}
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Blynx Insurance Group
          </p>

          {/* KEEP this tagline in the homepage content (per instruction) */}
          <h1 className="mt-3 max-w-4xl text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Complex insurance needs require a fixer with market access.
          </h1>

          {/* Tightened copy spacing */}
          <p className="mt-5 max-w-3xl text-lg text-gray-700 leading-relaxed">
            Blynx Insurance Group advises individuals, families, and businesses
            with complex risk profiles — situations that standard insurance
            channels are not built to handle.
          </p>

          <p className="mt-3 max-w-3xl text-lg text-gray-700 leading-relaxed">
            We operate as an insurance advisory and placement firm, leveraging
            specialty carriers and non-admitted markets to structure coverage
            for high-value assets, layered risk, and hard-to-place exposures.
          </p>

          {/* REMOVED per instruction:
              - Request a Quote box/CTA (you already have Get a Quote in the top nav)
              - Our Approach box/CTA (doesn't belong as a homepage scroll button)
          */}

          {/* Keep a single, clean primary CTA that does not duplicate “Get a Quote” */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Our clients typically come to us after discovering that traditional
            brokers and direct-to-consumer platforms cannot place or structure
            their coverage appropriately.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Affluent Individuals & Families
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                High-value homes, multiple residences, collections, umbrella,
                specialty auto, and unique personal exposures.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Business Owners
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Complex liability, property, cyber, executive risk, and layered
                placements across admitted and non-admitted markets.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="text-base font-semibold text-gray-900">
                Hard-to-Place Risk
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Prior losses, unusual exposures, non-standard underwriting, or
                time-sensitive placements requiring direct market access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
