import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/content";
import { Logo } from "./Logo";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.1h2.72l.4-3.16h-3.12V7.75c0-.91.25-1.53 1.56-1.53h1.67V3.4c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.16v2.32H7.5v3.16h2.75V21h3.25Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.2 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.2 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.2-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.88-.34-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.2-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo withTagline />

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-muted">
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

        <div className="flex items-center gap-4">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaelux en Facebook"
            className="text-muted transition-colors hover:text-foreground"
          >
            <FacebookIcon />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kaelux en Instagram"
            className="text-muted transition-colors hover:text-foreground"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
        <p>© {new Date().getFullYear()} Kaelux. Infraestructura, no agentes sueltos.</p>
      </div>
    </footer>
  );
}
