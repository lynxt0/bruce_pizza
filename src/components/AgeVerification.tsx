"use client";

import { useState, useEffect } from "react";

const SESSION_KEY = "bbc_age_verified";

/**
 * Age Verification Gate — required by Australian liquor law.
 *
 * Shown as a full-screen overlay on first visit within a browser session.
 * Confirmation is stored in sessionStorage (clears when tab is closed).
 * "No" redirects to a neutral external page per industry best practice.
 */
export default function AgeVerification() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show the gate if not yet verified this session
    if (!sessionStorage.getItem(SESSION_KEY)) {
      setVisible(true);
      // Prevent scrolling behind the overlay
      document.body.style.overflow = "hidden";
    }
  }, []);

  function handleYes() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setVisible(false);
    document.body.style.overflow = "";
  }

  function handleNo() {
    // Redirect away — standard practice for underage visitors
    window.location.href = "https://www.google.com.au";
  }

  if (!visible) return null;

  return (
    <div
      className="age-gate-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-heading"
    >
      <div className="relative max-w-sm w-full mx-4 text-center">
        {/* Decorative top rule */}
        <div className="divider-gold mb-8" />

        {/* Store wordmark */}
        <p
          className="font-display text-[#C08030] text-sm tracking-[0.35em] uppercase mb-2"
          aria-hidden="true"
        >
          Bateau Bay Cellars
        </p>

        <h1
          id="age-gate-heading"
          className="font-display font-700 text-white text-3xl sm:text-4xl leading-tight mb-3"
        >
          Are you 18 or over?
        </h1>

        <p className="text-white/60 text-sm leading-relaxed mb-10">
          You must be of legal drinking age to enter this site.
          By entering, you confirm you are 18&nbsp;years or older.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleYes}
            className="
              flex-1 sm:flex-none
              bg-[#C08030] hover:bg-[#D4993F] active:bg-[#8C5C20]
              text-[#141210] font-body font-600
              text-sm tracking-widest uppercase
              px-10 py-4 rounded-full
              transition-all duration-200 hover:scale-105 active:scale-95
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C08030]
            "
          >
            Yes, I&apos;m 18+
          </button>
          <button
            onClick={handleNo}
            className="
              flex-1 sm:flex-none
              bg-transparent border border-white/25 hover:border-white/50
              text-white/60 hover:text-white font-body font-400
              text-sm tracking-widest uppercase
              px-10 py-4 rounded-full
              transition-all duration-200
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50
            "
          >
            No
          </button>
        </div>

        {/* Legal notice */}
        <p className="text-white/35 text-[11px] leading-relaxed mt-8 max-w-xs mx-auto">
          It is against the law to sell or supply alcohol to, or to obtain
          alcohol on behalf of, a person under the age of&nbsp;18&nbsp;years.
        </p>

        {/* Decorative bottom rule */}
        <div className="divider-gold mt-8" />
      </div>
    </div>
  );
}
