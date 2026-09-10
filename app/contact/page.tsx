import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Akash Bag about a full-time role or a freelance project. Every message gets a reply within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        lines={[{ text: "Say" }, { text: "hello.", outline: true }]}
        intro="Tell me about the role or the project. I read every message myself and reply within 24 hours."
      />

      <section className="container-x grid gap-16 pb-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:pb-32">
        <Reveal className="space-y-12">
          <div>
            <h2 className="eyebrow">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 block break-all font-display text-2xl font-extrabold tracking-[-0.02em] transition-colors hover:text-flame sm:text-3xl"
            >
              {site.email}
            </a>
          </div>
          <div>
            <h2 className="eyebrow">Based in</h2>
            <p className="mt-4 text-lg">{site.location}</p>
          </div>
          <div>
            <h2 className="eyebrow">Elsewhere</h2>
            <ul className="mt-4 space-y-2">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-flame"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-ink/5 p-6">
            <h2 className="font-semibold">Helpful to include</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/70">
              <li>
                <strong className="text-ink">Hiring:</strong> the role, the team, the stack, and
                whether it&apos;s remote, hybrid or on-site.
              </li>
              <li>
                <strong className="text-ink">Projects:</strong> what you&apos;re building, who it&apos;s
                for, and your timeline.
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
