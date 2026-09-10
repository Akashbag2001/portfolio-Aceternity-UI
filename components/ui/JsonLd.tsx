type Schema = Record<string, unknown>;

/** Structured data for search engines. `<` is escaped so content can't close the tag. */
export function JsonLd({ data }: { data: Schema | Schema[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
