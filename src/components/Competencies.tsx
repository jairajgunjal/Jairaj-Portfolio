import { useState } from "react";
import {
  Network,
  Map,
  Compass,
  TrendingUp,
  Users,
  MessageSquare,
} from "lucide-react";

const skills = [
  {
    label: "LLM Orchestration",
    icon: Network,
    detail:
      "RAG, agents, tool-use and guardrails in production — building AI that stays helpful, safe and observable.",
  },
  {
    label: "Roadmap Ownership",
    icon: Map,
    detail:
      "Quarterly roadmaps tied to OKRs with clear trade-off narratives and stakeholder alignment.",
  },
  {
    label: "Product Strategy",
    icon: Compass,
    detail:
      "Vision, positioning and 0→1 bets grounded in market need, model capability and business model.",
  },
  {
    label: "Predictive Churn Modeling",
    icon: TrendingUp,
    detail:
      "Proactive health scoring that flags at-risk revenue before it churns and powers retention plays.",
  },
  {
    label: "User Discovery",
    icon: MessageSquare,
    detail:
      "Turning support conversations, NPS and telemetry into validated problem statements and PRDs.",
  },
  {
    label: "Cross-functional Leadership",
    icon: Users,
    detail:
      "Aligning research, engineering, design and GTM around one bet — from prototype to launch.",
  },
];

export default function Competencies() {
  const [active, setActive] = useState(0);
  const current = skills[active] ?? skills[0]!;
  const Icon = current.icon;

  return (
    <div className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A8A]">
          Competencies
        </p>
        <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl">
          Strategy & technical edge.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#64748B]">
          My Customer Success background gives me a rare lens: I don&apos;t just build AI — I build
          AI that solves the exact pain points users express in calls, tickets and churn surveys.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-wrap content-start gap-2.5">
          {skills.map((s, i) => {
            const Si = s.icon;
            const isActive = i === active;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-[#1E3A8A]/60 bg-[#1E3A8A]/10 text-[#1E3A8A] shadow-sm"
                    : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#1E3A8A]/40 hover:text-[#1E3A8A]"
                }`}
              >
                <Si className="h-4 w-4" />
                {s.label}
              </button>
            );
          })}
        </div>

        <div
          key={current.label}
          className="animate-fade-in rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1E3A8A]/10 text-[#1E3A8A]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-[#0F172A]">{current.label}</h3>
          </div>
          <p className="leading-relaxed text-[#64748B]">{current.detail}</p>
        </div>
      </div>
    </div>
  );
}
