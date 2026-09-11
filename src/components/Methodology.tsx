const PRINCIPLES = [
  {
    tag: "01",
    title: "Fácil de entender",
    body: "Tu información queda organizada de forma clara — no escondida en un sistema que solo una herramienta sabe leer.",
  },
  {
    tag: "02",
    title: "No tocamos lo que ya tienes",
    body: "Se construye al lado de tus sistemas actuales. No movemos tus bases de datos ni reemplazamos lo que ya usas.",
  },
  {
    tag: "03",
    title: "Funciona con cualquier IA",
    body: "No dependemos de un modelo, una herramienta ni un proveedor específico. Si cambias de proveedor, lo que construimos se queda contigo.",
  },
  {
    tag: "04",
    title: "Crece con tu empresa",
    body: "Cada vez que necesitas algo nuevo, lo agregamos a lo que ya existe — no empezamos de cero cada vez.",
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
          así organizamos tu información
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-muted">
        <code>
          <span className="text-foreground">tu-empresa/</span>{"\n"}
          ├── areas/{"\n"}
          │   ├── <span className="text-accent">ventas/</span>{"\n"}
          │   ├── operaciones/{"\n"}
          │   └── finanzas/{"\n"}
          ├── conocimiento/{"\n"}
          │   ├── politicas.md{"\n"}
          │   └── procesos/{"\n"}
          ├── sistemas/{"\n"}
          │   ├── crm{"\n"}
          │   └── erp{"\n"}
          └── <span className="text-accent">ia/</span>
          {"    "}← usa tu información, no la reemplaza
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
            02 · CÓMO LO HACEMOS
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Organizamos tu información para que cualquier IA pueda usarla
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Así construimos esa base: ordenamos la información de tu empresa
          de una forma simple y clara, para que cualquier modelo de IA
          pueda entenderla y usarla — hoy, y a medida que la tecnología
          cambie.
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
