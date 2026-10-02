interface JsonLdProps {
  data: object
}

/** Inserta un bloque de datos estructurados (schema.org) en la página. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        // Evita que cualquier texto futuro con "<" pueda cerrar el script.
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
