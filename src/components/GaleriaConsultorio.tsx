"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import fotosConsultorio from "@/lib/consultorio"

export default function GaleriaConsultorio() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector<HTMLElement>("[data-card]")
    const amount = (card?.offsetWidth ?? scroller.clientWidth) + 16
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Conocé nuestro consultorio
            </h2>
            <p className="mt-2 max-w-2xl text-text/70">
              Un espacio pensado para tu comodidad y tranquilidad.
            </p>
          </div>

          <div className="hidden flex-shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Foto anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Foto siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-proximity gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {fotosConsultorio.map((foto) => (
            <div
              key={foto.id}
              data-card
              className="relative aspect-[4/3] w-[80%] flex-shrink-0 snap-start overflow-hidden rounded-xl shadow-sm ring-1 ring-primary/10 sm:w-[45%] lg:w-[30%]"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 80vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
