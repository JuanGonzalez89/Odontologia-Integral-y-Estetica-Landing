import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, Award } from "lucide-react"
import servicios from "@/lib/servicios"
import equipo from "@/lib/equipo"
import { whatsappUrl } from "@/lib/contacto"
import AgendaTurno from "@/components/AgendaTurno"

export const metadata: Metadata = {
  description:
    "Cuidamos tu sonrisa con atención profesional, calidez y compromiso. Odontopediatría, prótesis, blanqueamiento, reconstrucción dental y más en Santiago del Estero.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src="/images/consultorio-hero.jpg"
          alt="Consultorio de Odontología Integral y Estética en Santiago del Estero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-4 py-24 text-left sm:px-6 lg:px-8 lg:py-32">
          <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-light ring-1 ring-white/20">
            Santiago del Estero
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Odontología Integral y Estética
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/90">
            Cuidamos tu sonrisa con atención profesional, calidez y compromiso.
            Más de 20 años de experiencia en Santiago del Estero.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Pedí tu turno ahora
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Nuestros servicios
          </h2>
          <p className="mt-2 text-text/70">
            Conocé todos los tratamientos que ofrecemos.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {servicios
              .filter((s) => s.destacado)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}`}
                  className="group relative rounded-xl border-2 border-secondary/30 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <span className="absolute -top-3 left-6 rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-white">
                    Más solicitado
                  </span>
                  <s.icono className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 font-semibold text-primary group-hover:text-primary-light">
                    {s.nombre}
                  </h3>
                  <p className="mt-1 text-sm text-text/70 line-clamp-3">
                    {s.descripcionCorta}
                  </p>
                </Link>
              ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {servicios
              .filter((s) => !s.destacado)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-text/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <s.icono className="h-4 w-4 text-primary" />
                  {s.nombre}
                </Link>
              ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/servicios"
              className="text-sm font-medium text-primary hover:text-primary-light"
            >
              Ver todos los servicios &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            ¿Tenés dolor o algún síntoma?
          </h2>
          <p className="mt-2 text-text/70">
            Informate sobre las condiciones más comunes y cuándo consultar.
          </p>
          <div className="mx-auto mt-4 flex max-w-md items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left text-sm text-red-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <p>
              Si tenés dolor intenso, hinchazón o fiebre, no esperes: puede
              ser una urgencia.
            </p>
          </div>
          <Link
            href="/condiciones"
            className="mt-6 inline-flex items-center rounded-lg border border-secondary px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Ver condiciones y enfermedades
          </Link>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Sobre nosotros
          </h2>
          <p className="mt-2 max-w-2xl text-text/70">
            Un equipo de odontólogos con más de 20 años de experiencia
            cuidando la salud bucal de nuestros pacientes en Santiago del
            Estero.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {equipo.map((integrante) => (
              <div
                key={integrante.id}
                className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-zinc-100">
                  <Image
                    src={integrante.foto}
                    alt={integrante.nombre}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">
                    {integrante.nombre}
                  </h3>
                  {integrante.matricula && (
                    <p className="text-xs text-text/50">
                      Matrícula {integrante.matricula}
                    </p>
                  )}
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-primary">
                    <Award className="h-3.5 w-3.5" aria-hidden="true" />
                    {integrante.experiencia} años de experiencia
                  </p>
                  <p className="mt-1 text-sm text-text/70">
                    {integrante.especialidad}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/sobre-nosotros"
            className="mt-6 inline-block text-sm font-medium text-primary hover:text-primary-light"
          >
            Conocé más sobre nosotros &rarr;
          </Link>
        </div>
      </section>

      <AgendaTurno />

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Agendá tu consulta
          </h2>
          <p className="mt-2 text-white/90">
            Contactanos y te responderemos a la brevedad.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Escribinos por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Dejanos tu mensaje
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
