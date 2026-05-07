import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Find Us",
  description:
    "Visit Bateau Bay Cellars at 566 The Entrance Rd, Bateau Bay NSW 2261. Opening hours, directions, phone number and our story. Open 7 days.",
};

/* ─── Data ────────────────────────────────────────────────────────────────── */

const hours = [
  { day: "Monday",           open: "7:00 am", close: "7:00 pm", isToday: false },
  { day: "Tuesday",          open: "7:00 am", close: "7:00 pm", isToday: false },
  { day: "Wednesday",        open: "7:00 am", close: "7:00 pm", isToday: false },
  { day: "Thursday",         open: "7:00 am", close: "8:00 pm", isToday: false },
  { day: "Friday",           open: "7:00 am", close: "8:00 pm", isToday: false },
  { day: "Saturday",         open: "8:00 am", close: "8:00 pm", isToday: false },
  { day: "Sunday",           open: "9:00 am", close: "6:00 pm", isToday: false },
];

/** Zero-indexed day of week: 0 = Sunday */
function getTodayDayName(): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[new Date().getDay()];
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  const todayName = getTodayDayName();

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
        {/*
          About page hero — warm, welcoming bottle shop interior.
          Replace with real store photography when available.
        */}
        <Image
          src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1600&q=85"
          alt="Inside a warm, beautifully stocked bottle shop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="hero-gradient absolute inset-0" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #F4EEE0 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
            566 The Entrance Rd · Bateau Bay NSW
          </p>
          <h1 className="font-display font-800 text-white text-5xl sm:text-6xl leading-tight">
            Find Us
          </h1>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="bg-[#F4EEE0] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 xl:gap-20">

          {/* Left — About & Contact */}
          <div>
            {/* Store story */}
            <div className="mb-12">
              <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
                Our story
              </p>
              <h2 className="font-display font-700 text-[#141210] text-3xl sm:text-4xl leading-tight mb-5">
                Part of Bateau Bay.<br />
                <span className="italic text-[#5C1928]">Since always.</span>
              </h2>
              <div className="space-y-4 text-[#5A4F45] font-body font-400 text-base leading-relaxed">
                <p>
                  Bateau Bay Cellars has been the go-to bottle shop for the local community for years.
                  Tucked away at 566 The Entrance Road, we&apos;re the kind of place you come back to
                  not just because we stock what you&apos;re after, but because someone here will actually
                  help you find something you didn&apos;t know you were looking for.
                </p>
                <p>
                  We&apos;re part of the KG Liquor group — a family of independently-spirited bottle
                  shops spread across the Central Coast and Newcastle. Being part of a group gives us the
                  buying power of a bigger retailer, but we run each store like it&apos;s our own. Bateau Bay
                  has its own character, its own regulars, and its own opinion on what belongs on the shelf.
                </p>
                <p>
                  We focus on craft beer, cool-climate wine, and a rotating selection of cleanskin labels
                  that represent genuinely extraordinary value. But we also stock everything you need for
                  a big night, a quiet Tuesday, or a last-minute bottle for dinner. Come say hi.
                </p>
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-[#141210] rounded-2xl p-7 mb-8">
              <h3 className="font-display font-700 text-white text-xl mb-5">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C08030] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-body font-500 text-white text-sm">Address</p>
                    <address className="not-italic font-body font-400 text-white/60 text-sm leading-snug mt-0.5">
                      566 The Entrance Road<br />
                      Bateau Bay NSW 2261
                    </address>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[#C08030] shrink-0" />
                  <div>
                    <p className="font-body font-500 text-white text-sm">Phone</p>
                    <a
                      href="tel:0243328033"
                      className="font-body font-400 text-white/60 hover:text-[#C08030] text-sm transition-colors mt-0.5 block"
                    >
                      (02) 4332 8033
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:0243328033"
                  className="
                    inline-flex items-center gap-2
                    bg-[#C08030] hover:bg-[#D4993F]
                    text-[#141210] font-body font-600
                    text-xs uppercase tracking-widest
                    px-5 py-3 rounded-full
                    transition-all duration-200 hover:scale-105
                  "
                >
                  <Phone size={14} />
                  Call us
                </a>
                <a
                  href="https://maps.google.com/?q=566+The+Entrance+Road+Bateau+Bay+NSW+2261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    bg-white/10 hover:bg-white/20
                    border border-white/20 hover:border-white/40
                    text-white/70 hover:text-white
                    font-body font-500
                    text-xs uppercase tracking-widest
                    px-5 py-3 rounded-full
                    transition-all duration-200
                  "
                >
                  <ExternalLink size={14} />
                  Directions
                </a>
              </div>
            </div>

            {/* KG Liquor group mention */}
            <div className="border border-[#D4C9B8] rounded-xl p-5">
              <p className="font-body font-500 text-[#5A4F45] text-sm mb-1">
                Part of the KG Liquor Group
              </p>
              <p className="font-body font-400 text-[#8A7D70] text-xs leading-relaxed mb-3">
                We&apos;re one of four stores across the Central Coast and Newcastle —
                including Tighes Hill Cellars, Munmorah Liquor Supplies, and
                Mannering Park Cellars.
              </p>
              <a
                href="https://kgliquor.com.au/our-stores"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-body font-500 text-[#5C1928] hover:text-[#C08030] transition-colors"
              >
                See all KG Liquor stores
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Right — Hours + Map */}
          <div>
            {/* Opening hours */}
            <div className="mb-8">
              <h3 className="font-display font-700 text-[#141210] text-2xl mb-5 flex items-center gap-3">
                <Clock size={22} className="text-[#C08030]" />
                Opening Hours
              </h3>
              <div className="space-y-2">
                {hours.map(({ day, open, close }) => {
                  const isToday = day === todayName;
                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        isToday
                          ? "bg-[#5C1928] text-white"
                          : "bg-white border border-[#E6DDD0] text-[#5A4F45]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-body font-500 text-sm ${isToday ? "text-white" : ""}`}>
                          {day}
                        </span>
                        {isToday && (
                          <span className="bg-[#C08030] text-[#141210] text-[9px] font-body font-700 tracking-widest uppercase px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={`font-body font-400 text-sm ${isToday ? "text-white/80" : "text-[#8A7D70]"}`}>
                        {open} – {close}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden border border-[#D4C9B8] shadow-sm">
              <iframe
                title="Bateau Bay Cellars on Google Maps"
                src="https://www.google.com/maps?q=566+The+Entrance+Road,+Bateau+Bay+NSW+2261&output=embed"
                width="100%"
                height="320"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="bg-white px-4 py-3 flex items-center justify-between">
                <span className="font-body font-400 text-[#8A7D70] text-xs">
                  566 The Entrance Rd, Bateau Bay NSW 2261
                </span>
                <a
                  href="https://maps.google.com/?q=566+The+Entrance+Road+Bateau+Bay+NSW+2261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5C1928] hover:text-[#C08030] font-body font-500 text-xs flex items-center gap-1 transition-colors"
                >
                  Open in Maps
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RSA notice — full width, prominent ── */}
      <section className="bg-[#141210] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="divider-gold mb-8" />
          <p className="font-body font-400 text-white/40 text-xs tracking-widest uppercase mb-3">
            Responsible Service of Alcohol
          </p>
          <p className="font-body font-400 text-white/55 text-base leading-relaxed mb-4">
            It is against the law to sell or supply alcohol to, or to obtain alcohol on behalf of,
            a person under the age of&nbsp;18&nbsp;years.
          </p>
          <p className="font-body font-400 text-white/30 text-xs">
            Liquor Licence No: LIQP700300612
          </p>
          <div className="divider-gold mt-8" />
        </div>
      </section>

      {/* ── Visit CTA ── */}
      <section className="bg-[#EAE3D2] py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display font-700 text-[#141210] text-3xl sm:text-4xl leading-tight mb-4">
            We&apos;d love to see you.
          </h2>
          <p className="font-body font-400 text-[#5A4F45] text-base leading-relaxed mb-8">
            Open every day of the week. No appointment needed — just come in, browse,
            and let us know if we can help you find something.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wine"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#5C1928] hover:bg-[#7D2538]
                text-white font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200 hover:scale-105
              "
            >
              Explore wine
            </Link>
            <Link
              href="/beer"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#1B3429] hover:bg-[#27493A]
                text-white font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200 hover:scale-105
              "
            >
              Explore beer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
