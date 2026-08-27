import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import servicios from "@/lib/servicios"
import condiciones from "@/lib/condiciones"

/**
 * Fecha de la última revisión del contenido. Se actualiza a mano cuando los
 * textos cambian: usar `new Date()` le informaría a Google que todas las
 * páginas se modificaron en cada rastreo, y termina ignorando la señal.
 */
const ULTIMA_REVISION = new Date("2026-08-11")

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

  return routes
}
