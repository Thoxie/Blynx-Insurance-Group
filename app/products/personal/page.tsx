// PATH: app/products/personal/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function PersonalInsurancePage() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-12">
          <div className="grid items-start gap-10 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Products / Personal
              </p>

              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
                Personal coverage for high-value and non-standard risk.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-700">
                We place high-value personal lines with discretion—built for
                complex properties, specialty vehicles, higher limits, and
                privacy-sensitive situations.
              </p>

              <p className="mt-3 max-w-xl text-lg leading-relaxed text-gray-700">
                If standard carriers hesitate or retail brokers can’t structure
                it correctly, we build the placement strategy.
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                <Image
                  src="/images/home-luxury.webp"
                  alt="High-value residential insurance"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  unoptimized
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                High-value homes, multiple residences, and complex underwriting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-900">Personal Lines</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold text-gray-900">Home</h3>
              <p className="mt-3 text-gray-700">
                High-value homes, rebuild complexity, CAT exposure, and specialty
                construction.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6">
              <h3 className="font-semibold text-gray-900">Auto</h3>
              <p className="mt-3 text-gray-700">
                Specialty vehicles, exotic cars, high limits, and non-standard
                underwriting.
              </p>

              <div className="mt-4 overflow-hidden rounded-xl border">
                <Image
                  src="/images/auto-exotics.webp.png"
                  alt="Exotic vehicles"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/products" className="text-sm font-semibold underline">
              Back to Products →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
