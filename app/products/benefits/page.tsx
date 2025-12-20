/**
 * Page: Employee Benefits
 * Route: /products/benefits
 * File: app/products/benefits/page.tsx
 */

import Link from "next/link";

export default function EmployeeBenefitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Employee Benefits
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Benefits are an operating decision: retention, cost control, and
          employee experience. We help businesses structure benefits that work
          financially and competitively.
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
          <h2 className="font-semibold text-gray-900">Group Health</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Plan design, renewals, carrier negotiations, and employee experience.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Voluntary Benefits</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Supplemental plans that improve retention without uncontrolled costs.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-gray-900">Cost Containment</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Strategies to control trend without cutting value or morale.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="font-semibold text-gray-900">Outcome-driven approach</h3>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-4xl">
          We evaluate current plan performance, renewal pressures, and market
          options, then recommend a strategy that fits your headcount, budget,
          and hiring goals.
        </p>
        <div className="mt-5">
          <Link href="/quote" className="underline font-semibold">
            Start a benefits request →
          </Link>
        </div>
      </section>
    </main>
  );
}
