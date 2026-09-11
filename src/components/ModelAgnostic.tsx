const MODELS = [
  "Claude",
  "GPT",
  "Gemini",
  "Llama",
  "Mistral",
  "DeepSeek",
];

export function ModelAgnostic() {
  return (
    <section id="model-agnostic" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] text-muted">
            04 · SIN ATARTE A UN PROVEEDOR
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Se conecta con cualquier modelo. Hoy, y el que venga después.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Lo que construimos no depende de un modelo ni de una herramienta
          específica. El modelo se puede cambiar — la base que construimos
          contigo, no.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {MODELS.map((model) => (
            <span
              key={model}
              className="rounded-sm border border-border px-4 py-2 font-mono text-sm text-muted"
            >
              {model}
            </span>
          ))}
          <span className="rounded-sm border border-dashed border-accent/50 px-4 py-2 font-mono text-sm text-accent">
            el modelo open-source que elijas
          </span>
        </div>
      </div>
    </section>
  );
}
