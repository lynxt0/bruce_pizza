"use client";

import { Phone } from "lucide-react";

/**
 * Floating "Call to Order" button — visible on mobile only (md:hidden).
 * Fixed to the bottom of the screen so customers can always tap to call.
 */
export default function StickyCallButton() {
  return (
    <a
      href="tel:0243341511"
      aria-label="Call Bruce's Ozzie Pizza to order"
      className="
        md:hidden
        fixed bottom-5 right-4 z-50
        flex items-center gap-2
        bg-[#9B1C1C] hover:bg-[#7F1D1D]
        text-white
        font-heading font-700 text-sm uppercase tracking-widest
        px-4 py-3 rounded-full shadow-lg
        transition-all duration-200
        active:scale-95
      "
    >
      <Phone size={18} strokeWidth={2.5} />
      <span>Call to Order</span>
    </a>
  );
}
