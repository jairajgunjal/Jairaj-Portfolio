import { useState } from "react";
import { ExternalLink } from "lucide-react";
import supportImg from "@/assets/project-support.jpg";
import churnImg from "@/assets/project-churn.jpg";
import ragImg from "@/assets/project-rag.jpg";
import mlopsImg from "@/assets/project-mlops.jpg";
import visionImg from "@/assets/project-vision.jpg";

const categories = [
  "All",
  "Product Strategy",
  "Product Sense",
  "AI Agents",
  "Technical",
  "Business Problem",
] as const;

type Category = (typeof categories)[number];

const projects: {
  title: string;
  category: Exclude<Category, "All">;
  image: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
}[] = [
  {
    title: "Onboarding Redesign for Enterprise Accounts",
    category: "Product Sense",
    image: supportImg,
    problem:
      "New enterprise accounts took 6+ weeks to reach first value, and early drop-off showed up as renewal risk months later.",
    approach:
      "Mapped the first-30-day journey from ticket themes and kickoff calls, cut setup steps, and shipped a guided checklist with milestone nudges.",
    outcome: "Time-to-first-value dropped from 6 weeks to 12 days across 20+ accounts.",
    tags: ["Journey mapping", "User research", "PRD"],
  },
  {
    title: "Support Copilot Agent for Frontline Teams",
    category: "AI Agents",
    image: ragImg,
    problem:
      "Tribal knowledge lived in Slack threads and old tickets, so replies were slow and inconsistent between reps.",
    approach:
      "Scoped an assistant that drafts answers from verified help content, with confidence thresholds and a human-approve step before sending.",
    outcome: "Cut average query response time by 42% and lifted first-contact resolution.",
    tags: ["Assistant design", "Knowledge base", "Guardrails"],
  },
  {
    title: "Customer Health & Churn Predictor",
    category: "Technical",
    image: churnImg,
    problem:
      "There was no early warning for at-risk accounts, so retention work only started once a customer had already decided to leave.",
    approach:
      "Partnered with data science to define churn signals from usage, support and sentiment data, then wired scores into the CSM workflow.",
    outcome: "Flagged 85% of at-risk accounts early and retained $450K in ARR in two quarters.",
    tags: ["Predictive scoring", "SQL", "Looker"],
  },
  {
    title: "Pricing & Packaging Rework",
    category: "Business Problem",
    image: visionImg,
    problem:
      "Mid-market deals stalled at negotiation and support-heavy accounts were unprofitable on the flat plan.",
    approach:
      "Analysed usage vs. cost-to-serve by segment, modelled three packaging options, and ran a pilot with a usage-based tier.",
    outcome: "Lifted average contract value 18% while shrinking discount requests.",
    tags: ["Segmentation", "Unit economics", "Pricing"],
  },
  {
    title: "Quarterly Roadmap from Customer Signal",
    category: "Product Strategy",
    image: mlopsImg,
    problem:
      "Roadmap debates ran on opinion; the loudest account often won and smaller recurring pain went unaddressed.",
    approach:
      "Built a scoring model combining revenue at risk, request frequency and effort, and turned it into a repeatable quarterly review with engineering and GTM.",
    outcome: "Roadmap decisions became defensible, and shipped-feature adoption rose 28%.",
    tags: ["Prioritisation", "OKRs", "Stakeholders"],
  },
  {
    title: "Self-Serve Expansion Motion",
    category: "Product Strategy",
    image: supportImg,
    problem:
      "Every upgrade needed a sales conversation, capping expansion revenue on smaller accounts.",
    approach:
      "Designed in-product upgrade prompts tied to usage limits, with a clear preview of what the next tier unlocks.",
    outcome: "One in five eligible accounts upgraded without touching sales.",
    tags: ["PLG", "Experimentation", "Funnel"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
          Case Studies
        </p>
        <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
          Problems solved, not features shipped.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#64748B]">
          A mix of product strategy, product sense, hands-on technical work and commercial problems
          — each written as problem, approach and outcome.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
              filter === c
                ? "border-[#1E3A8A]/60 bg-[#1E3A8A]/10 text-[#1E3A8A] shadow-sm"
                : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#1E3A8A]/40 hover:text-[#1E3A8A]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1E3A8A] backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-[#0F172A]">{p.title}</h3>

              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                    Problem
                  </dt>
                  <dd className="mt-1 text-[#64748B]">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                    Approach
                  </dt>
                  <dd className="mt-1 text-[#64748B]">{p.approach}</dd>
                </div>
              </dl>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-[#F1F5F9] px-2 py-1 text-[11px] font-semibold tracking-wide text-[#475569]"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-4 rounded-lg border border-[#1E3A8A]/20 bg-[#1E3A8A]/5 px-3 py-2 text-sm font-medium text-[#1E3A8A]">
                {p.outcome}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1E3A8A] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                >
                  Read the full story <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
