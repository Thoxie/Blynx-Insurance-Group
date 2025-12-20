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
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products / Employee Benefits
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Employee benefits strategy for teams and leadership priorities.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          We help employers structure benefits with clarity—balancing cost,
          coverage, compliance, and retention. This is benefits planning, not
          commodity enrollment.
        </p>

        {/* HERO IMAGE */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/products/employee-benefits-meeting.jpeg"
              alt="Employee benefits strategy meeting"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Benefits strategy designed for retention, risk, and cost control.
          </p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Core Benefits</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Group Medical</li>
            <li>• Dental &amp; Vision</li>
            <li>• Life / Supplemental Benefits</li>
            <li>• Enrollment and plan communication support</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold text-gray-900">Approach</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            We align plan design with leadership priorities and employee needs,
            then manage carrier placement and renewal strategy with discipline.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            The goal is stable coverage and a predictable path through renewal—
            without surprise gaps.
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
