export interface Condicion {
  id: number
  slug: string
  nombre: string
  descripcionCorta: string
  descripcionLarga: string
}

const condiciones: Condicion[] = [
  {
    id: 1,
    slug: "dolor-de-muela",
    nombre: "Dolor de muela",
    descripcionCorta:
      "El dolor de muela es una de las molestias bucales más comunes y puede tener muchas causas, desde una caries hasta una infección.",
    descripcionLarga:
      "El dolor de muela puede manifestarse de muchas formas: una molestia leve y constante, un dolor punzante al masticar, sensibilidad al frío o al calor, o incluso un dolor que se irradia hacia la oreja o la mandíbula. Las causas más frecuentes son caries profundas, infecciones en la raíz del diente, abscesos, fracturas dentales o problemas en las encías.\n\nSi el dolor aparece de forma repentina, podés aliviarlo temporalmente con analgésicos de venta libre, evitar masticar del lado afectado y mantener una buena higiene bucal. Sin embargo, estos son paliativos temporales: el dolor de muela no suele desaparecer por sí solo porque indica que algo está pasando en el diente o en los tejidos que lo rodean.\n\nLo más importante es que un odontólogo evalúe la causa para determinar el tratamiento adecuado, que puede ir desde una obturación (empaste) hasta un tratamiento de conducto o una extracción. Ignorar el dolor puede agravar el problema. Si estás con dolor de muela, no esperes: contactanos para que te demos un turno lo antes posible.",
  },
  {
    id: 2,
    slug: "caries",
    nombre: "Caries",
    descripcionCorta:
      "La caries es una lesión que destruye el esmalte dental y puede avanzar hasta afectar las capas más profundas del diente.",
    descripcionLarga:
      "La caries es una enfermedad que se produce cuando las bacterias presentes en la boca transforman los azúcares de los alimentos en ácidos que atacan el esmalte dental. Con el tiempo, ese ataque continuo va desmineralizando el esmalte hasta crear una cavidad. Si no se trata, la caries puede avanzar hacia la dentina y llegar hasta la pulpa del diente, causando dolor e infección.\n\nEn sus etapas iniciales, la caries puede no presentar síntomas evidentes. Por eso es tan importante asistir a los controles odontológicos de rutina, donde podemos detectarla antes de que sea visible o cause dolor. Cuando avanza, puede manifestarse como sensibilidad al frío, al calor o a los dulces, manchas blancas o marrones en el diente, y finalmente dolor.\n\nEl tratamiento depende del estadio de la caries. Si es incipiente, puede tratarse con flúor o remineralización. Si ya hay cavidad, se realiza una obturación (empaste). Cuando la caries alcanza la pulpa, puede requerir endodoncia. La mejor estrategia sigue siendo la prevención: cepillado adecuado, uso de hilo dental, dieta baja en azúcares y visitas periódicas al odontólogo.",
  },
  {
    id: 3,
    slug: "absceso-dental",
    nombre: "Absceso dental",
    descripcionCorta:
      "Un absceso dental es una acumulación de pus causada por una infección bacteriana, que requiere atención odontológica urgente.",
    descripcionLarga:
      "Un absceso dental es una infección bacteriana que genera una acumulación de pus en el interior del diente o en las encías. Puede originarse a partir de una caries profunda, una fractura dental, una enfermedad periodontal avanzada o un tratamiento de conducto incompleto. Los síntomas típicos incluyen dolor intenso y pulsátil, sensibilidad al calor y al frío, hinchazón en la cara o la mandíbula, fiebre, mal sabor en la boca y, en algunos casos, dificultad para abrir la boca o tragar.\n\nEl absceso dental es una emergencia odontológica. Si no se trata a tiempo, la infección puede propagarse a otras partes del cuerpo, con consecuencias graves para la salud general. Mientras llegás al consultorio, podés aplicar frío del lado afectado para reducir la hinchazón y tomar analgésicos para el dolor, pero esto no reemplaza la atención profesional.\n\nEl tratamiento consiste en drenar el pus, eliminar la fuente de la infección y, en la mayoría de los casos, recetar antibióticos para controlar la propagación bacteriana. Dependiendo del caso, puede ser necesaria una endodoncia o una extracción. Si tenés síntomas de absceso, contactanos urgente.",
  },
  {
    id: 4,
    slug: "gingivitis",
    nombre: "Gingivitis",
    descripcionCorta:
      "La gingivitis es la inflamación de las encías causada por la acumulación de placa bacteriana, y es reversible con tratamiento profesional.",
    descripcionLarga:
      "La gingivitis es una forma leve y temprana de enfermedad periodontal. Se produce cuando la placa bacteriana se acumula en la línea de las encías y no se elimina con el cepillado y el hilo dental. Las bacterias liberan toxinas que irritan el tejido gingival, provocando inflamación. Los signos más comunes son encías enrojecidas, inflamadas, que sangran fácilmente al cepillarse o al usar hilo dental. También puede haber mal aliento persistente.\n\nLa buena noticia es que la gingivitis es reversible. Con una limpieza profesional para eliminar la placa y el sarro acumulados, sumada a una mejora en la higiene bucal diaria, las encías suelen recuperarse en pocas semanas. Si no se trata, la gingivitis puede evolucionar hacia periodontitis, una enfermedad más grave que afecta los tejidos de soporte del diente y puede llevar a la pérdida dental.\n\nLa prevención es clave: cepillado correcto, uso diario de hilo dental y visitas regulares al odontólogo para limpiezas profesionales. Si notás que tus encías sangran al cepillarte, no lo ignores. Consultanos para evaluar el estado de tus encías.",
  },
  {
    id: 5,
    slug: "bruxismo",
    nombre: "Bruxismo",
    descripcionCorta:
      "El bruxismo es el hábito involuntario de apretar o rechinar los dientes, que suele ocurrir durante el sueño y puede desgastar las piezas dentales.",
    descripcionLarga:
      "El bruxismo es una condición en la que la persona aprieta o rechina los dientes de forma involuntaria, generalmente mientras duerme. Muchas personas no saben que lo padecen hasta que alguien se los menciona o comienzan a notar síntomas como dolor mandibular al despertar, sensibilidad dental, dolores de cabeza frecuentes, desgaste visible del esmalte, o ruidos en la articulación de la mandíbula al abrir o cerrar la boca.\n\nLas causas del bruxismo son variadas: estrés y ansiedad, problemas de alineación dental, trastornos del sueño, o incluso ciertos medicamentos. Con el tiempo, el desgaste dental puede volverse significativo, fracturar piezas dentales o provocar trastornos de la articulación temporomandibular (ATM).\n\nEl tratamiento más común para proteger los dientes del desgaste es la confección de una placa de descarga o férula oclusal, que se usa durante la noche y absorbe la fuerza del rechinamiento. También pueden recomendarse técnicas de relajación, fisioterapia mandibular o, en algunos casos, tratamientos para alinear la mordida. Si sospechás que podés tener bruxismo, consultanos para evaluarlo.",
  },
  {
    id: 6,
    slug: "dientes-sensibles",
    nombre: "Dientes sensibles",
    descripcionCorta:
      "La sensibilidad dental es una molestia aguda y temporaria que aparece cuando los dientes se exponen a estímulos como frío, calor o dulces.",
    descripcionLarga:
      "La sensibilidad dental ocurre cuando el esmalte que protege la corona del diente se desgasta, o cuando la encía se retrae y deja expuesta la dentina, la capa interna del diente. La dentina contiene microscópicos túbulos que conectan con el nervio, y al quedar expuestos, estímulos como el frío de una bebida, el calor del mate, el aire frío o los alimentos dulces provocan un dolor agudo y pasajero.\n\nLas causas más frecuentes son el cepillado demasiado agresivo, el consumo frecuente de alimentos y bebidas ácidas, el reflujo gástrico, el desgaste por bruxismo, las caries o las encías retraídas por enfermedad periodontal. También puede aparecer después de procedimientos como una limpieza o un blanqueamiento dental, aunque en esos casos suele ser temporaria.\n\nExisten pastas dentales específicas para dientes sensibles, y el odontólogo puede aplicar barnices de flúor o selladores para reducir la sensibilidad. El tratamiento de fondo depende de la causa: corregir la técnica de cepillado, tratar caries, o abordar el reflujo o el bruxismo si están involucrados. Si el frío o el calor te molesta, consultanos para encontrar la causa y la solución.",
  },
  {
    id: 7,
    slug: "dientes-desalineados-apinados",
    nombre: "Dientes desalineados o apiñados",
    descripcionCorta:
      "Los dientes desalineados o apiñados afectan la estética de la sonrisa y pueden dificultar la higiene bucal, favoreciendo caries y enfermedades de encías.",
    descripcionLarga:
      "Cuando los dientes no están alineados correctamente o hay falta de espacio en la arcada dental, se produce apiñamiento. Esto puede deberse a factores genéticos, pérdida prematura de dientes de leche, hábitos como succión del dedo en la infancia, o simplemente a que el tamaño de los dientes no coincide con el tamaño de la mandíbula. Los dientes pueden aparecer montados unos sobre otros, girados o separados de forma irregular.\n\nAdemás de la cuestión estética, los dientes apiñados dificultan la higiene bucal diaria: es más difícil pasar el hilo dental y el cepillo no llega a todas las superficies. Esto aumenta el riesgo de caries, gingivitis y mal aliento. También pueden provocar desgaste irregular de los dientes, problemas en la articulación mandibular y dolores de cabeza.\n\nEl tratamiento depende del grado de apiñamiento y la edad del paciente. Puede incluir ortodoncia (brackets tradicionales, alineadores transparentes o aparatos removibles) y, en algunos casos, extracción de piezas para liberar espacio. La evaluación temprana, especialmente en niños y adolescentes, permite planificar el tratamiento de forma más efectiva. Si te preocupa la alineación de tus dientes o los de tu hijo, consultanos.",
  },
  {
    id: 8,
    slug: "infeccion-dental",
    nombre: "Infección dental",
    descripcionCorta:
      "Una infección dental es una condición seria causada por bacterias que afectan el interior del diente o los tejidos circundantes.",
    descripcionLarga:
      "Una infección dental ocurre cuando bacterias logran penetrar las defensas del diente o de las encías y se multiplican, generando una respuesta inflamatoria del organismo. Las infecciones pueden originarse en una caries no tratada, una fractura dental, un tratamiento de conducto incompleto o una enfermedad periodontal avanzada. Los síntomas incluyen dolor intenso y constante, hinchazón en la cara o el cuello, fiebre, ganglios inflamados, mal aliento, sabor desagradable en la boca y, en casos graves, dificultad para respirar o tragar.\n\nLas infecciones dentales no se resuelven por sí solas y requieren tratamiento profesional. Si no se tratan, pueden propagarse a otras partes del cuerpo, incluyendo el cuello, la mandíbula e incluso el torrente sanguíneo, con consecuencias potencialmente graves. Mientras llegás al consultorio, podés aplicar frío para reducir la hinchazón y tomar analgésicos para el dolor, pero no intentes drenar el absceso por tu cuenta ni apliques calor.\n\nEl tratamiento consiste en eliminar la fuente de la infección, que puede implicar endodoncia, drenaje del absceso, extracción del diente afectado y antibióticos cuando sea necesario. Si presentás síntomas de infección dental, contactanos de inmediato.",
  },
]

export default condiciones

export function getCondicionBySlug(slug: string): Condicion | undefined {
  return condiciones.find((c) => c.slug === slug)
}
