import { CONTACT_URL, WHATSAPP_URL } from "@/lib/content";

export function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden border-b border-border">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_50%_80%_at_50%_50%,#000_10%,transparent_75%)]" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center lg:px-8">
        <span className="font-mono text-xs tracking-[0.25em] text-muted">
          07 · EMPECEMOS
        </span>
        <h2 className="mx-auto mt-6 max-w-xl text-3xl font-semibold leading-tight text-balance sm:text-4xl">
          Cuéntanos qué tienes. Te decimos qué se puede construir.
        </h2>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          Una llamada, sin costo, para entender tu operación. El diagnóstico
          y la estimación vienen después, hechos a tu medida.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-gradient-to-r from-accent-deep to-accent px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Agendar diagnóstico
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/60"
          >
            Tengo una pregunta
          </a>
        </div>
      </div>
    </section>
  );
}
