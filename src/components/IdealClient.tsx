const CRITERIA = [
  {
    tag: "01",
    title: "Operación digitalizada",
    body: "Ya trabajan con CRM, ERP, bases de datos u otros sistemas propios — no parten de cero.",
  },
  {
    tag: "02",
    title: "Volumen de datos real",
    body: "Generan o almacenan información suficiente como para que valga la pena estructurarla.",
  },
  {
    tag: "03",
    title: "No saben por dónde empezar",
    body: "Quieren implementar IA pero no tienen claro cómo organizar su data ni qué proveedor elegir.",
  },
  {
    tag: "04",
    title: "No quieren lock-in",
    body: "Prefieren no atarse a una sola herramienta, modelo o proveedor de IA.",
  },
];

export function IdealClient() {
  return (
    <section id="clientes" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            05 · PARA QUIÉN ES
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          No filtramos por industria ni tamaño. Filtramos por esto.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Trabajamos con cualquier empresa que quiera implementar IA en
          serio — pyme, corporativo o banco. Lo que importa no es el sector,
          es qué tan lista está tu operación para construir sobre ella.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {CRITERIA.map((c) => (
            <div key={c.tag} className="flex gap-5">
              <span className="font-mono text-xs tracking-widest text-accent">
                {c.tag}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
