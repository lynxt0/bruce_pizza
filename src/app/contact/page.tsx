import type { Metadata } from "next";
import { Phone, MapPin, Clock, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact & Hours",
  description:
    "Find Bruce's Ozzie Pizza at 2/213 Bateau Bay Road, Bateau Bay NSW 2261. Call (02) 4334 1511. Open Tue–Sun from 5pm. Takeaway & delivery.",
};

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "5:00pm – 9:00pm", closed: false },
  { day: "Wednesday", time: "5:00pm – 9:00pm", closed: false },
  { day: "Thursday", time: "5:00pm – 9:30pm", closed: false },
  { day: "Friday", time: "5:00pm – 10:00pm", closed: false },
  { day: "Saturday", time: "5:00pm – 10:00pm", closed: false, surcharge: true },
  { day: "Sunday", time: "5:00pm – 9:00pm", closed: false },
];

/* Determine today's day of week for highlighting */
function getTodayIndex() {
  // 0=Sun, 1=Mon... but our array starts at Mon=index 0
  const jsDay = new Date().getDay(); // 0=Sun
  // Map JS day to our hours array index (Mon=0 … Sun=6)
  return jsDay === 0 ? 6 : jsDay - 1;
}

export default function ContactPage() {
  const todayIdx = getTodayIndex();

  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#9B1C1C] pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div
          className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-[#7F1D1D]/60"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="text-5xl mb-4 block">📍</span>
          <h1 className="font-heading font-700 text-white text-5xl sm:text-6xl tracking-tight mb-4">
            Find Us
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            We&apos;re on Bateau Bay Road — come in and pick up, or call to order
            delivery.
          </p>
        </div>
        <div className="checkered-border absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ── Left: Contact details + hours ──────────────────────────── */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-[#9B1C1C] rounded-xl p-3">
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-700 text-[#1C1917] text-xl">
                    Address
                  </h2>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs font-600 mt-0.5">
                    Wheelchair accessible
                  </Badge>
                </div>
              </div>
              <address className="not-italic text-stone-700 text-base leading-relaxed">
                2/213 Bateau Bay Road
                <br />
                Bateau Bay NSW 2261
                <br />
                Central Coast, Australia
              </address>
              <a
                href="https://maps.google.com/?q=2/213+Bateau+Bay+Road+Bateau+Bay+NSW+2261"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-[#9B1C1C] font-600 hover:underline"
              >
                <MapPin size={14} />
                Get directions on Google Maps
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#9B1C1C] rounded-xl p-3">
                  <Phone size={22} className="text-white" />
                </div>
                <h2 className="font-heading font-700 text-[#1C1917] text-xl">
                  Phone
                </h2>
              </div>
              <a
                href="tel:0243341511"
                className="font-heading font-700 text-[#9B1C1C] text-3xl hover:text-[#7F1D1D] transition-colors"
              >
                (02) 4334 1511
              </a>
              <p className="text-stone-500 text-sm mt-2">
                Call to order takeaway or delivery.
                <br />
                We get busy on weekends — ring early to beat the rush!
              </p>
              {/* Big call button */}
              <a
                href="tel:0243341511"
                className="mt-5 flex items-center justify-center gap-2 bg-[#9B1C1C] hover:bg-[#7F1D1D] text-white font-heading font-700 uppercase tracking-widest text-sm py-3.5 px-6 rounded-full transition-colors w-full"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Social / Facebook */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1877F2] rounded-xl p-3">
                  {/* Facebook brand icon — inline SVG since lucide-react doesn't include brand icons */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <h2 className="font-heading font-700 text-[#1C1917] text-xl">
                  Facebook
                </h2>
              </div>
              <p className="text-stone-600 text-sm mb-4">
                Follow us on Facebook for updates, closures and specials.
              </p>
              <a
                href="https://www.facebook.com/p/Bruces-Ozzie-Pizza-100054455892013/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white font-heading font-700 text-sm uppercase tracking-widest px-5 py-3 rounded-full transition-colors"
              >
                <ExternalLink size={16} />
                Visit our Facebook Page
              </a>
            </div>

            {/* Delivery & ordering notes */}
            <div className="bg-[#FEF3C7] rounded-2xl p-6 border border-amber-200">
              <h3 className="font-heading font-700 text-[#1C1917] text-lg mb-4">
                Good to Know
              </h3>
              <ul className="space-y-3">
                {[
                  "Takeaway & home delivery available",
                  "Gluten free large pizza — $24.50",
                  "10% surcharge applies on Saturdays",
                  "4.4★ on Google — 673 reviews",
                  "Wheelchair accessible",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2 text-stone-700 text-sm">
                    <CheckCircle2
                      size={16}
                      className="text-[#9B1C1C] mt-0.5 shrink-0"
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Opening hours + map ──────────────────────────────── */}
          <div className="space-y-8">
            {/* Opening hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-stone-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#9B1C1C] rounded-xl p-3">
                  <Clock size={22} className="text-white" />
                </div>
                <h2 className="font-heading font-700 text-[#1C1917] text-xl">
                  Opening Hours
                </h2>
              </div>
              <ul className="divide-y divide-stone-100">
                {hours.map(({ day, time, closed, surcharge }, idx) => {
                  const isToday = idx === todayIdx;
                  return (
                    <li
                      key={day}
                      className={`flex items-center justify-between py-3 px-2 rounded-lg ${
                        isToday ? "bg-[#FEF3C7]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-heading font-600 text-sm ${
                            closed
                              ? "text-stone-400"
                              : isToday
                              ? "text-[#9B1C1C] font-700"
                              : "text-[#1C1917]"
                          }`}
                        >
                          {day}
                        </span>
                        {isToday && (
                          <Badge className="bg-[#9B1C1C] text-white border-0 text-xs font-600 py-0 px-1.5">
                            Today
                          </Badge>
                        )}
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-sm font-body font-600 ${
                            closed ? "text-stone-400" : "text-stone-700"
                          }`}
                        >
                          {time}
                        </span>
                        {surcharge && (
                          <span className="block text-xs text-amber-600 font-600 mt-0.5">
                            +10% surcharge
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="text-xs text-stone-400 mt-4 text-center">
                Hours may vary on public holidays — check our{" "}
                <a
                  href="https://www.facebook.com/p/Bruces-Ozzie-Pizza-100054455892013/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9B1C1C] hover:underline"
                >
                  Facebook page
                </a>{" "}
                for updates.
              </p>
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-100">
              <div className="bg-[#9B1C1C] px-5 py-3">
                <h3 className="font-heading font-700 text-white text-sm uppercase tracking-widest">
                  📍 Bateau Bay Road, Bateau Bay NSW
                </h3>
              </div>
              {/*
                Google Maps embed for 2/213 Bateau Bay Road, Bateau Bay NSW 2261.
                Using the standard iframe embed — no API key required for public embeds.
              */}
              <iframe
                title="Bruce's Ozzie Pizza location on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1234567890!2d151.4652!3d-33.3512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72d4b0b0b0b0b1%3A0x1234567890abcdef!2s2%2F213%20Bateau%20Bay%20Rd%2C%20Bateau%20Bay%20NSW%202261!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-stone-50 px-5 py-3 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  2/213 Bateau Bay Road, Bateau Bay NSW 2261
                </span>
                <a
                  href="https://maps.google.com/?q=2/213+Bateau+Bay+Road+Bateau+Bay+NSW+2261"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#9B1C1C] font-600 hover:underline"
                >
                  Open in Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
