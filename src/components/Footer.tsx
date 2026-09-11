import { CONTACT_EMAIL } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo withTagline />

        <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
          <a href="#problema" className="hover:text-foreground">
            El problema
          </a>
          <a href="#metodologia" className="hover:text-foreground">
            Cómo lo hacemos
          </a>
          <a href="#clientes" className="hover:text-foreground">
            Para quién es
          </a>
          <a href="#proceso" className="hover:text-foreground">
            Proceso
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
        </nav>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} Kaelux. Infraestructura, no agentes sueltos.</p>
      </div>
    </footer>
  );
}
