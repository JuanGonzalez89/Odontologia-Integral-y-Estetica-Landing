import { Quote, Star } from "lucide-react"
import testimonios from "@/lib/testimonios"

const COLORES_AVATAR = ["bg-primary", "bg-secondary", "bg-primary-light"]

function iniciales(nombre: string) {
  const partes = nombre.trim().split(/\s+/)
  const primera = partes[0]?.[0] ?? ""
  const ultima = partes.length > 1 ? partes[partes.length - 1][0] : ""
  return (primera + ultima).toUpperCase()
}

export default function Testimonios() {
  // Se duplica la lista para lograr un desplazamiento continuo sin cortes.
  const pista = [...testimonios, ...testimonios]

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Lo que dicen nuestros pacientes
        </h2>
        <p className="mt-2 max-w-2xl text-text/70">
          Testimonios de pacientes atendidos en nuestro consultorio.
        </p>
      </div>

      <div
        className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        role="region"
        aria-label="Testimonios de pacientes"
      >
        <div className="flex w-max gap-5 px-4 animate-[marquee-right_28s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-6 sm:px-6 sm:animate-[marquee-right_50s_linear_infinite] lg:px-8 lg:animate-[marquee-right_70s_linear_infinite]">
          {pista.map((testimonio, i) => (
            <figure
              key={`${testimonio.id}-${i}`}
              aria-hidden={i >= testimonios.length}
              className="relative flex w-64 flex-shrink-0 flex-col overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-primary/10 transition-shadow duration-300 hover:shadow-md sm:w-80"
            >
              <Quote
                className="absolute -top-3 -right-3 h-20 w-20 text-secondary/10"
                aria-hidden="true"
              />
              <div
                className="relative flex items-center gap-0.5"
                role="img"
                aria-label={`${testimonio.calificacion} de 5 estrellas`}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className={`h-4 w-4 ${
                      starIndex < testimonio.calificacion
                        ? "fill-secondary text-secondary"
                        : "fill-zinc-200 text-zinc-200"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-text/80">
                {testimonio.texto}
              </blockquote>
              <figcaption className="relative mt-5 flex items-center gap-3 border-t border-zinc-100 pt-4">
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
