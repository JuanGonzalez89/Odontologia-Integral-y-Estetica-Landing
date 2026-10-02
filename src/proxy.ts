import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { markdownParaRuta } from "@/lib/contenido-agentes"

const LINK_DESCUBRIMIENTO =
  '</llms.txt>; rel="describedby"; type="text/plain"; hreflang="es-AR"; title="Resumen para asistentes de IA", </sitemap.xml>; rel="index"; type="application/xml"; title="Sitemap"'
const CONTENT_SIGNAL = "ai-train=no, search=yes, ai-input=yes"

export function proxy(request: NextRequest) {
  if (
    (request.method !== "GET" && request.method !== "HEAD") ||
    !request.headers.get("accept")?.toLowerCase().includes("text/markdown")
  ) {
    return NextResponse.next()
  }

  const markdown = markdownParaRuta(request.nextUrl.pathname)
  if (!markdown) return NextResponse.next()

  return new Response(request.method === "HEAD" ? null : markdown, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Language": "es-AR",
      "Content-Signal": CONTENT_SIGNAL,
      "Content-Type": "text/markdown; charset=utf-8",
      Link: LINK_DESCUBRIMIENTO,
      Vary: "Accept",
    },
  })
}

export const config = {
  matcher: [
    "/",
    "/servicios/:path*",
    "/condiciones/:path*",
    "/blog/:path*",
    "/sobre-nosotros",
    "/contacto",
  ],
}
