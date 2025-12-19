/**
 * Page: Refer a Friend
 * Route: /resources/refer
 * File: app/resources/refer/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refer a Friend | Blynx Insurance Group",
  description:
    "Refer someone to Blynx Insurance Group for discreet, market-informed insurance strategy and placement.",
};

export default function ReferPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Refer a Friend
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          If you know someone dealing with complex insurance needs, you can send
          a referral here. We’ll handle it discreetly and follow up directly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Request a call
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Get a Quote
          </Link>
        </div>
      </header>

      <section className="grid gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Referral form</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            This form is a placeholder. Next step (we’ll pause after this page)
            is wiring it to email/CRM.
          </p>

          <form className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Your name
              </label>
              <input
                placeholder="Your name"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Your email
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Friend / referral name
              </label>
              <input
                placeholder="Referral name"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Friend / referral email or phone
              </label>
              <input
                placeholder="Email or phone"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                What do they need help with?
              </label>
              <textarea
                rows={5}
                placeholder="Brief context (personal, business, benefits, life & health; timeline; key concerns)"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <button
              type="button"
              className="w-fit rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Submit referral
            </button>

            <p className="text-sm text-gray-500">
              By submitting, you confirm you have permission to share this
              person’s contact info.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">What happens next</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              We review the request and identify what information is needed.
            </li>
            <li>
              We contact the referral discreetly and confirm next steps.
            </li>
            <li>
              We structure coverage first, then bring appropriate markets.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

