import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.08, margin: 0 }}>
          Blynx Insurance Group
        </h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 760 }}>
          Complex insurance needs require broader market access. We help
          affluent individuals, families, and business owners structure coverage
          with clarity, speed, and discretion.
        </p>

        <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #111827",
              background: "#111827",
              color: "white",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            Request a call
          </Link>

          <Link
            href="/services"
            style={{
              textDecoration: "none",
              padding: "10px 14px",
              borderRadius: 12,
              border: "1px solid #e5e7eb",
              color: "inherit",
              fontWeight: 600,
              display: "inline-block",
            }}
          >
            View services
          </Link>
        </div>
      </header>

      <section style={{ display: "grid", gap: 14 }}>
        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Who we serve</h2>
          <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
            <li>Affluent individuals and families with complex personal risk</li>
            <li>Business owners seeking durable coverage strategy</li>
            <li>Clients needing access beyond standard markets</li>
          </ul>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>What we do</h2>
          <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
            <li>Coverage review and gap analysis</li>
            <li>Market placement strategy and carrier access</li>
            <li>Business risk management support</li>
            <li>Ongoing policy management and renewal advocacy</li>
          </ul>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Next step</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Tell us what you’re trying to solve. We’ll respond quickly and
            outline an initial approach.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link href="/contact" style={{ textDecoration: "underline" }}>
              Go to Contact →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
