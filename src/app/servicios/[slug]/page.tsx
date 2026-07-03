import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import servicios, { getServicioBySlug } from "@/lib/servicios"

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
    title: servicio.nombre,
    description: servicio.descripcionCorta,
  }
}

export default async function ServicioDetallePage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const servicio = getServicioBySlug(slug)

  if (!servicio) notFound()

  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/servicios"
        className="text-sm font-medium text-primary hover:text-primary-light"
      >
        &larr; Volver a servicios
      </Link>

      <servicio.icono className="mt-6 h-8 w-8 text-primary" />
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {servicio.nombre}
      </h1>

      <div className="mt-6 space-y-4 leading-relaxed text-text/80">
        {servicio.descripcionLarga.split("\n\n").map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>
    </main>
  )
}
