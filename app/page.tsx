// PATH: app/page.tsx

/**
 * Page: Home
 * Route: /
 * File: app/page.tsx
 */

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left: Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                {/* intentionally blank to match your current design */}
              </p>

              <h1 className="mt-2 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Complex insurance needs require a fixer with market access. A team of problem solvers. Fast and easy.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                Blynx Insurance Group advises individuals, families, and
                businesses with complex risk profiles — situations that standard
                insurance channels are not built to handle. When you have been
                denied or paying expensive premiums we will find the right
                insurance.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                We are not a volume-driven retail brokerage firm. We design and
                place coverage using specialty markets, layered programs, and
                non-standard underwriting — with discretion and professionalism.
              </p>
            </div>

            {/* Right: Image */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                <Image
                  src="/images/business-boardroom.jpg"
                  alt="Advisory-led placement strategy for complex risk"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Advisory-led placement strategy for complex risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Our clients typically come to us after discovering that traditional
            brokers and direct-to-consumer platforms cannot place or structure
            their coverage appropriately.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                High-Net-Worth Individuals &amp; Families
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Complex homes, multiple residences, specialty vehicles, personal
                umbrella, unique liability exposures, and privacy concerns.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Business Owners &amp; Executives
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Operating companies, holding entities, real estate portfolios,
                cyber risk, executive liability, and layered coverage programs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Hard-to-Insure Risks</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Prior claims history, specialty industries, non-standard assets,
                emerging risks, or coverage gaps created by market tightening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BLYNX */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Blynx Insurance Group
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Blynx operates with a deliberate focus on fewer clients, deeper
                analysis, and broader market access — not quote volume.
              </p>

              <p className="mt-3 text-gray-700 leading-relaxed">
                We map the full risk picture — personal, corporate, and
                structural — then build a placement strategy across carriers and
                programs that most brokers cannot access.
              </p>
            </div>

            <ul className="space-y-3 text-gray-700">
              <li>• Access to specialty and excess markets</li>
              <li>• Strategic program design, not policy quoting</li>
              <li>• Carrier-agnostic advisory approach</li>
              <li>• Discretion, privacy, and professionalism</li>
              <li>• Experience with complex and layered risks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCTS ROW (6 boxes) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Coverage Categories
          </h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Select a category below to view the relevant product area.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/products/business#commercial-property"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Commercial Property</h3>
              <p className="mt-3 text-sm text-gray-700">
                Buildings, CAT exposure, coverage structure, and layered programs.
              </p>
            </Link>

            <Link
              href="/products/personal#auto"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Auto</h3>
              <p className="mt-3 text-sm text-gray-700">
                Specialty vehicles, higher limits, and complex underwriting.
              </p>
            </Link>

            <Link
              href="/products/personal#home"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Home</h3>
              <p className="mt-3 text-sm text-gray-700">
                High-value homes, multiple residences, and property complexities.
              </p>
            </Link>

            <Link
              href="/products/life-health"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Life &amp; Health</h3>
              <p className="mt-3 text-sm text-gray-700">
                Life, disability, long-term care, and advanced planning.
              </p>
            </Link>

            <Link
              href="/products/business"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Business</h3>
              <p className="mt-3 text-sm text-gray-700">
                Liability, cyber, executive risk, and program design.
              </p>
            </Link>

            <Link
              href="/products/benefits"
              className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-100"
            >
              <h3 className="font-semibold text-gray-900">Employee Benefits</h3>
              <p className="mt-3 text-sm text-gray-700">
                Group health and benefits strategy for teams and leadership.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
