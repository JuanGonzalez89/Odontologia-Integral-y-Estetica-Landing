# Aviso por WhatsApp al profesional cuando entra un turno

Guía de configuración. El sitio web no participa de este flujo: la reserva
ocurre dentro de turnito, así que el disparador sale de turnito.

## Cómo funciona

```
turnito  →  Google Calendar  →  Make.com  →  WhatsApp Cloud API  →  celular
         (nativo, gratis)      (detecta      (Meta)                del doctor
                                evento nuevo)
```

Se arma **una automatización por doctor**, cada una mirando el Calendar de ese
doctor y enviando a su número. Así Verónica recibe solo sus turnos y Gustavo
solo los suyos.

## Costos

| Pieza | Plan | Costo |
|---|---|---|
| Google Calendar | Cuenta normal | Gratis |
| Make.com | Free (1000 operaciones/mes) | Gratis |
| WhatsApp Cloud API | Número de prueba de Meta | Gratis |

Con el número de prueba de Meta no hace falta chip nuevo ni número productivo:
permite hasta **5 destinatarios verificados**, y acá se usan 2.

Limitaciones a tener en cuenta: es un número pensado para desarrollo, Meta
puede aplicarle límites de envío, y los destinatarios hay que cargarlos a mano.
Si en el futuro se necesita algo garantizado a largo plazo, ahí sí conviene
registrar un número propio (y ese número queda inutilizable en la app normal
de WhatsApp).

## Decisión de privacidad

**El mensaje no lleva el nombre del paciente.** Son datos de salud y pasarían
por Make.com y por Meta. El nombre queda en turnito y en Google Calendar, que
son los sistemas donde corresponde. El aviso solo dice que hay un turno nuevo,
con fecha y hora — en la práctica cumple la misma función.

---

## Fase 1 — Conectar Google Calendar en turnito

Esto solo ya sirve: desde que queda conectado, el celular avisa con
notificación nativa cada turno nuevo.

1. Entrar a turnito con la cuenta de **Gustavo**.
2. Buscar la sección de integraciones y conectar **Google Calendar** con la
   cuenta de Google de Gustavo.
3. Repetir con la cuenta de **Verónica** y su Google.
4. Verificar: sacar un turno de prueba desde el sitio y confirmar que aparece
   en el Calendar correcto.

Anotar qué calendario usa cada uno (suele ser el principal de la cuenta, pero
turnito puede crear uno aparte tipo "Turnito"). Hace falta para la Fase 3.

## Fase 2 — WhatsApp Cloud API en Meta

### 2.1 Crear la app

1. Ir a [developers.facebook.com](https://developers.facebook.com) e iniciar
   sesión.
2. **Mis apps → Crear app**. Elegir el tipo orientado a negocio.
3. Dentro de la app, agregar el producto **WhatsApp**.
4. Al agregarlo se crea una cuenta de WhatsApp Business (WABA) y aparece un
   **número de prueba** ya listo.

### 2.2 Cargar los destinatarios

En la pantalla de configuración de la API, en la lista de números de
destinatario:

1. Agregar el número de **Gustavo**: `+54 9 385 688 8606`
2. Agregar el número de **Verónica**: `+54 9 385 409 0751`

Cada uno recibe un código por WhatsApp y hay que confirmarlo. Sin este paso el
número de prueba no les puede escribir.

### 2.3 Guardar las credenciales

De esa misma pantalla, anotar:

- **Phone number ID** (el del número de prueba, no el número en sí)
- **Token de acceso**

El token que se muestra ahí es temporal (dura ~24 h) y sirve para probar. Para
que quede funcionando de forma permanente hay que generar un **token de sistema
sin vencimiento** desde la configuración de Meta Business (usuarios de sistema),
con permisos de `whatsapp_business_messaging`.

> No pegar estos valores en el repositorio ni en el chat. Van directo en
> Make.com, que los guarda cifrados.

### 2.4 Crear la plantilla del mensaje

Los mensajes automáticos que inicia un negocio deben usar plantillas aprobadas
por Meta. En el **Administrador de WhatsApp → Plantillas de mensajes → Crear**:

- **Categoría:** Utilidad
- **Idioma:** Español
- **Nombre:** `nuevo_turno_profesional`

Cuerpo:

```
Hola {{1}}, tenés un turno nuevo.

Fecha: {{2}}
Hora: {{3}}

Podés ver los datos del paciente en turnito.
```

Variables: `{{1}}` nombre del doctor, `{{2}}` fecha, `{{3}}` hora.

Al crearla pide ejemplos para cada variable. Usar: `Verónica`, `martes 12/08`,
`15:30`.

La aprobación suele tardar entre unos minutos y 48 h. Hasta que no esté
aprobada, no se puede enviar.

## Fase 3 — Automatización en Make.com

Se crean **dos escenarios idénticos**, uno por doctor. Cada escenario tiene un
trigger (mira un calendario) y una acción (manda el WhatsApp).

### 3.1 Escenario de Gustavo

1. Crear cuenta en [make.com](https://make.com) (plan Free).
2. **Create a new scenario**.
3. Primer módulo: **Google Calendar → Watch Events**.
   - Conectar la cuenta de Google de Gustavo.
   - Calendario: el que anotaste en la Fase 1.
   - En "Watch events": elegir la opción por **fecha de creación**, para que
     dispare con turnos nuevos y no con los que se modifican.
   - Límite: 10 por ejecución.
4. Segundo módulo: **WhatsApp Business Cloud → Send a Template Message**.
   - Conectar con el **Phone number ID** y el **token** de la Fase 2.3.
   - Destinatario: el número de Gustavo.
   - Plantilla: `nuevo_turno_profesional`.
   - Variables:
     - `{{1}}` → texto fijo: `Gustavo`
     - `{{2}}` → fecha de inicio del evento, formateada
     - `{{3}}` → hora de inicio del evento, formateada

   Para formatear, usar las funciones de fecha de Make sobre el campo de
   inicio del evento. Fecha: `formatDate(start; DD/MM/YYYY)`. Hora:
   `formatDate(start; HH:mm)`.

   Verificar que la zona horaria de la organización en Make esté en
   Argentina, o las horas van a salir corridas.

5. Guardar y **activar** el escenario.

### 3.2 Escenario de Verónica

Igual al anterior, cambiando:

- La cuenta/calendario de Google por los de Verónica
- El número de destinatario
- La variable `{{1}}` por `Verónica`

### 3.3 Frecuencia

En el plan Free, Make revisa cada **15 minutos** como mínimo. O sea que el
aviso puede llegar hasta 15 minutos después de la reserva. Para un turno
odontológico agendado con días de anticipación no molesta; si se quisiera
casi instantáneo, hay que pasar a un plan pago de Make.

## Fase 4 — Probar de punta a punta

1. Sacar un turno de prueba desde `odontologiasantiago.com` con la agenda de
   Gustavo.
2. Confirmar que aparece en su Google Calendar.
3. En Make, usar **Run once** en el escenario para no esperar los 15 min.
4. Confirmar que llega el WhatsApp con la fecha y hora correctas.
5. Repetir con Verónica.
6. Borrar los turnos de prueba de las agendas.

## Mantenimiento

- **El token de Meta:** si se usó el temporal, deja de funcionar en ~24 h y los
  mensajes fallan en silencio. Verificar que quedó puesto el token de sistema
  sin vencimiento.
- **Operaciones de Make:** cada chequeo consume operaciones. Con revisión cada
  15 min son ~2900 chequeos al mes por escenario, lo que puede superar las 1000
  operaciones del plan Free con dos escenarios. Si se agota, subir el intervalo
  a 30 o 60 minutos, o pasar a plan pago.
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
