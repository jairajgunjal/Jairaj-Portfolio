import { ArrowRight } from "lucide-react";
import headshot from "@/assets/headshot.jpg";

export default function Hero() {
  return (
    <section className="pt-8 pb-16 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-rise">
          <h1 className="text-4xl font-bold leading-[1.1] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Turning customer insights into product outcomes.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#64748B]">
            Customer Success Leader transitioning into Product Management. I translate deep
            customer friction into high-ROI product initiatives, scalable workflows, and
            predictive insights that teams actually adopt.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1E3A8A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1D4ED8]"
            >
              View case studies <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-5 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:border-[#1E3A8A]"
            >
              See trajectory
            </a>
          </div>
        </div>

        <div className="relative mx-auto max-w-sm animate-rise [animation-delay:150ms] lg:max-w-md">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#1E3A8A]/20 via-transparent to-transparent blur-2xl"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-2 shadow-lg">
            <img
              src={headshot}
              alt="Jairaj Gunjal"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
