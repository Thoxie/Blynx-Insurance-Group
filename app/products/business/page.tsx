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
          Business coverage breaks when the risk profile is complex, the market is
          tight, or the program needs to be structured — not quoted. Blynx works
          with specialty carriers and non-standard markets to design coverage that
          holds up when it matters.
        </p>
      </header>

      {/* QUICK FRAME */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Owner-operated businesses and high-responsibility operators</li>
            <li>• Holding entities and real estate portfolios</li>
            <li>• Firms with contractual insurance requirements</li>
            <li>• Businesses with prior losses or tightening-market challenges</li>
            <li>• Situations needing layered limits and clean coordination</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Where standard placement fails
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Carrier appetite mismatch (declines, exclusions, or bad terms)</li>
            <li>• Limits don’t align with contracts or real exposure</li>
            <li>• Property values/CAT assumptions are wrong</li>
            <li>• Program isn’t structured for claims defensibility</li>
            <li>• Policies don’t coordinate, creating gaps in the stack</li>
          </ul>
        </div>
      </section>

      {/* CORE LINES */}
      <section className="mt-10 grid gap-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">General Liability</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Liability should match how you actually operate, what your contracts
            require, and where claims would land. We focus on coverage structure,
            exclusions, and coordination with the rest of the program so you’re not
            “insured on paper” only.
          </p>
        </div>

        {/* KEEP anchor for homepage tile */}
        <div
          id="commercial-property"
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          <h2 className="text-xl font-semibold text-gray-900">Commercial Property</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Commercial property placements often fail because valuation, deductibles,
            CAT exposure, and coverage structure are treated like a form-fill. We
            approach property as a program design problem — then place it with the
            right market for the asset and the risk profile.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Replacement cost and valuation alignment</li>
            <li>• Deductible strategy that’s realistic (not just “lowest premium”)</li>
            <li>• CAT exposure considerations and market positioning</li>
            <li>• Coordination with liability and umbrella/excess layers</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Cyber &amp; Executive Risk
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Cyber, management liability, and other executive-risk placements require
            tight underwriting alignment and clear coverage intent. We focus on the
            terms that drive real outcomes — not just whether the policy can be issued.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            How Blynx approaches business placements
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We start by mapping exposure and constraints (operations, contracts, assets,
            timeline), then build the coverage architecture first — primary lines,
            coordination points, and where excess/layers belong. Only then do we go to
            market and negotiate structure, terms, and fit.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">
              What we typically need to evaluate
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Current policies and renewal dates (if applicable)</li>
              <li>• Basic operations overview and key exposures</li>
              <li>• Any contractual insurance requirements</li>
              <li>• Loss history / known underwriting obstacles</li>
              <li>• Time sensitivity (new acquisition, closing, lender request, etc.)</li>
            </ul>
          </div>

          {/* Keep link; this is not a homepage button */}
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
