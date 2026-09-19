import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import servicios from "@/lib/servicios"
import condiciones from "@/lib/condiciones"
import articulos from "@/lib/articulos"
import { ULTIMA_REVISION } from "@/lib/contenido"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: ULTIMA_REVISION },
    { url: `${SITE_URL}/servicios`, lastModified: ULTIMA_REVISION },
    { url: `${SITE_URL}/sobre-nosotros`, lastModified: ULTIMA_REVISION },
    { url: `${SITE_URL}/contacto`, lastModified: ULTIMA_REVISION },
  ]

  for (const s of servicios) {
    routes.push({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified: ULTIMA_REVISION,
    })
  }

  routes.push({ url: `${SITE_URL}/condiciones`, lastModified: ULTIMA_REVISION })

  for (const c of condiciones) {
    routes.push({
      url: `${SITE_URL}/condiciones/${c.slug}`,
      lastModified: ULTIMA_REVISION,
    })
  }

  routes.push({ url: `${SITE_URL}/blog`, lastModified: ULTIMA_REVISION })
  for (const articulo of articulos) {
    routes.push({
      url: `${SITE_URL}/blog/${articulo.slug}`,
      lastModified: new Date(articulo.fechaModificacion),
    })
  }

  return routes
}
