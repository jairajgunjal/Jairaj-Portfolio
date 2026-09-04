import { ArrowRight, Sparkles } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

const expertise = ["LLMs", "Generative AI", "Computer Vision", "MLOps", "Data Analytics"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
            AI Product Manager · Open to opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Driving product vision at the intersection of{" "}
            <span className="text-gradient-emerald">AI</span>, engineering &amp; user experience.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I turn frontier research into shipped products. From LLM-powered agents to production
            MLOps platforms, I build systems that scale, measure what matters, and deliver
            outcomes users can feel.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {expertise.map((e) => (
              <li
                key={e}
                className="rounded-md border border-border bg-card/60 px-3 py-1.5 text-sm font-medium text-foreground/90"
              >
                {e}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-card"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/30 via-transparent to-transparent blur-2xl" aria-hidden />
          <div className="glass relative overflow-hidden rounded-3xl p-3 shadow-card animate-float">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={headshot}
                alt="Portrait of Jairaj Gunjal, AI Product Manager"
                width={896}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 glass flex items-center justify-between rounded-xl px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold">Jairaj Gunjal</p>
                <p className="text-xs text-muted-foreground">Senior AI Product Manager</p>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary">
                <Sparkles size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
