const LAYERS = [
  {
    tag: "01",
    title: "Tus sistemas actuales",
    detail: "CRM, ERP, bases de datos, documentos, sistemas internos",
    emphasis: false,
  },
  {
    tag: "02",
    title: "Capa Kaelux",
    detail: "No mueve ni reemplaza lo que ya tienes",
    emphasis: true,
  },
  {
    tag: "03",
    title: "Cualquier modelo o herramienta",
    detail: "Claude, GPT, Gemini, Llama o el que venga después",
    emphasis: false,
  },
];

export function LayerDiagram() {
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        {LAYERS.map((layer, i) => (
          <div key={layer.tag} className="flex flex-col">
            <div
              className={`relative rounded-sm border px-5 py-4 ${
                layer.emphasis
                  ? "border-accent bg-accent-deep/10"
                  : "border-border bg-panel/60"
              }`}
            >
              <span
                className={`font-mono text-[11px] tracking-widest ${
                  layer.emphasis ? "text-accent" : "text-muted"
                }`}
              >
                // {layer.tag}
              </span>
              <p className="mt-1 text-base font-medium text-foreground">
                {layer.title}
              </p>
              <p className="mt-0.5 text-sm text-muted">{layer.detail}</p>
            </div>
            {i < LAYERS.length - 1 && (
              <div className="ml-8 h-6 w-px bg-border" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
