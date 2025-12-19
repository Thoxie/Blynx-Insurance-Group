import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, margin: 0 }}>Services</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 760 }}>
          Complex insurance needs require broader market access. We help clients
          evaluate risk, structure coverage, and place policies with speed and
          discretion.
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
            href="/about"
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
            Our approach
          </Link>
        </div>
      </header>

      <section style={{ display: "grid", gap: 14 }}>
        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Coverage Review</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Identify gaps, redundancies, and hidden exclusions across personal
            and commercial policies. Prioritize changes that materially reduce
            downside risk.
          </p>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Market Placement</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Access broader markets and carriers for complex risks — including
            layered programs, specialty lines, and business exposures.
          </p>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Business Risk Management</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Coverage strategy tied to operations: liability, property, cyber,
            EPLI, and other business-critical protections.
          </p>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Ongoing Advocacy</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Renewal management, carrier communication, documentation support,
            and help navigating time-sensitive changes when life or business
            conditions shift.
          </p>
        </div>
      </section>

      <section style={{ marginTop: 18, display: "grid", gap: 14 }}>
        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>How it works</h2>
          <ol style={{ marginTop: 10, lineHeight: 1.8, paddingLeft: 18 }}>
            <li>
              <strong>Discovery:</strong> brief intake to understand your risk,
              timelines, and constraints.
            </li>
            <li>
              <strong>Structure:</strong> coverage strategy that clarifies what
              matters and what doesn’t.
            </li>
            <li>
              <strong>Placement:</strong> market execution with carrier options
              aligned to the structure.
            </li>
            <li>
              <strong>Ongoing:</strong> renewals, changes, and advocacy when the
              situation evolves.
            </li>
          </ol>

          <div style={{ marginTop: 14 }}>
            <Link href="/contact" style={{ textDecoration: "underline" }}>
              Start with a short request →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

