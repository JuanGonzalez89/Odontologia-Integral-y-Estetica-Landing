import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google"
import "./globals.css"
import { SITE_URL } from "@/lib/constants"
import { CONTACTO } from "@/lib/contacto"
import { CLINICA_ID, GOOGLE_MAPS_URL, profesionalId } from "@/lib/schema"
import equipo from "@/lib/equipo"
import servicios from "@/lib/servicios"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppBubble from "@/components/WhatsAppBubble"
import JsonLd from "@/components/JsonLd"

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
    default: "Odontólogos en Santiago del Estero | Odontología Integral y Estética",
    template: "%s | Odontología Integral y Estética",
  },
  description:
    "Consultorio odontológico en Santiago del Estero con más de 20 años de experiencia. Odontopediatría, prótesis, blanqueamiento y más. Atendemos obras sociales.",
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
  "@id": CLINICA_ID,
  name: "Odontología Integral y Estética",
  description: "Servicios odontológicos profesionales en Santiago del Estero.",
  url: SITE_URL,
  telephone: CONTACTO.telefonoSchema,
  email: CONTACTO.email,
  image: `${SITE_URL}/images/consultorio-hero.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avellaneda 283, 2do Piso",
    addressLocality: "Santiago del Estero",
    addressRegion: "Santiago del Estero",
    postalCode: "G4202AHE",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.7872915,
    longitude: -64.2578568,
  },
  hasMap: GOOGLE_MAPS_URL,
  sameAs: [GOOGLE_MAPS_URL],
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
  employee: equipo.map((p) => ({
    "@type": "Person",
    "@id": profesionalId(p),
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
        <JsonLd data={jsonLd} />
      </body>
    </html>
  )
}
