type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renderiza dados estruturados (JSON-LD). O "<" é escapado para não fechar o script. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
