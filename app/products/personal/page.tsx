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
          <h2 className="font-semibold text-gray-900">Home & Property</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Primary and secondary homes, high-value rebuild cost, specialty
            materials, coastal exposure, and higher-limit structures.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Auto & Specialty Vehicles</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Premium auto, exotic/collector vehicles, agreed value, storage
            concerns, and multi-driver households.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Umbrella & Liability</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Proper umbrella structure, higher limits, personal risk factors,
            and aligning liability across underlying policies.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="font-semibold text-gray-900">Common complexity factors</h3>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Multiple residences and layered ownership structures</li>
            <li>• Prior claims, cancellations, or non-renewals</li>
            <li>• Coastal/wildfire zones and catastrophe-model impacts</li>
            <li>• Specialty assets and unusual liability exposure</li>
            <li>• Need for discretion and simplified communication</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="font-semibold text-gray-900">How Blynx approaches it</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We start with the risk picture — not the carrier. Then we design a
            structure that fits the client and bring the right markets to the
            table, including specialty and excess options when appropriate.
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
