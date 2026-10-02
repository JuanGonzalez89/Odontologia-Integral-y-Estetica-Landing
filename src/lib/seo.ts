import type { Metadata } from "next"
import { SITE_URL } from "./constants"

export const NOMBRE_SITIO = "Odontología Integral y Estética"
export const NOMBRE_CORTO = "Odontología Santiago"
export const OG_IMAGE = `${SITE_URL}/opengraph-image`

interface MetadataPagina {
  titulo: string
  descripcion: string
  ruta: string
  tipo?: "website" | "article"
  publicada?: string
  modificada?: string
}

/**
 * Metadata consistente para páginas públicas. El título se deja sin sufijo
 * cuando agregar la marca superaría los 60 caracteres habituales del snippet.
 */
export function metadataPagina({
  titulo,
  descripcion,
  ruta,
  tipo = "website",
  publicada,
  modificada,
}: MetadataPagina): Metadata {
  const conMarca = `${titulo} | ${NOMBRE_CORTO}`
  const tituloFinal = conMarca.length <= 60 ? conMarca : titulo
  const url = new URL(ruta, SITE_URL).toString()

  return {
    title: { absolute: tituloFinal },
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: tipo,
      locale: "es_AR",
      siteName: NOMBRE_SITIO,
      title: tituloFinal,
      description: descripcion,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: NOMBRE_SITIO }],
      ...(tipo === "article" && publicada
        ? { publishedTime: publicada, modifiedTime: modificada ?? publicada }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: tituloFinal,
      description: descripcion,
      images: [OG_IMAGE],
    },
  }
}

/** Título breve para artículos: conserva la búsqueda principal y evita cortes. */
export function tituloArticulo(titulo: string): string {
  if (titulo.length <= 60) return titulo
  const antesDeDosPuntos = titulo.split(":", 1)[0]?.trim()
  if (antesDeDosPuntos && antesDeDosPuntos.length >= 30) return antesDeDosPuntos

  const recortado = titulo.slice(0, 57).replace(/\s+\S*$/, "").trim()
  return `${recortado}…`
}
