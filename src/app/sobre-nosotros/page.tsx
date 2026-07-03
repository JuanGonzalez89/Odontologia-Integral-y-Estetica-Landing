import type { Metadata } from "next"
import Image from "next/image"
import equipo from "@/lib/equipo"

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conocé al equipo de odontólogos del consultorio en Santiago del Estero: Gustavo Germán González y María Verónica González, con más de 20 años de experiencia.",
}

export default function SobreNosotrosPage() {
  return (
    <main className="mx-auto max-w-5xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Sobre nosotros
      </h1>
      <p className="mt-2 text-text/70">
        Conocé a los profesionales que cuidan tu sonrisa.
      </p>

      <div className="mt-10 space-y-12">
        {equipo.map((integrante) => (
          <section
            key={integrante.id}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-start"
          >
            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src={integrante.foto}
                alt={
                  integrante.id === 1
                    ? "Gustavo Germán González, odontólogo en Santiago del Estero"
                    : "María Verónica González, odontóloga en Santiago del Estero"
                }
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary">
                {integrante.nombre}
              </h2>

              {integrante.matricula && (
                <p className="mt-1 text-sm text-text/50">
                  Matrícula {integrante.matricula}
                </p>
              )}

              <p className="mt-2 text-sm font-medium text-primary">
                {integrante.experiencia} años de experiencia
              </p>

              <p className="mt-1 text-sm leading-relaxed text-text/70">
                {integrante.especialidad}
              </p>

              <p className="mt-4 leading-relaxed text-text/80">
                {integrante.bio}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
