import type { Metadata } from "next";
import { Oswald, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

/* ─── Fonts ───────────────────────────────────────────────────────────────── */
const heading = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/* ─── Site metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Bruce's Ozzie Pizza | Bateau Bay, NSW",
    template: "%s | Bruce's Ozzie Pizza",
  },
  description:
    "Bateau Bay's favourite local pizza joint since forever. Handcrafted pizzas, ribs, pasta & more. Takeaway & delivery on the Central Coast, NSW. Call (02) 4334 1511.",
  keywords: [
    "pizza",
    "Bateau Bay",
    "Central Coast",
    "NSW",
    "takeaway",
    "delivery",
    "pizza near me",
    "gluten free pizza",
    "ribs",
    "pasta",
  ],
  openGraph: {
    title: "Bruce's Ozzie Pizza | Bateau Bay, NSW",
    description:
      "Bateau Bay's favourite local pizza joint. Handcrafted pizzas, ribs, pasta & more on the Central Coast.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FFFBEB]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Floating "Call to Order" button — visible on mobile only */}
        <StickyCallButton />
      </body>
    </html>
  );
}
