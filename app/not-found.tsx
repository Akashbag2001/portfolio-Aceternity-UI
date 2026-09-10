import { PillLink } from "@/components/ui/PillLink";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-start justify-center pb-24 pt-36">
      <p className="eyebrow">Error 404</p>
      <h1 className="page-title mt-6">
        Page not <span className="text-outline block">found.</span>
      </h1>
      <p className="mt-8 max-w-md text-lg text-ink/70">
        This page doesn&apos;t exist, or it has moved. Here&apos;s the way back.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <PillLink href="/">Back home</PillLink>
        <PillLink href="/projects" variant="outline">
          See my work
        </PillLink>
      </div>
    </section>
  );
}
