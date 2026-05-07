import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import AgeVerification from "@/components/AgeVerification";

/* ─── Fonts ───────────────────────────────────────────────────────────────── */

/**
 * Playfair Display — elegant editorial serif for headings.
 * Gives the site its boutique, Decanter-magazine personality.
 */
const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

/**
 * DM Sans — clean, modern humanist sans-serif for body copy.
 * Warm and approachable without being corporate.
 */
const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* ─── Site metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Bateau Bay Cellars | Bottle Shop · Central Coast NSW",
    template: "%s | Bateau Bay Cellars",
  },
  description:
    "Your go-to destination for craft beer, cool-climate wines and premium spirits on the Central Coast. Visit us at 566 The Entrance Rd, Bateau Bay NSW — locally loved, genuinely knowledgeable.",
  keywords: [
    "Bateau Bay Cellars",
    "bottle shop",
    "Central Coast",
    "NSW",
    "craft beer",
    "cool climate wine",
    "cleanskin wine",
    "spirits",
    "KG Liquor",
    "Bateau Bay",
    "The Entrance",
    "liquor store",
  ],
  openGraph: {
    title: "Bateau Bay Cellars | Bottle Shop · Central Coast NSW",
    description:
      "Craft beer, cool-climate wines and premium spirits — your local bottle shop in Bateau Bay.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F4EEE0]">
        {/* Age verification gate — required by Australian liquor law */}
        <AgeVerification />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Floating call button — mobile only */}
        <StickyCallButton />
      </body>
    </html>
  );
}
