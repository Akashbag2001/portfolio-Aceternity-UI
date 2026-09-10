import { Reveal } from "@/components/motion/Reveal";
import { RevealLines } from "@/components/motion/RevealLines";

/** Opening block for inner pages: eyebrow, oversized masked h1, optional intro. */
export function PageHeader({
  eyebrow,
  lines,
  intro,
  children,
}: {
  eyebrow: string;
  lines: { text: string; outline?: boolean }[];
  intro?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="container-x">
        <Reveal y={12}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <RevealLines as="h1" onMount delay={0.4} lines={lines} className="page-title mt-6" />
        {intro && (
          <Reveal delay={0.55} className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-ink/70 sm:text-xl">{intro}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
