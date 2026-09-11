const CONTRASTS = [
  {
    tag: "AUTOMATIZACIÓN",
    body: "Resuelve una tarea puntual, en aislamiento. Es lo que vende el resto de la industria.",
  },
  {
    tag: "AUMENTO",
    body: "Potencia una operación completa, de punta a punta, con el equipo que ya tienes.",
  },
  {
    tag: "NUESTRA APUESTA",
    body: "Infraestructura que hace a tu equipo más capaz — no un headcount más pequeño.",
  },
];

export function Philosophy() {
  return (
    <section className="border-b border-border bg-panel/40">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            03 · NUESTRA POSICIÓN
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>

        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          No construimos para reemplazar personas. Construimos para que
          hagan más.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
          La mayoría de la industria vende IA para automatizar tareas
          sueltas y reducir cabezas. Nuestra metodología está diseñada para
          lo contrario: darle a las personas que ya tienes más contexto,
          menos fricción y menos trabajo manual repetitivo.
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {CONTRASTS.map((c) => (
            <div key={c.tag} className="bg-background px-6 py-8 text-left">
              <span className="font-mono text-xs tracking-widest text-accent">
                {c.tag}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
