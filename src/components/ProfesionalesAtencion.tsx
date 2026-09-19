import Image from "next/image"
import Link from "next/link"
import type { Integrante } from "@/lib/equipo"

/**
 * Tarjetas de los profesionales que atienden, con su matrícula visible: es lo
 * que respalda el contenido de salud ante lectores y buscadores.
 */
export default function ProfesionalesAtencion({
  profesionales,
  titulo = "Atendido por",
  className = "",
}: {
  profesionales: Integrante[]
  titulo?: string
  className?: string
}) {
  if (profesionales.length === 0) return null

  return (
    <div className={className}>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-text/50">
        {titulo}
      </h2>
      <div className="mt-3 flex flex-wrap gap-4">
        {profesionales.map((p) => (
          <Link
            key={p.id}
            href={`/sobre-nosotros#integrante-${p.id}`}
            className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white py-2 pl-2 pr-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-zinc-100">
              <Image
                src={p.foto}
                alt={p.nombre}
                width={40}
                height={40}
                className="h-full w-full object-cover"
                style={{ objectPosition: p.fotoPosicion ?? "center" }}
              />
            </div>
            <span className="flex flex-col">
              <span className="text-sm font-medium text-primary group-hover:text-primary-light">
                {p.nombre}
              </span>
              {p.matricula && (
                <span className="text-xs text-text/60">
                  Matrícula {p.matricula}
                </span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
