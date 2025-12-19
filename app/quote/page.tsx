/**
 * Page: Get a Quote
 * Route: /quote
 * File: app/quote/page.tsx
 */

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "success" | "error";

export default function QuotePage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    quoteType: "Personal Insurance",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return form.name.trim().length > 0 && form.email.trim().length > 0;
  }, [form.name, form.email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setStatus("error");
      setError("Name and email are required.");
      return;
    }

    try {
      setStatus("sending");

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "quote",
          name: form.name,
          email: form.email,
          phone: form.phone,
          quoteType: form.quoteType,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setError(data?.error || "Submission failed.");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        quoteType: "Personal Insurance",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Network error.");
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-14">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get a Quote
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          Tell us what you need. We’ll respond with next steps and what we
          require to place coverage properly.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Prefer to send a message?
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
          <h2 className="text-lg font-semibold">Quote request</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            This now submits to the live endpoint{" "}
            <code className="font-semibold">/api/lead</code>. Next step (later)
            is sending to email/CRM.
          </p>

          <form onSubmit={onSubmit} className="mt-5 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Name *
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Email *
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Phone (optional)
              </label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(555) 555-5555"
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Quote type
              </label>
              <select
                value={form.quoteType}
                onChange={(e) => setForm({ ...form, quoteType: e.target.value })}
                className="rounded-xl border border-gray-200 px-3 py-2 bg-white"
              >
                <option>Personal Insurance</option>
                <option>Business Insurance</option>
                <option>Employee Benefits</option>
                <option>Life & Health</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Brief context: what you’re trying to solve, timeline, renewal date, key concerns."
                className="rounded-xl border border-gray-200 px-3 py-2"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-fit rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition disabled:opacity-50"
            >
              {status === "sending" ? "Submitting..." : "Submit quote request"}
            </button>

            {status === "success" ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-900">
                Submitted. Next step is wiring delivery to email/CRM.
              </div>
            ) : null}

            {status === "error" ? (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-900">
                {error || "Submission failed."}
              </div>
            ) : null}

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
              <li>Coverage type and state(s)</li>
              <li>Timeline and renewal date</li>
              <li>High-level assets / exposures</li>
              <li>Current carrier (if applicable)</li>
              <li>What you want different this time</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-semibold">Prefer to talk first?</h2>
            <p className="mt-3 text-gray-700">
              Use the contact page and we’ll schedule the fastest next step.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="underline font-semibold">
                Go to Contact →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
