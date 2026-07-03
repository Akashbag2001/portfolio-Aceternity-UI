"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Mail, Github, Linkedin, CheckCircle2, XCircle, Loader2, MapPin, Clock } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

type FormState = "idle" | "loading" | "success" | "error";

const contactLinks = [
  {
    label: "bagakash11@gmail.com",
    href: "mailto:bagakash11@gmail.com",
    icon: Mail,
    color: "group-hover:text-green-400",
    bg: "group-hover:bg-green-500/10",
    border: "group-hover:border-green-500/30",
  },
  {
    label: "github.com/Akashbag2001",
    href: "https://github.com/Akashbag2001",
    icon: Github,
    color: "group-hover:text-white",
    bg: "group-hover:bg-white/10",
    border: "group-hover:border-white/20",
  },
  {
    label: "linkedin.com/in/akash-bag",
    href: "https://www.linkedin.com/in/akash-bag/",
    icon: Linkedin,
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-500/10",
    border: "group-hover:border-blue-500/30",
  },
];

const inputClass =
  "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-green-500/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-green-500/30 transition-all duration-300 resize-none";

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="py-16 relative overflow-hidden" ref={sectionRef}>
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-green-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Mail className="w-3.5 h-3.5" />
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mt-3 mb-4">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              amazing
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            Have a project in mind, an opportunity, or just want to say hi? Fill out the form and I&apos;ll reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left panel — info cards */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Status card */}
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <p className="font-semibold text-green-400 text-sm">Available for work</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to full-time roles, freelance projects & interesting collaborations.
              </p>
            </div>

            {/* Meta info */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Location</p>
                  <p className="text-white font-medium">India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Clock className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Response time</p>
                  <p className="text-white font-medium">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <Mail className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Email</p>
                  <a href="mailto:bagakash11@gmail.com" className="text-green-400 font-medium hover:text-green-300 transition-colors text-xs">
                    bagakash11@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-2">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 ${link.bg} ${link.border}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <Icon className={`w-4 h-4 text-gray-500 transition-colors duration-300 ${link.color}`} />
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300 font-medium">
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right panel — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

              <div className="p-7">
                <AnimatePresence mode="wait">
                  {/* SUCCESS STATE */}
                  {state === "success" && (
                    <motion.div
                      key="success"
                      className="flex flex-col items-center justify-center py-16 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                        className="mb-6"
                      >
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-green-400" />
                          </div>
                          <div className="absolute inset-0 rounded-full bg-green-400/10 animate-ping" />
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">Message sent! 🎉</h3>
                      <p className="text-gray-400 max-w-sm mb-2">
                        Thanks for reaching out. I&apos;ve received your message and will reply within 24 hours.
                      </p>
                      <p className="text-gray-500 text-sm mb-8">
                        Check your inbox — I&apos;ve sent you a confirmation email too.
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-xl border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}

                  {/* FORM STATE */}
                  {(state === "idle" || state === "loading" || state === "error") && (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white">Send a message</h3>
                        <p className="text-gray-500 text-sm mt-1">All fields are required</p>
                      </div>

                      {/* Name + Email row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Akash Bag"
                            required
                            disabled={state === "loading"}
                            className={inputClass}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                            Email Address
                          </label>
                          <input
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

                      {/* Subject */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="e.g. Freelance opportunity / Full-time role / Just saying hi"
                          required
                          disabled={state === "loading"}
                          className={inputClass}
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell me about your project, opportunity, or anything you'd like to discuss..."
                          required
                          rows={5}
                          disabled={state === "loading"}
                          className={inputClass}
                        />
                      </div>

                      {/* Error message */}
                      <AnimatePresence>
                        {state === "error" && errorMsg && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                          >
                            <XCircle className="w-4 h-4 flex-shrink-0" />
                            <span>{errorMsg}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={state === "loading"}
                        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-sm hover:from-green-400 hover:to-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/35"
                        whileHover={{ scale: state !== "loading" ? 1.01 : 1, y: state !== "loading" ? -1 : 0 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {state === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-gray-600">
                        Your message is sent directly to my inbox via{" "}
                        <span className="text-gray-500">Resend</span>. No spam, ever.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
