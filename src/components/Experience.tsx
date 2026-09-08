import { Briefcase, TrendingUp } from "lucide-react";

const roles = [
  {
    company: "Falcon Labs",
    role: "Customer Success Manager",
    dates: "2024 — Present",
    metric: "+28% Feature Adoption",
    bullets: [
      "Track product usage and support themes to surface the highest-impact opportunities for the roadmap.",
      "Draft PRDs and user stories rooted in real client pain points and renewal conversations.",
      "Partnered with data science on health scoring that drove a 28% lift in feature adoption.",
    ],
  },
  {
    company: "[Previous Company]",
    role: "Senior Customer Success Associate",
    dates: "2021 — 2024",
    metric: "98% Net Revenue Retention",
    bullets: [
      "Managed a portfolio of 40+ enterprise accounts, turning churn signals into expansion plays.",
      "Built dashboards that made product usage visible to internal stakeholders and executives.",
      "Led quarterly business reviews that informed roadmap prioritization and pricing experiments.",
    ],
  },
  {
    company: "[Previous Company]",
    role: "Sales Executive",
    dates: "2019 — 2021",
    metric: "Consistent Quota Attainment",
    bullets: [
      "Ran full-cycle deals, learning how buyers evaluate value, pricing and competing options.",
      "Fed objection patterns and lost-deal reasons back to product and marketing.",
      "Built the commercial instinct behind how I frame product bets today: revenue impact first.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
          Experience
        </p>
        <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">Trajectory: CS to AI PM.</h2>
      </div>

      <ol className="relative ml-3 border-l border-[#E2E8F0] sm:ml-5">
        {roles.map((r, i) => (
          <li key={i} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <span className="absolute -left-[9px] top-1.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-[#1E3A8A] bg-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A8A]" />
            </span>

            <article className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-7">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                    <Briefcase size={14} className="shrink-0 text-[#1E3A8A]" /> {r.company}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold text-[#0F172A]">{r.role}</h3>
                  <p className="mt-1 text-sm text-[#64748B]">{r.dates}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#1E3A8A]/30 bg-[#1E3A8A]/10 px-3 py-1.5 text-sm font-semibold text-[#1E3A8A]">
                  <TrendingUp size={15} /> {r.metric}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-[#64748B]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1E3A8A]/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
