const PRINCIPLES = [
  {
    tag: "01",
    title: "Contexto interpretable",
    body: "La información vive en estructuras legibles por humanos y por modelos — no en un vector store opaco que solo entiende una herramienta.",
  },
  {
    tag: "02",
    title: "No invasiva",
    body: "Se construye al lado de tu stack actual. No migra tus bases de datos ni reemplaza los sistemas que ya usas.",
  },
  {
    tag: "03",
    title: "Model-agnostic",
    body: "La capa no depende de un LLM, un framework de agentes ni un proveedor específico. Cambias de modelo, la infraestructura queda.",
  },
  {
    tag: "04",
    title: "Extensible por diseño",
    body: "Cada caso de uso nuevo se agrega como una carpeta más dentro de la misma arquitectura — no como un proyecto desde cero.",
  },
];

function FolderTree() {
  return (
    <div className="rounded-sm border border-border bg-panel/80">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 font-mono text-xs text-muted">
          contexto/ — arquitectura ICM
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted">
        <code>
          <span className="text-foreground">empresa-contexto/</span>{"\n"}
          ├── dominio/{"\n"}
          │   ├── <span className="text-accent">ventas/</span>{"\n"}
          │   ├── operaciones/{"\n"}
          │   └── finanzas/{"\n"}
          ├── conocimiento/{"\n"}
          │   ├── politicas.md{"\n"}
          │   └── procesos/{"\n"}
          ├── interfaces/{"\n"}
          │   ├── crm.context{"\n"}
          │   └── erp.context{"\n"}
          └── <span className="text-accent">agentes/</span>
          {"    "}← consumen el contexto, no lo son
        </code>
      </pre>
    </div>
  );
}

export function Methodology() {
  return (
    <section id="metodologia" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            02 · LA METODOLOGÍA
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Interpretable Context Methodology
        </h2>
        <p className="mt-2 font-mono text-xs text-muted">
          ICM, Van Clief et al. — arquitectura agentic basada en estructura
          de contexto
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          ICM es la metodología con la que construimos esa capa: una
          arquitectura de carpetas y contexto interpretable que organiza la
          información de tu empresa para que cualquier modelo o agente pueda
          usarla — hoy y a medida que la tecnología cambie.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="grid gap-8 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.tag}>
                <span className="font-mono text-xs tracking-widest text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <FolderTree />
        </div>
      </div>
    </section>
  );
}
