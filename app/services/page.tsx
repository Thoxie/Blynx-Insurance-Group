export default function ServicesPage() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 38, lineHeight: 1.15, margin: 0 }}>Services</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 760 }}>
          Complex insurance needs require broader market access. We help
          clients evaluate risk, structure coverage, and place policies with
          speed and discretion.
        </p>
      </header>

      <section style={{ display: "grid", gap: 14 }}>
        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Coverage Review</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Identify gaps, redundancies, and hidden exclusions across personal
            and commercial policies. Prioritize changes that materially reduce
            downside risk.
          </p>
        </div>

        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Market Placement</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Access broader markets and carriers for complex risks — including
            layered programs, specialty lines, and business exposures.
          </p>
        </div>

        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Business Risk Management</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Support for coverage strategy tied to operations: liability,
            property, cyber, EPLI, and other business-critical protections.
          </p>
        </div>

        <div
          style={{
            padding: 20,
            border: "1px solid #e5e7eb",
            borderRadius: 12,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 20 }}>Ongoing Advocacy</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            Renewal management, carrier communication, documentation support,
            and help navigating time-sensitive changes when life or business
            conditions shift.
          </p>
        </div>
      </section>
    </main>
  );
}

