import { Briefcase, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const roles = [
  {
    company: "[Company Name]",
    role: "Senior AI Product Manager",
    dates: "2023 — Present",
    metric: "+35% Model Efficiency",
    bullets: [
      "Own the roadmap for an LLM-powered agent platform serving 40+ enterprise accounts.",
      "Introduced an offline eval harness that cut regression escapes by half before launch.",
      "Partnered with ML infra to migrate inference to a hybrid GPU/CPU fleet, lowering unit cost.",
    ],
  },
  {
    company: "[Company Name]",
    role: "AI Product Manager",
    dates: "2020 — 2023",
    metric: "Scaled user base to 1M+",
    bullets: [
      "Launched a generative writing assistant that became the company's fastest-growing SKU.",
      "Defined data-labeling standards and feedback loops that lifted model precision quarter over quarter.",
      "Led pricing and packaging experiments that increased ARPU by double digits.",
    ],
  },
  {
    company: "[Company Name]",
    role: "Product Manager, Data Platform",
    dates: "2018 — 2020",
    metric: "-60% Pipeline Latency",
    bullets: [
      "Shipped a self-serve feature store used by 30+ data scientists across three business units.",
      "Rebuilt streaming ingestion with the platform team, moving from hourly to near-real-time data.",
      "Established analytics governance and a single source of truth for core KPIs.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A career built on shipping AI that matters."
        />

        <ol className="relative ml-3 border-l border-border sm:ml-5">
          {roles.map((r, i) => (
            <li key={i} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span className="absolute -left-[9px] top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-primary bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
              </span>

              <article className="glass rounded-2xl p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      <Briefcase size={14} className="shrink-0 text-primary" /> {r.company}
                    </p>
                    <h3 className="mt-1.5 text-xl font-semibold">{r.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.dates}</p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 font-display text-sm font-semibold text-primary">
                    <TrendingUp size={15} /> {r.metric}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {b}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
