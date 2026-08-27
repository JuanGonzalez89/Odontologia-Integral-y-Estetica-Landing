import { SITE_URL } from "./constants"
import type { Integrante } from "./equipo"

/**
 * Ficha del consultorio en Google Maps. Sirve como `sameAs` para que Google
 * entienda que la web y la ficha del negocio son la misma entidad.
 */
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/?q=place_id:ChIJd6u2GxFSO5QR_2wWZHFdM9M"

/**
 * Identificadores estables de los nodos principales del grafo. Permiten que
 * otras páginas referencien la clínica sin repetir toda su ficha.
 */
export const CLINICA_ID = `${SITE_URL}/#clinica`

export function profesionalId(integrante: Integrante) {
  return `${SITE_URL}/sobre-nosotros#integrante-${integrante.id}`
}

/** Referencia corta a la clínica, para usar como provider/publisher. */
export const clinicaRef = { "@id": CLINICA_ID }

/** Referencia a un profesional, incluyendo su matrícula como credencial. */
export function profesionalRef(integrante: Integrante) {
  return {
    "@type": "Person",
    "@id": profesionalId(integrante),
    name: integrante.nombre,
    jobTitle: "Odontólogo/a",
    ...(integrante.matricula && {
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Matrícula profesional",
        identifier: integrante.matricula,
      },
    }),
  }
}

export interface Miga {
  nombre: string
  /** Ruta relativa (ej. "/servicios"). La última miga puede omitirla. */
  url?: string
}

/** Marca la navegación de migas para que Google la muestre en los resultados. */
export function breadcrumbJsonLd(migas: Miga[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: migas.map((miga, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: miga.nombre,
      ...(miga.url && { item: `${SITE_URL}${miga.url}` }),
    })),
  }
}
