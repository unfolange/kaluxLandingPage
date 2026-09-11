import { CONTACT_URL } from "@/lib/content";
import { LayerDiagram } from "./LayerDiagram";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs tracking-[0.25em] text-muted">
              INFRAESTRUCTURA DE IA · SIN ATARTE A UN PROVEEDOR
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            No compres agentes.
            <br />
            <span className="bg-gradient-to-r from-accent-deep to-accent bg-clip-text text-transparent">
              Construye infraestructura.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Kaelux construye la base que le permite a tu empresa implementar
            y seguir desarrollando soluciones de IA sobre sus propios
            sistemas — sin migrar tus datos y sin quedar atada a un modelo
            o proveedor específico.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-accent-deep to-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Agendar una llamada
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
            >
              Cómo lo hacemos
            </a>
          </div>
        </div>

        <LayerDiagram />
      </div>
    </section>
  );
}
