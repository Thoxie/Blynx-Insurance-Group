// 19. PATH: app/signup/page.tsx
// 19A OF 19C

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CaseType =
  | "Divorce / Family Law"
  | "Small Claims"
  | "Landlord / Tenant"
  | "General Civil";

type StateCode = "CA" | "NY" | "TX" | "FL" | "Other";

type FilingRole = "Plaintiff / Petitioner" | "Defendant / Respondent" | "Not sure";

type Urgency = "Immediate" | "This week" | "This month" | "Exploring";

type ContactMethod = "Email" | "Phone" | "Text";

type IncomeBand =
  | "<50k"
  | "50k-100k"
  | "100k-250k"
  | "250k-500k"
  | "500k+"
  | "Prefer not to say";

type EducationLevel =
  | "High school"
  | "Some college"
  | "College degree"
  | "Graduate degree"
  | "Prefer not to say";

type EmploymentStatus =
  | "Employed"
  | "Self-employed"
  | "Business owner"
  | "Not employed"
  | "Retired"
  | "Prefer not to say";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateCode, setStateCode] = useState<StateCode>("CA");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("Email");

  const [caseType, setCaseType] = useState<CaseType>("Divorce / Family Law");
  const [filingRole, setFilingRole] = useState<FilingRole>("Not sure");
  const [urgency, setUrgency] = useState<Urgency>("This week");

  const [education, setEducation] = useState<EducationLevel>("Prefer not to say");
  const [employment, setEmployment] =
    useState<EmploymentStatus>("Prefer not to say");
  const [incomeBand, setIncomeBand] = useState<IncomeBand>("Prefer not to say");

  const [opposingParty, setOpposingParty] = useState("");
  const [childrenInvolved, setChildrenInvolved] = useState<"Yes" | "No" | "N/A">(
    "N/A"
  );
  const [courtDate, setCourtDate] = useState("");
  const [county, setCounty] = useState("");
  const [facts, setFacts] = useState("");
  const [goals, setGoals] = useState("");
  const [docsReady, setDocsReady] = useState<
    "None yet" | "A few" | "Most of them" | "Not sure"
  >("A few");

  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const intakePrompts = useMemo(() => {
    switch (caseType) {
      case "Divorce / Family Law":
        return [
          "What was filed, by whom, and when?",
          "Are there children, property, support, or restraining-order issues?",
          "What hearing or filing deadline matters most right now?",
        ];
      case "Small Claims":
        return [
          "Who owes what, how much, and why?",
          "What evidence proves the agreement, damage, or unpaid amount?",
          "What date, court, or service issue matters most right now?",
        ];
      case "Landlord / Tenant":
        return [
          "Are you the landlord or tenant, and what notice has been served?",
          "Is the issue rent, habitability, deposit, damage, or possession?",
          "What dates, messages, lease terms, or photos matter most?",
        ];
      case "General Civil":
        return [
          "What happened, who is involved, and what is the harm?",
          "What deadline, demand, or court date matters most now?",
          "What documents or proof do you already have?",
        ];
      default:
        return [];
    }
  }, [caseType]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agree) {
      alert("Please accept the demo terms checkbox before continuing.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
          <div className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Demo account created
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-zinc-950">
            You’re in.
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-700">
            This is the restored demo signup flow from the backup. The next step
            is to connect real authentication and persist case data.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-950">
                What happens next
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                <li>• Review your intake profile</li>
                <li>• Start a guided case intake</li>
                <li>• Build your issue list and next steps</li>
                <li>• Prepare documents and outputs</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-950">
                Saved demo data
              </div>
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div><span className="font-semibold text-zinc-900">Name:</span> {fullName || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Email:</span> {email || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Case type:</span> {caseType}</div>
                <div><span className="font-semibold text-zinc-900">State:</span> {stateCode}</div>
                <div><span className="font-semibold text-zinc-900">Role:</span> {filingRole}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Go to Dashboard
            </Link>

            <Link
              href="/case"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Start Case Intake
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
          Demo signup
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-950">
          Create your account
        </h1>

        <p className="mt-4 text-base leading-7 text-zinc-700">
          Start with a profile, then we guide the case intake. This restored
          flow is designed to get users moving quickly without losing context.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-8">
        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight text-zinc-950">
            1. Account basics
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">Full name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your full name"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(###) ###-####"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">State</span>
              <select
                value={stateCode}
                onChange={(e) => setStateCode(e.target.value as StateCode)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="text-sm font-semibold text-zinc-900">
                Preferred contact method
              </span>
              <div className="flex flex-wrap gap-3">
                {(["Email", "Phone", "Text"] as ContactMethod[]).map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setContactMethod(method)}
                    className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      contactMethod === method
                        ? "bg-zinc-950 text-white"
                        : "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </label>
          </div>
        </section>
// 19. PATH: app/signup/page.tsx
// 19B OF 19C

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight text-zinc-950">
            2. Case profile
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">Case type</span>
              <select
                value={caseType}
                onChange={(e) => setCaseType(e.target.value as CaseType)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="Divorce / Family Law">Divorce / Family Law</option>
                <option value="Small Claims">Small Claims</option>
                <option value="Landlord / Tenant">Landlord / Tenant</option>
                <option value="General Civil">General Civil</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Filing role
              </span>
              <select
                value={filingRole}
                onChange={(e) => setFilingRole(e.target.value as FilingRole)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="Plaintiff / Petitioner">Plaintiff / Petitioner</option>
                <option value="Defendant / Respondent">Defendant / Respondent</option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">Urgency</span>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value as Urgency)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="Immediate">Immediate</option>
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="Exploring">Exploring</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Opposing party / other side
              </span>
              <input
                type="text"
                value={opposingParty}
                onChange={(e) => setOpposingParty(e.target.value)}
                placeholder="Name or short description"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">County</span>
              <input
                type="text"
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                placeholder="County"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Court date / hearing date
              </span>
              <input
                type="text"
                value={courtDate}
                onChange={(e) => setCourtDate(e.target.value)}
                placeholder="MM/DD/YYYY or describe timing"
                className="rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Children involved
              </span>
              <select
                value={childrenInvolved}
                onChange={(e) =>
                  setChildrenInvolved(e.target.value as "Yes" | "No" | "N/A")
                }
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="N/A">N/A</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Documents ready
              </span>
              <select
                value={docsReady}
                onChange={(e) =>
                  setDocsReady(
                    e.target.value as
                      | "None yet"
                      | "A few"
                      | "Most of them"
                      | "Not sure"
                  )
                }
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="None yet">None yet</option>
                <option value="A few">A few</option>
                <option value="Most of them">Most of them</option>
                <option value="Not sure">Not sure</option>
              </select>
            </label>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="text-sm font-semibold text-zinc-950">
              Smart prompts for {caseType}
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
              {intakePrompts.map((prompt) => (
                <li key={prompt}>• {prompt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight text-zinc-950">
            3. Personalization
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-600">
            These fields tune tone and guidance. They are optional except where
            you decide to require them later.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Education
              </span>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value as EducationLevel)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="High school">High school</option>
                <option value="Some college">Some college</option>
                <option value="College degree">College degree</option>
                <option value="Graduate degree">Graduate degree</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Employment
              </span>
              <select
                value={employment}
                onChange={(e) =>
                  setEmployment(e.target.value as EmploymentStatus)
                }
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="Employed">Employed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Business owner">Business owner</option>
                <option value="Not employed">Not employed</option>
                <option value="Retired">Retired</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Income band
              </span>
              <select
                value={incomeBand}
                onChange={(e) => setIncomeBand(e.target.value as IncomeBand)}
                className="rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-zinc-950"
              >
                <option value="<50k">&lt;50k</option>
                <option value="50k-100k">50k-100k</option>
                <option value="100k-250k">100k-250k</option>
                <option value="250k-500k">250k-500k</option>
                <option value="500k+">500k+</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight text-zinc-950">
            4. Facts and goals
          </h2>

          <div className="mt-6 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                Key facts
              </span>
              <textarea
                value={facts}
                onChange={(e) => setFacts(e.target.value)}
                placeholder="What happened? What has already been filed, said, served, paid, or denied?"
                className="min-h-[160px] rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-zinc-900">
                What do you want?
              </span>
              <textarea
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="What outcome do you want? What do you want to stop, protect, recover, or prepare?"
                className="min-h-[140px] rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none focus:border-zinc-950"
              />
            </label>
          </div>
        </section>
        // 19. PATH: app/signup/page.tsx
// 19C OF 19C

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <h2 className="text-lg font-bold tracking-tight text-zinc-950">
            5. Terms
          </h2>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm leading-6 text-zinc-700">
            <p>
              This restored flow is a demo product experience. It does not create
              an attorney-client relationship. Outputs are informational and
              workflow-oriented until full legal and product terms are finalized.
            </p>
            <p className="mt-3">
              By continuing, you confirm the information you provide is accurate
              to the best of your knowledge and that you understand this is a
              software-guided intake experience.
            </p>
          </div>

          <label className="mt-5 flex items-start gap-3">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-zinc-300"
            />
            <span className="text-sm leading-6 text-zinc-700">
              I understand and agree to continue in demo mode.
            </span>
          </label>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold tracking-tight text-zinc-950">
                Review
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                You can change anything above before continuing. The purpose here
                is to reduce blank-page friction and preserve context.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
              >
                Create account
              </button>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Already have an account
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-950">
                Account snapshot
              </div>
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div><span className="font-semibold text-zinc-900">Name:</span> {fullName || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Email:</span> {email || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Phone:</span> {phone || "—"}</div>
                <div><span className="font-semibold text-zinc-900">State:</span> {stateCode}</div>
                <div><span className="font-semibold text-zinc-900">Contact:</span> {contactMethod}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <div className="text-sm font-semibold text-zinc-950">
                Case snapshot
              </div>
              <div className="mt-3 space-y-2 text-sm text-zinc-700">
                <div><span className="font-semibold text-zinc-900">Type:</span> {caseType}</div>
                <div><span className="font-semibold text-zinc-900">Role:</span> {filingRole}</div>
                <div><span className="font-semibold text-zinc-900">Urgency:</span> {urgency}</div>
                <div><span className="font-semibold text-zinc-900">County:</span> {county || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Court date:</span> {courtDate || "—"}</div>
                <div><span className="font-semibold text-zinc-900">Docs ready:</span> {docsReady}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
            <div className="text-sm font-semibold text-zinc-950">
              Internal note for restore
            </div>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              This file reflects the December backup state and carries THOXIE-style
              legal intake logic rather than insurance-site signup logic. Restore
              it exactly first if your goal is to reproduce the backup, then decide
              later whether to remove or replace this flow.
            </p>
          </div>
        </section>
      </form>
    </main>
  );
}
