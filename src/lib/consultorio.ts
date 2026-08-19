export interface FotoConsultorio {
  id: number
  src: string
  alt: string
}

const fotosConsultorio: FotoConsultorio[] = [
  {
    id: 1,
    src: "/images/consultorio/consultorio-1.jpg",
    alt: "Consultorio odontológico equipado",
  },
  {
    id: 2,
    src: "/images/consultorio/consultorio-2.jpg",
    alt: "Sala de atención del consultorio",
  },
  {
    id: 3,
    src: "/images/consultorio/sala-de-estar-1.jpg",
    alt: "Sala de estar del consultorio",
  },
  {
    id: 4,
    src: "/images/consultorio/sala-de-estar-2.jpg",
    alt: "Sala de estar del consultorio, otra vista",
  },
]

export default fotosConsultorio
