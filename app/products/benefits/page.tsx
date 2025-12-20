// PATH: app/products/benefits/page.tsx

/**
 * Page: Employee Benefits
 * Route: /products/benefits
 * File: app/products/benefits/page.tsx
 */

import Image from "next/image";
import Link from "next/link";

export default function EmployeeBenefitsPage() {
  return (
    <main className="flex flex-col">
      {/* HERO (Home-style) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Products / Employee Benefits
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Benefits strategy designed for retention, risk, and cost control.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                We help employers structure benefits programs with smarter plan
                design, improved underwriting outcomes, and clearer long-term
                control of costs.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                Built for leadership teams that want strategy—not just renewals.
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/employee-benefits-meeting.jpeg"
                  alt="Employee benefits meeting"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  unoptimized
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Benefits planning that supports teams and leadership decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">
            Employee Benefits
          </h2>

          <p className="mt-3 max-w-3xl text-gray-700 leading-relaxed">
            Core program areas where structure and strategy can materially
            improve outcomes.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Group Health</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Plan design, carrier strategy, and renewal positioning for teams
                and leadership.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Dental &amp; Vision</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Complementary coverage structured to support retention and
                employee experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">
                Group Life &amp; Disability
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Employer-sponsored protection with underwriting considerations
                and cost controls.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-semibold text-gray-900">Executive Benefits</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Coverage and carve-outs for key leaders where underwriting and
                structure require more precision.
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
