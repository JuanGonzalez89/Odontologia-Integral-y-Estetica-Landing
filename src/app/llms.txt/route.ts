import articulos from "@/lib/articulos"
import condiciones from "@/lib/condiciones"
import { CONTACTO } from "@/lib/contacto"
import equipo from "@/lib/equipo"
import preguntas from "@/lib/faq"
import obrasSociales from "@/lib/obras-sociales"
import servicios from "@/lib/servicios"
import { SITE_URL } from "@/lib/constants"

export const dynamic = "force-static"

export function GET() {
  const contenido = [
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
    "La información del sitio es general y educativa. No reemplaza una consulta, un diagnóstico ni una indicación profesional. Ante dificultad para respirar o tragar, se recomienda acudir a una guardia médica.",
    "",
  ].join("\n")

  return new Response(contenido, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
