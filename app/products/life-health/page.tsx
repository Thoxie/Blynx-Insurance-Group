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
    <main className="flex flex-col">
      {/* HERO (Home-style) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Products / Life &amp; Health
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Planning-driven coverage for life, disability, and health risk.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                When underwriting is complex or coverage must match a larger
                planning strategy, we build the placement with discretion and
                clarity.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                Designed for clients who need more than an application and a
                checkbox.
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/hero-meeting.jpg.webp"
                  alt="Life and health planning discussion"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  unoptimized
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Life &amp; health coverage aligned with planning and underwriting reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Life &amp; Health</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Common areas where structure, underwriting, and long-term outcomes
            matter most.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Life Insurance</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Coverage aligned with family protection, estate planning, and
                business needs—especially when underwriting is complex.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Disability Insurance</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Income protection with the right definitions, riders, and
                structure for professionals and business owners.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Long-Term Care</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Planning-oriented solutions designed to protect assets and
                reduce future care risk.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Health Planning</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Guidance and coordination when coverage needs to align with
                financial planning, benefits, or life changes.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/products" className="text-sm font-semibold underline">
              Back to Products →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
