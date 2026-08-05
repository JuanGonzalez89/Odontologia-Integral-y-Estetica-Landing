import Link from "next/link"
import { CONTACTO, whatsappUrl } from "@/lib/contacto"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">Odontología Integral y Estética</h3>
            <p className="mt-2 text-sm text-white/90">
              Cuidamos tu sonrisa con profesionales y la mejor atención.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>{CONTACTO.direccion}</li>
            </ul>
            <div className="mt-3 flex flex-col items-start gap-2">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-secondary-light hover:text-secondary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Escribinos por WhatsApp &rarr;
              </a>
              <Link
                href="/contacto"
                className="text-sm font-medium text-secondary-light hover:text-secondary hover:underline"
              >
                Ver teléfonos y emails &rarr;
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Horarios
            </h4>
            <ul className="space-y-2 text-sm text-white/90">
              <li>{CONTACTO.horarios.dias}</li>
              <li>{CONTACTO.horarios.manana}</li>
              <li>{CONTACTO.horarios.tarde}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/90">
          &copy; {new Date().getFullYear()} Odontología Integral y Estética. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
