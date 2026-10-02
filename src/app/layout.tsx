import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google"
import "./globals.css"
import { SITE_URL } from "@/lib/constants"
import { CONTACTO } from "@/lib/contacto"
import { CLINICA_ID, GOOGLE_MAPS_URL, profesionalId } from "@/lib/schema"
import equipo from "@/lib/equipo"
import servicios from "@/lib/servicios"
import obrasSociales from "@/lib/obras-sociales"
import { NOMBRE_CORTO, NOMBRE_SITIO, OG_IMAGE } from "@/lib/seo"

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
    default: "Odontólogos en Santiago del Estero | Consultorio dental",
    template: `%s | ${NOMBRE_CORTO}`,
  },
  description:
    "Consultorio odontológico en Santiago del Estero con más de 20 años de experiencia. Odontopediatría, prótesis, blanqueamiento y más. Atendemos obras sociales.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: NOMBRE_SITIO,
    title: "Odontólogos en Santiago del Estero | Consultorio dental",
    description:
      "Consultorio odontológico en Santiago del Estero con más de 20 años de experiencia. Atención para adultos y niños, urgencias y obras sociales.",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: NOMBRE_SITIO }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": CLINICA_ID,
      name: NOMBRE_SITIO,
      alternateName: NOMBRE_CORTO,
      description:
        "Consultorio odontológico para adultos y niños en Santiago del Estero, con atención integral, estética y de urgencias.",
      url: SITE_URL,
      telephone: CONTACTO.telefonoSchema,
      email: CONTACTO.email,
      image: `${SITE_URL}/images/consultorio-hero.jpg`,
      logo: `${SITE_URL}/apple-icon`,
      medicalSpecialty: "Dentistry",
      knowsLanguage: "es-AR",
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
      areaServed: { "@type": "City", name: "Santiago del Estero" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACTO.telefonoSchema,
        contactType: "reservas y atención al paciente",
        availableLanguage: "Spanish",
      },
      makesOffer: servicios.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: s.nombre,
          description: s.descripcionCorta,
          url: `${SITE_URL}/servicios/${s.slug}`,
        },
      })),
      additionalProperty: {
        "@type": "PropertyValue",
        name: "Obras sociales informadas",
        value: obrasSociales.map((obra) => obra.nombre).join(", "),
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
      employee: equipo.map((p) => ({
        "@type": "Person",
        "@id": profesionalId(p),
        name: p.nombre,
        jobTitle: "Odontólogo/a",
        image: `${SITE_URL}${p.foto}`,
        email: p.email,
        knowsAbout: p.especialidad,
        ...(p.matricula && {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Matrícula profesional",
            identifier: p.matricula,
          },
        }),
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio-web`,
      url: SITE_URL,
      name: NOMBRE_SITIO,
      inLanguage: "es-AR",
      publisher: { "@id": CLINICA_ID },
    },
  ],
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
