// PATH: app/products/personal/page.tsx

/**
 * Page: Personal Insurance
 * Route: /products/personal
 * File: app/products/personal/page.tsx
 */

import Image from "next/image";
import Link from "next/link";

export default function PersonalInsurancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products / Personal
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Personal coverage for high-value and non-standard risk.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          We place high-value personal lines with discretion—built for complex
          properties, specialty vehicles, higher limits, and privacy-sensitive
          situations.
        </p>

        {/* HERO IMAGE */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/products/home-luxury.webp"
              alt="High-value residential property"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            High-value personal coverage placed correctly—without retail quoting.
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Personal Lines</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li id="home">• Homeowners (high-value / multiple residences)</li>
            <li id="auto">• Personal Auto (specialty / high limits)</li>
            <li>• Umbrella / Excess Liability</li>
            <li>• Valuable Articles / Collections</li>
            <li>• Specialty assets and non-standard underwriting</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Auto (Exotic)</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            When the asset, usage, limits, or history creates friction in
            standard channels, we design the placement accordingly.
          </p>

          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/products/auto-exotics.webp"
              alt="Exotic vehicles parked"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Specialty auto placed for higher limits and non-standard underwriting.
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
