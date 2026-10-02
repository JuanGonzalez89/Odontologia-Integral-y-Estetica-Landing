import articulos from "./articulos"
import condiciones from "./condiciones"
import { CONTACTO, whatsappUrl } from "./contacto"
import type { Seccion } from "./contenido"
import equipo from "./equipo"
import preguntas from "./faq"
import obrasSociales from "./obras-sociales"
import servicios from "./servicios"
import { SITE_URL } from "./constants"

const AVISO_MEDICO =
  "La información del sitio es general y educativa. No reemplaza una consulta, un diagnóstico ni una indicación profesional. Ante dificultad para respirar o tragar, acudí a una guardia médica."

function frontMatter(titulo: string, descripcion: string, ruta: string) {
  return [
    "---",
    `title: ${JSON.stringify(titulo)}`,
    `description: ${JSON.stringify(descripcion)}`,
    `canonical: ${SITE_URL}${ruta === "/" ? "" : ruta}`,
    "language: es-AR",
    "---",
    "",
  ]
}

function renderSecciones(secciones: readonly Seccion[]) {
  return secciones.flatMap((seccion) => [
    `## ${seccion.titulo}`,
    ...(seccion.parrafos ?? []),
    ...(seccion.items ?? []).map((item) => `- ${item}`),
    ...(seccion.cierre ? [seccion.cierre] : []),
    "",
  ])
}

export function resumenSitioMarkdown() {
  return [
    "# Odontología Integral y Estética",
    "",
    "> Consultorio odontológico para adultos y niños en Santiago del Estero, Argentina, con más de 20 años de experiencia.",
    "",
    "## Datos del consultorio",
    `- Sitio oficial: ${SITE_URL}`,
    `- Dirección: ${CONTACTO.direccion}`,
    `- Teléfono y WhatsApp: ${CONTACTO.telefonoSchema}`,
    `- Email: ${CONTACTO.email}`,
    `- Horarios: ${CONTACTO.horarios.dias}, ${CONTACTO.horarios.manana} y ${CONTACTO.horarios.tarde}.`,
    `- Obras sociales informadas: ${obrasSociales.map((obra) => obra.nombre).join(", ")}.`,
    "",
    "## Profesionales",
    ...equipo.map(
      (profesional) =>
        `- [${profesional.nombre}](${SITE_URL}/sobre-nosotros#integrante-${profesional.id}) — matrícula ${profesional.matricula}; ${profesional.experiencia} años de experiencia. ${profesional.especialidad}.`,
    ),
    "",
    "## Servicios",
    ...servicios.map(
      (servicio) =>
        `- [${servicio.nombre}](${SITE_URL}/servicios/${servicio.slug}): ${servicio.descripcionCorta}`,
    ),
    "",
    "## Síntomas y condiciones",
    ...condiciones.map(
      (condicion) =>
        `- [${condicion.nombre}](${SITE_URL}/condiciones/${condicion.slug}): ${condicion.descripcionCorta}`,
    ),
    "",
    "## Preguntas frecuentes",
    ...preguntas.flatMap((pregunta) => [
      `### ${pregunta.pregunta}`,
      pregunta.respuesta,
      "",
    ]),
    "## Artículos revisados por odontólogos",
    ...articulos.map(
      (articulo) =>
        `- [${articulo.titulo}](${SITE_URL}/blog/${articulo.slug}): ${articulo.descripcion}`,
    ),
    "",
    "## Aviso médico",
    AVISO_MEDICO,
    "",
  ].join("\n")
}

export function markdownParaRuta(pathname: string): string | null {
  const ruta = pathname === "/" ? pathname : pathname.replace(/\/+$/, "")

  if (ruta === "/") {
    return [
      ...frontMatter(
        "Odontólogos en Santiago del Estero | Consultorio dental",
        "Consultorio odontológico integral para adultos y niños en Santiago del Estero.",
        ruta,
      ),
      resumenSitioMarkdown(),
    ].join("\n")
  }

  if (ruta === "/servicios") {
    return [
      ...frontMatter(
        "Servicios odontológicos en Santiago del Estero",
        "Tratamientos odontológicos integrales y estéticos para adultos y niños.",
        ruta,
      ),
      "# Servicios odontológicos",
      "",
      ...servicios.map(
        (servicio) =>
          `- [${servicio.nombre}](${SITE_URL}/servicios/${servicio.slug}): ${servicio.descripcionCorta}`,
      ),
      "",
      `Para pedir un turno, [escribinos por WhatsApp](${whatsappUrl()}).`,
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta.startsWith("/servicios/")) {
    const servicio = servicios.find(
      (item) => item.slug === ruta.slice("/servicios/".length),
    )
    if (!servicio) return null
    const profesionales = equipo.filter((item) =>
      servicio.profesionales.includes(item.id),
    )
    return [
      ...frontMatter(
        servicio.tituloSeo ?? `${servicio.nombre} en Santiago del Estero`,
        servicio.metaDescripcion ?? servicio.descripcionCorta,
        ruta,
      ),
      `# ${servicio.nombre}`,
      "",
      servicio.descripcionLarga,
      "",
      ...renderSecciones(servicio.secciones),
      "## Profesionales que atienden",
      ...profesionales.map(
        (profesional) =>
          `- ${profesional.nombre}, matrícula ${profesional.matricula}. ${profesional.especialidad}.`,
      ),
      "",
      `Para evaluar tu caso, [pedí un turno por WhatsApp](${whatsappUrl()}).`,
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta === "/condiciones") {
    return [
      ...frontMatter(
        "Síntomas y problemas dentales frecuentes",
        "Información revisada por odontólogos sobre síntomas y problemas dentales frecuentes.",
        ruta,
      ),
      "# Síntomas y problemas dentales frecuentes",
      "",
      ...condiciones.map(
        (condicion) =>
          `- [${condicion.nombre}](${SITE_URL}/condiciones/${condicion.slug}): ${condicion.descripcionCorta}`,
      ),
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta.startsWith("/condiciones/")) {
    const condicion = condiciones.find(
      (item) => item.slug === ruta.slice("/condiciones/".length),
    )
    if (!condicion) return null
    const relacionados = servicios.filter((servicio) =>
      condicion.servicios.includes(servicio.slug),
    )
    return [
      ...frontMatter(
        `${condicion.nombre}: causas y tratamiento`,
        condicion.metaDescripcion,
        ruta,
      ),
      `# ${condicion.nombre}`,
      "",
      ...(condicion.urgente
        ? [
            "> **Atención urgente:** si tenés dificultad para respirar o tragar, acudí a una guardia médica.",
            "",
          ]
        : []),
      condicion.descripcionLarga,
      "",
      ...renderSecciones(condicion.secciones),
      "## Servicios relacionados",
      ...relacionados.map(
        (servicio) =>
          `- [${servicio.nombre}](${SITE_URL}/servicios/${servicio.slug})`,
      ),
      "",
      `Para una evaluación profesional, [pedí un turno por WhatsApp](${whatsappUrl()}).`,
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta === "/blog") {
    return [
      ...frontMatter(
        "Blog de salud bucal",
        "Guías de salud bucal revisadas por odontólogos de Santiago del Estero.",
        ruta,
      ),
      "# Blog de salud bucal",
      "",
      ...articulos.map(
        (articulo) =>
          `- [${articulo.titulo}](${SITE_URL}/blog/${articulo.slug}) — ${articulo.descripcion}`,
      ),
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta.startsWith("/blog/")) {
    const articulo = articulos.find(
      (item) => item.slug === ruta.slice("/blog/".length),
    )
    if (!articulo) return null
    return [
      ...frontMatter(articulo.titulo, articulo.descripcion, ruta),
      `# ${articulo.titulo}`,
      "",
      `Publicado: ${articulo.fechaPublicacion}. Actualizado: ${articulo.fechaModificacion}.`,
      "",
      articulo.introduccion,
      "",
      ...articulo.secciones.flatMap((seccion) => [
        `## ${seccion.titulo}`,
        ...seccion.parrafos,
        "",
      ]),
      `## Servicio relacionado: [${articulo.servicioRelacionado.nombre}](${SITE_URL}/servicios/${articulo.servicioRelacionado.slug})`,
      "",
      "Revisado por Gustavo Germán González (MP 385) y María Verónica González (MP 344).",
      "",
      `> ${AVISO_MEDICO}`,
    ].join("\n")
  }

  if (ruta === "/sobre-nosotros") {
    return [
      ...frontMatter(
        "Odontólogos del consultorio",
        "Conocé a los profesionales de Odontología Integral y Estética en Santiago del Estero.",
        ruta,
      ),
      "# Nuestro equipo odontológico",
      "",
      ...equipo.flatMap((profesional) => [
        `## ${profesional.nombre}`,
        `- Matrícula: ${profesional.matricula}`,
        `- Experiencia: ${profesional.experiencia} años`,
        `- Áreas de atención: ${profesional.especialidad}`,
        profesional.bio,
        "",
      ]),
      `Para pedir un turno, [escribinos por WhatsApp](${whatsappUrl()}).`,
    ].join("\n")
  }

  if (ruta === "/contacto") {
    return [
      ...frontMatter(
        "Contacto y turnos",
        "Dirección, horarios y medios de contacto del consultorio odontológico.",
        ruta,
      ),
      "# Contacto y turnos",
      "",
      `- Dirección: ${CONTACTO.direccion}`,
      `- Teléfono: ${CONTACTO.telefono}`,
      `- Email: ${CONTACTO.email}`,
      `- Horarios: ${CONTACTO.horarios.dias}, ${CONTACTO.horarios.manana} y ${CONTACTO.horarios.tarde}`,
      `- WhatsApp: ${whatsappUrl()}`,
      "",
      `Obras sociales informadas: ${obrasSociales.map((obra) => obra.nombre).join(", ")}. Confirmá la cobertura antes del turno.`,
    ].join("\n")
  }

  return null
}
