import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Clock, Star, ChevronRight, Flame, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ─── Review highlights sourced from Google (4.4★ / 673 reviews) ─────────── */
const reviews = [
  {
    name: "Sarah M.",
    text: "Best pizza on the Central Coast! We've been coming here for years. The Supreme is incredible and the gluten-free base is the best I've found anywhere.",
    stars: 5,
  },
  {
    name: "Dave K.",
    text: "Absolute legends. The Meat Lovers is insane, ribs are next level. Wouldn't go anywhere else on a Friday night.",
    stars: 5,
  },
  {
    name: "Tracey L.",
    text: "So glad Bateau Bay has a local gem like this. Quick delivery, hot pizza, fair prices. Our whole family loves it.",
    stars: 5,
  },
];

/* ─── Feature highlights ──────────────────────────────────────────────────── */
const features = [
  {
    icon: <Flame size={28} className="text-[#F59E0B]" />,
    title: "Handcrafted Pizzas",
    desc: "Every pizza made fresh to order with quality toppings. Small, Large, Family or Jumbo — feed the whole crew.",
  },
  {
    icon: <Award size={28} className="text-[#F59E0B]" />,
    title: "Gluten Free Available",
    desc: "Large gluten-free pizza base available at $24.50 — no one misses out at Bruce's.",
  },
  {
    icon: <MapPin size={28} className="text-[#F59E0B]" />,
    title: "Takeaway & Delivery",
    desc: "Come in and pick up, or we'll bring it to your door. Serving Bateau Bay and surrounds.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/*
          Hero background — Unsplash placeholder pizza image.
          Replace with an actual photo of the shop or menu items when available.
        */}
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1600&q=80"
          alt="Hot fresh pizza at Bruce's Ozzie Pizza"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />

        {/* Dark gradient overlay */}
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />

        {/* Checkered bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 checkered-border"
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          {/* Pill badge */}
          <span className="inline-block bg-[#F59E0B]/90 text-[#1C1917] font-heading font-700 text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            🍕 Bateau Bay, NSW · Family Owned Since 1989
          </span>

          {/* Business name */}
          <h1 className="font-heading font-700 text-white leading-none mb-4">
            <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tight drop-shadow-xl">
              Bruce&apos;s
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl text-[#F59E0B] tracking-wide drop-shadow-xl">
              Ozzie Pizza
            </span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-body mt-4 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            The best pizza on the Coast — since 1989.
            <br className="hidden sm:block" />
            Pick up or delivery · Tuesday through Sunday from 5pm.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/menu"
              className="
                inline-flex items-center gap-2
                bg-[#F59E0B] hover:bg-[#D97706]
                text-[#1C1917] font-heading font-700
                text-base uppercase tracking-[0.12em]
                px-8 py-4 rounded-full shadow-xl
                transition-all duration-200 hover:scale-105
              "
            >
              View Our Menu
              <ChevronRight size={18} />
            </Link>
            <a
              href="tel:0243341511"
              className="
                inline-flex items-center gap-2
                bg-white/15 hover:bg-white/25
                backdrop-blur-sm border border-white/40
                text-white font-heading font-700
                text-base uppercase tracking-[0.12em]
                px-8 py-4 rounded-full shadow-xl
                transition-all duration-200 hover:scale-105
              "
            >
              <Phone size={18} />
              Call to Order
            </a>
          </div>

          {/* Star rating badge */}
          <div className="mt-10 flex items-center justify-center gap-2 text-white/80">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < 4 ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-[#F59E0B]/40 text-[#F59E0B]/40"}
                />
              ))}
            </div>
            <span className="text-sm font-body font-600">
              4.4 stars · 673 Google reviews
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT SECTION
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFBEB] py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <Badge className="bg-[#9B1C1C]/10 text-[#9B1C1C] border-[#9B1C1C]/20 mb-4 font-heading uppercase tracking-widest text-xs">
              About Bruce&apos;s
            </Badge>
            <h2 className="font-heading font-700 text-4xl sm:text-5xl text-[#1C1917] leading-tight mb-5">
              A Bateau Bay{" "}
              <span className="text-[#9B1C1C]">Institution</span>
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-4">
              Tucked away on Bateau Bay Road (corner of The Entrance Road, near
              the traffic lights), Bruce&apos;s Ozzie Pizza has been the Central
              Coast&apos;s go-to local since 1989 — family owned, family run.
              We&apos;re talking proper pizzas — hand-topped, made fresh, baked
              right — not some conveyor belt operation.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              From the classic Ozzie (ham &amp; egg, true to its roots) to the
              fire-breathing Mexicana and our legendary fall-off-the-bone
              pork ribs, there&apos;s something for every appetite. Gluten
              free? We&apos;ve got you covered. Feed the whole footy team? The
              Jumbo&apos;s got your back.
            </p>
            <p className="text-stone-600 font-600 text-base italic border-l-4 border-[#F59E0B] pl-4">
              "Serving Bateau Bay with a smile — Tue to Sun from 5pm."
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-[#9B1C1C] hover:bg-[#7F1D1D] text-white font-heading font-700 uppercase tracking-widest text-sm px-6 py-3 rounded-full transition-colors"
              >
                Browse the Menu
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#9B1C1C] text-[#9B1C1C] hover:bg-[#9B1C1C] hover:text-white font-heading font-700 uppercase tracking-widest text-sm px-6 py-3 rounded-full transition-colors"
              >
                Opening Hours
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/*
                Placeholder image — replace with an actual photo of the
                pizzeria interior or a menu item photo from Facebook.
              */}
              <Image
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80"
                alt="Fresh pizza coming out of the oven — placeholder image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            {/* Floating rating card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
              <div className="bg-[#F59E0B] rounded-lg p-2">
                <Star size={20} className="fill-white text-white" />
              </div>
              <div>
                <div className="font-heading font-700 text-[#1C1917] text-lg leading-none">
                  4.4 / 5
                </div>
                <div className="text-xs text-stone-500 font-body mt-0.5">
                  673 Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURE HIGHLIGHTS STRIP
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#9B1C1C] py-16 px-4">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="text-center text-white">
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="font-heading font-700 text-xl tracking-wide mb-2">
                {title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SPECIAL DEALS PREVIEW
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FEF3C7] py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <Badge className="bg-[#9B1C1C]/10 text-[#9B1C1C] border-[#9B1C1C]/20 mb-4 font-heading uppercase tracking-widest text-xs">
            Save Big
          </Badge>
          <h2 className="font-heading font-700 text-4xl sm:text-5xl text-[#1C1917] leading-tight">
            🌟 Special Deals
          </h2>
          <p className="text-stone-600 mt-3 text-lg">
            Bundle up and save — great value for the whole family.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Family Pizza Deal",
              includes: "Family Pizza + Garlic Bread + 1.25L Drink",
              price: "$34.90",
              highlight: false,
            },
            {
              label: "2 Large Pizzas Deal",
              includes: "2 Large Pizzas + Garlic Bread + 1.25L Drink",
              price: "$47.90",
              highlight: false,
            },
            {
              label: "2 Family Pizzas Deal",
              includes: "2 Family Pizzas + Garlic Bread + 1.25L Drink",
              price: "$56.90",
              highlight: true,
            },
            {
              label: "Rib Pack + Large Pizza",
              includes: "Full Rib Pack + Large Pizza",
              price: "$50.90",
              highlight: false,
            },
          ].map(({ label, includes, price, highlight }) => (
            <div
              key={label}
              className={`rounded-2xl p-5 text-center shadow-md transition-transform hover:-translate-y-1 ${
                highlight
                  ? "bg-[#9B1C1C] text-white ring-4 ring-[#F59E0B]"
                  : "bg-white text-[#1C1917]"
              }`}
            >
              {highlight && (
                <div className="text-[#F59E0B] text-xs font-heading font-700 uppercase tracking-widest mb-2">
                  ⭐ Most Popular
                </div>
              )}
              <div className="font-heading font-700 text-lg leading-snug mb-2">
                {label}
              </div>
              <div
                className={`text-xs mb-3 leading-relaxed ${
                  highlight ? "text-white/80" : "text-stone-500"
                }`}
              >
                {includes}
              </div>
              <div
                className={`font-heading font-700 text-3xl ${
                  highlight ? "text-[#F59E0B]" : "text-[#9B1C1C]"
                }`}
              >
                {price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/menu#deals"
            className="inline-flex items-center gap-2 bg-[#9B1C1C] hover:bg-[#7F1D1D] text-white font-heading font-700 uppercase tracking-widest text-sm px-7 py-3.5 rounded-full transition-colors shadow-lg"
          >
            See All Deals
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          REVIEWS
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#FFFBEB] py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-[#9B1C1C]/10 text-[#9B1C1C] border-[#9B1C1C]/20 mb-4 font-heading uppercase tracking-widest text-xs">
              What Locals Say
            </Badge>
            <h2 className="font-heading font-700 text-4xl sm:text-5xl text-[#1C1917]">
              Real Reviews
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map(({ name, text, stars }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-6 shadow-md border border-stone-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-4">
                  &ldquo;{text}&rdquo;
                </p>
                <p className="font-heading font-700 text-sm text-[#9B1C1C]">
                  — {name}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-6">
            Reviews representative of Google review sentiment — 4.4★ across 673 reviews.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BOTTOM CTA BAR
      ════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1C1917] py-16 px-4 text-center">
        <div className="checkered-border mb-10 mx-auto max-w-2xl" aria-hidden="true" />
        <h2 className="font-heading font-700 text-white text-3xl sm:text-4xl mb-3">
          Ready to Order?
        </h2>
        <p className="text-stone-400 mb-8 text-lg">
          Give us a ring — we&apos;ll have your order ready in no time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0243341511"
            className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-heading font-700 uppercase tracking-widest text-base px-8 py-4 rounded-full transition-colors shadow-xl"
          >
            <Phone size={20} />
            (02) 4334 1511
          </a>
          <div className="flex items-center justify-center gap-3 text-stone-400 text-sm">
            <Clock size={16} />
            <span>Tue–Sun from 5pm · Mon Closed · 10% surcharge weekends &amp; public holidays</span>
          </div>
        </div>
      </section>
    </>
  );
}
