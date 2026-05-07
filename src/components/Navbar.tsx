"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Clock } from "lucide-react";

const links = [
  { label: "Home",       href: "/" },
  { label: "Wine",       href: "/wine" },
  { label: "Craft Beer", href: "/beer" },
  { label: "About",      href: "/about" },
];

/** Today's opening hours for the quick-info strip */
function getTodayHours(): string {
  const day = new Date().getDay(); // 0=Sun … 6=Sat
  if (day === 0) return "9am – 6pm today";
  if (day === 6) return "8am – 8pm today";
  if (day === 4 || day === 5) return "7am – 8pm today";
  return "7am – 7pm today";
}

export default function Navbar() {
  const [open,    setOpen]    = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on navigation */
  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";

  /* Transparent on home hero, solid when scrolled or on inner pages */
  const headerBg = scrolled || !isHome
    ? "bg-[#141210]/95 backdrop-blur-md border-b border-[#C08030]/20 shadow-lg"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>

      {/* ── Mobile-only hours strip (visible only at top on home) ── */}
      {isHome && !scrolled && (
        <div className="md:hidden bg-[#C08030]/90 text-[#141210] text-[11px] text-center py-1.5 px-4 font-body font-600 tracking-wide">
          <Clock size={11} className="inline mr-1.5 -mt-0.5" />
          {getTodayHours()} · <a href="tel:0243328033" className="underline underline-offset-2">(02) 4332 8033</a>
        </div>
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* ── Wordmark ── */}
        <Link
          href="/"
          className="group flex flex-col leading-none"
          aria-label="Bateau Bay Cellars — Home"
        >
          <span className="font-display font-700 text-white text-lg sm:text-xl tracking-tight leading-none group-hover:text-[#C08030] transition-colors duration-200">
            Bateau Bay
          </span>
          <span className="font-display font-400 italic text-[#C08030] text-base sm:text-lg tracking-wide leading-none">
            Cellars
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`nav-link font-body font-500 text-sm tracking-wider uppercase transition-colors duration-200 ${
                    active ? "text-[#C08030]" : "text-white/85 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop phone CTA ── */}
        <a
          href="tel:0243328033"
          className="
            hidden md:inline-flex items-center gap-2
            bg-[#C08030] hover:bg-[#D4993F] active:bg-[#8C5C20]
            text-[#141210] font-body font-600
            text-xs tracking-[0.12em] uppercase
            px-5 py-2.5 rounded-full
            transition-all duration-200 hover:scale-105 active:scale-95
          "
        >
          <Phone size={14} strokeWidth={2.5} />
          (02) 4332 8033
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden text-white p-2 -mr-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#141210] border-t border-[#C08030]/20 px-4 pt-3 pb-5"
        >
          <ul className="flex flex-col gap-0.5 mb-4">
            {links.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-3 px-3 rounded-lg font-body font-500 text-sm uppercase tracking-wider transition-colors ${
                      active
                        ? "text-[#C08030] bg-[#C08030]/10"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hours summary */}
          <div className="border-t border-white/10 pt-4 mb-3 text-white/50 text-xs flex items-start gap-2">
            <Clock size={13} className="mt-0.5 shrink-0 text-[#C08030]" />
            <span>
              Mon–Wed 7am–7pm · Thu–Fri 7am–8pm<br />
              Sat 8am–8pm · Sun 9am–6pm
            </span>
          </div>

          <a
            href="tel:0243328033"
            className="flex items-center justify-center gap-2 bg-[#C08030] hover:bg-[#D4993F] text-[#141210] font-body font-600 text-sm uppercase tracking-widest py-3.5 rounded-full transition-colors"
          >
            <Phone size={16} />
            (02) 4332 8033
          </a>
        </div>
      )}
    </header>
  );
}
