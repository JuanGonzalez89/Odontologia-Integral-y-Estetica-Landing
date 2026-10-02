import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const paginasPublicas = [
      "/",
      "/servicios/:path*",
      "/condiciones/:path*",
      "/blog/:path*",
      "/sobre-nosotros",
      "/contacto",
    ]
    const link =
      '</llms.txt>; rel="describedby"; type="text/plain"; hreflang="es-AR"; title="Resumen para asistentes de IA", </sitemap.xml>; rel="index"; type="application/xml"; title="Sitemap"'

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Signal",
            value: "ai-train=no, search=yes, ai-input=yes",
          },
        ],
      },
      ...paginasPublicas.map((source) => ({
        source,
        headers: [{ key: "Link", value: link }],
      })),
    ]
  },
};

export default nextConfig;
