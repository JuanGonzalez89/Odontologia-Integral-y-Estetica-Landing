import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SITE_URL } from "@/lib/constants"
import { CONTACTO } from "@/lib/contacto"
import equipo from "@/lib/equipo"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppBubble from "@/components/WhatsAppBubble"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Odontología Integral y Estética",
    template: "%s | Odontología Integral y Estética",
  },
  description:
    "Servicios odontológicos profesionales en Santiago del Estero. Odontopediatría, prótesis, blanqueamiento, cirugía, endodoncia, limpieza, radiografías y odontología general.",
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
    addressCountry: "AR",
  },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
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
