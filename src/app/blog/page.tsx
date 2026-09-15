import type { Metadata } from "next"
import Link from "next/link"
import articulos from "@/lib/articulos"
import { breadcrumbJsonLd } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Consejos de salud dental en Santiago del Estero",
  description: "Información clara sobre odontopediatría, prevención y cuidado de la salud bucal, elaborada por Odontología Integral y Estética en Santiago del Estero.",
  alternates: { canonical: "/blog" },
}

export default function BlogPage() {
  return <main id="main-content" className="mx-auto max-w-5xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
    <JsonLd data={breadcrumbJsonLd([{ nombre: "Inicio", url: "/" }, { nombre: "Blog" }])} />
    <nav aria-label="Breadcrumb" className="text-sm text-text/50"><Link href="/" className="hover:text-primary hover:underline">Inicio</Link><span className="mx-2">/</span><span className="text-text/70">Blog</span></nav>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Consejos para cuidar tu salud bucal</h1>
    <p className="mt-3 max-w-3xl text-lg text-text/70">Información práctica de nuestro consultorio odontológico en Santiago del Estero. No reemplaza una consulta profesional.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-3">{articulos.map((articulo) => <article key={articulo.slug} className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"><p className="text-sm font-semibold text-primary">{articulo.categoria}</p><h2 className="mt-3 text-xl font-semibold leading-snug text-primary"><Link href={`/blog/${articulo.slug}`} className="hover:text-primary-light hover:underline">{articulo.titulo}</Link></h2><p className="mt-3 text-sm leading-relaxed text-text/70">{articulo.descripcion}</p><Link href={`/blog/${articulo.slug}`} className="mt-5 text-sm font-semibold text-primary hover:text-primary-light hover:underline">Leer artículo <span aria-hidden="true">→</span></Link></article>)}</div>
  </main>
}
