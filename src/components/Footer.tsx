import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "Wine",       href: "/wine" },
  { label: "Craft Beer", href: "/beer" },
  { label: "About & Find Us", href: "/about" },
];

const hours = [
  { day: "Monday – Wednesday", time: "7:00am – 7:00pm" },
  { day: "Thursday – Friday",  time: "7:00am – 8:00pm" },
  { day: "Saturday",           time: "8:00am – 8:00pm" },
  { day: "Sunday",             time: "9:00am – 6:00pm" },
];

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-white">

      {/* ── Decorative top rule ── */}
      <div className="divider-gold" />

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="mb-4">
            <span className="font-display font-700 text-white text-xl tracking-tight block leading-tight">
              Bateau Bay
            </span>
            <span className="font-display font-400 italic text-[#C08030] text-lg tracking-wide block leading-tight">
              Cellars
            </span>
          </div>
          <p className="text-sm text-white/55 leading-relaxed mb-4">
            Your go-to destination for craft beer, cool-climate wines and premium spirits
            on the Central Coast. Part of the KG&nbsp;Liquor group.
          </p>
          <p className="text-[11px] text-white/35 leading-relaxed">
            Liquor Licence No: LIQP700300612
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-body font-600 text-[#C08030] uppercase tracking-[0.15em] text-xs mb-5">
            Explore
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm text-white/60 hover:text-[#C08030] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-body font-600 text-[#C08030] uppercase tracking-[0.15em] text-xs mb-5">
            <Clock size={12} className="inline mr-1.5 -mt-0.5" />
            Opening Hours
          </h3>
          <ul className="space-y-2">
            {hours.map(({ day, time }) => (
              <li key={day} className="flex justify-between gap-4 text-xs">
                <span className="text-white/50">{day}</span>
                <span className="text-white/80 shrink-0">{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-body font-600 text-[#C08030] uppercase tracking-[0.15em] text-xs mb-5">
            Find Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#C08030]" />
              <address className="not-italic text-sm text-white/60 leading-snug">
                566 The Entrance Rd<br />
                Bateau Bay NSW 2261
              </address>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="shrink-0 text-[#C08030]" />
              <a
                href="tel:0243328033"
                className="text-sm text-white/60 hover:text-[#C08030] transition-colors duration-200"
              >
                (02) 4332 8033
              </a>
            </li>
          </ul>

          {/* Google Maps link */}
          <a
            href="https://maps.google.com/?q=566+The+Entrance+Road+Bateau+Bay+NSW+2261"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-1.5 mt-5
              text-[11px] text-white/40 hover:text-[#C08030]
              border border-white/15 hover:border-[#C08030]/40
              rounded-full px-3.5 py-1.5
              transition-all duration-200
            "
          >
            Open in Google Maps ↗
          </a>
        </div>
      </div>

      {/* ── RSA notice ── */}
      <div className="border-t border-white/10 bg-[#0F0D0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-[11px] text-white/40 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-white/55 font-600">Responsible Service of Alcohol:</strong>{" "}
            It is against the law to sell or supply alcohol to, or to obtain alcohol on behalf of,
            a person under the age of 18&nbsp;years.
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06] bg-[#0F0D0B] py-4 text-center text-[11px] text-white/25 px-4">
        © {new Date().getFullYear()} Bateau Bay Cellars · Part of KG Liquor Group · All rights reserved.
      </div>
    </footer>
  );
}
