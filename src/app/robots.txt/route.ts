import { SITE_URL } from "@/lib/constants"

export const dynamic = "force-static"

const CONTENT_SIGNAL = "ai-train=no, search=yes, ai-input=yes"

export function GET() {
  const contenido = [
    "User-Agent: *",
    `Content-Signal: ${CONTENT_SIGNAL}`,
    "Allow: /",
    "Disallow: /_not-found",
    "Disallow: /cdn-cgi/",
    "",
    `Host: ${SITE_URL}`,
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n")

  return new Response(contenido, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Signal": CONTENT_SIGNAL,
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
