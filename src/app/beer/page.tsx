import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Craft Beer",
  description:
    "Over 150 independent craft beers — pale ales, IPAs, lagers, sours, stouts and ciders from the best Australian and international breweries. Bateau Bay Cellars, Central Coast NSW.",
};

/* ─── Data ────────────────────────────────────────────────────────────────── */

const paleAles = [
  {
    name: "Pacific Ale",
    brewery: "Stone & Wood Brewing Co.",
    origin: "Byron Bay, NSW",
    abv: "4.4%",
    note: "The one that changed Australian craft beer. Hazy, wheat-forward and tropical — Galaxy hops at their most charming. The benchmark easy-drinker.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    imgAlt: "Stone & Wood Pacific Ale craft pale ale",
  },
  {
    name: "Green Brewing Co Easy Pale",
    brewery: "Green Beacon Brewing",
    origin: "Brisbane, QLD",
    abv: "3.5%",
    note: "Session-weight, big on flavour. Citrus blossom and soft stone fruit, dangerously drinkable on a warm afternoon. Good things come in low ABVs.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    imgAlt: "Craft pale ale beer cans",
  },
  {
    name: "Backpack Ale (Collab)",
    brewery: "Mountain Culture × Stone & Wood",
    origin: "NSW",
    abv: "5.0%",
    note: "Two of NSW's most beloved breweries in one can. Hazy, tropical, and unabashedly fun — Idaho 7, Mosaic and Amarillo hopped with the confidence of both teams.",
    img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    imgAlt: "Craft beer collaboration pale ale",
  },
];

const ipas = [
  {
    name: "Status Quo IPA",
    brewery: "Mountain Culture Beer Co.",
    origin: "Katoomba, NSW",
    abv: "6.5%",
    note: "Blue Mountains craft at its most confident. Stone fruit, citrus oil and a pine-resin backbone. One of the best IPAs produced in Australia.",
    img: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=600&q=80",
    imgAlt: "Mountain Culture Status Quo IPA craft beer cans",
  },
  {
    name: "Wayward Son Lupulin IPA",
    brewery: "Wayward Brewing Co.",
    origin: "Sydney, NSW",
    abv: "6.8%",
    note: "West Coast confidence with an east coast character. Apricot, pine, passionfruit and a clean, resinous finish. Wayward always delivers.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    imgAlt: "Wayward Brewing Lupulin IPA",
  },
  {
    name: "What Lies Ahead NEIPA",
    brewery: "Range Brewing",
    origin: "Brisbane, QLD",
    abv: "7.0%",
    note: "Hazy, juicy and completely consuming — mango, passionfruit and a pillowy soft body. One of the most reliably excellent NEIPAs in the country.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    imgAlt: "Range Brewing What Lies Ahead NEIPA hazy IPA",
  },
];

const lagers = [
  {
    name: "Spike Brewing Co. Lager",
    brewery: "Six String Brewing Co.",
    origin: "Erina, NSW — Central Coast",
    abv: "4.6%",
    note: "Made right here on the Central Coast — crisp, clean and built for a sunny afternoon on the beach. Supporting local has never tasted this good.",
    img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    imgAlt: "Six String Brewing Central Coast lager",
  },
  {
    name: "Hawkers Lager",
    brewery: "Hawkers Beer",
    origin: "Reservoir, VIC",
    abv: "4.6%",
    note: "Clean, crisp, brilliantly made. Hawkers prove that great lager is just as technically demanding as any IPA. Light biscuit malt, subtle hop freshness.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    imgAlt: "Hawkers lager craft beer",
  },
];

const sours = [
  {
    name: "Limoncello Sour",
    brewery: "La Sirène Brewing",
    origin: "Melbourne, VIC",
    abv: "4.5%",
    note: "Melbourne's sour maestros at their most playful. Bright lemon, sherbet and that gorgeous tart finish that makes it so incredibly refreshing. Perfect for the deck.",
    img: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=600&q=80",
    imgAlt: "La Sirène Limoncello Sour craft beer can",
  },
  {
    name: "Raspberry Rocks Sour",
    brewery: "The Coastal Brewing Company",
    origin: "Central Coast, NSW",
    abv: "4.0%",
    note: "Hyper-local and hyper-delicious. Coastal Brewing are one of the Central Coast's best brewery stories, and this raspberry sour is their most popular can. With good reason.",
    img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    imgAlt: "The Coastal Brewing Raspberry Rocks Sour can",
  },
  {
    name: "Forbidden Fruit Wild Ale",
    brewery: "Dangerous Ales",
    origin: "Sydney, NSW",
    abv: "6.2%",
    note: "Sydney's finest wild ale — complex, funky and completely addictive. This is the kind of bottle you crack with people who take their craft beer seriously.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    imgAlt: "Dangerous Ales Forbidden Fruit Wild Ale",
  },
];

const stouts = [
  {
    name: "East Coast Stout",
    brewery: "Stockade Brew Co.",
    origin: "Goulburn, NSW",
    abv: "5.8%",
    note: "Award-winning NSW stout from one of the country's most consistent small breweries. Roasted coffee, dark chocolate and a smooth, dry finish.",
    img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    imgAlt: "Stockade Brew Co East Coast Stout dark beer",
  },
  {
    name: "Nitro Milk Stout",
    brewery: "Hawkers Beer",
    origin: "Reservoir, VIC",
    abv: "5.0%",
    note: "Velvety, cascading nitro pour with sweet lactose creaminess and a smooth dark chocolate finish. The kind of stout that wins over people who don't think they like stout.",
    img: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=600&q=80",
    imgAlt: "Hawkers Nitro Milk Stout dark craft beer",
  },
];

const ciders = [
  {
    name: "Pipsqueak Sparkling Apple Cider",
    brewery: "Pipsqueak Cider",
    origin: "Harcourt, VIC",
    abv: "4.5%",
    note: "Made from real Harcourt Valley apples — not apple juice concentrate. Dry, refreshing, genuinely fruity. The way cider should taste.",
    img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=600&q=80",
    imgAlt: "Pipsqueak Sparkling Apple Cider can",
  },
  {
    name: "Willie Smith's Organic Apple Cider",
    brewery: "Willie Smith's",
    origin: "Huon Valley, TAS",
    abv: "6.0%",
    note: "From the stunning Huon Valley in Tasmania — organic apples pressed with no additives. A proper, complex cider that stands next to any premium wine.",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    imgAlt: "Willie Smith's Organic Cider bottle",
  },
];

/* ─── Beer Card ───────────────────────────────────────────────────────────── */
function BeerCard({
  name, brewery, origin, abv, note, img, imgAlt, dark = false,
}: {
  name: string;
  brewery: string;
  origin: string;
  abv: string;
  note: string;
  img: string;
  imgAlt: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`product-card group rounded-2xl overflow-hidden border ${
        dark
          ? "bg-[#1E1B18] border-white/[0.07] hover:border-[#C08030]/25"
          : "bg-white border-[#E6DDD0] shadow-sm hover:shadow-md"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={img}
          alt={imgAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        {/* ABV badge */}
        <span className="absolute top-3 right-3 bg-[#141210]/80 backdrop-blur-sm text-[#C08030] text-[10px] font-body font-700 tracking-wider uppercase px-2.5 py-1 rounded-full">
          {abv}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className={`font-body font-400 text-xs mb-0.5 ${dark ? "text-white/35" : "text-[#8A7D70]"}`}>
          {brewery}
        </p>
        <p className={`font-body font-500 text-[11px] mb-2 ${dark ? "text-[#C08030]" : "text-[#B84C2A]"}`}>
          {origin}
        </p>
        <h3 className={`font-display font-700 text-lg leading-snug mb-2 ${dark ? "text-white" : "text-[#141210]"}`}>
          {name}
        </h3>
        <p className={`font-body font-400 text-sm leading-relaxed ${dark ? "text-white/55" : "text-[#5A4F45]"}`}>
          {note}
        </p>
      </div>
    </div>
  );
}

/* ─── Beer Section ────────────────────────────────────────────────────────── */
function BeerSection({
  id, label, title, beers, dark = false,
}: {
  id: string;
  label: string;
  title: string;
  beers: Parameters<typeof BeerCard>[0][];
  dark?: boolean;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[#1E1B18]" : "bg-[#F4EEE0]"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-2">
            {label}
          </p>
          <h2 className={`font-display font-700 text-3xl sm:text-4xl ${dark ? "text-white" : "text-[#141210]"}`}>
            {title}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beers.map((beer) => (
            <BeerCard key={beer.name} {...beer} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function BeerPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        {/*
          Craft beer hero — vibrant, colourful beer imagery.
          Replace with real store or product photography when available.
        */}
        <Image
          src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1600&q=85"
          alt="A colourful wall of craft beer cans and bottles"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="hero-gradient absolute inset-0" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #141210 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
            Bateau Bay Cellars
          </p>
          <h1 className="font-display font-800 text-white text-5xl sm:text-6xl md:text-7xl leading-tight">
            Craft Beer
          </h1>
          <p className="font-body font-400 text-white/70 text-lg mt-3 max-w-xl">
            Over 150 independent beers across every style — from your fridge-filling
            everyday drinkers to the nerdy limited releases worth seeking out.
          </p>
        </div>
      </section>

      {/* ── Intro + Local Spotlight ── */}
      <section className="bg-[#141210] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
              Independent, always
            </p>
            <h2 className="font-display font-700 text-white text-3xl sm:text-4xl leading-tight mb-5">
              We only stock what we&apos;d drink ourselves.
            </h2>
            <p className="font-body font-400 text-white/60 text-lg leading-relaxed mb-4">
              Our fridge is full of independent Australian craft beer — from the
              Central Coast&apos;s own backyard to Byron Bay, the Blue Mountains, and beyond.
              No mass-market filler. Just genuinely great beer made by people who care.
            </p>
            <p className="font-body font-400 text-white/60 text-lg leading-relaxed">
              New releases rotate constantly. If you saw something here last month that
              we&apos;re out of — or you&apos;re looking for something specific — give us
              a call and we&apos;ll let you know what&apos;s in.
            </p>
          </div>

          {/* Local brewery spotlight */}
          <div className="relative bg-[#1B3429] rounded-2xl p-8 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: "radial-gradient(circle at 70% 30%, #C08030 0%, transparent 60%)" }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <span className="inline-block bg-[#C08030] text-[#141210] text-[10px] font-body font-700 tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-5">
                Local Spotlight
              </span>
              <h3 className="font-display font-700 text-white text-2xl sm:text-3xl leading-tight mb-3">
                Six String Brewing Co.
              </h3>
              <p className="font-body font-500 text-[#C08030] text-sm mb-4 flex items-center gap-1.5">
                <MapPin size={13} />
                Erina, NSW — just down the road
              </p>
              <p className="font-body font-400 text-white/65 text-base leading-relaxed mb-5">
                The Central Coast&apos;s own craft brewery. Six String has been making
                approachable, quality craft beer in Erina for years — and we&apos;re proud
                to stock them on the shelf. The lager is always cold and always a crowd-pleaser.
              </p>
              <p className="font-body font-400 text-white/40 text-sm italic">
                Supporting local breweries is just what you do when you love craft beer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Style jump nav ── */}
      <nav className="bg-[#141210] border-y border-white/[0.08] px-4 sm:px-6 lg:px-8 py-3 sticky top-16 z-40 overflow-x-auto">
        <ul className="flex gap-1 max-w-7xl mx-auto w-max sm:w-auto">
          {[
            { label: "Pale Ales", href: "#pale-ales" },
            { label: "IPAs",      href: "#ipas" },
            { label: "Lagers",    href: "#lagers" },
            { label: "Sours",     href: "#sours" },
            { label: "Stouts",    href: "#stouts" },
            { label: "Ciders",    href: "#ciders" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block font-body font-500 text-xs tracking-wider uppercase text-white/45 hover:text-[#C08030] px-3 py-1.5 rounded-full hover:bg-white/5 transition-all whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Beer sections ── */}
      <BeerSection id="pale-ales" label="Tropical & easy" title="Pale Ales" beers={paleAles} />
      <BeerSection id="ipas" label="Hop-forward & bold" title="IPAs" beers={ipas} dark />
      <BeerSection id="lagers" label="Crisp & refreshing" title="Lagers" beers={lagers} />
      <BeerSection id="sours" label="Tart & adventurous" title="Sours" beers={sours} dark />
      <BeerSection id="stouts" label="Dark & complex" title="Stouts" beers={stouts} />
      <BeerSection id="ciders" label="Real fruit, real flavour" title="Ciders" beers={ciders} dark />

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1B3429] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
            Always evolving
          </p>
          <h2 className="font-display font-700 text-white text-3xl sm:text-4xl leading-tight mb-4">
            Something new in every week.
          </h2>
          <p className="font-body font-400 text-white/60 text-base leading-relaxed mb-8">
            Our craft beer range rotates constantly with new releases, seasonal drops and
            limited-run collabs. Come in and see what&apos;s on the shelf — or call ahead and ask.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#C08030] hover:bg-[#D4993F]
                text-[#141210] font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200 hover:scale-105
              "
            >
              <MapPin size={16} />
              Find the store
            </Link>
            <a
              href="tel:0243328033"
              className="
                inline-flex items-center justify-center gap-2
                border border-white/25 hover:border-[#C08030]
                text-white/70 hover:text-[#C08030]
                font-body font-500
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200
              "
            >
              Call the shop
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
