import type { Pregunta } from "./faq"

/**
 * Preguntas frecuentes de cada condición, indexadas por slug.
 *
 * Son respuestas educativas y generales: no reemplazan un diagnóstico. Un
 * cambio de criterio clínico se hace con el odontólogo, no desde acá.
 *
 * Una condición sin entrada acá simplemente no muestra la sección.
 */
const faqCondiciones: Record<string, Pregunta[]> = {
  "dolor-de-muela": [
    {
      id: 1,
      pregunta: "¿Puedo esperar a que se me pase el dolor de muela?",
      respuesta:
        "No conviene. Un dolor que se calma con analgésicos suele volver, porque la causa (una caries, una infección o una fractura) sigue ahí. A veces el dolor desaparece porque el nervio del diente dejó de responder, y eso no significa que el problema esté resuelto.",
    },
    {
      id: 2,
      pregunta: "¿Atienden urgencias por dolor de muela?",
      respuesta:
        "Sí. Escribinos por WhatsApp contándonos qué sentís y te damos un turno lo antes posible dentro de nuestro horario de atención.",
    },
    {
      id: 3,
      pregunta: "¿Cuándo el dolor de muela es una emergencia?",
      respuesta:
        "Si tenés hinchazón en la cara, fiebre, dificultad para abrir la boca o para tragar. Con dificultad para respirar, andá directamente a una guardia médica.",
    },
  ],

  caries: [
    {
      id: 1,
      pregunta: "¿La caries siempre duele?",
      respuesta:
        "No. En las etapas iniciales suele no doler y solo se detecta en un control. Cuando aparece el dolor, la caries ya suele estar avanzada, por eso conviene revisarse aunque no haya síntomas.",
    },
    {
      id: 2,
      pregunta: "¿Una caries se puede revertir?",
      respuesta:
        "Solo en su etapa más inicial, cuando hay una mancha blanca en el esmalte y todavía no se formó una cavidad. En ese caso se puede frenar con flúor y con mejores hábitos de higiene. Cuando ya hay un agujero, hay que restaurar el diente.",
    },
    {
      id: 3,
      pregunta: "¿Cada cuánto conviene hacerse un control para detectarlas a tiempo?",
      respuesta:
        "Una vez al año como mínimo, y lo ideal es cada seis meses. Así podemos encontrar las caries cuando todavía son chicas y el arreglo es simple.",
    },
  ],

  "absceso-dental": [
    {
      id: 1,
      pregunta: "¿Un absceso dental se cura solo con antibióticos?",
      respuesta:
        "No. Los antibióticos ayudan a controlar la infección, pero no eliminan su origen. Si no se trata la causa (con una endodoncia o una extracción), el absceso suele volver.",
    },
    {
      id: 2,
      pregunta: "¿Es una urgencia?",
      respuesta:
        "Sí. Un absceso puede extenderse a la cara y al cuello. Escribinos por WhatsApp y te damos un turno lo antes posible. Si tenés dificultad para respirar o para tragar, o la hinchazón crece rápido, andá a una guardia médica de inmediato.",
    },
    {
      id: 3,
      pregunta: "¿Se puede salvar el diente?",
      respuesta:
        "En muchos casos sí, con una endodoncia. Depende de cuánto se dañó el diente y de si todavía tiene estructura suficiente para restaurarlo. Eso lo definimos con el examen y la radiografía.",
    },
  ],

  gingivitis: [
    {
      id: 1,
      pregunta: "¿Es normal que me sangren las encías al cepillarme?",
      respuesta:
        "Es común, pero no es normal: una encía sana no sangra. Casi siempre es una señal de inflamación por placa o sarro, y mejora con una limpieza profesional y una buena higiene.",
    },
    {
      id: 2,
      pregunta: "¿La gingivitis se cura?",
      respuesta:
        "Sí, es reversible. Con una limpieza profesional y mejor higiene en casa, las encías suelen recuperarse en pocas semanas. Si se deja avanzar, puede convertirse en periodontitis, que ya no es reversible.",
    },
    {
      id: 3,
      pregunta: "¿Cada cuánto conviene hacerse una limpieza?",
      respuesta:
        "Lo ideal es cada seis meses. Si formás mucho sarro o ya tuviste problemas de encías, te vamos a pedir que vengas cada tres o cuatro meses.",
    },
  ],

  bruxismo: [
    {
      id: 1,
      pregunta: "¿Cómo sé si aprieto o rechino los dientes?",
      respuesta:
        "Las pistas más comunes son despertarte con la mandíbula cansada o con dolor de cabeza, tener dientes desgastados y que alguien te escuche rechinar mientras dormís. En la consulta revisamos el desgaste y los músculos de la mandíbula para confirmarlo.",
    },
    {
      id: 2,
      pregunta: "¿La placa de descarga cura el bruxismo?",
      respuesta:
        "No lo cura, pero protege los dientes del desgaste mientras dormís. Para reducir el bruxismo también conviene trabajar sobre sus causas, como el estrés o los problemas de sueño.",
    },
    {
      id: 3,
      pregunta: "¿Qué pasa si no lo trato?",
      respuesta:
        "Con el tiempo los dientes se desgastan, pueden fracturarse y puede aparecer dolor en la articulación de la mandíbula. Cuanto antes se detecta, más fácil es protegerlos.",
    },
  ],

  "dientes-sensibles": [
    {
      id: 1,
      pregunta: "¿Es normal tener sensibilidad después de una limpieza o un blanqueamiento?",
      respuesta:
        "Sí, puede pasar y suele ser pasajera. Si dura más de lo esperado o te duele mucho, consultanos.",
    },
    {
      id: 2,
      pregunta: "¿Cuándo la sensibilidad es señal de algo más serio?",
      respuesta:
        "Si el dolor sigue mucho rato después del frío o del calor, aparece solo o siempre en el mismo diente, puede haber una caries, una fisura o un problema en el nervio. En ese caso conviene una revisión.",
    },
    {
      id: 3,
      pregunta: "¿Sirven las pastas para dientes sensibles?",
      respuesta:
        "Sí, si se usan todos los días. Pueden tardar algunas semanas en notarse. Si la sensibilidad no mejora, hay que buscar la causa: puede necesitar otro tratamiento.",
    },
  ],

  "dientes-desalineados-apinados": [
    {
      id: 1,
      pregunta: "¿A qué edad conviene consultar por dientes torcidos?",
      respuesta:
        "Lo ideal es una primera evaluación cuando empiezan a salir los dientes permanentes, alrededor de los 6 o 7 años. Pero también se puede consultar en la adolescencia o en la adultez.",
    },
    {
      id: 2,
      pregunta: "¿Los dientes apiñados afectan la salud de la boca?",
      respuesta:
        "Pueden hacerlo. Son más difíciles de limpiar, por eso hay más riesgo de caries, encías inflamadas y mal aliento. También pueden desgastarse de forma despareja.",
    },
    {
      id: 3,
      pregunta: "¿Qué hacen en la consulta?",
      respuesta:
        "Evaluamos los dientes, las encías y la mordida, pedimos radiografías si hacen falta y te explicamos qué alternativas hay según tu caso y tu edad.",
    },
  ],

  "infeccion-dental": [
    {
      id: 1,
      pregunta: "¿Una infección dental puede ser peligrosa?",
      respuesta:
        "Sí. Si no se trata, puede extenderse a la cara, al cuello y a otras partes del cuerpo. Por eso conviene consultar cuanto antes, sobre todo si hay hinchazón o fiebre.",
    },
    {
      id: 2,
      pregunta: "¿Alcanza con tomar antibióticos?",
      respuesta:
        "No. Los antibióticos calman la infección por un tiempo, pero si no se elimina la causa vuelve. Además, deben tomarse solo si los indica un profesional.",
    },
    {
      id: 3,
      pregunta: "¿Qué hago si se me hincha la cara?",
      respuesta:
        "Aplicá frío por fuera y escribinos por WhatsApp para un turno urgente. Si tenés dificultad para respirar o para tragar, o la hinchazón crece rápido, andá a una guardia médica de inmediato.",
    },
  ],
}

export default faqCondiciones
