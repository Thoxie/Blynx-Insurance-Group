// PATH: app/products/business/page.tsx

/**
 * Page: Business Insurance
 * Route: /products/business
 * File: app/products/business/page.tsx
 */

import Link from "next/link";

export default function BusinessInsurancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Business Insurance
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Business risk often requires layered programs, coordinated limits, and
          carrier strategy — not a single-policy quote.
        </p>
      </header>

      <section className="grid gap-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">General Liability</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Liability programs should match contractual obligations, operational
            exposures, and the real claim profile — including defense strategy
            and exclusions.
          </p>
        </div>

        {/* Renamed + added id so homepage tile can deep-link here */}
        <div
          id="commercial-property"
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Commercial Property</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Property placements require careful valuation, CAT modeling,
            deductibles, and layered coverage structure — especially in tighter
            markets.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We build the program around the asset and the business reality —
            not a generic form submission.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Cyber &amp; Executive Risk
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Cyber, D&amp;O, EPLI, and professional liability require underwriting
            alignment and defensible coverage — especially for higher-profile
            ownership or leadership teams.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Typical clients</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Owner-operated businesses, holding entities, real estate portfolios,
            and companies with contractual insurance requirements or complex
            exposure profiles.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Program design first
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We design the coverage architecture first — then place it with the
            appropriate carriers and markets to achieve the best structure,
            pricing, and claims defensibility.
          </p>

          <div className="mt-6">
            <Link href="/quote" className="underline text-gray-900">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
