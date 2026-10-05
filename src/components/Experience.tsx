import { ArrowUpRight, Briefcase, CalendarDays, Target, TrendingUp } from "lucide-react";

const roles = [
  {
    company: "Faclon Labs",
    role: "Customer Success Manager",
    dates: "Dec 2025 — Present · Mumbai",
    metric: "+28% AI feature adoption",
    bullets: [],
  },
  {
    company: "Career break",
    role: "Caregiving",
    dates: "Dec 2024 — Nov 2025 · Mumbai",
    break: true,
    bullets: [],
  },
  {
    company: "Dezy (Smiles.ai)",
    role: "City Lead (Sales & Growth Strategy)",
    dates: "Dec 2023 — Dec 2024 · Bengaluru",
    metric: "₹7M monthly portfolio",
    bullets: [
      "Managed the full customer journey — onboarding, engagement and satisfaction — for Bengaluru, maintaining a ₹7M monthly revenue portfolio.",
      "Led and mentored 12 direct and indirect reports across sales and growth.",
      "Queried customer databases with SQL to identify funnel drop-offs, informing the decision to pause paid marketing and clear the pending deal pipeline.",
      "Scaled organic acquisition through hyper-local BTL activities, bringing high-intent leads into the improved onboarding funnel.",
    ],
  },
  {
    company: "Teachnook",
    role: "Senior Manager & Lead Member",
    dates: "Jul 2022 — Nov 2023 · Bengaluru",
    metric: "₹3Cr average monthly portfolio",
    bullets: [
      "Spearheaded sales, go-to-market and expansion strategies; Teachnook was ranked #13 on LinkedIn’s Top Startups 2023.",
      "Built and managed a team of 60+ representatives executing a ₹3Cr average monthly revenue portfolio.",
      "Connected technical teams, marketing and executives to turn ground-level user insights into actionable product roadmap updates.",
      "Structured distribution channels and promotional frameworks, using acquisition trends to reduce drop-offs and speed up sales cycles.",
    ],
  },
  {
    company: "Verzeo",
    role: "Business Development Trainee → Senior Manager",
    dates: "Aug 2020 — Jul 2022 · Bengaluru",
    metric: "0 → 50 in four weeks",
    bullets: [
      "Senior Manager (May–Jul 2022), Team Leader (Apr 2021–Jul 2022), Business Development Executive (Feb 2021–Jul 2022) and Business Development Trainee (Aug 2020–Jan 2021).",
      "Helped set up the Visakhapatnam branch, hiring and scaling a team from 0 to 50 in four weeks.",
    ],
  },
  {
    company: "Career break",
    role: "Health and well-being",
    dates: "Jan 2020 — Jul 2020 · Mumbai",
    break: true,
    bullets: ["COVID break."],
  },
  {
    company: "GTL Limited",
    role: "Network Operations Center Engineer",
    dates: "Jul 2019 — Dec 2019 · Mumbai",
    bullets: [
      "Monitored telecom network telemetry around the clock, triaging incidents against SLAs — the technical grounding I still use when scoping what a product should measure.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Engineering → Sales → Customer Success → Product.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Today I'm a Customer Success Manager — product-facing every day. Each step below added a
          muscle the next one needed: technical grounding from engineering, commercial judgment
          from sales, and customer intimacy from success. Product Management is where it all
          converges.
        </p>
      </div>

      <a
        href="#projects"
        className="mb-10 ml-3 flex items-center gap-4 rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 transition-colors hover:border-primary sm:ml-5 sm:p-5"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-white">
          <Target size={20} />
        </span>
        <span className="min-w-0">
          <span className="block text-xs font-semibold uppercase tracking-wide text-primary">
            Where this is headed
          </span>
          <span className="block text-lg font-semibold text-foreground">
            Product Management — see the case studies I've built toward it
          </span>
        </span>
        <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-primary" />
      </a>

      <ol className="relative ml-3 border-l border-border sm:ml-5">
        {roles.map((r, i) => (
          <li key={`${r.company}-${r.dates}`} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
            <span className={`absolute -left-[9px] top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 bg-card ${'break' in r ? 'border-muted-foreground' : 'border-primary'}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${'break' in r ? 'bg-muted-foreground' : 'bg-primary'}`} />
            </span>

            <article className="border-b border-border pb-8 last:border-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {'break' in r ? <CalendarDays size={14} className="shrink-0" /> : <Briefcase size={14} className="shrink-0 text-primary" />} {r.company}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold text-foreground">{r.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.dates}</p>
                </div>
                {r.metric && (
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                    <TrendingUp size={15} className="shrink-0" /> {r.metric}
                  </span>
                )}
              </div>

              {r.bullets.length > 0 && <ul className="mt-5 space-y-2.5">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {b}
                  </li>
                ))}
              </ul>}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
