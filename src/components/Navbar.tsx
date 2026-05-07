"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Pizza } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /* Shrink/solidify navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#9B1C1C] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Bruce's Ozzie Pizza — Home"
        >
          <span className="text-[#F59E0B] group-hover:scale-110 transition-transform">
            <Pizza size={28} strokeWidth={2.5} />
          </span>
          <span
            className="font-heading font-700 text-white leading-none tracking-wide"
            style={{ fontSize: "1.25rem" }}
          >
            Bruce&apos;s{" "}
            <span className="text-[#F59E0B]">Ozzie Pizza</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-heading font-600 text-base tracking-wider uppercase transition-colors ${
                  pathname === href
                    ? "text-[#F59E0B] border-b-2 border-[#F59E0B] pb-0.5"
                    : "text-white hover:text-[#F59E0B]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:0243341511"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-heading font-700 text-sm uppercase tracking-widest px-5 py-2 rounded-full transition-colors"
            >
              Call to Order
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#7F1D1D] border-t border-[#DC2626]/40 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-3 px-3 rounded font-heading font-600 uppercase tracking-wider transition-colors ${
                    pathname === href
                      ? "text-[#F59E0B]"
                      : "text-white hover:text-[#F59E0B] hover:bg-[#9B1C1C]/40"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:0243341511"
                className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-heading font-700 uppercase tracking-widest py-3 rounded-full transition-colors"
              >
                📞 (02) 4334 1511
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
