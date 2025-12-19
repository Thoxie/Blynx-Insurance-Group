/**
 * Page: Personal Insurance
 * Route: /products/personal
 * File: app/products/personal/page.tsx
 */

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Insurance | Blynx Insurance Group",
  description:
    "Personal insurance solutions for complex needs—home, auto, umbrella, specialty coverage, and risk structuring.",
};

const items = [
  {
    title: "Homeowners & High-Value Homes",
    desc: "Structure coverage for rebuild risk, valuables, and complex property profiles.",
  },
  {
    title: "Auto & Specialty Auto",
    desc: "Higher limits, complex drivers, specialty vehicles, and proper liability alignment.",
  },
  {
    title: "Umbrella & Excess Liability",
    desc: "Coordinate limits across policies to reduce gaps and protect net worth.",
  },
  {
    title: "Condo / Renters / Landlord",
    desc: "Correctly handle ownership structures, loss assessments, and liability exposures.",
  },
  {
    title: "Recreational & Watercraft",
    desc: "Boat, watercraft, and specialty recreational exposures placed appropriately.",
  },
];

export default function PersonalProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Personal Insurance
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Personal coverage gets complicated fast when assets, lifestyle, and
          liability don’t fit standard assumptions. We design a structure first,
          then place coverage with the right markets.
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
            A clean coverage map—limits, gaps, and coordination—so the program
            behaves the way you expect when it matters.
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

