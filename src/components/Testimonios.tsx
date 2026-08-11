import { Quote } from "lucide-react"
import testimonios from "@/lib/testimonios"

const COLORES_AVATAR = ["bg-primary", "bg-secondary", "bg-primary-light"]

function iniciales(nombre: string) {
  const partes = nombre.trim().split(/\s+/)
  const primera = partes[0]?.[0] ?? ""
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ""
  return (primera + ultima).toUpperCase()
}

export default function Testimonios() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Lo que dicen nuestros pacientes
        </h2>
        <p className="mt-2 text-text/70">
          Testimonios de pacientes atendidos en nuestro consultorio.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonios.map((testimonio, i) => (
            <figure
              key={testimonio.id}
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-primary/10"
            >
              <Quote className="h-6 w-6 text-secondary" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text/80">
                {testimonio.texto}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${COLORES_AVATAR[i % COLORES_AVATAR.length]}`}
                  aria-hidden="true"
                >
                  {iniciales(testimonio.autor)}
                </span>
                <span className="text-sm font-semibold text-primary">
                  {testimonio.autor}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
