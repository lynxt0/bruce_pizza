import Link from "next/link";
import { Pizza, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white">
      {/* Checkered accent strip */}
      <div className="checkered-border" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Pizza size={24} className="text-[#F59E0B]" />
            <span className="font-heading font-700 text-lg tracking-wide">
              Bruce&apos;s <span className="text-[#F59E0B]">Ozzie Pizza</span>
            </span>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            Serving the Bateau Bay community on the Central Coast since the
            beginning. Real pizza, real people, real good.
          </p>
          <p className="mt-3 text-xs text-stone-500">
            10% surcharge applies on Saturdays.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-heading font-600 text-[#F59E0B] uppercase tracking-widest text-sm mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-stone-300">
            {[
              { label: "Home", href: "/" },
              { label: "Our Menu", href: "/menu" },
              { label: "Contact & Hours", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#F59E0B] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="font-heading font-600 text-[#F59E0B] uppercase tracking-widest text-sm mb-4">
            Find Us
          </h3>
          <ul className="space-y-3 text-sm text-stone-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#F59E0B]" />
              <span>2/213 Bateau Bay Road, Bateau Bay NSW 2261</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#F59E0B]" />
              <a href="tel:0243341511" className="hover:text-[#F59E0B] transition-colors">
                (02) 4334 1511
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-[#F59E0B]" />
              <span>
                Tue–Wed &amp; Sun: 5pm–9pm<br />
                Thu: 5pm–9:30pm<br />
                Fri–Sat: 5pm–10pm<br />
                Mon: Closed
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-500 px-4">
        © {new Date().getFullYear()} Bruce&apos;s Ozzie Pizza — Bateau Bay, NSW.
        All rights reserved.
      </div>
    </footer>
  );
}
