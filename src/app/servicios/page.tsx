import type { Metadata } from "next"
import Link from "next/link"
import servicios from "@/lib/servicios"

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conocé todos los tratamientos que ofrecemos: odontopediatría, prótesis, blanqueamiento, cirugía odontológica, endodoncia, limpieza dental, radiografías y odontología general.",
}

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Servicios
      </h1>
      <p className="mt-2 text-text/70">
        Conocé todos los tratamientos que ofrecemos para cuidar tu sonrisa.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {servicios.map((s) => (
          <Link
            key={s.id}
            href={`/servicios/${s.slug}`}
            className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            <s.icono className="h-7 w-7 text-primary" />
            <h2 className="mt-4 text-xl font-semibold text-primary group-hover:text-primary-light">
              {s.nombre}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              {s.descripcionCorta}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-text/70">
          ¿Tenés dolor o algún síntoma?{" "}
          <Link
            href="/condiciones"
            className="font-medium text-primary hover:text-primary-light"
          >
            Consultá acá
          </Link>
        </p>
      </div>
    </main>
  )
}
