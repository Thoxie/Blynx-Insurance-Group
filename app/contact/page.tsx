import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, margin: 0 }}>Contact</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 760 }}>
          If you have complex coverage needs, we’ll ask a few questions and
          respond quickly. Discreet, direct, and market-informed.
        </p>
      </header>

      <section style={{ display: "grid", gap: 16 }}>
        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Request a call</h2>

          <form style={{ marginTop: 12, display: "grid", gap: 12 }}>
            <div style={{ display: "grid", gap: 6 }}>
              <label htmlFor="name" style={{ fontSize: 14 }}>
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Your name"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label htmlFor="email" style={{ fontSize: 14 }}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label htmlFor="phone" style={{ fontSize: 14 }}>
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="(###) ###-####"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label htmlFor="topic" style={{ fontSize: 14 }}>
                What are you looking for?
              </label>
              <select
                id="topic"
                name="topic"
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  background: "white",
                }}
                defaultValue="coverage-review"
              >
                <option value="coverage-review">Coverage review</option>
                <option value="market-placement">Market placement</option>
                <option value="business-risk">Business risk management</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label htmlFor="message" style={{ fontSize: 14 }}>
                Brief message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="A sentence or two is enough (industry, assets, business type, timeline, etc.)."
                rows={5}
                style={{
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="button"
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid #111827",
                background: "#111827",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Submit
            </button>

            <p style={{ margin: 0, fontSize: 13, color: "#4b5563" }}>
              This form is a placeholder for now. Next step: connect it to email
              or a CRM via a Next.js API route.
            </p>
          </form>
        </div>

        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Prefer email?</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Add your preferred contact method here. If you want a mailto link,
            we’ll wire it up once you tell me the correct inbox.
          </p>

          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            You can also review our{" "}
            <Link href="/services" style={{ textDecoration: "underline" }}>
              Services
            </Link>{" "}
            page before reaching out.
          </p>
        </div>
      </section>
    </main>
  );
}
