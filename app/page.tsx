// PATH: app/page.tsx

/**
 * Page: Home
 * Route: /
 * File: app/page.tsx
 */

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        {/* Tightened vertical spacing */}
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            Blynx Insurance Group
          </p>

          {/* KEEP tagline in homepage body */}
          <h1 className="mt-3 max-w-4xl text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Complex insurance needs require a fixer with market access.
          </h1>

          {/* Tightened copy: fewer lines, less spacing */}
          <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed">
            Blynx Insurance Group advises individuals, families, and business
            owners with complex risk profiles — situations that standard
            insurance channels are not built to handle.
          </p>

          <p className="mt-3 max-w-3xl text-base md:text-lg text-gray-700 leading-relaxed">
            We leverage specialty carriers and non-admitted markets to structure
            coverage for high-value assets, layered risk, and hard-to-place
            exposures.
          </p>

          {/* Removed per instruction:
              - Request a Quote box/section (duplicate)
              - Our Approach box/button (not needed on homepage)
              - Start a Conversation CTA (not needed)
          */}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="border-b border-gray-200 bg-gray-50">
        {/* Tightened spacing */}
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Who We Serve</h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Clients engage us when traditional brokers and direct-to-consumer
            platforms cannot place or structure coverage appropriately.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-base font-semibold text-gray-900">
                Affluent Individuals & Families
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                High-value homes, multiple residences, collections, umbrella,
                specialty auto, and unique personal exposures.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-base font-semibold text-gray-900">
                Business Owners
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Complex liability, property, cyber, executive risk, and layered
                placements across admitted and non-admitted markets.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="text-base font-semibold text-gray-900">
                Hard-to-Place Risk
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Prior losses, unusual exposures, non-standard underwriting, or
                time-sensitive placements requiring direct market access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
