'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { AGENDAS } from '@/lib/agendas'

type Props = {
  /** Id del integrante en `equipo`, usado para elegir la agenda. */
  integranteId: number
  nombre: string
  /** Clases del botón que abre el modal, para adaptarlo a cada contexto. */
  className?: string
  children: ReactNode
}

export default function AgendaModal({
  integranteId,
  nombre,
  className,
  children,
}: Props) {
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    if (!abierto) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [abierto])

  useEffect(() => {
    if (!abierto) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [abierto])

  return (
    <>
      <button type="button" onClick={() => setAbierto(true)} className={className}>
        {children}
      </button>

      {abierto && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/50 p-0 lg:items-center lg:justify-center lg:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setAbierto(false)
          }}
        >
          <div className="flex h-full w-full flex-col bg-white shadow-xl lg:h-[92vh] lg:max-w-6xl lg:rounded-xl">
            <div className="flex flex-shrink-0 items-center justify-between border-b border-zinc-100 bg-surface px-5 py-3 lg:rounded-t-xl">
              <p className="text-sm font-medium text-primary">
                Agenda de {nombre}
              </p>
              <button
                type="button"
                onClick={() => setAbierto(false)}
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
                src={AGENDAS[integranteId]}
                title={`Agenda de turnos — ${nombre}`}
                className="h-full w-full sm:min-w-[768px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
