/**
 * Page: Employee Benefits
 * Route: /products/benefits
 * File: app/products/benefits/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Employee Benefits | Blynx Insurance Group",
  description:
    "Employee benefits strategy and placement—group health and benefits design aligned to your workforce and budget.",
};

const items = [
  {
    title: "Group Health Strategy",
    desc: "Plan design aligned to hiring goals, retention, and cost control.",
  },
  {
    title: "Dental & Vision",
    desc: "Complementary benefits structured for adoption and satisfaction.",
  },
  {
    title: "Disability",
    desc: "Income protection strategy aligned to role risk and workforce profile.",
  },
  {
    title: "Benefits Administration Support",
    desc: "Operational help selecting structures that reduce friction at renewal.",
  },
];

export default function BenefitsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Employee Benefits
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Benefits are a talent instrument and a cost center. We build a benefits
          strategy that makes sense on paper—and works in real life.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Request a call
          </Link>
        </div>
      </header>

      <section className="grid gap-4">
        {items.map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold">{x.title}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{x.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">How we start</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              <span className="font-semibold text-gray-900">Snapshot:</span>{" "}
              headcount, eligibility, current spend, renewal timing.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Design:</span>{" "}
              plan options aligned to goals and budget.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Placement:</span>{" "}
              carrier options and implementation plan.
            </li>
          </ol>
          <div className="mt-4">
            <Link href="/quote" className="underline font-semibold">
              Start a quote request →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

