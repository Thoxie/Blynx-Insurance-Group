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
    <main className="flex flex-col">
      {/* HERO (match Home page layout) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* Left: Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Products / Personal
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Personal coverage for high-value and non-standard risk.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                We place high-value personal lines with discretion—built for
                complex properties, specialty vehicles, higher limits, and
                privacy-sensitive situations.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                If standard carriers hesitate or a retail broker can’t structure
                it correctly, we build a placement strategy that fits the actual
                exposure.
              </p>

              <div className="mt-6">
                <Link href="/quote" className="text-sm font-semibold underline">
                  Start intake →
                </Link>
              </div>
            </div>

            {/* Right: Image (top-right like Home) */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <Image
                  src="/images/products/home-luxury.webp"
                  alt="High-value home coverage"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                  unoptimized
                />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                High-value homes, multiple residences, and complex underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Personal Lines</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            These are the most common coverage areas clients need help
            structuring when limits, assets, privacy, or claim history create
            friction in standard channels.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900" id="home">
                Home
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                High-value homes, multiple residences, rebuild complexity, CAT
                exposure, specialty construction features, and tighter carrier
                underwriting.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900" id="auto">
                Auto
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Specialty vehicles, high limits, complex usage, prior claims,
                and non-standard underwriting requirements.
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/products/auto-exotics.webp"
                  alt="Exotic vehicles parked"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Specialty auto placements for higher limits and complex profiles.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Umbrella / Excess Liability
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Layered liability protection when asset values, exposure, or
                carrier appetites require more thoughtful structure.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Valuable Articles &amp; Specialty Assets
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Collections, jewelry, watches, fine art, specialty assets, and
                coverage gaps created by market tightening or exclusions.
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
