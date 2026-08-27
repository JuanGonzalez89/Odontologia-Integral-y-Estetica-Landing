import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, BadgeCheck, Mail, MessageCircle } from "lucide-react"
import equipo from "@/lib/equipo"
import { whatsappUrl } from "@/lib/contacto"
import { breadcrumbJsonLd } from "@/lib/schema"
import JsonLd from "@/components/JsonLd"

export const metadata: Metadata = {
  title: "Nuestro equipo de odontólogos",
  description:
    "Conocé al equipo de odontólogos del consultorio en Santiago del Estero: Gustavo Germán González y María Verónica González, con más de 20 años de experiencia.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
}

export default function SobreNosotrosPage() {
  return (
    <main id="main-content" className="mx-auto max-w-5xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { nombre: "Inicio", url: "/" },
          { nombre: "Sobre nosotros" },
        ])}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-text/50">
        <Link href="/" className="hover:text-primary hover:underline">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <span className="text-text/70">Sobre nosotros</span>
      </nav>

      <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Sobre nosotros
      </h1>
      <p className="mt-3 max-w-2xl leading-relaxed text-text/70">
        Somos un consultorio familiar en Santiago del Estero, formado por dos
        odontólogos con más de 20 años de trayectoria cada uno. Combinamos
        experiencia y calidez para que cada paciente se sienta cómodo desde
        el primer turno.
      </p>

      <div className="mt-10 space-y-8">
        {equipo.map((integrante) => (
          <section
            key={integrante.id}
            id={`integrante-${integrante.id}`}
            className="flex scroll-mt-24 flex-col items-start gap-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8"
          >
            <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-100 sm:h-48 sm:w-48">
              <Image
                src={integrante.foto}
                alt={
                  integrante.id === 1
                    ? "Gustavo Germán González, odontólogo en Santiago del Estero"
                    : "María Verónica González, odontóloga en Santiago del Estero"
                }
                width={192}
                height={192}
                className="h-full w-full object-cover"
                style={{ objectPosition: integrante.fotoPosicion ?? "center" }}
              />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary">
                {integrante.nombre}
              </h2>

              <div className="mt-2 flex flex-wrap gap-2">
                {integrante.matricula && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Matrícula {integrante.matricula}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Award className="h-3.5 w-3.5" aria-hidden="true" />
                  {integrante.experiencia} años de experiencia
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-text/70">
                {integrante.especialidad}
              </p>

              <p className="mt-4 border-l-2 border-secondary pl-4 text-lg font-medium leading-snug text-primary">
                {integrante.fraseDestacada}
              </p>

              <p className="mt-4 leading-relaxed text-text/80">
                {integrante.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl(integrante.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Escribirle por WhatsApp
                </a>
                <a
                  href={`mailto:${integrante.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {integrante.email}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
