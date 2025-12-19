import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blynx Insurance Group",
  description:
    "Insurance advisory and risk management platform for high-net-worth individuals, families, and business owners.",
};

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        padding: "8px 10px",
        borderRadius: 10,
      }}
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            borderBottom: "1px solid #e5e7eb",
            padding: "16px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 700,
                letterSpacing: 0.2,
              }}
            >
              Blynx Insurance Group
            </Link>

            <nav style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: "calc(100vh - 140px)" }}>{children}</main>

        <footer
          style={{
            borderTop: "1px solid #e5e7eb",
            padding: "18px 24px",
            color: "#4b5563",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: 14 }}>
            © {new Date().getFullYear()} Blynx Insurance Group. All rights
            reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
