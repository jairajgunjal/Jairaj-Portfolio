import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jairaj Gunjal — AI Product Manager Portfolio" },
      {
        name: "description",
        content:
          "Customer Success leader transitioning into AI Product Management at Falcon Labs. Portfolio of generative AI, LLM pipelines and predictive ML models.",
      },
      {
        property: "og:title",
        content: "Jairaj Gunjal — AI Product Manager Portfolio",
      },
      {
        property: "og:description",
        content: "Bridging user empathy with machine learning infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <App />;
}
