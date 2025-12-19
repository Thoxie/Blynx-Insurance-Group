import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Services
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Complex insurance needs require broader market access. We help clients
          evaluate risk, structure coverage, and place policies with speed and
          discretion.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Request a call
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Our approach
          </Link>
        </div>
      </header>

      <section className="grid gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Coverage Review</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Identify gaps, redundancies, and hidden exclusions across personal
            and commercial policies. Prioritize changes that materially reduce
            downside risk.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Market Placement</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Access broader markets and carriers for complex risks — including
            layered programs, specialty lines, and business exposures.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Business Risk Management</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Coverage strategy tied to operations: liability, property, cyber,
            EPLI, and other business-critical protections.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Ongoing Advocacy</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Renewal management, carrier communication, documentation support,
            and help navigating time-sensitive changes when life or business
            conditions shift.
          </p>
        </div>
      </section>

      <section className="mt-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Discovery:</span>{" "}
              brief intake to understand your risk, timelines, and constraints.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Structure:</span>{" "}
              coverage strategy that clarifies what matters and what doesn’t.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Placement:</span>{" "}
              market execution with carrier options aligned to the structure.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Ongoing:</span>{" "}
              renewals, changes, and advocacy when the situation evolves.
            </li>
          </ol>

          <div className="mt-4">
            <Link href="/contact" className="text-gray-900 underline">
              Start with a short request →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
