import type { Seccion } from "@/lib/contenido"

/**
 * Cuerpo de una página de servicio o condición: cada sección es un h2 con sus
 * párrafos y listas. Es HTML plano, sin JavaScript, para que el texto esté
 * completo en la respuesta del servidor.
 */
export default function SeccionesContenido({
  secciones,
}: {
  secciones: Seccion[]
}) {
  return (
    <>
      {secciones.map((s) => (
        <section key={s.titulo} className="mt-10">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">
            {s.titulo}
          </h2>
          <div className="mt-3 space-y-4 leading-relaxed text-text/80">
            {s.parrafos?.map((p) => <p key={p}>{p}</p>)}
            {s.items && (
              <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {s.cierre && <p>{s.cierre}</p>}
          </div>
        </section>
      ))}
    </>
  )
}
