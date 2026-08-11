import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google"
import "./globals.css"
import { SITE_URL } from "@/lib/constants"
import { CONTACTO } from "@/lib/contacto"
import equipo from "@/lib/equipo"
import servicios from "@/lib/servicios"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppBubble from "@/components/WhatsAppBubble"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Odontología Integral y Estética",
    template: "%s | Odontología Integral y Estética",
  },
  description:
    "Servicios odontológicos profesionales en Santiago del Estero. Odontopediatría, prótesis, blanqueamiento, cirugía, endodoncia, limpieza, radiografías, reconstrucción dental y odontología general.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Odontología Integral y Estética",
  },
  twitter: {
    card: "summary",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Odontología Integral y Estética",
  description: "Servicios odontológicos profesionales en Santiago del Estero.",
  url: SITE_URL,
  telephone: CONTACTO.telefonoSchema,
  email: CONTACTO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avellaneda 283, 2do Piso",
    addressLocality: "Santiago del Estero",
    addressRegion: "Santiago del Estero",
    addressCountry: "AR",
  },
  areaServed: {
    "@type": "City",
    name: "Santiago del Estero",
  },
  availableService: servicios.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.nombre,
    description: s.descripcionCorta,
  })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "17:00",
      closes: "20:30",
    },
  ],
  priceRange: "$$",
  employee: equipo.map((p) => ({
    "@type": "Person",
    name: p.nombre,
    jobTitle: "Odontólogo/a",
    email: p.email,
    ...(p.matricula && { identifier: p.matricula }),
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${jakarta.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="sr-only-link">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppBubble />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
