export interface Integrante {
  id: number
  nombre: string
  matricula: string | null
  experiencia: number
  especialidad: string
  foto: string
  bio: string
  email: string
  telefono: string
  whatsapp: string
}

const equipo: Integrante[] = [
  {
    id: 1,
    nombre: "Gustavo Germán González",
    matricula: "MP 385",
    experiencia: 24,
    especialidad:
      "Odontopediatría, prótesis, blanqueamiento y cirugía odontológica",
    foto: "/images/gustavo-gonzalez.jpg",
    bio: "Soy odontólogo con 24 años de experiencia en el cuidado de la salud bucal en Santiago del Estero, ofreciendo una atención personalizada y de calidad para cada paciente. Mi enfoque está puesto en la prevención y el tratamiento integral de problemas dentales, combinando técnicas actualizadas con tecnología moderna para que cada visita sea lo más cómoda posible.",
    email: "doc.germangonzalez23@gmail.com",
    telefono: "(385) 310-2988",
    whatsapp: "5493853102988",
  },
  {
    id: 2,
    nombre: "María Verónica González",
    matricula: "MP 344",
    experiencia: 26,
    especialidad:
      "Odontología general, prótesis, endodoncia, blanqueamiento, limpieza y radiografías",
    foto: "/images/maria-veronica-gonzalez.jpg",
    bio: "Soy odontóloga general con 26 años de experiencia, dedicada a brindar una atención cercana y de confianza a cada paciente. Mi práctica abarca desde la odontología general y la prevención hasta tratamientos como endodoncia, prótesis, limpiezas y blanqueamiento dental, priorizando siempre la comodidad y la salud bucal a largo plazo.",
    email: "gonzalezmaveronica74@gmail.com",
    telefono: "(385) 409-0751",
    whatsapp: "5493854090751",
  },
]

export default equipo
