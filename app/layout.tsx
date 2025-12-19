import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blynx Insurance Group",
  description:
    "Insurance advisory and risk management platform for high-net-worth individuals, families, and business owners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
