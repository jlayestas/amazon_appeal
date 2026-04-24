import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://amazonappealpro.com"; // TODO: replace with real domain

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Amazon Appeal Pro — Independent Amazon Consulting",
    template: "%s — Amazon Appeal Pro",
  },
  description:
    "Independent support for Amazon account suspensions, ASIN removals, and brand IP complaints. Appeal drafting, Plan of Action preparation, and strategy guidance.",
  keywords: [
    "Amazon appeal",
    "Amazon account suspension",
    "ASIN reinstatement",
    "Plan of Action",
    "Amazon seller consulting",
    "IP complaint support",
  ],
  authors: [{ name: "Amazon Appeal Pro" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Amazon Appeal Pro",
    title: "Amazon Appeal Pro — Independent Amazon Consulting",
    description:
      "Independent support for Amazon account suspensions, ASIN removals, and brand IP complaints.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amazon Appeal Pro — Independent Amazon Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Appeal Pro — Independent Amazon Consulting",
    description:
      "Independent support for Amazon account suspensions, ASIN removals, and brand IP complaints.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // lang is set per-locale via the [locale] layout's generateMetadata alternates.
  // We default to "en" here; the locale layout injects the correct lang via metadata.
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#f9f7f4] font-sans text-[#1a1a2e]">
        {children}
      </body>
    </html>
  );
}
