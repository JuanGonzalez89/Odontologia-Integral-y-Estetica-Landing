import type { Metadata } from "next"
import Link from "next/link"
import { AlertTriangle } from "lucide-react"
import condiciones from "@/lib/condiciones"

export const metadata: Metadata = {
  title: "Condiciones y enfermedades bucales",
  description:
    "Información sobre las condiciones y enfermedades bucales más comunes: dolor de muela, caries, absceso, gingivitis, bruxismo y más.",
  alternates: {
    canonical: "/condiciones",
  },
}

export default function CondicionesPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">Condiciones</span>
      </nav>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Condiciones y enfermedades bucales
      </h1>
      <p className="mt-2 text-text/70">
        Información útil sobre las condiciones más comunes. Siempre recordá que
        esto no reemplaza una consulta profesional.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {condiciones.map((c) => (
          <Link
            key={c.id}
            href={`/condiciones/${c.slug}`}
            className="group relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            {c.urgente && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-0.5 text-xs font-semibold text-white">
                <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                Consultá cuanto antes
              </span>
            )}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <c.icono className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-primary group-hover:text-primary-light">
              {c.nombre}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              {c.descripcionCorta}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
