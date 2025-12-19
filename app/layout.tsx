import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blynx Insurance Group",
  description:
    "Insurance advisory and risk management platform for high-net-worth individuals, families, and business owners.",
};

function getPathname(): string {
  // In server components we can infer the current path from request headers.
  // Works reliably on Vercel/Next runtime.
  const h = headers();
  const url = h.get("x-url") || h.get("referer") || "";
  try {
    if (url) return new URL(url).pathname || "/";
  } catch {}
  return "/";
}

function NavLink({
  href,
  label,
  currentPath,
}: {
  href: string;
  label: string;
  currentPath: string;
}) {
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: "inherit",
        padding: "8px 10px",
        borderRadius: 10,
        border: isActive ? "1px solid #111827" : "1px solid transparent",
        background: isActive ? "#111827" : "transparent",
        colorScheme: "light",
        color: isActive ? "white" : "inherit",
        fontWeight: isActive ? 700 : 600,
      }}
    >
      {label}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = getPathname();

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
              <NavLink href="/services" label="Services" currentPath={currentPath} />
              <NavLink href="/about" label="About" currentPath={currentPath} />
              <NavLink href="/contact" label="Contact" currentPath={currentPath} />
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
