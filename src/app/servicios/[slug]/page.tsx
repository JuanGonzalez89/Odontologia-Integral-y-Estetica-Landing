import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import servicios, { getServicioBySlug } from "@/lib/servicios"
import equipo from "@/lib/equipo"
import { whatsappUrl } from "@/lib/contacto"
import { SITE_URL } from "@/lib/constants"
import { breadcrumbJsonLd, clinicaRef, profesionalRef } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"

export async function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const servicio = getServicioBySlug(slug)

  if (!servicio) return {}

  return {
    title: `${servicio.nombre} en Santiago del Estero`,
    description: servicio.metaDescripcion ?? servicio.descripcionCorta,
    alternates: {
      canonical: `/servicios/${servicio.slug}`,
    },
  }
}

export default async function ServicioDetallePage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const servicio = getServicioBySlug(slug)

  if (!servicio) notFound()

  const relacionados = servicios
    .filter((s) => s.id !== servicio.id)
    .sort((a, b) => {
      const compartidoA = a.profesionales.some((p) => servicio.profesionales.includes(p)) ? 1 : 0
      const compartidoB = b.profesionales.some((p) => servicio.profesionales.includes(p)) ? 1 : 0
      return compartidoB - compartidoA
    })
    .slice(0, 3)
  const profesionales = equipo.filter((p) =>
    servicio.profesionales.includes(p.id)
  )

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: servicio.nombre,
    description: servicio.descripcionCorta,
    url: `${SITE_URL}/servicios/${servicio.slug}`,
    provider: clinicaRef,
    ...(profesionales.length > 0 && {
      performer: profesionales.map(profesionalRef),
    }),
  }

  const breadcrumb = breadcrumbJsonLd([
    { nombre: "Inicio", url: "/" },
    { nombre: "Servicios", url: "/servicios" },
    { nombre: servicio.nombre },
  ])

  return (
    <main id="main-content" className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd data={jsonLd} />
      <JsonLd data={breadcrumb} />

      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/servicios" className="hover:text-primary hover:underline">
          Servicios
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">{servicio.nombre}</span>
      </nav>

      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
        <servicio.icono className="h-7 w-7 text-primary" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {servicio.nombre}
        </h1>
        {servicio.destacado && (
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
            Más solicitado
          </span>
        )}
      </div>
      <p className="mt-3 text-lg leading-relaxed text-text/80">
        {servicio.descripcionCorta}
      </p>

      <div className="mt-6 space-y-4 leading-relaxed text-text/80">
        {servicio.descripcionLarga.split("\n\n").map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>

      {profesionales.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-text/50">
            Atendido por
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
                <span className="text-sm font-medium text-primary group-hover:text-primary-light">
                  {p.nombre}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 rounded-xl bg-surface p-6 text-center">
        <p className="text-text/70">
          ¿Querés consultar por {servicio.nombre.toLowerCase()}?
        </p>
        <Link
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          Consultanos por WhatsApp
        </Link>
      </div>

      <div className="mt-10 border-t border-zinc-200 pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text/50">
          Otros servicios
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {relacionados.map((s) => (
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
      </div>
    </main>
  )
}
