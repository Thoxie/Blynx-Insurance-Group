// PATH: app/products/life-health/page.tsx

/**
 * Page: Life & Health
 * Route: /products/life-health
 * File: app/products/life-health/page.tsx
 */

import Image from "next/image";
import Link from "next/link";

export default function LifeHealthPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products / Life &amp; Health
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Life &amp; health planning with discretion.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          Life, disability, and long-term care decisions should be planned—not
          rushed into generic coverage. We align options to goals, health
          context, and real underwriting constraints.
        </p>

        {/* HERO IMAGE */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/products/life-health-consult.jpg"
              alt="Advisor consultation for life and health planning"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Planning-driven coverage for life, disability, and long-term care.
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Coverage Areas</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Life Insurance</li>
            <li>• Disability Insurance</li>
            <li>• Long-Term Care</li>
            <li>• Supplemental planning support</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Approach</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We focus on eligibility, underwriting realities, and a placement
            strategy that matches the client’s objectives—especially when
            standard channels are limited.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            This is planning-first coverage, handled with professionalism and
            discretion.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <Link href="/quote" className="text-sm font-semibold underline">
          Start intake →
        </Link>
      </div>
    </main>
  );
}
