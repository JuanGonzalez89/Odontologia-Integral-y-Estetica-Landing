export const CONTACTO = {
  direccion: "Avellaneda 283 2do Piso, Santiago del Estero",
  telefono: "(385) 310-2988",
  telefonoSchema: "+5493853102988",
  whatsapp: "5493853102988",
  email: "odontologiasgo@gmail.com",
  horarios: {
    dias: "Lunes a viernes",
    manana: "9:00 – 12:30",
    tarde: "17:00 – 20:30",
  },
}

export const WHATSAPP_MENSAJE = "Hola, me gustaría consultar por un turno"

export function whatsappUrl(numero = CONTACTO.whatsapp, mensaje = WHATSAPP_MENSAJE) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}
