import { CONTACTO } from "./contacto"
import obrasSociales from "./obras-sociales"

export interface Pregunta {
  id: number
  pregunta: string
  /**
   * Respuesta en texto plano. Se usa tal cual en el schema FAQPage, así que
   * conviene que sea breve y que responda en la primera oración: es lo que
   * levantan los buscadores y los asistentes de IA para citar la página.
   */
  respuesta: string
}

const listado = new Intl.ListFormat("es-AR", {
  style: "long",
  type: "conjunction",
}).format(obrasSociales.map((o) => o.nombre))

/** "9:00 – 12:30" se lee mal dentro de una oración: queda "de 9:00 – 12:30". */
const enPalabras = (rango: string) => rango.replace("–", "a")

const preguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: "¿Qué obras sociales atienden?",
    respuesta: `Trabajamos con ${listado}. La cobertura puede variar según el tratamiento, así que lo mejor es escribirnos por WhatsApp antes del turno para confirmar cómo queda tu caso.`,
  },
  {
    id: 2,
    pregunta: "¿Dónde queda el consultorio y qué horarios tienen?",
    respuesta: `Estamos en ${CONTACTO.direccion}. Atendemos de ${CONTACTO.horarios.dias.toLowerCase()}, de ${enPalabras(CONTACTO.horarios.manana)} y de ${enPalabras(CONTACTO.horarios.tarde)}.`,
  },
  {
    id: 3,
    pregunta: "¿Atienden urgencias?",
    respuesta:
      "Sí. Si tenés dolor intenso, hinchazón o fiebre, escribinos por WhatsApp y te damos un turno lo antes posible dentro de nuestro horario de atención.",
  },
  {
    id: 4,
    pregunta: "¿Cuánto cuesta un tratamiento?",
    respuesta:
      "Los valores dependen del tratamiento y de cada caso en particular, por eso no manejamos una lista de precios fija. Escribinos por WhatsApp contándonos qué necesitás y te pasamos el presupuesto.",
  },
  {
    id: 5,
    pregunta: "¿Desde qué edad atienden niños?",
    respuesta:
      "Atendemos niños a partir de los 6 años. Hacemos odontopediatría: la consulta está pensada para que los más chicos vivan la visita al dentista con tranquilidad y sin miedo, y para acompañarlos en el cuidado de sus dientes desde temprano.",
  },
]

export default preguntas
