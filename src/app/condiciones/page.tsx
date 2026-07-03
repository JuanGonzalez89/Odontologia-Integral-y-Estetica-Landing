import type { Metadata } from "next"
import Link from "next/link"
import condiciones from "@/lib/condiciones"

export const metadata: Metadata = {
  title: "Condiciones y enfermedades bucales",
  description:
    "Información sobre las condiciones y enfermedades bucales más comunes: dolor de muela, caries, absceso, gingivitis, bruxismo y más.",
}

export default function CondicionesPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
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
            className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            <h2 className="text-xl font-semibold text-primary group-hover:text-primary-light">
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
