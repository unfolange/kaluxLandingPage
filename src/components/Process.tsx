const STEPS = [
  {
    tag: "01",
    title: "Llamada inicial",
    body: "Te mostramos cómo trabajamos y escuchamos tu operación, tus sistemas y tus objetivos con IA.",
  },
  {
    tag: "02",
    title: "Diagnóstico",
    body: "Evaluamos tus sistemas y tus datos, y definimos dónde y cómo construir esa base.",
  },
  {
    tag: "03",
    title: "Estimación",
    body: "Tiempo y costo del proyecto, según el tamaño de tu empresa, tus datos y tus objetivos.",
  },
  {
    tag: "04",
    title: "Construcción",
    body: "Implementamos la infraestructura sobre tus sistemas actuales, sin detener tu operación.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="border-b border-border bg-panel/40">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            06 · CÓMO TRABAJAMOS
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Cuatro pasos, desde la primera llamada hasta la infraestructura
          construida.
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.tag} className="relative pl-6">
              <span
                className="absolute left-0 top-1 h-full w-px bg-border"
                aria-hidden="true"
              />
              {i === STEPS.length - 1 ? null : (
                <span
                  className="absolute -right-4 top-1 hidden h-px w-8 bg-border lg:block"
                  aria-hidden="true"
                />
              )}
              <span className="font-mono text-xs tracking-widest text-accent">
                {step.tag}
              </span>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
