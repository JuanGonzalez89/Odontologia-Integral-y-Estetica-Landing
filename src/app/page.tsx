import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, Award } from "lucide-react"
import servicios from "@/lib/servicios"
import condiciones from "@/lib/condiciones"
import equipo from "@/lib/equipo"
import { whatsappUrl } from "@/lib/contacto"
import preguntas from "@/lib/faq"
import AgendaTurno from "@/components/AgendaTurno"
import Testimonios from "@/components/Testimonios"
import HeroVideo from "@/components/HeroVideo"
import CasosAntesDespues from "@/components/CasosAntesDespues"
import GaleriaConsultorio from "@/components/GaleriaConsultorio"
import ObrasSociales from "@/components/ObrasSociales"
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes"

export const metadata: Metadata = {
  description:
    "Consultorio odontológico en Santiago del Estero con más de 20 años de experiencia. Odontopediatría, prótesis, blanqueamiento y más. Atendemos obras sociales.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden bg-primary text-white">
        <Image
          src="/images/hero-video-poster.jpg"
          alt="Paciente sonriendo tras un tratamiento en Odontología Integral y Estética, Santiago del Estero"
          fill
          className="object-cover object-[50%_30%]"
          priority
        />
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/65 to-primary/30 sm:via-primary/55 sm:to-primary/15" />
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

      <CasosAntesDespues />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                ¿Tenés dolor o alguna molestia?
              </h2>
              <p className="mt-2 max-w-2xl text-text/70">
                Informate sobre las consultas más frecuentes y cuándo conviene
                que nos veas.
              </p>
            </div>

            <p className="flex items-start gap-3 rounded-xl bg-surface p-4 text-sm leading-relaxed text-text/80 lg:max-w-sm lg:flex-shrink-0">
              <AlertTriangle
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                Si tenés dolor intenso, hinchazón o fiebre,{" "}
                <Link
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline underline-offset-2 hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  escribinos por WhatsApp
                </Link>
                : puede ser una urgencia.
              </span>
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {condiciones.map((c) => (
              <Link
                key={c.id}
                href={`/condiciones/${c.slug}`}
                className="group relative rounded-xl border border-zinc-200 bg-surface p-4 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 sm:p-5"
              >
                {c.urgente && (
                  <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-xl bg-red-600 px-2.5 py-1 text-xs font-semibold text-white">
                    Urgente
                  </span>
                )}
                <c.icono className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-primary group-hover:text-primary-light">
                  {c.nombre}
                </h3>
                {/*
                  En móvil la tarjeta mide ~160px: ahí una descripción recortada
                  no aporta nada, y ocho tarjetas con texto hacían que la
                  sección ocupara más de dos pantallas de scroll.
                */}
                <p className="mt-1 text-sm leading-relaxed text-text/70 line-clamp-3 max-sm:hidden">
                  {c.descripcionCorta}
                </p>
              </Link>
            ))}
          </div>
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
                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-primary/10"
              >
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-secondary/50">
                  <Image
                    src={integrante.foto}
                    alt={integrante.nombre}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: integrante.fotoPosicion ?? "center" }}
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

      <GaleriaConsultorio />

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ObrasSociales />
        </div>
      </section>

      <AgendaTurno />

      <Testimonios />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <PreguntasFrecuentes
            preguntas={preguntas}
            subtitulo="Las consultas que más nos hacen antes del primer turno."
          />
        </div>
      </section>

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
