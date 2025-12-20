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
          Personal insurance breaks down when the assets are high-value, the
          lifestyle is complex, or the liability exposure is real. Blynx designs
          personal coverage the way it should be handled — engineered, coordinated,
          and placed with markets that can actually underwrite it.
        </p>
      </header>

      {/* QUICK FRAME */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• High-value homes and multiple residences</li>
            <li>• Specialty vehicles and non-standard usage</li>
            <li>• Elevated liability exposure or public profile risk</li>
            <li>• Complex household structures (drivers, properties, entities)</li>
            <li>• Situations that require discretion and precise coordination</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Where standard placement fails
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Wrong valuation and replacement-cost assumptions</li>
            <li>• Coverage gaps between home/auto/umbrella</li>
            <li>• Low-quality terms, exclusions, or weak claims outcomes</li>
            <li>• “One-size-fits-all” underwriting for non-standard assets</li>
            <li>• Umbrella limits that don’t match real exposure</li>
          </ul>
        </div>
      </section>

      {/* CORE LINES */}
      <section className="mt-10 grid gap-10">
        {/* Keep anchor for homepage tile */}
        <div id="home" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Home</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            High-value homes introduce valuation complexity, higher reconstruction
            costs, and coverage structure decisions that standard policies often
            miss. We focus on the terms that matter — coverage intent, limits,
            deductibles, and how the policy will behave in a real claim.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Replacement cost and valuation alignment</li>
            <li>• Deductible strategy that matches actual risk tolerance</li>
            <li>• Secondary residences and complex schedules</li>
            <li>• Coverage coordination with umbrella and liability</li>
          </ul>
        </div>

        {/* Keep anchor for homepage tile */}
        <div id="auto" className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Auto</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Auto becomes complex fast when vehicles are specialty/high-value,
            household drivers vary, or limits need to align with umbrella strategy.
            We place auto with the right market for the risk — then coordinate it
            cleanly with the broader program.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Specialty and high-value vehicles</li>
            <li>• Higher limits and liability structure</li>
            <li>• Driver complexity and underwriting fit</li>
            <li>• Program coordination with umbrella/excess</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Umbrella &amp; Liability
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Umbrella coverage should be designed around actual exposure — assets,
            lifestyle, and liability realities — then coordinated across the
            underlying policies so there are no gaps in the stack.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Limit strategy based on exposure (not defaults)</li>
            <li>• Clean coordination across underlying policies</li>
            <li>• Terms review to avoid “surprises” in a claim</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            How Blynx approaches personal placements
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We begin by mapping assets, exposures, and constraints, then design
            the coverage architecture first — home, auto, umbrella, and specialty
            lines — so it coordinates as a single program. Only then do we place
            it with carriers that match the underwriting reality.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">
              What we typically need to evaluate
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Homes/properties and approximate values (even ranges help)</li>
              <li>• Vehicle list and drivers</li>
              <li>• Current policies and renewal dates (if applicable)</li>
              <li>• Any prior losses or underwriting obstacles</li>
              <li>• Desired liability posture (umbrella strategy)</li>
            </ul>
          </div>

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
