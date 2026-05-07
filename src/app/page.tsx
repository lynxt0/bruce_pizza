import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, ChevronRight, Wine, Beer, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Bateau Bay Cellars | Your Local Bottle Shop, Central Coast NSW",
  description:
    "Craft beer, cool-climate wines, cleanskin wines and premium spirits — your go-to destination for beer & wine lovers on the Central Coast. Visit us at 566 The Entrance Rd, Bateau Bay.",
};

/* ─── Data ────────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: <Beer size={32} className="text-[#C08030]" />,
    title: "Craft Beer Range",
    desc: "Over 150 craft beers on the shelf at any time — from local Central Coast brews to the best independent Australian and international labels. Stone & Wood, Mountain Culture, Dangerous Ales and much more.",
    href: "/beer",
    cta: "Explore craft beer",
  },
  {
    icon: <Wine size={32} className="text-[#C08030]" />,
    title: "Cool-Climate Wines",
    desc: "We're obsessive about cool-climate wine. Hunter Valley Semillon, Tumbarumba Chardonnay, Hilltops Shiraz — varieties that genuinely thrive in Australia's cooler regions. Ask us to help you find one.",
    href: "/wine",
    cta: "Discover our wines",
  },
  {
    icon: <Sparkles size={32} className="text-[#C08030]" />,
    title: "Cleanskin Wines",
    desc: "Premium wine without the premium label price. Our cleanskin selection rotates with the seasons and represents extraordinary value — often sourcing from the same wineries as $40+ bottles.",
    href: "/wine#cleanskins",
    cta: "See cleanskin range",
  },
  {
    icon: <Users size={32} className="text-[#C08030]" />,
    title: "Knowledgeable Team",
    desc: "No dumb questions here. Whether you're pairing a wine for dinner, hunting for a rare IPA, or buying a gift without a clue — our team genuinely loves talking about this stuff and will point you right.",
    href: "/about",
    cta: "Meet us",
  },
];

const featuredWines = [
  {
    name: "Tyrrell's Vat 1 Semillon",
    region: "Hunter Valley, NSW",
    style: "White Wine",
    note: "The benchmark Hunter Semillon. Lemon curd and lime zest right now — pure liquid gold in ten years. One of Australia's greatest white wines.",
    img: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80",
    imgAlt: "White wine bottle — Tyrrell's Vat 1 Semillon",
  },
  {
    name: "Moppity Lock & Key Shiraz",
    region: "Hilltops, NSW",
    style: "Red Wine",
    note: "Hilltops Shiraz at its most expressive — ripe dark cherry, bitter chocolate and a lingering, warming finish. Ideal with a Sunday roast.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80",
    imgAlt: "Red wine bottle — Moppity Lock & Key Shiraz",
  },
  {
    name: "Hungerford Hill Tumbarumba Chardonnay",
    region: "Tumbarumba, NSW",
    style: "White Wine",
    note: "Cool-climate elegance from one of Australia's coldest wine regions. White peach, nectarine and a fine, toasty thread. The kind of Chardonnay that converts sceptics.",
    img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
    imgAlt: "Chardonnay wine bottle — Hungerford Hill Tumbarumba",
  },
  {
    name: "Innocent Bystander Pink Moscato",
    region: "Yarra Valley, VIC",
    style: "Sparkling",
    note: "The crowd-pleaser in a can or bottle. Lychee, rose petal and a just-right hint of sweetness. You'll struggle to find a more instantly joyful drink.",
    img: "https://images.unsplash.com/photo-1564347268-13a5dbf6d0e1?w=400&q=80",
    imgAlt: "Sparkling wine bottles — Innocent Bystander Pink Moscato",
  },
];

const featuredBeers = [
  {
    name: "Stone & Wood Pacific Ale",
    brewery: "Stone & Wood Brewing Co.",
    origin: "Byron Bay, NSW",
    style: "Pale Ale · 4.4%",
    note: "The one that changed Australian craft beer. Tropical wheat-forward pale with fruity Galaxy hops. The benchmark easy-drinker — never gets old.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80",
    imgAlt: "Stone & Wood Pacific Ale craft beer",
  },
  {
    name: "Mountain Culture Status Quo",
    brewery: "Mountain Culture Beer Co.",
    origin: "Katoomba, NSW",
    style: "IPA · 6.5%",
    note: "Blue Mountains craft at its most confident. Stone fruit, citrus oil and a pine-resin backbone. One of the best IPAs made in Australia, full stop.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80",
    imgAlt: "Mountain Culture Status Quo IPA craft beer cans",
  },
  {
    name: "Dangerous Ales Forbidden Fruit",
    brewery: "Dangerous Ales",
    origin: "Sydney, NSW",
    style: "Wild Ale · 6.2%",
    note: "Complex, funky and completely addictive. One of Sydney's finest wild ales — exactly the kind of bottle we love recommending to adventurous drinkers.",
    img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=400&q=80",
    imgAlt: "Dangerous Ales Forbidden Fruit craft beer",
  },
  {
    name: "La Sirène Limoncello Sour",
    brewery: "La Sirène Brewing",
    origin: "Melbourne, VIC",
    style: "Sour Ale · 4.5%",
    note: "Zesty, bright and completely refreshing. Melbourne's sour maestros at their best — lemon pith and sherbet in every sip. Perfect for the deck.",
    img: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=400&q=80",
    imgAlt: "La Sirène Limoncello Sour craft beer",
  },
];

const reviews = [
  {
    name: "Sandra M.",
    suburb: "Bateau Bay",
    text: "Best bottle shop on the Coast by miles. The staff actually know their stuff — I've discovered so many great wines just by asking for a recommendation. Never go anywhere else.",
    stars: 5,
  },
  {
    name: "Tom K.",
    suburb: "The Entrance",
    text: "Incredible craft beer selection for a local bottle-o. They always have something I haven't tried, and the team is always happy to chat about what's new. Stone & Wood always cold.",
    stars: 5,
  },
  {
    name: "Alicia R.",
    suburb: "Toowoon Bay",
    text: "The cleanskin range is a proper hidden gem. I asked for help and walked out with three bottles of wine I never would have chosen myself — all of them were brilliant. Highly recommend.",
    stars: 5,
  },
];

/* ─── Component ───────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO — Full-bleed dark atmospheric opener
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/*
          Hero background — atmospheric cellar/bottle shop image.
          Replace with a real photo of Bateau Bay Cellars storefront or interior when available.
          Source: Unsplash / dark wine cellar
        */}
        <Image
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=85"
          alt="A beautifully stocked bottle shop — rows of wine and craft beer"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />

        {/* Gradient overlay — dark at bottom for text legibility */}
        <div className="hero-gradient absolute inset-0" aria-hidden="true" />

        {/* Extra depth at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to top, #141210 0%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* Hero content — bottom-anchored for that editorial look */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24 pt-32">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.35em] uppercase mb-4">
              Bateau Bay, NSW · Central Coast
            </p>

            {/* Main headline */}
            <h1 className="font-display font-800 text-white leading-[0.95] mb-5">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Your go-to
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-[#C08030]">
                for beer &amp; wine
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                lovers.
              </span>
            </h1>

            <p className="font-body font-400 text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
              Craft beer, cool-climate wines, cleanskin discoveries and knowledgeable
              staff who actually love what they sell. Come find something new.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/wine"
                className="
                  inline-flex items-center gap-2
                  bg-[#C08030] hover:bg-[#D4993F]
                  text-[#141210] font-body font-600
                  text-sm tracking-[0.1em] uppercase
                  px-7 py-3.5 rounded-full
                  transition-all duration-200 hover:scale-105
                "
              >
                Explore Wines
              </Link>
              <Link
                href="/beer"
                className="
                  inline-flex items-center gap-2
                  bg-white/10 hover:bg-white/20 backdrop-blur-sm
                  border border-white/25 hover:border-white/50
                  text-white font-body font-500
                  text-sm tracking-[0.1em] uppercase
                  px-7 py-3.5 rounded-full
                  transition-all duration-200
                "
              >
                Craft Beer
              </Link>
              <Link
                href="/about"
                className="
                  inline-flex items-center gap-1.5
                  text-white/55 hover:text-white
                  font-body font-400 text-sm
                  transition-colors duration-200
                  py-3.5
                "
              >
                <MapPin size={14} />
                Find us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHAT WE'RE KNOWN FOR — 4 feature cards on dark background
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#141210] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="max-w-xl mb-14">
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
              What we&apos;re known for
            </p>
            <h2 className="font-display font-700 text-white text-4xl sm:text-5xl leading-tight">
              More than just a bottle shop.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, desc, href, cta }) => (
              <div
                key={title}
                className="
                  group bg-[#1E1B18] hover:bg-[#2A2520]
                  border border-white/[0.07] hover:border-[#C08030]/30
                  rounded-2xl p-7
                  transition-all duration-300
                "
              >
                <div className="mb-5">{icon}</div>
                <h3 className="font-display font-700 text-white text-xl mb-3 leading-tight">
                  {title}
                </h3>
                <p className="font-body font-400 text-white/55 text-sm leading-relaxed mb-6">
                  {desc}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-[#C08030] hover:text-[#D4993F] font-body font-500 text-xs tracking-wider uppercase transition-colors group-hover:gap-2.5"
                >
                  {cta}
                  <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WINES WE LOVE — Curated product showcase
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4EEE0] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
                Featured selections
              </p>
              <h2 className="font-display font-700 text-[#141210] text-4xl sm:text-5xl leading-tight">
                Wines We Love
              </h2>
            </div>
            <Link
              href="/wine"
              className="inline-flex items-center gap-1.5 text-[#5C1928] hover:text-[#C08030] font-body font-500 text-sm uppercase tracking-wider transition-colors shrink-0"
            >
              Full wine range
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredWines.map((wine) => (
              <div key={wine.name} className="product-card group">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#E6DDD0] mb-4">
                  <Image
                    src={wine.img}
                    alt={wine.imgAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  {/* Style badge */}
                  <span className="absolute top-3 left-3 bg-[#141210]/80 backdrop-blur-sm text-white/80 text-[10px] font-body font-500 tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {wine.style}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <p className="font-body font-400 text-[#8A7D70] text-xs tracking-wide mb-1">
                    {wine.region}
                  </p>
                  <h3 className="font-display font-700 text-[#141210] text-lg leading-snug mb-2">
                    {wine.name}
                  </h3>
                  <p className="font-body font-400 text-[#5A4F45] text-sm leading-relaxed">
                    {wine.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CRAFT BEERS ON THE SHELF — Product showcase, dark background
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1B3429] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
                In the fridge right now
              </p>
              <h2 className="font-display font-700 text-white text-4xl sm:text-5xl leading-tight">
                Craft Beers on the Shelf
              </h2>
            </div>
            <Link
              href="/beer"
              className="inline-flex items-center gap-1.5 text-white/60 hover:text-[#C08030] font-body font-500 text-sm uppercase tracking-wider transition-colors shrink-0"
            >
              Full beer range
              <ChevronRight size={15} />
            </Link>
          </div>

          {/* Product grid — horizontal scroll on mobile */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBeers.map((beer) => (
              <div key={beer.name} className="product-card group">
                {/* Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#142B22] mb-4">
                  <Image
                    src={beer.img}
                    alt={beer.imgAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  {/* Style badge */}
                  <span className="absolute top-3 left-3 bg-[#141210]/80 backdrop-blur-sm text-[#C08030] text-[10px] font-body font-600 tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {beer.style}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <p className="font-body font-400 text-white/40 text-xs tracking-wide mb-0.5">
                    {beer.brewery}
                  </p>
                  <p className="font-body font-400 text-[#C08030] text-[11px] tracking-wide mb-1.5">
                    {beer.origin}
                  </p>
                  <h3 className="font-display font-700 text-white text-lg leading-snug mb-2">
                    {beer.name}
                  </h3>
                  <p className="font-body font-400 text-white/55 text-sm leading-relaxed">
                    {beer.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GOOGLE REVIEWS STRIP
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EAE3D2] py-20 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-12">
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
              What locals say
            </p>
            <h2 className="font-display font-700 text-[#141210] text-4xl sm:text-5xl leading-tight">
              Real People. Real Reviews.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map(({ name, suburb, text, stars }) => (
              <div
                key={name}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#D4C9B8]"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={15} className="fill-[#C08030] text-[#C08030]" />
                  ))}
                </div>

                {/* Quote */}
                <div className="review-quote">
                  <p className="font-body font-400 text-[#5A4F45] text-sm leading-relaxed mb-5">
                    {text}
                  </p>
                </div>

                {/* Attribution */}
                <div className="flex items-center gap-2 border-t border-[#E6DDD0] pt-4">
                  <div className="w-8 h-8 rounded-full bg-[#5C1928] flex items-center justify-center text-white font-display font-700 text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-body font-600 text-[#141210] text-sm">{name}</p>
                    <p className="font-body font-400 text-[#8A7D70] text-xs">{suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#8A7D70] mt-8">
            Reviews representative of Google review sentiment from verified local customers.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BOTTOM CTA BLOCK — dark, inviting
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#5C1928] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
            Open 7 days
          </p>
          <h2 className="font-display font-800 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Drop in and discover something new.
          </h2>
          <p className="font-body font-400 text-white/65 text-lg mb-8 leading-relaxed">
            566 The Entrance Rd, Bateau Bay — we&apos;re right here, and we&apos;d love to see you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="
                inline-flex items-center gap-2
                bg-[#C08030] hover:bg-[#D4993F]
                text-[#141210] font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200 hover:scale-105
              "
            >
              <MapPin size={16} />
              Get Directions
            </Link>
            <a
              href="tel:0243328033"
              className="
                inline-flex items-center gap-2
                bg-white/10 hover:bg-white/20
                border border-white/25 hover:border-white/50
                text-white font-body font-500
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200
              "
            >
              (02) 4332 8033
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
