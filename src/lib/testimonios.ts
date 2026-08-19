export interface Testimonio {
  id: number
  texto: string
  autor: string
  calificacion: number
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    texto: "100% recomendado el Doctor González.",
    autor: "Octavio Martínez",
    calificacion: 5,
  },
  {
    id: 2,
    texto: "¡Recomendadísimo!",
    autor: "Cristian Stemberg",
    calificacion: 5,
  },
  {
    id: 3,
    texto: "Excelente atención y mucha calidez con los pacientes. Muy conformes con el trato del equipo.",
    autor: "Ana María Sánchez",
    calificacion: 5,
  },
  {
    id: 4,
    texto: "Muy buena atención, quedé muy conforme con el trato y los resultados.",
    autor: "Andrea Paz",
    calificacion: 5,
  },
  {
    id: 5,
    texto: "Excelente profesionalismo y calidez humana. Totalmente recomendable.",
    autor: "Giselle Rojas",
    calificacion: 5,
  },
]

export default testimonios
