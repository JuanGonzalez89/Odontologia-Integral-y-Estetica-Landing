/**
 * Bloque de contenido de una página de servicio o condición: un título (h2)
 * seguido, en este orden, de párrafos de introducción, una lista y un párrafo
 * de cierre. Todo es opcional.
 */
export interface Seccion {
  titulo: string
  parrafos?: string[]
  items?: string[]
  cierre?: string
}

/**
 * Fecha en que se revisó por última vez el contenido de servicios y
 * condiciones. Se actualiza a mano cuando los textos cambian: usar
 * `new Date()` le informaría a Google que todo se modificó en cada rastreo.
 */
export const ULTIMA_REVISION = new Date("2026-09-19")

export const ultimaRevisionTexto = ULTIMA_REVISION.toLocaleDateString("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
})
