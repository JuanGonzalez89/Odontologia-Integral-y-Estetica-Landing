'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Calendar, X } from 'lucide-react'
import equipo from '@/lib/equipo'

const AGENDAS: Record<number, string> = {
  1: 'https://turnito.app/c/UBwFVhBwUgfhCm',
  2: 'https://turnito.app/c/gZEdjnzhTVr7xA',
}

export default function AgendaTurno() {
  const [seleccionado, setSeleccionado] = useState<number | null>(null)

  const doctorSeleccionado = seleccionado
    ? equipo.find((e) => e.id === seleccionado)
    : null

  useEffect(() => {
    if (seleccionado === null) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [seleccionado])

  useEffect(() => {
    if (seleccionado === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSeleccionado(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [seleccionado])

  return (
    <section className="bg-white py-16" id="agenda">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">
            Agendá tu turno
          </h2>
          <p className="mt-2 text-text/70">
            Elegí tu profesional y reservá en línea en pocos pasos.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
          {equipo.map((integrante) => {
            const activo = seleccionado === integrante.id
            return (
              <button
                key={integrante.id}
                onClick={() => setSeleccionado(activo ? null : integrante.id)}
                className={`flex items-center gap-4 rounded-xl border-2 p-5 text-left shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                  activo
                    ? 'border-primary bg-primary/5'
                    : 'border-zinc-200 bg-white hover:border-primary/40 hover:shadow-md'
                }`}
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-zinc-100">
                  <Image
                    src={integrante.foto}
                    alt={integrante.nombre}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-primary">
                    {integrante.nombre}
                  </p>
                  <p className="mt-0.5 text-xs text-text/50">
                    {integrante.matricula}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-secondary">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    Ver agenda
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {seleccionado !== null && doctorSeleccionado && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/50 p-0 lg:items-center lg:justify-center lg:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSeleccionado(null)
          }}
        >
          <div className="flex h-full w-full flex-col bg-white shadow-xl lg:h-[92vh] lg:max-w-6xl lg:rounded-xl">
            <div className="flex flex-shrink-0 items-center justify-between border-b border-zinc-100 bg-surface px-5 py-3 lg:rounded-t-xl">
              <p className="text-sm font-medium text-primary">
                Agenda de {doctorSeleccionado.nombre}
              </p>
              <button
                onClick={() => setSeleccionado(null)}
                className="rounded-md p-1.5 text-text/50 transition-colors hover:bg-black/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label="Cerrar agenda"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* turnito rompe el calendario si su layout renderiza angosto en
                escritorio: a 672px la grilla de días queda vacía, a 768px
                funciona. En pantallas táctiles angostas sí funciona, así que
                el min-width solo aplica desde sm hacia arriba. */}
            <div className="flex-1 overflow-auto">
              <iframe
                src={AGENDAS[seleccionado]}
                title={`Agenda de turnos — ${doctorSeleccionado.nombre}`}
                className="h-full w-full sm:min-w-[768px]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
