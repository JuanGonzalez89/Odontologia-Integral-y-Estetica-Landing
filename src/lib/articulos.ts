export interface Articulo {
  slug: string
  titulo: string
  descripcion: string
  fechaPublicacion: string
  fechaModificacion: string
  categoria: string
  introduccion: string
  secciones: { titulo: string; parrafos: string[] }[]
  servicioRelacionado: { slug: string; nombre: string }
}

const articulos: Articulo[] = [
  {
    slug: "primera-visita-dentista-ninos-santiago-del-estero",
    titulo: "Primera visita al dentista para niños: guía para familias de Santiago del Estero",
    descripcion: "¿Buscás dentista para niños en Santiago del Estero? Conocé cuándo conviene hacer la primera consulta y cómo preparar a tu hijo para una visita tranquila.",
    fechaPublicacion: "2026-09-15", fechaModificacion: "2026-09-15", categoria: "Odontopediatría",
    introduccion: "La primera consulta odontológica ayuda a detectar hábitos y problemas a tiempo. También permite que el niño conozca el consultorio sin asociarlo necesariamente con dolor o urgencia.",
    secciones: [
      { titulo: "¿Cuándo llevar a un niño al dentista?", parrafos: ["Una consulta preventiva puede realizarse desde que el niño ya tiene dientes y es especialmente útil cuando la familia tiene dudas sobre higiene, caries, chupete, mamadera o recambio dentario. La frecuencia posterior depende de cada caso y la indica el profesional.", "No hace falta esperar a que duela una muela. Si aparecen manchas, dolor al comer, sensibilidad, un golpe en un diente o inflamación, conviene pedir un turno sin demorarlo."] },
      { titulo: "Cómo preparar la visita para que sea una buena experiencia", parrafos: ["Explicale con palabras simples que van a conocer al dentista y a revisar los dientes. Evitá usar la consulta como amenaza o adelantar detalles que puedan generar miedo. Una actitud tranquila de los adultos suele ayudar mucho.", "Elegir un horario en el que el niño esté descansado y llevar sus antecedentes médicos si los tiene también hace más simple el encuentro. En la consulta, el profesional adapta la explicación a la edad y al ritmo de cada chico."] },
      { titulo: "Qué se revisa en una consulta odontopediátrica", parrafos: ["Se observa el desarrollo de dientes y maxilares, el estado de encías, la presencia de placa o caries y los hábitos de higiene. La consulta es una oportunidad para que la familia reciba indicaciones personalizadas sobre cepillado y alimentación.", "Cada niño es distinto: el objetivo es acompañarlo de forma respetuosa para construir confianza y cuidar su salud bucal a largo plazo."] },
    ], servicioRelacionado: { slug: "odontopediatria", nombre: "Odontopediatría" },
  },
  {
    slug: "como-elegir-dentista-para-ninos-santiago-del-estero",
    titulo: "Cómo elegir dentista para niños en Santiago del Estero",
    descripcion: "Claves para elegir un dentista para niños en Santiago del Estero: atención preventiva, comunicación clara y acompañamiento para una visita sin miedo.",
    fechaPublicacion: "2026-09-15", fechaModificacion: "2026-09-15", categoria: "Odontopediatría",
    introduccion: "Cuando una familia busca dentista para niños, la experiencia de la consulta importa tanto como el tratamiento. Un enfoque preventivo y una comunicación acorde a la edad hacen una diferencia.",
    secciones: [
      { titulo: "Buscá una atención adaptada a cada edad", parrafos: ["Los niños necesitan explicaciones simples, tiempo para conocer el entorno y una revisión que contemple su etapa de desarrollo. La atención odontopediátrica se enfoca en prevenir, detectar temprano y acompañar a la familia.", "En una primera conversación podés consultar desde qué edad atienden, qué controles realizan y cómo abordan una visita cuando el niño tiene miedo o llega con dolor."] },
      { titulo: "La prevención es un criterio importante", parrafos: ["Un buen control no se limita a tratar una caries. Incluye revisar la higiene, conversar sobre hábitos y orientar a los adultos según las necesidades del niño. Esto permite tomar decisiones antes de que un problema se vuelva más complejo.", "Si el niño tiene dolor intenso, hinchazón, fiebre o sufrió un traumatismo dental, la consulta debe ser prioritaria. Contactá al consultorio para recibir orientación sobre el turno."] },
      { titulo: "Qué llevar y qué preguntar en el primer turno", parrafos: ["Llevá información sobre alergias, medicación o antecedentes de salud relevantes. También sirve comentar qué alimentos consume, cómo se cepilla y si notaste cambios en dientes o encías.", "Preguntar con libertad permite que el plan de cuidado sea claro para toda la familia. El objetivo es que el niño se vaya entendiendo que el dentista es parte de cuidar su sonrisa."] },
    ], servicioRelacionado: { slug: "odontopediatria", nombre: "Odontopediatría" },
  },
  {
    slug: "cada-cuanto-hacer-limpieza-dental",
    titulo: "¿Cada cuánto hacer una limpieza dental profesional?",
    descripcion: "Conocé para qué sirve la limpieza dental profesional, cuándo pedir un control y cómo cuidar encías y dientes entre consultas en Santiago del Estero.",
    fechaPublicacion: "2026-09-15", fechaModificacion: "2026-09-15", categoria: "Prevención",
    introduccion: "El cepillado diario es indispensable, pero no siempre alcanza para eliminar el sarro que se acumula en zonas difíciles de limpiar. La limpieza profesional forma parte del cuidado preventivo de la salud bucal.",
    secciones: [
      { titulo: "¿Por qué es importante la limpieza dental?", parrafos: ["Durante la consulta se eliminan placa y sarro, y se revisa el estado general de dientes y encías. Esto ayuda a detectar cambios tempranos y a reforzar la técnica de higiene en casa.", "El sarro no se elimina con el cepillo. Por eso, si notás encías que sangran, mal aliento persistente, sensibilidad o depósitos duros cerca de la encía, es recomendable pedir una evaluación."] },
      { titulo: "La frecuencia depende de cada boca", parrafos: ["No existe una frecuencia única válida para todas las personas. El odontólogo la define según el estado de encías, la formación de sarro, tratamientos previos y hábitos de higiene. En una consulta podés acordar un plan de controles adecuado para vos.", "Mantener el cepillado con pasta fluorada, limpiar entre los dientes según la indicación profesional y asistir a controles son hábitos complementarios."] },
    ], servicioRelacionado: { slug: "limpieza-dental", nombre: "Limpieza dental" },
  },
]

export default articulos
export function getArticuloBySlug(slug: string): Articulo | undefined { return articulos.find((articulo) => articulo.slug === slug) }
