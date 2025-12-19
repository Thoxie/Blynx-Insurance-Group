
/**
 * Page: Products
 * Route: /products
 * File: app/products/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Blynx Insurance Group",
  description:
    "Explore personal, business, benefits, and life & health insurance solutions from Blynx Insurance Group.",
};

const cards = [
  {
    title: "Personal Insurance",
    desc: "Home, auto, umbrella, specialty—structured for complex needs.",
    href: "/products/personal",
  },
  {
    title: "Business Insurance",
    desc: "Liability, property, cyber, workers’ comp, and more—aligned to operations.",
    href: "/products/business",
  },
  {
    title: "Employee Benefits",
    desc: "Benefits strategy for teams—group health and coverage design.",
    href: "/products/benefits",
  },
  {
    title: "Life & Health",
    desc: "Life, disability, long-term care—planned with discretion.",
    href: "/products/life-health",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Products
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          We help clients place coverage across personal, business, benefits,
          and life & health—built around exposure, not assumptions.
        </p>

        <div className="mt-6">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
          >
            <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{c.desc}</p>
            <div className="mt-4 text-sm font-semibold underline">
              Explore →
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
