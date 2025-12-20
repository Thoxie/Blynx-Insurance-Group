// PATH: app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {/* Intentionally blank */}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Complex insurance needs require a fixer with market access. A team
            or problem solvers.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">
            Blynx Insurance Group advises individuals, families, and businesses
            with complex risk profiles — situations that standard insurance
            channels are not built to handle. When you have been denied or
            paying expensive premiums we will find the right insurance.
          </p>

          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-gray-700">
            We are not a volume-driven retail brokerage firm. We design and
            place coverage using specialty markets, layered programs, and
            non-standard underwriting — with discretion and professionalism.
          </p>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>

          <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
            Our clients typically come to us after discovering that traditional
            brokers and direct-to-consumer platforms cannot place or structure
            their coverage appropriately.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                High-Net-Worth Individuals &amp; Families
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Complex homes, multiple residences, specialty vehicles, personal
                umbrella, unique liability exposures, and privacy concerns.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Business Owners &amp; Executives
              </h3>
              <p className="mt-3 leading-relaxed text-gray-700">
                Operating companies, holding entities, real estate portfolios,
                cyber risk, executive liability, and layered coverage programs.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Hard-to-Insure Risks</h3>
              <p className="mt-3 leading-relaxed text-gray-700">
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
              <p className="leading-relaxed text-gray-700">
                Blynx operates with a deliberate focus on fewer clients, deeper
                analysis, and broader market access — not quote volume.
              </p>

              <p className="mt-3 leading-relaxed text-gray-700">
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

      {/* PRODUCTS ROW */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Coverage Categories
          </h2>

          <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
            Select a category below to view the relevant product area.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/products/business#commercial-property",
                title: "Commercial Property",
                desc: "Buildings, CAT exposure, coverage structure, and layered programs.",
              },
              {
                href: "/products/personal#auto",
                title: "Auto",
                desc: "Specialty vehicles, higher limits, and complex underwriting.",
              },
              {
                href: "/products/personal#home",
                title: "Home",
                desc: "High-value homes, multiple residences, and property complexities.",
              },
              {
                href: "/products/life-health",
                title: "Life & Health",
                desc: "Life, disability, long-term care, and advanced planning.",
              },
              {
                href: "/products/business",
                title: "Business",
                desc: "Liability, cyber, executive risk, and program design.",
              },
              {
                href: "/products/benefits",
                title: "Employee Benefits",
                desc: "Group health and benefits strategy for teams and leadership.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                legacyBehavior
                passHref
              >
                <a className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-50">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-700">{item.desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
