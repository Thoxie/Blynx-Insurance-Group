/**
 * Page: Contact
 * Route: /contact
 * File: app/contact/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Blynx Insurance Group",
  description:
    "Contact Blynx Insurance Group. Discreet, direct communication for complex insurance needs.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Tell us what you’re solving for. We’ll respond with the fastest next
          step—discreet, direct, and market-informed.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Get a Quote
          </Link>
          <Link
            href="/resources/refer"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Refer a Friend
          </Link>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Send a message</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            This form is a placeholder until we wire delivery (email/CRM).
          </p>

          <form className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Name
              </label>
              <input
                placeholder="Your name"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Phone (optional)
              </label>
              <input
                placeholder="(555) 555-5555"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                What are you trying to solve?
              </label>
              <textarea
                rows={6}
                placeholder="Personal, business, benefits, life & health—timeline and key concerns."
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <button
              type="button"
              className="w-fit rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <p className="text-sm text-gray-500">
              Do not include sensitive information unless requested through a
              secure channel.
            </p>
          </form>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold">What to include</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
              <li>Coverage type (personal / business / benefits / life & health)</li>
              <li>State(s) and timeline</li>
              <li>Key assets / exposures (high-level)</li>
              <li>Current carrier and renewal date (if applicable)</li>
              <li>What you want different this time</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Prefer a quote request?</h2>
            <p className="mt-3 text-gray-700">
              Use the quote page for structured intake.
            </p>
            <div className="mt-4">
              <Link href="/quote" className="underline font-semibold">
                Go to Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
