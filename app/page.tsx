/**
 * Page: Home
 * Route: /
 * File: app/page.tsx
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Blynx Insurance Group
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Complex insurance needs require broader market access.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-relaxed">
            Blynx Insurance Group advises individuals, families, and businesses
            with complex risk profiles — situations that standard insurance
            channels are not built to handle.
          </p>

          <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
            We operate as an insurance advisory and placement firm, leveraging
            deep carrier relationships, specialty markets, and non-standard
            underwriting solutions to design coverage that actually works.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Request a Quote
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Who We Serve
          </h2>

          <p className="mt-4 max-w-3xl text-gray-700 leading-relaxed">
            Our clients typically come to us after discovering that traditional
            brokers and direct-to-consumer platforms cannot place or structure
            their coverage appropriately.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                High-Net-Worth Individuals & Families
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Complex homes, multiple residences, specialty vehicles, personal
                umbrella, unique liability exposures, and privacy concerns.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Business Owners & Executives
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Operating companies, holding entities, real estate portfolios,
                cyber risk, executive liability, and layered coverage programs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Hard-to-Insure Risks
              </h3>
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
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Blynx Insurance Group
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-gray-700 leading-relaxed">
                We are not a volume-driven retail brokerage. Blynx operates with
                a deliberate focus on fewer clients, deeper analysis, and
                broader market access.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Our role is to understand the full risk picture — personal,
                corporate, and structural — then design and place insurance
                solutions using carriers and programs that most brokers cannot
                access.
              </p>
            </div>

            <ul className="space-y-4 text-gray-700">
              <li>• Access to specialty and excess markets</li>
              <li>• Strategic program design, not policy quoting</li>
              <li>• Carrier-agnostic advisory approach</li>
              <li>• Discretion, privacy, and professionalism</li>
              <li>• Experience with complex and layered risks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRODUCTS OVERVIEW */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-gray-900">
            Insurance Solutions
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Link
              href="/products/personal"
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-900">
                Personal Insurance
              </h3>
              <p className="mt-3 text-gray-700 text-sm">
                Home, auto, umbrella, specialty assets, and personal liability
                strategies.
              </p>
            </Link>

            <Link
              href="/products/business"
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-900">
                Business Insurance
              </h3>
              <p className="mt-3 text-gray-700 text-sm">
                Property, liability, cyber, executive risk, and complex
                commercial programs.
              </p>
            </Link>

            <Link
              href="/products/benefits"
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-900">
                Employee Benefits
              </h3>
              <p className="mt-3 text-gray-700 text-sm">
                Group health, benefits strategy, and cost-containment solutions.
              </p>
            </Link>

            <Link
              href="/products/life-health"
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
            >
              <h3 className="font-semibold text-gray-900">
                Life & Health
              </h3>
              <p className="mt-3 text-gray-700 text-sm">
                Life insurance, disability, long-term care, and advanced planning.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Let’s solve what others couldn’t.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
            If your insurance situation requires deeper analysis, broader market
            access, or a different level of discretion, we should talk.
          </p>

          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-block rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
