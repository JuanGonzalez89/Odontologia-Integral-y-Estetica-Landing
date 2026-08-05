import type { Metadata } from "next"
import { MapPin, Clock, Mail, Phone, MessageCircle } from "lucide-react"
import { CONTACTO, whatsappUrl } from "@/lib/contacto"
import equipo from "@/lib/equipo"
import ContactForm from "./ContactForm"
import AgendaTurno from "@/components/AgendaTurno"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comunicate con Odontología Integral y Estética: dirección, teléfono, email y formulario de contacto.",
  alternates: {
    canonical: "/contacto",
  },
}

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Contacto
      </h1>
      <p className="mt-2 max-w-2xl text-text/70">
        Elegí la forma que te resulte más cómoda para comunicarte con
        nosotros. Te respondemos a la brevedad.
      </p>

      <AgendaTurno />

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border-2 border-secondary/30 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                <MessageCircle className="h-6 w-6 text-[#1da851]" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-semibold text-primary">Escribinos por WhatsApp</h2>
                <p className="text-sm text-text/70">
                  La forma más rápida de conseguir un turno.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {equipo.map((integrante) => (
                <a
                  key={integrante.id}
                  href={whatsappUrl(integrante.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center justify-center rounded-lg bg-secondary px-5 py-2.5 text-center text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  {integrante.nombre}
                  <span className="text-xs font-normal opacity-80">{integrante.telefono}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex gap-4">
              <MapPin className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-primary">Dirección</h3>
                <p className="mt-0.5 text-sm text-text/70">{CONTACTO.direccion}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">Teléfono</h3>
                {equipo.map((integrante) => (
                  <div key={integrante.id}>
                    <p className="text-xs text-text/50">{integrante.nombre}</p>
                    <a
                      href={`tel:+${integrante.whatsapp}`}
                      className="block text-sm text-text/70 underline-offset-2 hover:text-primary hover:underline"
                    >
                      {integrante.telefono}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold text-primary">Horarios</h3>
                <p className="mt-0.5 text-sm text-text/70">{CONTACTO.horarios.dias}</p>
                <p className="text-sm text-text/70">
                  {CONTACTO.horarios.manana} y {CONTACTO.horarios.tarde}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-primary">Email</h3>
                {equipo.map((integrante) => (
                  <div key={integrante.id}>
                    <p className="text-xs text-text/50">{integrante.nombre}</p>
                    <a
                      href={`mailto:${integrante.email}`}
                      className="block text-sm text-text/70 underline-offset-2 hover:text-primary hover:underline"
                    >
                      {integrante.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm">
            <iframe
              title="Ubicación del consultorio en Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${CONTACTO.direccion}, Argentina`
              )}&output=embed`}
              className="h-64 w-full"
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
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
