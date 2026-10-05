import { ExternalLink } from "lucide-react";
import supportImg from "@/assets/project-support.jpg";
import churnImg from "@/assets/project-churn.jpg";

type Project = {
  title: string;
  category: string;
  image: string;
  problem: string;
  approach: string;
  outcome: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Automated Ticket-Raising AI Agent",
    category: "AI Agents",
    image: supportImg,
    problem:
      "Customer issues surfaced across chats, calls and internal threads, and turning each one into a properly filed ticket was manual, inconsistent and easy to lose track of.",
    approach:
      "Built an AI agent in n8n that captures customer issues from team channels, structures them into tickets with the right category and priority, and routes them to the CSM workflow automatically — no copy-pasting between tools.",
    outcome:
      "Ticket creation went from a manual step to an automated handoff — consistent intake, correct routing, and nothing slipping through the cracks.",
    tags: ["n8n", "AI Agents", "Workflow automation", "CSM ops"],
  },
  {
    title: "Customer Churn Predictor",
    category: "Technical",
    image: churnImg,
    problem:
      "There was no early signal for accounts drifting toward churn — retention conversations only started after a customer had already disengaged.",
    approach:
      "Built a churn prediction model on customer usage and engagement signals, scoring accounts on risk so the team could prioritise outreach before the relationship cooled.",
    outcome:
      "At-risk accounts now surface early with a risk score, turning retention from reactive firefighting into proactive, data-backed outreach.",
    tags: ["Churn modelling", "Predictive analytics", "SQL", "Data-driven retention"],
  },
];

export default function Projects() {
  return (
    <div className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Case Studies
        </p>
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Problems solved, not features shipped.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Projects I've built hands-on while moving from Customer Success into
          Product — real automation and analytics shipped for my own teams.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute left-4 top-4 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur">
                {p.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>

              <dl className="mt-4 space-y-3 text-sm leading-relaxed">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                    Problem
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground/70">
                    Approach
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{p.approach}</dd>
                </div>
              </dl>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-muted px-2 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-4 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium text-primary">
                {p.outcome}
              </p>

              <div className="mt-auto pt-6">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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
