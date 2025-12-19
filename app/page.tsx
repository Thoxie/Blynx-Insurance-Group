import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Blynx Insurance Group
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Complex insurance needs require broader market access. We help
          affluent individuals, families, and business owners structure coverage
          with clarity, speed, and discretion.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Request a call
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            View services
          </Link>
        </div>
      </header>

      <section className="grid gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Who we serve</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>Affluent individuals and families with complex personal risk</li>
            <li>Business owners seeking durable coverage strategy</li>
            <li>Clients needing access beyond standard markets</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">What we do</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>Coverage review and gap analysis</li>
            <li>Market placement strategy and carrier access</li>
            <li>Business risk management support</li>
            <li>Ongoing policy management and renewal advocacy</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Next step</h2>
          <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl">
            Tell us what you’re trying to solve. We’ll respond quickly and
            outline an initial approach.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="text-gray-900 underline">
              Go to Contact →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
