"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/condiciones", label: "Condiciones" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
]

function esRutaActiva(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Header() {
  const pathname = usePathname()
  const [menuAbierto, setMenuAbierto] = useState(false)

  function cerrarMenu() {
    setMenuAbierto(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-primary shadow-sm">
      <div className="relative">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="font-heading text-base font-bold leading-tight tracking-tight text-white transition-colors hover:text-secondary-light sm:text-lg lg:text-xl"
          >
            Odontología Integral <span className="text-secondary-light">y Estética</span>
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition-colors hover:text-secondary-light lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label={menuAbierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <ul className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = esRutaActiva(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-sm px-3 py-2 transition-colors ${
                      isActive
                        ? "border-b-2 border-secondary-light text-white"
                        : "text-white/90 hover:text-secondary-light"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {menuAbierto && (
          <div
            className="fixed inset-0 z-30 bg-black/30"
            onClick={cerrarMenu}
            aria-hidden="true"
          />
        )}

        <div
          className={`${
            menuAbierto ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
          } absolute left-0 right-0 top-full z-40 bg-primary transition-all duration-200 lg:hidden`}
          role="navigation"
          aria-label="Menú de navegación mobile"
        >
          <ul className="divide-y divide-white/10">
            {NAV_LINKS.map((link) => {
              const isActive = esRutaActiva(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={cerrarMenu}
                    className={`flex min-h-[44px] items-center px-6 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/90 hover:text-secondary-light"
                    } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-inset`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
