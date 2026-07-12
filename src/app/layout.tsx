import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wrightbythebeach.com"),
  title: {
    default: "Wright by the Beach | Kill Devil Hills, NC Vacation Rental",
    template: "%s | Wright by the Beach",
  },
  description:
    "A 5-bedroom oceanside vacation rental in Kill Devil Hills, Outer Banks, NC — sleeps 10, hot tub, ocean views, and a no-stairs, 5-minute walk to the beach. Steps from the Wright Brothers Memorial.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "vacation rental Kill Devil Hills",
    "Outer Banks vacation rental",
    "OBX pet friendly rental",
    "Kill Devil Hills beach house",
    "house near Wright Brothers Memorial",
    "Outer Banks rental with hot tub",
  ],
  openGraph: {
    title: "Wright by the Beach | Kill Devil Hills, NC Vacation Rental",
    description:
      "A 5-bedroom oceanside vacation rental in Kill Devil Hills, Outer Banks, NC — sleeps 10, hot tub, ocean views, and a no-stairs, 5-minute walk to the beach.",
    url: "https://wrightbythebeach.com",
    siteName: "Wright by the Beach",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-ink font-sans">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
