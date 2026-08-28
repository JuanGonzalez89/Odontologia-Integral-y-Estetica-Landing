import type { Metadata } from "next"
import Link from "next/link"
import servicios from "@/lib/servicios"
import { breadcrumbJsonLd } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Servicios odontológicos en Santiago del Estero",
  description:
    "Odontopediatría, prótesis, blanqueamiento, cirugía, endodoncia, limpieza dental y radiografías en Santiago del Estero. Conocé todos nuestros tratamientos.",
  alternates: {
    canonical: "/servicios",
  },
}

export default function ServiciosPage() {
  return (
    <main id="main-content" className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { nombre: "Inicio", url: "/" },
          { nombre: "Servicios" },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">Servicios</span>
      </nav>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Servicios odontológicos
      </h1>
      <p className="mt-2 text-text/70">
        Conocé todos los tratamientos que ofrecemos para cuidar tu sonrisa.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {servicios.map((s) => (
          <Link
            key={s.id}
            href={`/servicios/${s.slug}`}
            className="group relative rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            {s.destacado && (
              <span className="absolute -top-3 left-6 rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-white">
                Más solicitado
              </span>
            )}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <s.icono className="h-6 w-6 text-primary" />
            </div>
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
