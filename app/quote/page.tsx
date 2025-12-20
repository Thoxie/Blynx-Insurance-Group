// PATH: app/quote/page.tsx

/**
 * Page: Get a Quote (Guided Intake)
 * Route: /quote
 * File: app/quote/page.tsx
 */

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Line = "Personal" | "Business" | "Employee Benefits" | "Life & Health";
type Step = 1 | 2 | 3;
type Status = "idle" | "submitted";

type FormState = {
  line: Line | "";
  urgency: "" | "ASAP (0–3 days)" | "Soon (1–2 weeks)" | "Not urgent (30+ days)";
  situation: string;
  details: string;

  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  preferredContact: "" | "Email" | "Phone" | "Text";
  bestTime: "" | "Morning" | "Afternoon" | "Evening";
  state: string; // US state
};

const LINES: Line[] = ["Personal", "Business", "Employee Benefits", "Life & Health"];

export default function QuotePage() {
  const [step, setStep] = useState<Step>(1);
  const [status, setStatus] = useState<Status>("idle");

  const [form, setForm] = useState<FormState>({
    line: "",
    urgency: "",
    situation: "",
    details: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    bestTime: "",
    state: "",
  });

  const situationOptions = useMemo(() => {
    switch (form.line) {
      case "Personal":
        return [
          "High-value home / multiple homes",
          "Specialty auto / higher limits",
          "Umbrella / liability structure",
          "Prior losses / non-renewal",
          "Hard-to-place / unusual exposure",
          "Other",
        ];
      case "Business":
        return [
          "Commercial property placement",
          "General liability / contract requirements",
          "Cyber / executive risk",
          "Layered limits / excess program design",
          "Prior losses / market tightening",
          "Other",
        ];
      case "Employee Benefits":
        return [
          "New benefits program",
          "Renewal strategy / cost control",
          "Plan design & carrier fit",
          "Enrollment/admin cleanup",
          "Voluntary benefits strategy",
          "Other",
        ];
      case "Life & Health":
        return [
          "Life insurance planning",
          "Disability / income protection",
          "Long-term care planning",
          "Business continuity coverage",
          "Underwriting complexity / time-sensitive",
          "Other",
        ];
      default:
        return [];
    }
  }, [form.line]);

  const canGoStep2 = form.line !== "" && form.urgency !== "";
  const canGoStep3 = form.situation !== "";

  const contactValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.preferredContact !== "";

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    if (step === 1 && !canGoStep2) return;
    if (step === 2 && !canGoStep3) return;
    setStep((prev) => (prev === 3 ? 3 : ((prev + 1) as Step)));
  }

  function back() {
    setStep((prev) => (prev === 1 ? 1 : ((prev - 1) as Step)));
  }

  function submit() {
    if (!contactValid) return;
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <main className="mx-auto max-w-3xl px-6 py-14">
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
          Get a Quote
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
          Intake received.
        </h1>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Thank you. This is a confirmation screen for now (we’ll add delivery
          routing next). If you need to reach us immediately, use Contact.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-base font-semibold text-gray-900">Summary</h2>
          <div className="mt-3 grid gap-2 text-sm text-gray-700">
            <div>
              <span className="font-semibold text-gray-900">Line:</span>{" "}
              {form.line || "—"}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Urgency:</span>{" "}
              {form.urgency || "—"}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Situation:</span>{" "}
              {form.situation || "—"}
            </div>
            {form.details?.trim() ? (
              <div>
                <span className="font-semibold text-gray-900">Details:</span>{" "}
                {form.details}
              </div>
            ) : null}
            <div>
              <span className="font-semibold text-gray-900">Name:</span>{" "}
              {form.firstName} {form.lastName}
            </div>
            <div>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {form.email}
            </div>
            {form.phone?.trim() ? (
              <div>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                {form.phone}
              </div>
            ) : null}
            <div>
              <span className="font-semibold text-gray-900">
                Preferred contact:
              </span>{" "}
              {form.preferredContact}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Go to Contact
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Get a Quote
      </p>

      <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
        Guided Intake
      </h1>

      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        This intake is designed for complex placements. Select the closest match
        and add context where helpful.
      </p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6">
        {/* Step indicator */}
        <div className="flex items-center justify-between text-sm">
          <div className="font-semibold text-gray-900">Step {step} of 3</div>
          <div className="text-gray-500">
            {step === 1
              ? "Category"
              : step === 2
              ? "Situation"
              : "Contact"}
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 ? (
          <div className="mt-6 grid gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                What do you need?
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                value={form.line}
                onChange={(e) => {
                  const v = e.target.value as Line | "";
                  set("line", v);
                  set("situation", "");
                }}
              >
                <option value="">Select one…</option>
                {LINES.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Urgency
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                value={form.urgency}
                onChange={(e) =>
                  set(
                    "urgency",
                    e.target.value as FormState["urgency"]
                  )
                }
              >
                <option value="">Select one…</option>
                <option value="ASAP (0–3 days)">ASAP (0–3 days)</option>
                <option value="Soon (1–2 weeks)">Soon (1–2 weeks)</option>
                <option value="Not urgent (30+ days)">Not urgent (30+ days)</option>
              </select>
            </div>

            {!canGoStep2 ? (
              <div className="text-sm text-gray-500">
                Select a category and urgency to continue.
              </div>
            ) : null}
          </div>
        ) : null}

        {/* STEP 2 */}
        {step === 2 ? (
          <div className="mt-6 grid gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Situation
              </label>
              <select
                className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                value={form.situation}
                onChange={(e) => set("situation", e.target.value)}
              >
                <option value="">Select one…</option>
                {situationOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Details (optional)
              </label>
              <textarea
                className="mt-2 w-full min-h-[120px] rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                placeholder="Example: renewal date, prior non-renewal, asset type/value range, contractual limits, timeline, etc."
                value={form.details}
                onChange={(e) => set("details", e.target.value)}
              />
            </div>

            {!canGoStep3 ? (
              <div className="text-sm text-gray-500">
                Select a situation to continue.
              </div>
            ) : null}
          </div>
        ) : null}

        {/* STEP 3 */}
        {step === 3 ? (
          <div className="mt-6 grid gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  First name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">
                  Last name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900"
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font
