// PATH: app/quote/page.tsx

"use client";

/**
 * Page: Quote / Intake
 * Route: /quote
 * File: app/quote/page.tsx
 */

import { useMemo, useState } from "react";

type ProductLine =
  | "Commercial Property"
  | "Auto"
  | "Home"
  | "Life & Health"
  | "Business"
  | "Employee Benefits";

type BestTime =
  | "Morning"
  | "Afternoon"
  | "Evening"
  | "Anytime"
  | "Text only";

export default function QuotePage() {
  const [productLine, setProductLine] = useState<ProductLine | "">("");
  const [state, setState] = useState<string>("");
  const [needTiming, setNeedTiming] = useState<"ASAP" | "Soon" | "Exploring">(
    "Soon"
  );

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const [bestTime, setBestTime] = useState<BestTime>("Anytime");
  const [contactMethod, setContactMethod] = useState<"Email" | "Phone" | "Text">(
    "Email"
  );

  const [hasPriorDenial, setHasPriorDenial] = useState<"Yes" | "No" | "Not sure">(
    "Not sure"
  );
  const [claimsHistory, setClaimsHistory] = useState<
    "None"
    | "1 claim"
    | "2–3 claims"
    | "4+ claims"
    | "Not sure / prefer not to say"
  >("Not sure / prefer not to say");

  const [notes, setNotes] = useState<string>("");

  // Optional: simple, context-sensitive prompts based on product selection
  const productPrompts = useMemo(() => {
    const common = [
      "What’s changed recently (carrier non-renewal, denial, major purchase, new location, etc.)?",
      "Any time constraints or deadlines (closing date, lender requirement, renewal date)?",
    ];

    const byLine: Record<ProductLine, string[]> = {
      "Commercial Property": [
        "Property type (office, retail, mixed-use, industrial) and number of locations?",
        "Any vacancy, redevelopment plans, or unusual exposures (older systems, prior losses, coastal/wind, etc.)?",
      ],
      Auto: [
        "Personal or commercial auto? Any specialty vehicles (exotic, collector, high-performance)?",
        "Drivers count and any recent tickets/incidents (approximate is fine)?",
      ],
      Home: [
        "Primary residence or additional residences? Coastal/wildfire exposure?",
        "Any prior claims, renovations, or unique features (pool, detached structures, high-value contents)?",
      ],
      "Life & Health": [
        "Life, disability, LTC, or health/medical? Individual or group?",
        "Any underwriting complexity you’re aware of (medical history, high-risk occupation, travel, etc.)?",
      ],
      Business: [
        "Industry and size (rough revenue/headcount)? Key coverages needed (GL, PL, cyber, D&O, E&O)?",
        "Any contracts requiring specific limits/additional insured wording?",
      ],
      "Employee Benefits": [
        "Headcount and state(s) of employees? Fully insured vs level-funded vs self-funded preference?",
        "Any renewal pressure (large increases, participation issues, plan design constraints)?",
      ],
    };

    if (!productLine) return common;

    return [...byLine[productLine], ...common];
  }, [productLine]);

  const summary = useMemo(() => {
    const lines: string[] = [];

    lines.push(`Product line: ${productLine || "(not selected)"}`);
    lines.push(`State: ${state || "(not selected)"}`);
    lines.push(`Need timing: ${needTiming}`);
    lines.push("");
    lines.push(`Name: ${firstName} ${lastName}`.trim() || "Name: (not provided)");
    lines.push(`Company: ${company || "(not provided)"}`);
    lines.push(`Email: ${email || "(not provided)"}`);
    lines.push(`Phone: ${phone || "(not provided)"}`);
    lines.push(`Preferred contact: ${contactMethod}`);
    lines.push(`Best time: ${bestTime}`);
    lines.push("");
    lines.push(`Prior denial/non-renewal: ${hasPriorDenial}`);
    lines.push(`Claims history: ${claimsHistory}`);
    lines.push("");
    lines.push("Notes:");
    lines.push(notes || "(none)");

    return lines.join("\n");
  }, [
    productLine,
    state,
    needTiming,
    firstName,
    lastName,
    company,
    email,
    phone,
    contactMethod,
    bestTime,
    hasPriorDenial,
    claimsHistory,
    notes,
  ]);

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      alert("Copied intake summary to clipboard.");
    } catch {
      alert("Could not copy automatically. You can manually copy from the Summary box.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Get a Quote
      </p>

      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
        Intake
      </h1>

      <p className="mt-4 text-gray-700 leading-relaxed">
        This is a short intake to help Blynx structure the right placement
        strategy. Use dropdowns where possible. If you’ve been denied,
        non-renewed, or are paying expensive premiums, include that below.
      </p>

      {/* FORM */}
      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">Basics</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-gray-900">Product line</span>
            <select
              className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={productLine}
              onChange={(e) => setProductLine(e.target.value as ProductLine)}
            >
              <option value="">Select…</option>
              <option value="Commercial Property">Commercial Property</option>
              <option value="Auto">Auto</option>
              <option value="Home">Home</option>
              <option value="Life & Health">Life &amp; Health</option>
              <option value="Business">Business</option>
              <option value="Employee Benefits">Employee Benefits</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-gray-900">State</span>
            <input
              className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="e.g., CA"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-gray-900">How soon do you need coverage?</span>
            <select
              className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={needTiming}
              onChange={(e) =>
                setNeedTiming(e.target.value as "ASAP" | "Soon" | "Exploring")
              }
            >
              <option value="ASAP">ASAP (days)</option>
              <option value="Soon">Soon (1–3 weeks)</option>
              <option value="Exploring">Exploring options</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-gray-900">Prior denial / non-renewal?</span>
            <select
              className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={hasPriorDenial}
              onChange={(e) =>
                setHasPriorDenial(e.target.value as "Yes" | "No" | "Not sure")
              }
            >
              <option value="Not sure">Not sure</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">First name</span>
              <input
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">Last name</span>
              <input
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">Email</span>
              <input
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                inputMode="email"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">Phone</span>
              <input
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(###) ###-####"
                inputMode="tel"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">Company (optional)</span>
              <input
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-gray-900">Preferred contact</span>
                <select
                  className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                  value={contactMethod}
                  onChange={(e) =>
                    setContactMethod(e.target.value as "Email" | "Phone" | "Text")
                  }
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Text">Text</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-gray-900">Best time</span>
                <select
                  className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                  value={bestTime}
                  onChange={(e) => setBestTime(e.target.value as BestTime)}
                >
                  <option value="Anytime">Anytime</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Text only">Text only</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-semibold text-gray-900">Risk context</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-gray-900">Claims history</span>
              <select
                className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
                value={claimsHistory}
                onChange={(e) =>
                  setClaimsHistory(
                    e.target.value as
                      | "None"
                      | "1 claim"
                      | "2–3 claims"
                      | "4+ claims"
                      | "Not sure / prefer not to say"
                  )
                }
              >
                <option value="Not sure / prefer not to say">
                  Not sure / prefer not to say
                </option>
                <option value="None">None</option>
                <option value="1 claim">1 claim</option>
                <option value="2–3 claims">2–3 claims</option>
                <option value="4+ claims">4+ claims</option>
              </select>
            </label>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm font-semibold text-gray-900">
                Helpful prompts{productLine ? ` (${productLine})` : ""}
              </p>
              <ul className="mt-2 space-y-2 text-sm text-gray-700">
                {productPrompts.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>

          <label className="mt-5 grid gap-2">
            <span className="text-sm font-medium text-gray-900">
              Notes (what’s going on / what do you need?)
            </span>
            <textarea
              className="min-h-[130px] rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Include denial/non-renewal details, deadlines, assets/operations, limits requested, and anything unusual."
            />
          </label>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Summary</h2>

          <button
            type="button"
            onClick={copySummary}
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Copy Summary
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-600">
          Copy/paste this into an email or message.
        </p>

        <pre className="mt-4 whitespace-pre-wrap rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-900">
{summary}
        </pre>
      </section>
    </main>
  );
}
