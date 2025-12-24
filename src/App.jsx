import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  ClipboardCheck,
  Zap,
  LineChart,
  ShieldCheck,
  CalendarClock,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  FileText,
  ArrowRight,
  Briefcase,
  BadgeDollarSign,
  Calendar,
  UserRound,
  ExternalLink,
  Star,
} from "lucide-react";

const PAGES = { home: "home", about: "about", portfolio: "portfolio", pricing: "pricing", book: "book" };
const cn = (...c) => c.filter(Boolean).join(" ");

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
    {children}
  </span>
);

const Card = ({ icon: Icon, title, children, className }) => (
  <div className={cn("rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", className)}>
    <div className="flex items-start gap-3">
      {Icon ? (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <Icon size={18} />
        </div>
      ) : null}
      <div className="min-w-0">
        {title ? <h3 className="text-base font-semibold">{title}</h3> : null}
        <div className={cn("mt-2 text-sm text-slate-600", !title && "mt-0")}>{children}</div>
      </div>
    </div>
  </div>
);

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center">
    {eyebrow ? (
      <div className="mb-3 flex justify-center">
        <Badge>{eyebrow}</Badge>
      </div>
    ) : null}
    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
    {subtitle ? <p className="mt-3 text-sm text-slate-600 sm:text-base">{subtitle}</p> : null}
  </div>
);

const NavButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={cn("text-sm font-medium transition", active ? "text-slate-900" : "text-slate-600 hover:text-slate-900")}
  >
    {children}
  </button>
);

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="text-2xl font-semibold">{value}</div>
    <div className="mt-1 text-xs font-medium text-slate-600">{label}</div>
  </div>
);

function PageShell({ children }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-50" />
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-200/60 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 sm:py-12">{children}</div>
    </div>
  );
}

function HomePage({ setPage, mailto, form, setForm }) {
  return (
    <>
      <PageShell>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Property Condition Assessments (PCA)</Badge>
              <Badge>Energy Audits</Badge>
              <Badge>CIP Support</Badge>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
              Clear facility data for smarter decisions.
            </h1>

            <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Focus On Delaine Development & Consulting LLC helps organizations understand building condition, reduce risk,
              and plan capital investments with confidence. From comprehensive PCAs to actionable energy audits, we deliver
              practical insights you can budget, approve, and execute.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Book a Call <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                onClick={(e) => { e.preventDefault(); setPage(PAGES.pricing); }}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Stat value="PCA" label="Due diligence + capital planning" />
              <Stat value="Energy" label="Efficiency + utility reduction" />
              <Stat value="CIP-ready" label="Prioritized scopes + budgets" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">What you get</div>
                <Badge>Fast turnaround</Badge>
              </div>

              <div className="mt-5 space-y-4 text-sm text-slate-700">
                {[
                  { icon: ClipboardCheck, text: "Deficiency list with photos & recommendations" },
                  { icon: LineChart, text: "Multi-year capital forecast (1–5 / 6–12 years)" },
                  { icon: ShieldCheck, text: "Risk flags: life safety, compliance, end-of-life systems" },
                  { icon: Zap, text: "Energy savings opportunities prioritized by impact" },
                  { icon: FileText, text: "Executive summary + decision-ready deliverables" },
                  { icon: CalendarClock, text: "CIP support: scoping, phasing, and budget alignment" },
                ].map((i, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl border border-slate-200 bg-slate-50 p-2">
                      <i.icon size={16} />
                    </div>
                    <div>{i.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); setPage(PAGES.about); }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-sm font-semibold hover:bg-slate-100"
                >
                  About the firm
                  <div className="mt-1 text-xs font-medium text-slate-600">Who we are & how we work</div>
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => { e.preventDefault(); setPage(PAGES.portfolio); }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left text-sm font-semibold hover:bg-slate-100"
                >
                  Project examples
                  <div className="mt-1 text-xs font-medium text-slate-600">Deliverable types</div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Next:</span> Replace the placeholder phone/email + add your Calendly link on “Book a Call.”
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-slate-200" />

        <SectionTitle
          eyebrow="Contact"
          title="Quick request"
          subtitle="Send a short message and we’ll respond with scope, timeline, and a clear quote."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                    placeholder="you@email.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-slate-700">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 h-24 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                  placeholder="Property type, address (optional), timeline, and goals..."
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
                >
                  Send via Email <ArrowRight size={16} />
                </a>
                <a
                  href="#book"
                  onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
                >
                  Book a Call <Calendar size={16} />
                </a>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                This form opens your email app (mailto). You can swap to Formspree/Jotform/Google Forms anytime.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="text-sm font-semibold">Company info (update these)</div>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2"><Phone size={16} /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Phone</div>
                    <div className="font-semibold">(555) 555-5555</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2"><Mail size={16} /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Email</div>
                    <div className="font-semibold">info@focusondelaine.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-xl border border-slate-200 bg-white p-2"><MapPin size={16} /></div>
                  <div>
                    <div className="text-xs font-semibold text-slate-600">Service Area</div>
                    <div className="font-semibold">Leland, NC • Brunswick County • Coastal NC</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
                <div className="font-semibold text-slate-900">Tip</div>
                Add 2–4 project photos and a redacted sample executive summary on the Portfolio page to build trust fast.
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </>
  );
}

function AboutPage({ setPage }) {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="About"
        title="Practical consulting built around clarity and follow-through"
        subtitle="We help owners and public agencies understand what they have, what it needs, and what it will cost—so decisions are faster and defensible."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <Card icon={UserRound} title="Who we are" className="lg:col-span-7">
          Focus On Delaine Development & Consulting LLC provides Property Condition Assessments (PCAs) and Energy Audits
          with an emphasis on decision-ready reporting—clear scopes, photo documentation, and prioritized recommendations.
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>Integrity</Badge><Badge>Efficiency</Badge><Badge>Documentation that holds up</Badge>
          </div>
        </Card>

        <Card icon={ShieldCheck} title="What we value" className="lg:col-span-5">
          <ul className="mt-1 space-y-2">
            {["Clear scopes and timelines", "Transparent assumptions", "Actionable recommendations", "Respect for stakeholders on-site"].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#portfolio"
          onClick={(e) => { e.preventDefault(); setPage(PAGES.portfolio); }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
        >
          View project examples
        </a>
        <a
          href="#book"
          onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          Book a call <ArrowRight size={16} />
        </a>
      </div>
    </PageShell>
  );
}

function PortfolioPage({ setPage }) {
  const projects = [
    {
      title: "Municipal Facility PCA",
      tags: ["CIP Support", "Risk Priorities", "Photo Log"],
      desc: "System review with prioritized deficiencies and multi-year capital planning for leadership approval.",
      bullets: ["Executive summary", "Deficiency log", "Budget-grade cost opinions", "Phased project list"],
    },
    {
      title: "Commercial Acquisition PCA",
      tags: ["Due Diligence", "Negotiation Support"],
      desc: "Independent condition review for underwriting and buyer negotiation readiness.",
      bullets: ["End-of-life flags", "Near-term CapEx", "Lifecycle timing", "Risk notes"],
    },
    {
      title: "Energy Audit — Lighting + Controls",
      tags: ["ROI", "Utility Savings"],
      desc: "Targeted audit to identify high-impact efficiency measures and operational improvements.",
      bullets: ["Opportunity list", "Savings estimate", "Priority ranking", "Implementation notes"],
    },
    {
      title: "Combined PCA + Energy",
      tags: ["One Visit", "Holistic Plan"],
      desc: "One coordinated engagement to address physical condition and energy performance together.",
      bullets: ["Combined brief", "Capital + savings priorities", "Phasing strategy", "Leadership-ready summary"],
    },
  ];

  return (
    <PageShell>
      <SectionTitle
        eyebrow="Portfolio / Projects"
        title="Sample project types and deliverables"
        subtitle="Replace these examples with your completed projects as you build your portfolio."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-slate-600">{p.desc}</div>
                <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3"><Briefcase size={18} /></div>
            </div>
            <div className="mt-5">
              <div className="text-xs font-semibold text-slate-700">Typical deliverables</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-7">
        <div className="text-sm font-semibold">Want this page to feel real fast?</div>
        <div className="mt-2 text-sm text-slate-600">
          Add 2–4 photos (roof, mechanical room, electrical panels, building exterior) and a redacted sample summary.
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#book"
            onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Book a call <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            onClick={(e) => { e.preventDefault(); setPage(PAGES.pricing); }}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
          >
            See pricing
          </a>
        </div>
      </div>
    </PageShell>
  );
}

function PricingPage({ setPage }) {
  const tiers = [
    {
      name: "Starter",
      price: "$",
      tagline: "Best for a single small building",
      items: ["Walk-through PCA (core systems)", "Photo log + key deficiencies", "Executive summary", "Top 10 priorities"],
      popular: false,
    },
    {
      name: "Standard",
      price: "$$",
      tagline: "Most common for decision-makers",
      items: ["Full PCA (roof, structure, MEP, envelope, site)", "Prioritized deficiencies", "Budget-grade costs", "1–5 year capital plan"],
      popular: true,
    },
    {
      name: "Plus",
      price: "$$$",
      tagline: "PCA + Energy Audit bundle",
      items: ["Full PCA deliverables", "Energy measures ranked by impact", "Savings & ROI notes", "Combined leadership brief"],
      popular: false,
    },
  ];

  return (
    <PageShell>
      <SectionTitle
        eyebrow="Pricing"
        title="Simple packages — clear scope, fast decisions"
        subtitle="Pricing varies by building size, complexity, and number of sites. Use these as starting points; we’ll confirm scope on a quick call."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={cn("rounded-3xl border p-7 shadow-sm bg-white", t.popular ? "border-slate-900" : "border-slate-200")}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-base font-semibold">{t.name}</div>
                <div className="mt-1 text-sm text-slate-600">{t.tagline}</div>
              </div>
              <div className={cn("rounded-2xl p-3", t.popular ? "bg-slate-900 text-white" : "bg-slate-50")}>
                <BadgeDollarSign size={18} />
              </div>
            </div>

            <div className="mt-5">
              <div className="text-3xl font-semibold">{t.price}</div>
              <div className="mt-1 text-xs text-slate-500">Replace $/$$/$$$ with real pricing ranges when ready.</div>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {t.items.map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition",
                  t.popular ? "bg-slate-900 text-white hover:bg-slate-800" : "border border-slate-200 bg-white hover:bg-slate-50"
                )}
              >
                Book scoping call <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#portfolio"
          onClick={(e) => { e.preventDefault(); setPage(PAGES.portfolio); }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-slate-50"
        >
          View projects
        </a>
        <a
          href="#book"
          onClick={(e) => { e.preventDefault(); setPage(PAGES.book); }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
        >
          Book a call <ArrowRight size={16} />
        </a>
      </div>
    </PageShell>
  );
}

function BookCallPage() {
  const CALENDLY_URL = "https://calendly.com/your-link-here";

  return (
    <PageShell>
      <SectionTitle
        eyebrow="Book a Call"
        title="Schedule a quick scoping call"
        subtitle="In 15 minutes we can confirm scope, timeline, and deliverables—then we’ll send a clear proposal."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-12">
        <Card icon={Calendar} title="Option 1: Booking link" className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm">
            <div className="text-xs font-semibold text-slate-600">Calendly link (placeholder)</div>
            <div className="mt-1 break-all font-semibold text-slate-900">{CALENDLY_URL}</div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
            >
              Open booking link <ExternalLink size={16} />
            </a>
            <div className="text-xs text-slate-500">Replace with your real Calendly link.</div>
          </div>
        </Card>

        <Card icon={Phone} title="Option 2: Call / Email" className="lg:col-span-5">
          <div className="space-y-3 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl border border-slate-200 bg-slate-50 p-2"><Phone size={16} /></div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Phone</div>
                <div className="font-semibold">(555) 555-5555</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-xl border border-slate-200 bg-slate-50 p-2"><Mail size={16} /></div>
              <div>
                <div className="text-xs font-semibold text-slate-600">Email</div>
                <div className="font-semibold">info@focusondelaine.com</div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
            <div className="text-sm font-semibold text-slate-900">What to include</div>
            <ul className="mt-2 space-y-2">
              {["Property address(es)", "Building type(s)", "Timeline", "Known concerns (roof, HVAC, moisture)", "Desired deliverable format"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

export default function App() {
  const [page, setPage] = useState(PAGES.home);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Request: PCA / Energy Audit Consultation");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    return `mailto:info@focusondelaine.com?subject=${subject}&body=${body}`;
  }, [form]);

  const pageFade = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <MapPin size={16} />
            <span>Serving Leland, NC and surrounding areas</span>
          </div>
          <div className="hidden items-center gap-4 text-xs text-slate-600 sm:flex">
            <span className="inline-flex items-center gap-2"><Phone size={16} /> (555) 555-5555</span>
            <span className="inline-flex items-center gap-2"><Mail size={16} /> info@focusondelaine.com</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button onClick={() => setPage(PAGES.home)} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <Building2 size={18} />
            </div>
            <div className="leading-tight text-left">
              <div className="text-sm font-semibold">Focus On Delaine</div>
              <div className="text-xs font-medium text-slate-500">Development & Consulting LLC</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            <NavButton active={page === PAGES.home} onClick={() => setPage(PAGES.home)}>Home</NavButton>
            <NavButton active={page === PAGES.about} onClick={() => setPage(PAGES.about)}>About</NavButton>
            <NavButton active={page === PAGES.portfolio} onClick={() => setPage(PAGES.portfolio)}>Portfolio</NavButton>
            <NavButton active={page === PAGES.pricing} onClick={() => setPage(PAGES.pricing)}>Pricing</NavButton>
            <NavButton active={page === PAGES.book} onClick={() => setPage(PAGES.book)}>Book a Call</NavButton>
          </nav>

          <button
            onClick={() => setPage(PAGES.book)}
            className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Schedule
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div key={page} initial={pageFade.initial} animate={pageFade.animate} exit={pageFade.exit}>
          {page === PAGES.home && <HomePage setPage={setPage} mailto={mailto} form={form} setForm={setForm} />}
          {page === PAGES.about && <AboutPage setPage={setPage} />}
          {page === PAGES.portfolio && <PortfolioPage setPage={setPage} />}
          {page === PAGES.pricing && <PricingPage setPage={setPage} />}
          {page === PAGES.book && <BookCallPage />}
        </motion.div>
      </AnimatePresence>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
                <Building2 size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold">Focus On Delaine Development & Consulting LLC</div>
                <div className="text-xs text-slate-500">PCA • Energy Audits • Capital Planning Support</div>
              </div>
            </div>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Focus On Delaine Development & Consulting LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
