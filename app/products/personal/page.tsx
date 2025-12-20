// PATH: app/products/personal/page.tsx

/**
 * Page: Personal Insurance
 * Route: /products/personal
 * File: app/products/personal/page.tsx
 */

import Link from "next/link";

export default function PersonalInsurancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Personal Insurance
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          For clients with meaningful assets, multiple residences, specialty
          vehicles, and elevated liability exposure, personal insurance has to
          be engineered — not quoted.
        </p>
      </header>

      <section className="grid gap-10">
        {/* Added id="home" so the homepage tile can deep-link here */}
        <div id="home" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Home &amp; Property</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            High-value homes and multiple residences introduce valuation,
            replacement-cost, and coverage-structure issues that standard
            policies often fail to address.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We evaluate exposures, coordinate limits, and structure the program
            to protect both the asset and the broader liability picture.
          </p>
        </div>

        {/* Added id="auto" so the homepage tile can deep-link here */}
        <div id="auto" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Auto &amp; Specialty Vehicles
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Specialty vehicles, higher limits, multiple drivers, and unique use
            cases require tighter underwriting and better carrier fit.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We structure auto coverage to align with umbrella strategy, household
            exposures, and asset protection goals.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Umbrella &amp; Liability
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Umbrella coverage should be designed around the actual exposure
            profile — not a default limit. The program has to coordinate across
            multiple underlying policies cleanly.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Common complexity factors
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Multiple residences and layered property schedules</li>
            <li>• Specialty vehicles and non-standard usage</li>
            <li>• Higher liability exposure and public profile risk</li>
            <li>• Prior claims history or market tightening</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            How Blynx approaches it
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We begin with a risk map, then build the placement strategy across
            the appropriate carriers and programs — prioritizing structure,
            coordination, and defensibility.
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
