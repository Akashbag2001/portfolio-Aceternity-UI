"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const topics = [
  {
    id: "role",
    label: "A full-time role",
    placeholder: "Tell me about the role, the team, the stack, and whether it's remote, hybrid or on-site…",
  },
  {
    id: "project",
    label: "A freelance project",
    placeholder: "What are you building, who is it for, and when would you like it live?",
  },
  { id: "other", label: "Something else", placeholder: "What's on your mind?" },
] as const;

type Topic = (typeof topics)[number];
type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full border-b border-ink/20 bg-transparent py-3.5 text-lg text-ink placeholder:text-ink/35 transition-colors focus:border-ink focus:outline-none disabled:opacity-60 resize-none";
const labelClass = "text-xs font-semibold uppercase tracking-[0.18em] text-ink/50";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [topic, setTopic] = useState<Topic>(topics[0]);
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const busy = status === "loading";

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: `[${topic.label}] ${form.subject}` }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[1.75rem] border border-ink/10 bg-white p-7 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            className="flex flex-col items-start py-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-flame">
              <CheckCircle2 className="h-8 w-8 text-ink" />
            </span>
            <h2 className="mt-8 font-display text-4xl font-extrabold tracking-[-0.03em]">Message sent.</h2>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">
              Thanks for reaching out. It&apos;s in my inbox and I&apos;ll reply within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-10 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <fieldset disabled={busy}>
              <legend className={labelClass}>I&apos;m getting in touch about</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <label
                    key={t.id}
                    className={cn(
                      "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-flame",
                      topic.id === t.id ? "border-ink bg-ink text-paper" : "border-ink/15 hover:border-ink"
                    )}
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={t.id}
                      checked={topic.id === t.id}
                      onChange={() => setTopic(t)}
                      className="sr-only"
                    />
                    {t.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={update}
                  disabled={busy}
                  placeholder="Jane Doe"
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={update}
                  disabled={busy}
                  placeholder="you@company.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={update}
                disabled={busy}
                placeholder={topic.id === "role" ? "Senior Full-Stack Engineer at Acme" : "A quick summary"}
                className={fieldClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={update}
                disabled={busy}
                placeholder={topic.placeholder}
                className={fieldClass}
              />
            </div>

            <AnimatePresence>
              {status === "error" && error && (
                <motion.p
                  role="alert"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-center gap-2.5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <XCircle className="h-4 w-4 shrink-0" />
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={busy}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-paper transition-colors duration-300 hover:bg-flame hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
            >
              {busy ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <span className="roll">
                    <span data-text="Send message">Send message</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
