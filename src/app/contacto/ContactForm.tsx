"use client"

import { useState, type FormEvent } from "react"
import { Send } from "lucide-react"

type FormState = "idle" | "sending" | "success" | "error"

type FieldErrors = {
  nombre?: string
  email?: string
  mensaje?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle")
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState("")

  function validar(): FieldErrors {
    const errs: FieldErrors = {}
    if (!nombre.trim()) errs.nombre = "El nombre es obligatorio."
    if (!email.trim()) {
      errs.email = "El email es obligatorio."
    } else if (!EMAIL_REGEX.test(email.trim())) {
      errs.email = "Ingresá un email válido."
    }
    if (!mensaje.trim()) errs.mensaje = "El mensaje es obligatorio."
    return errs
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const errs = validar()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    if (!ENDPOINT) {
      setSubmitError("El formulario no está configurado. Contactanos por WhatsApp o email.")
      setState("error")
      return
    }

    setState("sending")
    setSubmitError("")

    try {
      const body = new URLSearchParams({
        nombre: nombre.trim(),
        email: email.trim(),
        telefono: telefono.trim(),
        mensaje: mensaje.trim(),
      })

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
        redirect: "manual",
      })

      // Formspree returns 302 redirect to /thanks on success
      // With redirect: "manual", response type is "opaqueredirect" or status 302
      if (res.type === "opaqueredirect" || (res.status >= 200 && res.status < 400)) {
        setState("success")
      } else {
        setSubmitError("Ocurrió un error al enviar el mensaje. Intentá de nuevo.")
        setState("error")
      }
    } catch {
      setSubmitError("No se pudo conectar con el servidor. Revisá tu conexión y volvé a intentar.")
      setState("error")
    }
  }

  function reiniciar() {
    setState("idle")
    setNombre("")
    setEmail("")
    setTelefono("")
    setMensaje("")
    setErrors({})
    setSubmitError("")
  }

  if (state === "success") {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-zinc-200 bg-white p-8 text-center">
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="mt-4 text-base font-semibold text-primary">¡Gracias por escribirnos!</p>
          <p className="mt-1 text-sm text-text/70">
            Te vamos a contactar a la brevedad.
          </p>
          <button
            type="button"
            onClick={reiniciar}
            className="mt-6 rounded-lg bg-secondary px-5 py-2 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Enviar otro mensaje
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div>
        <h2 className="font-semibold text-primary">Envianos un mensaje</h2>
        <p className="mt-1 text-sm text-text/70">
          Completá el formulario y te contactamos a la brevedad.
        </p>
      </div>

      {/* Honeypot — invisible para humanos, bots lo completan */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] -top-[9999px] h-0 w-0 opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="contacto-nombre" className="text-sm font-medium text-primary">
          Nombre <span className="text-red-500">*</span>
        </label>
        <input
          id="contacto-nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          className={`mt-1 block w-full rounded-lg border bg-white px-4 py-2.5 text-text placeholder:text-text/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
            errors.nombre ? "border-red-400" : "border-zinc-300"
          }`}
          aria-invalid={!!errors.nombre}
          aria-describedby={errors.nombre ? "error-nombre" : undefined}
        />
        {errors.nombre && (
          <p id="error-nombre" className="mt-1 text-sm text-red-600" role="alert">
            {errors.nombre}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contacto-email" className="text-sm font-medium text-primary">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="contacto-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          className={`mt-1 block w-full rounded-lg border bg-white px-4 py-2.5 text-text placeholder:text-text/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
            errors.email ? "border-red-400" : "border-zinc-300"
          }`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
        />
        {errors.email && (
          <p id="error-email" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contacto-telefono" className="text-sm font-medium text-primary">
          Teléfono
        </label>
        <input
          id="contacto-telefono"
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="(XXX) XXX-XXXX"
          className="mt-1 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-text placeholder:text-text/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        />
      </div>

      <div>
        <label htmlFor="contacto-mensaje" className="text-sm font-medium text-primary">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contacto-mensaje"
          rows={5}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribí tu consulta..."
          className={`mt-1 block w-full resize-y rounded-lg border bg-white px-4 py-2.5 text-text placeholder:text-text/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
            errors.mensaje ? "border-red-400" : "border-zinc-300"
          }`}
          aria-invalid={!!errors.mensaje}
          aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
        />
        {errors.mensaje && (
          <p id="error-mensaje" className="mt-1 text-sm text-red-600" role="alert">
            {errors.mensaje}
          </p>
        )}
      </div>

      {state === "error" && submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-text shadow-sm transition-colors hover:bg-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "sending" ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  )
}
