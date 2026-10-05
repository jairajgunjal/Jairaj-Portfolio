import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competencies from "./components/Competencies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-8">
        <section id="hero" className="pt-24">
          <Hero />
        </section>
        <section id="skills" className="bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm">
          <Competencies />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience" className="bg-white border border-[#E2E8F0] rounded-xl p-8 shadow-sm">
          <Experience />
        </section>
      </main>
      <footer className="bg-white border-t border-[#E2E8F0] py-8 text-center text-sm text-[#64748B] mt-24">
        <p>© 2026 Jairaj Gunjal. All rights reserved.</p>
      </footer>
    </div>
  );
}
