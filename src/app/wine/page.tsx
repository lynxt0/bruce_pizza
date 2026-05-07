import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Wine",
  description:
    "Cool-climate wines, Hunter Valley classics, cleanskin labels and everything in between. Explore our curated wine range at Bateau Bay Cellars — Central Coast NSW.",
};

/* ─── Data ────────────────────────────────────────────────────────────────── */

const redWines = [
  {
    name: "Moppity Lock & Key Shiraz",
    producer: "Moppity Vineyards",
    region: "Hilltops, NSW",
    note: "Ripe dark cherry, bitter chocolate and a long, warming finish. Hilltops Shiraz at its most expressive — shows why this emerging region is turning heads.",
    pairing: "Lamb shoulder, hard aged cheese, Sunday roast",
  },
  {
    name: "Chalkers Crossing Hilltops Cabernet",
    producer: "Chalkers Crossing Wines",
    region: "Hilltops / Young, NSW",
    note: "Blackcurrant, cedar and dusty tannins — a tightly structured cool-climate Cabernet with genuine cellar potential. Drink now or hold for five years.",
    pairing: "Beef cheeks, chargrilled steak, mushroom risotto",
  },
  {
    name: "Corang Estate Tempranillo",
    producer: "Corang Estate",
    region: "Hilltops, NSW",
    note: "One of the best uses of Tempranillo in the country. Dried cherry, leather and a lifted earthy quality that makes you think of Spain — but it's all NSW.",
    pairing: "Charcuterie, braised lamb, manchego",
  },
  {
    name: "Hungerford Hill Classic Pinot Noir",
    producer: "Hungerford Hill",
    region: "Tumbarumba, NSW",
    note: "Tumbarumba Pinot at its bright, vibrant best — red berry, violet and a silky cool-climate texture that lingers well past the glass.",
    pairing: "Duck confit, salmon, mushroom dishes",
  },
];

const whiteWines = [
  {
    name: "Tyrrell's Vat 1 Semillon",
    producer: "Tyrrell's Wines",
    region: "Hunter Valley, NSW",
    note: "The benchmark against which all Australian Semillon is measured. Lemon curd and lime zest today — pure liquid gold in ten years. One of this country's genuinely great white wines.",
    pairing: "Seafood, light pasta, grilled fish",
  },
  {
    name: "Hungerford Hill Tumbarumba Chardonnay",
    producer: "Hungerford Hill",
    region: "Tumbarumba, NSW",
    note: "Cool-climate elegance from Australia's coldest mainland wine region. White peach, nectarine and a toasty, creamy thread. The kind of Chardonnay that converts people who say they don't like Chardonnay.",
    pairing: "Roast chicken, creamy pasta, grilled barramundi",
  },
  {
    name: "Chalkers Crossing Tumbarumba Sauvignon Blanc",
    producer: "Chalkers Crossing",
    region: "Tumbarumba, NSW",
    note: "Crisp, herbaceous and genuinely bright — passionfruit and cut grass with a clean, long mineral finish. Perfect afternoon-on-the-deck wine for the Central Coast.",
    pairing: "Goat's cheese, green salads, oysters",
  },
  {
    name: "Hungerford Hill Classic Fume Blanc",
    producer: "Hungerford Hill",
    region: "Tumbarumba, NSW",
    note: "A Sauvignon Blanc given the old-school Bordeaux treatment — subtle oak, restrained fruit, and a dry, complex finish that makes it as good at the table as at the bar.",
    pairing: "Asparagus, smoked salmon, white fish",
  },
];

const roseWines = [
  {
    name: "Innocent Bystander Rosé",
    producer: "Innocent Bystander",
    region: "Yarra Valley, VIC",
    note: "Pale coral, dry and elegant — strawberry and watermelon with a chalky minerality. The Yarra Valley makes some of Australia's finest Rosé and this is a standout example.",
    pairing: "Antipasto, seafood, summer salads",
  },
  {
    name: "La Sirène Provence-style Rosé",
    producer: "La Sirène Brewing",
    region: "Melbourne, VIC",
    note: "A wine-inspired rosé with genuine Provençal character — bone dry, with pale salmon colour and a delicate floral nose that doesn't overstate itself.",
    pairing: "Light cheese, grilled prawns, niçoise salad",
  },
];

const sparklingWines = [
  {
    name: "Innocent Bystander Pink Moscato",
    producer: "Innocent Bystander",
    region: "Yarra Valley, VIC",
    note: "The crowd-pleaser, and proudly so. Lychee, rose petal and just-right sweetness — slightly sparkling, completely joyful. Works for any occasion from afternoon tea to a birthday toast.",
    pairing: "Fresh fruit, light desserts, celebrations",
  },
  {
    name: "Hungerford Hill Sparkling Dalliance",
    producer: "Hungerford Hill",
    region: "Tumbarumba, NSW",
    note: "Méthode traditionnelle from Tumbarumba's high-altitude vineyards. Biscuit, lemon curd and persistent fine bubbles. NSW sparkling at its most elegant.",
    pairing: "Oysters, soft cheese, aperitif",
  },
];

const cleanskinWines = [
  {
    name: "Central Ranges Shiraz — Cleanskin",
    varietal: "Shiraz",
    region: "Central Ranges, NSW",
    note: "A standout example of how great the Shiraz category is for cleanskins. Full-bodied, smooth and rich — sourced from a well-regarded regional producer managing stock.",
    value: "Outstanding value",
  },
  {
    name: "Hunter Valley Semillon — Cleanskin",
    varietal: "Semillon",
    region: "Hunter Valley, NSW",
    note: "Hunter Semillon in a cleanskin bottle is one of Australia's best-kept wine secrets. Bright citrus, grassy freshness and that unmistakeable Hunter leanness.",
    value: "Ask staff for current vintage",
  },
  {
    name: "Yarra Valley Chardonnay — Cleanskin",
    varietal: "Chardonnay",
    region: "Yarra Valley, VIC",
    note: "Cool-climate Chardonnay from the Yarra at a fraction of the labelled price. Stone fruit, restraint and finesse — exactly what you want.",
    value: "Top of the class",
  },
  {
    name: "McLaren Vale Grenache — Cleanskin",
    varietal: "Grenache",
    region: "McLaren Vale, SA",
    note: "Old-vine Grenache at a cleanskin price is an extraordinary thing. Raspberry, dried herbs and a silky, velvety mid-palate. Buy a case.",
    value: "Limited stock",
  },
  {
    name: "King Valley Prosecco — Cleanskin",
    varietal: "Prosecco",
    region: "King Valley, VIC",
    note: "Australia's own Prosecco DOC, without the label. Fresh green apple, pear and that characteristic easy froth. The perfect Sunday morning bottle.",
    value: "Always in stock",
  },
  {
    name: "Coonawarra Cabernet — Cleanskin",
    varietal: "Cabernet Sauvignon",
    region: "Coonawarra, SA",
    note: "Coonawarra terra rossa Cabernet — minty, structured and classic. From a respected label rotating surplus stock. Serious wine at a completely unserious price.",
    value: "Cellar or drink now",
  },
];

/* ─── Sub-section wrapper ─────────────────────────────────────────────────── */
function WineSection({
  id,
  title,
  subtitle,
  wines,
  dark = false,
}: {
  id?: string;
  title: string;
  subtitle: string;
  wines: { name: string; producer?: string; varietal?: string; region: string; note: string; pairing?: string; value?: string }[];
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${dark ? "bg-[#1E1B18]" : "bg-[#F4EEE0]"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <p className={`font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-2`}>
            {subtitle}
          </p>
          <h2 className={`font-display font-700 text-3xl sm:text-4xl ${dark ? "text-white" : "text-[#141210]"}`}>
            {title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {wines.map((wine) => (
            <div
              key={wine.name}
              className={`rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 ${
                dark
                  ? "bg-[#2A2520] border-white/[0.07] hover:border-[#C08030]/25"
                  : "bg-white border-[#E6DDD0] shadow-sm hover:shadow-md"
              }`}
            >
              {/* Region tag */}
              <span
                className={`inline-block text-[10px] font-body font-500 tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${
                  dark ? "bg-[#C08030]/15 text-[#C08030]" : "bg-[#5C1928]/8 text-[#5C1928]"
                }`}
              >
                {wine.region}
              </span>

              {/* Producer */}
              {wine.producer && (
                <p className={`font-body font-400 text-xs mb-1 ${dark ? "text-white/40" : "text-[#8A7D70]"}`}>
                  {wine.producer}
                </p>
              )}
              {wine.varietal && (
                <p className={`font-body font-500 text-xs mb-1 ${dark ? "text-white/40" : "text-[#8A7D70]"}`}>
                  {wine.varietal}
                </p>
              )}

              {/* Name */}
              <h3 className={`font-display font-700 text-lg leading-snug mb-3 ${dark ? "text-white" : "text-[#141210]"}`}>
                {wine.name}
              </h3>

              {/* Tasting note */}
              <p className={`font-body font-400 text-sm leading-relaxed mb-4 ${dark ? "text-white/55" : "text-[#5A4F45]"}`}>
                {wine.note}
              </p>

              {/* Pairing or value note */}
              {wine.pairing && (
                <p className={`font-body font-400 text-xs ${dark ? "text-white/35" : "text-[#8A7D70]"}`}>
                  <span className="font-500">Pairs with:</span> {wine.pairing}
                </p>
              )}
              {wine.value && (
                <p className={`font-body font-500 text-xs italic ${dark ? "text-[#C08030]" : "text-[#5C1928]"}`}>
                  {wine.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */

export default function WinePage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        {/*
          Wine page hero — atmospheric winery/cellar image.
          Replace with real store or supplier photography when available.
        */}
        <Image
          src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1600&q=85"
          alt="Wine bottles in a beautiful cellar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="hero-gradient absolute inset-0" />
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, #F4EEE0 0%, transparent 100%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
            Bateau Bay Cellars
          </p>
          <h1 className="font-display font-800 text-white text-5xl sm:text-6xl md:text-7xl leading-tight">
            Wine
          </h1>
          <p className="font-body font-400 text-white/70 text-lg mt-3 max-w-xl">
            Curated with genuine care — regional variety, honest value, and a few hidden gems
            we can&apos;t stop recommending.
          </p>
        </div>
      </section>

      {/* ── Intro copy ── */}
      <section className="bg-[#F4EEE0] pt-14 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
              Our approach
            </p>
            <h2 className="font-display font-700 text-[#141210] text-3xl sm:text-4xl leading-tight mb-5">
              Wine should make you feel something.
            </h2>
            <p className="font-body font-400 text-[#5A4F45] text-lg leading-relaxed mb-4">
              We&apos;re not trying to stock everything. We stock what we actually love — the bottles
              we&apos;d open ourselves, the producers we believe in, and the cleanskin finds that
              represent genuinely extraordinary value.
            </p>
            <p className="font-body font-400 text-[#5A4F45] text-lg leading-relaxed">
              Our focus is cool-climate Australian wine — Hunter Valley Semillon, Tumbarumba
              Chardonnay, Hilltops Shiraz — and the regions that often fly under the radar but
              consistently punch above their weight. NSW wine country is on the doorstep. We take
              full advantage of that.
            </p>
          </div>

          {/* Regional highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { region: "Hunter Valley", state: "NSW", highlight: "Semillon, Shiraz, Verdelho", colour: "bg-[#5C1928]" },
              { region: "Tumbarumba",    state: "NSW", highlight: "Chardonnay, Pinot Noir, Sparkling", colour: "bg-[#1B3429]" },
              { region: "Hilltops",      state: "NSW", highlight: "Shiraz, Cabernet, Tempranillo", colour: "bg-[#B84C2A]" },
              { region: "Yarra Valley",  state: "VIC", highlight: "Pinot Noir, Chardonnay, Rosé", colour: "bg-[#C08030]" },
            ].map(({ region, state, highlight, colour }) => (
              <div key={region} className={`${colour} rounded-xl p-5 text-white`}>
                <p className="font-body font-500 text-white/50 text-[10px] tracking-widest uppercase mb-1">{state}</p>
                <h3 className="font-display font-700 text-xl leading-tight mb-2">{region}</h3>
                <p className="font-body font-400 text-white/65 text-xs leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jump nav ── */}
      <nav className="bg-[#EAE3D2] border-y border-[#D4C9B8] px-4 sm:px-6 lg:px-8 py-3 sticky top-16 z-40 overflow-x-auto">
        <ul className="flex gap-1 max-w-7xl mx-auto w-max sm:w-auto">
          {[
            { label: "Reds",       href: "#reds" },
            { label: "Whites",     href: "#whites" },
            { label: "Rosé",       href: "#rose" },
            { label: "Sparkling",  href: "#sparkling" },
            { label: "Cleanskins", href: "#cleanskins" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="block font-body font-500 text-xs tracking-wider uppercase text-[#5A4F45] hover:text-[#5C1928] px-3 py-1.5 rounded-full hover:bg-[#D4C9B8] transition-all whitespace-nowrap"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Wine sections ── */}
      <WineSection
        id="reds"
        title="Red Wine"
        subtitle="Bold & complex"
        wines={redWines}
      />
      <WineSection
        id="whites"
        title="White Wine"
        subtitle="Fresh & expressive"
        wines={whiteWines}
        dark
      />

      {/* Rosé + Sparkling side by side on large screens */}
      <WineSection
        id="rose"
        title="Rosé"
        subtitle="Dry & elegant"
        wines={roseWines}
      />
      <WineSection
        id="sparkling"
        title="Sparkling"
        subtitle="Bubbles for every occasion"
        wines={sparklingWines}
        dark
      />

      {/* ── Cleanskins — special treatment ── */}
      <section id="cleanskins" className="bg-[#5C1928] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-xl mb-10">
            <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-3">
              Our point of difference
            </p>
            <h2 className="font-display font-700 text-white text-3xl sm:text-4xl leading-tight mb-4">
              Cleanskin Wines
            </h2>
            <p className="font-body font-400 text-white/65 text-base leading-relaxed">
              Same grapes, same regions, same producers — just without the branded label.
              Cleanskins exist because wineries overproduce, change labels, or release small
              lots they don&apos;t want under their main brand. The wine inside is exactly
              as serious. Ask our team what&apos;s currently in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cleanskinWines.map((wine) => (
              <div
                key={wine.name}
                className="bg-white/[0.07] border border-white/[0.12] hover:border-[#C08030]/40 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-body font-500 tracking-wider uppercase text-[#C08030] bg-[#C08030]/15 px-2.5 py-1 rounded-full">
                    {wine.varietal}
                  </span>
                  <span className="text-[10px] font-body font-400 text-white/40 italic">
                    {wine.value}
                  </span>
                </div>
                <p className="font-body font-400 text-white/40 text-xs mb-1">{wine.region}</p>
                <h3 className="font-display font-700 text-white text-lg leading-snug mb-3">
                  {wine.name}
                </h3>
                <p className="font-body font-400 text-white/55 text-sm leading-relaxed">
                  {wine.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ask Us callout ── */}
      <section className="bg-[#EAE3D2] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body font-500 text-[#C08030] text-xs tracking-[0.3em] uppercase mb-4">
            Not sure where to start?
          </p>
          <h2 className="font-display font-700 text-[#141210] text-3xl sm:text-4xl leading-tight mb-4">
            Just ask us.
          </h2>
          <p className="font-body font-400 text-[#5A4F45] text-lg leading-relaxed mb-8">
            Our team knows this stuff inside out — and we love talking about it. Tell us
            what you&apos;re cooking, who you&apos;re drinking with, or what you spent last time
            and enjoyed, and we&apos;ll find you something you&apos;ll love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="
                inline-flex items-center justify-center gap-2
                bg-[#5C1928] hover:bg-[#7D2538]
                text-white font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200 hover:scale-105
              "
            >
              Visit the store
              <ChevronRight size={16} />
            </Link>
            <a
              href="tel:0243328033"
              className="
                inline-flex items-center justify-center gap-2
                border-2 border-[#5C1928] text-[#5C1928]
                hover:bg-[#5C1928] hover:text-white
                font-body font-600
                text-sm uppercase tracking-widest
                px-8 py-4 rounded-full
                transition-all duration-200
              "
            >
              <Phone size={16} />
              Call us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
