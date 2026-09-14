import Link from "next/link";
import { Logo } from "./Logo";
import { CONTACT_URL, WHATSAPP_URL } from "@/lib/content";

const NAV_LINKS = [
  { href: "#problema", label: "El problema" },
  { href: "#metodologia", label: "Cómo lo hacemos" },
  { href: "#clientes", label: "Para quién es" },
  { href: "#proceso", label: "Proceso" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#top" aria-label="Kaelux, inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-sm border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 sm:inline-flex"
          >
            Tengo una pregunta
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-sm border border-accent/60 bg-accent-deep/10 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent-deep/20"
          >
            Agendar diagnóstico
          </a>
        </div>
      </div>
    </header>
  );
}
