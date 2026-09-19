import type { ComponentType } from "react"
import {
  Baby,
  Smile,
  Sparkles,
  Stethoscope,
  Activity,
  Sparkle,
  ScanLine,
  HeartPulse,
  Layers,
} from "lucide-react"
import type { Seccion } from "./contenido"

export interface Servicio {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  /**
   * Texto para el resultado de búsqueda de Google, cuando `descripcionCorta`
   * queda por debajo de los ~110 caracteres que conviene aprovechar ahí, o se
   * pasa de los ~160. No se muestra en la página.
   */
  metaDescripcion?: string
  descripcionLarga: string
  /** Desarrollo del tema: se muestra debajo de `descripcionLarga`. */
  secciones: Seccion[]
  icono: ComponentType<{ className?: string }>
  destacado?: boolean
  profesionales: number[]
}

const servicios: Servicio[] = [
  {
    id: 1,
    slug: "odontopediatria",
    nombre: "Odontopediatría",
    descripcionCorta:
      "Atención odontológica especializada para niños, en un ambiente pensado para que la visita al dentista sea una experiencia tranquila y sin miedo.",
    metaDescripcion:
      "Odontopediatría en Santiago del Estero: atención para niños desde los 6 años, con paciencia y en un ambiente tranquilo. Los padres pueden acompañar.",
    descripcionLarga:
      "Sabemos que la primera visita al dentista puede generar nervios, especialmente en los más chicos. Por eso creamos un espacio pensado para que los niños se sientan cómodos y seguros desde el momento en que entran al consultorio.\n\nTrabajamos con técnicas de manejo conductual adaptadas a cada edad, explicando cada paso de forma sencilla y amigable. Esto permite que el niño entienda lo que va a suceder, disminuyendo la ansiedad y construyendo una relación de confianza con el profesional.\n\nLa odontopediatría no solo se ocupa de tratar caries o problemas dentales, sino también de educar en hábitos de higiene bucal desde temprana edad. Prevenir es el mejor camino, y cuanto antes empecemos, mejor.",
    secciones: [
      {
        titulo: "¿Cuándo conviene la primera consulta?",
        parrafos: [
          "Atendemos niños a partir de los 6 años. Es una etapa clave: empiezan a caerse los dientes de leche y salen los primeros molares permanentes, que aparecen detrás de los últimos dientes de leche y por eso muchas veces pasan desapercibidos. Revisarlos a tiempo permite protegerlos desde el principio, porque son piezas que van a acompañar a tu hijo toda la vida.",
          "Lo ideal es hacer una consulta de control aunque no haya dolor, y repetirla periódicamente para seguir de cerca el recambio dental.",
        ],
      },
      {
        titulo: "Señales para consultar sin esperar al control",
        items: [
          "Manchas blancas, marrones o negras en los dientes.",
          "Quejas al masticar o molestia con lo frío, lo caliente o lo dulce.",
          "Encías rojas o que sangran al cepillarse.",
          "Un golpe en la boca o un diente que se movió o cambió de color.",
          "Hábitos como chuparse el dedo, morder objetos o respirar por la boca.",
          "Mal aliento que no mejora con la higiene.",
        ],
      },
      {
        titulo: "Cómo es la consulta",
        parrafos: [
          "Vamos al ritmo de cada chico. Usamos la técnica de decir, mostrar y hacer: le explicamos qué vamos a hacer, le mostramos el instrumental de forma amigable y recién después lo hacemos. Los padres pueden entrar y acompañar durante toda la consulta.",
          "Revisamos los dientes, las encías, la mordida y cómo van saliendo las piezas permanentes. Al final te explicamos lo que encontramos, qué conviene hacer y cómo reforzar la higiene en casa.",
        ],
      },
      {
        titulo: "Cuidados en casa que hacen la diferencia",
        items: [
          "Cepillado dos veces por día, con pasta con flúor y con ayuda de un adulto hasta que el chico tenga buena destreza. El de la noche es el más importante.",
          "Hilo dental en los lugares donde los dientes se tocan.",
          "Menos azúcar y bebidas azucaradas, sobre todo entre comidas.",
          "Controles periódicos: detectar una caries chica es mucho más simple que resolver una avanzada.",
        ],
      },
    ],
    icono: Baby,
    profesionales: [1],
  },
  {
    id: 2,
    slug: "protesis-odontologica",
    nombre: "Prótesis odontológica",
    descripcionCorta:
      "Reemplazo de piezas dentales perdidas con prótesis fijas o removibles, recuperando función masticatoria y estética.",
    metaDescripcion:
      "Prótesis dentales fijas y removibles en Santiago del Estero: coronas, puentes y prótesis completas a medida. Consultá tu caso por WhatsApp.",
    descripcionLarga:
      "La pérdida de una o varias piezas dentales no solo afecta la estética de la sonrisa, sino también la función masticatoria y la forma en que hablamos. Las prótesis odontológicas ofrecen una solución efectiva para recuperar ambas cosas, devolviendo la confianza al paciente.\n\nTrabajamos con distintos tipos de prótesis —fijas y removibles— según las necesidades de cada caso. Desde coronas y puentes hasta prótesis completas, evaluamos junto al paciente cuál es la opción más adecuada para lograr el mejor resultado funcional y estético.\n\nCada prótesis se diseña a medida, tomando en cuenta la anatomía bucal, el color y la forma de los dientes naturales, para que el resultado se integre de manera armónica con el resto de la sonrisa.",
    secciones: [
      {
        titulo: "¿Cuándo se indica una prótesis?",
        items: [
          "Falta uno o más dientes y querés recuperar la masticación y la estética.",
          "Un diente está tan destruido que ya no se puede reconstruir y necesita una corona que lo proteja.",
          "Masticar o hablar te resulta incómodo por los espacios vacíos.",
          "Los dientes vecinos empezaron a moverse o inclinarse hacia el hueco.",
        ],
      },
      {
        titulo: "Por qué no conviene dejar un espacio vacío",
        parrafos: [
          "Cuando falta un diente y no se repone, el resto de la boca se acomoda al hueco: los dientes vecinos se inclinan, el diente que está enfrente crece hacia el espacio, la mordida cambia y se vuelve más difícil limpiar. Con el tiempo eso puede traer caries, problemas de encías y desgaste desparejo. Reponer la pieza a tiempo ayuda a que la boca conserve su equilibrio.",
        ],
      },
      {
        titulo: "Prótesis fijas y removibles",
        items: [
          "Fijas: coronas y puentes que se cementan sobre dientes propios o sobre implantes. No se sacan de la boca y son las más cómodas y naturales.",
          "Removibles: parciales o completas, que el paciente retira para higienizarlas. Son la alternativa cuando faltan dientes de apoyo o cuando la situación del paciente no permite una prótesis fija.",
        ],
        parrafos: [
          "Hay dos grandes familias, y la elección depende de cuántos dientes faltan, del hueso disponible y del presupuesto. Siempre que se puede priorizamos una solución fija.",
        ],
      },
      {
        titulo: "Cómo es el proceso",
        parrafos: [
          "Empezamos con un diagnóstico completo y armamos un plan con distintas alternativas y presupuestos, para que puedas decidir con toda la información. Después siguen la preparación de los dientes, la toma de medidas y las pruebas necesarias hasta llegar a la colocación. Cada paso se ajusta para que la prótesis calce bien y se vea natural.",
        ],
      },
      {
        titulo: "Cuidados y mantenimiento",
        items: [
          "Limpiá la prótesis todos los días como si fueran tus propios dientes, y cuidá también las encías y los dientes que la rodean.",
          "Evitá morder objetos duros, como hielo o lapiceras.",
          "Hacé un control por año como mínimo: sirve para revisar el ajuste y detectar a tiempo cualquier problema.",
        ],
      },
    ],
    icono: Smile,
    destacado: true,
    profesionales: [1, 2],
  },
  {
    id: 3,
    slug: "blanqueamiento-dental",
    nombre: "Blanqueamiento dental",
    descripcionCorta:
      "Aclarado profesional del color dental con técnicas seguras y supervisadas, para una sonrisa más luminosa.",
    metaDescripcion:
      "Blanqueamiento dental en Santiago del Estero: aclaramos el color de tus dientes con técnicas seguras y supervisadas. Pedí tu turno por WhatsApp.",
    descripcionLarga:
      "Con el paso del tiempo, los dientes tienden a oscurecerse por factores como la alimentación, el consumo de café, té o tabaco, y el propio envejecimiento. El blanqueamiento dental profesional permite aclarar el tono del esmalte de forma segura y controlada.\n\nA diferencia de los productos de venta libre, el blanqueamiento supervisado por un odontólogo garantiza que se utilicen las concentraciones adecuadas y que el tejido bucal esté protegido durante todo el proceso. Esto minimiza riesgos y maximiza resultados.\n\nEl tratamiento se adapta a cada paciente: podemos realizar sesiones en el consultorio con resultados visibles en poco tiempo, o pautar un protocolo combinado para quienes buscan mayor comodidad. En todos los casos, el seguimiento profesional es clave para mantener una sonrisa luminosa por más tiempo.",
    secciones: [
      {
        titulo: "¿Cuándo es una buena opción?",
        items: [
          "Tus dientes están sanos, pero se oscurecieron con los años o por el mate, el café, el té, el vino tinto o el cigarrillo.",
          "Querés un tono más claro sin desgastar ni modificar la forma de los dientes.",
          "Vas a un evento importante o simplemente querés sentirte mejor con tu sonrisa.",
        ],
      },
      {
        titulo: "Antes de blanquear: la evaluación",
        parrafos: [
          "Primero revisamos tu boca. Si hay caries, encías inflamadas o sarro, conviene resolverlos antes: blanquear sobre esos problemas puede resultar molesto y dar un resultado parejo solo en apariencia. Por eso en muchos casos empezamos con una limpieza dental.",
          "También miramos qué hay en tus dientes. El blanqueamiento actúa sobre el diente natural: no cambia el color de resinas, coronas ni carillas, así que tenerlo en cuenta desde el inicio evita sorpresas con el resultado. Y en situaciones como el embarazo o la lactancia, lo habitual es postergarlo. Lo definimos juntos en la consulta.",
        ],
      },
      {
        titulo: "Qué esperar del tratamiento",
        items: [
          "El resultado depende del color de partida y de cómo responde cada persona: no todas las personas aclaran igual.",
          "La sensibilidad dental es el efecto más común y suele ser pasajera. Te indicamos cómo aliviarla.",
          "Con seguimiento profesional el aclarado se mantiene mejor y, cuando hace falta, se retoca.",
        ],
      },
      {
        titulo: "Cómo hacer que dure más",
        items: [
          "Reducí el consumo de café, mate, vino tinto y tabaco, que son los que más pigmentan.",
          "Cepillate después de las comidas y mantené la limpieza dental profesional al día para sacar manchas superficiales.",
          "Consultanos cuándo conviene un retoque, en lugar de repetir productos de venta libre por tu cuenta.",
        ],
      },
    ],
    icono: Sparkles,
    destacado: true,
    profesionales: [1, 2],
  },
  {
    id: 4,
    slug: "cirugia-odontologica",
    nombre: "Cirugía odontológica",
    descripcionCorta:
      "Procedimientos quirúrgicos como extracciones, cirugía de terceros molares y otras intervenciones que requieren atención especializada.",
    metaDescripcion:
      "Cirugía odontológica en Santiago del Estero: extracciones y muelas del juicio con diagnóstico previo y seguimiento. Pedí tu turno por WhatsApp.",
    descripcionLarga:
      "La cirugía odontológica abarca un conjunto de procedimientos que van desde extracciones simples hasta intervenciones más complejas como la cirugía de terceros molares —popularmente conocidos como muelas del juicio— o la remoción de lesiones bucales.\n\nCada intervención se planifica cuidadosamente en base a un diagnóstico completo, que puede incluir estudios por imágenes para evaluar la posición de las piezas dentales y las estructuras vecinas. Así minimizamos los riesgos y aseguramos una recuperación más predecible.\n\nEl acompañamiento postoperatorio es fundamental: brindamos indicaciones claras y estamos disponibles ante cualquier consulta. Nuestro objetivo es que el paciente transite el proceso con tranquilidad, sabiendo que está en buenas manos.",
    secciones: [
      {
        titulo: "¿Cuándo puede hacer falta una cirugía?",
        items: [
          "Una muela del juicio que no tiene lugar para salir, está atravesada o incluida en el hueso, o te causa dolor o infecciones repetidas.",
          "Un diente tan dañado por caries, fractura o enfermedad de las encías que ya no se puede recuperar.",
          "Un diente retenido que no logró salir y afecta a los vecinos.",
          "Una lesión o quiste en la boca que conviene remover y estudiar.",
        ],
      },
      {
        titulo: "Cómo planificamos la intervención",
        parrafos: [
          "Antes de operar hacemos una evaluación completa. Los estudios por imágenes, como las radiografías que hacemos en el mismo consultorio, nos muestran la posición de la pieza, sus raíces y las estructuras cercanas para elegir la mejor técnica.",
          "También necesitamos conocer tu historia de salud: contanos qué medicamentos tomás, si tenés alergias y si padecés alguna enfermedad, como diabetes, problemas de coagulación o del corazón. Esa información hace que el procedimiento sea más seguro.",
        ],
      },
      {
        titulo: "Durante el procedimiento",
        parrafos: [
          "Trabajamos con anestesia local, así que vas a sentir presión o movimiento, pero no dolor. Te explicamos lo que vamos a hacer antes de empezar y, al terminar, te damos indicaciones claras para que la recuperación transcurra sin complicaciones.",
        ],
      },
      {
        titulo: "Cuidados después de la cirugía",
        items: [
          "Seguí las indicaciones y la medicación que te recetemos, tal como te las expliquemos.",
          "Hielo durante las primeras 24 horas y alimentación blanda y fría los primeros días.",
          "No escupas con fuerza ni tomes con sorbete: podrías perder el coágulo que protege la herida.",
          "Evitá fumar durante la recuperación, porque retrasa la cicatrización.",
          "Consultanos si aparece fiebre, un sangrado que no cede o un dolor que aumenta con los días en lugar de mejorar.",
        ],
      },
    ],
    icono: Stethoscope,
    profesionales: [1],
  },
  {
    id: 5,
    slug: "endodoncia",
    nombre: "Endodoncia",
    descripcionCorta:
      "Tratamiento de conductos para salvar piezas dentales dañadas o infectadas, aliviando el dolor y preservando el diente natural.",
    metaDescripcion:
      "Endodoncia (tratamiento de conducto) en Santiago del Estero: aliviamos el dolor y conservamos tu diente natural. Consultanos por WhatsApp.",
    descripcionLarga:
      "Cuando una caries profunda, una fractura o una infección alcanza la pulpa del diente —el tejido interno donde se encuentran los nervios y vasos sanguíneos—, la endodoncia es el tratamiento indicado para salvar la pieza dental. También conocido como tratamiento de conducto, este procedimiento elimina el tejido dañado del interior del diente, lo desinfecta minuciosamente y lo sella para evitar futuras infecciones.\n\nContrario a lo que muchos piensan, la endodoncia moderna se realiza con anestesia local y técnicas que hacen del procedimiento una experiencia mucho más llevadera de lo que se imagina. El objetivo es aliviar el dolor y preservar el diente natural, evitando así la necesidad de una extracción.\n\nUna vez finalizado el tratamiento, el diente se restaura con una corona u otra reconstrucción que devuelve su funcionalidad y estética. Con los cuidados adecuados, un diente tratado endodónticamente puede durar toda la vida, permitiendo mantener la sonrisa completa y una mordida saludable.",
    secciones: [
      {
        titulo: "Señales de que un diente puede necesitar conducto",
        items: [
          "Dolor espontáneo, que aparece solo o que te despierta a la noche.",
          "Sensibilidad intensa al frío o al calor que sigue un rato después de retirar el estímulo.",
          "Dolor al masticar o al apoyar el diente.",
          "Un diente que se oscureció.",
          "Inflamación o un granito en la encía cerca del diente.",
          "A veces no hay ningún síntoma y el problema se descubre en una radiografía.",
        ],
      },
      {
        titulo: "Cómo es el tratamiento, paso a paso",
        items: [
          "Diagnóstico con radiografía para conocer el estado de la raíz.",
          "Anestesia local: vas a sentir que trabajamos, pero no dolor.",
          "Acceso al interior del diente y limpieza de los conductos, donde estaba el tejido inflamado o infectado.",
          "Desinfección y sellado de los conductos para evitar que las bacterias vuelvan.",
          "Restauración del diente con una resina de alta resistencia o con una corona, según cuánta estructura conserve.",
        ],
        parrafos: [
          "Según el caso, el tratamiento se completa en una o dos sesiones. Estos son los pasos:",
        ],
      },
      {
        titulo: "Después del tratamiento",
        items: [
          "Es normal sentir una molestia leve los primeros días, sobre todo al masticar. Suele mejorar rápido con la medicación que te indiquemos.",
          "Evitá masticar alimentos duros del lado tratado hasta que el diente esté restaurado de forma definitiva.",
          "No demores la restauración final: un diente tratado sin proteger es más propenso a fracturarse.",
        ],
      },
      {
        titulo: "Por qué no conviene esperar",
        parrafos: [
          "Una infección en la raíz no se cura sola: el dolor puede calmarse por un tiempo, pero el problema sigue avanzando y puede terminar en un absceso o en la pérdida de la pieza. Conservar el diente natural, cuando es posible, suele ser la mejor opción para la masticación, la estética y la salud del resto de la boca.",
        ],
      },
    ],
    icono: Activity,
    profesionales: [2],
  },
  {
    id: 6,
    slug: "limpieza-dental",
    nombre: "Limpieza dental",
    descripcionCorta:
      "Eliminación profesional de placa y sarro para mantener encías sanas y prevenir enfermedades bucales.",
    metaDescripcion:
      "Limpieza dental en Santiago del Estero: eliminamos placa y sarro para mantener tus encías sanas y prevenir caries. Atendemos obras sociales.",
    descripcionLarga:
      "La limpieza dental profesional, también llamada profilaxis, es un procedimiento fundamental para mantener una boca sana más allá del cepillado diario. Aunque la higiene en casa sea cuidadosa, la placa bacteriana se acumula en zonas de difícil acceso y termina endureciéndose formando sarro, que solo puede ser eliminado con instrumentos profesionales.\n\nDurante la limpieza, eliminamos el sarro de la superficie de los dientes y por debajo de la línea de encía, donde el cepillo no llega. Luego pulimos las piezas para dejar una superficie lisa que dificulte la nueva acumulación de placa. Es un procedimiento rápido, indoloro y con resultados visibles: los dientes lucen más limpios y brillantes.\n\nRecomendamos realizar una limpieza profesional al menos una vez al año, aunque la frecuencia ideal depende de cada paciente. Además de mejorar la estética de la sonrisa, este hábito previene enfermedades como gingivitis y periodontitis, que pueden tener consecuencias más serias si no se tratan a tiempo.",
    secciones: [
      {
        titulo: "¿Cuándo conviene hacerse una limpieza?",
        items: [
          "Te sangran las encías al cepillarte o al usar hilo dental.",
          "Tenés mal aliento que no se va con el cepillado.",
          "Notás sarro, esa capa dura y rugosa que se acumula sobre todo detrás de los dientes de abajo.",
          "Tenés manchas superficiales por té, café, mate o cigarrillo.",
          "Vas a hacerte un blanqueamiento y querés partir de dientes limpios.",
          "Hace tiempo que no te hacés un control.",
        ],
      },
      {
        titulo: "Qué incluye la limpieza",
        items: [
          "Revisión previa de dientes y encías, para saber en qué estado están.",
          "Eliminación del sarro y de la placa, sobre la superficie de los dientes y por debajo de la línea de la encía.",
          "Pulido para dejar el esmalte liso y que la placa se adhiera menos.",
          "Indicaciones de higiene pensadas para tu boca: técnica de cepillado, uso del hilo dental y frecuencia de los controles.",
        ],
      },
      {
        titulo: "Qué esperar durante y después",
        parrafos: [
          "La limpieza no tiene por qué doler. Si tus encías están inflamadas por el sarro, es normal que sangren un poco durante el procedimiento y quizás ese mismo día: se desinflaman rápido una vez que se elimina la causa. Algunas personas sienten los dientes más sensibles por un tiempo breve, algo que suele pasar solo.",
          "Después de la limpieza el diente queda limpio y en su tono natural. Si además querés aclarar el color, para eso existe el blanqueamiento dental.",
        ],
      },
      {
        titulo: "Cómo mantener los resultados en casa",
        items: [
          "Cepillate al menos dos veces por día durante dos minutos, con un cepillo de cerdas suaves y pasta con flúor.",
          "Usá hilo dental todos los días: es lo único que limpia entre los dientes.",
          "Cambiá el cepillo cada tres meses o antes si las cerdas se abren.",
          "Respetá la frecuencia de controles que te indiquemos.",
        ],
      },
    ],
    icono: Sparkle,
    profesionales: [2],
  },
  {
    id: 7,
    slug: "radiografias-dentales",
    nombre: "Radiografías dentales",
    descripcionCorta:
      "Estudios radiográficos para un diagnóstico preciso y una planificación de tratamiento más segura.",
    metaDescripcion:
      "Radiografías dentales en Santiago del Estero para un diagnóstico preciso y una planificación de tratamiento más segura. Consultanos por WhatsApp.",
    descripcionLarga:
      "Las radiografías dentales son una herramienta indispensable en la odontología moderna. Permiten ver lo que el ojo no puede detectar en un examen clínico convencional: caries entre los dientes, infecciones en la raíz, quistes, dientes retenidos, pérdida ósea y la posición de las muelas del juicio, entre otras condiciones.\n\nContamos con equipos de radiografía digital que reducen significativamente la exposición a la radiación en comparación con las radiografías tradicionales. Las imágenes se obtienen al instante, lo que agiliza el diagnóstico y nos permite explicarle al paciente lo que vemos en el momento, favoreciendo la comprensión y la toma de decisiones compartida.\n\nRealizamos los estudios radiográficos que cada caso requiere, desde radiografías periapicales de sectores específicos hasta panorámicas que brindan una visión completa de la boca. Tener un diagnóstico preciso es el primer paso para un tratamiento seguro y efectivo.",
    secciones: [
      {
        titulo: "Tipos de radiografía",
        items: [
          "Periapical: muestra uno o pocos dientes completos, con la raíz y el hueso que los rodea. Es la más usada para estudiar un diente con dolor o antes de una endodoncia.",
          "Panorámica: muestra ambos maxilares, todos los dientes y la articulación de la mandíbula en una sola imagen. Sirve para tener una visión general de la boca y, por ejemplo, evaluar las muelas del juicio.",
        ],
      },
      {
        titulo: "¿Para qué se indica una radiografía?",
        items: [
          "Detectar caries entre los dientes o debajo de una restauración, donde no se ven a simple vista.",
          "Estudiar la raíz de un diente con dolor o con sospecha de infección.",
          "Evaluar la pérdida de hueso por enfermedad de las encías.",
          "Planificar una cirugía, como la extracción de una muela del juicio.",
          "Planificar una prótesis o una reconstrucción y controlar cómo evolucionó un tratamiento anterior.",
        ],
      },
      {
        titulo: "Cómo es el estudio",
        parrafos: [
          "Es rápido e indoloro y se hace en el mismo consultorio. La imagen digital aparece al instante, así que podemos mostrártela y explicarte qué vemos en ese momento, en lugar de darte un informe para llevar a otro lado.",
          "Si tenés radiografías anteriores, traelas: comparar imágenes nos ayuda a ver cómo cambió la situación con el tiempo.",
        ],
      },
      {
        titulo: "Seguridad y cuidados",
        parrafos: [
          "Con el equipo digital la dosis de radiación es baja, y solo indicamos las radiografías que tu caso necesita. Si estás embarazada o creés que podés estarlo, avisanos antes del estudio para que evaluemos si conviene hacerlo o esperar.",
        ],
      },
    ],
    icono: ScanLine,
    profesionales: [2],
  },
  {
    id: 8,
    slug: "odontologia-general",
    nombre: "Odontología general",
    descripcionCorta:
      "Atención odontológica integral: control, diagnóstico y tratamientos preventivos para el cuidado diario de tu salud bucal.",
    metaDescripcion:
      "Odontología general en Santiago del Estero: controles, diagnóstico y prevención para cuidar tu salud bucal. Atendemos con turno y obras sociales.",
    descripcionLarga:
      "La odontología general es la puerta de entrada al cuidado de la salud bucal. Abarca desde los controles de rutina y el diagnóstico temprano de problemas dentales hasta la realización de tratamientos básicos y la derivación oportuna a especialistas cuando es necesario. Es la base sobre la que se construye una sonrisa sana.\n\nEn cada consulta de odontología general realizamos una revisión completa: evaluamos el estado de los dientes, encías, tejidos blandos y la articulación temporomandibular. También hacemos hincapié en la prevención, brindando pautas personalizadas de higiene y hábitos saludables según la edad, el estilo de vida y los factores de riesgo de cada paciente.\n\nNuestro enfoque es integral: no tratamos solo el síntoma, sino que buscamos entender la causa y acompañar al paciente en el cuidado de su salud bucal a largo plazo. Creemos que una buena relación con el odontólogo, basada en la confianza y la comunicación, es clave para mantener una sonrisa sana durante toda la vida.",
    secciones: [
      {
        titulo: "¿Cuándo conviene consultar, aunque no duela nada?",
        items: [
          "Pasó más de un año desde tu último control.",
          "Tus encías sangran, están inflamadas o notás mal aliento.",
          "Sentís sensibilidad al frío, al calor o a los dulces.",
          "Detectás una mancha, un diente que cambió de color o una zona que te molesta al masticar.",
          "Vas a empezar un tratamiento más complejo y querés un diagnóstico completo antes.",
          "Simplemente querés saber cómo está tu boca y cómo cuidarla mejor.",
        ],
      },
      {
        titulo: "Qué revisamos en un control",
        items: [
          "Dientes: buscamos caries, fracturas, desgaste y el estado de las restauraciones que ya tenés.",
          "Encías y hueso: evaluamos si hay inflamación, sarro o señales de enfermedad periodontal.",
          "Tejidos blandos: lengua, mejillas, paladar y labios, para detectar a tiempo cualquier lesión.",
          "Mordida y articulación de la mandíbula: ruidos, dolor o desgaste que apunten a bruxismo u otros problemas.",
          "Si hace falta, sumamos una radiografía para ver lo que no se ve a simple vista.",
        ],
      },
      {
        titulo: "Qué resolvemos en la consulta general",
        items: [
          "Caries y restauraciones con resina.",
          "Limpieza dental y tratamiento de encías inflamadas.",
          "Alivio de dolores y molestias dentales.",
          "Indicaciones personalizadas de higiene y hábitos.",
          "Derivación con el profesional adecuado cuando el caso lo requiere.",
        ],
      },
      {
        titulo: "Un plan claro, sin sorpresas",
        parrafos: [
          "Con el diagnóstico armamos un plan de tratamiento con distintas alternativas y presupuestos. Te explicamos cada una para que puedas evaluarlas y definir juntos el orden de prioridades. La idea es que sepas qué tenés, qué conviene hacer primero y por qué.",
        ],
      },
    ],
    icono: HeartPulse,
    profesionales: [2],
  },
  {
    id: 9,
    slug: "reconstruccion-dental",
    nombre: "Reconstrucción dental",
    descripcionCorta:
      "Recuperación de dientes dañados o desgastados con resinas, coronas y otras técnicas restaurativas, devolviendo forma, función y estética a tu sonrisa.",
    metaDescripcion:
      "Reconstrucción dental en Santiago del Estero: resinas y coronas para recuperar dientes rotos o dañados con un resultado natural. Pedí tu turno.",
    descripcionLarga:
      "Los dientes pueden dañarse por caries avanzadas, fracturas, desgaste o traumatismos, afectando tanto su función como su aspecto. La reconstrucción dental permite recuperar la forma, resistencia y estética de la pieza afectada, sin necesidad de llegar a una extracción en la mayoría de los casos.\n\nSegún el grado de daño, trabajamos con distintas técnicas: desde restauraciones con resina compuesta para reparar fracturas o caries, hasta coronas de recubrimiento total cuando la estructura dental remanente es más limitada. En cada caso, elegimos el material y la técnica que mejor se adapten a la pieza y a la mordida del paciente.\n\nMás allá de resolver el problema puntual, buscamos que el resultado se integre de forma natural con el resto de la dentadura, cuidando el color, la forma y el brillo para que la reconstrucción sea prácticamente imperceptible.",
    secciones: [
      {
        titulo: "¿Cuándo se indica una reconstrucción?",
        items: [
          "Una caries dejó un agujero que ya no se puede resolver con una restauración chica.",
          "Un diente se rompió o se fracturó por un golpe o por morder algo duro.",
          "El esmalte se desgastó por bruxismo, por acidez o por el paso del tiempo.",
          "Una restauración vieja se rompió, se despegó o se filtró.",
          "Un diente con endodoncia necesita recuperar su forma y quedar protegido.",
        ],
      },
      {
        titulo: "Resina o corona: cómo decidimos",
        parrafos: [
          "La resina compuesta rellena y reconstruye la parte dañada cuando queda buena estructura del diente. La corona, en cambio, abraza el diente entero y se elige cuando el daño es mayor y hay que devolverle fuerza para masticar.",
          "Para elegir tenemos en cuenta cuánto tejido sano queda, dónde está el diente en la boca, cuánta fuerza recibe al masticar y qué resultado estético buscás. Siempre te explicamos las alternativas antes de empezar.",
        ],
      },
      {
        titulo: "El resultado: que no se note",
        parrafos: [
          "Elegimos el color del material comparándolo con tus dientes vecinos y trabajamos la forma, la textura y el brillo para que la reconstrucción se integre con el resto de la sonrisa. Buscamos que nadie note cuál es el diente que fue tratado.",
        ],
      },
      {
        titulo: "Cuidados para que dure",
        items: [
          "Cepillate y usá hilo dental como siempre: una reconstrucción no evita que aparezcan nuevas caries en los bordes.",
          "No muerdas hielo, lapiceras ni objetos duros, ni uses los dientes para abrir envases.",
          "Si apretás o rechinás los dientes, consultanos por una placa de descarga que proteja el trabajo.",
          "Hacé controles periódicos: revisar los bordes de la restauración permite corregir un problema antes de que crezca.",
        ],
      },
    ],
    icono: Layers,
    destacado: true,
    profesionales: [1, 2],
  },
]

export default servicios

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug)
}
