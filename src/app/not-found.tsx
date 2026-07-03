import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Página no encontrada",
}

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl text-primary/20">404</span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-2 text-text/70">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
