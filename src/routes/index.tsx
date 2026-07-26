import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Flower2,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Star,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
import massageImg from "@/assets/service-massage.jpg";
import facialImg from "@/assets/service-facial.jpg";
import herbalImg from "@/assets/service-herbal.jpg";
import ambienceImg from "@/assets/ambience.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aarogya — Modern Indian & Thai Luxury Spa in Bengaluru" },
      {
        name: "description",
        content:
          "Aarogya is a modern sanctuary fusing ancient Indian Ayurveda with authentic Thai therapies — massages, facials, herbal rituals and body treatments in the heart of Bengaluru.",
      },
      { property: "og:title", content: "Aarogya — Indian & Thai Luxury Spa" },
      {
        property: "og:description",
        content:
          "Where Ayurveda meets Thai tradition. Signature rituals, herbal compresses, and modern wellness journeys.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  {
    tag: "Signature",
    title: "Royal Thai Ayur Ritual",
    duration: "120 min",
    price: "₹6,900",
    body: "A ceremonial 120-minute journey — warm herbal Kizhi followed by traditional Thai stretch work. Grounding, deeply restorative.",
    img: herbalImg,
  },
  {
    tag: "Massage",
    title: "Hot Stone Abhyanga",
    duration: "90 min",
    price: "₹4,500",
    body: "Volcanic basalt stones glide with warm sesame oil, releasing knots and restoring circulation head-to-toe.",
    img: massageImg,
  },
  {
    tag: "Face",
    title: "Kumkumadi Gold Facial",
    duration: "75 min",
    price: "₹5,200",
    body: "Saffron, turmeric and 24k gold leaf brighten and firm — an heirloom Ayurvedic recipe reimagined for modern skin.",
    img: facialImg,
  },
];

const rituals = [
  { name: "Traditional Thai Massage", time: "60 / 90 min", price: "₹2,800 / ₹3,900" },
  { name: "Aromatic Oil Massage", time: "60 / 90 min", price: "₹3,200 / ₹4,400" },
  { name: "Deep Tissue Therapy", time: "60 / 90 min", price: "₹3,600 / ₹4,900" },
  { name: "Shirodhara (Third-Eye Oil Flow)", time: "45 min", price: "₹3,800" },
  { name: "Foot Reflexology", time: "45 / 60 min", price: "₹1,900 / ₹2,500" },
  { name: "Herbal Steam & Ubtan Scrub", time: "60 min", price: "₹3,400" },
  { name: "Couple's Suite Escape", time: "120 min", price: "₹12,500" },
  { name: "Bridal Glow Package", time: "180 min", price: "₹14,900" },
];

const testimonials = [
  {
    quote:
      "The Royal Thai Ayur Ritual felt like a two-hour meditation. The therapists read the body — no script, just intuition.",
    name: "Ananya Rao",
    role: "Regular guest, since 2023",
  },
  {
    quote:
      "Kumkumadi facial left my skin genuinely different. The space itself is worth the visit — brass, marigolds, the quiet.",
    name: "Meera Iyer",
    role: "Featured in Vogue India",
  },
  {
    quote:
      "Best Thai massage I've had outside Chiang Mai. Precise pressure, warm herbal compresses, and unhurried care.",
    name: "Rohan Malhotra",
    role: "Executive traveler",
  },
];

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Philosophy />
      <SignatureServices />
      <Menu />
      <Ambience />
      <Testimonials />
      <Visit />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <a href="#" className="flex items-center gap-2 text-cream">
          <Flower2 className="h-5 w-5 text-gold" strokeWidth={1.25} />
          <span className="text-display text-xl tracking-wide">Aarogya</span>
        </a>
        <nav className="hidden items-center gap-9 text-sm text-cream/80 md:flex">
          <a href="#philosophy" className="hover:text-gold transition-colors">Philosophy</a>
          <a href="#signature" className="hover:text-gold transition-colors">Signatures</a>
          <a href="#menu" className="hover:text-gold transition-colors">Menu</a>
          <a href="#ambience" className="hover:text-gold transition-colors">The Space</a>
          <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
        </nav>
        <a
          href="#visit"
          className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-medium md:inline-flex"
        >
          Book a ritual
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Brass singing bowl with marigold petals and orchids in a candlelit spa room"
        width={1600}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/85" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Bengaluru · Est. 2019
          </div>
          <h1 className="text-display text-cream text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Where Ayurveda breathes<br />
            <em className="italic text-gold-soft">alongside</em> Thai tradition.
          </h1>
          <p className="mt-8 max-w-xl text-base text-cream/80 md:text-lg">
            A modern sanctuary of herbal warmth, brass, and quiet ceremony. Signature rituals crafted by
            therapists trained in Kerala and Chiang Mai — for the city that never quite slows down.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#signature" className="btn-gold rounded-full px-7 py-3.5 text-sm font-medium">
              Explore signatures
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              View full menu <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-background py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Our philosophy</p>
            <h2 className="text-display mt-6 text-4xl leading-tight md:text-5xl">
              Two ancient sciences.<br />
              One modern sanctuary.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aarogya was built around a simple belief — that <em>Ayurveda</em> and Thai medicine
              are twin languages of the body. One reads the doshas, the other the sen lines. Together, they
              restore what the modern day quietly erodes.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every ritual begins with a private consultation, warm herbal tea, and a long, unhurried breath.
              Nothing rushed. Nothing generic. Just care, precisely tuned to you.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8">
              <Stat n="12" label="Master therapists" />
              <Stat n="27+" label="Signature rituals" />
              <Stat n="9,400" label="Guests received" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="text-display text-4xl text-primary md:text-5xl">{n}</div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function SignatureServices() {
  return (
    <section id="signature" className="relative bg-primary py-28 text-cream md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Signature rituals</p>
            <h2 className="text-display mt-5 max-w-2xl text-4xl leading-tight md:text-6xl">
              Ceremonies, not appointments.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/70">
            Each signature is a choreography of warm oil, herbal steam and skilled hands — designed to move
            you from noise into a slower, softer rhythm.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-cream/[0.04] ring-1 ring-cream/10 backdrop-blur-sm transition-all duration-500 hover:bg-cream/[0.07] hover:ring-gold/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1000}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 rounded-full bg-gold/95 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-ink">
                  {s.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs text-cream/60">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.5} /> {s.duration}
                  <span className="h-1 w-1 rounded-full bg-cream/30" />
                  <span className="text-gold">{s.price}</span>
                </div>
                <h3 className="text-display mt-3 text-2xl text-cream">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{s.body}</p>
                <a
                  href="#visit"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold transition-all hover:gap-3"
                >
                  Reserve <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Menu() {
  return (
    <section id="menu" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="ornament mx-auto mb-6 max-w-xs text-xs uppercase tracking-[0.35em]">
          <Sparkles className="h-3.5 w-3.5" />
        </div>
        <h2 className="text-display text-center text-4xl md:text-5xl">The full menu</h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-muted-foreground">
          Choose a treatment or let our concierge weave a personalised half-day journey.
        </p>

        <ul className="mt-16 divide-y divide-border">
          {rituals.map((r) => (
            <li
              key={r.name}
              className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-6 transition-colors hover:bg-muted/40 md:px-4"
            >
              <div className="flex items-baseline gap-4">
                <Leaf
                  className="h-4 w-4 text-terracotta transition-transform group-hover:rotate-12"
                  strokeWidth={1.5}
                />
                <span className="text-display text-xl md:text-2xl">{r.name}</span>
              </div>
              <div className="flex items-baseline gap-6 text-sm text-muted-foreground">
                <span>{r.time}</span>
                <span className="text-display text-lg text-primary">{r.price}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs uppercase tracking-widest text-muted-foreground">
          All rituals include herbal tea · welcome foot bath · steam access
        </p>
      </div>
    </section>
  );
}

function Ambience() {
  return (
    <section id="ambience" className="relative overflow-hidden bg-secondary py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:items-center md:gap-20 md:px-10">
        <div className="relative">
          <img
            src={ambienceImg}
            alt="Rattan lounge with hanging brass lanterns and tropical plants"
            loading="lazy"
            width={1400}
            height={1000}
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-cream shadow-xl md:block">
            <div className="text-display text-4xl text-gold">4.9</div>
            <div className="mt-1 flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-cream/60">
              1,240+ reviews
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">The space</p>
          <h2 className="text-display mt-5 text-4xl leading-tight md:text-5xl">
            Brass, teak, marigold —<br />and long, deliberate silences.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ten treatment suites, a private couple's pavilion, herbal steam grotto and a rooftop meditation
            deck overlooking Cubbon Park. Designed by Studio Lotus in warm teak, hand-poured terrazzo and
            aged brass.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Private couple's suite",
              "Herbal steam grotto",
              "Rooftop meditation deck",
              "In-house Ayurvedic pharmacy",
              "Valet & concierge",
              "Bespoke half-day journeys",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Kind words</p>
          <h2 className="text-display mt-5 text-4xl md:text-5xl">Whispered, not shouted.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-display mt-6 text-xl leading-snug text-primary">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 border-t border-border pt-5">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ink py-28 text-cream md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,color-mix(in_oklab,var(--color-gold)_30%,transparent),transparent_50%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--color-terracotta)_25%,transparent),transparent_50%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Visit us</p>
          <h2 className="text-display mt-5 text-4xl leading-tight md:text-6xl">
            Slip away.<br />
            <em className="italic text-gold-soft">We're closer than you think.</em>
          </h2>
          <p className="mt-6 max-w-md text-cream/70">
            Bookings by appointment. Walk-ins welcome when the day allows. A 24-hour cancellation window
            keeps our therapists' time honoured.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <Row icon={<MapPin className="h-4 w-4" />} title="Address">
              <span data-brand-text="address">32 Lavelle Road, Bengaluru 560001</span>
            </Row>
            <Row icon={<Clock className="h-4 w-4" />} title="Hours">
              Mon – Sun · 10:00 to 22:00
            </Row>
            <Row icon={<Phone className="h-4 w-4" />} title="Reservations">
              <span data-brand-text="phone">+91 80 4567 8900</span>
            </Row>
            <Row icon={<Mail className="h-4 w-4" />} title="Email">
              hello@aarogya-spa.in
            </Row>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 backdrop-blur-sm md:p-10"
        >
          <h3 className="text-display text-2xl text-cream">Request an appointment</h3>
          <p className="mt-2 text-sm text-cream/60">
            We reply within a few hours, always by a real person.
          </p>
          <div className="mt-8 grid gap-5">
            <Field label="Your name" placeholder="Priya Sharma" />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Phone" placeholder="+91 ..." />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Preferred date" type="date" />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-cream/60">
                  Ritual
                </label>
                <select className="w-full rounded-md border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none focus:border-gold">
                  <option className="bg-ink">Royal Thai Ayur Ritual</option>
                  <option className="bg-ink">Hot Stone Abhyanga</option>
                  <option className="bg-ink">Kumkumadi Gold Facial</option>
                  <option className="bg-ink">Traditional Thai Massage</option>
                  <option className="bg-ink">Not sure — please advise</option>
                </select>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-cream/60">
                Notes
              </label>
              <textarea
                rows={3}
                placeholder="Anything we should know…"
                className="w-full resize-none rounded-md border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="btn-gold mt-2 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium"
            >
              Send request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Row({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-gold/40 text-gold">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-widest text-cream/50">{title}</div>
        <div className="mt-0.5 text-cream">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-cream/60">{label}</label>
      <input
        {...props}
        className="w-full rounded-md border border-cream/15 bg-transparent px-4 py-3 text-sm text-cream outline-none placeholder:text-cream/30 focus:border-gold"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="gold-rule mb-14" />
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-2">
              <Flower2 className="h-5 w-5 text-gold" strokeWidth={1.25} />
              <span className="text-display text-2xl text-cream" data-brand-text="business-name">Aarogya</span>
            </div>
            <p className="mt-3 max-w-sm text-sm">
              A modern Indian & Thai spa sanctuary in the heart of Bengaluru.
            </p>
          </div>
          <div className="flex items-center gap-4 text-cream">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} Aarogya Wellness Pvt. Ltd. All rights reserved.</p>
          <p>Crafted with care in Bengaluru · Kerala · Chiang Mai</p>
        </div>
        <div className="mt-4 text-center text-xs text-cream/40">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>

          <div className="mt-8">
            <a href="/admin" className="text-sm hover:underline transition">🔑 Admin Console</a>
          </div>
    </footer>
  );
}
