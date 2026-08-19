import casos from "@/lib/casos"
import BeforeAfterSlider from "@/components/BeforeAfterSlider"

export default function CasosAntesDespues() {
  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Antes y después
        </h2>
        <p className="mt-2 max-w-2xl text-text/70">
          Resultados reales de nuestros pacientes. Deslizá para comparar.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {casos.map((caso) => (
            <BeforeAfterSlider
              key={caso.id}
              titulo={caso.titulo}
              before={caso.antes}
              after={caso.despues}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
