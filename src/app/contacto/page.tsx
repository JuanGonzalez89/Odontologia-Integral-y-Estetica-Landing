import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Mail, Phone, MessageCircle, Calendar } from "lucide-react"
import { CONTACTO, whatsappUrl } from "@/lib/contacto"
import equipo from "@/lib/equipo"
import { breadcrumbJsonLd } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"
import ContactForm from "./ContactForm"
import AgendaModal from "@/components/AgendaModal"
import ObrasSociales from "@/components/ObrasSociales"

export const metadata: Metadata = {
  title: "Turnos y contacto en Santiago del Estero",
  description:
    "Pedí tu turno en Avellaneda 283, Santiago del Estero. Atendemos de lunes a viernes, mañana y tarde. Escribinos por WhatsApp o dejanos tu consulta.",
  alternates: {
    canonical: "/contacto",
  },
}

export default function ContactoPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { nombre: "Inicio", url: "/" },
          { nombre: "Contacto" },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">Contacto</span>
      </nav>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Contacto
      </h1>
      <p className="mt-2 max-w-2xl text-text/70">
        Cada profesional atiende su propia agenda y sus propios mensajes. Elegí
        con quién querés comunicarte.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {equipo.map((integrante) => (
          <div
            key={integrante.id}
            className="flex flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-primary/10"
          >
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-secondary/50">
                <Image
                  src={integrante.foto}
                  alt={integrante.nombre}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: integrante.fotoPosicion ?? "center" }}
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-primary">
                  {integrante.nombre}
                </h2>
                {integrante.matricula && (
                  <p className="text-xs text-text/50">
                    Matrícula {integrante.matricula}
                  </p>
                )}
                <p className="mt-1 text-sm text-text/70">Odontología general</p>
              </div>
            </div>

            <div className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5 text-sm">
              <a
                href={`tel:+${integrante.whatsapp}`}
                className="flex items-center gap-2.5 text-text/70 transition-colors hover:text-primary hover:underline"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                {integrante.telefono}
              </a>
              <a
                href={`mailto:${integrante.email}`}
                className="flex items-center gap-2.5 text-text/70 transition-colors hover:text-primary hover:underline"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <span className="truncate">{integrante.email}</span>
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl(integrante.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <AgendaModal
                integranteId={integrante.id}
                nombre={integrante.nombre}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Agendar turno
              </AgendaModal>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
          <div className="space-y-5 p-6">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-primary">Dónde estamos</h2>
                <p className="mt-0.5 text-sm text-text/70">{CONTACTO.direccion}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-primary">Horarios</h2>
                <p className="mt-0.5 text-sm text-text/70">{CONTACTO.horarios.dias}</p>
                <p className="text-sm text-text/70">
                  {CONTACTO.horarios.manana} y {CONTACTO.horarios.tarde}
                </p>
              </div>
            </div>
          </div>

          <iframe
            title="Ubicación del consultorio en Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${CONTACTO.direccion}, Argentina`
            )}&output=embed`}
            className="w-full flex-1 border-t border-zinc-200 min-h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              `${CONTACTO.direccion}, Argentina`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-t border-zinc-200 bg-white py-3 text-sm font-medium text-primary transition-colors hover:bg-surface hover:text-primary-light"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Cómo llegar
          </a>
        </div>

        <ContactForm />
      </div>

      <div className="mt-6 rounded-xl bg-primary p-6">
        <ObrasSociales />
      </div>
    </main>
  )
}
