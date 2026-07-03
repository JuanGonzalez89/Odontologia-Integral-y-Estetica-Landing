export default function ServicioLoading() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="h-4 w-32 animate-pulse rounded bg-primary/20" />

      <div className="mt-6 h-8 w-8 animate-pulse rounded bg-primary/20" />

      <div className="mt-4 h-9 w-72 animate-pulse rounded bg-primary/20" />

      <div className="mt-6 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-primary/10" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-primary/10" />
        <div className="h-4 w-4/6 animate-pulse rounded bg-primary/10" />
        <div className="mt-4 h-4 w-full animate-pulse rounded bg-primary/10" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-primary/10" />
      </div>
    </main>
  )
}
