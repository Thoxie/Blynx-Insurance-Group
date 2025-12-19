export default function Home() {
  return (
    <main style={{ padding: "48px 24px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>
          Blynx Insurance Group
        </h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 720 }}>
          Complex insurance needs require broader market access. We help
          affluent individuals, families, and business owners structure
          coverage with clarity, speed, and discretion.
        </p>
      </header>

      <section style={{ display: "grid", gap: 16 }}>
        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>What we do</h2>
          <ul style={{ marginTop: 10, lineHeight: 1.8 }}>
            <li>Coverage review and gap analysis</li>
            <li>Market placement strategy and carrier access</li>
            <li>Risk management support for businesses</li>
            <li>Ongoing policy management and renewal advocacy</li>
          </ul>
        </div>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Next step</h2>
          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
            This is the baseline build. Next we’ll add a proper layout, brand
            styling, navigation (Home / Services / About / Contact), and a
            contact intake form.
          </p>
        </div>
      </section>
    </main>
  );
}
