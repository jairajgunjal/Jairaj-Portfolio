import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jairaj Gunjal — AI Product Manager Portfolio" },
      {
        name: "description",
        content:
          "AI Product Manager driving product vision across LLMs, Generative AI, Computer Vision and MLOps. Explore experience, projects and get in touch.",
      },
      { property: "og:title", content: "Jairaj Gunjal — AI Product Manager Portfolio" },
      {
        property: "og:description",
        content: "Shipping AI products that scale: LLM agents, MLOps platforms and computer vision systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
