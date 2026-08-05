import Image from 'next/image'
import { Calendar } from 'lucide-react'
import equipo from '@/lib/equipo'
import AgendaModal from './AgendaModal'

/**
 * Sección de agenda para la home: ancho completo, título centrado.
 * En Contacto no se usa: allí las tarjetas por profesional ya incluyen
 * su propio botón de agenda (ver AgendaModal).
 */
export default function AgendaTurno() {
  return (
    <section className="bg-white py-16" id="agenda">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Agendá tu turno
          </h2>
          <p className="mt-2 text-text/70">
            Elegí tu profesional y reservá en línea en pocos pasos.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
          {equipo.map((integrante) => (
            <AgendaModal
              key={integrante.id}
              integranteId={integrante.id}
              nombre={integrante.nombre}
              className="flex items-center gap-4 rounded-xl border-2 border-zinc-200 bg-white p-5 text-left shadow-sm transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <span className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-zinc-100">
                <Image
                  src={integrante.foto}
                  alt={integrante.nombre}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold text-primary">
                  {integrante.nombre}
                </span>
                <span className="mt-0.5 block text-xs text-text/50">
                  {integrante.matricula}
                </span>
                <span className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-secondary">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Ver agenda
                </span>
              </span>
            </AgendaModal>
          ))}
        </div>
      </div>
    </section>
  )
}
