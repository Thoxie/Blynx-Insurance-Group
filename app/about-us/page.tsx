import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, margin: 0 }}>About</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 760 }}>
          Blynx Insurance Group advises clients with complex insurance needs
          where judgment, access, and execution matter.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
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
          <h2 style={{ margin: 0, fontSize: 20 }}>Our approach</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            We start with risk. Not products. We focus on what creates true
            downside exposure — personal, operational, and financial — then
            structure coverage to match. The result is clarity, not noise.
          </p>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Discretion</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Many clients want speed without publicity and solutions without
            unnecessary circulation of details. We operate with a disciplined,
            need-to-know mindset.
          </p>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Who we serve</h2>
          <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
            <li>Affluent individuals and families with complex personal risk</li>
            <li>Business owners who need durable coverage strategy</li>
            <li>Clients requiring access beyond standard markets</li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Why Blynx</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Complex needs break simplistic solutions. Blynx is built to handle
            edge cases — layered coverage, business exposures, specialty lines,
            and fast-moving situations — with a clear process and strong market
            access.
          </p>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            If you want an initial view on your coverage structure, start here:
          </p>
          <p style={{ marginTop: 10 }}>
            <Link href="/contact" style={{ textDecoration: "underline" }}>
              Contact Blynx →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}


