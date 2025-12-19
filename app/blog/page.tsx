/**
 * Page: Blog
 * Route: /blog
 * File: app/blog/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Blynx Insurance Group",
  description:
    "Insights on risk, coverage structure, and insurance decisions for individuals and business owners.",
};

const posts = [
  {
    slug: "coverage-gaps-that-cost-real-money",
    title: "Coverage gaps that cost real money",
    excerpt:
      "A quick framework for identifying gaps before they show up as denied claims.",
    date: "2025-12-19",
  },
  {
    slug: "why-umbrella-policies-fail",
    title: "Why umbrella policies fail (and how to fix it)",
    excerpt:
      "Umbrella coverage is only as good as the underlying structure and coordination.",
    date: "2025-12-19",
  },
  {
    slug: "business-insurance-structure-not-just-quotes",
    title: "Business insurance: structure, not just quotes",
    excerpt:
      "If you buy insurance like a commodity, you get commodity outcomes.",
    date: "2025-12-19",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Blog
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Short, practical writing on risk, coverage structure, and decision
          points that matter.
        </p>
      </header>

      <section className="grid gap-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-2xl border border-gray-200 bg-white p-6 hover:bg-gray-50 transition"
          >
            <div className="text-sm text-gray-500">{p.date}</div>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">
              {p.title}
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">{p.excerpt}</p>
            <div className="mt-4 text-sm font-semibold underline">Read →</div>
          </Link>
        ))}
      </section>
    </main>
  );
}

