# Aviso por WhatsApp al profesional cuando entra un turno

Guía de configuración. El sitio web no participa de este flujo: la reserva
ocurre dentro de turnito, así que el disparador sale de turnito.

## Cómo funciona

```
turnito  →  Google Calendar   →  Make.com    →  WhatsApp Cloud  →  celular
         (1 solo calendario)     (Router:       API (Meta)         del doctor
                                  separa por
                                  profesional)
```

turnito conecta **una sola cuenta de Google para todo el account**, y no permite
asignar un calendario distinto por agenda. Los turnos de los dos profesionales
caen en el mismo calendario, el de `odontologiasgo@gmail.com`.

La separación se hace en Make: el evento que crea turnito trae el nombre del
profesional en el título, así que un Router decide a quién le manda cada aviso.
Cada doctor recibe solo sus turnos.

## Costos

| Pieza | Plan | Costo |
|---|---|---|
| Google Calendar | Cuenta normal | Gratis |
| Make.com | Free — 1000 operaciones/mes | Gratis |
| WhatsApp Cloud API | Número de prueba de Meta | Gratis |

Sale todo en cero, con una contrapartida: para no pasarse de las 1000
operaciones de Make hay que revisar el calendario **cada hora**, así que el
aviso puede demorar hasta ese rato (detalle en 3.4).

Con el número de prueba de Meta no hace falta chip nuevo ni número productivo:
permite hasta **5 destinatarios verificados**, y acá se usan 2.

Limitaciones a tener en cuenta: es un número pensado para desarrollo, Meta
puede aplicarle límites de envío, y los destinatarios hay que cargarlos a mano.
Si en el futuro se necesita algo garantizado a largo plazo, ahí sí conviene
registrar un número propio (y ese número queda inutilizable en la app normal
de WhatsApp).

## Qué datos viajan en el mensaje

El mensaje incluye **nombre del paciente, fecha y hora**, para que los
profesionales tengan la información completa sin entrar a turnito.

Eso implica que el nombre del paciente pasa por Make.com y por Meta, y queda
guardado en el historial de WhatsApp del celular de cada doctor. Es una
decisión tomada a conciencia por el consultorio.

Dos recomendaciones para acotar el alcance sin perder utilidad:

- **No agregar el motivo de consulta ni el servicio.** "Juan Pérez, martes
  15:30" es bastante menos sensible que "Juan Pérez, consulta por absceso
  dental". Si hace falta ese dato, está en turnito.
- **No agregar teléfono ni email del paciente.** Ya están en turnito y en el
  evento del Calendar, que son sistemas con acceso controlado.

---

## Fase 1 — Conectar Google Calendar en turnito

Esto solo ya sirve: desde que queda conectado, el celular avisa con
notificación nativa cada turno nuevo.

1. Entrar a turnito (cuenta `odontologiasgo@gmail.com`).
2. En integraciones, conectar **Google Calendar** con la cuenta
   `odontologiasgo@gmail.com`.
3. Verificar: sacar un turno de prueba desde el sitio y confirmar que aparece
   en el calendario.
4. Compartir ese calendario con el Google de cada doctor, para que les aparezca
   en el celular con notificación nativa.

Anotar qué calendario usa (el principal de la cuenta, o uno aparte que turnito
puede crear). Hace falta para la Fase 3.

### Limitación: un solo calendario para las dos agendas

turnito conecta **una sola cuenta de Google por account**, y no permite asignar
un calendario distinto a cada agenda. Los turnos de Gustavo y de Verónica caen
juntos en el mismo calendario. No hay forma de separarlos ahí.

Dos consecuencias:

- La separación por profesional se resuelve en Make (Fase 3), no en el Calendar.
- Si se comparte ese calendario con los dos doctores, **cada uno va a ver
  también los turnos del otro** en su celular. Los avisos de WhatsApp sí quedan
  separados.

Conviene que la integración cuelgue de `odontologiasgo@gmail.com` y no del Gmail
personal de un doctor: si esa cuenta personal cambia de contraseña o revoca el
acceso, se rompen las notificaciones de los dos.

### Formato del evento que crea turnito

Verificado con una reserva real en la agenda de Verónica.

**Título** (campo *Summary*):

```
Paciente Primero - Doctora Maria Veronica Gonzalez
```

Es decir: `{nombre del paciente} - {Doctor|Doctora} {nombre del profesional}`.

**Descripción**, con campos etiquetados:

```
Agenda: Doctora Maria Veronica Gonzalez
Servicio: Reserva de 30min
Reserva para: Paciente Primero
Teléfono: +543854899617

Mensaje del anfitrión
[el texto de confirmación configurado en turnito]
```

**Ubicación:** `Avellaneda 283`. Además, turnito suma al paciente como invitado
del evento con su email.

#### Dos detalles que importan para la Fase 3

**Los nombres van sin acentos.** turnito escribe `Maria Veronica`, no
`María Verónica`. Un filtro escrito con tilde no va a matchear nunca. Copiar y
pegar del evento real, no escribir a mano.

**Confirmar el título de Gustavo.** El de Verónica lleva el prefijo `Doctora`.
Es de esperar que el de Gustavo sea `Doctor Gustavo German Gonzalez`, pero hay
que verificarlo con una reserva de prueba en su agenda antes de configurar el
filtro.

La descripción es más rica que el título, pero para lo que necesitamos alcanza
con el título. Los campos de la descripción quedan documentados acá por si en
el futuro se quiere agregar el servicio o el teléfono al aviso.

## Fase 2 — WhatsApp Cloud API en Meta

### 2.1 Crear la app

1. Ir a [developers.facebook.com](https://developers.facebook.com) e iniciar
   sesión.
2. **Mis apps → Crear app**. Elegir el tipo orientado a negocio.
3. Dentro de la app, agregar el producto **WhatsApp**.
4. Al agregarlo se crea una cuenta de WhatsApp Business (WABA) y aparece un
   **número de prueba** ya listo.

### Ojo: puede haber más de una cuenta de WhatsApp en el negocio

Si el negocio ya tenía una cuenta de WhatsApp Business configurada por otro
lado (por ejemplo, desde Meta Business Suite directamente), al crear la app en
el paso anterior Meta agrega una **segunda cuenta nueva**, con nombre genérico
**"Test WhatsApp Business Account"**. Las plantillas y el número de prueba que
usa esta guía viven en esa cuenta nueva, no en la que ya existía.

Verificar en **Configuración del negocio → Cuentas → Cuentas de WhatsApp**:
si aparece más de una cuenta en la lista, usar el ID de **"Test WhatsApp
Business Account"** en todo lo que sigue (plantillas, conexión de Make), no
el de la cuenta con el nombre del negocio. Confundir las dos hace que todo
"funcione" sin errores pero con la lista de plantillas siempre vacía — costó
una sesión entera de debugging encontrar esto.

### 2.2 Cargar los destinatarios

En la pantalla de configuración de la API, en la lista de números de
destinatario:

1. Agregar el número de **Gustavo**: `+54 9 385 310 2988`
2. Agregar el número de **Verónica**: `+54 9 385 409 0751`

Cada uno recibe un código por WhatsApp y hay que confirmarlo. Sin este paso el
número de prueba no les puede escribir.

### 2.3 Guardar las credenciales

De esa misma pantalla, anotar:

- **Phone number ID** (el del número de prueba, no el número en sí)
- **WhatsApp Business Account ID (WABA ID)** — de la cuenta **"Test WhatsApp
  Business Account"** (ver el aviso de la sección anterior). Confirmarlo desde
  Configuración del negocio → Cuentas → Cuentas de WhatsApp, no solo copiar lo
  primero que aparezca en la pantalla de la app.
- **Token de acceso**

El token que se muestra ahí es temporal (dura ~24 h) y sirve para probar. Para
que quede funcionando de forma permanente hay que generar un **token de sistema
sin vencimiento** desde la configuración de Meta Business (usuarios de sistema),
con **los dos** permisos:

- `whatsapp_business_messaging` — para enviar los mensajes
- `whatsapp_business_management` — para que Make pueda listar las plantillas

Con solo el primero, Make se conecta sin error pero el selector de plantilla
queda vacío ("No data available") aunque haya plantillas aprobadas — no tira
ningún aviso de que falta el segundo permiso, así que si el dropdown aparece
vacío, es el primer lugar para revisar.

> No pegar estos valores en el repositorio ni en el chat. Van directo en
> Make.com, que los guarda cifrados.

### 2.4 Crear la plantilla del mensaje

Los mensajes automáticos que inicia un negocio deben usar plantillas aprobadas
por Meta. En el **Administrador de WhatsApp → Plantillas de mensajes → Crear**:

- **Categoría:** Utilidad
- **Idioma:** Español
- **Nombre:** `nuevo_turno_profesional`

**Tipo de variable:** `Nombre` (deja el default).
**Muestra de contenido multimedia:** `Ninguna`.
**Título:** vacío, no hace falta.

Cuerpo:

```
Hola {{nombre_doctor}}, tenés un turno nuevo.

Paciente: {{nombre_paciente}}
Fecha: {{fecha}}
Hora: {{hora}} hs.
```

Dos reglas de Meta que no estaban documentadas en la primera versión de esta
guía, y que rechazan la plantilla si no se cumplen:

- **Las variables van con nombre, no con número.** Nada de `{{1}}`, `{{2}}`.
  Tienen que ser minúsculas, con guion bajo, del tipo `{{nombre_doctor}}`.
- **La plantilla no puede empezar ni terminar en una variable.** Por eso el
  cuerpo agrega "hs." después de `{{hora}}` — sin eso, terminaba justo en la
  variable y Meta la rechazaba.

Variables: `nombre_doctor`, `nombre_paciente`, `fecha`, `hora`.

Al terminar de escribir el cuerpo, Meta pide un ejemplo por variable. Usar:
`Gustavo`, `Juan Pérez`, `12/08/2026`, `15:30`.

**Botones:** ninguno por ahora — el confirmar/rechazar queda para más
adelante.

**Período de validez del mensaje:** el default es 10 minutos. Si el celular
del doctor está sin señal justo en ese momento, el aviso se pierde sin
reintento y sin aviso de error. Como los turnos se agendan con anticipación y
no son avisos de último segundo, conviene activar el período personalizado y
ponerlo en el máximo permitido.

La aprobación suele tardar entre unos minutos y 48 h. Hasta que no esté
aprobada, no se puede enviar.

## Fase 3 — Automatización en Make.com

**Un solo escenario**, con un Router que separa por profesional:

```
Watch Events  →  Router  ├─ [filtro: Gustavo]  → WhatsApp a Gustavo
                         └─ [filtro: Veronica] → WhatsApp a Veronica
```

Un escenario en lugar de dos consume la mitad de operaciones, lo que decide si
entra o no en el plan gratuito (ver 3.4).

### 3.1 Trigger

1. Crear cuenta en [make.com](https://make.com) (plan Free).
2. **Create a new scenario**.
3. Primer módulo: **Google Calendar → Watch Events**.
   - Conectar la cuenta `odontologiasgo@gmail.com`.
   - Calendario: el que anotaste en la Fase 1.
   - En "Watch events": elegir la opción por **fecha de creación**, para que
     dispare con turnos nuevos y no con los que se modifican.
   - Límite: 10 por ejecución.
4. Revisar la zona horaria de la organización en Make: tiene que estar en
   Argentina, o las horas van a salir corridas.

### 3.2 Router y filtros

Agregar un módulo **Router** después del trigger, con dos ramas. El filtro de
cada rama va sobre el campo *Summary* (el título del evento):

| Rama | Condición |
|---|---|
| Gustavo | *Summary* — `contains` — `Gustavo` |
| Verónica | *Summary* — `contains` — `Veronica` |

Se filtra por el nombre de pila solo, sin acentos y sin el prefijo
`Doctor`/`Doctora`. Es lo más corto que distingue sin ambigüedad, y así no
depende de confirmar el título exacto de Gustavo.

> **Sin tildes.** turnito escribe `Veronica`, no `Verónica`. Con tilde el filtro
> no matchea nunca y el aviso no sale, sin ningún error visible.

### 3.3 Envío del WhatsApp

En cada rama, un módulo **WhatsApp Business Cloud → Send a Template Message**.
Conectar con el **Phone number ID** y el **token** de la Fase 2.3, y elegir la
plantilla `nuevo_turno_profesional`.

Al elegir la plantilla `nuevo_turno_profesional`, Make va a mostrar un campo por
cada variable **por su nombre** (`nombre_doctor`, `nombre_paciente`, `fecha`,
`hora`), no numerados — así quedó la plantilla en la Fase 2.4.

Rama de Gustavo:

| Variable | Valor |
|---|---|
| Destinatario | número de Gustavo |
| `nombre_doctor` | texto fijo: `Gustavo` |
| `nombre_paciente` | `trim(get(split(Summary; " - "); 1))` |
| `fecha` | `formatDate(Start; DD/MM/YYYY)` |
| `hora` | `formatDate(Start; HH:mm)` |

`Summary` y `Start` no se tipean tal cual: se insertan haciendo clic en esos
campos desde la lista de salida del módulo "Watch Events" (módulo 2), en medio
de la fórmula que sí se tipea a mano.

`first()` no existe como función en Make — para sacar el primer elemento de
una lista generada por `split` se usa `get(lista; 1)` (el índice arranca en 1,
no en 0).

Rama de Verónica: igual, cambiando el destinatario y `nombre_doctor` por
`Verónica` (acá sí con tilde: es texto que lee una persona, no un filtro).

`nombre_paciente`, `fecha` y `hora` son **idénticos en las dos ramas** — se
pueden copiar tal cual.

Después, guardar y **activar** el escenario.

#### Por qué el nombre del paciente se extrae así

El título tiene el formato `{paciente} - {Doctor|Doctora} {profesional}`, así
que `split` por `" - "` y tomar la primera parte devuelve el nombre del
paciente.

Se usa `split` en lugar de quitar el sufijo con `replace` porque no depende del
nombre exacto del profesional — que en el caso de Gustavo todavía no está
confirmado, y que se rompería si algún día se renombra una agenda en turnito.

El `trim` saca espacios sobrantes. Y como el separador es espacio-guion-espacio,
un paciente que se llame `Ana-María` no rompe la extracción.

### 3.4 Frecuencia y operaciones

El plan Free de Make da **1000 operaciones al mes**, y cada chequeo del
calendario consume al menos una:

| Intervalo | Chequeos/mes | ¿Entra en el plan Free? |
|---|---|---|
| 1 hora | ~720 | Sí |
| 30 min | ~1440 | No |
| 15 min | ~2880 | No |

Para quedarse en el plan gratuito hay que configurar el escenario **cada hora**.
El aviso puede tardar hasta ese rato en llegar. Para turnos que se agendan con
días de anticipación no es problema.

Si se quiere más rápido, el plan pago de Make (~9-10 USD/mes) sube a 10.000
operaciones y permite revisar cada minuto.

## Fase 4 — Probar de punta a punta

1. Sacar un turno de prueba desde `odontologiasantiago.com` con la agenda de
   **Gustavo**.
2. Confirmar que aparece en el Google Calendar de `odontologiasgo@gmail.com`.
3. En Make, usar **Run once** para no esperar el intervalo.
4. Confirmar que el WhatsApp llegó **solo al número de Gustavo**, y que los
   cuatro datos son correctos: doctor, paciente, fecha y hora.
5. Repetir con la agenda de **Verónica**, confirmando que llega solo a ella.
6. Borrar los turnos de prueba de las agendas y del calendario.

Qué mirar con atención:

- **Que no llegue cruzado.** Es lo que valida el Router. Si el turno de Gustavo
  le llega a Verónica (o a los dos), revisar los filtros del 3.2.
- **El nombre del paciente completo.** Probar con un nombre de dos nombres y dos
  apellidos para confirmar que no se recorta.
- **La hora.** Si sale corrida, es la zona horaria de Make (paso 3.1.4).
- **Que no dispare con turnos viejos.** Si al activar el escenario llegan avisos
  de turnos ya existentes, el trigger quedó mirando por fecha de modificación en
  lugar de fecha de creación.

## Mantenimiento

- **El token de Meta:** si se usó el temporal, deja de funcionar en ~24 h y los
  mensajes fallan en silencio. Verificar que quedó puesto el token de sistema
  sin vencimiento.
- **Operaciones de Make:** con el intervalo de 1 hora quedan ~720 chequeos
  mensuales sobre 1000 disponibles. El margen es acotado: si se agrega otro
  escenario o se baja el intervalo, se agota y los avisos dejan de salir. Vale
  mirar el consumo en el panel de Make el primer mes.
- **Destinatarios del número de prueba:** si Meta pide reverificar, hay que
  volver a confirmar los códigos.

## Si esto queda corto

Alternativa sin piezas móviles: el plan **Advance de turnito ($24.500/mes,
100 recordatorios de WhatsApp)**. Conviene chequear en el panel si permite
elegir al profesional como destinatario. Sale parecido y no hay nada que
mantener.

Para los botones de **confirmar / rechazar** (postergado): requiere webhook
propio y una forma de escribir la respuesta de vuelta en turnito, que hoy no
expone API pública para eso. El camino es consultarlo a
`desarrollo@turnito.app`, que hacen desarrollo a medida.
