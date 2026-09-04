import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, handle: "/in/jairajgunjal" },
  { label: "GitHub", href: "https://github.com", icon: Github, handle: "@jairajgunjal" },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail, handle: "hello@example.com" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  const inputCls =
    "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border pt-20 pb-10 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build what's next."
          description="Whether you're hiring, exploring a collaboration or just want to trade notes on AI product craft — my inbox is open."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <form onSubmit={onSubmit} className="reveal glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">Name</span>
                <input name="name" required placeholder="Your name" className={inputCls} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">Email</span>
                <input name="email" type="email" required placeholder="you@company.com" className={inputCls} />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the problem you're solving…"
                className={`${inputCls} resize-none`}
              />
            </label>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:brightness-110 disabled:opacity-80 sm:w-auto"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : status === "sending" ? (
                "Sending…"
              ) : (
                <>
                  Send message <Send size={15} />
                </>
              )}
            </button>
          </form>

          <div className="reveal space-y-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold">{s.label}</span>
                    <span className="block truncate text-sm text-muted-foreground">{s.handle}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Jairaj Gunjal. All rights reserved.</p>
          <p>Designed with a Cognitive Tech aesthetic.</p>
        </div>
      </div>
    </footer>
  );
}
