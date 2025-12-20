/**
 * Page: Life & Health
 * Route: /products/life-health
 * File: app/products/life-health/page.tsx
 */

import Link from "next/link";

export default function LifeHealthPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Life & Health
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Life and health planning requires precision: underwriting strategy,
          carrier fit, and long-term structure. We help clients secure coverage
          even when the situation is non-standard.
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
          <h2 className="font-semibold text-gray-900">Life Insurance</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Term, permanent, estate-driven planning, and underwriting strategy.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Disability</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Income protection structured for executives and business owners.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Long-Term Care</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Options and structure based on risk tolerance and long-term planning.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-semibold text-gray-900">Hard-to-place solutions</h3>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl">
          If underwriting is complex due to medical history, travel, business
          exposure, or financial structure, we manage the process strategically
          and bring the right carriers into the conversation.
        </p>
        <div className="mt-5">
          <Link href="/quote" className="underline font-semibold">
            Start a request →
          </Link>
        </div>
      </section>
    </main>
  );
}
