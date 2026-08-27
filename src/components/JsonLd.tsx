interface JsonLdProps {
  data: object
}

/** Inserta un bloque de datos estructurados (schema.org) en la página. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
