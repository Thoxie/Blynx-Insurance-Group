
/**
 * Page: Business Insurance
 * Route: /products/business
 * File: app/products/business/page.tsx
 */

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Insurance | Blynx Insurance Group",
  description:
    "Business insurance strategy and placement—general liability, property, cyber, professional liability, workers’ comp, and more.",
};

const items = [
  {
    title: "General Liability",
    desc: "Foundational coverage aligned to operations, contracts, and real exposure.",
  },
  {
    title: "Commercial Property",
    desc: "Protect locations, equipment, and business interruption exposures appropriately.",
  },
  {
    title: "Commercial Auto",
    desc: "Fleet and non-owned exposures coordinated with umbrella/excess.",
  },
  {
    title: "Professional Liability (E&O)",
    desc: "Coverage aligned to services delivered and contract language.",
  },
  {
    title: "Cyber Liability",
    desc: "Modern cyber risk strategy with realistic response coverage.",
  },
  {
    title: "Workers’ Compensation",
    desc: "Placement and program strategy that fits your workforce profile.",
  },
  {
    title: "Umbrella / Excess",
    desc: "Limit strategy that closes gaps across GL, auto, and other lines.",
  },
];

export default function BusinessProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Business Insurance
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          For business owners, insurance is a risk instrument—misalignment shows
          up during claims, renewals, and contract review. We build a structure
          that matches operations, then place it with strong markets.
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
              industry, revenue, payroll, locations, vehicles, contracts.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Structure:</span>{" "}
              map exposures to lines, limits, and coordination.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Placement:</span>{" "}
              market access and options aligned to the structure.
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
