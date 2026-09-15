import { Briefcase, TrendingUp } from "lucide-react";

const roles = [
  {
    company: "Faclon Labs",
    role: "Customer Success Manager (Product-facing)",
    dates: "Dec 2025 — Present · Mumbai",
    metric: "+28% Feature Adoption",
    bullets: [
      "Own the post-deployment relationship for industrial IoT accounts, translating live telemetry and support themes into prioritised product opportunities.",
      "Write PRDs, user stories and acceptance criteria grounded in real client pain points, and run them through engineering and data science reviews.",
      "Partnered on account health scoring and usage analytics that lifted feature adoption 28% across the managed portfolio.",
    ],
  },
  {
    company: "Dezy (Smiles.ai)",
    role: "City Lead — Bengaluru",
    dates: "Dec 2023 — Dec 2024 · Bengaluru",
    metric: "₹7Cr Monthly Revenue City",
    bullets: [
      "Owned the full customer lifecycle — onboarding, engagement and satisfaction — for a multi-city operation generating ₹7 million in monthly revenue.",
      "Led a direct and indirect team of 12, building the operating cadence for service quality and escalation handling.",
      "Analysed customer data in Excel, SQL and Tableau to lift NPS and close feedback loops between operations and leadership.",
      "Drove operating strategy focused on profitability and cost-to-serve, with direct impact on P&L metrics.",
    ],
  },
  {
    company: "Teachnook",
    role: "Senior Manager & Lead Member",
    dates: "Jul 2022 — Nov 2023 · Bengaluru",
    metric: "₹3Cr Avg. Monthly Business",
    bullets: [
      "Led sales and GTM during the growth run that ranked the company #13 on LinkedIn's Top Startups 2023.",
      "Executed business worth ₹3Cr on average per month while leading a team of 80+ representatives.",
      "Acted as the liaison between technical teams, marketing and executives to align product direction with commercial goals.",
      "Built the distribution, pricing and promotion strategy that opened new revenue channels.",
    ],
  },
  {
    company: "Verzeo",
    role: "Business Development Trainee → Senior Manager",
    dates: "Aug 2020 — Jul 2022 · Bengaluru",
    metric: "0 → 50 Team in 4 Weeks",
    bullets: [
      "Progressed from trainee to Senior Manager across four roles in two years, ending as second-in-command on a new branch launch.",
      "Helped hire, build and scale a 50-person team from scratch in four weeks for the Vishakapatnam branch.",
      "Ran full-cycle B2C deals, learning how buyers evaluate value, pricing and competing options.",
    ],
  },
  {
    company: "GTL Limited",
    role: "Network Operations Center Engineer",
    dates: "Jul 2019 — Dec 2019 · Mumbai",
    metric: "Technical Foundation",
    bullets: [
      "Monitored live network infrastructure, triaging alarms and incidents against uptime SLAs.",
      "Built the systems-thinking and telemetry instinct I now apply to product and data problems.",
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
        <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
          Trajectory: engineering to sales to product.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#64748B]">
          A technical start, a decade of commercial ownership, and now product work at the point
          where customer signal meets data infrastructure.
        </p>
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
