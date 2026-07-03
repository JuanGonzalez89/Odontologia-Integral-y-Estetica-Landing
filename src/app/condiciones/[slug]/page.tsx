import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import condiciones, { getCondicionBySlug } from "@/lib/condiciones"
import { whatsappUrl } from "@/lib/contacto"

export async function generateStaticParams() {
  return condiciones.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await props.params
  const condicion = getCondicionBySlug(slug)

  if (!condicion) return {}

  return {
    title: condicion.nombre,
    description: condicion.descripcionCorta,
  }
}

export default async function CondicionDetallePage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const condicion = getCondicionBySlug(slug)

  if (!condicion) notFound()

  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/condiciones"
        className="text-sm font-medium text-primary hover:text-primary-light"
      >
        &larr; Volver a condiciones
      </Link>

      <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {condicion.nombre}
      </h1>

      <div className="mt-6 space-y-4 leading-relaxed text-text/80">
        {condicion.descripcionLarga.split("\n\n").map((parrafo, i) => (
          <p key={i}>{parrafo}</p>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-surface p-6 text-center">
        <p className="text-text/70">
          ¿Tenés dudas o querés consultar por un turno?
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
    </main>
  )
}
