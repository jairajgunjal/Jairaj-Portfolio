import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import supportImg from "@/assets/project-support.jpg";
import mlopsImg from "@/assets/project-mlops.jpg";
import visionImg from "@/assets/project-vision.jpg";

const projects = [
  {
    title: "Generative AI Customer Support Agent",
    image: supportImg,
    problem: "Tier-1 support tickets were overwhelming a lean CX team with 48h response times.",
    tech: ["OpenAI API", "LangChain", "Python", "Pinecone"],
    outcome: "Resolved 62% of tickets autonomously, cutting median response to 90 seconds.",
  },
  {
    title: "Enterprise MLOps Dashboard",
    image: mlopsImg,
    problem: "Data science teams had no shared view of model drift, cost and deployment health.",
    tech: ["Python", "MLflow", "Kubernetes", "React"],
    outcome: "Reduced time-to-detect drift from days to minutes across 120+ production models.",
  },
  {
    title: "Computer Vision Quality Inspection",
    image: visionImg,
    problem: "Manual visual inspection on the factory line missed subtle defects and slowed throughput.",
    tech: ["PyTorch", "YOLOv8", "Edge TPU", "Python"],
    outcome: "Achieved 99.2% defect recall and +18% line throughput within one quarter.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with measurable outcomes."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group glass flex flex-col overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold tracking-wide text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <p className="mt-4 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
                  {p.outcome}
                </p>

                <div className="mt-auto flex gap-3 pt-6">
                  <a
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                  >
                    View Case Study <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary"
                  >
                    <Github size={15} /> Repo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
