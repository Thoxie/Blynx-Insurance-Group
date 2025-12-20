// PATH: app/products/benefits/page.tsx

/**
 * Page: Employee Benefits
 * Route: /products/benefits
 * File: app/products/benefits/page.tsx
 */

import Link from "next/link";

export default function EmployeeBenefitsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Employee Benefits
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-gray-700 leading-relaxed">
          Benefits should support recruiting and retention while staying
          financially controlled. Blynx helps employers structure benefit
          programs that are competitive, compliant, and built to perform in real
          renewal cycles — not just look good on paper.
        </p>
      </header>

      {/* QUICK FRAME */}
      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">Who this is for</h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Growing teams that need a real benefits strategy</li>
            <li>• Employers frustrated with annual renewal spikes</li>
            <li>• Owners/executives balancing cost and competitiveness</li>
            <li>• Organizations needing cleaner compliance and admin</li>
            <li>• Groups with complex workforce composition</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Where benefits commonly break down
          </h2>
          <ul className="mt-4 space-y-2 text-gray-700 leading-relaxed">
            <li>• Renewals treated as paperwork instead of strategy</li>
            <li>• Plan design not aligned with recruiting realities</li>
            <li>• Cost-containment ignored until it’s too late</li>
            <li>• Vendor/admin complexity creates employee friction</li>
            <li>• Communication gaps drive low utilization and confusion</li>
          </ul>
        </div>
      </section>

      {/* CORE */}
      <section className="mt-10 grid gap-10">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Medical, Dental &amp; Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We focus on plan design, carrier fit, and cost-containment mechanics
            that survive renewal cycles. The goal is a benefits experience that
            employees understand and use — with predictable control for the
            business.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Plan design that matches employee reality</li>
            <li>• Renewal strategy and leverage points</li>
            <li>• Administrative simplicity and clean onboarding</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Voluntary Benefits &amp; Perks
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Voluntary benefits can raise perceived value without blowing up
            employer cost — when chosen deliberately. We help select offerings
            that complement the core plan and actually get used.
          </p>
          <ul className="mt-5 space-y-2 text-gray-700 leading-relaxed">
            <li>• Supplemental life and disability</li>
            <li>• Accident and hospital indemnity</li>
            <li>• Executive carve-outs when appropriate</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold text-gray-900">
            How Blynx approaches benefits programs
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We start by understanding your workforce, hiring goals, and cost
            constraints — then build a plan design and renewal strategy that
            makes sense over time. We also reduce friction: enrollment,
            communication, and admin should be clean.
          </p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="text-sm font-semibold text-gray-900">
              What we typically need to evaluate
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
              <li>• Employee count and basic workforce makeup</li>
              <li>• Current benefits and renewal timing (if applicable)</li>
              <li>• Cost goals and contribution strategy</li>
              <li>• Any pain points (admin, claims, participation, recruiting)</li>
              <li>• Desired outcomes (retention, cost control, competitiveness)</li>
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
