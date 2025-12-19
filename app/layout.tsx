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
      className="rounded-xl px-3 py-2 font-semibold text-sm hover:bg-gray-100 transition"
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
      <body className="min-h-screen flex flex-col text-gray-900">
        <header className="border-b border-gray-200 px-6 py-4">
          <div className="mx-auto max-w-6xl flex items-center justify-between gap-4">
            <Link
              href="/"
              className="font-bold tracking-tight text-base"
            >
              Blynx Insurance Group
            </Link>

            <nav className="flex items-center gap-2">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 px-6 py-5 text-sm text-gray-600">
          <div className="mx-auto max-w-6xl">
            © {new Date().getFullYear()} Blynx Insurance Group. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
