import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"
import servicios from "@/lib/servicios"
import condiciones from "@/lib/condiciones"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/servicios`, lastModified: new Date() },
    { url: `${SITE_URL}/sobre-nosotros`, lastModified: new Date() },
    { url: `${SITE_URL}/contacto`, lastModified: new Date() },
  ]

  for (const s of servicios) {
    routes.push({
      url: `${SITE_URL}/servicios/${s.slug}`,
      lastModified: new Date(),
    })
  }

  routes.push({ url: `${SITE_URL}/condiciones`, lastModified: new Date() })

  for (const c of condiciones) {
    routes.push({
      url: `${SITE_URL}/condiciones/${c.slug}`,
      lastModified: new Date(),
    })
  }

  return routes
}
