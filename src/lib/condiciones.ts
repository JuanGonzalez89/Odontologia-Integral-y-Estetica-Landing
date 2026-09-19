import type { ComponentType } from "react"
import {
  Zap,
  CircleAlert,
  ShieldAlert,
  Droplet,
  Moon,
  Snowflake,
  AlignCenter,
  Siren,
} from "lucide-react"
import type { Seccion } from "./contenido"

export interface Condicion {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  /** Texto para el resultado de búsqueda de Google. No se muestra en la página. */
  metaDescripcion: string
  descripcionLarga: string
  /** Desarrollo del tema: se muestra debajo de `descripcionLarga`. */
  secciones: Seccion[]
  /** Slugs de los servicios que resuelven esta condición. */
  servicios: string[]
  icono: ComponentType<{ className?: string }>
  urgente?: boolean
}

const condiciones: Condicion[] = [
  {
    id: 1,
    slug: "dolor-de-muela",
    nombre: "Dolor de muela",
    descripcionCorta:
      "El dolor de muela es una de las molestias bucales más comunes y puede tener muchas causas, desde una caries hasta una infección.",
    metaDescripcion:
      "Dolor de muela: causas más comunes, qué hacer mientras esperás y cuándo consultar. Atención odontológica en Santiago del Estero.",
    descripcionLarga:
      "El dolor de muela puede manifestarse de muchas formas: una molestia leve y constante, un dolor punzante al masticar, sensibilidad al frío o al calor, o incluso un dolor que se irradia hacia la oreja o la mandíbula. Las causas más frecuentes son caries profundas, infecciones en la raíz del diente, abscesos, fracturas dentales o problemas en las encías.\n\nSi el dolor aparece de forma repentina, podés aliviarlo temporalmente con analgésicos de venta libre, evitar masticar del lado afectado y mantener una buena higiene bucal. Sin embargo, estos son paliativos temporales: el dolor de muela no suele desaparecer por sí solo porque indica que algo está pasando en el diente o en los tejidos que lo rodean.\n\nLo más importante es que un odontólogo evalúe la causa para determinar el tratamiento adecuado, que puede ir desde una obturación (empaste) hasta un tratamiento de conducto o una extracción. Ignorar el dolor puede agravar el problema. Si estás con dolor de muela, no esperes: contactanos para que te demos un turno lo antes posible.",
    secciones: [
      {
        titulo: "Qué nos dice el tipo de dolor",
        parrafos: [
          "La forma en que duele orienta sobre la causa, aunque solo un examen y una radiografía permiten confirmarla:",
        ],
        items: [
          "Dolor breve con el frío, el calor o lo dulce, que se va enseguida: suele ser sensibilidad o una caries todavía superficial.",
          "Dolor que sigue un rato después del estímulo o que aparece al masticar: puede haber una caries profunda o una fisura en el diente.",
          "Dolor espontáneo, pulsátil o que te despierta a la noche: el nervio del diente puede estar inflamado o infectado.",
          "Dolor con hinchazón de la encía o de la cara: puede haber una infección y conviene consultar cuanto antes.",
        ],
      },
      {
        titulo: "Qué hacer mientras esperás el turno",
        items: [
          "Tomá el analgésico que habitualmente usás, siguiendo las indicaciones del prospecto o de tu médico.",
          "Evitá masticar del lado afectado y los alimentos muy fríos, calientes o dulces.",
          "Mantené la higiene: cepillá con suavidad la zona y usá hilo dental para sacar restos de comida.",
          "Podés aplicar frío por fuera de la cara si hay inflamación.",
          "No coloques aspirina ni otros medicamentos directamente sobre la encía: pueden lastimar el tejido.",
        ],
      },
      {
        titulo: "Cuándo consultar sin demora",
        items: [
          "Dolor intenso o que aumenta.",
          "Hinchazón en la cara, la encía o el cuello.",
          "Fiebre o mal sabor en la boca.",
          "Dificultad para abrir la boca o para tragar.",
        ],
        cierre:
          "Si además tenés dificultad para respirar o la hinchazón se extiende rápidamente, andá a una guardia médica de inmediato.",
      },
      {
        titulo: "Cómo lo resolvemos",
        parrafos: [
          "En la consulta te preguntamos cómo es el dolor, revisamos el diente y, si hace falta, hacemos una radiografía en el mismo consultorio. Con el diagnóstico te explicamos las opciones: una restauración si la caries es reciente, una endodoncia si el nervio está comprometido o una extracción cuando el diente no se puede recuperar. Atendemos urgencias dentro de nuestro horario.",
        ],
      },
    ],
    servicios: [
      "odontologia-general",
      "endodoncia",
      "radiografias-dentales",
      "cirugia-odontologica",
    ],
    icono: Zap,
  },
  {
    id: 2,
    slug: "caries",
    nombre: "Caries",
    descripcionCorta:
      "La caries es una lesión que destruye el esmalte dental y puede avanzar hasta afectar las capas más profundas del diente.",
    metaDescripcion:
      "Caries: cómo se forman, qué síntomas dan y cómo se tratan según el estadio. Prevención y tratamiento odontológico en Santiago del Estero.",
    descripcionLarga:
      "La caries es una enfermedad que se produce cuando las bacterias presentes en la boca transforman los azúcares de los alimentos en ácidos que atacan el esmalte dental. Con el tiempo, ese ataque continuo va desmineralizando el esmalte hasta crear una cavidad. Si no se trata, la caries puede avanzar hacia la dentina y llegar hasta la pulpa del diente, causando dolor e infección.\n\nEn sus etapas iniciales, la caries puede no presentar síntomas evidentes. Por eso es tan importante asistir a los controles odontológicos de rutina, donde podemos detectarla antes de que sea visible o cause dolor. Cuando avanza, puede manifestarse como sensibilidad al frío, al calor o a los dulces, manchas blancas o marrones en el diente, y finalmente dolor.\n\nEl tratamiento depende del estadio de la caries. Si es incipiente, puede tratarse con flúor o remineralización. Si ya hay cavidad, se realiza una obturación (empaste). Cuando la caries alcanza la pulpa, puede requerir endodoncia. La mejor estrategia sigue siendo la prevención: cepillado adecuado, uso de hilo dental, dieta baja en azúcares y visitas periódicas al odontólogo.",
    secciones: [
      {
        titulo: "Cómo avanza una caries",
        items: [
          "Etapa inicial: aparece una mancha blanca opaca en el esmalte. Todavía no hay cavidad y, con el tratamiento y los cuidados adecuados, puede detenerse.",
          "Esmalte y dentina: se forma una cavidad y aparece sensibilidad al frío, al calor o a los dulces. Requiere una restauración.",
          "Pulpa: la caries llega al nervio y hay dolor, a veces espontáneo. Puede necesitar una endodoncia.",
          "Infección: si no se trata, puede formarse un absceso en la raíz.",
        ],
      },
      {
        titulo: "Dónde suelen aparecer",
        parrafos: [
          "Las caries se instalan donde la placa se acumula y el cepillo llega mal: en las fosas y surcos de las muelas, entre los dientes, cerca de la encía y alrededor de restauraciones antiguas. Por eso muchas veces no se ven ni se sienten, y se detectan con una revisión y una radiografía.",
        ],
      },
      {
        titulo: "Qué factores las favorecen",
        items: [
          "Comer o tomar bebidas azucaradas con mucha frecuencia, sobre todo entre comidas.",
          "Cepillado poco frecuente o sin pasta con flúor, y no usar hilo dental.",
          "Boca seca por falta de saliva, que es la que ayuda a neutralizar los ácidos.",
          "Encías retraídas que dejan expuesta la raíz, más blanda que el esmalte.",
          "Falta de controles periódicos.",
        ],
      },
      {
        titulo: "Cómo la tratamos",
        parrafos: [
          "Después del diagnóstico, elegimos el tratamiento que corresponde al estadio: control y flúor si recién empieza, una obturación con resina si ya hay cavidad, y endodoncia o reconstrucción con corona cuando el daño es mayor. Mientras antes se detecta, más simple, más económico y más conservador es el tratamiento.",
        ],
      },
      {
        titulo: "Cómo prevenirla",
        items: [
          "Cepillate al menos dos veces por día con pasta con flúor y no te saltes el cepillado de la noche.",
          "Usá hilo dental todos los días.",
          "Reducí la frecuencia de azúcares y bebidas dulces.",
          "Hacete un control como mínimo una vez por año; lo ideal es cada seis meses.",
        ],
      },
    ],
    servicios: [
      "reconstruccion-dental",
      "odontologia-general",
      "endodoncia",
      "odontopediatria",
    ],
    icono: CircleAlert,
  },
  {
    id: 3,
    slug: "absceso-dental",
    nombre: "Absceso dental",
    descripcionCorta:
      "Un absceso dental es una acumulación de pus causada por una infección bacteriana, que requiere atención odontológica urgente.",
    metaDescripcion:
      "Absceso dental: síntomas, riesgos y tratamiento. Es una urgencia odontológica: consultá cuanto antes en Santiago del Estero.",
    descripcionLarga:
      "Un absceso dental es una infección bacteriana que genera una acumulación de pus en el interior del diente o en las encías. Puede originarse a partir de una caries profunda, una fractura dental, una enfermedad periodontal avanzada o un tratamiento de conducto incompleto. Los síntomas típicos incluyen dolor intenso y pulsátil, sensibilidad al calor y al frío, hinchazón en la cara o la mandíbula, fiebre, mal sabor en la boca y, en algunos casos, dificultad para abrir la boca o tragar.\n\nEl absceso dental es una emergencia odontológica. Si no se trata a tiempo, la infección puede propagarse a otras partes del cuerpo, con consecuencias graves para la salud general. Mientras llegás al consultorio, podés aplicar frío del lado afectado para reducir la hinchazón y tomar analgésicos para el dolor, pero esto no reemplaza la atención profesional.\n\nEl tratamiento consiste en drenar el pus, eliminar la fuente de la infección y, en la mayoría de los casos, recetar antibióticos para controlar la propagación bacteriana. Dependiendo del caso, puede ser necesaria una endodoncia o una extracción. Si tenés síntomas de absceso, contactanos urgente.",
    secciones: [
      {
        titulo: "Cómo reconocerlo",
        parrafos: [
          "Además del dolor pulsátil y la hinchazón, hay señales que conviene tener presentes:",
        ],
        items: [
          "Un bultito o granito en la encía, a veces con salida de pus y sabor amargo o desagradable.",
          "Dolor que se siente en el oído, la mandíbula o el cuello del mismo lado.",
          "Dolor al masticar o al apoyar el diente.",
          "Ganglios inflamados debajo de la mandíbula o en el cuello.",
        ],
      },
      {
        titulo: "Cuándo es una emergencia",
        parrafos: [
          "Un absceso puede extenderse a la cara y al cuello. Andá de inmediato a una guardia médica si tenés:",
        ],
        items: [
          "Dificultad para respirar o para tragar.",
          "Hinchazón que crece rápido o llega al ojo o al cuello.",
          "Fiebre alta o mucho malestar general.",
        ],
      },
      {
        titulo: "Qué no hacer",
        items: [
          "No intentes reventar ni drenar el absceso por tu cuenta.",
          "No apliques calor en la zona: puede favorecer que la infección se extienda.",
          "No tomes antibióticos por tu cuenta ni con recetas viejas: solos no resuelven la causa.",
          "No esperes a que se calme el dolor. Puede ser que la infección siga avanzando.",
        ],
      },
      {
        titulo: "Cómo lo tratamos",
        parrafos: [
          "Primero necesitamos ver de dónde viene la infección, con un examen y una radiografía. Después se elimina la causa: puede ser necesario limpiar y sellar los conductos con una endodoncia para conservar el diente, o extraerlo si no se puede recuperar. Cuando corresponde, se indican antibióticos como complemento. Escribinos por WhatsApp y te damos un turno lo antes posible dentro del horario de atención.",
        ],
      },
    ],
    servicios: [
      "endodoncia",
      "cirugia-odontologica",
      "radiografias-dentales",
    ],
    icono: ShieldAlert,
    urgente: true,
  },
  {
    id: 4,
    slug: "gingivitis",
    nombre: "Gingivitis",
    descripcionCorta:
      "La gingivitis es la inflamación de las encías causada por la acumulación de placa bacteriana, y es reversible con tratamiento profesional.",
    metaDescripcion:
      "Gingivitis: por qué sangran las encías, cómo se revierte con una limpieza profesional y cómo prevenirla. Consultá en Santiago del Estero.",
    descripcionLarga:
      "La gingivitis es una forma leve y temprana de enfermedad periodontal. Se produce cuando la placa bacteriana se acumula en la línea de las encías y no se elimina con el cepillado y el hilo dental. Las bacterias liberan toxinas que irritan el tejido gingival, provocando inflamación. Los signos más comunes son encías enrojecidas, inflamadas, que sangran fácilmente al cepillarse o al usar hilo dental. También puede haber mal aliento persistente.\n\nLa buena noticia es que la gingivitis es reversible. Con una limpieza profesional para eliminar la placa y el sarro acumulados, sumada a una mejora en la higiene bucal diaria, las encías suelen recuperarse en pocas semanas. Si no se trata, la gingivitis puede evolucionar hacia periodontitis, una enfermedad más grave que afecta los tejidos de soporte del diente y puede llevar a la pérdida dental.\n\nLa prevención es clave: cepillado correcto, uso diario de hilo dental y visitas regulares al odontólogo para limpiezas profesionales. Si notás que tus encías sangran al cepillarte, no lo ignores. Consultanos para evaluar el estado de tus encías.",
    secciones: [
      {
        titulo: "Encías sanas y encías con gingivitis",
        parrafos: [
          "Una encía sana es firme, de color rosado y no sangra con el cepillado ni con el hilo dental. Sangrar no es normal, aunque sea muy común: es la señal más temprana de que hay inflamación. Cuando la encía se ve roja, brillante, hinchada o se separa un poco del diente, la inflamación ya está instalada.",
        ],
      },
      {
        titulo: "Qué la favorece",
        items: [
          "Placa y sarro acumulados en el borde de las encías.",
          "Cepillado apurado o sin llegar a toda la boca, y no usar hilo dental.",
          "Tabaquismo, que además dificulta ver la inflamación.",
          "Cambios hormonales, como los del embarazo.",
          "Algunos medicamentos y enfermedades como la diabetes.",
          "Dientes apiñados o restauraciones desbordadas, que retienen placa.",
        ],
      },
      {
        titulo: "Cómo la tratamos",
        items: [
          "Evaluamos las encías y, si hace falta, una radiografía para descartar que el hueso esté afectado.",
          "Hacemos una limpieza profesional para eliminar el sarro y la placa, incluso por debajo de la línea de la encía.",
          "Te mostramos cómo cepillarte y usar el hilo dental en tu caso.",
          "Programamos un control para verificar que las encías se hayan desinflamado.",
        ],
        cierre:
          "Es normal que sangren un poco durante la limpieza o el mismo día. Al eliminar la causa se desinflaman rápido.",
      },
      {
        titulo: "Cuándo puede ser algo más que gingivitis",
        parrafos: [
          "Si además de las encías inflamadas notás dientes que se mueven, encías que se retraen, dientes que parecen más largos o pus entre el diente y la encía, puede tratarse de periodontitis. Es una etapa más avanzada que requiere otro tratamiento, por eso conviene consultar cuanto antes.",
        ],
      },
      {
        titulo: "Cómo prevenirla",
        items: [
          "Cepillate al menos dos veces por día con cepillo de cerdas suaves, sin frotar fuerte, y usá hilo dental todos los días.",
          "Hacete una limpieza profesional cada seis meses, o cada tres o cuatro si formás mucho sarro o tenés antecedentes de problemas de encías.",
          "Evitá el tabaco.",
        ],
      },
    ],
    servicios: ["limpieza-dental", "odontologia-general"],
    icono: Droplet,
  },
  {
    id: 5,
    slug: "bruxismo",
    nombre: "Bruxismo",
    descripcionCorta:
      "El bruxismo es el hábito involuntario de apretar o rechinar los dientes, que suele ocurrir durante el sueño y puede desgastar las piezas dentales.",
    metaDescripcion:
      "Bruxismo: síntomas de apretar o rechinar los dientes, causas y tratamiento con placa de descarga. Consultá en Santiago del Estero.",
    descripcionLarga:
      "El bruxismo es una condición en la que la persona aprieta o rechina los dientes de forma involuntaria, generalmente mientras duerme. Muchas personas no saben que lo padecen hasta que alguien se los menciona o comienzan a notar síntomas como dolor mandibular al despertar, sensibilidad dental, dolores de cabeza frecuentes, desgaste visible del esmalte, o ruidos en la articulación de la mandíbula al abrir o cerrar la boca.\n\nLas causas del bruxismo son variadas: estrés y ansiedad, problemas de alineación dental, trastornos del sueño, o incluso ciertos medicamentos. Con el tiempo, el desgaste dental puede volverse significativo, fracturar piezas dentales o provocar trastornos de la articulación temporomandibular (ATM).\n\nEl tratamiento más común para proteger los dientes del desgaste es la confección de una placa de descarga o férula oclusal, que se usa durante la noche y absorbe la fuerza del rechinamiento. También pueden recomendarse técnicas de relajación, fisioterapia mandibular o, en algunos casos, tratamientos para alinear la mordida. Si sospechás que podés tener bruxismo, consultanos para evaluarlo.",
    secciones: [
      {
        titulo: "Cómo saber si apretás o rechinás los dientes",
        items: [
          "Te despertás con la mandíbula cansada, tensa o dolorida.",
          "Tenés dolores de cabeza frecuentes, sobre todo por la mañana o en las sienes.",
          "Alguien te escucha rechinar mientras dormís.",
          "Tus dientes están planos, con bordes desgastados o astillados.",
          "Sentís los dientes sensibles sin causa clara o la lengua o las mejillas marcadas por dentro.",
          "Notás chasquidos o dolor al abrir la boca.",
        ],
      },
      {
        titulo: "Cómo lo diagnosticamos",
        parrafos: [
          "En la consulta revisamos el desgaste de los dientes, el estado de las encías, los músculos de la mandíbula y la articulación, y cómo cierra tu mordida. Muchas veces el desgaste es la evidencia que confirma que hay bruxismo aunque no seas consciente de él. Si hace falta, completamos con una radiografía.",
        ],
      },
      {
        titulo: "Qué lo favorece",
        items: [
          "Estrés, ansiedad y tensión acumulada durante el día.",
          "Problemas de sueño, como los ronquidos o las pausas respiratorias.",
          "Consumo de cafeína, alcohol y tabaco.",
          "Algunos medicamentos.",
          "Dientes mal alineados o restauraciones que alteran la mordida.",
        ],
      },
      {
        titulo: "Tratamiento y cuidados",
        parrafos: [
          "La placa de descarga se fabrica a medida, se usa durante la noche y protege los dientes del desgaste. Es importante entender que la placa protege, pero no elimina la causa: por eso conviene sumar hábitos que bajen la tensión.",
        ],
        items: [
          "Usá la placa todas las noches, como te indiquemos.",
          "Evitá la cafeína y el alcohol a la tarde y a la noche.",
          "Probá técnicas de relajación antes de dormir.",
          "Durante el día, chequeá tu mandíbula: los dientes deben estar separados y los labios cerrados, sin apretar.",
          "Si hay dientes ya desgastados o fracturados, se pueden reconstruir.",
        ],
      },
    ],
    servicios: ["odontologia-general", "reconstruccion-dental"],
    icono: Moon,
  },
  {
    id: 6,
    slug: "dientes-sensibles",
    nombre: "Dientes sensibles",
    descripcionCorta:
      "La sensibilidad dental es una molestia aguda y temporaria que aparece cuando los dientes se exponen a estímulos como frío, calor o dulces.",
    metaDescripcion:
      "Dientes sensibles al frío, al calor o a los dulces: causas y tratamiento. Buscamos el origen de la molestia en Santiago del Estero.",
    descripcionLarga:
      "La sensibilidad dental ocurre cuando el esmalte que protege la corona del diente se desgasta, o cuando la encía se retrae y deja expuesta la dentina, la capa interna del diente. La dentina contiene microscópicos túbulos que conectan con el nervio, y al quedar expuestos, estímulos como el frío de una bebida, el calor del mate, el aire frío o los alimentos dulces provocan un dolor agudo y pasajero.\n\nLas causas más frecuentes son el cepillado demasiado agresivo, el consumo frecuente de alimentos y bebidas ácidas, el reflujo gástrico, el desgaste por bruxismo, las caries o las encías retraídas por enfermedad periodontal. También puede aparecer después de procedimientos como una limpieza o un blanqueamiento dental, aunque en esos casos suele ser temporaria.\n\nExisten pastas dentales específicas para dientes sensibles, y el odontólogo puede aplicar barnices de flúor o selladores para reducir la sensibilidad. El tratamiento de fondo depende de la causa: corregir la técnica de cepillado, tratar caries, o abordar el reflujo o el bruxismo si están involucrados. Si el frío o el calor te molesta, consultanos para encontrar la causa y la solución.",
    secciones: [
      {
        titulo: "Cuándo es sensibilidad y cuándo es otra cosa",
        parrafos: [
          "La sensibilidad común es un dolor agudo y breve, que aparece con el estímulo y desaparece enseguida. Conviene consultar con más urgencia si:",
        ],
        items: [
          "El dolor sigue un buen rato después de retirar el frío o el calor.",
          "Aparece solo, sin estímulo, o te despierta a la noche.",
          "Se concentra siempre en un mismo diente.",
          "Aparece al masticar o al soltar la mordida.",
        ],
      },
      {
        titulo: "Cómo encontramos la causa",
        parrafos: [
          "Revisamos los dientes y las encías, probamos con qué estímulo aparece la molestia y, si hace falta, hacemos una radiografía. Lo que buscamos es diferenciar entre una sensibilidad por desgaste o encías retraídas y un problema que necesita otro tratamiento, como una caries, una fisura o una restauración filtrada.",
        ],
      },
      {
        titulo: "Cómo se trata",
        items: [
          "Si es por desgaste o raíz expuesta: pastas para dientes sensibles, barnices de flúor u otros materiales que sellan la superficie.",
          "Si hay una caries o una restauración defectuosa: se trata el diente.",
          "Si hay bruxismo: se puede indicar una placa de descarga.",
          "Si hay reflujo o consumo frecuente de ácidos: se trabaja también sobre esas causas.",
        ],
      },
      {
        titulo: "Qué podés hacer en casa",
        items: [
          "Cepillate con un cepillo de cerdas suaves y sin frotar fuerte: el cepillado agresivo desgasta el esmalte y las encías.",
          "Usá una pasta para dientes sensibles todos los días. Puede tardar algunas semanas en notarse el efecto.",
          "Esperá un rato para cepillarte después de tomar bebidas o comer alimentos ácidos, como gaseosas, jugos cítricos o vino.",
          "Reducí los cambios bruscos de temperatura en lo que comés y tomás.",
        ],
      },
    ],
    servicios: [
      "odontologia-general",
      "reconstruccion-dental",
      "limpieza-dental",
      "blanqueamiento-dental",
    ],
    icono: Snowflake,
  },
  {
    id: 7,
    slug: "dientes-desalineados-apinados",
    nombre: "Dientes desalineados o apiñados",
    descripcionCorta:
      "Los dientes desalineados o apiñados afectan la estética de la sonrisa y pueden dificultar la higiene bucal, favoreciendo caries y enfermedades de encías.",
    metaDescripcion:
      "Dientes desalineados o apiñados: causas, riesgos para dientes y encías, y cuándo conviene una evaluación. Consultanos en Santiago del Estero.",
    descripcionLarga:
      "Cuando los dientes no están alineados correctamente o hay falta de espacio en la arcada dental, se produce apiñamiento. Esto puede deberse a factores genéticos, pérdida prematura de dientes de leche, hábitos como succión del dedo en la infancia, o simplemente a que el tamaño de los dientes no coincide con el tamaño de la mandíbula. Los dientes pueden aparecer montados unos sobre otros, girados o separados de forma irregular.\n\nAdemás de la cuestión estética, los dientes apiñados dificultan la higiene bucal diaria: es más difícil pasar el hilo dental y el cepillo no llega a todas las superficies. Esto aumenta el riesgo de caries, gingivitis y mal aliento. También pueden provocar desgaste irregular de los dientes, problemas en la articulación mandibular y dolores de cabeza.\n\nEl tratamiento depende del grado de apiñamiento y la edad del paciente. Puede incluir ortodoncia (brackets tradicionales, alineadores transparentes o aparatos removibles) y, en algunos casos, extracción de piezas para liberar espacio. La evaluación temprana, especialmente en niños y adolescentes, permite planificar el tratamiento de forma más efectiva. Si te preocupa la alineación de tus dientes o los de tu hijo, consultanos.",
    secciones: [
      {
        titulo: "Cómo se presentan",
        items: [
          "Apiñamiento: los dientes están encimados o montados porque falta lugar.",
          "Rotaciones: algunos dientes están girados sobre su eje.",
          "Espacios: hay separaciones entre los dientes.",
          "Problemas de mordida: los dientes de arriba y de abajo no encajan bien al cerrar, o algunos quedan cruzados.",
        ],
      },
      {
        titulo: "Por qué no es solo una cuestión estética",
        items: [
          "Se acumula más placa en las zonas que no se alcanzan bien con el cepillo, y aumenta el riesgo de caries y de encías inflamadas.",
          "El hilo dental pasa con dificultad y el sarro se forma con más facilidad.",
          "La mordida puede repartir mal la fuerza y desgastar algunos dientes más que otros.",
          "En algunos casos puede sobrecargar la articulación de la mandíbula.",
        ],
      },
      {
        titulo: "A qué edad conviene consultar",
        parrafos: [
          "Lo ideal es una primera evaluación cuando empiezan a salir los dientes permanentes, alrededor de los 6 o 7 años. En esa etapa se puede detectar si falta espacio, si hay hábitos que influyen (como chuparse el dedo) o si la mordida no está creciendo bien, y elegir el mejor momento para actuar. Pero también hay tratamiento en la adolescencia y en la adultez: nunca es tarde para consultar.",
        ],
      },
      {
        titulo: "Qué hacemos en la consulta",
        parrafos: [
          "Evaluamos cómo están los dientes, las encías y la mordida, y si hace falta pedimos radiografías para ver las piezas que todavía no salieron. Te explicamos qué encontramos, qué alternativas existen según tu edad y tu caso, y cuál conviene hacer primero. Además, nos ocupamos de que la boca esté sana antes de empezar cualquier tratamiento de alineación, resolviendo caries o inflamación de encías.",
        ],
      },
      {
        titulo: "Cómo mantener la higiene con dientes apiñados",
        items: [
          "Usá hilo dental todos los días, o pasadores interdentales si el hilo no entra.",
          "Cepillá cada diente por separado, dedicando más tiempo a las zonas encimadas.",
          "Hacete limpiezas profesionales con regularidad para sacar el sarro de los lugares difíciles.",
        ],
      },
    ],
    servicios: ["odontologia-general", "odontopediatria", "limpieza-dental"],
    icono: AlignCenter,
  },
  {
    id: 8,
    slug: "infeccion-dental",
    nombre: "Infección dental",
    descripcionCorta:
      "Una infección dental es una condición seria causada por bacterias que afectan el interior del diente o los tejidos circundantes.",
    metaDescripcion:
      "Infección dental: síntomas de alarma, riesgos y tratamiento. Requiere atención profesional: escribinos cuanto antes en Santiago del Estero.",
    descripcionLarga:
      "Una infección dental ocurre cuando bacterias logran penetrar las defensas del diente o de las encías y se multiplican, generando una respuesta inflamatoria del organismo. Las infecciones pueden originarse en una caries no tratada, una fractura dental, un tratamiento de conducto incompleto o una enfermedad periodontal avanzada. Los síntomas incluyen dolor intenso y constante, hinchazón en la cara o el cuello, fiebre, ganglios inflamados, mal aliento, sabor desagradable en la boca y, en casos graves, dificultad para respirar o tragar.\n\nLas infecciones dentales no se resuelven por sí solas y requieren tratamiento profesional. Si no se tratan, pueden propagarse a otras partes del cuerpo, incluyendo el cuello, la mandíbula e incluso el torrente sanguíneo, con consecuencias potencialmente graves. Mientras llegás al consultorio, podés aplicar frío para reducir la hinchazón y tomar analgésicos para el dolor, pero no intentes drenar el absceso por tu cuenta ni apliques calor.\n\nEl tratamiento consiste en eliminar la fuente de la infección, que puede implicar endodoncia, drenaje del absceso, extracción del diente afectado y antibióticos cuando sea necesario. Si presentás síntomas de infección dental, contactanos de inmediato.",
    secciones: [
      {
        titulo: "Dónde puede originarse",
        items: [
          "En el interior del diente: una caries profunda o una fractura llega al nervio y las bacterias lo infectan.",
          "En las encías: la enfermedad periodontal forma bolsas donde se acumula la infección.",
          "Alrededor de una muela del juicio que sale de a poco o a medias, donde queda un espacio en el que se acumulan restos y bacterias.",
          "Después de un tratamiento previo, como un conducto que quedó incompleto o una restauración filtrada.",
        ],
      },
      {
        titulo: "Señales de que la infección se está extendiendo",
        parrafos: [
          "Si aparece cualquiera de estas señales, no esperes al turno y andá a una guardia médica de inmediato:",
        ],
        items: [
          "Dificultad para respirar o para tragar.",
          "Hinchazón que crece rápido, que llega al ojo o que baja hacia el cuello.",
          "Fiebre alta, escalofríos o mucho malestar general.",
          "Dificultad para abrir la boca.",
        ],
      },
      {
        titulo: "Qué hacer mientras llegás al consultorio",
        items: [
          "Aplicá frío por fuera de la cara para bajar la hinchazón.",
          "Tomá el analgésico que usás habitualmente, siguiendo las indicaciones del prospecto o de tu médico.",
          "No apliques calor, no intentes drenar la infección y no tomes antibióticos por tu cuenta.",
          "Mantené la higiene de la boca con suavidad.",
        ],
      },
      {
        titulo: "Cómo la tratamos",
        parrafos: [
          "Lo primero es encontrar el origen con un examen y una radiografía. Según el caso, se hace una endodoncia para conservar el diente, un drenaje o la extracción de la pieza que no se puede recuperar, con antibióticos cuando corresponden. Tratar solo con antibióticos suele calmar los síntomas por un tiempo, pero la infección vuelve si no se elimina la causa. Atendemos urgencias dentro de nuestro horario: escribinos por WhatsApp.",
        ],
      },
      {
        titulo: "Cómo prevenirla",
        items: [
          "Tratá las caries a tiempo, antes de que lleguen al nervio.",
          "Hacete controles y limpiezas periódicas.",
          "No dejes sin atender un dolor o una hinchazón, aunque desaparezcan solos.",
          "Terminá los tratamientos que empezaste, como las endodoncias y sus restauraciones.",
        ],
      },
    ],
    servicios: [
      "endodoncia",
      "cirugia-odontologica",
      "radiografias-dentales",
    ],
    icono: Siren,
    urgente: true,
  },
]

export default condiciones

export function getCondicionBySlug(slug: string): Condicion | undefined {
  return condiciones.find((c) => c.slug === slug)
}
