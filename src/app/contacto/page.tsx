import type { Metadata } from "next"
import { CONTACTO, whatsappUrl } from "@/lib/contacto"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Comunicate con el consultorio.",
}

export default function ContactoPage() {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Contacto
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-primary">Dirección</h2>
            <p className="mt-1 text-text/70">{CONTACTO.direccion}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Teléfono</h2>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-primary underline-offset-2 hover:text-primary-light hover:underline"
            >
              {CONTACTO.telefono}
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Email</h2>
            <a
              href={`mailto:${CONTACTO.email}`}
              className="mt-1 block text-primary underline-offset-2 hover:text-primary-light hover:underline"
            >
              {CONTACTO.email}
            </a>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-primary">Horarios</h2>
            <p className="mt-1 text-text/70">{CONTACTO.horarios.dias}</p>
            <p className="text-text/70">{CONTACTO.horarios.manana}</p>
            <p className="text-text/70">{CONTACTO.horarios.tarde}</p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
