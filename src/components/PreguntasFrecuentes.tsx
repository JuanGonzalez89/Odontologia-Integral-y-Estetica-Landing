import { ChevronDown } from "lucide-react"
import preguntas from "@/lib/faq"
import JsonLd from "./JsonLd"

/**
 * Se usa <details> en vez de un acordeón con JavaScript: el texto de las
 * respuestas queda en el HTML aunque estén plegadas, que es lo que necesitan
 * los buscadores y los asistentes de IA para leerlas.
 */
export default function PreguntasFrecuentes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: p.respuesta,
      },
    })),
  }

  return (
    <section className="bg-white py-16">
      <JsonLd data={jsonLd} />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-2 text-text/70">
          Las consultas que más nos hacen antes del primer turno.
        </p>

        <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
          {preguntas.map((p) => (
            <details key={p.id} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded font-semibold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
                {p.pregunta}
                <ChevronDown
                  className="faq-chevron h-5 w-5 flex-shrink-0 text-primary transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-text/80">{p.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
