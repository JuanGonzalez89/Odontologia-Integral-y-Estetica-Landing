import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import servicios from "@/lib/servicios"
import condiciones from "@/lib/condiciones"
import articulos from "@/lib/articulos"
import { ULTIMA_REVISION } from "@/lib/contenido"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: ULTIMA_REVISION, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified: ULTIMA_REVISION, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/sobre-nosotros`, lastModified: ULTIMA_REVISION, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contacto`, lastModified: ULTIMA_REVISION, changeFrequency: "monthly", priority: 0.8 },
  ]

  for (const s of servicios) {
    routes.push({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified: ULTIMA_REVISION,
      changeFrequency: "monthly",
      priority: s.destacado ? 0.9 : 0.8,
    })
  }

  routes.push({ url: `${SITE_URL}/condiciones`, lastModified: ULTIMA_REVISION, changeFrequency: "monthly", priority: 0.8 })

  for (const c of condiciones) {
    routes.push({
      url: `${SITE_URL}/condiciones/${c.slug}`,
      lastModified: ULTIMA_REVISION,
      changeFrequency: "monthly",
      priority: c.urgente ? 0.8 : 0.7,
    })
  }

  routes.push({ url: `${SITE_URL}/blog`, lastModified: ULTIMA_REVISION, changeFrequency: "weekly", priority: 0.7 })
  for (const articulo of articulos) {
    routes.push({
      url: `${SITE_URL}/blog/${articulo.slug}`,
      lastModified: new Date(articulo.fechaModificacion),
      changeFrequency: "monthly",
      priority: 0.7,
    })
  }

  return routes
}
