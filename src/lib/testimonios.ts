export interface Testimonio {
  id: number
  texto: string
  autor: string
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    texto: "100% recomendado el Doctor González.",
    autor: "Octavio Martínez",
  },
  {
    id: 2,
    texto: "¡Recomendadísimo!",
    autor: "Cristian Stemberg",
  },
  {
    id: 3,
    texto: "Excelente atención y mucha calidez con los pacientes. Muy conformes con el trato del equipo.",
    autor: "Ana María Sánchez",
  },
]

export default testimonios
