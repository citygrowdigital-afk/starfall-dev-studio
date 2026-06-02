import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.18_200)]">
            06 — Contact
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Let's <span className="text-gradient">build something</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Open to engineering roles, collaborations, and interesting problems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl glass-strong p-8 md:col-span-2"
          >
            <h3 className="text-lg font-semibold">Reach out directly</h3>
            <div className="mt-6 space-y-4 text-sm">
              <a href="mailto:khyatijain@example.com" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 text-[oklch(0.85_0.18_200)]" />
                khyatijain@example.com
              </a>
              <a href="https://linkedin.com/in/khyati-jain" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                <Linkedin className="h-4 w-4 text-[oklch(0.85_0.18_200)]" />
                linkedin.com/in/khyati-jain
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[oklch(0.85_0.18_200)]" />
                India
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-xs text-muted-foreground">
              <span className="text-[oklch(0.85_0.18_200)]">$</span> status: <span className="text-foreground">available</span>
              <br />
              <span className="text-[oklch(0.85_0.18_200)]">$</span> response_time: <span className="text-foreground">~24h</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
            className="rounded-3xl glass-strong p-8 md:col-span-3"
          >
            <div className="grid gap-4">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.name} className="group relative">
                  <input
                    required
                    type={f.type}
                    name={f.name}
                    placeholder=" "
                    className="peer w-full rounded-xl border border-white/10 bg-white/5 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-[oklch(0.65_0.28_300_/_0.6)] focus:bg-white/[0.07]"
                  />
                  <label className="pointer-events-none absolute left-4 top-3.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[oklch(0.85_0.18_200)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                    {f.label}
                  </label>
                </div>
              ))}
              <div className="group relative">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder=" "
                  className="peer w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all focus:border-[oklch(0.65_0.28_300_/_0.6)] focus:bg-white/[0.07]"
                />
                <label className="pointer-events-none absolute left-4 top-3.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[oklch(0.85_0.18_200)] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]">
                  Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[oklch(0.65_0.28_300)] to-[oklch(0.7_0.22_250)] px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-neon transition-transform hover:scale-[1.01]"
            >
              {sent ? "Message Sent ✓" : (<>Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </motion.form>
        </div>

        <footer className="mt-24 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Khyati Jain. Built with care.</div>
          <div className="font-mono">designed & developed in india</div>
        </footer>
      </div>
    </section>
  );
}
