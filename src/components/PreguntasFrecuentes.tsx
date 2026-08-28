import { ChevronDown } from "lucide-react"
import type { Pregunta } from "@/lib/faq"
import JsonLd from "./JsonLd"

interface PreguntasFrecuentesProps {
  preguntas: Pregunta[]
  titulo?: string
  subtitulo?: string
  className?: string
}

/**
 * Lista de preguntas frecuentes con su marcado FAQPage.
 *
 * Se usa <details> en vez de un acordeón con JavaScript: el texto de las
 * respuestas queda en el HTML aunque estén plegadas, que es lo que necesitan
 * los buscadores y los asistentes de IA para leerlas.
 *
 * No trae contenedor propio: quien lo usa decide si va dentro de una sección
 * a todo el ancho o embebido en el cuerpo de una página.
 */
export default function PreguntasFrecuentes({
  preguntas,
  titulo = "Preguntas frecuentes",
  subtitulo,
  className = "",
}: PreguntasFrecuentesProps) {
  if (preguntas.length === 0) return null

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
    <div className={className}>
      <JsonLd data={jsonLd} />

      <h2 className="text-2xl font-bold text-primary sm:text-3xl">{titulo}</h2>
      {subtitulo && <p className="mt-2 text-text/70">{subtitulo}</p>}

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
  )
}
