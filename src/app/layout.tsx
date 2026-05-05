import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Amazon Seller Suspension Appeal Support`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Independent Amazon seller suspension appeal support, Plan of Action help, ASIN reinstatement support, and IP complaint response guidance.",
  keywords: [
    "Amazon appeal",
    "Amazon account suspension",
    "ASIN reinstatement",
    "Plan of Action",
    "Amazon seller consulting",
    "IP complaint support",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Amazon Seller Suspension Appeal Support`,
    description:
      "Independent Amazon seller suspension appeal support, Plan of Action help, ASIN reinstatement support, and IP complaint response guidance.",
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Amazon seller appeal support`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Amazon Seller Suspension Appeal Support`,
    description:
      "Independent Amazon seller suspension appeal support, Plan of Action help, ASIN reinstatement support, and IP complaint response guidance.",
    images: [OG_IMAGE_PATH],
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
