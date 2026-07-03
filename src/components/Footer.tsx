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
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:text-secondary-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  {CONTACTO.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACTO.email}`}
                  className="underline-offset-2 hover:text-secondary-light hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  {CONTACTO.email}
                </a>
              </li>
            </ul>
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
