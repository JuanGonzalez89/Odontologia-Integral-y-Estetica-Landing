import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
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
    alternates: {
      canonical: `/condiciones/${condicion.slug}`,
    },
  }
}

export default async function CondicionDetallePage(props: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await props.params
  const condicion = getCondicionBySlug(slug)

  if (!condicion) notFound()

  const relacionadas = condiciones
    .filter((c) => c.id !== condicion.id)
    .slice(0, 3)

  return (
    <main id="main-content" className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/condiciones" className="hover:text-primary hover:underline">
          Condiciones
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">{condicion.nombre}</span>
      </nav>

      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
        <condicion.icono className="h-7 w-7 text-primary" />
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {condicion.nombre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-text/80">
        {condicion.descripcionCorta}
      </p>

      {condicion.urgente && (
        <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" aria-hidden="true" />
            <p className="text-sm text-red-800">
              Esto puede ser una urgencia odontológica. Te recomendamos
              consultarnos cuanto antes.
            </p>
          </div>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            Escribinos ahora
          </a>
        </div>
      )}

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

      <div className="mt-10 border-t border-zinc-200 pt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text/50">
          Otras condiciones
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {relacionadas.map((c) => (
            <Link
              key={c.id}
              href={`/condiciones/${c.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-text/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <c.icono className="h-4 w-4 text-primary" />
              {c.nombre}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
