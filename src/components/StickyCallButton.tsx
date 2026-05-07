"use client";

import { Phone } from "lucide-react";

/**
 * Floating call button — visible on mobile only (md:hidden).
 * Fixed bottom-right so customers can always tap to call.
 */
export default function StickyCallButton() {
  return (
    <a
      href="tel:0243328033"
      aria-label="Call Bateau Bay Cellars"
      className="
        md:hidden
        fixed bottom-5 right-4 z-50
        flex items-center gap-2
        bg-[#C08030] hover:bg-[#D4993F] active:bg-[#8C5C20]
        text-[#141210]
        font-body font-600 text-sm uppercase tracking-widest
        px-4 py-3 rounded-full shadow-xl
        transition-all duration-200
        active:scale-95
      "
    >
      <Phone size={17} strokeWidth={2.5} />
      <span>Call Us</span>
    </a>
  );
}
