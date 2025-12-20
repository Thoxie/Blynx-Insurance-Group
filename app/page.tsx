// PATH: app/products/page.tsx

/**
 * Page: Products
 * Route: /products
 * File: app/products/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Blynx Insurance Group",
  description:
    "Explore personal, business, employee benefits, and life & health insurance solutions from Blynx Insurance Group.",
};

const cards = [
  {
    title: "Commercial Property",
    desc: "Buildings, CAT exposure, coverage structure, and layered programs.",
    href: "/products/business#commercial-property",
    img: "/images/products/commercial-property.jpeg",
    tagline: "Coverage design for buildings, portfolios, and layered exposure.",
  },
  {
    title: "Auto",
    desc: "Specialty vehicles, higher limits, and complex underwriting.",
    href: "/products/personal#auto",
    img: "/images/products/auto-exotics.webp",
    tagline: "High-limit auto built for specialty and high-value vehicles.",
  },
  {
    title: "Home",
    desc: "High-value homes, multiple residences, and property complexities.",
    href: "/products/personal#home",
    img: "/images/products/home-luxury.webp",
    tagline: "High-value home coverage placed correctly—without retail quoting.",
  },
  {
    title: "Life & Health",
    desc: "Life, disability, long-term care, and advanced planning.",
    href: "/products/life-health",
    img: "/images/products/life-health-consult.jpg",
    tagline: "Planning-driven coverage for life, disability, and long-term care.",
  },
  {
    title: "Business",
    desc: "Liability, cyber, executive risk, and program design.",
    href: "/products/business",
    img: "/images/products/business-boardroom.jpg",
    tagline: "Program design for operational, liability, and executive exposures.",
  },
  {
    title: "Employee Benefits",
    desc: "Group health and benefits strategy for teams and leadership.",
    href: "/products/benefits",
    img: "/images/products/employee-benefits-meeting.jpeg",
    tagline: "Benefits strategy designed for retention, risk, and cost control.",
  },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Products
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Coverage built around exposure, not assumptions.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-700">
          Blynx helps clients place coverage across commercial property, personal
          lines, business risk, employee benefits, and life &amp; health—designed
          for complex risk profiles and non-standard underwriting.
        </p>

        {/* HERO IMAGE (Products landing) */}
        <div className="mt-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <Image
              src="/images/Products/products-hero.jpeg"
              alt="Blynx Insurance Group products overview"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-gray-500">
            Category-led coverage strategy—built for complexity and discretion.
          </p>
        </div>
      </header>

      {/* CATEGORY CARDS */}
      <section className="grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:bg-gray-50"
          >
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{c.title}</h2>
                <p className="mt-2 leading-relaxed text-gray-700">{c.desc}</p>
              </div>

              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                <Image
                  src={c.img}
                  alt={`${c.title} coverage`}
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                />
              </div>

              <p className="text-xs text-gray-500">{c.tagline}</p>

              <div className="text-sm font-semibold underline">Explore →</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
