/**
 * Page: Privacy Policy
 * Route: /privacy
 * File: app/privacy/page.tsx
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Blynx Insurance Group",
  description:
    "Privacy policy for Blynx Insurance Group. Learn how we handle information submitted through our website.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          This is a placeholder policy to support the website structure. Replace
          with your finalized policy before public launch.
        </p>
      </header>

      <section className="grid gap-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Information we collect</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Information you submit via forms (e.g., name, email, phone, and
            message content). We may also collect basic analytics data to
            improve the website.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">How we use information</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            To respond to inquiries, evaluate requests, and communicate about
            services. We do not sell your information.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Data handling</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We use reasonable safeguards. Do not submit sensitive information
            unless requested through a secure channel.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            If you have questions about this policy, contact us through the
            website contact form.
          </p>
        </div>
      </section>
    </main>
  );
}

