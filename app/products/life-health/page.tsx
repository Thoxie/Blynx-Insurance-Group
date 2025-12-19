
/**
 * Page: Life & Health
 * Route: /products/life-health
 * File: app/products/life-health/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Life & Health | Blynx Insurance Group",
  description:
    "Life & health planning—life insurance, disability, long-term care, and related coverage structured for complex needs.",
};

const items = [
  {
    title: "Life Insurance",
    desc: "Term and permanent strategies aligned to family and estate objectives.",
  },
  {
    title: "Disability Insurance",
    desc: "Income protection aligned to profession, risk, and cash flow reality.",
  },
  {
    title: "Long-Term Care",
    desc: "Planning and coverage options structured with discretion.",
  },
  {
    title: "Retirement / Protection Strategy",
    desc: "Coverage aligned to long-horizon planning and risk management goals.",
  },
];

export default function LifeHealthPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Life &amp; Health
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          These policies aren’t commodities. The right structure depends on
          objectives, timelines, underwriting realities, and privacy.
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
          <h2 className="text-lg font-semibold">Typical outcome</h2>
          <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
            A plan built around objectives and underwriting reality—so coverage
            matches the purpose and behaves as expected.
          </p>
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
