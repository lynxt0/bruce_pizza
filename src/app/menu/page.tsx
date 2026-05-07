import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Flame, Leaf, Star } from "lucide-react";
import Link from "next/link";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Full menu for Bruce's Ozzie Pizza — pizzas, ribs, pasta, sides and special deals. Prices from $17.90. Gluten free available.",
};

/* ═══════════════════════════════════════════════════════════════════════════
   MENU DATA — sourced directly from the printed menu image
════════════════════════════════════════════════════════════════════════════ */

const classicPizzas = [
  { name: "Ozzie", desc: "Ham & Egg" },
  { name: "Bacon & Egg", desc: "Bacon & Egg" },
  { name: "Ham & Pineapple", desc: "Ham & Pineapple" },
  { name: "Margherita", desc: "Cheese & Herbs" },
  { name: "Supreme", desc: "Ham, Cabanossi, Mushroom, Onion, Capsicum, Pineapple" },
  {
    name: "Meat Lovers",
    desc: "Ham, Cabanossi, Bacon, Pepperoni — BBQ or Tomato sauce",
  },
  {
    name: "Caprice",
    desc: "Ham, Mushroom, Capsicum, Olives, Anchovies",
  },
  {
    name: "Emiliana",
    desc: "Ham, Cabanossi, Mushroom, Prawns",
  },
  {
    name: "Mexicana",
    desc: "Ham, Pepperoni, Bacon, Onion, Capsicum, Chilli",
    badge: "🌶️ Mild · Medium · Hot · Extra Hot",
    hot: true,
  },
  {
    name: "Pepperoni & Pineapple",
    desc: "Pepperoni & Pineapple",
  },
  {
    name: "Vegetarian",
    desc: "Mushroom, Onion, Capsicum, Pineapple, Olives",
    veg: true,
  },
  {
    name: "Beef & Onion",
    desc: "Beef & Onion",
  },
];

const specialtyPizzas = [
  {
    name: "Chicken Supreme",
    desc: "Chicken, Mushroom, Onion, Capsicum, Pineapple — BBQ, Tomato or Satay Sauce",
  },
  {
    name: "Prawns",
    desc: "Prawns, Garlic",
  },
  {
    name: "Marinara",
    desc: "Seafood mix, Garlic",
  },
  {
    name: "House Special",
    desc: "Supreme PLUS Prawns, Pepperoni, Bacon. Anchovies & Olives +$2.00 extra.",
    note: "Anchovies & Olives +$2.00 extra",
  },
];

const deals = [
  {
    name: "Large Pizza Deal",
    includes: "Large Pizza + Garlic Bread + 1.25L Drink",
    price: "$31.90",
    popular: false,
  },
  {
    name: "Family Pizza Deal",
    includes: "Family Pizza + Garlic Bread + 1.25L Drink",
    price: "$34.90",
    popular: false,
  },
  {
    name: "2 Large Pizzas",
    includes: "2 Large Pizzas",
    price: "$40.90",
    popular: false,
  },
  {
    name: "2 Large Pizzas Deal",
    includes: "2 Large Pizzas + Garlic Bread + 1.25L Drink",
    price: "$47.90",
    popular: false,
  },
  {
    name: "2 Family Pizzas",
    includes: "2 Family Pizzas",
    price: "$50.90",
    popular: false,
  },
  {
    name: "Rib Pack & Large Pizza",
    includes: "Full Rib Pack + Large Pizza",
    price: "$50.90",
    popular: false,
  },
  {
    name: "2 Family Pizzas Deal",
    includes: "2 Family Pizzas + Garlic Bread + 1.25L Drink",
    price: "$56.90",
    popular: true,
  },
  {
    name: "Rib Pack, Large Pizza & Wings",
    includes: "Full Rib Pack + Large Pizza + Buffalo Wings",
    price: "$61.90",
    popular: false,
  },
];

/* ─── Reusable pizza card ─────────────────────────────────────────────────── */
function PizzaCard({
  name,
  desc,
  badge,
  hot,
  veg,
  note,
}: {
  name: string;
  desc: string;
  badge?: string;
  hot?: boolean;
  veg?: boolean;
  note?: string;
}) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className="font-heading font-700 text-[#1C1917] text-base leading-snug">
          {name}
        </h3>
        <div className="flex gap-1 shrink-0">
          {hot && (
            <span title="Contains chilli heat options">
              <Flame size={16} className="text-[#DC2626]" />
            </span>
          )}
          {veg && (
            <span title="Vegetarian">
              <Leaf size={16} className="text-green-600" />
            </span>
          )}
        </div>
      </div>
      <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
      {badge && (
        <p className="mt-1.5 text-xs text-[#DC2626] font-600 font-body">{badge}</p>
      )}
      {note && (
        <p className="mt-1.5 text-xs text-stone-400 italic">{note}</p>
      )}
    </div>
  );
}

/* ─── Section header ──────────────────────────────────────────────────────── */
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="font-heading font-700 text-3xl sm:text-4xl text-[#1C1917] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-stone-500 mt-1 text-sm sm:text-base">{subtitle}</p>
      )}
      <div className="section-divider mt-4 ml-0 w-24" style={{ margin: "12px 0 0 0" }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE COMPONENT
════════════════════════════════════════════════════════════════════════════ */
export default function MenuPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#9B1C1C] pt-28 pb-16 px-4 text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#7F1D1D]/60"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#DC2626]/30"
          aria-hidden="true"
        />
        <div className="relative z-10">
          <span className="text-5xl mb-4 block">🍕</span>
          <h1 className="font-heading font-700 text-white text-5xl sm:text-6xl md:text-7xl tracking-tight mb-4">
            Our Menu
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Everything made fresh, every night. Takeaway &amp; delivery.
          </p>
        </div>
        <div className="checkered-border absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Pizza Sizes & Pricing ──────────────────────────────────────── */}
        <section id="sizes">
          <SectionHeader
            title="Pizza Sizes & Pricing"
            subtitle="All pizzas available in four sizes. Extras $2.00 each (cheese $5.00)."
          />
          <div className="bg-[#FEF3C7] rounded-2xl p-6 sm:p-8 shadow-md">
            {/* Size pricing grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { size: "Small", price: "$17.90" },
                { size: "Large", price: "$22.90" },
                { size: "Family", price: "$28.90" },
                { size: "Jumbo", price: "$31.90" },
              ].map(({ size, price }) => (
                <div
                  key={size}
                  className="bg-white rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="font-heading font-700 text-[#9B1C1C] text-2xl sm:text-3xl">
                    {price}
                  </div>
                  <div className="font-heading font-600 text-[#1C1917] text-sm uppercase tracking-widest mt-1">
                    {size}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4 bg-amber-200" />

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <span className="font-700 text-[#9B1C1C]">★</span>
                <span>
                  <strong>Large Gluten Free Pizza</strong> — $24.50
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-700 text-[#9B1C1C]">★</span>
                <span>All extras (except cheese) — $2.00 each</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-700 text-[#9B1C1C]">★</span>
                <span>Extra cheese — $5.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-700 text-[#9B1C1C]">★</span>
                <span>
                  Chicken, Seafood &amp; House Special — $2.00 extra on any size
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Classic Pizzas ────────────────────────────────────────────── */}
        <section id="classic">
          <SectionHeader
            title="Classic Pizzas"
            subtitle="The originals. Tried, tested, and loved by Central Coast locals."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classicPizzas.map((p) => (
              <PizzaCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* ── Chicken, Seafood & House Special ──────────────────────────── */}
        <section id="specialty">
          <SectionHeader
            title="Chicken, Seafood & House Special"
            subtitle="$2.00 extra on all sizes — worth every cent."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {specialtyPizzas.map((p) => (
              <PizzaCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* ── Garlic Pizza Base ──────────────────────────────────────────── */}
        <section id="garlic-base">
          <SectionHeader
            title="Garlic Pizza Base"
            subtitle="Garlic butter & cheese — the perfect side or share."
          />
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-stone-100">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {[
                { size: "Small", price: "$8.50" },
                { size: "Large", price: "$10.50" },
                { size: "Family", price: "$12.50" },
                { size: "Jumbo", price: "$14.50" },
                { size: "Gluten Free", price: "$14.50" },
              ].map(({ size, price }) => (
                <div
                  key={size}
                  className="bg-[#FFFBEB] rounded-xl p-3 text-center border border-amber-100"
                >
                  <div className="font-heading font-700 text-[#9B1C1C] text-xl sm:text-2xl">
                    {price}
                  </div>
                  <div className="font-heading font-600 text-[#1C1917] text-xs uppercase tracking-wider mt-1">
                    {size}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Sides ─────────────────────────────────────────────────────── */}
        <section id="sides">
          <SectionHeader title="Sides" subtitle="Round out your order." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Garlic Bread", desc: "", price: "$4.90" },
              { name: "Potato Wedges", desc: "", price: "$4.40" },
              {
                name: "Corn Cobs",
                desc: "",
                price: "2 for $2.00",
              },
              {
                name: "Buffalo Chicken Wings",
                desc: "10 buffalo-marinated wings with ranch sauce",
                price: "$15.90",
              },
            ].map(({ name, desc, price }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-heading font-700 text-[#1C1917] text-base mb-1">
                    {name}
                  </h3>
                  {desc && (
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
                <div className="font-heading font-700 text-[#9B1C1C] text-2xl mt-3">
                  {price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Ribs ──────────────────────────────────────────────────────── */}
        <section id="ribs">
          <SectionHeader
            title="Ribs"
            subtitle="Full rack of pork ribs — BBQ, Satay, Chilli, Plum Sauce or BBQ Chilli."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#1C1917] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-heading font-700 text-2xl mb-2">
                Rib Pack
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Rack of Pork Ribs with Wedges, Corn Cob &amp; Garlic Bread
              </p>
              <p className="text-xs text-stone-400 mb-4 italic">
                BBQ · Satay · Chilli · Plum Sauce · BBQ Chilli
              </p>
              <div className="font-heading font-700 text-[#F59E0B] text-4xl">
                $32.90
              </div>
            </div>
            <div className="bg-[#1C1917] rounded-2xl p-6 text-white shadow-xl">
              <h3 className="font-heading font-700 text-2xl mb-2">
                Ribs Only
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-4">
                Full Rack of Pork Ribs
              </p>
              <p className="text-xs text-stone-400 mb-4 italic">
                BBQ · Satay · Chilli · Plum Sauce · BBQ Chilli
              </p>
              <div className="font-heading font-700 text-[#F59E0B] text-4xl">
                $27.90
              </div>
            </div>
          </div>
        </section>

        {/* ── Pasta ─────────────────────────────────────────────────────── */}
        <section id="pasta">
          <SectionHeader title="Pasta" />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Beef Lasagne", price: "$14.90" },
              { name: "Special Fettuccini", price: "$14.90" },
              {
                name: "Seafood, Prawn or Chicken Fettuccini",
                price: "$15.90",
              },
            ].map(({ name, price }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-5 shadow-sm border border-stone-100 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-700 text-[#1C1917] text-base leading-snug">
                  {name}
                </h3>
                <div className="font-heading font-700 text-[#9B1C1C] text-2xl shrink-0 ml-4">
                  {price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Special Deals ─────────────────────────────────────────────── */}
        <section id="deals">
          <div className="text-center mb-10">
            <Badge className="bg-[#9B1C1C]/10 text-[#9B1C1C] border-[#9B1C1C]/20 mb-4 font-heading uppercase tracking-widest text-xs">
              Save Big
            </Badge>
            <h2 className="font-heading font-700 text-4xl sm:text-5xl text-[#1C1917] tracking-tight">
              🌟 Special Deals
            </h2>
            <p className="text-stone-500 mt-2 text-sm sm:text-base">
              Bundle up — all deals include a 1.25L drink unless noted.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {deals.map(({ name, includes, price, popular }) => (
              <div
                key={name}
                className={`rounded-2xl p-5 text-center shadow-md flex flex-col justify-between transition-all hover:-translate-y-1 ${
                  popular
                    ? "bg-[#9B1C1C] text-white ring-4 ring-[#F59E0B] shadow-xl"
                    : "bg-[#FEF3C7] text-[#1C1917]"
                }`}
              >
                <div>
                  {popular && (
                    <div className="flex items-center justify-center gap-1 mb-3">
                      <Star size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-[#F59E0B] text-xs font-heading font-700 uppercase tracking-widest">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`font-heading font-700 text-lg leading-snug mb-2 ${
                      popular ? "text-white" : "text-[#1C1917]"
                    }`}
                  >
                    {name}
                  </div>
                  <div
                    className={`text-xs leading-relaxed mb-4 ${
                      popular ? "text-white/75" : "text-stone-600"
                    }`}
                  >
                    {includes}
                  </div>
                </div>
                <div
                  className={`font-heading font-700 text-4xl ${
                    popular ? "text-[#F59E0B]" : "text-[#9B1C1C]"
                  }`}
                >
                  {price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Order prompt ──────────────────────────────────────────────── */}
        <section className="bg-[#9B1C1C] rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl">
          <h2 className="font-heading font-700 text-3xl sm:text-4xl mb-3">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg mb-6">
            Give us a call — we&apos;ll have everything ready for pickup or delivery.
          </p>
          <a
            href="tel:0243341511"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#1C1917] font-heading font-700 uppercase tracking-widest text-base px-8 py-4 rounded-full transition-colors shadow-xl"
          >
            <Phone size={20} />
            (02) 4334 1511
          </a>
          <p className="mt-4 text-white/60 text-sm">
            Tue–Wed &amp; Sun: 5pm–9pm · Thu: 5pm–9:30pm · Fri–Sat: 5pm–10pm
          </p>
        </section>
      </div>
    </>
  );
}
