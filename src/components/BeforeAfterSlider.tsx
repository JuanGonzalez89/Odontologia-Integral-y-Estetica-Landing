"use client"

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import Image from "next/image"
import { ChevronsLeftRight } from "lucide-react"

interface CasoImagen {
  src: string
  alt: string
}

interface BeforeAfterSliderProps {
  before: CasoImagen
  after: CasoImagen
  titulo?: string
  beforeLabel?: string
  afterLabel?: string
}

const STEP = 5

export default function BeforeAfterSlider({
  before,
  after,
  titulo,
  beforeLabel = "Antes",
  afterLabel = "Después",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true
    event.currentTarget.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return
    updateFromClientX(event.clientX)
  }

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      setPosition((p) => Math.max(0, p - STEP))
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      setPosition((p) => Math.min(100, p + STEP))
    } else if (event.key === "Home") {
      event.preventDefault()
      setPosition(0)
    } else if (event.key === "End") {
      event.preventDefault()
      setPosition(100)
    }
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-primary/10">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 640px) 32vw, 90vw"
          className="pointer-events-none object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(min-width: 640px) 32vw, 90vw"
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-primary/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {afterLabel}
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/80"
          style={{ left: `${position}%` }}
        >
          <div
            role="slider"
            tabIndex={0}
            aria-label={`Comparador ${beforeLabel.toLowerCase()} / ${afterLabel.toLowerCase()}${titulo ? ` — ${titulo}` : ""}`}
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-orientation="horizontal"
            onKeyDown={handleKeyDown}
            className="pointer-events-auto absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-secondary text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-light focus-visible:ring-offset-2"
          >
            <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </div>

      {titulo && (
        <p className="px-4 py-3 text-sm font-semibold text-primary">
          {titulo}
        </p>
      )}
    </div>
  )
}
