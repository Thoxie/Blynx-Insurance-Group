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
    <main className="flex flex-col">
      {/* HERO (Home-style) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Products / Business
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Business coverage designed for real operating risk.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                We build business placements across liability, cyber, property,
                and executive risk—especially when underwriting is non-standard
                or coverage must be structured in layers.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                If your exposure profile doesn’t fit a retail quote workflow, we
                design a program that does.
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/business-boardroom.jpg"
                  alt="Business risk advisory and placement"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  unoptimized
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Program design for operational, liability, and executive exposures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Business Lines</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Typical coverage areas where structure and underwriting matter more
            than speed quoting.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div
              className="rounded-2xl border border-gray-200 bg-white p-6"
              id="commercial-property"
            >
              <h3 className="font-semibold text-gray-900">Commercial Property</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Buildings, CAT exposure, valuation complexity, and layered
                placements for property portfolios.
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/commercial-property.jpg"
                  alt="Commercial property coverage"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>

              <p className="mt-3 text-xs text-gray-500">
                Buildings and portfolios—structured for real exposure.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">General Liability</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Premises/operations, products, completed operations, and
                contractual risk—structured to match the business model.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Cyber</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Coverage for modern digital exposure: ransomware, business
                interruption, privacy, and incident response.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Executive / Professional Liability
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                D&amp;O and professional liability placements when governance,
                operations, or financial structure requires careful underwriting.
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
