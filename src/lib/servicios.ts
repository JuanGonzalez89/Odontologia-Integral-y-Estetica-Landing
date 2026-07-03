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
} from "lucide-react"

export interface Servicio {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  descripcionLarga: string
  icono: ComponentType<{ className?: string }>
}

const servicios: Servicio[] = [
  {
    id: 1,
    slug: "odontopediatria",
    nombre: "Odontopediatría",
    descripcionCorta:
      "Atención odontológica especializada para niños, en un ambiente pensado para que la visita al dentista sea una experiencia tranquila y sin miedo.",
    descripcionLarga:
      "Sabemos que la primera visita al dentista puede generar nervios, especialmente en los más chicos. Por eso creamos un espacio pensado para que los niños se sientan cómodos y seguros desde el momento en que entran al consultorio.\n\nTrabajamos con técnicas de manejo conductual adaptadas a cada edad, explicando cada paso de forma sencilla y amigable. Esto permite que el niño entienda lo que va a suceder, disminuyendo la ansiedad y construyendo una relación de confianza con el profesional.\n\nLa odontopediatría no solo se ocupa de tratar caries o problemas dentales, sino también de educar en hábitos de higiene bucal desde temprana edad. Prevenir es el mejor camino, y cuanto antes empecemos, mejor.",
    icono: Baby,
  },
  {
    id: 2,
    slug: "protesis-odontologica",
    nombre: "Prótesis odontológica",
    descripcionCorta:
      "Reemplazo de piezas dentales perdidas con prótesis fijas o removibles, recuperando función masticatoria y estética.",
    descripcionLarga:
      "La pérdida de una o varias piezas dentales no solo afecta la estética de la sonrisa, sino también la función masticatoria y la forma en que hablamos. Las prótesis odontológicas ofrecen una solución efectiva para recuperar ambas cosas, devolviendo la confianza al paciente.\n\nTrabajamos con distintos tipos de prótesis —fijas y removibles— según las necesidades de cada caso. Desde coronas y puentes hasta prótesis completas, evaluamos junto al paciente cuál es la opción más adecuada para lograr el mejor resultado funcional y estético.\n\nCada prótesis se diseña a medida, tomando en cuenta la anatomía bucal, el color y la forma de los dientes naturales, para que el resultado se integre de manera armónica con el resto de la sonrisa.",
    icono: Smile,
  },
  {
    id: 3,
    slug: "blanqueamiento-dental",
    nombre: "Blanqueamiento dental",
    descripcionCorta:
      "Aclarado profesional del color dental con técnicas seguras y supervisadas, para una sonrisa más luminosa.",
    descripcionLarga:
      "Con el paso del tiempo, los dientes tienden a oscurecerse por factores como la alimentación, el consumo de café, té o tabaco, y el propio envejecimiento. El blanqueamiento dental profesional permite aclarar el tono del esmalte de forma segura y controlada.\n\nA diferencia de los productos de venta libre, el blanqueamiento supervisado por un odontólogo garantiza que se utilicen las concentraciones adecuadas y que el tejido bucal esté protegido durante todo el proceso. Esto minimiza riesgos y maximiza resultados.\n\nEl tratamiento se adapta a cada paciente: podemos realizar sesiones en el consultorio con resultados visibles en poco tiempo, o pautar un protocolo combinado para quienes buscan mayor comodidad. En todos los casos, el seguimiento profesional es clave para mantener una sonrisa luminosa por más tiempo.",
    icono: Sparkles,
  },
  {
    id: 4,
    slug: "cirugia-odontologica",
    nombre: "Cirugía odontológica",
    descripcionCorta:
      "Procedimientos quirúrgicos como extracciones, cirugía de terceros molares y otras intervenciones que requieren atención especializada.",
    descripcionLarga:
      "La cirugía odontológica abarca un conjunto de procedimientos que van desde extracciones simples hasta intervenciones más complejas como la cirugía de terceros molares —popularmente conocidos como muelas del juicio— o la remoción de lesiones bucales.\n\nCada intervención se planifica cuidadosamente en base a un diagnóstico completo, que puede incluir estudios por imágenes para evaluar la posición de las piezas dentales y las estructuras vecinas. Así minimizamos los riesgos y aseguramos una recuperación más predecible.\n\nEl acompañamiento postoperatorio es fundamental: brindamos indicaciones claras y estamos disponibles ante cualquier consulta. Nuestro objetivo es que el paciente transite el proceso con tranquilidad, sabiendo que está en buenas manos.",
    icono: Stethoscope,
  },
  {
    id: 5,
    slug: "endodoncia",
    nombre: "Endodoncia",
    descripcionCorta:
      "Tratamiento de conductos para salvar piezas dentales dañadas o infectadas, aliviando el dolor y preservando el diente natural.",
    descripcionLarga:
      "Cuando una caries profunda, una fractura o una infección alcanza la pulpa del diente —el tejido interno donde se encuentran los nervios y vasos sanguíneos—, la endodoncia es el tratamiento indicado para salvar la pieza dental. También conocido como tratamiento de conducto, este procedimiento elimina el tejido dañado del interior del diente, lo desinfecta minuciosamente y lo sella para evitar futuras infecciones.\n\nContrario a lo que muchos piensan, la endodoncia moderna se realiza con anestesia local y técnicas que hacen del procedimiento una experiencia mucho más llevadera de lo que se imagina. El objetivo es aliviar el dolor y preservar el diente natural, evitando así la necesidad de una extracción.\n\nUna vez finalizado el tratamiento, el diente se restaura con una corona u otra reconstrucción que devuelve su funcionalidad y estética. Con los cuidados adecuados, un diente tratado endodónticamente puede durar toda la vida, permitiendo mantener la sonrisa completa y una mordida saludable.",
    icono: Activity,
  },
  {
    id: 6,
    slug: "limpieza-dental",
    nombre: "Limpieza dental",
    descripcionCorta:
      "Eliminación profesional de placa y sarro para mantener encías sanas y prevenir enfermedades bucales.",
    descripcionLarga:
      "La limpieza dental profesional, también llamada profilaxis, es un procedimiento fundamental para mantener una boca sana más allá del cepillado diario. Aunque la higiene en casa sea cuidadosa, la placa bacteriana se acumula en zonas de difícil acceso y termina endureciéndose formando sarro, que solo puede ser eliminado con instrumentos profesionales.\n\nDurante la limpieza, eliminamos el sarro de la superficie de los dientes y por debajo de la línea de encía, donde el cepillo no llega. Luego pulimos las piezas para dejar una superficie lisa que dificulte la nueva acumulación de placa. Es un procedimiento rápido, indoloro y con resultados visibles: los dientes lucen más limpios y brillantes.\n\nRecomendamos realizar una limpieza profesional al menos una vez al año, aunque la frecuencia ideal depende de cada paciente. Además de mejorar la estética de la sonrisa, este hábito previene enfermedades como gingivitis y periodontitis, que pueden tener consecuencias más serias si no se tratan a tiempo.",
    icono: Sparkle,
  },
  {
    id: 7,
    slug: "radiografias-dentales",
    nombre: "Radiografías dentales",
    descripcionCorta:
      "Estudios radiográficos para un diagnóstico preciso y una planificación de tratamiento más segura.",
    descripcionLarga:
      "Las radiografías dentales son una herramienta indispensable en la odontología moderna. Permiten ver lo que el ojo no puede detectar en un examen clínico convencional: caries entre los dientes, infecciones en la raíz, quistes, dientes retenidos, pérdida ósea y la posición de las muelas del juicio, entre otras condiciones.\n\nContamos con equipos de radiografía digital que reducen significativamente la exposición a la radiación en comparación con las radiografías tradicionales. Las imágenes se obtienen al instante, lo que agiliza el diagnóstico y nos permite explicarle al paciente lo que vemos en el momento, favoreciendo la comprensión y la toma de decisiones compartida.\n\nRealizamos los estudios radiográficos que cada caso requiere, desde radiografías periapicales de sectores específicos hasta panorámicas que brindan una visión completa de la boca. Tener un diagnóstico preciso es el primer paso para un tratamiento seguro y efectivo.",
    icono: ScanLine,
  },
  {
    id: 8,
    slug: "odontologia-general",
    nombre: "Odontología general",
    descripcionCorta:
      "Atención odontológica integral: control, diagnóstico y tratamientos preventivos para el cuidado diario de tu salud bucal.",
    descripcionLarga:
      "La odontología general es la puerta de entrada al cuidado de la salud bucal. Abarca desde los controles de rutina y el diagnóstico temprano de problemas dentales hasta la realización de tratamientos básicos y la derivación oportuna a especialistas cuando es necesario. Es la base sobre la que se construye una sonrisa sana.\n\nEn cada consulta de odontología general realizamos una revisión completa: evaluamos el estado de los dientes, encías, tejidos blandos y la articulación temporomandibular. También hacemos hincapié en la prevención, brindando pautas personalizadas de higiene y hábitos saludables según la edad, el estilo de vida y los factores de riesgo de cada paciente.\n\nNuestro enfoque es integral: no tratamos solo el síntoma, sino que buscamos entender la causa y acompañar al paciente en el cuidado de su salud bucal a largo plazo. Creemos que una buena relación con el odontólogo, basada en la confianza y la comunicación, es clave para mantener una sonrisa sana durante toda la vida.",
    icono: HeartPulse,
  },
]

export default servicios

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug)
}
