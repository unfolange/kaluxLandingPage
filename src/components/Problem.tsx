const AGENT_ISSUES = [
  "Vive dentro de una herramienta cerrada, no en tus sistemas",
  "Depende de un solo proveedor y de su precio",
  "Automatiza una tarea puntual, no tu operación",
  "Si cambias de herramienta, pierdes lo construido",
  "Se diseña para reemplazar tareas, no para potenciar personas",
];

const INFRA_TRAITS = [
  "Vive dentro de tus propios sistemas y tus propios datos",
  "Funciona con cualquier modelo, sin atarte a uno solo",
  "Es la base para automatizar y aumentar cualquier proceso futuro",
  "Se queda contigo aunque cambies de proveedor de IA",
  "Se diseña para aumentar la productividad de tu equipo",
];

export function Problem() {
  return (
    <section id="problema" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            01 · EL PROBLEMA
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          La industria te vende agentes sueltos. Nadie te está construyendo
          el lugar donde deberían vivir.
        </h2>

        <p className="mt-5 max-w-2xl text-muted leading-relaxed">
          Hoy la mayoría de proveedores de IA te venden herramientas de
          código cerrado, enfocadas en automatizar una tarea aislada. El
          resultado: agentes que no se integran entre sí, no escalan con tu
          operación y te dejan atado a un proveedor específico.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          <div className="bg-background p-8">
            <span className="font-mono text-xs tracking-widest text-muted">
              LO QUE TE VENDEN
            </span>
            <p className="mt-2 text-lg font-medium text-muted line-through decoration-border">
              Un agente aislado
            </p>
            <ul className="mt-6 space-y-4">
              {AGENT_ISSUES.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 h-px w-3 shrink-0 bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background p-8">
            <span className="font-mono text-xs tracking-widest text-accent">
              LO QUE CONSTRUIMOS
            </span>
            <p className="mt-2 text-lg font-medium text-foreground">
              Una capa de infraestructura
            </p>
            <ul className="mt-6 space-y-4">
              {INFRA_TRAITS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/90">
                  <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
