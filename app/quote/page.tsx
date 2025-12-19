/**
 * Page: Get a Quote
 * Route: /quote
 * File: app/quote/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Quote | Blynx Insurance Group",
  description:
    "Request a quote from Blynx Insurance Group. Provide a brief overview and we’ll follow up quickly and discreetly.",
};

export default function QuotePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get a Quote
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Start with a short request. We’ll confirm what you need and respond
          with next steps. Discreet, direct, and market-informed.
        </p>
      </header>

      <section className="grid gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Quote request</h2>

          <form className="mt-4 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Quote type
              </label>
              <select className="rounded-xl border border-gray-200 px-3 py-2 bg-white">
                <option>Personal insurance</option>
                <option>Business insurance</option>
                <option>Employee benefits</option>
                <option>Life & health</option>
                <option>Not sure</option>
              </select>
            </div>

            <input
              placeholder="Name"
              className="rounded-xl border border-gray-200 px-3 py-2"
            />
            <input
              placeholder="Email"
              type="email"
              className="rounded-xl border border-gray-200 px-3 py-2"
            />
            <input
              placeholder="Phone (optional)"
              className="rounded-xl border border-gray-200 px-3 py-2"
            />
            <textarea
              placeholder="Brief summary (assets, business type, locations, timeline, concerns)"
              rows={5}
              className="rounded-xl border border-gray-200 px-3 py-2"
            />

            <button
              type="button"
              className="w-fit rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <p className="text-sm text-gray-500">
              Submission is currently a placeholder. Next step: connect this to
              email/CRM via an API route.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Prefer to talk first?</h2>
          <p className="mt-3 text-gray-700">
            Use the contact page for a direct request.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="underline font-semibold">
              Go to Contact →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

