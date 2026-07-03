import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import servicios from "@/lib/servicios"
import { whatsappUrl } from "@/lib/contacto"

export const metadata: Metadata = {
  description:
    "Cuidamos tu sonrisa con atención profesional, calidez y compromiso. Odontopediatría, prótesis, blanqueamiento y cirugía odontológica en Santiago del Estero.",
}

export default function HomePage() {
  return (
    <main>
      <section className="relative bg-primary text-white">
        <Image
          src="/images/consultorio-hero.jpg"
          alt="Consultorio de Odontología Integral y Estética en Santiago del Estero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Odontología Integral y Estética
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Cuidamos tu sonrisa con atención profesional, calidez y compromiso.
          </p>
          <Link
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Pedí tu turno ahora
          </Link>
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicios.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.slug}`}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <s.icono className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-primary">{s.nombre}</h3>
                <p className="mt-1 text-sm text-text/70 line-clamp-3">
                  {s.descripcionCorta}
                </p>
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

      <section className="bg-surface py-12 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            ¿Tenés dolor o algún síntoma?
          </h2>
          <p className="mt-2 text-text/70">
            Informate sobre las condiciones más comunes y cuándo consultar.
          </p>
          <Link
            href="/condiciones"
            className="mt-6 inline-flex items-center rounded-lg border border-secondary px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-secondary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Ver condiciones y enfermedades
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Sobre nosotros
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-text/70">
            Somos un equipo de odontólogos con más de 20 años de experiencia
            cuidando la salud bucal de nuestros pacientes en Santiago del
            Estero. Te recibimos con calidez y profesionalismo.
          </p>
          <Link
            href="/sobre-nosotros"
            className="mt-4 inline-block text-sm font-medium text-primary hover:text-primary-light"
          >
            Conocé más sobre nosotros &rarr;
          </Link>
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
          <Link
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Escribinos por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  )
}
