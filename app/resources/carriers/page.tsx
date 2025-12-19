/**
 * Page: Our Carriers
 * Route: /resources/carriers
 * File: app/resources/carriers/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Carriers | Blynx Insurance Group",
  description:
    "Selected carrier and market access. Blynx Insurance Group places coverage based on risk structure and fit—not convenience.",
};

const carriers = [
  "Carrier / Market 1",
  "Carrier / Market 2",
  "Carrier / Market 3",
  "Carrier / Market 4",
  "Carrier / Market 5",
  "Carrier / Market 6",
  "Carrier / Market 7",
  "Carrier / Market 8",
];

export default function CarriersPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Our Carriers & Market Access
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          We place coverage with markets that match the structure and exposure.
          Carrier access varies by risk profile, geography, underwriting, and
          line of business.
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
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Selected markets</h2>
          <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
            Below is a placeholder list. Replace each card with actual carrier
            logos once you have permission to display them.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {carriers.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm font-semibold text-gray-800 text-center"
              >
                {c}
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Note: Carrier names/logos often require approval. We can also display
            “market categories” instead of logos if needed.
          </p>
        </div>
      </section>
    </main>
  );
}

