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
        {/* Reduced vertical space (roughly cut in half) */}
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-14">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Blynx Insurance Group
          </p>

          {/* Updated headline to the approved positioning */}
          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Complex insurance needs require a fixer with market access.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-relaxed">
            Blynx Insurance Group advises individuals, families, and businesses
            with complex risk profiles — situations that standard insurance
            channels are not built to handle. We leverage deep carrier
            relationships, specialty markets, and non-standard underwriting
            solutions to design coverage that actually works.
          </p>

          {/* Removed: "Request a Quote" box/button separator (already in top nav) */}
          {/* Removed: "Our Approach" button (belongs in nav, not homepage body CTA) */}

          <div className="mt-8">
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
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>

          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            Our clients typically come to us after discovering that traditional
            brokers and direct-to-consumer platforms cannot place or structure
            their coverage appropriately.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                time-sensitive placements that require real market access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION(S) */}
      {/* Keep the rest of your existing homepage sections below unchanged
          unless you want me to reflow them next. */}
    </main>
  );
}
