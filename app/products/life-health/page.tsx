// PATH: app/products/life-health/page.tsx

/**
 * Page: Life & Health
 * Route: /products/life-health
 * File: app/products/life-health/page.tsx
 */

import Link from "next/link";

export default function LifeHealthPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Life &amp; Health
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Life and health planning should align with real-world obligations:
          family security, business continuity, income protection, and long-term
          risk. Blynx helps structure coverage that fits the actual scenario —
          not a generic policy template.
        </p>
      </header>

      {/* QUICK FRAME */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Families protecting income and long-term security</li>
            <li>• Business owners with continuity obligations</li>
            <li>• Clients coordinating personal + business exposure</li>
            <li>• Higher underwriting complexity or time constraints</li>
            <li>• Situations requiring discretion and structure</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Where standard placement fails
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Coverage amount chosen without a real needs analysis</li>
            <li>• Policy type doesn’t match timeline and obligations</li>
            <li>• Underwriting complexity isn’t managed correctly</li>
            <li>• Business needs aren’t coordinated with personal planning</li>
            <li>• Disability/LTC ignored until it becomes urgent</li>
          </ul>
        </div>
      </section>

      {/* CORE */}
      <section className="mt-10 grid gap-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Life Insurance</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Life insurance should be structured around the purpose: family
            security, estate planning, debt coverage, or business continuity. We
            help select the right policy type and carrier fit, then manage the
            process so the outcome is clean and defensible.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Term and permanent strategies</li>
            <li>• Coverage sizing aligned with real obligations</li>
            <li>• Business-continuity coordination where applicable</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Disability &amp; Income Protection
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Disability is one of the most financially disruptive risks. We focus
            on income definition, benefit structure, and terms that matter —
            especially for business owners and higher earners.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Benefit design that matches income reality</li>
            <li>• Definitions, exclusions, and contract strength</li>
            <li>• Coordination with business exposure</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Long-Term Care &amp; Health Planning
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Long-term care risk is often ignored because it’s uncomfortable.
            Planning is about structure and timing. We help evaluate options and
            build a plan that fits the situation without overpaying or
            overcomplicating.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            How Blynx approaches life &amp; health placements
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We start with the purpose and the constraints (timeline, underwriting
            complexity, business obligations), then structure the coverage first.
            From there, we manage carrier fit and execution so the policy matches
            the intended outcome.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">
              What we typically need to evaluate
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• The purpose of coverage (family, business, obligations)</li>
              <li>• Approximate coverage range (even a goal range)</li>
              <li>• Timeline and any underwriting complexity factors</li>
              <li>• Existing policies (if applicable)</li>
              <li>• Business ownership context (if relevant)</li>
            </ul>
          </div>

          <div className="mt-6">
            <Link href="/quote" className="underline text-gray-900">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
