export interface Caso {
  id: number
  titulo: string
  antes: { src: string; alt: string }
  despues: { src: string; alt: string }
}

const casos: Caso[] = [
  {
    id: 1,
    titulo: "Blanqueamiento dental",
    antes: {
      src: "/images/casos/blanqueamiento-antes.png",
      alt: "Sonrisa antes del blanqueamiento dental, con tono amarillento",
    },
    despues: {
      src: "/images/casos/blanqueamiento-despues.png",
      alt: "Sonrisa después del blanqueamiento dental, con dientes notablemente más blancos",
    },
  },
  {
    id: 2,
    titulo: "Reconstrucción dental",
    antes: {
      src: "/images/casos/reconstruccion-antes.png",
      alt: "Dentadura antes de la reconstrucción, con piezas faltantes y dañadas",
    },
    despues: {
      src: "/images/casos/reconstruccion-despues.jpg",
      alt: "Dentadura después de la reconstrucción, completa y pareja",
    },
  },
]

export default casos
