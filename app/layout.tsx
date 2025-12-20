// PATH: app/layout.tsx

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
      className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <button
        type="button"
        className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
      >
        {label}
      </button>

      {/* HOVER GAP BRIDGE: fixes “dead zone” for Products/Resources/About */}
      <div className="absolute left-0 top-full h-2 w-full" />

      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 top-full z-50 mt-2 w-[320px] rounded-2xl border border-gray-200 bg-white shadow-lg p-2">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc?: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-3 py-2 hover:bg-gray-50 transition"
    >
      <div className="text-sm font-semibold text-gray-900">{title}</div>
      {desc ? <div className="text-xs text-gray-600 mt-0.5">{desc}</div> : null}
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
            <div className="flex items-center gap-3">
              <Link href="/" className="font-bold tracking-tight text-base">
                Blynx Insurance Group
              </Link>
              <span className="hidden md:inline text-xs text-gray-500">
                Complex insurance needs require a fixer with market access.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-1">
                <NavLink href="/">Home</NavLink>

                <Dropdown label="Products">
                  <div className="grid gap-1">
                    <DropdownItem
                      href="/products/personal"
                      title="Personal Insurance"
                      desc="Auto, home, umbrella, specialty."
                    />
                    <DropdownItem
                      href="/products/business"
                      title="Business Insurance"
                      desc="Liability, property, cyber, workers’ comp."
                    />
                    <DropdownItem
                      href="/products/benefits"
                      title="Employee Benefits"
                      desc="Group health and benefits strategy."
                    />
                    <DropdownItem
                      href="/products/life-health"
                      title="Life & Health"
                      desc="Life, disability, long-term care."
                    />
                  </div>
                </Dropdown>

                <Dropdown label="Resources">
                  <div className="grid gap-1">
                    <DropdownItem
                      href="/resources/refer"
                      title="Refer a Friend"
                      desc="Introduce someone who needs coverage help."
                    />
                    <DropdownItem
                      href="/resources/carriers"
                      title="Our Carriers"
                      desc="Selected carrier and market access."
                    />
                  </div>
                </Dropdown>

                <Dropdown label="About">
                  <div className="grid gap-1">
                    {/* FIX: your route is /about-us, not /about */}
                    <DropdownItem
                      href="/about-us"
                      title="About Us"
                      desc="Approach, discretion, who we serve."
                    />

                    {/* Keep this ONLY if you actually have app/about-us/testimonials/page.tsx */}
                    {/* <DropdownItem
                      href="/about-us/testimonials"
                      title="Testimonials"
                      desc="What clients say."
                    /> */}

                    <DropdownItem
                      href="/privacy"
                      title="Privacy Policy"
                      desc="How we handle information."
                    />
                  </div>
                </Dropdown>

                <NavLink href="/contact">Contact</NavLink>
              </nav>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 px-6 py-6 text-sm text-gray-600">
          <div className="mx-auto max-w-6xl flex flex-col gap-3">
            <div>© {new Date().getFullYear()} Blynx Insurance Group.</div>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/contact" className="underline">
                Contact
              </Link>
              <Link href="/privacy" className="underline">
                Privacy
              </Link>
              <Link href="/resources/carriers" className="underline">
                Our Carriers
              </Link>
              <Link href="/quote" className="underline">
                Get a Quote
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

