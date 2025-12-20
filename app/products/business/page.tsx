// PATH: app/products/business/page.tsx

/**
 * Page: Business Insurance
 * Route: /products/business
 * File: app/products/business/page.tsx
 */

import Image from "next/image";
import Link from "next/link";

export default function BusinessInsurancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products / Business
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Business insurance built for complex operations.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          We structure business coverage using specialty markets, layered
          programs, and carrier relationships that extend beyond standard retail
          quoting.
        </p>

        {/* HERO IMAGE */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/products/business-boardroom.jpg"
              alt="Business coverage strategy meeting"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Program design for operational, liability, and executive exposures.
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Core Areas</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li id="commercial-property">• Commercial Property</li>
            <li>• General Liability &amp; Umbrella</li>
            <li>• Professional / E&amp;O</li>
            <li>• Cyber Liability</li>
            <li>• D&amp;O / Executive Liability</li>
            <li>• Workers’ Comp coordination</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">How We Work</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We start with exposure mapping (operations, contracts, assets,
            counterparties), then build a placement strategy—often across
            multiple carriers and layers.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            The goal is not just “coverage,” but a structure that holds up under
            real claims conditions.
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
