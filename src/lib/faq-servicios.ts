import type { Pregunta } from "./faq"

/**
 * Preguntas frecuentes propias de cada servicio, indexadas por slug.
 *
 * Las respuestas son del odontólogo del consultorio, apenas editadas para la
 * web: conservan su forma de explicar a propósito, porque es lo que distingue
 * estas páginas de cualquier texto genérico sobre el tratamiento.
 *
 * Un servicio sin entrada acá simplemente no muestra la sección.
 */
const faqServicios: Record<string, Pregunta[]> = {
  "limpieza-dental": [
    {
      id: 1,
      pregunta: "¿Cada cuánto conviene hacerse una limpieza?",
      respuesta:
        "Lo ideal es cada seis meses. Si formás mucho sarro o tenés antecedentes de problemas de encías, te vamos a pedir que vengas cada tres o cuatro meses.",
    },
    {
      id: 2,
      pregunta: "¿Duele la limpieza? ¿Es normal que sangren las encías?",
      respuesta:
        "No tiene por qué doler. Ahora, si venís con las encías muy inflamadas por el sarro (gingivitis), sí van a sangrar un poco durante la limpieza y quizás ese mismo día. Es normal y se desinflaman rápido.",
    },
    {
      id: 3,
      pregunta: "¿La limpieza deja los dientes más blancos?",
      respuesta:
        "No. La limpieza saca el sarro y las manchas superficiales de té, café o cigarrillo: el diente queda limpio y en su tono natural. Para aclarar el color hace falta un blanqueamiento.",
    },
  ],

  "blanqueamiento-dental": [
    {
      id: 1,
      pregunta: "¿El blanqueamiento daña el esmalte?",
      respuesta:
        "No. Usamos siempre productos aprobados y el esmalte queda intacto.",
    },
    {
      id: 2,
      pregunta: "¿Cuánto dura el resultado?",
      respuesta:
        "Depende de tus hábitos. Si tomás mucho mate, café o vino tinto, o si fumás, te va a durar menos. En promedio, calculá entre uno y tres años antes de necesitar un retoque.",
    },
    {
      id: 3,
      pregunta: "¿Da sensibilidad después?",
      respuesta:
        "Sí, es el efecto secundario más común, pero es pasajero: suele durar entre 24 y 48 horas. Te damos un gel con flúor o una pasta desensibilizante para que lo pases tranquilo.",
    },
    {
      id: 4,
      pregunta: "¿Sirve para cualquier tipo de mancha?",
      respuesta:
        "Funciona sobre el diente natural. No blanquea resinas, coronas ni carillas. Y hay manchas internas causadas por medicamentos que son más rebeldes y necesitan otro abordaje.",
    },
  ],

  endodoncia: [
    {
      id: 1,
      pregunta: "¿Duele el tratamiento de conducto?",
      respuesta:
        "Hoy en día, no. Tenemos muy buenas anestesias: vas a sentir que estamos trabajando, pero no dolor. El dolor fuerte es el que traías de tu casa por la infección, y es justamente el que te sacamos.",
    },
    {
      id: 2,
      pregunta: "¿En cuántas sesiones se hace?",
      respuesta: "En una o dos sesiones, según el caso.",
    },
    {
      id: 3,
      pregunta: "¿Después siempre hay que ponerle una corona?",
      respuesta:
        "Depende. Si el diente perdió mucha estructura por la caries, sí: la corona lo abraza y lo protege. Si quedó buen tejido sano, con una resina de alta resistencia alcanza.",
    },
    {
      id: 4,
      pregunta: "¿El diente queda igual de fuerte que antes?",
      respuesta:
        "Al sacarle el nervio y la irrigación, el diente se va deshidratando con los años y queda algo más propenso a fracturarse. Por eso a veces insistimos con la corona.",
    },
  ],

  odontopediatria: [
    {
      id: 1,
      pregunta: "¿Desde qué edad atienden niños?",
      respuesta:
        "Atendemos chicos a partir de los 6 años. A esa edad ya se puede trabajar con ellos con tranquilidad y aprovechar el recambio de dientes para prevenir problemas más adelante.",
    },
    {
      id: 2,
      pregunta: "¿Qué hacen si el nene llora o no se deja atender?",
      respuesta:
        "Paciencia. Usamos la técnica de decir, mostrar y hacer: jugamos, le mostramos el instrumental como si fueran autitos o aviones, y terminamos convenciéndolo.",
    },
    {
      id: 3,
      pregunta: "¿Los padres pueden entrar con el chico?",
      respuesta:
        "Sí. Pueden entrar y acompañarlo durante toda la consulta.",
    },
  ],

  "protesis-odontologica": [
    {
      id: 1,
      pregunta: "¿Cuántas sesiones lleva hacer una prótesis?",
      respuesta:
        "Calculá unas cuatro sesiones desde la primera consulta hasta tenerla puesta.",
    },
    {
      id: 2,
      pregunta: "¿Cómo deciden entre prótesis fija y removible?",
      respuesta:
        "Depende de cuántos dientes falten, del hueso que tengas y de tu presupuesto. Siempre priorizamos lo fijo, sobre dientes o sobre implantes, porque es más cómodo y natural. Si faltan pilares o no se puede costear, vamos a la removible.",
    },
    {
      id: 3,
      pregunta: "¿Cuánto dura una prótesis y qué mantenimiento necesita?",
      respuesta:
        "Una prótesis fija bien cuidada puede durar de 10 a 15 años. A la removible quizás haya que rebasarla cada tanto, porque la encía y el hueso se van achicando. Las dos se limpian todos los días como si fueran tus dientes, y conviene un control anual.",
    },
  ],

  "cirugia-odontologica": [
    {
      id: 1,
      pregunta: "¿Cuántos días de recuperación lleva una muela de juicio?",
      respuesta:
        "Depende de cómo estaba. Si salió derecha y fácil, al otro día estás perfecto. Si estaba atravesada dentro del hueso, calculá de 3 a 5 días de inflamación y molestias moderadas.",
    },
    {
      id: 2,
      pregunta: "¿Qué cuidados hay que tener después de una extracción?",
      respuesta:
        "Hielo las primeras 24 horas y dieta blanda y fría. Nada de escupir fuerte ni tomar con sorbete, para no perder el coágulo. Y los antibióticos y analgésicos recetados, a rajatabla.",
    },
  ],

  "radiografias-dentales": [
    {
      id: 1,
      pregunta: "¿Las radiografías dentales son seguras?",
      respuesta:
        "Sí. Los equipos de hoy son digitales: la radiación que recibís con una placa periapical es menor que la que absorbés caminando un rato al sol.",
    },
    {
      id: 2,
      pregunta: "¿Las radiografías las hacen ahí o hay que ir a otro lado?",
      respuesta:
        "Las hacemos en el mismo consultorio, así que no tenés que ir a otro lado.",
    },
  ],

  "odontologia-general": [
    {
      id: 1,
      pregunta: "¿Qué incluye una consulta de control?",
      respuesta:
        "Hacemos un diagnóstico completo de la boca, tanto de los tejidos blandos (encías, lengua, mejillas) como de los duros (dientes y hueso). Con eso armamos un plan de tratamiento con distintas alternativas y presupuestos, para que puedas evaluarlo y definir juntos el orden de prioridades.",
    },
    {
      id: 2,
      pregunta: "¿Cada cuánto hay que hacerse un control si no duele nada?",
      respuesta:
        "Una vez al año como mínimo, y lo ideal son seis meses. Si venís cuando ya duele, llegamos tarde y el arreglo termina siendo más caro y más invasivo. La odontología moderna es pura prevención.",
    },
  ],

  "reconstruccion-dental": [
    {
      id: 1,
      pregunta: "¿Qué diferencia hay entre una resina y una corona?",
      respuesta:
        "La resina, el empaste, rellena el agujero de una caries chica o mediana. La corona es una funda completa que envuelve el diente entero cuando está muy destruido y hay que devolverle fuerza para masticar.",
    },
    {
      id: 2,
      pregunta: "¿Se nota la diferencia de color con el resto del diente?",
      respuesta:
        "Si el trabajo está bien hecho, no se nota. Usamos escalas de color muy precisas y copiamos la textura y la translucidez de tus otros dientes.",
    },
  ],
}

export default faqServicios
