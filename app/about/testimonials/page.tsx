/**
 * Page: Testimonials
 * Route: /about/testimonials
 * File: app/about/testimonials/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Blynx Insurance Group",
  description:
    "Client feedback for Blynx Insurance Group. Discreet, direct, and market-informed coverage strategy.",
};

const quotes = [
  {
    quote:
      "Blynx simplified a complicated insurance situation and delivered options that actually matched the risk.",
    name: "Client, Business Owner",
  },
  {
    quote:
      "Fast, discreet, and precise. The coverage structure finally makes sense.",
    name: "Client, Family Office",
  },
  {
    quote:
      "The difference was process and judgment—not just a quote. We felt protected.",
    name: "Client, Executive",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Testimonials
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          A few examples of what clients value: clarity, discretion, and a
          coverage structure that behaves properly when it matters.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Request a call
          </Link>
        </div>
      </header>

      <section className="grid gap-4">
        {quotes.map((q, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gray-200 bg-white p-6"
          >
            <p className="text-gray-900 leading-relaxed text-lg">
              “{q.quote}”
            </p>
            <p className="mt-4 text-sm font-semibold text-gray-700">
              — {q.name}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            Replace these placeholders with real testimonials once you have
            permission to publish them.
          </p>
        </div>
      </section>
    </main>
  );
}

