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
          Commercial insurance should match the way you actually operate — your
          contracts, exposures, locations, and growth plans. We design programs
          that are defensible and insurable.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/quote"
            className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Ask a question
          </Link>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">General Liability</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Contracts, certificates, additional insured requirements, and
            real-world operational risk.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Property & CAT Exposure</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Locations, valuation, business interruption, and catastrophe-driven
            underwriting constraints.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Cyber & Executive Risk</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Cyber, crime, EPLI, D&O, and coverage alignment with real exposure.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900">Typical clients</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Owner-operated businesses</li>
            <li>• Real estate holding and operating entities</li>
            <li>• Professional services and higher-liability industries</li>
            <li>• Companies facing tightening markets or non-renewals</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">Program design first</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We map exposures, identify weak points, then structure coverage
            that carriers can actually underwrite — including layered or excess
            placements when necessary.
          </p>
          <div className="mt-5">
            <Link href="/quote" className="underline font-semibold">
              Start a quote request →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

