import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/content";
import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const TITLE = "Kaelux — Infraestructura inteligente para IA";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "infraestructura de IA",
    "implementar IA en empresas",
    "agentes de IA",
    "IA sin proveedor único",
    "arquitectura de datos para IA",
    "IA model-agnostic",
    "consultoría de IA",
    "infraestructura de IA en Latinoamérica",
    "implementar IA en empresas de Latinoamérica",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  // Existe otra empresa no relacionada que también usa el nombre "Kaelux"
  // en el mercado de habla inglesa. Esta propiedad de schema.org existe
  // justamente para este caso: aclarar de qué entidad se trata.
  disambiguatingDescription:
    "Kaelux (kaelux-ai.com) es una consultoría de infraestructura de IA en español, enfocada en empresas de Latinoamérica. No debe confundirse con otras empresas o proyectos que usan el nombre 'Kaelux' en otros mercados o industrias.",
  areaServed: "Latinoamérica",
  email: CONTACT_EMAIL,
  slogan: "No compres agentes. Construye infraestructura.",
  knowsAbout: [
    "Infraestructura de IA",
    "Integración de modelos de lenguaje",
    "Arquitectura de datos empresariales",
    "Claude",
    "GPT",
    "Gemini",
    "Llama",
    "Mistral",
    "DeepSeek",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Infraestructura de IA a medida",
      description:
        "Organización de la información y los sistemas de una empresa para implementar y escalar soluciones de IA sobre su propia infraestructura, con cualquier modelo y sin depender de un proveedor específico.",
      provider: { "@type": "Organization", name: SITE_NAME },
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${exo2.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
