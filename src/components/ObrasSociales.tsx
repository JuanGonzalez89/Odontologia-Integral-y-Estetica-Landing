import Image from "next/image"
import obrasSociales from "@/lib/obras-sociales"

interface ObrasSocialesProps {
  className?: string
}

export default function ObrasSociales({ className = "" }: ObrasSocialesProps) {
  // Se duplica la lista para lograr un desplazamiento continuo sin cortes
  // (el desplazamiento del 50% cae justo al final de un ciclo completo).
  const pista = [...obrasSociales, ...obrasSociales]

  // Los logos son imágenes: sin esta línea, los nombres de las obras sociales
  // no existen como texto para los buscadores ni para los asistentes de IA.
  const listado = new Intl.ListFormat("es-AR", {
    style: "long",
    type: "conjunction",
  }).format(obrasSociales.map((o) => o.nombre))

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-white sm:text-3xl">
        Trabajamos con tu obra social
      </h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-white/90">
        Atendemos {listado}. Si no ves la tuya, consultanos igual por WhatsApp.
      </p>

      <div
        className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        role="region"
        aria-label="Obras sociales que aceptamos"
      >
        <div className="flex w-max items-center gap-4 px-4 animate-[marquee-right_20s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:gap-5 sm:px-6 sm:animate-[marquee-right_32s_linear_infinite] lg:px-8 lg:animate-[marquee-right_45s_linear_infinite]">
          {pista.map((obra, i) => (
            <div
              key={`${obra.id}-${i}`}
              aria-hidden={i >= obrasSociales.length}
              className="relative h-14 w-32 flex-shrink-0 sm:h-16 sm:w-36"
            >
              <Image
                src={obra.logo}
                alt={`Logo de ${obra.nombre}`}
                fill
                sizes="150px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
