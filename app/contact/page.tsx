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
    "Request a confidential conversation with Blynx Insurance Group to discuss complex insurance coverage and risk management needs.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          If you have complex coverage needs, we’ll ask a few questions and
          respond quickly. Discreet, direct, and market-informed.
        </p>
      </header>

      <section className="grid gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Request a call</h2>

          <form className="mt-4 grid gap-4">
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
              placeholder="Brief message"
              rows={4}
              className="rounded-xl border border-gray-200 px-3 py-2"
            />

            <button
              type="button"
              className="mt-2 w-fit rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Submit
            </button>

            <p className="text-sm text-gray-500">
              Form submission will be connected next.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Prefer email?</h2>
          <p className="mt-3 text-gray-700">
            We can add a direct contact address once you confirm the inbox.
          </p>
          <p className="mt-3">
            <Link href="/services" className="underline">
              Review services →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
