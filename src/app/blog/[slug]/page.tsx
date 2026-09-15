import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import articulos, { getArticuloBySlug } from "@/lib/articulos"
import { whatsappUrl } from "@/lib/contacto"
import { SITE_URL } from "@/lib/constants"
import { breadcrumbJsonLd, clinicaRef } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"

export async function generateStaticParams() { return articulos.map(({ slug }) => ({ slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const articulo = getArticuloBySlug((await params).slug)
  if (!articulo) return {}
  return { title: articulo.titulo, description: articulo.descripcion, alternates: { canonical: `/blog/${articulo.slug}` } }
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const articulo = getArticuloBySlug((await params).slug)
  if (!articulo) notFound()
  const url = `${SITE_URL}/blog/${articulo.slug}`
  const articleSchema = { "@context": "https://schema.org", "@type": "BlogPosting", headline: articulo.titulo, description: articulo.descripcion, datePublished: articulo.fechaPublicacion, dateModified: articulo.fechaModificacion, inLanguage: "es-AR", mainEntityOfPage: { "@type": "WebPage", "@id": url }, author: clinicaRef, publisher: clinicaRef, about: { "@type": "Thing", name: articulo.categoria } }
  return <main id="main-content" className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
    <JsonLd data={articleSchema} />
    <JsonLd data={breadcrumbJsonLd([{ nombre: "Inicio", url: "/" }, { nombre: "Blog", url: "/blog" }, { nombre: articulo.titulo }])} />
    <nav aria-label="Breadcrumb" className="text-sm text-text/50"><Link href="/" className="hover:text-primary hover:underline">Inicio</Link><span className="mx-2">/</span><Link href="/blog" className="hover:text-primary hover:underline">Blog</Link><span className="mx-2">/</span><span className="text-text/70">{articulo.categoria}</span></nav>
    <article className="mt-7"><p className="text-sm font-semibold text-primary">{articulo.categoria}</p><h1 className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{articulo.titulo}</h1><p className="mt-5 text-lg leading-relaxed text-text/80">{articulo.introduccion}</p><div className="mt-8 space-y-8">{articulo.secciones.map((seccion) => <section key={seccion.titulo}><h2 className="text-2xl font-bold text-primary">{seccion.titulo}</h2><div className="mt-3 space-y-4 leading-relaxed text-text/80">{seccion.parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}</div></section>)}</div></article>
    <aside className="mt-10 rounded-xl bg-surface p-6 text-center"><h2 className="text-xl font-bold text-primary">¿Querés pedir un turno?</h2><p className="mt-2 text-text/70">Conocé nuestro servicio de <Link href={`/servicios/${articulo.servicioRelacionado.slug}`} className="font-semibold text-primary hover:underline">{articulo.servicioRelacionado.nombre}</Link> o escribinos para consultar.</p><Link href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm hover:bg-secondary-light">Consultanos por WhatsApp</Link></aside>
  </main>
}
