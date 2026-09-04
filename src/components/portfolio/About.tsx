import { useState } from "react";
import {
  Compass,
  Map,
  Database,
  Workflow,
  Users,
  BarChart3,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const competencies: { label: string; icon: LucideIcon; detail: string }[] = [
  { label: "Product Strategy", icon: Compass, detail: "Vision, positioning and 0→1 bets grounded in market and model capability." },
  { label: "Roadmap Ownership", icon: Map, detail: "Quarterly roadmaps tied to OKRs with clear trade-off narratives." },
  { label: "Data Pipelines", icon: Database, detail: "Feature stores, labeling ops and evaluation datasets that ship." },
  { label: "LLM Orchestration", icon: Workflow, detail: "RAG, agents, tool-use and guardrails in production." },
  { label: "Cross-functional Leadership", icon: Users, detail: "Aligning research, engineering, design and GTM around one bet." },
  { label: "Experimentation & Analytics", icon: BarChart3, detail: "A/B frameworks, offline evals and north-star metric design." },
  { label: "Responsible AI", icon: ShieldCheck, detail: "Safety reviews, red-teaming and compliance-ready launches." },
  { label: "Go-to-Market", icon: Rocket, detail: "Launch playbooks, pricing experiments and enablement content." },
];

const stats = [
  { value: "8+", label: "Years in product" },
  { value: "12", label: "AI products shipped" },
  { value: "1M+", label: "Users impacted" },
];

export function About() {
  const [active, setActive] = useState(0);
  const current = competencies[active] ?? competencies[0]!;

  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About me" title="Impact-driven, from prototype to platform." />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m an AI Product Manager who has spent the last eight years scaling machine
              learning products from fragile demos into revenue-generating platforms. My approach is
              simple: start from a sharply defined user problem, prove value with the smallest
              viable model, then invest in the data, infrastructure and evaluation loops that make
              it durable.
            </p>
            <p>
              I&apos;ve led cross-functional teams across research, engineering and design to ship
              LLM agents, computer-vision inspection systems and MLOps tooling used by enterprise
              customers. I obsess over measurable outcomes — latency, adoption, cost-per-inference
              and, ultimately, the business metrics they move.
            </p>
            <p>
              Outside of shipping, I write about AI product craft, mentor early-career PMs and
              tinker with open-source agent frameworks.
            </p>

            <dl className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl px-4 py-4">
                  <dt className="order-2 text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="reveal glass rounded-2xl p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Core Competencies</h3>
            <p className="mt-1 text-sm text-muted-foreground">Hover or tap a tag to learn more.</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {competencies.map((c, i) => {
                const Icon = c.icon;
                const isActive = i === active;
                return (
                  <button
                    key={c.label}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-primary/60 bg-primary/15 text-primary shadow-glow"
                        : "border-border bg-secondary/40 text-foreground/85 hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    <Icon size={15} />
                    {c.label}
                  </button>
                );
              })}
            </div>

            <div
              key={current.label}
              className="mt-6 rounded-xl border border-primary/20 bg-background/60 p-5 animate-fade-in"
            >
              <p className="flex items-center gap-2 font-display text-sm font-semibold text-primary">
                <current.icon size={16} /> {current.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
