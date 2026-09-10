"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Github,
  Linkedin,
  CheckCircle2,
  XCircle,
  Loader2,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const contactLinks = [
  {
    label: "bagakash11@gmail.com",
    sub: "Email",
    href: "mailto:bagakash11@gmail.com",
    Icon: Mail,
  },
  {
    label: "github.com/Akashbag2001",
    sub: "GitHub",
    href: "https://github.com/Akashbag2001",
    Icon: Github,
  },
  {
    label: "linkedin.com/in/akash-bag",
    sub: "LinkedIn",
    href: "https://www.linkedin.com/in/akash-bag/",
    Icon: Linkedin,
  },
];

const inputClass =
  "w-full rounded-2xl border border-ink/15 bg-paper-alt px-4 py-3.5 text-sm text-ink placeholder:text-ink-muted/60 transition-all duration-200 focus:border-ink focus:outline-none focus:ring-2 focus:ring-sun disabled:opacity-60 resize-none";

const labelClass =
  "text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "loading") return;

    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setState("error");
        return;
      }

      setState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setState("error");
    }
  };

  const resetForm = () => {
    setState("idle");
    setErrorMsg("");
  };

  return (
    <section id="contact" className="border-t border-ink/10 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Yellow CTA banner ── */}
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-sun px-8 py-16 text-center sm:px-16 sm:py-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative rings */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border-2 border-ink/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-12 h-72 w-72 rounded-full border-2 border-ink/10"
            aria-hidden="true"
          />

          <div className="relative">
            <span className="eyebrow !text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-ink" />
              Get in touch
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.02] text-ink">
              Let&apos;s start a project together.
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
              Have something in mind — a product, a role, or a problem worth
              solving? Tell me about it and I&apos;ll reply within 24 hours.
            </p>

            <a
              href="mailto:bagakash11@gmail.com"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              bagakash11@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        {/* ── Details + form ── */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — details */}
          <motion.div
            className="flex flex-col gap-10 lg:col-span-2"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-ink">
                Prefer the details?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Open to full-time roles, freelance projects and interesting
                collaborations.
              </p>
            </div>

            <dl className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
              <div className="flex items-center gap-4 py-4">
                <MapPin className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                <dt className="sr-only">Location</dt>
                <dd className="text-sm font-medium text-ink">India</dd>
              </div>
              <div className="flex items-center gap-4 py-4">
                <Clock className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                <dt className="sr-only">Response time</dt>
                <dd className="text-sm font-medium text-ink">
                  Replies within 24 hours
                </dd>
              </div>
            </dl>

            <div className="flex flex-col gap-2">
              {contactLinks.map(({ label, sub, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper-alt px-5 py-4 transition-all duration-300 hover:border-ink/25 hover:bg-sun"
                >
                  <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.12em] text-ink-muted">
                      {sub}
                    </span>
                    <span className="text-sm font-medium text-ink">{label}</span>
                  </span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-[2rem] border border-ink/10 bg-paper-alt p-7 sm:p-9">
              <AnimatePresence mode="wait">
                {state === "success" ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-16 text-center"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.span
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-sun"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                    >
                      <CheckCircle2 className="h-9 w-9 text-ink" />
                    </motion.span>
                    <h3 className="mt-6 text-2xl font-bold text-ink">
                      Message sent
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                      Thanks for reaching out — I&apos;ve got your message and
                      will reply within 24 hours. A confirmation is on its way to
                      your inbox too.
                    </p>
                    <button
                      onClick={resetForm}
                      className="mt-8 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-1">
                      <h3 className="text-2xl font-bold text-ink">
                        Send a message
                      </h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        All fields are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className={labelClass}>
                          Your name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          required
                          disabled={state === "loading"}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className={labelClass}>
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          disabled={state === "loading"}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className={labelClass}>
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Freelance project / Full-time role / Just saying hi"
                        required
                        disabled={state === "loading"}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, the problem you're solving, and roughly when you'd like it live…"
                        required
                        rows={6}
                        disabled={state === "loading"}
                        className={inputClass}
                      />
                    </div>

                    <AnimatePresence>
                      {state === "error" && errorMsg && (
                        <motion.p
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          role="alert"
                          className="flex items-center gap-2.5 rounded-2xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                        >
                          <XCircle className="h-4 w-4 flex-shrink-0" />
                          {errorMsg}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="mt-2 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-ink/90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-ink-muted">
                      Delivered straight to my inbox via Resend. No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
